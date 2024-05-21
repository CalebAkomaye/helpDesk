'use client';
import React, { useState } from 'react';

const AuthForm = ({ handleSubmit }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label htmlFor='email'>
        <span>Email</span>
        <input
          type='email'
          id='email'
          value={email}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor='password'>
        <span>Password</span>
        <input
          type='password'
          id='password'
          value={password}
          required
          onChange={handleChange}
        />
      </label>
      <button className='btn-primary'>submit</button>
    </form>
  );
};

export default AuthForm;
