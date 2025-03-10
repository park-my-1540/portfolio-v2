import React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Home from '@/home';

export const metadata: Metadata = {
  title: 'Sia Portfolio',
  description: '프론트엔드 개발자 박미영의 포트폴리오입니다.',
  icons: {
    icon: '/pmy.png',
  },
  openGraph: {
    title: 'Sia Portfolio',
    description: '프론트엔드 개발자 박미영의 포트폴리오입니다.',
    url: 'https://sia-pf.vercel.app/',
    images: [
      {
        url: 'https://sia-pf.vercel.app/thumbnail.png', // 썸네일 이미지 경로
        width: 1200,
        height: 630,
        alt: 'Sia Portfolio 썸네일',
      },
    ],
    type: 'website',
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
