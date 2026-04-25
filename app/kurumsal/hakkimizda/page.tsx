import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { CheckCircle, Leaf, Recycle, Zap } from 'lucide-react';

export const metadata = {
  title: 'Hakkımızda – ECOREN',
  description: 'ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri hakkında bilgi edinin.',
};

export default function HakkimizdaPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Kurumsal</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            ECOREN <span className="text-primary">Hakkımızda</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri San. ve Tic. Ltd. Şti.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-text-main mb-6">
                Geri Dönüşüm ve <span className="text-primary">Çevre Yönetimi</span> Alanında Öncü
              </h2>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-6">
                Geri Dönüşüm ve Çevre Yönetimi alanında Türkiye’nin öncü firmalarından biridir. Sürdürülebilirlik, Döngüsel Ekonomi ve Yenilenebilir Enerjiye olan bağlılığı ile ECOREN, atık yönetimi ve geri dönüşüm hizmetlerinde sektörde lider konumdadır.
              </p>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-8">
                Şirketimiz, çevreye duyarlı çözümler sunarak müşterilerine değer katarken, aynı zamanda Türkiye’nin Karbon Ayak İzini azaltmayı ve Yeşil Dönüşüme katkıda bulunmayı hedeflemektedir.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Sürdürülebilirlik ve döngüsel ekonomi odağı',
                  'Yenilenebilir enerjiye bağlı çevreci yaklaşım',
                  'Karbon ayak izini azaltma hedefi',
                  'Yeşil dönüşüme katkı',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-text-main/70">{p}</span>
                  </li>
                ))}
              </ul>
              <Button href="/bize-ulasin" variant="primary">Bize Ulaşın</Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Recycle, v: '21+', l: 'Hizmet Alanı' },
                  { icon: Leaf, v: '0', l: 'Sıfır Atık Felsefesi' },
                  { icon: Zap, v: 'CO₂', l: 'Karbon Ayak İzi Odağı' },
                  { icon: CheckCircle, v: 'TR', l: 'Yeşil Dönüşüm' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.l} className="bg-white border border-gray-100 p-5 sm:p-6 text-center">
                      <Icon size={24} className="text-primary mx-auto mb-3" />
                      <div className="font-heading text-3xl font-bold text-primary mb-1">{s.v}</div>
                      <div className="font-body text-xs text-text-main/50 uppercase tracking-wide">{s.l}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
