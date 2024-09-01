// src/app/layout.tsx

import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <meta name="telegram-web-app" content="https://api.telegram.org/bot7222947486:AAEGif679Umfb5DmECIZdtioPXrVRinF1ng/" />
        <title>Plant</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
