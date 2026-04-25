import type { Metadata } from 'next';
import { Rajdhani, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageProvider from '@/components/providers/LanguageProvider';

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

export const metadata: Metadata = {
  title: 'ECOREN – Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri',
  description: "Geri Dönüşüm ve Çevre Yönetimi alanında Türkiye'nin öncü firmalarından ECOREN. Sürdürülebilirlik, Döngüsel Ekonomi ve Yenilenebilir Enerji odaklı atık yönetimi çözümleri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${rajdhani.variable} ${dmSans.variable} font-body bg-light text-text-main`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
