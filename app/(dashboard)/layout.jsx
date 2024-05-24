import React from 'react';
import { cookies } from 'next/headers';
import Navbar from '../components/navbar';
import { createServerClient } from '@supabase/ssr';

const DashBoardLayout = async ({ children }) => {
  const supabase = createServerClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
};

export default DashBoardLayout;
