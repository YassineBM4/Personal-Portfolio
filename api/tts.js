import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const hfToken = process.env.HUGGINGFACE_API_KEY;

  try {
    const filePath = path.join(process.cwd(), 'public', 'audio', 'yassine-audio-reference.wav');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Reference audio file not found' });
    }

    const audioBuffer = fs.readFileSync(filePath);
    
    // Using a reliable public community space endpoint for XTTS zero-shot cloning
    // Note: You can also deploy your own free private Space on Hugging Face and use its URL here
    const response = await fetch(
      'https://coqui-xtts.hf.space/api/predict', // Public community XTTS space proxy
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(hfToken ? { Authorization: `Bearer ${hfToken}` } : {}),
        },
        body: JSON.stringify({
          data: [
            text,                     // Text to speak
            'en',                     // Language
            `data:audio/wav;base64,${audioBuffer.toString('base64')}`, // Reference voice file
            null,
            false,
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Public space clone request failed');
    }

    const result = await response.json();
    // Hugging Face spaces typically return the generated file path in data[0].url or data[0].name
    const audioUrl = result.data?.[0]?.url || result.data?.[0];

    if (!audioUrl) {
      throw new Error('No audio URL returned from cloning space');
    }

    // Fetch the actual audio file bytes from the space and stream to frontend
    const audioRes = await fetch(audioUrl);
    const arrayBuffer = await audioRes.arrayBuffer();

    res.setHeader('Content-Type', 'audio/wav');
    return res.status(200).send(Buffer.from(arrayBuffer));

  } catch (err) {
    console.error('Cloning Space Error, falling back to browser voice:', err);
    // Fallback instruction to frontend to use browser speech if the free public space is busy
    return res.status(200).json({ useBrowserFallback: true });
  }
}