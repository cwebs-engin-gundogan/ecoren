import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: 'Hizmet – ECOREN' };
  return {
    title: `${service.title} – ECOREN`,
    description: service.shortDesc,
  };
}

const serviceDetails: Record<string, { body: string[]; benefits: string[] }> = {
  'entegre-atik-yonetimi': {
    body: [
      'Entegre Atık Yönetimi Hizmeti, işletmenizden kaynaklanan tüm atık türlerini tek bir çatı altında yöneterek Sıfır Atık hedeflerine ulaşmanızı sağlar. Atık üretiminden nihai bertarafa kadar olan tüm süreç, uzman ekibimiz tarafından yönetilmektedir.',
      'Hizmetimiz kapsamında atık envanteri çıkarılması, atık yönetim planı hazırlanması, lisanslı taşıma ve bertaraf süreçlerinin koordinasyonu ile Çevre Bakanlığına yapılacak yasal bildirimler eksiksiz gerçekleştirilmektedir.',
      'Sıfır Atık Yönetmeliği kapsamında zorunlu hale gelen uygulamalar başta olmak üzere, döngüsel ekonomi prensipleriyle uyumlu, entegre bir atık yönetim sistemi kuruyoruz.',
    ],
    benefits: ['Uçtan uca atık yönetimi sorumluluğu', 'Yasal uyum güvencesi', 'Maliyet optimizasyonu', 'Sıfır atık belgesi desteği', 'Düzenli raporlama ve takip'],
  },
  'danismanlik-hizmetleri': {
    body: [
      'Çevre mevzuatının karmaşık ve sürekli değişen yapısı, işletmelerin uzman danışmanlık hizmetine olan ihtiyacını artırmaktadır. ECOREN Danışmanlık Hizmetleri, şirketinizin tüm çevresel yükümlülüklerini eksiksiz yerine getirmesini sağlar.',
      'Atık yönetimi lisansları, çevresel etki değerlendirmesi (ÇED), sıfır atık belgesi başvuruları, atık yönetim planı hazırlama ve çevre denetim süreçleri hizmet kapsamımızdadır.',
      'Deneyimli çevre mühendisleri ve hukuk uzmanlarından oluşan ekibimiz, mevzuat değişikliklerini yakından takip ederek müşterilerimizi proaktif biçimde bilgilendirir.',
    ],
    benefits: ['Mevzuat uyum danışmanlığı', 'Lisans süreç yönetimi', 'Atık yönetim planı hazırlama', 'ÇED danışmanlığı', 'Düzenleyici kurum ilişkileri'],
  },
};

const defaultDetails = {
  body: [
    'ECOREN, bu hizmet alanında sektörün en deneyimli ve lisanslı firmalarından biri olarak profesyonel çözümler sunmaktadır. Uzman kadromuz ve geniş tesis ağımızla Türkiye genelinde kesintisiz hizmet vermekteyiz.',
    'Hizmetimiz; mevzuata tam uyum, güvenli operasyon ve çevresel sorumluluk ilkeleri çerçevesinde yürütülmektedir. Müşterilerimize özel çözümler geliştirerek süreçlerin en verimli şekilde yönetilmesini sağlıyoruz.',
    'Tüm operasyonlarımız Çevre ve Şehircilik Bakanlığı onaylı lisanslar kapsamında, sertifikalı personel tarafından gerçekleştirilmektedir. Şeffaf raporlama ve düzenli bilgilendirme ile müşterilerimize tam destek sunuyoruz.',
  ],
  benefits: ['Lisanslı ve sertifikalı hizmet', 'Mevzuata tam uyum', 'Uzman ekip desteği', 'Türkiye geneli operasyon', 'Şeffaf raporlama ve bilgilendirme'],
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const details = serviceDetails[slug] || defaultDetails;
  const related = services.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 text-white/50 hover:text-primary font-body text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Tüm Hizmetler
          </Link>
          <SectionLabel className="mb-4 block">Hizmetlerimiz</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase mb-6 max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed mb-6">
            {service.shortDesc}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span key={tag} className="font-body text-xs bg-primary/20 text-primary px-3 py-1 border border-primary/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-semibold text-text-main mb-8">
                Hizmet <span className="text-primary">Detayları</span>
              </h2>
              <div className="flex flex-col gap-6 mb-12">
                {details.body.map((p, i) => (
                  <p key={i} className="font-body text-base text-text-main/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <h3 className="font-heading text-2xl font-semibold text-text-main mb-6">
                Temel <span className="text-primary">Faydalar</span>
              </h3>
              <ul className="flex flex-col gap-4 mb-12">
                {details.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-base text-text-main/70">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-dark p-6 sm:p-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-4">Bu hizmet hakkında daha fazla bilgi almak ister misiniz?</h3>
                <p className="font-body text-sm text-white/60 mb-6">Uzman ekibimiz size özel çözümler sunmak için hazır. Hemen iletişime geçin.</p>
                <Button href="/bize-ulasin" variant="primary">Bize Ulaşın</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Contact card */}
              <div className="bg-white border border-gray-100 p-6">
                <h3 className="font-heading text-xl font-semibold text-text-main mb-4">Hızlı İletişim</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary shrink-0" />
                    <span className="font-body text-sm text-text-main/70">+90 (212) 000 00 00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary shrink-0" />
                    <span className="font-body text-sm text-text-main/70">info@ecoren.com.tr</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href="/bize-ulasin" variant="primary" className="w-full justify-center">
                    Form ile Ulaşın
                  </Button>
                </div>
              </div>

              {/* Related services */}
              <div className="bg-white border border-gray-100 p-6">
                <h3 className="font-heading text-xl font-semibold text-text-main mb-4">İlgili Hizmetler</h3>
                <div className="flex flex-col gap-3">
                  {related.map((r) => (
                    <Link key={r.id} href={r.href} className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="font-body text-sm text-text-main/70 group-hover:text-primary transition-colors leading-tight">
                        {r.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href="/hizmetlerimiz" className="block mt-4 text-primary font-heading font-semibold text-sm hover:underline">
                  Tüm Hizmetler →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
