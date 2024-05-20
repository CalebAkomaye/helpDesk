'use client';
import React from 'react';
import AuthForm from '../_components/authForm';

export default function Login() {
  const handleSubmit = async (e, user) => {
    e.preventDefault();
    const [email, password] = user;
    console.log(e);
    console.log('Login:', email, password);
  };
  return (
    <main>
      <h2 className='text-center'> Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
