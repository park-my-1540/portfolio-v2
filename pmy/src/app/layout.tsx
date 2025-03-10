import React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Home from '@/home';

export const metadata: Metadata = {
  title: 'Sia Portfolio',
  description: 'Generated by 미영',
  icons: {
    icon: '/pmy.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Home>{children}</Home>
    </html>
  );
}
