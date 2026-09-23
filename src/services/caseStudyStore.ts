import { InteractiveCaseStudy } from '../types';
import { INITIAL_CASE_STUDIES } from '../data/initialCaseStudies';

const LOCAL_STORAGE_KEY = 'yp_case_studies_store_v1';
const DECK_BLOBS_DB_NAME = 'yp_portfolio_decks_db';
const DECK_BLOBS_STORE = 'decks';

// Open or create IndexedDB for large presentation files (up to 100MB+ in browser)
function openDecksDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB not supported'));
    }
    const req = indexedDB.open(DECK_BLOBS_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DECK_BLOBS_STORE)) {
        db.createObjectStore(DECK_BLOBS_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Store a large base64/blob deck in IndexedDB
export async function storeLocalDeckBlob(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDecksDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DECK_BLOBS_STORE, 'readwrite');
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
    const db = await openDecksDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DECK_BLOBS_STORE, 'readonly');
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
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
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
    // Avoid saving enormous base64 strings directly in localStorage JSON to prevent exceeding 5MB quota
    const sanitized = studies.map((s) => {
      if (s.deckPdfUrl && s.deckPdfUrl.startsWith('data:')) {
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

// Load all case studies with smart server + client fallback
export async function fetchAllCaseStudies(): Promise<InteractiveCaseStudy[]> {
  try {
    const res = await fetch('/api/case-studies');
    if (res.ok) {
      const text = await res.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        // Returned HTML (e.g. 404 from Vercel static routing)
        throw new Error('Non-JSON response');
      }

      if (data.success && Array.isArray(data.caseStudies)) {
        // Fetch full details if needed
        const fullPromises = data.caseStudies.map(async (item: InteractiveCaseStudy) => {
          try {
            const detailRes = await fetch(`/api/case-studies/${item.id}`);
            if (detailRes.ok) {
              const detailData = await detailRes.json();
              return detailData.caseStudy || item;
            }
          } catch {}
          return item;
        });
        const serverStudies = await Promise.all(fullPromises);
        saveLocalStudies(serverStudies);
        return serverStudies;
      }
    }
  } catch (e) {
    console.log('[Storage] Backend not reachable or static host (Vercel), using local storage & seed data:', e);
  }

  // Fallback to local storage or initial seeded data
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

// Upload file with seamless server-or-client fallback (no 404 crashes on Vercel)
export interface UploadFileResult {
  success: boolean;
  url: string;
  fileName: string;
  storage: 'server' | 'browser_local';
  isVercelStatic?: boolean;
}

export async function uploadPresentationDeck(
  file: File,
  token: string,
  onProgress?: (status: string) => void
): Promise<UploadFileResult> {
  const sizeMb = file.size / (1024 * 1024);

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error(`Could not read "${file.name}" from your device.`));
    };

    reader.onload = async () => {
      try {
        const dataUrl = reader.result as string;
        if (!dataUrl) {
          throw new Error('Empty file content');
        }

        onProgress?.(`Uploading ${file.name} (${sizeMb.toFixed(1)}MB)...`);

        let serverUrl = '';
        let isServerSuccess = false;

        // Try server upload first
        try {
          const res = await fetch('/api/admin/upload-slide', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-admin-key': token.trim() || 'yash6010'
            },
            body: JSON.stringify({
              dataUrl,
              fileName: file.name
            })
          });

          if (res.ok) {
            const text = await res.text();
            try {
              const data = JSON.parse(text);
              if (data.success && data.url) {
                serverUrl = data.url;
                isServerSuccess = true;
              }
            } catch {
              // Serverless returned non-JSON (e.g. 404 HTML on Vercel)
            }
          }
        } catch (serverErr) {
          console.warn('[Upload] Server endpoint unreachable, falling back to local browser storage:', serverErr);
        }

        if (isServerSuccess && serverUrl) {
          resolve({
            success: true,
            url: serverUrl,
            fileName: file.name,
            storage: 'server'
          });
          return;
        }

        // GRACEFUL CLIENT-SIDE FALLBACK (e.g. on Vercel static deployments)
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

// Save or update case study
export async function persistCaseStudy(
  payload: any,
  isEditingId?: string,
  token: string = 'yash6010'
): Promise<{ success: boolean; caseStudy: InteractiveCaseStudy }> {
  let savedOnServer = false;
  let returnedStudy: InteractiveCaseStudy | null = null;

  try {
    const url = isEditingId
      ? `/api/admin/case-studies/${isEditingId}`
      : '/api/admin/case-studies';
    const method = isEditingId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': token.trim() || 'yash6010'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        if (data.success && data.caseStudy) {
          savedOnServer = true;
          returnedStudy = data.caseStudy;
        }
      } catch {}
    }
  } catch (e) {
    console.log('[Storage] Backend not reachable, persisting to client storage:', e);
  }

  // Also synchronize to local storage so it works regardless of hosting environment
  const currentList = getLocalSavedStudies();
  let studyToPersist: InteractiveCaseStudy;

  if (returnedStudy) {
    studyToPersist = returnedStudy;
  } else {
    studyToPersist = {
      ...payload,
      id: isEditingId || `cs-custom-${Date.now()}`
    };
  }

  const existingIndex = currentList.findIndex((cs) => cs.id === studyToPersist.id);
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

// Delete case study
export async function removeCaseStudy(
  id: string,
  token: string = 'yash6010'
): Promise<boolean> {
  try {
    await fetch(`/api/admin/case-studies/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': token.trim() || 'yash6010' }
    });
  } catch (e) {
    console.log('[Storage] Backend DELETE failed, removing locally:', e);
  }

  const currentList = getLocalSavedStudies();
  const filtered = currentList.filter((cs) => cs.id !== id);
  saveLocalStudies(filtered);
  return true;
}
