const express = require('express');
const router = express.Router();
const { summarize, chat } = require('../controllers/aiController');

router.post('/summarize', summarize);
router.post('/chat', chat);

module.exports = router;
