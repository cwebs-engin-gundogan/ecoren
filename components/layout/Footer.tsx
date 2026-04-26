'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, X, PhoneCall, UserPlus, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getLocalizedFeaturedServices } from '@/lib/i18n';

const PHONE_RAW = '+905443141506';
const PHONE_DISPLAY = '+90 544 314 15 06';

function PhoneModal({ onClose }: { onClose: () => void }) {
  const handleCall = () => { window.location.href = `tel:${PHONE_RAW}`; };
  const handleWhatsApp = () => { window.open(`https://wa.me/${PHONE_RAW.replace('+', '')}`, '_blank'); };
  const handleAddContact = () => {
    const vcard = [
      'BEGIN:VCARD', 'VERSION:3.0', 'FN:ECOREN', 'ORG:ECOREN',
      `TEL;TYPE=CELL:${PHONE_RAW}`, 'EMAIL:info@ecoren.com.tr',
      'URL:https://ecoren.com.tr', 'END:VCARD',
    ].join('\n');
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'ecoren.vcf'; a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white w-full max-w-xs shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="bg-dark px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-0.5">ECOREN</p>
            <p className="font-heading text-base font-bold text-white">{PHONE_DISPLAY}</p>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors"><X size={18} /></button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <button onClick={handleCall} className="flex items-center gap-3 w-full px-4 py-3 bg-primary text-dark font-heading font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
            <PhoneCall size={18} /> Telefon Et
          </button>
          <button onClick={handleAddContact} className="flex items-center gap-3 w-full px-4 py-3 bg-dark text-white font-heading font-bold text-sm uppercase tracking-wide hover:bg-dark/80 transition-all">
            <UserPlus size={18} /> Rehbere Ekle
          </button>
          <button onClick={handleWhatsApp} className="flex items-center gap-3 w-full px-4 py-3 bg-[#25D366] text-white font-heading font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
            <MessageCircle size={18} /> WhatsApp&apos;tan Mesaj At
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const { locale, dict } = useLanguage();
  const featuredServices = getLocalizedFeaturedServices(locale);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const quickLinks = [
    { label: dict.nav.home, href: '/' },
    { label: dict.nav.about, href: '/kurumsal/hakkimizda' },
    { label: dict.nav.missionVision, href: '/kurumsal/misyon-vizyon' },
    { label: dict.nav.values, href: '/kurumsal/degerlerimiz' },
    { label: dict.nav.allServices, href: '/hizmetlerimiz' },
{ label: dict.nav.wasteCodes, href: '/atik-kodlari' },
    { label: dict.nav.contact, href: '/bize-ulasin#iletisim-formu' },
  ];

  return (
    <>
    {phoneModalOpen && <PhoneModal onClose={() => setPhoneModalOpen(false)} />}
    <footer className="bg-[#070908] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Company Info */}
          <div>
            <Link href="/" className="font-heading font-black text-2xl text-primary tracking-tight mb-4 block">
              ECOREN
            </Link>
            <p className="font-body text-xs text-white/50 leading-relaxed mb-5">
              {dict.footer.description}
            </p>
            <div className="flex gap-2">
              {['L', 'T', 'I'].map((s) => (
                <div key={s} className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs text-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer font-heading font-bold">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-5 pb-3 border-b border-white/10">{dict.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-2.5">
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
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-5 pb-3 border-b border-white/10">{dict.footer.services}</h3>
            <ul className="flex flex-col gap-2.5">
              {featuredServices.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="font-body text-sm text-white/45 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/hizmetlerimiz" className="font-body text-sm text-primary hover:underline">
                  {dict.footer.allServices} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-5 pb-3 border-b border-white/10">{dict.footer.contact}</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <a href="https://maps.google.com/?q=ECOREN+Türkiye" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/45 hover:text-primary transition-colors">
                  {dict.pages.contact.contactInfo[0].value}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-primary shrink-0" />
                <button onClick={() => setPhoneModalOpen(true)} className="font-body text-sm text-white/45 hover:text-primary transition-colors">
                  {PHONE_DISPLAY}
                </button>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:info@ecoren.com.tr" className="font-body text-sm text-white/45 hover:text-primary transition-colors">
                  info@ecoren.com.tr
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} ECOREN. {dict.footer.rights}
          </p>
          <p className="font-body text-xs text-white/40">
            {dict.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
