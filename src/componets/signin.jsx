import React, { useState } from 'react';
import "../App.css"

export default function SignIn() {
  const [form, setForm] = useState({
    username: '',
    lastname: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleShowPassword = () => {
    setForm((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    </div>
  );
}