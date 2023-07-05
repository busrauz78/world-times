import { Righteous } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const font = Righteous({ subsets: ['latin'], weight: ['400'] });

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={font.className}>
      <div className="flex flex-wrap items-center justify-between mx-auto md:p-10 p-4">
        <div className="hidden md:flex absolute left-0 z-0 w-40">
          <img src="/assets/logo.png" />
        </div>
        <Link href="/" className="flex items-center z-10">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WORLD TIMES
          </span>
        </Link>

        <ul className="flex flex-row justify-between items-center">
          <li>
            <Link
              href="/books"
              className={`block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 ${
                router.pathname === '/books' && 'border-b'
              }`}
              aria-current="page"
            >
              Best Seller Books
            </Link>
          </li>
          <li>
            <Link
              href="/movies"
              className={`block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 ${
                router.pathname === '/movies' && 'border-b'
              }`}
            >
              Movie Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
