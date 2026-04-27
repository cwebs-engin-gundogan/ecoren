'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getLocalizedServices, localeLabels, locales, type Locale } from '@/lib/i18n';

const localeFlags: Record<Locale, { src: string; alt: string; position?: string }> = {
  tr: { src: 'https://flagcdn.com/w40/tr.png', alt: 'TÃ¼rkiye bayraÄŸÄ±', position: '20% center' },
  en: { src: 'https://flagcdn.com/w40/gb.png', alt: 'BirleÅŸik KrallÄ±k bayraÄŸÄ±' },
  de: { src: 'https://flagcdn.com/w40/de.png', alt: 'Almanya bayraÄŸÄ±' },
};

export default function Navbar() {
  const { locale, setLocale, dict } = useLanguage();
  const services = getLocalizedServices(locale);
  const kurumsalLinks = [
    { label: dict.nav.about, href: '/kurumsal/hakkimizda' },
    { label: dict.nav.missionVision, href: '/kurumsal/misyon-vizyon' },
    { label: dict.nav.values, href: '/kurumsal/degerlerimiz' },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [kurumsalOpen, setKurumsalOpen] = useState(false);
  const [hizmetlerOpen, setHizmetlerOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const kurumsalRef = useRef<HTMLDivElement>(null);
  const hizmetlerRef = useRef<HTMLDivElement>(null);
  const mobileLanguageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (kurumsalRef.current && !kurumsalRef.current.contains(e.target as Node)) setKurumsalOpen(false);
      if (hizmetlerRef.current && !hizmetlerRef.current.contains(e.target as Node)) setHizmetlerOpen(false);
      if (mobileLanguageRef.current && !mobileLanguageRef.current.contains(e.target as Node)) setMobileLanguageOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSectionOpen(null);
  };

  const navLinkClass = (href: string) =>
    `font-heading font-bold text-xs uppercase tracking-widest transition-colors duration-200 hover:text-primary ${pathname === href ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/80'}`;

  return (
    <nav className={`fixed top-0 w-full z-50 bg-dark/90 shadow-xl shadow-black/20 border-b border-white/10 backdrop-blur-md ${mobileOpen ? 'h-screen overflow-y-auto' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} className="font-heading font-black text-2xl text-white tracking-tight">
            ECOREN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className={navLinkClass('/')}>{dict.nav.home}</Link>

            {/* Kurumsal Dropdown */}
            <div ref={kurumsalRef} className="relative">
              <button
                onClick={() => setKurumsalOpen(!kurumsalOpen)}
                aria-label={dict.nav.corporate}
                aria-expanded={kurumsalOpen}
                className={`flex items-center gap-1 font-heading font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors duration-200 ${pathname.startsWith('/kurumsal') ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/80'}`}
              >
                {dict.nav.corporate} <ChevronDown size={14} className={`transition-transform ${kurumsalOpen ? 'rotate-180' : ''}`} />
              </button>
              {kurumsalOpen && (
                <div className="absolute top-full left-0 mt-3 w-52 bg-dark/95 border border-white/10 shadow-xl py-2 backdrop-blur-md">
                  {kurumsalLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setKurumsalOpen(false)} className="block px-4 py-2 text-xs uppercase tracking-wide text-white/75 hover:text-primary hover:bg-white/5 font-body transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hizmetlerimiz Dropdown */}
            <div ref={hizmetlerRef} className="relative">
              <button
                onClick={() => setHizmetlerOpen(!hizmetlerOpen)}
                aria-label={dict.nav.services}
                aria-expanded={hizmetlerOpen}
                className={`flex items-center gap-1 font-heading font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors duration-200 ${pathname.startsWith('/hizmetlerimiz') ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/80'}`}
              >
                {dict.nav.services} <ChevronDown size={14} className={`transition-transform ${hizmetlerOpen ? 'rotate-180' : ''}`} />
              </button>
              {hizmetlerOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(720px,90vw)] bg-dark/95 border border-white/10 shadow-xl py-4 px-4 backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link key={s.id} href={s.href} onClick={() => setHizmetlerOpen(false)} className="block px-3 py-2 text-xs text-white/75 hover:text-primary hover:bg-white/5 font-body transition-colors truncate">
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Link href="/hizmetlerimiz" onClick={() => setHizmetlerOpen(false)} className="text-primary text-xs font-heading font-semibold uppercase tracking-wide hover:underline">
                      {dict.nav.allServices} â†’
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/atik-kodlari" className={navLinkClass('/atik-kodlari')}>{dict.nav.wasteCodes}</Link>
            <div className="flex items-center gap-1 border border-white/15 px-2 py-1">
              <Languages size={14} className="text-primary" />
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLocale(item as Locale)}
                  className={`font-heading text-xs font-semibold px-1.5 py-0.5 transition-colors ${locale === item ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                  aria-pressed={locale === item}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
            <Link href="/bize-ulasin#iletisim-formu" className="font-heading font-bold text-xs uppercase tracking-widest bg-primary text-dark px-5 py-2 hover:brightness-110 transition-colors">
              {dict.nav.contact}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <div ref={mobileLanguageRef} className="relative">
              <button
                type="button"
                onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)}
                className="flex h-10 items-center gap-1.5 border border-white/15 px-3 text-white"
                aria-label="Dil seÃ§imi"
                aria-expanded={mobileLanguageOpen}
              >
                <Languages size={16} className="text-primary" />
                <span className="font-heading text-xs font-semibold text-primary">{localeLabels[locale]}</span>
                <ChevronDown size={14} className={`transition-transform ${mobileLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-full min-w-full border border-white/10 bg-dark/95 py-2 shadow-xl backdrop-blur-md">
                  {locales.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setLocale(item as Locale);
                        setMobileLanguageOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left font-heading text-sm font-semibold transition-colors ${locale === item ? 'text-primary' : 'text-white/70 hover:bg-white/5 hover:text-primary'}`}
                    >
                      <span
                        aria-label={localeFlags[item].alt}
                        role="img"
                        className="h-6 w-6 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${localeFlags[item].src})`,
                          backgroundPosition: localeFlags[item].position,
                        }}
                      />
                      {localeLabels[item]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="text-white p-2"
              onClick={() => {
                if (mobileOpen) {
                  closeMobileMenu();
                  return;
                }
                setMobileOpen(true);
              }}
              aria-label={dict.nav.menuLabel}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
      <>
      <button
        type="button"
        aria-label="MenÃ¼yÃ¼ kapat"
        className="fixed inset-x-0 top-14 bottom-0 z-0 bg-black/35 lg:hidden"
        onClick={closeMobileMenu}
      />
      <div className="relative z-10 lg:hidden bg-dark shadow-2xl">
        <div className="px-6 py-6 flex flex-col gap-2">
          <Link href="/" onClick={closeMobileMenu} className="font-heading font-semibold text-lg text-white py-3 border-b border-white/10">{dict.nav.home}</Link>

          <div>
            <button
              onClick={() => setMobileSectionOpen(mobileSectionOpen === 'kurumsal' ? null : 'kurumsal')}
              className="w-full flex items-center justify-between font-heading font-semibold text-lg text-white py-3 border-b border-white/10"
            >
              {dict.nav.corporate} <ChevronDown size={16} className={`transition-transform ${mobileSectionOpen === 'kurumsal' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSectionOpen === 'kurumsal' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {kurumsalLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={closeMobileMenu} className="text-white/70 hover:text-primary py-2 font-body text-sm">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileSectionOpen(mobileSectionOpen === 'hizmetler' ? null : 'hizmetler')}
              className="w-full flex items-center justify-between font-heading font-semibold text-lg text-white py-3 border-b border-white/10"
            >
              {dict.nav.services} <ChevronDown size={16} className={`transition-transform ${mobileSectionOpen === 'hizmetler' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSectionOpen === 'hizmetler' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.id} href={s.href} onClick={closeMobileMenu} className="text-white/70 hover:text-primary py-1 font-body text-sm">{s.title}</Link>
                ))}
                <Link href="/hizmetlerimiz" onClick={closeMobileMenu} className="text-primary font-heading font-semibold text-sm mt-2">{dict.nav.allServices} â†’</Link>
              </div>
            )}
          </div>

          <Link href="/atik-kodlari" onClick={closeMobileMenu} className="font-heading font-semibold text-lg text-white py-3 border-b border-white/10">{dict.nav.wasteCodes}</Link>
          <Link href="/bize-ulasin#iletisim-formu" onClick={closeMobileMenu} className="mt-4 bg-primary text-dark text-center font-heading font-semibold py-3 px-6 uppercase tracking-wide">{dict.nav.contact}</Link>
        </div>
      </div>
      </>
      )}
    </nav>
  );
}

