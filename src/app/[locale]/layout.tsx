import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Analytics from '@/components/Analytics';
import ConsentBanner from '@/components/ConsentBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Global VAT Calculator - Free Net ↔ Gross Calculator",
    template: "%s | Global VAT Calculator"
  },
  description: "Fast and accurate VAT calculator for countries worldwide including EU, Africa, and Americas. Convert net to gross and gross to net amounts instantly. Free, mobile-friendly, privacy-respecting.",
  keywords: ["VAT calculator", "Global VAT rates", "net to gross", "gross to net", "VAT calculation", "tax calculator", "Kenya VAT", "African VAT", "American VAT"],
  authors: [{ name: "Global VAT Calculator" }],
  creator: "Global VAT Calculator",
  publisher: "Global VAT Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vat-calculator-eu.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'de': '/de/mehrwertsteuer-rechner',
      'fr': '/fr/calculateur-tva'
    }
  },
  openGraph: {
    title: 'Global VAT Calculator - Free Net ↔ Gross Calculator',
    description: 'Fast and accurate VAT calculator for countries worldwide including EU, Africa, and Americas. Convert net to gross and gross to net amounts instantly.',
    url: 'https://vat-calculator-global.vercel.app',
    siteName: 'Global VAT Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global VAT Calculator - Free Net ↔ Gross Calculator',
    description: 'Fast and accurate VAT calculator for countries worldwide including EU, Africa, and Americas. Convert net to gross and gross to net amounts instantly.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
