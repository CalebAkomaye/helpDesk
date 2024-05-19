import Link from 'next/link';
import React from 'react';

const AuthLayoout = ({ children }) => {
  return (
    <>
      <nav>
        <h2>
          <Link href='/'>Help Desk</Link>
        </h2>
        <Link href='/login'> Login</Link>
        <Link href='/signup'>Sign up </Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayoout;
