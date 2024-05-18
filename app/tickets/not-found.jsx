import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-2xl'>oops!</h2>
      <p>We could&apos;nt find that ticket</p>
      <Link href='/tickets'>
        {' '}
        <p>Go Back</p>
      </Link>
    </main>
  );
}
