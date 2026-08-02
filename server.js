// Lokálny dev server: statika + POST /api/subscribe (Ecomail).
// Spustenie: node server.js

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT) || 8080;
const ROOT = __dirname;
const LIST_ID = process.env.ECOMAIL_LIST_ID || loadPhpConst('ECOMAIL_LIST_ID') || '12';

function loadPhpConst(name) {
  try {
    const php = fs.readFileSync(path.join(ROOT, 'config.php'), 'utf8');
    const m = php.match(new RegExp(name + "\\s*=\\s*'([^']+)'"))
      || php.match(new RegExp(name + '\\s*=\\s*(\\d+)'));
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

function apiKey() {
  return process.env.ECOMAIL_API_KEY || loadPhpConst('ECOMAIL_API_KEY');
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

function sendJson(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data),
  });
  res.end(data);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function parseBody(req, raw) {
  const type = (req.headers['content-type'] || '').split(';')[0].trim();
  if (type === 'application/json') {
    try { return JSON.parse(raw || '{}'); } catch { return {}; }
  }
  const params = new URLSearchParams(raw);
  const out = {};
  for (const [k, v] of params) out[k] = v;
  return out;
}

async function handleSubscribe(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  const body = parseBody(req, await readBody(req));
  const meno = body.meno || '';
  const email = body.email || '';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    sendJson(res, 422, { ok: false, error: 'Neplatný email' });
    return;
  }

  const key = apiKey();
  if (!key) {
    sendJson(res, 500, { ok: false, error: 'Chýba ECOMAIL_API_KEY (config.php alebo env)' });
    return;
  }

  try {
    const r = await fetch(`https://api2.ecomailapp.cz/lists/${LIST_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', key },
      body: JSON.stringify({
        subscriber_data: {
          email,
          name: String(meno).trim(),
          surname: '',
        },
        trigger_autoresponders: true,
        update_existing: true,
        resubscribe: true,
      }),
    });
    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      console.error('Ecomail error', r.status, errText);
      sendJson(res, 502, { ok: false, error: 'Ecomail nedostupný, skús to ešte raz.' });
      return;
    }
    sendJson(res, 200, { ok: true });
  } catch (e) {
    console.error('Ecomail fetch failed', e);
    sendJson(res, 502, { ok: false, error: 'Ecomail nedostupný, skús to ešte raz.' });
  }
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const clean = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const full = path.join(ROOT, clean === path.sep ? 'index.html' : clean);
  if (!full.startsWith(ROOT)) return null;
  return full;
}

function serveStatic(req, res, urlPath) {
  let filePath = safePath(urlPath === '/' ? '/index.html' : urlPath);
  if (!filePath) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) {
      if (urlPath === '/favicon.ico') {
        res.writeHead(204).end();
        return;
      }
      res.writeHead(404).end('Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/api/subscribe') {
    try {
      await handleSubscribe(req, res);
    } catch (e) {
      console.error(e);
      sendJson(res, 500, { ok: false, error: 'Server error' });
    }
    return;
  }
  serveStatic(req, res, url.pathname);
});

server.listen(PORT, () => {
  const key = apiKey();
  console.log(`WealthMap local: http://localhost:${PORT}`);
  console.log(`Ecomail API key: ${key ? 'OK' : 'MISSING'}`);
});
