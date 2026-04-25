'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

const kurumsalLinks = [
  { label: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
  { label: 'Misyon & Vizyon', href: '/kurumsal/misyon-vizyon' },
  { label: 'Değerlerimiz', href: '/kurumsal/degerlerimiz' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [kurumsalOpen, setKurumsalOpen] = useState(false);
  const [hizmetlerOpen, setHizmetlerOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const kurumsalRef = useRef<HTMLDivElement>(null);
  const hizmetlerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (kurumsalRef.current && !kurumsalRef.current.contains(e.target as Node)) setKurumsalOpen(false);
      if (hizmetlerRef.current && !hizmetlerRef.current.contains(e.target as Node)) setHizmetlerOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLinkClass = (href: string) =>
    `font-heading font-semibold text-sm uppercase tracking-wide transition-colors duration-200 hover:text-primary ${pathname === href ? 'text-primary' : 'text-white'}`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-2xl text-primary tracking-widest">
            ECOREN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass('/')}>Ana Sayfa</Link>

            {/* Kurumsal Dropdown */}
            <div ref={kurumsalRef} className="relative">
              <button
                onClick={() => setKurumsalOpen(!kurumsalOpen)}
                className="flex items-center gap-1 font-heading font-semibold text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                Kurumsal <ChevronDown size={14} className={`transition-transform ${kurumsalOpen ? 'rotate-180' : ''}`} />
              </button>
              {kurumsalOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-dark border border-white/10 shadow-xl rounded-sm py-2">
                  {kurumsalLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="block px-4 py-2 text-sm text-white hover:text-primary hover:bg-white/5 font-body transition-colors">
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
                className="flex items-center gap-1 font-heading font-semibold text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                Hizmetlerimiz <ChevronDown size={14} className={`transition-transform ${hizmetlerOpen ? 'rotate-180' : ''}`} />
              </button>
              {hizmetlerOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-dark border border-white/10 shadow-xl rounded-sm py-4 px-4">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link key={s.id} href={s.href} className="block px-3 py-2 text-xs text-white/80 hover:text-primary hover:bg-white/5 font-body rounded transition-colors truncate">
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Link href="/hizmetlerimiz" className="text-primary text-xs font-heading font-semibold uppercase tracking-wide hover:underline">
                      Tüm Hizmetleri Gör →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/lisanslarimiz" className={navLinkClass('/lisanslarimiz')}>Lisanslarımız</Link>
            <Link href="/bizden-haberler" className={navLinkClass('/bizden-haberler')}>Bizden Haberler</Link>
            <Link href="/bize-ulasin" className="font-heading font-semibold text-sm uppercase tracking-wide bg-primary text-dark px-4 py-2 hover:bg-primary/90 transition-colors">
              Bize Ulaşın
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü Aç"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div className={`lg:hidden fixed inset-0 top-16 bg-dark z-40 transition-transform duration-300 overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-6 flex flex-col gap-2">
          <Link href="/" className="font-heading font-semibold text-lg text-white py-3 border-b border-white/10">Ana Sayfa</Link>

          <div>
            <button
              onClick={() => setMobileSectionOpen(mobileSectionOpen === 'kurumsal' ? null : 'kurumsal')}
              className="w-full flex items-center justify-between font-heading font-semibold text-lg text-white py-3 border-b border-white/10"
            >
              Kurumsal <ChevronDown size={16} className={`transition-transform ${mobileSectionOpen === 'kurumsal' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSectionOpen === 'kurumsal' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {kurumsalLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="text-white/70 hover:text-primary py-2 font-body text-sm">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileSectionOpen(mobileSectionOpen === 'hizmetler' ? null : 'hizmetler')}
              className="w-full flex items-center justify-between font-heading font-semibold text-lg text-white py-3 border-b border-white/10"
            >
              Hizmetlerimiz <ChevronDown size={16} className={`transition-transform ${mobileSectionOpen === 'hizmetler' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSectionOpen === 'hizmetler' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.id} href={s.href} className="text-white/70 hover:text-primary py-1 font-body text-sm">{s.title}</Link>
                ))}
                <Link href="/hizmetlerimiz" className="text-primary font-heading font-semibold text-sm mt-2">Tüm Hizmetler →</Link>
              </div>
            )}
          </div>

          <Link href="/lisanslarimiz" className="font-heading font-semibold text-lg text-white py-3 border-b border-white/10">Lisanslarımız</Link>
          <Link href="/bizden-haberler" className="font-heading font-semibold text-lg text-white py-3 border-b border-white/10">Bizden Haberler</Link>
          <Link href="/bize-ulasin" className="mt-4 bg-primary text-dark text-center font-heading font-semibold py-3 px-6 uppercase tracking-wide">Bize Ulaşın</Link>
        </div>
      </div>
    </nav>
  );
}
