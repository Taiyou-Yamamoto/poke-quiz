import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';
import Header from './Header';
import Head from 'next/head';
import { ImageResponse, unstable_createNodejsStream } from '@vercel/og';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Poke-Quiz!',
  description:
    'ポケモン好きによるポケモン好きのためのクイズアプリ！君は何問解けるかな?。目指せポケモンマスター!',

  twitter: {
    card: 'summary_large_image',
    images:
      'https://poke-quiz-taiyou-yamamotos-projects.vercel.app/images/Poke-quiz.png',
  },
  openGraph: {
    title: 'Poke-Quiz!',
    description:
      'ポケモン好きによるポケモン好きのためのクイズアプリ！君は何問解けるかな?。目指せポケモンマスター!',
    siteName: `Poke-Quiz!`,
    images: {
      url: 'https://poke-quiz-taiyou-yamamotos-projects.vercel.app/images/Poke-quiz.png',
      width: 1200,
      height: 600,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <Head>
        <title>Poke-Quiz</title>
        <meta property='og:title' content='Poke-Quiz' />
        <meta
          property='og:description'
          content='ポケモン好きによるポケモン好きのためのクイズアプリ！君は何問解けるかな?。目指せポケモンマスター!'
        />
        <meta
          property='og:image'
          content='https://poke-quiz-taiyou-yamamotos-projects.vercel.app/images/Poke-quiz.png'
        />
        <meta
          property='og:url'
          content='http://poke-quiz-taiyou-yamamotos-projects.vercel.app'
        />
        <meta
          name='twitter:card'
          content='https://poke-quiz-taiyou-yamamotos-projects.vercel.app/images/Poke-quiz.png'
        />
        <meta name='twitter:title' content='Poke-Quiz' />
        <meta
          name='twitter:description'
          content='クイズを解いて高スコアを目指せ！君がポケモンマスターだ！'
        />
        <meta
          name='twitter:image'
          content='https://poke-quiz-taiyou-yamamotos-projects.vercel.app/images/Poke-quiz.png'
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <Suspense fallback={<Loading />}>{children}</Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
