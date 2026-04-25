import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { news } from '@/data/news';

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return { title: 'Haber – ECOREN' };
  return { title: `${item.title} – ECOREN`, description: item.excerpt };
}

const articleContent: Record<string, string[]> = {
  'sifir-atik-yonetmeligi-2024': [
    'Çevre ve Şehircilik Bakanlığı tarafından 2024 yılında yenilenen Sıfır Atık Yönetmeliği, Türkiye\'deki tüm büyük ölçekli işletmelere kapsamlı yükümlülükler getirmektedir. Yeni düzenleme ile birlikte sıfır atık uygulamalarının denetim mekanizmaları güçlendirilmiş, belgelendirme gereklilikleri artırılmıştır.',
    'Yönetmelik kapsamında en önemli değişikliklerden biri, 250 kişi ve üzeri istihdam eden işletmelerin Sıfır Atık Belgesi almak için öngörülen sürenin kısaltılmasıdır. Bunun yanı sıra gıda atıkları için ayrı toplama ve kompostlama zorunluluğu da yeni eklenen hükümler arasında yer almaktadır.',
    'ECOREN olarak müşterilerimizin bu yeni yükümlülüklere uyum sağlamaları için kapsamlı danışmanlık hizmetleri sunmaktayız. Atık yönetim planı hazırlanmasından başvuru süreçlerine kadar tüm adımlarda yanınızdayız.',
  ],
  'dongusel-ekonomi-turkiye': [
    'Döngüsel ekonomi, ham madde kullanımını azaltan, ürünlerin kullanım ömrünü uzatan ve atığı yeniden üretim sürecine katan bir ekonomik sistem modelidir. Türkiye, son yıllarda bu alanda önemli adımlar atmaya başlamıştır.',
    'Avrupa Birliği\'nin Yeşil Mutabakat süreci çerçevesinde Türkiye\'nin döngüsel ekonomi dönüşümü hem çevresel hem de ekonomik açıdan büyük önem taşımaktadır. Türk sanayi sektörü, ihracat pazarlarında rekabet edebilmek için bu dönüşümü hızlandırmak zorundadır.',
    'ECOREN, döngüsel ekonomi prensiplerini tüm hizmet süreçlerinin merkezine koyarak müşterilerine bu dönüşümde rehberlik etmektedir. Atık geri kazanım oranlarını artırmak ve ikincil hammadde üretimini teşvik etmek öncelikli hedeflerimiz arasındadır.',
  ],
  'karbon-ayak-izi-azaltma': [
    'Kurumsal karbon yönetimi, artık yalnızca büyük uluslararası şirketlerin gündeminde yer almıyor. Türkiye\'de de işletmeler, hem yasal düzenlemeler hem de tedarik zinciri baskıları nedeniyle karbon ayak izlerini ölçüp azaltmak zorunda kalmaktadır.',
    'Karbon ayak izini azaltmanın en etkili yollarından biri, atık yönetimini optimize etmektir. Geri dönüşüm ve geri kazanım oranlarını artırmak, enerji tüketimini ve dolayısıyla karbon emisyonlarını doğrudan azaltmaktadır.',
    'ECOREN, müşterilerinin karbon yönetimi hedeflerine ulaşmalarında kritik bir rol üstlenmektedir. Atık yönetim süreçlerindeki iyileştirmelerle kayda değer karbon tasarrufu sağlanabilmektedir.',
  ],
  'elektronik-atik-yonetimi': [
    'Elektrikli ve Elektronik Ekipman Atıkları (AEEE) yönetimi, Türkiye\'de giderek önem kazanan bir alan haline gelmektedir. Teknolojinin hızlı gelişmesiyle birlikte elektronik atık miktarı her yıl artmakta ve bu durum ciddi çevresel tehditler oluşturmaktadır.',
    '2022 yılında güncellenen AEEE Yönetmeliği, üreticilere, ithalatçılara ve perakendecilere elektronik atıkların geri alımı ve geri kazanımı konusunda önemli yükümlülükler getirmektedir. Söz konusu yükümlülüklere uyum sağlanması hem yasal bir zorunluluk hem de çevresel bir sorumluluktur.',
    'ECOREN\'in elektronik atık geri kazanım hizmeti, AEEE yönetmeliği kapsamında tam uyumlu bir süreç sunmaktadır. Kurumsal elektronik atıkların güvenli ve izlenebilir biçimde geri kazanılması için lisanslı altyapımız hazırdır.',
  ],
};

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const content = articleContent[slug] || [item.excerpt, 'Bu konu hakkında daha fazla bilgi almak için lütfen bizimle iletişime geçin.'];
  const others = news.filter((n) => n.slug !== slug);

  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/bizden-haberler" className="inline-flex items-center gap-2 text-white/50 hover:text-primary font-body text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Tüm Haberler
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={14} className="text-primary" />
            <span className="font-body text-xs text-white/50">{item.date}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
            {item.title}
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">{item.excerpt}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="flex flex-col gap-6 mb-12">
                {content.map((p, i) => (
                  <p key={i} className="font-body text-base text-text-main/70 leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-8">
                <Link href="/bizden-haberler" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:underline">
                  <ArrowLeft size={14} /> Haberlere Dön
                </Link>
              </div>
            </article>

            <aside className="flex flex-col gap-6">
              <div className="bg-white border border-gray-100 p-6">
                <h3 className="font-heading text-xl font-semibold text-text-main mb-4">Diğer Haberler</h3>
                <div className="flex flex-col gap-4">
                  {others.map((o) => (
                    <Link key={o.slug} href={`/bizden-haberler/${o.slug}`} className="group block py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={10} className="text-primary" />
                        <span className="font-body text-xs text-text-main/40">{o.date}</span>
                      </div>
                      <span className="font-body text-sm text-text-main/70 group-hover:text-primary transition-colors leading-tight flex items-start gap-1">
                        <ArrowRight size={12} className="mt-0.5 shrink-0 text-primary" />
                        {o.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-dark p-6">
                <h3 className="font-heading text-lg font-semibold text-white mb-3">Hizmetlerimiz Hakkında</h3>
                <p className="font-body text-sm text-white/60 mb-4">Atık yönetimi çözümlerimizi inceleyin.</p>
                <Link href="/hizmetlerimiz" className="inline-flex items-center gap-1 text-primary font-heading font-semibold text-sm hover:underline">
                  Hizmetleri İncele <ArrowRight size={12} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
