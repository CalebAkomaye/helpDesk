import { cookies } from 'next/headers';
import Navbar from '../components/navbar';
import { createServerClient } from '@supabase/ssr';
import { redirect } from 'next/navigation';

const DashBoardLayout = async ({ children }) => {
  const supabase = createServerClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect('/login');
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
};

export default DashBoardLayout;
