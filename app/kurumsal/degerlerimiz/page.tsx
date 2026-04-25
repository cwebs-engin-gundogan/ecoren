import SectionLabel from '@/components/ui/SectionLabel';
import { Award, CheckCircle, HeartHandshake, Shield, Sparkles, Users } from 'lucide-react';

export const metadata = {
  title: 'Değerlerimiz – ECOREN',
  description: 'ECOREN\'in temel değerleri ve iş yapış anlayışı.',
};

const values = [
  {
    icon: Users,
    title: 'İnsana Saygılı',
    desc: 'İnsana saygılı, çalışanlarının gelişimini destekleyen ve takım çalışmasına önem veren bir şirket olarak hareket ederiz.',
    points: ['Çalışan gelişimi', 'Takım çalışması', 'İnsan odaklı yaklaşım'],
  },
  {
    icon: HeartHandshake,
    title: 'Çevreye Duyarlı',
    desc: 'Çevreye duyarlı, kalite ve iş güvenliği noktasında sorumluluklarının bilincinde olan bir anlayışla çalışırız.',
    points: ['Çevre bilinci', 'Kalite odağı', 'İş güvenliği'],
  },
  {
    icon: Shield,
    title: 'Dürüst ve Şeffaf',
    desc: 'Dürüst, şeffaf ve etik çalışma ilkelerini tüm süreçlerimizin merkezinde tutarız.',
    points: ['Dürüstlük', 'Şeffaflık', 'Etik duruş'],
  },
  {
    icon: Sparkles,
    title: 'Yaratıcı ve Yenilikçi',
    desc: 'Yaratıcı ve yenilikçi çözümler geliştirerek geri dönüşüm ve çevre yönetimi alanında değer üretiriz.',
    points: ['Yenilikçilik', 'Çözüm üretimi', 'Sürekli gelişim'],
  },
  {
    icon: Award,
    title: 'Müşteri Odaklı',
    desc: 'Müşteri odaklı yaklaşımımızla çevreye duyarlı çözümler sunarak müşterilerimize değer katarız.',
    points: ['Değer katma', 'Güvenilir hizmet', 'Uzun vadeli ilişki'],
  },
  {
    icon: CheckCircle,
    title: 'Kalite & İnovasyon',
    desc: 'Hizmet kalitemizi sürekli geliştiriyor, sektördeki yenilikleri takip ederek en güncel çözümleri müşterilerimize sunuyoruz.',
    points: ['Sürekli iyileştirme', 'Teknoloji adaptasyonu', 'Sektör liderliği'],
  },
];

export default function DegerlerimizPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Kurumsal</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            Değerleri<span className="text-primary">miz</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Bizi biz yapan temel değerler ve iş yapış anlayışımız.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-gray-100 p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-text-main mb-4">{v.title}</h2>
                  <p className="font-body text-sm text-text-main/70 leading-relaxed mb-6">{v.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {v.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span className="font-body text-xs text-text-main/60">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
