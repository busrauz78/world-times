import { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
const font = Roboto_Condensed({ subsets: ['latin'], weight: ['400'] });

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>World Times</title>
        <meta name="description" content="All news about world " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`p-20 ${font.className}`}>{children}</main>
    </>
  );
};

export default Layout;
