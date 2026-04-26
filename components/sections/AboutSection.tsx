'use client';

/* eslint-disable @next/next/no-img-element */

import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { FlaskConical, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

const aboutImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXFl8DGAiVF4OKpXfJdT4XIwHs1P1i3Nxtk_5A3R5VVWH4mLTPsirIqS2ikjIUBHdBzKj3H5BEugbzZoL0X2Lo-0cFYFPxjnFdmtGDEr-rhzXkSYqIqY5gqL93u2-e-_YvMO9LnerALtd-txfk2p9Vcl20IkhDUsQ_KtbHPp-CbQBJv1vzdLpwhEvh_N50lUU9mOEos2i84AARM0I67kzUcLoBUNsb6mh-JTQIF2nRtRj_XH_eiw3Rf0oM2xNfCn8Ct2yWRGa2rY';

export default function AboutSection() {
  const { dict } = useLanguage();

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -left-8 -top-8 -z-10 h-56 w-56 bg-primary/10" />
            <img src={aboutImage} alt="Recycled industrial pellets" className="h-56 w-full object-cover shadow-2xl sm:h-[420px] lg:h-[520px]" />
            <div className="absolute bottom-4 left-4 right-4 bg-dark p-4 text-white sm:bottom-8 sm:left-auto sm:right-0 sm:max-w-xs sm:p-6 lg:-right-8">
              <h3 className="mb-2 font-heading text-2xl font-semibold text-primary">{dict.about.yearsTitle}</h3>
              <p className="font-body text-sm leading-relaxed text-white/60">{dict.about.yearsDesc}</p>
            </div>
          </div>

          <div className="w-full">
            <SectionLabel className="mb-4 block">{dict.about.sectionPrefix}</SectionLabel>
            <h2 className="mb-8 max-w-xl font-heading text-3xl font-semibold uppercase leading-tight text-text-main sm:text-4xl">
              {dict.about.heading}
            </h2>
            <p className="mb-6 font-body text-base leading-relaxed text-text-muted">
              {dict.about.bodySection1}
            </p>
            <p className="mb-10 font-body text-base leading-relaxed text-text-muted">
              {dict.about.bodySection2}
            </p>
            <div className="mb-10 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <ShieldCheck size={28} className="mt-1 shrink-0 text-primary-deep" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-text-main">{dict.about.feature1.title}</h3>
                  <p className="font-body text-sm text-text-muted">{dict.about.feature1.desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FlaskConical size={28} className="mt-1 shrink-0 text-primary-deep" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-text-main">{dict.about.feature2.title}</h3>
                  <p className="font-body text-sm text-text-muted">{dict.about.feature2.desc}</p>
                </div>
              </div>
            </div>
            <Button href="/kurumsal/hakkimizda" variant="primary">{dict.about.cta}</Button>
          </div>
      </div>
    </section>
  );
}
