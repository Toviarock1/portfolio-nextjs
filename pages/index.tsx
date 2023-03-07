import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav from '@/components/nav';
import Contact from '@/components/contact';
import Portfolio from '@/components/portfolio';
import Experience from '@/components/experience';
import About from '@/components/about';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Developer Portfolio</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="frontend developer, simon james adama, frontend portfolio, portfolio, html, css, javascript, reactjs, nextjs, typescript"
        />
        <meta name="author" content="Simon James Adama" />
        <meta
          name="description"
          content="Simon Adama Frontend Developer Portfolio"
        />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}
