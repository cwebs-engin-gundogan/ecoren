export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const news: NewsItem[] = [
  { slug: 'sifir-atik-yonetmeligi-2024', title: 'Sıfır Atık Yönetmeliğinde 2024 Değişiklikleri', date: '15 Nisan 2025', excerpt: 'Çevre ve Şehircilik Bakanlığı tarafından güncellenen Sıfır Atık Yönetmeliği kapsamında firmaların uyum süreçleri.' },
  { slug: 'dongusel-ekonomi-turkiye', title: "Döngüsel Ekonomi ve Türkiye'nin Yeşil Dönüşümü", date: '2 Mart 2025', excerpt: "Döngüsel ekonomi ilkelerinin Türk sanayi sektörüne entegrasyonu ve ECOREN'in bu süreçteki rolü." },
  { slug: 'karbon-ayak-izi-azaltma', title: 'Kurumsal Karbon Ayak İzini Azaltmanın 5 Yolu', date: '10 Şubat 2025', excerpt: 'Şirketlerin atık yönetimi ve enerji verimliliği adımlarıyla karbon nötr hedeflerine ulaşması.' },
  { slug: 'elektronik-atik-yonetimi', title: 'Elektronik Atık Yönetiminde Yeni Dönem', date: '5 Ocak 2025', excerpt: 'AEEE yönetmeliği kapsamında elektronik atık toplama ve geri kazanım süreçlerindeki son gelişmeler.' },
];
