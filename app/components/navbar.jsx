import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <h1>Help Desk</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
