import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WORLD TIMES
          </span>
        </Link>

        <ul className="flex flex-row justify-between items-center">
          <li>
            <Link
              href="/books"
              className="block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0"
              aria-current="page"
            >
              Best Seller Books
            </Link>
          </li>
          <li>
            <Link
              href="/movies"
              className= "block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0"
            >
              Movie Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
