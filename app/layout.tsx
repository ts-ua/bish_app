import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Head from "next/head";
import AuthProvider from "./contexts/authContext";

const inter = Inter({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: "Rental Property Management System",
  description: "Bomahut - is one of the leading property management software companies in Kenya and throughout the continent.",
};

const myFont = localFont({ src: './gilroy-regular.ttf' })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body className={myFont.className}>
        <main className="relative overflow-hidden">
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
