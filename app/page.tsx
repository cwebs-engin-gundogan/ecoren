import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ValuesSection from '@/components/sections/ValuesSection';
import StatsSection from '@/components/sections/StatsSection';
import VisionSection from '@/components/sections/VisionSection';
import { homeSeoDescription, seoKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Atık Yönetimi, Geri Kazanım ve Çevre Danışmanlığı',
  description: homeSeoDescription,
  keywords: seoKeywords,
  alternates: { canonical: 'https://ecoren.com.tr' },
  openGraph: {
    title: 'ECOREN | Atık Yönetimi, Geri Kazanım ve Çevre Danışmanlığı',
    description: homeSeoDescription,
    url: 'https://ecoren.com.tr',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <StatsSection />
      <VisionSection />
    </>
  );
}
