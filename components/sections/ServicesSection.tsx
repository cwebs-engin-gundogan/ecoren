'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ArrowRight, Recycle, Leaf, Truck, FlaskConical } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getLocalizedFeaturedServices } from '@/lib/i18n';

const icons = [Recycle, Leaf, FlaskConical, Truck];
const serviceImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZu3bKKVzuCllmGgnoL_Tz0wSiexyQ4jpyghITgHdGskTvHO_aXiO3W-CjicRRnKpRjPeWrv9u9FGJ1CeS7nLSY4iIw9EGTPY2qgPZ-pKv7LILZBks550DJagydxowS-oiMEaHLWf-Zm3OsfpwsqF_bq-QjzRkbRyJDcplLyO1doafib0XAM_2wgErBtjl4lhaQoWlHArVlmYraDS9bo9KnTr8El7vLzrgFaFdyi_gdFWS5qQx7gVJIu8H1dETsOL3BhuPCIaYDP8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlokDDvy0hpDAKsU_C6Y3-U-7pdxQTsdqzLRnU3zl9_wHl9b38qYRTdnuJnSyuwP7f3rPtoxs3VR4cTEZWCa_epdlinP_7nRVfBFUDH0BYP5RZCsIqo-bIgf2snRDtYeQ2Kua1-me79Ku9LStDrzy4CDEQRUSzUSK9JSSatIBGLxJjXdH24ipLWh9_8TzouwtQMVD0oOKFGM4MuaYa5PK5o39tyDYWS9SWbxqoffKb2HPTSchs4lQcn3boTVxs7Z6RVuC7X-3IGk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBGpQY0A3bNxUBlS44kdfONdjbZLjjo5daC2H40rRcwGhMdBabTPKCCVZLnAMuZBP-VD9nu1SaPy76C4ZTliJo6hHjXmqoL58kkPmhF5Il0gQqIXXCia8226ssNnPoo5CZkDZEH_stbU-QLZXRLXVi-_JYPPvTnTr5Nask2l8NNc00D8tOGN73ZmAFwNHAdNl-rpOTlaQSLIXuNuWqzrbj6WMNJqMXCVQD5h-I-iwZoRHPMoEWbMKS_a4nuBl0JJZ-uDiDbKspTwwU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCOI8BWdbZUkgOl3CWd7VbqHzaAA7foU3ZFa1AY49csKH6F8SqwieuMraGyswTfd_OaDr8X2HejaWJcPXIXgbhKk0iKUqiZ7CA9GK_0SN8yYHWgTqyhHvBP1W1-l2Bh16l2xGPjOdoWYLmEVhoBl1ni_hKUbr7Nrmja5lsSjT1edJXkwZWBW1OobKWTqy_Wv8BQX_Uzyl4w2b5Yg7oTqJAFqFVJRnoA5g-tEO6dt_DqOJs_zmnIfTijNh5_16fgBJ91GydGervk2Oo',
];

export default function ServicesSection() {
  const { locale, dict } = useLanguage();
  const featuredServices = getLocalizedFeaturedServices(locale);

  return (
    <section className="bg-surface-container py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">{dict.servicesSection.label}</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-text-main uppercase">
            Uzman Atık Yönetimi Çözümleri
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-primary-deep" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-12">
          {featuredServices.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={service.id}>
                <Link href={service.href} className="group block overflow-hidden bg-white shadow-sm transition-all duration-500 hover:bg-dark hover:shadow-2xl">
                  <div className="relative h-44 overflow-hidden">
                    <img src={serviceImages[i]} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/20 transition-colors group-hover:bg-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-white/90">
                      <Icon size={20} className="text-primary-deep" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-text-main mb-3 leading-tight transition-colors group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed mb-6 transition-colors group-hover:text-white/55">
                      {service.shortDesc}
                    </p>
                    <span className="flex items-center gap-2 text-primary-deep font-heading font-bold text-sm uppercase transition-colors group-hover:text-primary">
                      {dict.common.details} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/hizmetlerimiz" variant="primary" size="lg">
            {dict.servicesSection.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
