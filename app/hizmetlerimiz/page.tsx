import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { services } from '@/data/services';

export const metadata = {
  title: 'Hizmetlerimiz – ECOREN',
  description: 'ECOREN\'in tüm atık yönetimi ve çevre danışmanlığı hizmetleri.',
};

export default function HizmetlerimizPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Hizmetlerimiz</SectionLabel>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mb-6">
            Tüm <span className="text-primary">Hizmetlerimiz</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Tehlikeli ve tehlikesiz atıkların yönetiminden danışmanlık hizmetlerine kadar 21 kategoride profesyonel çözümler.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={service.href}
                className="group block bg-white border border-gray-100 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-heading text-4xl font-bold text-primary/20 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {service.featured && (
                    <span className="font-body text-xs bg-primary/10 text-primary px-2 py-1">Öne Çıkan</span>
                  )}
                </div>
                <h2 className="font-heading text-xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h2>
                <p className="font-body text-sm text-text-main/60 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="font-body text-xs bg-primary/10 text-primary px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                  Detaylar <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
