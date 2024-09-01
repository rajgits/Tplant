import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="telegram-web-app" content="https://api.telegram.org/bot7222947486:AAEGif679Umfb5DmECIZdtioPXrVRinF1ng/"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
