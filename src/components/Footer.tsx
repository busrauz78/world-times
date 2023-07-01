import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t flex items-center justify-center p-6">
      <span className="text-sm">
        © 2023
        <Link href="/" className="hover:underline mx-1">
          WORLD TIMES™
        </Link>
        All Rights Reserved.
      </span>
    </footer>
  );
}