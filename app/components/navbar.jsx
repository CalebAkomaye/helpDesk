import Link from 'next/link';
import React from 'react';
import LogButton from './LogButton';

const Navbar = ({ user }) => {
  return (
    <nav>
      <Link href='/'>
        <h1>Help Desk</h1>
      </Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/tickets/create' className='mr-auto'>
        Create
      </Link>

      {user && <span>user.email</span>}
      <LogButton />
    </nav>
  );
};

export default Navbar;
