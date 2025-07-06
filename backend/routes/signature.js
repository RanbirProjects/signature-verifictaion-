const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const upload = multer({ dest: 'backend/uploads/' });

// Demo storage (in real app, this would be in a database)
let demoSignaturePath = null;

// Upload signature
router.post('/upload', upload.single('signature'), async (req, res) => {
  try {
    if (req.file) {
      demoSignaturePath = req.file.path;
      res.json({ message: 'Signature uploaded successfully!' });
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Verify signature (placeholder logic)
router.post('/verify', upload.single('signature'), async (req, res) => {
  try {
    if (!demoSignaturePath) {
      return res.status(404).json({ message: 'No signature uploaded yet. Please upload a signature first.' });
    }
    
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded for verification' });
    }
    
    // Placeholder: just check if files exist
    if (fs.existsSync(demoSignaturePath) && fs.existsSync(req.file.path)) {
      // In real app, compare images here
      // For demo purposes, we'll simulate a match
      const match = Math.random() > 0.3; // 70% chance of match for demo
      res.json({ match: match });
    } else {
      res.json({ match: false });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 