
// POST /ai/summarize
const summarize = async (req, res, next) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required for summarization' });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      return res.status(503).json({ error: 'Gemini API key not configured. Please add it to server/.env' });
    }

    // Strip HTML, collapse whitespace, then take only first 600 chars
    // to stay well within free-tier token limits (one small request)
    const plainText = content
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 600);

    const { GoogleGenAI } = require('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Short prompt = fewer tokens = stays in free tier
    const prompt = `Summarize this blog excerpt in 2 sentences:\n\n${plainText}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    const summary = response.text;

    res.json({ summary });
  } catch (error) {
    if (error.message?.includes('API_KEY_INVALID')) {
      return res.status(401).json({ error: 'Invalid Gemini API key' });
    }
    next(error);
  }
};

module.exports = { summarize };
