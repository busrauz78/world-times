import { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
const font = Roboto_Condensed({ subsets: ['latin'], weight: ['400'] });

export async function generateMetadata({ params }: any) {
  console.log('Params', params);
  return {
    title: '...',
  }
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={`p-20 ${font.className}`}>{children}</main>
  )
};

export default Layout;