'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getLocalizedFeaturedServices } from '@/lib/i18n';

export default function Footer() {
  const { locale, dict } = useLanguage();
  const featuredServices = getLocalizedFeaturedServices(locale);
  const quickLinks = [
    { label: dict.nav.home, href: '/' },
    { label: dict.nav.about, href: '/kurumsal/hakkimizda' },
    { label: dict.nav.missionVision, href: '/kurumsal/misyon-vizyon' },
    { label: dict.nav.values, href: '/kurumsal/degerlerimiz' },
    { label: dict.nav.allServices, href: '/hizmetlerimiz' },
    { label: dict.nav.licenses, href: '/lisanslarimiz' },
    { label: dict.nav.wasteCodes, href: '/atik-kodlari' },
    { label: dict.nav.contact, href: '/bize-ulasin' },
  ];

  return (
    <footer className="bg-[#070908] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="font-heading font-black text-xl text-primary tracking-tight mb-5 block">
              ECOREN
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              {dict.footer.description}
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                <div key={s} className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs text-white/50 hover:border-primary hover:text-primary transition-colors cursor-pointer font-body">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest mb-8 text-white">{dict.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/45 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest mb-8 text-white">{dict.footer.services}</h3>
            <ul className="flex flex-col gap-4">
              {featuredServices.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="font-body text-sm text-white/45 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hizmetlerimiz" className="font-body text-sm text-primary hover:underline">
                  {dict.footer.allServices} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest mb-8 text-white">{dict.footer.contact}</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-white/45">{dict.pages.contact.contactInfo[0].value}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="font-body text-sm text-white/45">+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="font-body text-sm text-white/45">info@ecoren.com.tr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} ECOREN. {dict.footer.rights}
          </p>
          <p className="font-body text-xs text-white/40">
            {dict.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
