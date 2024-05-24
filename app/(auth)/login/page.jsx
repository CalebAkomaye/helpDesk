'use client';
import React, { useState } from 'react';
import AuthForm from '../_components/authForm';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e, { email, password }) => {
    e.preventDefault();
    setError('');
    const supabase = createBrowserClient();
    const { error } = supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push('/');
    }
  };
  return (
    <main>
      <h2 className='text-center'> Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className='error'>{error}</div>}
    </main>
  );
}
