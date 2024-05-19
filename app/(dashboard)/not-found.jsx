import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className='text-center'>
      <h2 className='text-2xl'>oops!</h2>
      <p>We could&apos;nt find that [page.</p>
      <Link href='/'>
        {' '}
        <p>Back Home</p>
      </Link>
    </main>
  );
};

export default NotFound;
