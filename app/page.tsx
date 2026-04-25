import HeroSection from '@/components/sections/HeroSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ValuesSection from '@/components/sections/ValuesSection';
import StatsSection from '@/components/sections/StatsSection';
import VisionSection from '@/components/sections/VisionSection';
import NewsSection from '@/components/sections/NewsSection';

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
      <NewsSection />
    </>
  );
}
