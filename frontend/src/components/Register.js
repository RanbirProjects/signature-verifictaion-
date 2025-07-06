import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/register', form);
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMessage('Registration failed');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '50px auto', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Signature Verification System</h2>
      <h3>Register</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          name="username" 
          placeholder="Username" 
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button 
          type="submit"
          style={{ 
            padding: '10px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </form>
      <p style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register; 