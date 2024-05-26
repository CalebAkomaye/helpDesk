import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';

const AuthLayout = async ({ children }) => {
  const supabase = createServerClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/');
  }

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

export default AuthLayout;
