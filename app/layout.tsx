import type { Metadata } from 'next';
import { Rajdhani, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageProvider from '@/components/providers/LanguageProvider';
import FloatingButtons from '@/components/ui/FloatingButtons';
import { companyLegalName, homeSeoDescription, seoKeywords } from '@/lib/seo';
import { services } from '@/data/services';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = 'https://ecoren.com.tr';
const siteTitle = companyLegalName;
const siteDescription = homeSeoDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | ECOREN',
  },
  description: siteDescription,
  keywords: seoKeywords,
  authors: [{ name: companyLegalName, url: siteUrl }],
  creator: 'ECOREN',
  publisher: companyLegalName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'ECOREN',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ECOREN – Atık Yönetimi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=ecoren-logo-2', sizes: 'any' },
      { url: '/icon.png?v=ecoren-logo-2', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico?v=ecoren-logo-2',
    apple: '/apple-icon.png?v=ecoren-logo-2',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${siteUrl}/#organization`,
      name: 'ECOREN',
      legalName: companyLegalName,
      alternateName: ['ECOREN Atık Yönetimi', 'ECOREN Çevre Danışmanlığı'],
      description: siteDescription,
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      image: `${siteUrl}/favicon.ico`,
      telephone: '+90 544 314 15 06',
      email: 'info@ecoren.com.tr',
      address: { '@type': 'PostalAddress', addressCountry: 'TR' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      knowsAbout: seoKeywords,
      sameAs: ['https://www.linkedin.com/company/ecoren'],
      makesOffer: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDesc,
          url: `${siteUrl}${service.href}`,
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'ECOREN',
      alternateName: companyLegalName,
      url: siteUrl,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: ['tr-TR', 'en', 'de'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${rajdhani.variable} ${dmSans.variable} font-body bg-light text-text-main overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
