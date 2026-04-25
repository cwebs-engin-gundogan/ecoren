import SectionLabel from '@/components/ui/SectionLabel';
import { Award, CheckCircle, FileText } from 'lucide-react';

export const metadata = {
  title: 'Lisanslarımız – ECOREN',
  description: 'ECOREN\'in sahip olduğu çevre lisansları ve sertifikalar.',
};

const licenses = [
  { title: 'Tehlikeli Atık Taşıma Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Tehlikeli atıkların ADR düzenlemelerine uygun şekilde taşınması için alınan resmi lisans.' },
  { title: 'Tehlikeli Atık Geri Kazanım Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Tehlikeli sınıf atıkların geri kazanım ve bertaraf işlemleri için gerekli bakanlık lisansı.' },
  { title: 'Tehlikesiz Atık Geri Kazanım Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Tehlikesiz sınıf endüstriyel atıkların geri kazanım işlemleri lisansı.' },
  { title: 'ÖTA (Ömrünü Tamamlamış Araç) Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Ömrünü tamamlamış araçların çevreci söküm ve bertaraf işlemleri için özel lisans.' },
  { title: 'Elektronik Atık (AEEE) Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'AEEE Yönetmeliği kapsamında elektrikli ve elektronik atıkların geri kazanım lisansı.' },
  { title: 'Atık Yağ Geri Kazanım Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Motor ve endüstriyel atık yağların lisanslı tesislerde geri kazanımı için alınan belge.' },
  { title: 'ADR Güvenlik Danışmanlığı Sertifikası', authority: 'Ulaştırma Bakanlığı', desc: 'Tehlikeli madde taşımacılığı alanında ADR kapsamında güvenlik danışmanlığı sertifikası.' },
  { title: 'ISO 14001 Çevre Yönetim Sistemi', authority: 'Akredite Belgelendirme Kuruluşu', desc: 'Uluslararası Çevre Yönetim Sistemi standardı kapsamında akredite sertifika.' },
  { title: 'ISO 9001 Kalite Yönetim Sistemi', authority: 'Akredite Belgelendirme Kuruluşu', desc: 'Uluslararası Kalite Yönetim Sistemi standardı kapsamında akredite sertifika.' },
];

export default function LisanslarimizPage() {
  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Yasal Uyum</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            Lisansları<span className="text-primary">mız</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Tüm hizmetlerimiz Çevre ve Şehircilik Bakanlığı ile ilgili kurumlarca verilen lisans ve sertifikalar kapsamında yürütülmektedir.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, v: '9+', l: 'Lisans & Sertifika' },
              { icon: CheckCircle, v: '10+', l: 'Yıllık Uyum' },
              { icon: FileText, v: '100%', l: 'Mevzuat Uyumu' },
              { icon: Award, v: '2', l: 'ISO Sertifikası' },
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

          {/* Licenses grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenses.map((l) => (
              <div key={l.title} className="bg-white border border-gray-100 p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Award size={22} className="text-primary" />
                </div>
                <h2 className="font-heading text-lg font-semibold text-text-main mb-2 leading-tight">{l.title}</h2>
                <p className="font-body text-xs text-primary mb-3 uppercase tracking-wide">{l.authority}</p>
                <p className="font-body text-sm text-text-main/60 leading-relaxed">{l.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  <span className="font-body text-xs text-primary">Aktif</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-dark p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">
              Lisans ve Sertifikalarımız Hakkında Detaylı Bilgi
            </h2>
            <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-8">
              Tüm lisans ve sertifikalarımıza ilişkin resmi belgeler için bizimle iletişime geçebilirsiniz.
            </p>
            <a href="/bize-ulasin" className="inline-flex items-center gap-2 bg-primary text-dark font-heading font-semibold px-8 py-3 hover:bg-primary/90 transition-colors">
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
