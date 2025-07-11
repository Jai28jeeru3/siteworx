import React, { useState } from 'react';
<<<<<<< HEAD
import "../App.css";
import FOREST from '../imge/forest.jpg';
import PincodeGenerator from './PincodeGenerator';
import { ChevronDown } from 'lucide-react';
=======
import "../App.css"
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f

export default function SignIn() {
  const [form, setForm] = useState({
    username: '',
    lastname: '',
    email: '',
    password: '',
<<<<<<< HEAD
    gstin: '',
    address1: '',
    address2: '',
    pincode: '', // Add pincode field
    showPassword: false,
  });
  const [showPincodeGenerator, setShowPincodeGenerator] = useState(false);
=======
    showPassword: false,
  });
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleShowPassword = () => {
    setForm((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    // Handle form submission
  };

  return (
    <div className="signin-outer-container" style={{
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${FOREST})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      <div className="signin-inner-container" style={{
        background: 'transparent', // transparent background
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        maxWidth: '600px',
        width: '100%',
        color: '#fff',
      }}>
        <form className="login-form" onSubmit={handleSubmit} autoComplete="off" style={{ fontSize: '1.35rem', color: '#fff' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>Sign In</h2>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.2rem', width: '100%' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="username" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Firstname</label>
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your firstname"
                required
                style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="lastname" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Lastname</label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Enter your lastname"
                required
                style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222' }}
              />
            </div>
          </div>
          <div style={{ width: '100%', marginBottom: '1.2rem' }}>
            <label htmlFor="email" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{ fontSize: '1.1rem', padding: '0.5rem' }}
            />
          </div>
          {/* Address 1 and Address 2 Fields Side by Side */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.2rem', width: '100%' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="address1" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Address 1</label>
              <input
                id="address1"
                name="address1"
                type="text"
                value={form.address1}
                onChange={handleChange}
                placeholder="Enter your address 1"
                required
                style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="address2" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Address 2</label>
              <input
                id="address2"
                name="address2"
                type="text"
                value={form.address2}
                onChange={handleChange}
                placeholder="Enter your address 2 (optional)"
                style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222' }}
              />
            </div>
          </div>
          {/* Pincode Text Input with Dropdown Arrow */}
          <div style={{ width: '100%', marginBottom: '1.2rem', position: 'relative' }}>
            <label htmlFor="pincode" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Pincode</label>
            <input
              id="pincode"
              name="pincode"
              type="text"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Enter or select your pincode"
              style={{ fontSize: '1.1rem', padding: '0.5rem', width: '100%', color: '#222', borderRadius: '0.5rem', border: '1px solid #ccc' }}
            />
            <button
              type="button"
              onClick={() => setShowPincodeGenerator(true)}
              style={{ position: 'absolute', right: '0.5rem', top: '2.3rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#888' }}
              tabIndex={-1}
              aria-label="Open pincode generator"
            >
              <ChevronDown />
            </button>
            {showPincodeGenerator && (
              <PincodeGenerator
                onSelect={(pincode) => {
                  setForm({ ...form, pincode });
                  setShowPincodeGenerator(false);
                }}
                onClose={() => setShowPincodeGenerator(false)}
              />
            )}
          </div>
          <div className="password-wrapper" style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="password" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Password</label>
            <input
              id="password"
              name="password"
              type={form.showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={{ fontSize: '1.1rem', padding: '0.5rem' }}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={toggleShowPassword}
              tabIndex={-1}
              aria-label="Toggle password visibility"
              style={{ fontSize: '1.3rem', marginLeft: '0.5rem' }}
            >
              {form.showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {/* GSTIN Field (Optional) - moved to last */}
          <div style={{ width: '100%', marginBottom: '1.2rem' }}>
            <label htmlFor="gstin" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>GSTIN Number (Optional)</label>
            <input
              id="gstin"
              name="gstin"
              type="text"
              value={form.gstin}
              onChange={handleChange}
              placeholder="Enter your GSTIN number (optional)"
              style={{ fontSize: '1.1rem', padding: '0.5rem' }}
            />
          </div>
          <button type="submit" style={{ fontSize: '1.25rem', padding: '0.7rem 2.2rem', fontWeight: 700 }}>Sign In</button>
        </form>
      </div>
=======
    alert(
      `Username: ${form.username}\nLastname: ${form.lastname}\nEmail: ${form.email}\nPassword: ${form.password}`
    );
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Sign In</h2>
        <div style={{ width: '100%' }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div style={{ width: '100%' }}>
          <label htmlFor="lastname">Lastname</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={form.lastname}
            onChange={handleChange}
            placeholder="Enter your lastname"
            required
          />
        </div>
        <div style={{ width: '100%' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="password-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={form.showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={toggleShowPassword}
            tabIndex={-1}
            aria-label="Toggle password visibility"
          >
            {form.showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <button type="submit">Sign In</button>
      </form>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
    </div>
  );
}