import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Joey Siy - Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Set custom favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Optionally, add other favicon types for compatibility */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-rose-100`}>{children}</body>
    </html>
  )
}
