import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Michael Lo - Portfolio',
  description: 'Portfolio of projects built by Michael Lo',
  // Optional: Add more metadata
  keywords: ['ethical hacking', 'cyber threat intelligence analysis', 'blockchain security', 'portfolio'],
  authors: [{ name: 'Michael Lo' }],
  // Optional: Add OpenGraph metadata for better social sharing
  openGraph: {
    title: 'Michael Lo - Portfolio',
    description: 'Portfolio of projects built by Michael Lo',
    type: 'website',
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
