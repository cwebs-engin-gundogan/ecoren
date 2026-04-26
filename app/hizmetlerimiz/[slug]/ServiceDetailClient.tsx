'use client';

import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getLocalizedServices } from '@/lib/i18n';

interface Props {
  slug: string;
}

export default function ServiceDetailClient({ slug }: Props) {
  const { locale, dict } = useLanguage();
  const p = dict.pages.serviceDetail;

  const allServices = getLocalizedServices(locale);
  const service = allServices.find((s) => s.id === slug);
  const related = allServices.filter((s) => s.id !== slug).slice(0, 3);

  if (!service) return null;

  const details = p.serviceDetails[slug] ?? { body: p.defaultBody, benefits: p.defaultBenefits };

  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 text-white/50 hover:text-primary font-body text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> {p.allServices}
          </Link>
          <SectionLabel className="mb-4 block">{p.sectionLabel}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase mb-6 max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed mb-6">{service.shortDesc}</p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span key={tag} className="font-body text-xs bg-primary/20 text-primary px-3 py-1 border border-primary/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-semibold text-text-main mb-8">
                {p.detailsTitle.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-primary">{p.detailsTitle.split(' ').slice(-1)}</span>
              </h2>
              <div className="flex flex-col gap-6 mb-12">
                {details.body.map((para, i) => (
                  <p key={i} className="font-body text-base text-text-main/70 leading-relaxed">{para}</p>
                ))}
              </div>

              <h3 className="font-heading text-2xl font-semibold text-text-main mb-6">
                {p.benefitsTitle.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-primary">{p.benefitsTitle.split(' ').slice(-1)}</span>
              </h3>
              <ul className="flex flex-col gap-4 mb-12">
                {details.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-base text-text-main/70">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-dark p-6 sm:p-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-4">{p.ctaTitle}</h3>
                <p className="font-body text-sm text-white/60 mb-6">{p.ctaDesc}</p>
                <Button href="/bize-ulasin#iletisim-formu" variant="primary">{p.ctaLabel}</Button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-gray-100 p-6">
                <h3 className="font-heading text-xl font-semibold text-text-main mb-4">{p.contactTitle}</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary shrink-0" />
                    <span className="font-body text-sm text-text-main/70">+90 (212) 000 00 00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary shrink-0" />
                    <span className="font-body text-sm text-text-main/70">info@ecoren.com.tr</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href="/bize-ulasin#iletisim-formu" variant="primary" className="w-full justify-center">
                    {p.contactForm}
                  </Button>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-6">
                <h3 className="font-heading text-xl font-semibold text-text-main mb-4">{p.relatedTitle}</h3>
                <div className="flex flex-col gap-3">
                  {related.map((r) => (
                    <Link key={r.id} href={r.href} className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="font-body text-sm text-text-main/70 group-hover:text-primary transition-colors leading-tight">
                        {r.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href="/hizmetlerimiz" className="block mt-4 text-primary font-heading font-semibold text-sm hover:underline">
                  {p.allServicesLink}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
