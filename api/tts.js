export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

const MAX_TTS_CHARS = 600;
const FISH_MODEL = 's2.1-pro-free'; // if this errors, try 's2-pro'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const text = req.body?.text;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Text is required' });
  }

  const apiKey = process.env.FISH_API_KEY;
  const voiceId = process.env.FISH_VOICE_ID;

  if (!apiKey || !voiceId) {
    console.error('Missing FISH_API_KEY or FISH_VOICE_ID');
    return res.status(200).json({ useBrowserFallback: true });
  }

  try {
    const response = await fetch('https://api.fish.audio/v1/tts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        model: FISH_MODEL,
      },
      body: JSON.stringify({
        text: text.slice(0, MAX_TTS_CHARS),
        reference_id: voiceId,
        format: 'wav', // keeps your frontend working as before
      }),
    });

    if (!response.ok) {
      throw new Error(`Fish Audio error ${response.status}: ${await response.text()}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/wav');
    return res.status(200).send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('Fish Audio TTS failed, falling back to browser voice:', err);
    return res.status(200).json({ useBrowserFallback: true });
  }
}