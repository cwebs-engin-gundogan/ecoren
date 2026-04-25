import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { featuredServices } from '@/data/services';

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
  { label: 'Misyon & Vizyon', href: '/kurumsal/misyon-vizyon' },
  { label: 'Değerlerimiz', href: '/kurumsal/degerlerimiz' },
  { label: 'Tüm Hizmetler', href: '/hizmetlerimiz' },
  { label: 'Lisanslarımız', href: '/lisanslarimiz' },
  { label: 'Bizden Haberler', href: '/bizden-haberler' },
  { label: 'Bize Ulaşın', href: '/bize-ulasin' },
];

export default function Footer() {
  return (
    <footer className="bg-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="font-heading font-bold text-3xl text-primary tracking-widest mb-4 block">
              ECOREN
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri San. ve Tic. Ltd. Şti. — Sürdürülebilir bir gelecek için çevre odaklı çözümler.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                <div key={s} className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs text-white/50 hover:border-primary hover:text-primary transition-colors cursor-pointer font-body">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg uppercase tracking-wide mb-6 text-white">Hızlı Bağlantılar</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/60 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg uppercase tracking-wide mb-6 text-white">Hizmetlerimiz</h3>
            <ul className="flex flex-col gap-2">
              {featuredServices.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="font-body text-sm text-white/60 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hizmetlerimiz" className="font-body text-sm text-primary hover:underline">
                  Tüm Hizmetleri Gör →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg uppercase tracking-wide mb-6 text-white">İletişim</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-white/60">Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="font-body text-sm text-white/60">+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="font-body text-sm text-white/60">info@ecoren.com.tr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.
          </p>
          <p className="font-body text-xs text-white/40">
            Sürdürülebilir Gelecek İçin
          </p>
        </div>
      </div>
    </footer>
  );
}
