import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kurumsal',
  description: 'ECOREN hakkında; kuruluş hikayemiz, ekibimiz, misyon ve vizyonumuz ile temel değerlerimiz.',
  alternates: { canonical: 'https://ecoren.com.tr/kurumsal' },
  openGraph: {
    title: 'Kurumsal | ECOREN',
    description: 'ECOREN hakkında; kuruluş hikayemiz, ekibimiz, misyon ve vizyonumuz ile temel değerlerimiz.',
    url: 'https://ecoren.com.tr/kurumsal',
  },
};
import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const subPages = [
  { href: '/kurumsal/hakkimizda', icon: Users, title: 'Hakkımızda', desc: 'ECOREN\'in kuruluş hikayesi, ekibi ve sektördeki yeri hakkında bilgi edinin.' },
  { href: '/kurumsal/misyon-vizyon', icon: Target, title: 'Misyon & Vizyon', desc: 'Çevre ve atık yönetimi alanındaki misyonumuzu ve geleceğe yönelik vizyonumuzu keşfedin.' },
  { href: '/kurumsal/degerlerimiz', icon: Heart, title: 'Değerlerimiz', desc: 'Bizi biz yapan temel değerleri ve iş yapış anlayışımızı öğrenin.' },
];

export default function KurumsalPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Kurumsal</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            ECOREN <span className="text-primary">Kurumsal</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Atık yönetimi sektöründe 10 yılı aşkın deneyimimiz, uzman kadromuz ve lisanslı hizmetlerimizle kurumsal kimliğimizi tanıyın.
          </p>
        </div>
      </section>

      {/* Sub Pages */}
      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subPages.map((p) => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="group block bg-white border border-gray-100 p-6 sm:p-8 lg:p-10 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
                  <p className="font-body text-sm text-text-main/60 leading-relaxed mb-6">{p.desc}</p>
                  <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                    İncele <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
