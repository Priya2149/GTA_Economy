const express = require('express');
const router = express.Router();
const { submitContent, approveContent } = require('../controllers/contentController');

// Submit content
router.post('/submit', submitContent);

// Approve content
router.put('/approve/:contentId', approveContent);

module.exports = router;
