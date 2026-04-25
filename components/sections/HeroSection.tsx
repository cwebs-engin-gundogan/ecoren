'use client';

/* eslint-disable @next/next/no-img-element */

import Button from '@/components/ui/Button';
import { useLanguage } from '@/components/providers/LanguageProvider';

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBlIV6z3h_UGK6EJgF6nPy38OfuBSB2NoNhVIRc-jV0ZwTZdmKMi3isToggnopsuyO-_vGi22JNIHcTDRDTfEmiiF5CENnCas3EgmXkW16TPBPoIO3Tm_3N0gRNzLsfe49TXi_CII_tR3OOSskA7f47opLI7frcTikABxJqo7B_oWATQKQ0BdOJg6ZkArBv-hrmqx8QwiWEfATXhIfu73TxJYErk5ibbHARJlWBtlgNw0h1Wto5hRHV4MZF4aYbKIUzBZkzHfGbMJY';

export default function HeroSection() {
  const { dict } = useLanguage();

  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden pt-20 pb-16 text-center sm:min-h-[680px] sm:pt-24 sm:pb-20 lg:min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <img
          src={heroImage}
          alt="Modern industrial recycling facility with blue sorting machines"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,23,20,0.82)_0%,rgba(16,23,20,0.45)_48%,rgba(16,23,20,0.86)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-body text-xs uppercase tracking-widest text-primary">Geleceği Dönüştürüyoruz</span>
            <span className="h-px w-12 bg-primary" />
          </div>

          <h1 className="mx-auto mb-8 max-w-5xl font-heading text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.hero.line1} {dict.hero.highlight} {dict.hero.line2} Entegre {dict.hero.line3}
          </h1>

          <p className="mx-auto mb-10 max-w-2xl font-body text-sm leading-relaxed text-white/75 sm:text-lg">
            Endüstriyel atıkları yenilikçi mühendislik çözümleriyle değer zincirine geri kazandırıyoruz. Döngüsel ekonomi modelimizle Türkiye&apos;nin sanayi gücüne sürdürülebilirlik katıyoruz.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/hizmetlerimiz" variant="primary" size="lg" className="uppercase">
              Çözümlerimizi Keşfedin
            </Button>
            <Button href="/bize-ulasin" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-dark uppercase">
              {dict.hero.contact}
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:mt-12 lg:grid-cols-4">
          {dict.hero.stats.map((s) => (
            <div key={s.label} className="border border-white/10 bg-dark/50 px-5 py-4 backdrop-blur-sm">
              <div className="mb-1 font-heading text-3xl font-bold text-primary">{s.value}</div>
              <div className="font-body text-[11px] uppercase tracking-wide text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark/80 to-transparent" />
    </section>
  );
}
