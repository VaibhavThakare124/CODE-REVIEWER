const aiService = require('../services/ai.services');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    try {
        const response = await aiService(code);
        res.type('text/plain').send(response);
    } catch (err) {
        console.error('getReview error:', err);
        const message = process.env.GOOGLE_GEMINI_KEY ? (err.message || 'AI service error') : 'Server missing GOOGLE_GEMINI_KEY';
        res.status(500).json({ error: message });
    }
}