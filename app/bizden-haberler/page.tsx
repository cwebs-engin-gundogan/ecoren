import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { news } from '@/data/news';

export const metadata = {
  title: 'Bizden Haberler – ECOREN',
  description: 'ECOREN\'den atık yönetimi ve çevre sektörüne dair güncel haberler ve makaleler.',
};

export default function BizdenHaberlerPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Blog & Haberler</SectionLabel>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mb-6">
            Bizden <span className="text-primary">Haberler</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Atık yönetimi, çevre mevzuatı ve sürdürülebilirlik alanındaki güncel gelişmeleri takip edin.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item) => (
              <Link key={item.slug} href={`/bizden-haberler/${item.slug}`} className="group block bg-white border border-gray-100 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={14} className="text-primary" />
                  <span className="font-body text-xs text-text-main/50">{item.date}</span>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-text-main mb-4 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h2>
                <p className="font-body text-sm text-text-main/60 leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                  Devamını Oku <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
