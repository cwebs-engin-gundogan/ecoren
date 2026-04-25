import SectionLabel from '@/components/ui/SectionLabel';
import { Target, Eye, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Misyon & Vizyon – ECOREN',
  description: 'ECOREN\'in misyonu ve vizyonu hakkında bilgi edinin.',
};

const strategicGoals = [
  'Tüm hizmet süreçlerinde sıfır atık hedefine katkı sağlamak',
  'Döngüsel ekonomi anlayışını sektörde yaygınlaştırmak',
  'Uluslararası çevre standartlarında hizmet kalitesi sunmak',
  'Karbon ayak izini minimize eden operasyonlar geliştirmek',
  'Sektördeki inovasyon ve Ar-Ge çalışmalarına öncülük etmek',
];

export default function MisyonVizyonPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Kurumsal</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            Misyon <span className="text-primary">&</span> Vizyon
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Sürdürülebilir bir gelecek için atık yönetiminde öncü rolümüzü güçlendiriyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-dark p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full" />
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                <Target size={26} className="text-primary" />
              </div>
              <span className="font-body text-xs uppercase tracking-widest text-primary mb-4 block">Misyonumuz</span>
              <h2 className="font-heading text-3xl font-semibold text-white mb-6 uppercase">Çevre İçin<br />Değer Yaratmak</h2>
              <p className="font-body text-base text-white/70 leading-relaxed mb-6">
                Endüstriyel atıkların çevreye zarar vermeden geri kazanılması ve bertarafı konusunda en yüksek standartlarda hizmet sunmak; müşterilerimizin çevre mevzuatına uyumunu sağlamak ve sürdürülebilirlik hedeflerine ulaşmalarına destek olmak.
              </p>
              <p className="font-body text-base text-white/70 leading-relaxed">
                Her atık parçasının bir kaynak olduğu anlayışıyla hareket ediyor, ekonomik değer yaratırken çevresel etkiyi minimuma indiriyoruz.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-primary p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-dark/5 rounded-full" />
              <div className="w-14 h-14 bg-dark/10 flex items-center justify-center mb-6">
                <Eye size={26} className="text-dark" />
              </div>
              <span className="font-body text-xs uppercase tracking-widest text-dark/60 mb-4 block">Vizyonumuz</span>
              <h2 className="font-heading text-3xl font-semibold text-dark mb-6 uppercase">Sektörde<br />Öncü Olmak</h2>
              <p className="font-body text-base text-dark/80 leading-relaxed mb-6">
                Döngüsel ekonomi ve sıfır atık ilkelerini benimseyen Türkiye&apos;nin en yenilikçi ve güvenilir entegre atık yönetimi firması olmak; uluslararası standartlarda hizmet sunarak çevre dostu endüstriyel dönüşüme öncülük etmek.
              </p>
              <p className="font-body text-base text-dark/80 leading-relaxed">
                2030 yılına kadar Türkiye genelindeki operasyonlarımızı büyüterek bölgesel bir atık yönetimi merkezi olmayı hedefliyoruz.
              </p>
            </div>
          </div>

          {/* Strategic Goals */}
          <div className="bg-white border border-gray-100 p-6 sm:p-8 lg:p-12">
            <h2 className="font-heading text-3xl font-semibold text-text-main mb-8">
              Stratejik <span className="text-primary">Hedeflerimiz</span>
            </h2>
            <div className="flex flex-col gap-4">
              {strategicGoals.map((g, i) => (
                <div key={g} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                  <span className="font-heading text-2xl font-bold text-primary/30 w-8 shrink-0">0{i + 1}</span>
                  <ArrowRight size={16} className="text-primary shrink-0" />
                  <span className="font-body text-base text-text-main/70">{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
