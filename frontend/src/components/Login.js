import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', form);
      setMessage(res.data.message);
      // Save token and user data
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      // Redirect to dashboard
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (err) {
      setMessage('Login failed');
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
      <h3>Login</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
      <p style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login; 