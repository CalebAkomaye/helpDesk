'use client';
import React from 'react';
import AuthForm from '../_components/authForm';

export default function Signup() {
  const handleSubmit = async (e, user) => {
    e.preventDefault();
    const [email, password] = user;
    console.log(e);
    console.log('Login:', email, password);
  };

  return (
    <main>
      <h2 className='text-center'> Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
