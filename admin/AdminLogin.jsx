// src/admin/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import { FaUserShield } from 'react-icons/fa';
import { toast } from 'react-toastify'; // ✅ Toast import

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      toast.success('Admin login successful!'); // ✅ Toast
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 500); // slight delay for toast visibility
    } else {
      toast.error('Invalid admin credentials'); // ✅ Toast for error
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-icon">
          <FaUserShield />
        </div>
        <h2 className="admin-title">Admin Panel</h2>
        <p className="admin-subtitle">Enter credentials to continue</p>

        <form onSubmit={handleLogin} className="admin-login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
