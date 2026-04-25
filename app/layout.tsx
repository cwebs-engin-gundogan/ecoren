import type { Metadata } from 'next';
import { Rajdhani, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageProvider from '@/components/providers/LanguageProvider';
import FloatingButtons from '@/components/ui/FloatingButtons';

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
const siteTitle = 'ECOREN – Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri';
const siteDescription =
  "Geri Dönüşüm ve Çevre Yönetimi alanında Türkiye'nin öncü firmalarından ECOREN. Tehlikeli ve tehlikesiz atık yönetimi, geri kazanım, danışmanlık ve çevre mühendisliği hizmetleri.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | ECOREN',
  },
  description: siteDescription,
  keywords: ['atık yönetimi', 'geri dönüşüm', 'çevre mühendisliği', 'tehlikeli atık', 'sıfır atık', 'döngüsel ekonomi', 'ECOREN'],
  authors: [{ name: 'ECOREN', url: siteUrl }],
  creator: 'ECOREN',
  publisher: 'ECOREN',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ECOREN',
  description: 'Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri',
  url: 'https://ecoren.com.tr',
  logo: 'https://ecoren.com.tr/og-image.jpg',
  telephone: '+90-212-000-0000',
  email: 'info@ecoren.com.tr',
  address: { '@type': 'PostalAddress', addressCountry: 'TR' },
  sameAs: ['https://www.linkedin.com/company/ecoren'],
  areaServed: { '@type': 'Country', name: 'Turkey' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${rajdhani.variable} ${dmSans.variable} font-body bg-light text-text-main`}>
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
