'use client';
import React, { useState } from 'react';
import AuthForm from '../_components/authForm';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createBrowserClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    error ? setError(error.message) : router.push('/verify');

    //   if (error) {
    //     setError(error.message);
    //   }
    //   if (!error) {
    //   }
    // };

    return (
      <main>
        <h2 className='text-center'> Sign up</h2>
        <AuthForm handleSubmit={handleSubmit} />
        {error && <div className='error'>{error}</div>}
      </main>
    );
  };
}
