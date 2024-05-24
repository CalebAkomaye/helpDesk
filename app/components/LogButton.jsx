'use client';

import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

const LogButton = () => {
  const router = useRouter();
  const handleClick = async () => {
    const supabase = createBrowserClient();
    const { error } = supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    } else {
      console.log(error);
    }
  };

  return (
    <button className='btn-primary' onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogButton;
