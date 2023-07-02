import { Roboto_Condensed } from 'next/font/google';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
const font = Roboto_Condensed({ subsets: ['latin'], weight: ['400'] });

export default function Layout({ children }: LayoutProps) {
  return <main className={`p-20 ${font.className}`}>{children}</main>;
}
