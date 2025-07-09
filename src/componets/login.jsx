import React, { useState } from 'react';
import "../App.css";
import FOREST from '../imge/forest.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality coming soon!');
  };

  return (
    <div
      className="login-form-container"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${FOREST})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form className="login-form" onSubmit={handleLogin} autoComplete="off" style={{ background: 'rgba(30,30,30,0.95)', borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', padding: '2.5rem', color: '#fff', minWidth: '350px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>Login</h2>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Email ID</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222', borderRadius: '0.5rem', border: '1px solid #ccc', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222', borderRadius: '0.5rem', border: '1px solid #ccc', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '2rem', textAlign: 'right' }}>
          <button type="button" onClick={handleForgotPassword} style={{ background: 'none', border: 'none', color: '#4f8cff', fontSize: '1rem', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>Forgot Password?</button>
        </div>
        <button type="submit" style={{ fontSize: '1.25rem', padding: '0.7rem 2.2rem', fontWeight: 700, width: '100%', borderRadius: '0.5rem', background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)', color: '#fff', border: 'none', boxShadow: '0 4px 24px #8b5cf655', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
}