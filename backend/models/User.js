const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  signaturePath: { type: String }, // Path to stored signature image
});

module.exports = mongoose.model('User', UserSchema); 