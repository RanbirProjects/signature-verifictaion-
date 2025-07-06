const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage for demo
const users = [];
const signatures = [];

// Placeholder for routes
app.get('/', (req, res) => {
  res.send('Signature Verification System API');
});

const authRoutes = require('./routes/auth');
const signatureRoutes = require('./routes/signature');

app.use('/api/auth', authRoutes);
app.use('/api/signature', signatureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 