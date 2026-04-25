import SectionLabel from '@/components/ui/SectionLabel';
import { Leaf, RefreshCw, Shield, Award, Users, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Değerlerimiz – ECOREN',
  description: 'ECOREN\'in temel değerleri ve iş yapış anlayışı.',
};

const values = [
  {
    icon: Leaf,
    title: 'Sürdürülebilirlik',
    desc: 'Tüm operasyonlarımızda çevresel sürdürülebilirliği ön planda tutarak gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz. Her kararımızda uzun vadeli çevresel etkileri gözetiyoruz.',
    points: ['Karbon ayak izi azaltma', 'Yenilenebilir kaynak kullanımı', 'Çevre dostu operasyonlar'],
  },
  {
    icon: RefreshCw,
    title: 'Döngüsel Ekonomi',
    desc: 'Atıkları hammadde kaynağına dönüştürerek döngüsel ekonomi prensiplerine uygun, sıfır atık hedefli iş modelleri geliştiriyoruz. Kaynakların verimli kullanımı önceliğimizdir.',
    points: ['Sıfır atık politikası', 'Geri kazanım önceliği', 'Kaynak verimliliği'],
  },
  {
    icon: Shield,
    title: 'Çevre Sorumluluğu',
    desc: 'Çevre mevzuatına tam uyum ve proaktif çevre yönetimi anlayışıyla sektörde örnek bir çevre sorumluluğu standardı oluşturuyoruz. Yasal yükümlülüklerin ötesinde sorumluluk alıyoruz.',
    points: ['Mevzuat uyumu', 'Proaktif çevre yönetimi', 'Şeffaf raporlama'],
  },
  {
    icon: Award,
    title: 'Güvenilirlik',
    desc: 'Lisanslı tesisler, sertifikalı ekip ve şeffaf süreç yönetimiyle müşterilerimize her adımda güvenilir hizmet sunuyoruz. Sözümüzün arkasında duruyoruz.',
    points: ['Lisanslı ve sertifikalı', 'Şeffaf süreç yönetimi', 'Zamanında teslimat'],
  },
  {
    icon: Users,
    title: 'İş Birliği',
    desc: 'Müşterilerimiz, tedarikçilerimiz ve paydaşlarımızla güçlü ve uzun vadeli ilişkiler kurarak ortak bir sürdürülebilir gelecek inşa ediyoruz.',
    points: ['Uzun vadeli ortaklıklar', 'Müşteri odaklılık', 'Ekip çalışması'],
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
      <section className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Kurumsal</SectionLabel>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mb-6">
            Değerleri<span className="text-primary">miz</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Bizi biz yapan temel değerler ve iş yapış anlayışımız.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-gray-100 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
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
