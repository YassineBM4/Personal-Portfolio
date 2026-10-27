export default async function handler(req, res) {
  try {
    const m = await import('../src/data/Portfolio.js');
    res.status(200).json({ name: m.profile.name });
  } catch (e) {
    res.status(500).json({ error: String(e), stack: e.stack });
  }
}