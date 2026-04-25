import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { CheckCircle, Users, Award, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Hakkımızda – ECOREN',
  description: 'ECOREN hakkında bilgi edinin. Türkiye\'nin önde gelen atık yönetimi firmalarından biri olarak misyonumuzu öğrenin.',
};

const milestones = [
  { year: '2014', text: 'ECOREN kuruldu, ilk lisanslı operasyonlar başladı.' },
  { year: '2016', text: 'Tehlikeli atık taşıma filosu genişletildi, ADR sertifikasyonu tamamlandı.' },
  { year: '2018', text: 'Elektronik atık (AEEE) geri kazanım hizmetleri portföye eklendi.' },
  { year: '2020', text: 'Sıfır Atık danışmanlık birimi kuruldu; 100+ müşteri eşiği aşıldı.' },
  { year: '2022', text: 'ÖTA (Ömrünü Tamamlamış Araç) hizmet lisansı alındı.' },
  { year: '2024', text: '21 hizmet kategorisi ve 500+ memnun müşteri ile sektör liderliği pekiştirildi.' },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Kurumsal</SectionLabel>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mb-6">
            Hakkı<span className="text-primary">mızda</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            2014 yılından bu yana atık yönetimi sektöründe güvenilir, lisanslı ve yenilikçi çözümler sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-text-main mb-6">
                Türkiye&apos;nin <span className="text-primary">Güvenilir</span> Atık Yönetimi Partneri
              </h2>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-6">
                ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri San. ve Tic. Ltd. Şti., 2014 yılında atık yönetimi sektöründeki boşluğu doldurmak ve çevre dostu endüstriyel çözümler sunmak amacıyla kurulmuştur.
              </p>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-6">
                10 yılı aşkın tecrübemizle; tehlikeli atıklar, tehlikesiz atıklar, elektronik atıklar, atık yağlar ve daha pek çok kategoride entegre atık yönetimi çözümleri sunmaktayız. Lisanslı taşıma araçlarımız, deneyimli mühendis kadromuz ve güçlü tesis ağımızla Türkiye genelinde hizmet veriyoruz.
              </p>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-8">
                Sıfır Atık felsefesi ve Döngüsel Ekonomi ilkeleri doğrultusunda hareket eden firmamız; sanayi kuruluşları, KOBİler ve kamu kurumlarına yönelik mevzuata tam uyumlu, sürdürülebilir çözümler geliştirmektedir.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Çevre ve Şehircilik Bakanlığı onaylı lisanslı hizmetler',
                  'ADR sertifikalı taşıma araç filosu',
                  'Uzman çevre mühendisleri ve danışmanlar',
                  'Türkiye genelinde geniş tesis ve operasyon ağı',
                  'Tüm atık sınıfları için entegre çözümler',
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
                  { icon: Users, v: '50+', l: 'Uzman Ekip' },
                  { icon: Award, v: '21+', l: 'Hizmet Kategorisi' },
                  { icon: MapPin, v: '100+', l: 'Çalışılan Tesis' },
                  { icon: CheckCircle, v: '500+', l: 'Memnun Müşteri' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.l} className="bg-white border border-gray-100 p-6 text-center">
                      <Icon size={24} className="text-primary mx-auto mb-3" />
                      <div className="font-heading text-3xl font-bold text-primary mb-1">{s.v}</div>
                      <div className="font-body text-xs text-text-main/50 uppercase tracking-wide">{s.l}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="font-heading text-3xl font-semibold text-text-main mb-10 text-center">
              <span className="text-primary">Büyüme</span> Hikayemiz
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
              <div className="flex flex-col gap-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 flex justify-end">
                      <div className={`bg-white border border-gray-100 p-6 max-w-sm ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                        <div className="font-heading text-2xl font-bold text-primary mb-2">{m.year}</div>
                        <p className="font-body text-sm text-text-main/70">{m.text}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-light relative z-10 shrink-0 hidden md:block" />
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
