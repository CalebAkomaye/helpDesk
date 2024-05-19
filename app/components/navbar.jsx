import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <h1>Help Desk</h1>
      </Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/tickets/create'>Create</Link>
    </nav>
  );
};

export default Navbar;
