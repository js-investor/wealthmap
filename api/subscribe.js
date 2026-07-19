// Ecomail prepojenie — zapíše kontakt do zoznamu a spustí automatizáciu.
// API kľúč sa berie z environment premennej ECOMAIL_API_KEY (Vercel → Settings → Environment Variables).

const LIST_ID = process.env.ECOMAIL_LIST_ID || '12';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const { meno = '', email = '' } = req.body || {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(422).json({ ok: false, error: 'Neplatný email' });
    return;
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    res.status(500).json({ ok: false, error: 'Chýba ECOMAIL_API_KEY na serveri' });
    return;
  }

  try {
    const r = await fetch(`https://api2.ecomailapp.cz/lists/${LIST_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', key: apiKey },
      body: JSON.stringify({
        subscriber_data: {
          email,
          name: String(meno).trim(),
          surname: '', // inak si Ecomail rozdelí viacslovné meno na meno + priezvisko
        },
        trigger_autoresponders: true,
        update_existing: true,
        resubscribe: true,
      }),
    });
    if (!r.ok) {
      res.status(502).json({ ok: false, error: 'Ecomail nedostupný, skús to ešte raz.' });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(502).json({ ok: false, error: 'Ecomail nedostupný, skús to ešte raz.' });
  }
};
