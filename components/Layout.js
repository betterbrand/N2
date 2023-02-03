import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - AT-Donation' : 'AT-Donation'}</title>
        <meta name="description" content="AT-Donation Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header >
          <nav
            className="flex h-12 items-center px-4 justify-between shadow-md"
          >
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">AT-Donation</a>
            </Link>
            <div>
              <Link href="/login" legacyBehavior>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          <p>Copywright @2023 by Tech Wizards</p>
        </footer>
      </div>
    </>
  );
}