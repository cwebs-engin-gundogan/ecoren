import SectionLabel from '@/components/ui/SectionLabel';
import { Target, Eye } from 'lucide-react';

export const metadata = {
  title: 'Misyon & Vizyon – ECOREN',
  description: 'ECOREN\'in misyonu ve vizyonu hakkında bilgi edinin.',
};

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
            Sıfır Atık Felsefesi, Döngüsel Kaynak Yönetimi ve sürdürülebilirlik odağıyla ilerliyoruz.
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
              <h2 className="font-heading text-3xl font-semibold text-white mb-6 uppercase">Sıfır Atık<br />Felsefesi</h2>
              <p className="font-body text-base text-white/70 leading-relaxed mb-6">
                ECOREN, gereksiz kaynak kullanımının önüne geçmek amacıyla Sıfır Atık Felsefesini benimsemiş ve Döngüsel Kaynak Yönetimi ile Sürdürülebilirliği odağına alarak kurumsal müşterilerine Atık Yönetimi hizmeti veren bir firmadır.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-primary p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-dark/5 rounded-full" />
              <div className="w-14 h-14 bg-dark/10 flex items-center justify-center mb-6">
                <Eye size={26} className="text-dark" />
              </div>
              <span className="font-body text-xs uppercase tracking-widest text-dark/60 mb-4 block">Vizyonumuz</span>
              <h2 className="font-heading text-3xl font-semibold text-dark mb-6 uppercase">Güvenilir<br />Yapı</h2>
              <p className="font-body text-base text-dark/80 leading-relaxed mb-6">
                Geri Dönüşüm sektöründe performansına özenilen, çevre ve yaşam değerlerine saygılı öncü bir şirket olarak faaliyetlerimiz ile ülkemiz başta olmak üzere Avrupa ülkelerinde de tercih edilebilir ve güvenilebilir bir yapıyı kazanmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
