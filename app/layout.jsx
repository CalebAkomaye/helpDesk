import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Help Desk',
  description: 'let your hearts out',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
