import { collection, doc, getDocs, setDoc, deleteDoc, onSnapshot, writeBatch } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { InteractiveCaseStudy } from '../types';
import { INITIAL_CASE_STUDIES } from '../data/initialCaseStudies';

const LOCAL_STORAGE_KEY = 'yp_case_studies_store_v1';
const DECK_BLOBS_DB_NAME = 'yp_portfolio_decks_db';
const DECK_BLOBS_STORE = 'decks';
const FIRESTORE_COLLECTION = 'caseStudies';

// Helper to remove any undefined fields before writing to Firestore
function sanitizeForFirestore(obj: any): any {
  return JSON.parse(JSON.stringify(obj, (_, v) => (v === undefined ? null : v)));
}

// Open or create IndexedDB for large local files
function openDecksDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB not supported'));
    }
    const req = indexedDB.open(DECK_BLOBS_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const d = req.result;
      if (!d.objectStoreNames.contains(DECK_BLOBS_STORE)) {
        d.createObjectStore(DECK_BLOBS_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Store local deck blob in IndexedDB
export async function storeLocalDeckBlob(key: string, dataUrl: string): Promise<void> {
  try {
    const d = await openDecksDB();
    return new Promise((resolve, reject) => {
      const tx = d.transaction(DECK_BLOBS_STORE, 'readwrite');
      tx.objectStore(DECK_BLOBS_STORE).put(dataUrl, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.warn('[Storage] IndexedDB put failed:', e);
  }
}

// Retrieve deck blob from IndexedDB
export async function getLocalDeckBlob(key: string): Promise<string | null> {
  try {
    const d = await openDecksDB();
    return new Promise((resolve, reject) => {
      const tx = d.transaction(DECK_BLOBS_STORE, 'readonly');
      const req = tx.objectStore(DECK_BLOBS_STORE).get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.warn('[Storage] IndexedDB get failed:', e);
    return null;
  }
}

// Get local override studies from localStorage
export function getLocalSavedStudies(): InteractiveCaseStudy[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed: InteractiveCaseStudy[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const parsedMap = new Map(parsed.map((p) => [p.id, p]));

        const merged: InteractiveCaseStudy[] = INITIAL_CASE_STUDIES.map((seed) => {
          const cached = parsedMap.get(seed.id);
          if (cached) {
            return {
              ...seed,
              ...cached,
              deckPdfUrl: cached.deckPdfUrl || seed.deckPdfUrl,
              deckSlides: (cached.deckSlides && cached.deckSlides.length > 0) ? cached.deckSlides : seed.deckSlides,
              slides: (cached.slides && cached.slides.length > 0) ? cached.slides : seed.slides,
              keyMetrics: (cached.keyMetrics && cached.keyMetrics.length > 0) ? cached.keyMetrics : seed.keyMetrics,
            };
          }
          return seed;
        });

        const seedIds = new Set(INITIAL_CASE_STUDIES.map((s) => s.id));
        parsed.forEach((item) => {
          if (!seedIds.has(item.id)) {
            merged.push(item);
          }
        });

        return merged;
      }
    }
  } catch (e) {
    console.warn('[Storage] Error reading local studies:', e);
  }
  return [...INITIAL_CASE_STUDIES];
}

// Save studies to localStorage
export function saveLocalStudies(studies: InteractiveCaseStudy[]): void {
  try {
    const sanitized = studies.map((s) => {
      if (s.deckPdfUrl && s.deckPdfUrl.startsWith('data:') && s.deckPdfUrl.length > 100000) {
        const deckKey = `deck_${s.id}`;
        storeLocalDeckBlob(deckKey, s.deckPdfUrl);
        return { ...s, deckPdfUrl: `indexeddb:${deckKey}` };
      }
      return s;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sanitized));
  } catch (e) {
    console.warn('[Storage] Error saving local studies:', e);
  }
}

// Resolve any indexeddb: references into usable dataUrls for viewing
export async function resolveDeckUrl(url?: string): Promise<string> {
  if (!url) return '';
  if (url.startsWith('indexeddb:')) {
    const key = url.replace('indexeddb:', '');
    const blobData = await getLocalDeckBlob(key);
    if (blobData) return blobData;
  }
  return url;
}

// Seed initial case studies into Firestore if the cloud collection is empty
export async function seedInitialCaseStudiesIfEmpty(): Promise<void> {
  try {
    const coll = collection(db, FIRESTORE_COLLECTION);
    const snap = await getDocs(coll);
    if (snap.empty) {
      console.log('[Firestore] Empty collection detected. Seeding cloud database with initial case studies...');
      const batch = writeBatch(db);
      for (const study of INITIAL_CASE_STUDIES) {
        const docRef = doc(db, FIRESTORE_COLLECTION, study.id);
        batch.set(docRef, sanitizeForFirestore(study));
      }
      await batch.commit();
      console.log('[Firestore] Cloud database initialized successfully.');
    }
  } catch (err) {
    console.warn('[Firestore] Seed check skipped or failed:', err);
  }
}

// Sort studies in stable order (seed order first, then recently updated)
function sortStudies(studies: InteractiveCaseStudy[]): InteractiveCaseStudy[] {
  const seedOrderMap = new Map(INITIAL_CASE_STUDIES.map((s, idx) => [s.id, idx]));
  return [...studies].sort((a, b) => {
    const orderA = seedOrderMap.has(a.id) ? seedOrderMap.get(a.id)! : 999;
    const orderB = seedOrderMap.has(b.id) ? seedOrderMap.get(b.id)! : 999;
    if (orderA !== orderB) return orderA - orderB;
    return (b.updatedAt || '').localeCompare(a.updatedAt || '');
  });
}

// Subscribe to real-time updates from Firestore (updates LIVE across all users)
export function subscribeToCaseStudies(
  onUpdate: (studies: InteractiveCaseStudy[]) => void,
  onError?: (error: any) => void
): () => void {
  try {
    const coll = collection(db, FIRESTORE_COLLECTION);

    // Ensure seed data is in cloud
    seedInitialCaseStudiesIfEmpty().catch(() => {});

    const unsubscribe = onSnapshot(
      coll,
      (snapshot) => {
        if (snapshot.empty) {
          onUpdate(getLocalSavedStudies());
          return;
        }

        const studies: InteractiveCaseStudy[] = [];
        snapshot.forEach((d) => {
          studies.push(d.data() as InteractiveCaseStudy);
        });

        const sorted = sortStudies(studies);
        saveLocalStudies(sorted);
        onUpdate(sorted);
      },
      (err) => {
        console.warn('[Firestore] Snapshot listener error, using local fallback:', err);
        onError?.(err);
        onUpdate(getLocalSavedStudies());
      }
    );

    return unsubscribe;
  } catch (err) {
    console.warn('[Firestore] Subscription setup failed, using local fallback:', err);
    onUpdate(getLocalSavedStudies());
    return () => {};
  }
}

// Load all case studies with Cloud Firestore priority + local fallback
export async function fetchAllCaseStudies(): Promise<InteractiveCaseStudy[]> {
  // 1. Fetch from Cloud Firestore
  try {
    const coll = collection(db, FIRESTORE_COLLECTION);
    const snap = await getDocs(coll);
    if (!snap.empty) {
      const studies: InteractiveCaseStudy[] = [];
      snap.forEach((d) => {
        studies.push(d.data() as InteractiveCaseStudy);
      });
      const sorted = sortStudies(studies);
      saveLocalStudies(sorted);
      return sorted;
    } else {
      await seedInitialCaseStudiesIfEmpty();
    }
  } catch (cloudErr) {
    console.warn('[Firestore] Cloud fetch failed, checking fallbacks:', cloudErr);
  }

  // 2. Node server API fallback
  try {
    const res = await fetch('/api/case-studies');
    if (res.ok) {
      const text = await res.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error('Non-JSON response');
      }

      if (data.success && Array.isArray(data.caseStudies) && data.caseStudies.length > 0) {
        saveLocalStudies(data.caseStudies);
        return data.caseStudies;
      }
    }
  } catch {}

  // 3. Local storage fallback
  const localList = getLocalSavedStudies();
  const resolved = await Promise.all(
    localList.map(async (cs) => {
      if (cs.deckPdfUrl?.startsWith('indexeddb:')) {
        const fullUrl = await resolveDeckUrl(cs.deckPdfUrl);
        return { ...cs, deckPdfUrl: fullUrl };
      }
      return cs;
    })
  );
  return resolved;
}

// Upload presentation deck
export async function uploadPresentationDeck(
  file: File,
  token: string = 'yash6010',
  onProgress?: (status: string) => void
): Promise<{
  success: boolean;
  url: string;
  fileName: string;
  storage?: 'server' | 'browser_local' | 'cloud';
  isVercelStatic?: boolean;
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const pct = Math.round((e.loaded / e.total) * 100);
        onProgress?.(`Reading file: ${pct}%`);
      }
    };

    reader.onerror = () => reject(new Error('Failed to read file from disk'));

    reader.onload = async () => {
      try {
        const dataUrl = reader.result as string;

        // Try server-side storage if available
        let serverUrl: string | null = null;
        let isServerSuccess = false;

        try {
          onProgress?.('Uploading to server storage...');
          const res = await fetch('/api/admin/upload-deck', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-admin-key': token.trim() || 'yash6010'
            },
            body: JSON.stringify({
              fileName: file.name,
              fileData: dataUrl
            })
          });

          if (res.ok) {
            const text = await res.text();
            try {
              const data = JSON.parse(text);
              if (data.success && data.fileUrl) {
                serverUrl = data.fileUrl;
                isServerSuccess = true;
              }
            } catch {}
          }
        } catch {}

        if (isServerSuccess && serverUrl) {
          resolve({
            success: true,
            url: serverUrl,
            fileName: file.name,
            storage: 'server'
          });
          return;
        }

        // Local browser storage fallback for large files
        onProgress?.('Saving to local presentation store...');
        const uniqueKey = `deck_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9]/g, '_')}`;
        await storeLocalDeckBlob(uniqueKey, dataUrl);

        resolve({
          success: true,
          url: dataUrl,
          fileName: file.name,
          storage: 'browser_local',
          isVercelStatic: true
        });
      } catch (err: any) {
        reject(err);
      }
    };

    reader.readAsDataURL(file);
  });
}

// Save or update case study in real time across Cloud Firestore + local
export async function persistCaseStudy(
  payload: any,
  isEditingId?: string,
  token: string = 'yash6010'
): Promise<{ success: boolean; caseStudy: InteractiveCaseStudy }> {
  const id = isEditingId || payload.id || `cs-custom-${Date.now()}`;
  const now = new Date().toISOString();

  const studyToPersist: InteractiveCaseStudy = {
    ...payload,
    id,
    updatedAt: now,
    slidesCount: payload.slidesCount || payload.deckSlides?.length || payload.slides?.length || (payload.deckPdfUrl ? 1 : 0)
  };

  // 1. Direct Cloud Firestore Write (Updates instantly for all visitors worldwide)
  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, id);
    const cloudPayload = { ...studyToPersist };

    // If deckPdfUrl is an ultra-large base64 (>500KB), store locally and keep clean reference
    if (cloudPayload.deckPdfUrl && cloudPayload.deckPdfUrl.startsWith('data:') && cloudPayload.deckPdfUrl.length > 500000) {
      const deckKey = `deck_${id}`;
      await storeLocalDeckBlob(deckKey, cloudPayload.deckPdfUrl);
      cloudPayload.deckPdfUrl = `indexeddb:${deckKey}`;
    }

    await setDoc(docRef, sanitizeForFirestore(cloudPayload), { merge: true });
    console.log('[Firestore] Persisted study to cloud database:', id);
  } catch (firestoreErr) {
    console.warn('[Firestore] Direct write failed, continuing with local sync:', firestoreErr);
  }

  // 2. Also notify Node backend if running full-stack
  try {
    const url = isEditingId ? `/api/admin/case-studies/${isEditingId}` : '/api/admin/case-studies';
    const method = isEditingId ? 'PUT' : 'POST';
    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': token.trim() || 'yash6010'
      },
      body: JSON.stringify(studyToPersist)
    }).catch(() => {});
  } catch {}

  // 3. Sync local storage
  const currentList = getLocalSavedStudies();
  const existingIndex = currentList.findIndex((cs) => cs.id === id);
  let updatedList: InteractiveCaseStudy[];
  if (existingIndex >= 0) {
    updatedList = [...currentList];
    updatedList[existingIndex] = studyToPersist;
  } else {
    updatedList = [studyToPersist, ...currentList];
  }
  saveLocalStudies(updatedList);

  return {
    success: true,
    caseStudy: studyToPersist
  };
}

// Delete case study in real time across Cloud Firestore + local
export async function removeCaseStudy(
  id: string,
  token: string = 'yash6010'
): Promise<boolean> {
  // 1. Cloud Firestore Delete (Deletes instantly for all visitors worldwide)
  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, id);
    await deleteDoc(docRef);
    console.log('[Firestore] Deleted study from cloud database:', id);
  } catch (firestoreErr) {
    console.warn('[Firestore] Cloud delete failed, continuing with local cleanup:', firestoreErr);
  }

  // 2. Notify Node backend if running full-stack
  try {
    await fetch(`/api/admin/case-studies/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': token.trim() || 'yash6010' }
    }).catch(() => {});
  } catch {}

  // 3. Remove from local storage
  const currentList = getLocalSavedStudies();
  const filtered = currentList.filter((cs) => cs.id !== id);
  saveLocalStudies(filtered);

  return true;
}
