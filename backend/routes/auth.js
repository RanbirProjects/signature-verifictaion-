const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// In-memory storage (in real app, this would be in a database)
const users = [];

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existing = users.find(user => user.email === email);
    if (existing) return res.status(400).json({ message: 'User already exists' });
    
    const hashed = await bcrypt.hash(password, 10);
    const newUser = { 
      id: Date.now().toString(), 
      username, 
      email, 
      password: hashed,
      signaturePath: null 
    };
    users.push(newUser);
    res.json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
    res.json({ message: 'Login successful', token, userId: user.id });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 