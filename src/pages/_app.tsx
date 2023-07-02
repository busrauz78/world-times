import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
