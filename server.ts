import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { INITIAL_CASE_STUDIES } from './server/initial-data';
import { InteractiveCaseStudy } from './src/types';

const app = express();
const PORT = 3000;
const ADMIN_SECRET = 'yash6010';
const VALID_PASSKEYS = new Set([
  'yash6010',
  process.env.ADMIN_SECRET_KEY,
  'yash2026',
  'yp_growth_2026'
].filter(Boolean) as string[]);

function isValidAdminKey(key?: string): boolean {
  if (!key) return false;
  const clean = key.trim();
  return clean === 'yash6010' || VALID_PASSKEYS.has(clean);
}

// Persistent data directory
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'case-studies.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// In-memory cache synced with disk
let caseStudies: InteractiveCaseStudy[] = [];

function loadCaseStudies(): void {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      caseStudies = JSON.parse(raw);
      console.log(`[Storage] Loaded ${caseStudies.length} case studies from ${DATA_FILE}`);
    } else {
      caseStudies = [...INITIAL_CASE_STUDIES];
      fs.writeFileSync(DATA_FILE, JSON.stringify(caseStudies, null, 2), 'utf-8');
      console.log(`[Storage] Initialized ${DATA_FILE} with ${caseStudies.length} seed case studies`);
    }
  } catch (err) {
    console.error('[Storage] Error loading case studies, falling back to seed:', err);
    caseStudies = [...INITIAL_CASE_STUDIES];
  }
}

function saveCaseStudies(): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(caseStudies, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Storage] Failed to persist case studies to disk:', err);
  }
}

loadCaseStudies();

// Express body parsers (support up to 50MB for large PDF/PPT presentation uploads)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads serving
app.use('/uploads', express.static(UPLOADS_DIR));

// Admin authentication middleware
function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const headerKey = req.headers['x-admin-key'] as string;
  const authHeader = req.headers['authorization'];
  let bearerToken = '';
  if (authHeader && authHeader.startsWith('Bearer ')) {
    bearerToken = authHeader.substring(7);
  }

  const providedKey = headerKey || bearerToken;
  if (!isValidAdminKey(providedKey)) {
    res.status(401).json({
      error: 'Unauthorized: Valid admin secret key required to perform this action.',
      authenticated: false
    });
    return;
  }
  next();
}

// -------------------------------------------------------------
// PUBLIC API ROUTES
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    version: '2.0.0',
    caseStudiesCount: caseStudies.length,
    timestamp: new Date().toISOString()
  });
});

// GET /api/case-studies: Get list of case studies (filter by format, category, availability)
app.get('/api/case-studies', (req: Request, res: Response) => {
  const { format, category, availability } = req.query;
  const headerKey = req.headers['x-admin-key'] as string;
  const isAdmin = isValidAdminKey(headerKey);

  let results = [...caseStudies];

  // If not admin, hide draft items (available and coming_soon are visible)
  if (!isAdmin) {
    results = results.filter((cs) => cs.availability !== 'draft');
  }

  if (format && typeof format === 'string' && format !== 'all') {
    results = results.filter((cs) => cs.format === format);
  }

  if (category && typeof category === 'string' && category !== 'All') {
    results = results.filter((cs) => cs.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (availability && typeof availability === 'string' && availability !== 'all') {
    results = results.filter((cs) => cs.availability === availability);
  }

  res.json({
    success: true,
    total: results.length,
    caseStudies: results.map((cs) => ({
      id: cs.id,
      slug: cs.slug,
      title: cs.title,
      subtitle: cs.subtitle,
      company: cs.company,
      companyLogo: cs.companyLogo,
      format: cs.format,
      availability: cs.availability,
      accentColor: cs.accentColor,
      readingTimeMinutes: cs.readingTimeMinutes,
      slidesCount: cs.format === 'interactive_comic' ? (cs.slides?.length || cs.slidesCount) : (cs.deckSlides?.length || cs.slidesCount),
      publishedAt: cs.publishedAt,
      category: cs.category,
      tags: cs.tags,
      keyMetrics: cs.keyMetrics,
      principlesCovered: cs.principlesCovered,
      executiveSummary: cs.executiveSummary,
      authorRole: cs.authorRole,
      hasDeckPdf: Boolean(cs.deckPdfUrl)
    }))
  });
});

// GET /api/case-studies/:id: Get full case study by ID or slug
app.get('/api/case-studies/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const cs = caseStudies.find((item) => item.id === id || item.slug === id);

  if (!cs) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }

  res.json({
    success: true,
    caseStudy: cs
  });
});

// -------------------------------------------------------------
// ADMIN API ROUTES (PROTECTED)
// -------------------------------------------------------------

// POST /api/admin/login: Authenticate Yash's admin passkey
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { passcode } = req.body;
  const cleanPasscode = typeof passcode === 'string' ? passcode.trim() : '';
  if (!cleanPasscode) {
    res.status(400).json({ error: 'Passcode is required', authenticated: false });
    return;
  }

  if (isValidAdminKey(cleanPasscode)) {
    res.json({
      success: true,
      authenticated: true,
      message: 'Admin access granted to Creator Studio',
      token: cleanPasscode,
      user: {
        name: 'Yash Patil',
        role: 'Author & Curator'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      authenticated: false,
      error: 'Incorrect author passcode. Please enter the correct password.'
    });
  }
});

// POST /api/admin/verify: Verify admin token validity
app.post('/api/admin/verify', requireAdmin, (req: Request, res: Response) => {
  res.json({
    success: true,
    authenticated: true,
    user: {
      name: 'Yash Patil',
      role: 'Author & Curator'
    }
  });
});

// POST /api/admin/case-studies: Create a new interactive case study or deck
app.post('/api/admin/case-studies', requireAdmin, (req: Request, res: Response) => {
  const newStudy = req.body as Partial<InteractiveCaseStudy>;

  if (!newStudy.title || !newStudy.company) {
    res.status(400).json({ error: 'Title and company are required fields.' });
    return;
  }

  const id = newStudy.id || `cs-${Date.now()}`;
  const slug = newStudy.slug || newStudy.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const completeStudy: InteractiveCaseStudy = {
    id,
    slug,
    title: newStudy.title,
    subtitle: newStudy.subtitle || '',
    company: newStudy.company,
    companyLogo: newStudy.companyLogo || '⚡',
    format: newStudy.format || 'interactive_comic',
    availability: newStudy.availability || 'available',
    accentColor: newStudy.accentColor || '#E05338',
    readingTimeMinutes: Number(newStudy.readingTimeMinutes) || 5,
    slidesCount: newStudy.format === 'interactive_comic' ? (newStudy.slides?.length || 0) : (newStudy.deckSlides?.length || 0),
    publishedAt: newStudy.publishedAt || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    category: newStudy.category || 'Product Teardowns',
    tags: newStudy.tags || ['Growth Design', 'Case Study'],
    keyMetrics: newStudy.keyMetrics || [],
    principlesCovered: newStudy.principlesCovered || [],
    executiveSummary: newStudy.executiveSummary || '',
    authorRole: newStudy.authorRole || 'Product Lead & Researcher',
    slides: newStudy.slides || [],
    deckSlides: newStudy.deckSlides || [],
    deckPdfUrl: newStudy.deckPdfUrl,
    downloadDeckUrl: newStudy.downloadDeckUrl
  };

  caseStudies.unshift(completeStudy);
  saveCaseStudies();

  console.log(`[Admin] Created case study "${completeStudy.title}" (${completeStudy.id})`);
  res.status(201).json({
    success: true,
    message: 'Case study published successfully!',
    caseStudy: completeStudy
  });
});

// PUT /api/admin/case-studies/:id: Update existing case study or toggle availability
app.put('/api/admin/case-studies/:id', requireAdmin, (req: Request, res: Response) => {
  const { id } = req.params;
  const index = caseStudies.findIndex((cs) => cs.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }

  const updatedData = req.body as Partial<InteractiveCaseStudy>;
  const current = caseStudies[index];

  const merged: InteractiveCaseStudy = {
    ...current,
    ...updatedData,
    id: current.id, // Immutable ID
    slidesCount: (updatedData.format || current.format) === 'interactive_comic'
      ? (updatedData.slides?.length ?? current.slides?.length ?? current.slidesCount)
      : (updatedData.deckSlides?.length ?? current.deckSlides?.length ?? current.slidesCount)
  };

  caseStudies[index] = merged;
  saveCaseStudies();

  console.log(`[Admin] Updated case study "${merged.title}" (${merged.id})`);
  res.json({
    success: true,
    message: 'Case study updated successfully!',
    caseStudy: merged
  });
});

// DELETE /api/admin/case-studies/:id: Delete case study
app.delete('/api/admin/case-studies/:id', requireAdmin, (req: Request, res: Response) => {
  const { id } = req.params;
  const index = caseStudies.findIndex((cs) => cs.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }

  const removed = caseStudies.splice(index, 1);
  saveCaseStudies();

  console.log(`[Admin] Deleted case study "${removed[0].title}"`);
  res.json({
    success: true,
    message: `Case study "${removed[0].title}" deleted.`
  });
});

// GET /api/admin/storage-status: Check current storage configuration
app.get('/api/admin/storage-status', requireAdmin, (req: Request, res: Response) => {
  res.json({
    storageType: 'local_disk',
    googleDriveSupported: true,
  });
});

// POST /api/admin/upload-slide: Upload slide screenshot, PDF, or presentation deck locally
app.post('/api/admin/upload-slide', requireAdmin, async (req: Request, res: Response) => {
  const { dataUrl, fileName } = req.body;

  if (!dataUrl) {
    res.status(400).json({ error: 'File data URL is required' });
    return;
  }

  try {
    const matches = dataUrl.match(/^data:([A-Za-z0-9-+./]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      res.status(400).json({ error: 'Invalid data URL format' });
      return;
    }

    let mimeType = matches[1];
    const base64Data = matches[2];

    // Determine clean file extension
    let ext = 'bin';
    if (fileName && fileName.includes('.')) {
      ext = fileName.split('.').pop()?.toLowerCase() || 'bin';
    } else if (mimeType.includes('pdf')) {
      ext = 'pdf';
    } else if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) {
      ext = mimeType.includes('openxml') ? 'pptx' : 'ppt';
    } else if (mimeType.includes('jpeg') || mimeType.includes('jpg')) {
      ext = 'jpg';
    } else if (mimeType.includes('png')) {
      ext = 'png';
    } else if (mimeType.includes('webp')) {
      ext = 'webp';
    }

    const safeBaseName = (fileName || `file_${Date.now()}`)
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9_-]/g, '_');

    const finalFileName = `${Date.now()}_${safeBaseName}.${ext}`;
    const filePath = path.join(UPLOADS_DIR, finalFileName);

    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

    res.json({
      success: true,
      url: `/uploads/${finalFileName}`,
      fileName: finalFileName,
      storage: 'local_disk'
    });
  } catch (err) {
    console.error('[Upload] Error saving file:', err);
    res.status(500).json({ error: 'Failed to save uploaded file' });
  }
});

// POST /api/admin/reset-seeds: Reset to default factory teardowns
app.post('/api/admin/reset-seeds', requireAdmin, (req: Request, res: Response) => {
  caseStudies = [...INITIAL_CASE_STUDIES];
  saveCaseStudies();
  res.json({
    success: true,
    message: 'Reset all case studies to original initial research seeds.',
    count: caseStudies.length
  });
});

// -------------------------------------------------------------
// VITE DEV SERVER / PRODUCTION STATIC SERVING
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
