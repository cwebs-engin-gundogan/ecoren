export const locales = ['tr', 'en', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export const localeLabels: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && locales.includes(value as Locale);
}

export const serviceIds = [
  'entegre-atik-yonetimi',
  'danismanlik-hizmetleri',
  'tehlikeli-atik-geri-kazanimi',
  'tehlikesiz-atik-geri-kazanimi',
  'atik-yag-geri-kazanimi',
  'bitkisel-atik-yag-geri-kazanimi',
  'elektronik-atik-geri-kazanimi',
  'omrunu-tamamlamis-arac',
  'katalizor-geri-kazanimi',
  'metal-hurda-ithalati',
  'atik-aku-geri-kazanimi',
  'tehlikeli-atik-tasima',
  'tehlikesiz-atik-tasima',
  'sifir-ibc-tank-temini',
  'kimyasal-atik-bertaraf',
  'camur-bertaraf-geri-kazanim',
  'omrunu-tamamlamis-lastik',
  'hurda-elmas-karbur-geri-kazanimi',
  'hurda-kablo-geri-kazanimi',
  'moyden-belgesi',
  'atik-sahasi-kurulum',
] as const;

type ServiceId = (typeof serviceIds)[number];

type ServiceCopy = {
  title: string;
  shortDesc: string;
  tags: string[];
};

type Dictionary = {
  nav: {
    home: string;
    corporate: string;
    about: string;
    missionVision: string;
    values: string;
    services: string;
    allServices: string;
    licenses: string;
    wasteCodes: string;
    news: string;
    contact: string;
    menuLabel: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    allServices: string;
    rights: string;
    tagline: string;
  };
  common: {
    details: string;
    readMore: string;
    featured: string;
  };
  ui: {
    scrollToTop: string;
    scrollAriaLabel: string;
    contactUs: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    line1: string;
    highlight: string;
    line2: string;
    integrated: string;
    line3: string;
    body: string;
    cta: string;
    services: string;
    contact: string;
    stats: { value: string; label: string }[];
    serviceArea: string;
  };
  about: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    body1: string;
    body2: string;
    points: string[];
    cta: string;
    cardTitle: string;
    cardSubtitle: string;
    cardStats: { v: string; l: string }[];
    sectionPrefix: string;
    heading: string;
    bodySection1: string;
    bodySection2: string;
    yearsTitle: string;
    yearsDesc: string;
    feature1: { title: string; desc: string };
    feature2: { title: string; desc: string };
  };
  servicesSection: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    sectionTitle: string;
    cta: string;
  };
  valuesSection: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    items: { title: string; desc: string }[];
  };
  statsSection: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    items: { value: number; suffix: string; label: string }[];
  };
  visionSection: {
    label: string;
    title: string;
    missionTitle: string;
    missionBody: string;
    missionTags: string[];
    visionTitle: string;
    visionBody: string;
    visionTags: string[];
  };
  marquee: string[];
  newsSection: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    cta: string;
  };
  pages: {
    services: { label: string; titlePrefix: string; titleHighlight: string; desc: string };
    news: { label: string; titlePrefix: string; titleHighlight: string; desc: string };
    corporate: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      explore: string;
      subPages: { title: string; desc: string }[];
    };
    contact: {
      label: string;
      titlePrefix: string;
      titleHighlight: string;
      desc: string;
      infoTitle: string;
      supportTitle: string;
      supportDesc: string;
      formTitle: string;
      successTitle: string;
      successDesc: string;
      fields: Record<string, string>;
      placeholders: Record<string, string>;
      subjects: { value: string; label: string }[];
      submit: string;
      contactInfo: { label: string; value: string }[];
    };
    about: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      cta: string;
      stats: { v: string; l: string }[];
    };
    missionVision: {
      sectionLabel: string;
      subtitle: string;
    };
    values: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: { title: string; desc: string; points: string[] }[];
    };
    licenses: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      active: string;
      stats: { v: string; l: string }[];
      items: { title: string; authority: string; desc: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaLabel: string;
    };
    serviceDetail: {
      allServices: string;
      sectionLabel: string;
      detailsTitle: string;
      benefitsTitle: string;
      ctaTitle: string;
      ctaDesc: string;
      ctaLabel: string;
      contactTitle: string;
      contactForm: string;
      relatedTitle: string;
      allServicesLink: string;
      serviceDetails: Record<string, { body: string[]; benefits: string[] }>;
      defaultBody: string[];
      defaultBenefits: string[];
    };
    wasteCodes: {
      heroLabel: string;
      heroTitle: string;
      heroDesc: string;
      searchByText: string;
      searchByGroup: string;
      placeholder: string;
      clearAriaLabel: string;
      results: string;
      clear: string;
      allGroups: string;
      codes: string;
      showAll: string;
      noResults: string;
      noResultsDesc: string;
      clearFilters: string;
      wasteCode: string;
      code: string;
      description: string;
    };
  };
  news: { slug: string; title: string; date: string; excerpt: string }[];
  services: Record<ServiceId, ServiceCopy>;
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      corporate: 'Kurumsal',
      about: 'Hakkımızda',
      missionVision: 'Misyon & Vizyon',
      values: 'Değerlerimiz',
      services: 'Hizmetlerimiz',
      allServices: 'Tüm Hizmetleri Gör',
      licenses: 'Lisanslarımız',
      wasteCodes: 'Atık Kodları',
      news: 'Bizden Haberler',
      contact: 'Bize Ulaşın',
      menuLabel: 'Menüyü Aç',
    },
    footer: {
      description: 'ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri San. ve Tic. Ltd. Şti. - Geri dönüşüm ve çevre yönetimi alanında sürdürülebilir çözümler.',
      quickLinks: 'Hızlı Bağlantılar',
      services: 'Hizmetlerimiz',
      contact: 'İletişim',
      allServices: 'Tüm Hizmetleri Gör',
      rights: 'Tüm hakları saklıdır.',
      tagline: 'Sürdürülebilir Gelecek İçin',
    },
    common: { details: 'Detaylar', readMore: 'Devamını Oku', featured: 'Öne Çıkan' },
    ui: {
      scrollToTop: 'Yukarı Çık',
      scrollAriaLabel: 'Yukarı çık',
      contactUs: 'Bize Ulaşın',
    },
    hero: {
      eyebrow: '. ECOREN - Çevre Mühendisliği',
      tagline: 'Geleceği Dönüştürüyoruz',
      line1: 'SÜRDÜRÜLEBİLİR',
      highlight: 'GELECEK',
      line2: 'İÇİN',
      integrated: 'Entegre',
      line3: 'ATIK YÖNETİMİ',
      body: 'Geri dönüşüm ve çevre yönetimi alanında Türkiye’nin öncü firmalarından ECOREN, atık yönetimi ve geri dönüşüm hizmetlerinde çevreye duyarlı çözümler sunar.',
      cta: 'Çözümlerimizi Keşfedin',
      services: 'Hizmetlerimiz',
      contact: 'Bize Ulaşın',
      stats: [
        { value: '21+', label: 'Hizmet Kategorisi' },
        { value: '10+', label: 'Yıllık Deneyim' },
        { value: '500+', label: 'Memnun Müşteri' },
        { value: '1000 ton', label: 'Aylık Yönetim' },
      ],
      serviceArea: 'Türkiye genelinde hizmet veriyoruz',
    },
    about: {
      label: 'Hakkımızda',
      titlePrefix: 'Geri Dönüşüm ve',
      titleHighlight: 'Çevre Yönetimi',
      titleSuffix: 'Alanında Öncü',
      body1: 'Geri dönüşüm ve çevre yönetimi alanında Türkiye’nin öncü firmalarından biridir. Sürdürülebilirlik, Döngüsel Ekonomi ve Yenilenebilir Enerjiye olan bağlılığı ile ECOREN, atık yönetimi ve geri dönüşüm hizmetlerinde sektörde lider konumdadır.',
      body2: 'Şirketimiz, çevreye duyarlı çözümler sunarak müşterilerine değer katarken, aynı zamanda Türkiye’nin Karbon Ayak İzini azaltmayı ve Yeşil Dönüşüme katkıda bulunmayı hedeflemektedir.',
      points: ['Sürdürülebilirlik ve döngüsel ekonomi odağı', 'Yenilenebilir enerji ve yeşil dönüşüm bağlılığı', 'Çevreye duyarlı çözümler', 'Karbon ayak izini azaltma hedefi'],
      cta: 'Daha Fazla Bilgi',
      cardTitle: 'Yıllık Deneyim',
      cardSubtitle: 'Atık Yönetimi & Çevre Mühendisliği',
      cardStats: [
        { v: '21+', l: 'Hizmet' },
        { v: '500+', l: 'Müşteri' },
        { v: '100+', l: 'Tesis' },
        { v: '50+', l: 'Uzman' },
      ],
      sectionPrefix: '. Kurumsal',
      heading: 'Mühendislik Gücüyle Atığı Değere Dönüştürüyoruz',
      bodySection1: 'ECOREN, endüstriyel tesislerin atık yönetim süreçlerini optimize etmek, çevresel etkileri minimize etmek ve yasal uyumluluğu en üst düzeyde sağlamak amacıyla kurulmuş bir mühendislik ve danışmanlık firmasıdır.',
      bodySection2: '"Sıfır Atık" vizyonumuzla, tehlikeli ve tehlikesiz atıkların geri kazanımı konusunda uzman ekibimizle entegre çözümler sunuyoruz.',
      yearsTitle: '10 Yıllık Uzmanlık',
      yearsDesc: 'Atık yönetiminde mühendislik odaklı yaklaşımlarla sektörün öncüsü.',
      feature1: { title: 'Tam Uyumluluk', desc: 'Çevre mevzuatına %100 uyumlu raporlama.' },
      feature2: { title: 'Ar-Ge Odaklı', desc: 'Geri kazanımda yenilikçi teknikler.' },
    },
    servicesSection: { label: 'Hizmetlerimiz', titlePrefix: 'Uçtan Uca', titleHighlight: 'Atık Yönetimi', titleSuffix: 'Çözümleri', sectionTitle: 'Uzman Atık Yönetimi Çözümleri', cta: 'Tüm Hizmetleri Gör' },
    valuesSection: {
      label: 'Değerlerimiz',
      titlePrefix: 'Bizi',
      titleHighlight: 'Farklı Kılan',
      titleSuffix: 'Değerler',
      items: [
        { title: 'Sürdürülebilirlik', desc: 'Tüm operasyonlarımızda çevresel sürdürülebilirliği ön planda tutarak gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz.' },
        { title: 'Döngüsel Ekonomi', desc: 'Atıkları hammadde kaynağına dönüştürerek döngüsel ekonomi prensiplerine uygun, sıfır atık hedefli iş modelleri geliştiriyoruz.' },
        { title: 'Çevre Sorumluluğu', desc: 'Çevre mevzuatına tam uyum ve proaktif çevre yönetimi anlayışıyla sektörde örnek bir çevre sorumluluğu standardı oluşturuyoruz.' },
        { title: 'Güvenilirlik', desc: 'Lisanslı tesisler, sertifikalı ekip ve şeffaf süreç yönetimiyle müşterilerimize her adımda güvenilir hizmet sunuyoruz.' },
      ],
    },
    statsSection: {
      label: 'Rakamlarla ECOREN',
      titlePrefix: '',
      titleHighlight: '10 Yılın',
      titleSuffix: 'Özeti',
      items: [
        { value: 21, suffix: '+', label: 'Hizmet\nKategorisi' },
        { value: 10, suffix: '+', label: 'Yıllık\nDeneyim' },
        { value: 500, suffix: '+', label: 'Memnun\nMüşteri' },
        { value: 1000, suffix: 'ton', label: 'Aylık Atık\nYönetimi' },
        { value: 100, suffix: '+', label: 'Çalışılan\nTesis' },
        { value: 50, suffix: '+', label: 'Uzman\nEkip' },
      ],
    },
    visionSection: {
      label: 'Kurumsal Kimlik',
      title: 'Misyon & Vizyon',
      missionTitle: 'Misyonumuz',
      missionBody: 'ECOREN, gereksiz kaynak kullanımının önüne geçmek amacıyla Sıfır Atık Felsefesini benimsemiş ve Döngüsel Kaynak Yönetimi ile Sürdürülebilirliği odağına alarak kurumsal müşterilerine Atık Yönetimi hizmeti veren bir firmadır.',
      missionTags: ['Sıfır Atık', 'Döngüsel Kaynak Yönetimi', 'Sürdürülebilirlik'],
      visionTitle: 'Vizyonumuz',
      visionBody: 'Geri dönüşüm sektöründe performansına özenilen, çevre ve yaşam değerlerine saygılı öncü bir şirket olarak faaliyetlerimiz ile ülkemiz başta olmak üzere Avrupa ülkelerinde de tercih edilebilir ve güvenilebilir bir yapıyı kazanmaktır.',
      visionTags: ['Öncü Şirket', 'Çevre ve Yaşam Değerleri', 'Güvenilir Yapı'],
    },
    marquee: ['Sıfır Atık', 'Sürdürülebilirlik', 'Mühendislik Mükemmeliyeti', 'Endüstriyel İnovasyon', 'Döngüsel Ekonomi'],
    newsSection: { label: 'Haberler', titlePrefix: 'Bizden', titleHighlight: 'Haberler', cta: 'Tüm Haberler' },
    pages: {
      services: { label: 'Hizmetlerimiz', titlePrefix: 'Tüm', titleHighlight: 'Hizmetlerimiz', desc: 'ECOREN atık yönetimi, geri kazanım, danışmanlık, taşıma, bertaraf ve saha kurulum alanlarında kapsamlı hizmetler sunar.' },
      news: { label: 'Blog & Haberler', titlePrefix: 'Bizden', titleHighlight: 'Haberler', desc: 'Atık yönetimi, çevre mevzuatı ve sürdürülebilirlik alanındaki güncel gelişmeleri takip edin.' },
      corporate: {
        sectionLabel: 'Kurumsal',
        title: 'ECOREN Kurumsal',
        subtitle: 'Atık yönetimi sektöründe 10 yılı aşkın deneyimimiz, uzman kadromuz ve lisanslı hizmetlerimizle kurumsal kimliğimizi tanıyın.',
        explore: 'İncele',
        subPages: [
          { title: 'Hakkımızda', desc: 'ECOREN\'in kuruluş hikayesi, ekibi ve sektördeki yeri hakkında bilgi edinin.' },
          { title: 'Misyon & Vizyon', desc: 'Çevre ve atık yönetimi alanındaki misyonumuzu ve geleceğe yönelik vizyonumuzu keşfedin.' },
          { title: 'Değerlerimiz', desc: 'Bizi biz yapan temel değerleri ve iş yapış anlayışımızı öğrenin.' },
        ],
      },
      contact: {
        label: 'İletişim',
        titlePrefix: 'Bize',
        titleHighlight: 'Ulaşın',
        desc: 'Atık yönetimi hizmetlerimiz hakkında bilgi almak veya teklif talep etmek için bizimle iletişime geçin.',
        infoTitle: 'İletişim Bilgileri',
        supportTitle: 'Hızlı Destek',
        supportDesc: 'Acil atık yönetimi durumları için 7/24 hattımızı arayabilirsiniz.',
        formTitle: 'İletişim Formu',
        successTitle: 'Mesajınız Alındı!',
        successDesc: 'En kısa sürede ekibimiz tarafından geri dönüş yapılacaktır. Teşekkür ederiz.',
        fields: { name: 'Ad Soyad *', company: 'Firma', email: 'E-posta *', phone: 'Telefon', subject: 'Konu', message: 'Mesaj *' },
        placeholders: { name: 'Adınız Soyadınız', company: 'Firma Adınız', email: 'ornek@firma.com', phone: '+90 5XX XXX XX XX', message: 'Mesajınızı yazınız...', subject: 'Konu Seçiniz' },
        subjects: [
          { value: 'tehlikeli-atik', label: 'Tehlikeli Atık Yönetimi' },
          { value: 'tehlikesiz-atik', label: 'Tehlikesiz Atık Yönetimi' },
          { value: 'danismanlik', label: 'Danışmanlık Hizmetleri' },
          { value: 'tasima', label: 'Atık Taşıma' },
          { value: 'diger', label: 'Diğer' },
        ],
        submit: 'Mesaj Gönder',
        contactInfo: [
          { label: 'Adres', value: 'Türkiye' },
          { label: 'Telefon', value: '+90 544 314 15 06' },
          { label: 'E-posta', value: 'info@ecoren.com.tr' },
        ],
      },
      about: {
        sectionLabel: 'Kurumsal',
        title: 'Hakkımızda',
        subtitle: 'ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri San. ve Tic. Ltd. Şti.',
        cta: 'Bize Ulaşın',
        stats: [
          { v: '21+', l: 'Hizmet Alanı' },
          { v: '0', l: 'Sıfır Atık Felsefesi' },
          { v: 'CO₂', l: 'Karbon Ayak İzi Odağı' },
          { v: 'TR', l: 'Yeşil Dönüşüm' },
        ],
      },
      missionVision: {
        sectionLabel: 'Kurumsal',
        subtitle: 'Sıfır Atık Felsefesi, Döngüsel Kaynak Yönetimi ve sürdürülebilirlik odağıyla ilerliyoruz.',
      },
      values: {
        sectionLabel: 'Kurumsal',
        title: 'Değerlerimiz',
        subtitle: 'Bizi biz yapan temel değerler ve iş yapış anlayışımız.',
        items: [
          { title: 'İnsana Saygılı', desc: 'İnsana saygılı, çalışanlarının gelişimini destekleyen ve takım çalışmasına önem veren bir şirket olarak hareket ederiz.', points: ['Çalışan gelişimi', 'Takım çalışması', 'İnsan odaklı yaklaşım'] },
          { title: 'Çevreye Duyarlı', desc: 'Çevreye duyarlı, kalite ve iş güvenliği noktasında sorumluluklarının bilincinde olan bir anlayışla çalışırız.', points: ['Çevre bilinci', 'Kalite odağı', 'İş güvenliği'] },
          { title: 'Dürüst ve Şeffaf', desc: 'Dürüst, şeffaf ve etik çalışma ilkelerini tüm süreçlerimizin merkezinde tutarız.', points: ['Dürüstlük', 'Şeffaflık', 'Etik duruş'] },
          { title: 'Yaratıcı ve Yenilikçi', desc: 'Yaratıcı ve yenilikçi çözümler geliştirerek geri dönüşüm ve çevre yönetimi alanında değer üretiriz.', points: ['Yenilikçilik', 'Çözüm üretimi', 'Sürekli gelişim'] },
          { title: 'Müşteri Odaklı', desc: 'Müşteri odaklı yaklaşımımızla çevreye duyarlı çözümler sunarak müşterilerimize değer katarız.', points: ['Değer katma', 'Güvenilir hizmet', 'Uzun vadeli ilişki'] },
          { title: 'Kalite & İnovasyon', desc: 'Hizmet kalitemizi sürekli geliştiriyor, sektördeki yenilikleri takip ederek en güncel çözümleri müşterilerimize sunuyoruz.', points: ['Sürekli iyileştirme', 'Teknoloji adaptasyonu', 'Sektör liderliği'] },
        ],
      },
      licenses: {
        sectionLabel: 'Yasal Uyum',
        title: 'Lisanslarımız',
        subtitle: 'Tüm hizmetlerimiz Çevre ve Şehircilik Bakanlığı ile ilgili kurumlarca verilen lisans ve sertifikalar kapsamında yürütülmektedir.',
        active: 'Aktif',
        stats: [
          { v: '9+', l: 'Lisans & Sertifika' },
          { v: '10+', l: 'Yıllık Uyum' },
          { v: '100%', l: 'Mevzuat Uyumu' },
          { v: '2', l: 'ISO Sertifikası' },
        ],
        items: [
          { title: 'Tehlikeli Atık Taşıma Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Tehlikeli atıkların ADR düzenlemelerine uygun şekilde taşınması için alınan resmi lisans.' },
          { title: 'Tehlikeli Atık Geri Kazanım Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Tehlikeli sınıf atıkların geri kazanım ve bertaraf işlemleri için gerekli bakanlık lisansı.' },
          { title: 'Tehlikesiz Atık Geri Kazanım Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Tehlikesiz sınıf endüstriyel atıkların geri kazanım işlemleri lisansı.' },
          { title: 'ÖTA (Ömrünü Tamamlamış Araç) Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Ömrünü tamamlamış araçların çevreci söküm ve bertaraf işlemleri için özel lisans.' },
          { title: 'Elektronik Atık (AEEE) Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'AEEE Yönetmeliği kapsamında elektrikli ve elektronik atıkların geri kazanım lisansı.' },
          { title: 'Atık Yağ Geri Kazanım Lisansı', authority: 'Çevre ve Şehircilik Bakanlığı', desc: 'Motor ve endüstriyel atık yağların lisanslı tesislerde geri kazanımı için alınan belge.' },
          { title: 'ADR Güvenlik Danışmanlığı Sertifikası', authority: 'Ulaştırma Bakanlığı', desc: 'Tehlikeli madde taşımacılığı alanında ADR kapsamında güvenlik danışmanlığı sertifikası.' },
          { title: 'ISO 14001 Çevre Yönetim Sistemi', authority: 'Akredite Belgelendirme Kuruluşu', desc: 'Uluslararası Çevre Yönetim Sistemi standardı kapsamında akredite sertifika.' },
          { title: 'ISO 9001 Kalite Yönetim Sistemi', authority: 'Akredite Belgelendirme Kuruluşu', desc: 'Uluslararası Kalite Yönetim Sistemi standardı kapsamında akredite sertifika.' },
        ],
        ctaTitle: 'Lisans ve Sertifikalarımız Hakkında Detaylı Bilgi',
        ctaDesc: 'Tüm lisans ve sertifikalarımıza ilişkin resmi belgeler için bizimle iletişime geçebilirsiniz.',
        ctaLabel: 'Bize Ulaşın',
      },
      serviceDetail: {
        allServices: 'Tüm Hizmetler',
        sectionLabel: 'Hizmetlerimiz',
        detailsTitle: 'Hizmet Detayları',
        benefitsTitle: 'Temel Faydalar',
        ctaTitle: 'Bu hizmet hakkında daha fazla bilgi almak ister misiniz?',
        ctaDesc: 'Uzman ekibimiz size özel çözümler sunmak için hazır. Hemen iletişime geçin.',
        ctaLabel: 'Bize Ulaşın',
        contactTitle: 'Hızlı İletişim',
        contactForm: 'Form ile Ulaşın',
        relatedTitle: 'İlgili Hizmetler',
        allServicesLink: 'Tüm Hizmetler →',
        serviceDetails: {
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
        },
        defaultBody: [
          'ECOREN, bu hizmet alanında sektörün en deneyimli ve lisanslı firmalarından biri olarak profesyonel çözümler sunmaktadır. Uzman kadromuz ve geniş tesis ağımızla Türkiye genelinde kesintisiz hizmet vermekteyiz.',
          'Hizmetimiz; mevzuata tam uyum, güvenli operasyon ve çevresel sorumluluk ilkeleri çerçevesinde yürütülmektedir. Müşterilerimize özel çözümler geliştirerek süreçlerin en verimli şekilde yönetilmesini sağlıyoruz.',
          'Tüm operasyonlarımız Çevre ve Şehircilik Bakanlığı onaylı lisanslar kapsamında, sertifikalı personel tarafından gerçekleştirilmektedir. Şeffaf raporlama ve düzenli bilgilendirme ile müşterilerimize tam destek sunuyoruz.',
        ],
        defaultBenefits: ['Lisanslı ve sertifikalı hizmet', 'Mevzuata tam uyum', 'Uzman ekip desteği', 'Türkiye geneli operasyon', 'Şeffaf raporlama ve bilgilendirme'],
      },
      wasteCodes: {
        heroLabel: 'Tehlikeli Atık Kodları',
        heroTitle: 'Atık Kodları Listesi',
        heroDesc: 'Tehlikeli atıkların sınıflandırılması için kullanılan atık kodlarını grup başlıkları, kod numaraları ve açıklamalarıyla birlikte inceleyebilirsiniz.',
        searchByText: 'Metne Göre Ara',
        searchByGroup: 'Gruba Göre',
        placeholder: 'Kod veya açıklama…',
        clearAriaLabel: 'Aramayı temizle',
        results: 'sonuç',
        clear: 'temizle',
        allGroups: 'Tüm Gruplar',
        codes: 'kod',
        showAll: 'tümünü göster',
        noResults: 'Sonuç bulunamadı',
        noResultsDesc: 'Farklı bir arama terimi veya filtre kombinasyonu deneyin.',
        clearFilters: 'Filtreleri temizle',
        wasteCode: 'Atık Kodu',
        code: 'Kod',
        description: 'Açıklama',
      },
    },
    services: {} as Record<ServiceId, ServiceCopy>,
    news: [
      { slug: 'sifir-atik-yonetmeligi-2024', title: 'Sıfır Atık Yönetmeliğinde 2024 Değişiklikleri', date: '15 Nisan 2025', excerpt: 'Çevre ve Şehircilik Bakanlığı tarafından güncellenen Sıfır Atık Yönetmeliği kapsamında firmaların uyum süreçleri.' },
      { slug: 'dongusel-ekonomi-turkiye', title: "Döngüsel Ekonomi ve Türkiye’nin Yeşil Dönüşümü", date: '2 Mart 2025', excerpt: "Döngüsel ekonomi ilkelerinin Türk sanayi sektörüne entegrasyonu ve ECOREN’in bu süreçteki rolü." },
      { slug: 'karbon-ayak-izi-azaltma', title: 'Kurumsal Karbon Ayak İzini Azaltmanın 5 Yolu', date: '10 Şubat 2025', excerpt: 'Şirketlerin atık yönetimi ve enerji verimliliği adımlarıyla karbon nötr hedeflerine ulaşması.' },
      { slug: 'elektronik-atik-yonetimi', title: 'Elektronik Atık Yönetiminde Yeni Dönem', date: '5 Ocak 2025', excerpt: 'AEEE yönetmeliği kapsamında elektronik atık toplama ve geri kazanım süreçlerindeki son gelişmeler.' },
    ],
  },
  en: {
    nav: {
      home: 'Home',
      corporate: 'Corporate',
      about: 'About Us',
      missionVision: 'Mission & Vision',
      values: 'Values',
      services: 'Services',
      allServices: 'View All Services',
      licenses: 'Licenses',
      wasteCodes: 'Waste Codes',
      news: 'News',
      contact: 'Contact Us',
      menuLabel: 'Open menu',
    },
    footer: {
      description: 'Waste Management Consultancy and Engineering Services Ltd. - Environment-focused solutions for a sustainable future.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      allServices: 'View All Services',
      rights: 'All rights reserved.',
      tagline: 'For a Sustainable Future',
    },
    common: { details: 'Details', readMore: 'Read More', featured: 'Featured' },
    ui: {
      scrollToTop: 'Back to Top',
      scrollAriaLabel: 'Scroll to top',
      contactUs: 'Contact Us',
    },
    hero: {
      eyebrow: '. ECOREN - Environmental Engineering',
      tagline: 'Transforming the Future',
      line1: 'SUSTAINABLE',
      highlight: 'FUTURE',
      line2: 'THROUGH',
      integrated: 'Integrated',
      line3: 'WASTE MANAGEMENT',
      body: 'ECOREN delivers professional solutions across 21 service categories, from recovery, disposal and transport of hazardous and non-hazardous waste to environmental consultancy.',
      cta: 'Explore Our Solutions',
      services: 'Our Services',
      contact: 'Contact Us',
      stats: [
        { value: '21+', label: 'Service Categories' },
        { value: '10+', label: 'Years Experience' },
        { value: '500+', label: 'Happy Clients' },
        { value: '1000 tons', label: 'Monthly Management' },
      ],
      serviceArea: 'Serving clients across Turkey',
    },
    about: {
      label: 'About Us',
      titlePrefix: "Turkey’s Trusted",
      titleHighlight: 'Waste Management',
      titleSuffix: 'Partner',
      body1: 'With more than 10 years of experience, ECOREN is one of Turkey’s leading waste management consultancy and engineering companies. We provide integrated solutions that fully comply with environmental legislation, including recovery, disposal, transport and storage of hazardous and non-hazardous waste.',
      body2: 'Guided by Zero Waste and Circular Economy principles, we continue to build a sustainable future with a broad service portfolio for industrial facilities, municipalities and public institutions.',
      points: ['Licensed and certified waste management services', 'Broad operational network across Turkey', 'Experienced environmental engineering team', 'Full support for zero waste policy compliance'],
      cta: 'Learn More',
      cardTitle: 'Years Experience',
      cardSubtitle: 'Waste Management & Environmental Engineering',
      cardStats: [
        { v: '21+', l: 'Services' },
        { v: '500+', l: 'Clients' },
        { v: '100+', l: 'Facilities' },
        { v: '50+', l: 'Experts' },
      ],
      sectionPrefix: '. Corporate',
      heading: 'Turning Waste into Value Through Engineering',
      bodySection1: 'ECOREN is an engineering and consultancy firm established to optimize waste management processes for industrial facilities, minimize environmental impacts and ensure the highest level of legal compliance.',
      bodySection2: 'With our "Zero Waste" vision, our expert team delivers integrated solutions for the recovery of hazardous and non-hazardous waste.',
      yearsTitle: '10 Years of Expertise',
      yearsDesc: 'An industry pioneer with engineering-driven approaches to waste management.',
      feature1: { title: 'Full Compliance', desc: '100% compliant reporting under environmental regulations.' },
      feature2: { title: 'R&D Focused', desc: 'Innovative techniques in recovery and recycling.' },
    },
    servicesSection: { label: 'Services', titlePrefix: 'End-to-End', titleHighlight: 'Waste Management', titleSuffix: 'Solutions', sectionTitle: 'Expert Waste Management Solutions', cta: 'View All Services' },
    valuesSection: {
      label: 'Values',
      titlePrefix: 'The Values',
      titleHighlight: 'That Set Us',
      titleSuffix: 'Apart',
      items: [
        { title: 'Sustainability', desc: 'We prioritize environmental sustainability in every operation and aim to leave a livable world for future generations.' },
        { title: 'Circular Economy', desc: 'We turn waste into raw material sources and develop zero-waste business models aligned with circular economy principles.' },
        { title: 'Environmental Responsibility', desc: 'We set a strong responsibility standard through full regulatory compliance and proactive environmental management.' },
        { title: 'Reliability', desc: 'Licensed facilities, certified teams and transparent processes help us deliver dependable service at every step.' },
      ],
    },
    statsSection: {
      label: 'ECOREN in Numbers',
      titlePrefix: '',
      titleHighlight: '10 Years',
      titleSuffix: 'in Brief',
      items: [
        { value: 21, suffix: '+', label: 'Service\nCategories' },
        { value: 10, suffix: '+', label: 'Years\nExperience' },
        { value: 500, suffix: '+', label: 'Happy\nClients' },
        { value: 1000, suffix: 'tons', label: 'Monthly Waste\nManagement' },
        { value: 100, suffix: '+', label: 'Facilities\nServed' },
        { value: 50, suffix: '+', label: 'Expert\nTeam' },
      ],
    },
    visionSection: {
      label: 'Corporate Identity',
      title: 'Mission & Vision',
      missionTitle: 'Our Mission',
      missionBody: 'To provide services at the highest standards for recovery and disposal of industrial waste without harming the environment, helping customers meet environmental regulations and reach sustainability goals.',
      missionTags: ['Regulatory Compliance', 'Licensed Service', 'Reliable Solution'],
      visionTitle: 'Our Vision',
      visionBody: 'To be Turkey’s most innovative and reliable integrated waste management company built on circular economy and zero waste principles, leading eco-friendly industrial transformation at international standards.',
      visionTags: ['Zero Waste', 'Circular Economy', 'Green Transformation'],
    },
    marquee: ['Zero Waste', 'Sustainability', 'Engineering Excellence', 'Industrial Innovation', 'Circular Economy'],
    newsSection: { label: 'News', titlePrefix: 'Latest', titleHighlight: 'News', cta: 'All News' },
    pages: {
      services: { label: 'Services', titlePrefix: 'All', titleHighlight: 'Services', desc: 'Professional solutions in 21 categories, from hazardous and non-hazardous waste management to environmental consultancy.' },
      news: { label: 'Blog & News', titlePrefix: 'Latest', titleHighlight: 'News', desc: 'Follow current developments in waste management, environmental regulations and sustainability.' },
      corporate: {
        sectionLabel: 'Corporate',
        title: 'ECOREN Corporate',
        subtitle: 'Get to know our corporate identity with over 10 years of experience, expert staff and licensed services in the waste management industry.',
        explore: 'Explore',
        subPages: [
          { title: 'About Us', desc: 'Learn about ECOREN’s founding story, team and position in the industry.' },
          { title: 'Mission & Vision', desc: 'Discover our mission in environmental and waste management and our vision for the future.' },
          { title: 'Our Values', desc: 'Learn about the core values and working principles that define us.' },
        ],
      },
      contact: {
        label: 'Contact',
        titlePrefix: 'Contact',
        titleHighlight: 'Us',
        desc: 'Get in touch to learn more about our waste management services or request a proposal.',
        infoTitle: 'Contact Details',
        supportTitle: 'Fast Support',
        supportDesc: 'For urgent waste management needs, you can call our 24/7 support line.',
        formTitle: 'Contact Form',
        successTitle: 'Your Message Has Been Received!',
        successDesc: 'Our team will get back to you as soon as possible. Thank you.',
        fields: { name: 'Full Name *', company: 'Company', email: 'Email *', phone: 'Phone', subject: 'Subject', message: 'Message *' },
        placeholders: { name: 'Your full name', company: 'Company name', email: 'name@company.com', phone: '+90 5XX XXX XX XX', message: 'Write your message...', subject: 'Select a subject' },
        subjects: [
          { value: 'tehlikeli-atik', label: 'Hazardous Waste Management' },
          { value: 'tehlikesiz-atik', label: 'Non-Hazardous Waste Management' },
          { value: 'danismanlik', label: 'Consultancy Services' },
          { value: 'tasima', label: 'Waste Transport' },
          { value: 'diger', label: 'Other' },
        ],
        submit: 'Send Message',
        contactInfo: [
          { label: 'Address', value: 'Turkey' },
          { label: 'Phone', value: '+90 544 314 15 06' },
          { label: 'Email', value: 'info@ecoren.com.tr' },
        ],
      },
      about: {
        sectionLabel: 'Corporate',
        title: 'About Us',
        subtitle: 'ECOREN Waste Management Consultancy and Engineering Services Ltd.',
        cta: 'Contact Us',
        stats: [
          { v: '21+', l: 'Service Areas' },
          { v: '0', l: 'Zero Waste Philosophy' },
          { v: 'CO₂', l: 'Carbon Footprint Focus' },
          { v: 'TR', l: 'Green Transformation' },
        ],
      },
      missionVision: {
        sectionLabel: 'Corporate',
        subtitle: 'We advance with Zero Waste philosophy, circular resource management and a focus on sustainability.',
      },
      values: {
        sectionLabel: 'Corporate',
        title: 'Our Values',
        subtitle: 'The core values and working principles that define us.',
        items: [
          { title: 'Respect for People', desc: 'We act as a company that respects people, supports employee development, and values teamwork.', points: ['Employee development', 'Teamwork', 'People-first approach'] },
          { title: 'Environmental Awareness', desc: 'We operate with a sense of responsibility for the environment, quality, and workplace safety.', points: ['Environmental awareness', 'Quality focus', 'Workplace safety'] },
          { title: 'Honest & Transparent', desc: 'We keep honesty, transparency, and ethical working principles at the center of all our processes.', points: ['Honesty', 'Transparency', 'Ethical stance'] },
          { title: 'Creative & Innovative', desc: 'We create value in recycling and environmental management by developing creative and innovative solutions.', points: ['Innovation', 'Solution creation', 'Continuous improvement'] },
          { title: 'Customer Focused', desc: 'With our customer-centric approach, we add value to our customers by offering environmentally sensitive solutions.', points: ['Value creation', 'Reliable service', 'Long-term relationship'] },
          { title: 'Quality & Innovation', desc: 'We continuously improve our service quality and track industry innovations to provide the most up-to-date solutions.', points: ['Continuous improvement', 'Technology adoption', 'Industry leadership'] },
        ],
      },
      licenses: {
        sectionLabel: 'Legal Compliance',
        title: 'Our Licenses',
        subtitle: 'All our services are conducted under licenses and certificates issued by the Ministry of Environment and Urbanization and relevant authorities.',
        active: 'Active',
        stats: [
          { v: '9+', l: 'Licenses & Certificates' },
          { v: '10+', l: 'Years of Compliance' },
          { v: '100%', l: 'Regulatory Compliance' },
          { v: '2', l: 'ISO Certificates' },
        ],
        items: [
          { title: 'Hazardous Waste Transport License', authority: 'Ministry of Environment and Urbanization', desc: 'Official license for transporting hazardous waste in accordance with ADR regulations.' },
          { title: 'Hazardous Waste Recovery License', authority: 'Ministry of Environment and Urbanization', desc: 'Ministry license required for recovery and disposal of hazardous waste.' },
          { title: 'Non-Hazardous Waste Recovery License', authority: 'Ministry of Environment and Urbanization', desc: 'License for recovery of non-hazardous industrial waste.' },
          { title: 'End-of-Life Vehicle (ELV) License', authority: 'Ministry of Environment and Urbanization', desc: 'Special license for eco-friendly dismantling and disposal of end-of-life vehicles.' },
          { title: 'Electronic Waste (WEEE) License', authority: 'Ministry of Environment and Urbanization', desc: 'Recovery license for electrical and electronic waste under WEEE regulations.' },
          { title: 'Waste Oil Recovery License', authority: 'Ministry of Environment and Urbanization', desc: 'License for recovery of motor and industrial waste oils at licensed facilities.' },
          { title: 'ADR Safety Advisor Certificate', authority: 'Ministry of Transport', desc: 'Safety advisory certificate covering dangerous goods transport under ADR.' },
          { title: 'ISO 14001 Environmental Management System', authority: 'Accredited Certification Body', desc: 'Accredited certificate under the International Environmental Management System standard.' },
          { title: 'ISO 9001 Quality Management System', authority: 'Accredited Certification Body', desc: 'Accredited certificate under the International Quality Management System standard.' },
        ],
        ctaTitle: 'Detailed Information About Our Licenses and Certificates',
        ctaDesc: 'Contact us for official documents related to all our licenses and certificates.',
        ctaLabel: 'Contact Us',
      },
      serviceDetail: {
        allServices: 'All Services',
        sectionLabel: 'Services',
        detailsTitle: 'Service Details',
        benefitsTitle: 'Key Benefits',
        ctaTitle: 'Would you like more information about this service?',
        ctaDesc: 'Our expert team is ready to offer tailored solutions. Get in touch now.',
        ctaLabel: 'Contact Us',
        contactTitle: 'Quick Contact',
        contactForm: 'Contact via Form',
        relatedTitle: 'Related Services',
        allServicesLink: 'All Services →',
        serviceDetails: {
          'entegre-atik-yonetimi': {
            body: [
              'Our Integrated Waste Management Service manages all waste types generated by your facility under one roof, helping you achieve Zero Waste targets. The entire process, from waste generation to final disposal, is handled by our expert team.',
              'Our service covers waste inventory, waste management plan preparation, coordination of licensed transport and disposal processes, and all statutory notifications to the Ministry of Environment.',
              'We establish an integrated waste management system aligned with circular economy principles, covering all mandatory practices under the Zero Waste Regulation.',
            ],
            benefits: ['End-to-end waste management responsibility', 'Legal compliance guarantee', 'Cost optimization', 'Zero waste certificate support', 'Regular reporting and monitoring'],
          },
          'danismanlik-hizmetleri': {
            body: [
              'The complex and ever-changing nature of environmental legislation increases the need for expert consultancy. ECOREN Consultancy Services ensures your company fully meets all environmental obligations.',
              'Our scope includes waste management licenses, environmental impact assessment (EIA), zero waste certificate applications, waste management plan preparation, and environmental audit processes.',
              'Our team of experienced environmental engineers and legal experts closely follows regulatory changes and proactively informs our clients.',
            ],
            benefits: ['Regulatory compliance consultancy', 'License process management', 'Waste management plan preparation', 'EIA consultancy', 'Regulatory authority relations'],
          },
        },
        defaultBody: [
          'ECOREN provides professional solutions as one of the most experienced and licensed firms in this service area. With our expert staff and extensive facility network, we deliver uninterrupted service throughout Turkey.',
          'Our service is conducted in accordance with full regulatory compliance, safe operations, and environmental responsibility principles. We develop tailored solutions for our clients to ensure the most efficient process management.',
          'All our operations are carried out by certified personnel under licenses approved by the Ministry of Environment and Urbanization. We provide full support through transparent reporting and regular updates.',
        ],
        defaultBenefits: ['Licensed and certified service', 'Full regulatory compliance', 'Expert team support', 'Nationwide operations', 'Transparent reporting and communication'],
      },
      wasteCodes: {
        heroLabel: 'Hazardous Waste Codes',
        heroTitle: 'Waste Code List',
        heroDesc: 'Browse waste codes used for classifying hazardous waste, along with group headings, code numbers and descriptions.',
        searchByText: 'Search by Text',
        searchByGroup: 'Search by Group',
        placeholder: 'Code or description…',
        clearAriaLabel: 'Clear search',
        results: 'results',
        clear: 'clear',
        allGroups: 'All Groups',
        codes: 'codes',
        showAll: 'show all',
        noResults: 'No results found',
        noResultsDesc: 'Try a different search term or filter combination.',
        clearFilters: 'Clear filters',
        wasteCode: 'Waste Code',
        code: 'Code',
        description: 'Description',
      },
    },
    services: {} as Record<ServiceId, ServiceCopy>,
    news: [
      { slug: 'sifir-atik-yonetmeligi-2024', title: '2024 Updates to the Zero Waste Regulation', date: '15 April 2025', excerpt: 'Compliance processes for companies under the updated Zero Waste Regulation issued by the Ministry of Environment and Urbanization.' },
      { slug: 'dongusel-ekonomi-turkiye', title: "Circular Economy and Turkey’s Green Transformation", date: '2 March 2025', excerpt: 'The integration of circular economy principles into Turkish industry and ECOREN’s role in this transition.' },
      { slug: 'karbon-ayak-izi-azaltma', title: '5 Ways to Reduce Corporate Carbon Footprint', date: '10 February 2025', excerpt: 'How companies can reach carbon-neutral targets through waste management and energy efficiency steps.' },
      { slug: 'elektronik-atik-yonetimi', title: 'A New Era in Electronic Waste Management', date: '5 January 2025', excerpt: 'Recent developments in electronic waste collection and recovery processes under WEEE regulations.' },
    ],
  },
  de: {
    nav: {
      home: 'Startseite',
      corporate: 'Unternehmen',
      about: 'Über Uns',
      missionVision: 'Mission & Vision',
      values: 'Werte',
      services: 'Leistungen',
      allServices: 'Alle Leistungen',
      licenses: 'Lizenzen',
      wasteCodes: 'Abfallcodes',
      news: 'Neuigkeiten',
      contact: 'Kontakt',
      menuLabel: 'Menü öffnen',
    },
    footer: {
      description: 'Beratung und Ingenieurwesen für Abfallmanagement - umweltorientierte Lösungen für eine nachhaltige Zukunft.',
      quickLinks: 'Schnellzugriff',
      services: 'Leistungen',
      contact: 'Kontakt',
      allServices: 'Alle Leistungen',
      rights: 'Alle Rechte vorbehalten.',
      tagline: 'Für eine nachhaltige Zukunft',
    },
    common: { details: 'Details', readMore: 'Weiterlesen', featured: 'Empfohlen' },
    ui: {
      scrollToTop: 'Nach Oben',
      scrollAriaLabel: 'Nach oben scrollen',
      contactUs: 'Kontakt',
    },
    hero: {
      eyebrow: '. ECOREN - Umwelttechnik',
      tagline: 'Die Zukunft Gestalten',
      line1: 'NACHHALTIGE',
      highlight: 'ZUKUNFT',
      line2: 'DURCH',
      integrated: 'Integriertes',
      line3: 'ABFALLMANAGEMENT',
      body: 'ECOREN bietet professionelle Lösungen in 21 Leistungskategorien, von Rückgewinnung, Entsorgung und Transport gefährlicher und ungefährlicher Abfälle bis zur Umweltberatung.',
      cta: 'Unsere Lösungen Entdecken',
      services: 'Leistungen',
      contact: 'Kontakt',
      stats: [
        { value: '21+', label: 'Leistungskategorien' },
        { value: '10+', label: 'Jahre Erfahrung' },
        { value: '500+', label: 'Zufriedene Kunden' },
        { value: '1000 t', label: 'Monatliches Management' },
      ],
      serviceArea: 'Wir bedienen Kunden in der ganzen Türkei',
    },
    about: {
      label: 'Über Uns',
      titlePrefix: 'Der zuverlässige',
      titleHighlight: 'Abfallmanagement',
      titleSuffix: 'Partner der Türkei',
      body1: 'Mit mehr als 10 Jahren Erfahrung gehört ECOREN zu den führenden türkischen Beratungs- und Ingenieurunternehmen im Abfallmanagement. Wir bieten integrierte Lösungen, die der Umweltgesetzgebung vollständig entsprechen.',
      body2: 'Nach den Prinzipien Zero Waste und Kreislaufwirtschaft schaffen wir mit einem umfassenden Leistungsportfolio für Industrie, Kommunen und öffentliche Einrichtungen eine nachhaltige Zukunft.',
      points: ['Lizenzierte und zertifizierte Abfallmanagementleistungen', 'Breites operatives Netzwerk in der Türkei', 'Erfahrenes Team aus Umweltingenieuren', 'Umfassende Unterstützung für Zero-Waste-Konformität'],
      cta: 'Mehr Erfahren',
      cardTitle: 'Jahre Erfahrung',
      cardSubtitle: 'Abfallmanagement & Umwelttechnik',
      cardStats: [
        { v: '21+', l: 'Leistungen' },
        { v: '500+', l: 'Kunden' },
        { v: '100+', l: 'Anlagen' },
        { v: '50+', l: 'Experten' },
      ],
      sectionPrefix: '. Unternehmen',
      heading: 'Abfall durch Ingenieurkunst in Wert verwandeln',
      bodySection1: 'ECOREN ist ein Ingenieur- und Beratungsunternehmen, das gegründet wurde, um Abfallmanagementprozesse industrieller Anlagen zu optimieren, Umweltauswirkungen zu minimieren und höchste Rechtskonformität sicherzustellen.',
      bodySection2: 'Mit unserer "Zero Waste"-Vision bietet unser Expertenteam integrierte Lösungen für die Rückgewinnung von gefährlichen und ungefährlichen Abfällen.',
      yearsTitle: '10 Jahre Expertise',
      yearsDesc: 'Ein Branchenpionier mit ingenieursgetriebenen Ansätzen im Abfallmanagement.',
      feature1: { title: 'Volle Konformität', desc: '100% regelkonforme Berichterstattung gemäß Umweltvorschriften.' },
      feature2: { title: 'F&E-Fokus', desc: 'Innovative Techniken in Rückgewinnung und Recycling.' },
    },
    servicesSection: { label: 'Leistungen', titlePrefix: 'Ganzheitliche', titleHighlight: 'Abfallmanagement', titleSuffix: 'Lösungen', sectionTitle: 'Professionelle Abfallmanagement-Lösungen', cta: 'Alle Leistungen' },
    valuesSection: {
      label: 'Werte',
      titlePrefix: 'Werte,',
      titleHighlight: 'Die Uns',
      titleSuffix: 'Auszeichnen',
      items: [
        { title: 'Nachhaltigkeit', desc: 'Wir stellen ökologische Nachhaltigkeit in allen Abläufen in den Mittelpunkt und handeln für kommende Generationen.' },
        { title: 'Kreislaufwirtschaft', desc: 'Wir verwandeln Abfälle in Rohstoffquellen und entwickeln Geschäftsmodelle mit Zero-Waste-Ziel.' },
        { title: 'Umweltverantwortung', desc: 'Mit vollständiger Rechtskonformität und proaktivem Umweltmanagement setzen wir hohe Standards.' },
        { title: 'Zuverlässigkeit', desc: 'Lizenzierte Anlagen, zertifizierte Teams und transparente Prozesse sichern zuverlässige Leistungen.' },
      ],
    },
    statsSection: {
      label: 'ECOREN in Zahlen',
      titlePrefix: '',
      titleHighlight: '10 Jahre',
      titleSuffix: 'im Überblick',
      items: [
        { value: 21, suffix: '+', label: 'Leistungs-\nKategorien' },
        { value: 10, suffix: '+', label: 'Jahre\nErfahrung' },
        { value: 500, suffix: '+', label: 'Zufriedene\nKunden' },
        { value: 1000, suffix: 't', label: 'Monatliches Abfall-\nmanagement' },
        { value: 100, suffix: '+', label: 'Betreute\nAnlagen' },
        { value: 50, suffix: '+', label: 'Experten-\nTeam' },
      ],
    },
    visionSection: {
      label: 'Unternehmensidentität',
      title: 'Mission & Vision',
      missionTitle: 'Unsere Mission',
      missionBody: 'Industrieabfälle nach höchsten Standards umweltgerecht zurückzugewinnen und zu entsorgen, Kunden bei der Einhaltung von Umweltvorschriften zu unterstützen und ihre Nachhaltigkeitsziele zu fördern.',
      missionTags: ['Rechtskonformität', 'Lizenzierte Leistung', 'Zuverlässige Lösung'],
      visionTitle: 'Unsere Vision',
      visionBody: 'Das innovativste und zuverlässigste integrierte Abfallmanagementunternehmen der Türkei zu sein und den umweltfreundlichen industriellen Wandel nach internationalen Standards anzuführen.',
      visionTags: ['Zero Waste', 'Kreislaufwirtschaft', 'Grüne Transformation'],
    },
    marquee: ['Zero Waste', 'Nachhaltigkeit', 'Ingenieursexzellenz', 'Industrielle Innovation', 'Kreislaufwirtschaft'],
    newsSection: { label: 'Neuigkeiten', titlePrefix: 'Aktuelle', titleHighlight: 'Neuigkeiten', cta: 'Alle Neuigkeiten' },
    pages: {
      services: { label: 'Leistungen', titlePrefix: 'Alle', titleHighlight: 'Leistungen', desc: 'Professionelle Lösungen in 21 Kategorien, vom Management gefährlicher und ungefährlicher Abfälle bis zur Umweltberatung.' },
      news: { label: 'Blog & Neuigkeiten', titlePrefix: 'Aktuelle', titleHighlight: 'Neuigkeiten', desc: 'Verfolgen Sie aktuelle Entwicklungen in Abfallmanagement, Umweltrecht und Nachhaltigkeit.' },
      corporate: {
        sectionLabel: 'Unternehmen',
        title: 'ECOREN Unternehmen',
        subtitle: 'Lernen Sie unsere Unternehmensidentität mit über 10 Jahren Erfahrung, Fachpersonal und lizenzierten Leistungen in der Abfallmanagementbranche kennen.',
        explore: 'Entdecken',
        subPages: [
          { title: 'Über Uns', desc: 'Erfahren Sie mehr über ECORENs Gründungsgeschichte, Team und Position in der Branche.' },
          { title: 'Mission & Vision', desc: 'Entdecken Sie unsere Mission im Umwelt- und Abfallmanagement und unsere Zukunftsvision.' },
          { title: 'Unsere Werte', desc: 'Lernen Sie die Grundwerte und Arbeitsweise kennen, die uns ausmachen.' },
        ],
      },
      contact: {
        label: 'Kontakt',
        titlePrefix: 'Kontaktieren',
        titleHighlight: 'Sie Uns',
        desc: 'Kontaktieren Sie uns, um mehr über unsere Leistungen zu erfahren oder ein Angebot anzufordern.',
        infoTitle: 'Kontaktdaten',
        supportTitle: 'Schnelle Unterstützung',
        supportDesc: 'Für dringende Abfallmanagementfälle erreichen Sie unsere 24/7-Hotline.',
        formTitle: 'Kontaktformular',
        successTitle: 'Ihre Nachricht wurde empfangen!',
        successDesc: 'Unser Team wird sich so schnell wie möglich bei Ihnen melden. Vielen Dank.',
        fields: { name: 'Name *', company: 'Unternehmen', email: 'E-Mail *', phone: 'Telefon', subject: 'Betreff', message: 'Nachricht *' },
        placeholders: { name: 'Ihr Name', company: 'Unternehmensname', email: 'name@firma.com', phone: '+90 5XX XXX XX XX', message: 'Ihre Nachricht...', subject: 'Betreff auswählen' },
        subjects: [
          { value: 'tehlikeli-atik', label: 'Gefährliches Abfallmanagement' },
          { value: 'tehlikesiz-atik', label: 'Ungefährliches Abfallmanagement' },
          { value: 'danismanlik', label: 'Beratungsleistungen' },
          { value: 'tasima', label: 'Abfalltransport' },
          { value: 'diger', label: 'Sonstiges' },
        ],
        submit: 'Nachricht Senden',
        contactInfo: [
          { label: 'Adresse', value: 'Türkei' },
          { label: 'Telefon', value: '+90 544 314 15 06' },
          { label: 'E-Mail', value: 'info@ecoren.com.tr' },
        ],
      },
      about: {
        sectionLabel: 'Unternehmen',
        title: 'Über Uns',
        subtitle: 'ECOREN Abfallmanagement Beratungs- und Ingenieurgesellschaft',
        cta: 'Kontaktieren Sie Uns',
        stats: [
          { v: '21+', l: 'Servicebereiche' },
          { v: '0', l: 'Zero-Waste-Philosophie' },
          { v: 'CO₂', l: 'CO₂-Fußabdruck-Fokus' },
          { v: 'TR', l: 'Grüne Transformation' },
        ],
      },
      missionVision: {
        sectionLabel: 'Unternehmen',
        subtitle: 'Wir entwickeln uns mit der Zero-Waste-Philosophie, zirkulärem Ressourcenmanagement und Nachhaltigkeitsfokus.',
      },
      values: {
        sectionLabel: 'Unternehmen',
        title: 'Unsere Werte',
        subtitle: 'Die Grundwerte und Arbeitsweise, die uns ausmachen.',
        items: [
          { title: 'Respekt vor Menschen', desc: 'Wir handeln als Unternehmen, das Menschen respektiert, die Entwicklung der Mitarbeiter unterstützt und Teamarbeit wertschätzt.', points: ['Mitarbeiterentwicklung', 'Teamarbeit', 'Menschenzentrierter Ansatz'] },
          { title: 'Umweltbewusstsein', desc: 'Wir arbeiten mit einem Bewusstsein für Umwelt, Qualität und Arbeitssicherheit.', points: ['Umweltbewusstsein', 'Qualitätsfokus', 'Arbeitssicherheit'] },
          { title: 'Ehrlich & Transparent', desc: 'Wir stellen Ehrlichkeit, Transparenz und ethische Grundsätze in den Mittelpunkt aller unserer Prozesse.', points: ['Ehrlichkeit', 'Transparenz', 'Ethische Haltung'] },
          { title: 'Kreativ & Innovativ', desc: 'Wir schaffen Mehrwert durch kreative und innovative Lösungen im Recycling und Umweltmanagement.', points: ['Innovation', 'Lösungsentwicklung', 'Kontinuierliche Verbesserung'] },
          { title: 'Kundenorientiert', desc: 'Mit unserem kundenorientierten Ansatz fügen wir unseren Kunden durch umweltsensible Lösungen Mehrwert hinzu.', points: ['Mehrwertschaffung', 'Zuverlässiger Service', 'Langfristige Beziehung'] },
          { title: 'Qualität & Innovation', desc: 'Wir verbessern kontinuierlich unsere Servicequalität und verfolgen Brancheninnovationen.', points: ['Kontinuierliche Verbesserung', 'Technologieadoption', 'Branchenführerschaft'] },
        ],
      },
      licenses: {
        sectionLabel: 'Rechtliche Konformität',
        title: 'Unsere Lizenzen',
        subtitle: 'Alle unsere Leistungen werden im Rahmen von Lizenzen und Zertifikaten des Umweltministeriums und relevanter Behörden durchgeführt.',
        active: 'Aktiv',
        stats: [
          { v: '9+', l: 'Lizenzen & Zertifikate' },
          { v: '10+', l: 'Jahre Konformität' },
          { v: '100%', l: 'Rechtskonformität' },
          { v: '2', l: 'ISO-Zertifikate' },
        ],
        items: [
          { title: 'Transportlizenz für gefährliche Abfälle', authority: 'Umwelt- und Stadtplanungsministerium', desc: 'Offizielle Lizenz für den Transport gefährlicher Abfälle gemäß ADR-Vorschriften.' },
          { title: 'Rückgewinnungslizenz für gefährliche Abfälle', authority: 'Umwelt- und Stadtplanungsministerium', desc: 'Ministeriumslizenz für Rückgewinnung und Entsorgung gefährlicher Abfälle.' },
          { title: 'Rückgewinnungslizenz für ungefährliche Abfälle', authority: 'Umwelt- und Stadtplanungsministerium', desc: 'Lizenz für die Rückgewinnung von ungefährlichen Industrieabfällen.' },
          { title: 'Altfahrzeuglizenz (ELV)', authority: 'Umwelt- und Stadtplanungsministerium', desc: 'Sonderlizenz für umweltfreundliche Demontage und Entsorgung von Altfahrzeugen.' },
          { title: 'Elektronikabfall-Lizenz (WEEE)', authority: 'Umwelt- und Stadtplanungsministerium', desc: 'Rückgewinnungslizenz für Elektro- und Elektronikabfälle gemäß WEEE-Richtlinie.' },
          { title: 'Altöl-Rückgewinnungslizenz', authority: 'Umwelt- und Stadtplanungsministerium', desc: 'Lizenz für die Rückgewinnung von Motor- und Industriealtölen in lizenzierten Anlagen.' },
          { title: 'ADR-Sicherheitsberaterzertifikat', authority: 'Verkehrsministerium', desc: 'Sicherheitsberaterzertifikat für den Gefahrguttransport gemäß ADR.' },
          { title: 'ISO 14001 Umweltmanagementsystem', authority: 'Akkreditierte Zertifizierungsstelle', desc: 'Akkreditiertes Zertifikat nach dem internationalen Umweltmanagementsystem-Standard.' },
          { title: 'ISO 9001 Qualitätsmanagementsystem', authority: 'Akkreditierte Zertifizierungsstelle', desc: 'Akkreditiertes Zertifikat nach dem internationalen Qualitätsmanagementsystem-Standard.' },
        ],
        ctaTitle: 'Detaillierte Informationen zu unseren Lizenzen und Zertifikaten',
        ctaDesc: 'Kontaktieren Sie uns für offizielle Dokumente zu allen unseren Lizenzen und Zertifikaten.',
        ctaLabel: 'Kontaktieren Sie Uns',
      },
      serviceDetail: {
        allServices: 'Alle Leistungen',
        sectionLabel: 'Leistungen',
        detailsTitle: 'Leistungsdetails',
        benefitsTitle: 'Hauptvorteile',
        ctaTitle: 'Möchten Sie mehr über diese Leistung erfahren?',
        ctaDesc: 'Unser Expertenteam ist bereit, maßgeschneiderte Lösungen anzubieten. Nehmen Sie jetzt Kontakt auf.',
        ctaLabel: 'Kontaktieren Sie Uns',
        contactTitle: 'Schnellkontakt',
        contactForm: 'Über Formular kontaktieren',
        relatedTitle: 'Verwandte Leistungen',
        allServicesLink: 'Alle Leistungen →',
        serviceDetails: {
          'entegre-atik-yonetimi': {
            body: [
              'Unser Integrierter Abfallmanagement-Service verwaltet alle Abfallarten Ihres Unternehmens unter einem Dach und hilft Ihnen, Zero-Waste-Ziele zu erreichen. Der gesamte Prozess von der Abfallentstehung bis zur Endentsorgung wird von unserem Expertenteam verwaltet.',
              'Unser Service umfasst Abfallinventar, Abfallmanagementplan, Koordination lizenzierter Transport- und Entsorgungsprozesse sowie alle gesetzlichen Meldungen an das Umweltministerium.',
              'Wir etablieren ein integriertes Abfallmanagementsystem nach Kreislaufwirtschaftsprinzipien und allen verpflichtenden Maßnahmen der Zero-Waste-Verordnung.',
            ],
            benefits: ['Ganzheitliche Abfallmanagementverantwortung', 'Rechtskonformitätsgarantie', 'Kostenoptimierung', 'Zero-Waste-Zertifikatsunterstützung', 'Regelmäßige Berichterstattung und Überwachung'],
          },
          'danismanlik-hizmetleri': {
            body: [
              'Die komplexe und sich ständig ändernde Umweltgesetzgebung erhöht den Bedarf an Fachberatung. ECOREN-Beratungsleistungen stellen sicher, dass Ihr Unternehmen alle Umweltverpflichtungen vollständig erfüllt.',
              'Unser Leistungsumfang umfasst Abfallmanagementlizenzen, Umweltverträglichkeitsprüfungen (UVP), Zero-Waste-Zertifikatsanträge, Abfallmanagementpläne und Umweltauditprozesse.',
              'Unser Team aus erfahrenen Umweltingenieuren und Rechtsexperten verfolgt Gesetzesänderungen genau und informiert unsere Kunden proaktiv.',
            ],
            benefits: ['Rechtskonformitätsberatung', 'Lizenzprozessmanagement', 'Abfallmanagementplanerstellung', 'UVP-Beratung', 'Behördenbeziehungen'],
          },
        },
        defaultBody: [
          'ECOREN bietet professionelle Lösungen als eines der erfahrensten und lizenziertesten Unternehmen in diesem Leistungsbereich. Mit unserem Expertenteam und umfangreichen Anlagennetzwerk liefern wir ununterbrochene Leistungen in der gesamten Türkei.',
          'Unsere Leistung wird nach den Grundsätzen vollständiger Rechtskonformität, sicherer Operationen und Umweltverantwortung erbracht. Wir entwickeln maßgeschneiderte Lösungen für unsere Kunden.',
          'Alle Operationen werden von zertifiziertem Personal im Rahmen vom Umweltministerium genehmigter Lizenzen durchgeführt. Wir bieten vollständige Unterstützung durch transparente Berichterstattung und regelmäßige Updates.',
        ],
        defaultBenefits: ['Lizenzierter und zertifizierter Service', 'Vollständige Rechtskonformität', 'Expertensupport', 'Bundesweite Operationen', 'Transparente Berichterstattung'],
      },
      wasteCodes: {
        heroLabel: 'Gefährliche Abfallcodes',
        heroTitle: 'Abfallcode-Liste',
        heroDesc: 'Durchsuchen Sie die zur Klassifizierung gefährlicher Abfälle verwendeten Abfallcodes mit Gruppenüberschriften, Codenummern und Beschreibungen.',
        searchByText: 'Nach Text suchen',
        searchByGroup: 'Nach Gruppe suchen',
        placeholder: 'Code oder Beschreibung…',
        clearAriaLabel: 'Suche löschen',
        results: 'Ergebnisse',
        clear: 'löschen',
        allGroups: 'Alle Gruppen',
        codes: 'Codes',
        showAll: 'alle anzeigen',
        noResults: 'Keine Ergebnisse gefunden',
        noResultsDesc: 'Versuchen Sie einen anderen Suchbegriff oder eine andere Filterkombination.',
        clearFilters: 'Filter löschen',
        wasteCode: 'Abfallcode',
        code: 'Code',
        description: 'Beschreibung',
      },
    },
    services: {} as Record<ServiceId, ServiceCopy>,
    news: [
      { slug: 'sifir-atik-yonetmeligi-2024', title: 'Änderungen der Zero-Waste-Verordnung 2024', date: '15. April 2025', excerpt: 'Compliance-Prozesse für Unternehmen im Rahmen der aktualisierten Zero-Waste-Verordnung.' },
      { slug: 'dongusel-ekonomi-turkiye', title: 'Kreislaufwirtschaft und die grüne Transformation der Türkei', date: '2. März 2025', excerpt: 'Die Integration von Kreislaufwirtschaftsprinzipien in die türkische Industrie und ECORENs Rolle dabei.' },
      { slug: 'karbon-ayak-izi-azaltma', title: '5 Wege zur Reduzierung des CO₂-Fußabdrucks', date: '10. Februar 2025', excerpt: 'Wie Unternehmen durch Abfallmanagement und Energieeffizienz CO₂-neutrale Ziele erreichen können.' },
      { slug: 'elektronik-atik-yonetimi', title: 'Eine neue Ära im Elektronikabfallmanagement', date: '5. Januar 2025', excerpt: 'Aktuelle Entwicklungen bei Sammlung und Rückgewinnung von Elektronikabfällen.' },
    ],
  },
};

const serviceCopy: Record<Locale, Record<ServiceId, ServiceCopy>> = {
  tr: {
    'entegre-atik-yonetimi': { title: 'Entegre Atık Yönetimi Hizmeti', shortDesc: 'Sıfır Atık felsefesiyle tüm atık türlerinin uçtan uca yönetimi.', tags: ['atık', 'yönetim', 'sıfır atık'] },
    'danismanlik-hizmetleri': { title: 'Danışmanlık Hizmetleri', shortDesc: 'Çevre mevzuatı, lisans süreçleri ve atık yönetim sistemleri danışmanlığı.', tags: ['danışmanlık', 'mevzuat', 'lisans'] },
    'tehlikeli-atik-geri-kazanimi': { title: 'Tehlikeli Atık Geri Kazanımı', shortDesc: 'Tehlikeli atıkların çevreye uyumlu biçimde geri kazanımı ve bertarafı.', tags: ['tehlikeli atık', 'geri kazanım', 'bertaraf'] },
    'tehlikesiz-atik-geri-kazanimi': { title: 'Tehlikesiz Atık Geri Kazanımı', shortDesc: 'Endüstriyel tehlikesiz atıkların mevzuata uygun geri kazanım süreçleri.', tags: ['tehlikesiz atık', 'geri kazanım'] },
    'atik-yag-geri-kazanimi': { title: 'Atık Yağ Geri Kazanım Hizmeti', shortDesc: 'Motor ve endüstriyel atık yağların lisanslı tesislerde geri kazanımı.', tags: ['atık yağ', 'geri kazanım'] },
    'bitkisel-atik-yag-geri-kazanimi': { title: 'Bitkisel Atık Yağ Geri Kazanım Hizmeti', shortDesc: 'Gıda sektöründen kaynaklanan bitkisel atık yağların geri kazanımı.', tags: ['bitkisel yağ', 'gıda atığı', 'geri kazanım'] },
    'elektronik-atik-geri-kazanimi': { title: 'Elektronik Atık Geri Kazanımı', shortDesc: 'AEEE yönetmeliği kapsamında elektronik ve elektrikli atıkların geri kazanımı.', tags: ['e-atık', 'elektronik', 'AEEE'] },
    'omrunu-tamamlamis-arac': { title: 'Ömrünü Tamamlamış Araç (ÖTA) Hizmeti', shortDesc: 'ÖTA kabulü, geçici depolama ve parça sökümü ile çevresel dönüşüm.', tags: ['ÖTA', 'araç', 'hurda'] },
    'katalizor-geri-kazanimi': { title: 'Katalizör Geri Kazanımı', shortDesc: 'Değerli metal içeren katalizörlerin geri kazanım ve değerlendirme süreci.', tags: ['katalizör', 'değerli metal', 'geri kazanım'] },
    'metal-hurda-ithalati': { title: 'Metal Hurda İthalatı', shortDesc: 'Uluslararası tedarik ağıyla hammadde olarak metal hurda ithalatı.', tags: ['metal hurda', 'ithalat', 'hammadde'] },
    'atik-aku-geri-kazanimi': { title: 'Atık Akü Geri Kazanımı', shortDesc: 'Kurşun-asit ve lityum bazlı atık akülerin lisanslı geri kazanımı.', tags: ['atık akü', 'kurşun', 'lityum'] },
    'tehlikeli-atik-tasima': { title: 'Tehlikeli Atık Taşıma Lisanslı Araç Hizmeti', shortDesc: 'ADR lisanslı araçlarla tehlikeli atıkların güvenli taşınması.', tags: ['taşıma', 'ADR', 'tehlikeli atık'] },
    'tehlikesiz-atik-tasima': { title: 'Tehlikesiz Atık Taşıma Araç Hizmeti', shortDesc: 'Tehlikesiz sınıf atıkların mevzuata uygun taşıma hizmetleri.', tags: ['taşıma', 'lojistik', 'tehlikesiz'] },
    'sifir-ibc-tank-temini': { title: 'Sıfır (Re-Bottle) ve 2.El Yıkanmış IBC Tank Temini', shortDesc: 'Kimyasal depolama için sıfır ve yıkanmış ikinci el IBC tank temini.', tags: ['IBC tank', 'depolama', 'tedarik'] },
    'kimyasal-atik-bertaraf': { title: 'Kimyasal Atık Bertaraf Hizmeti', shortDesc: 'Endüstriyel kimyasal atıkların güvenli ve lisanslı bertarafı.', tags: ['kimyasal', 'bertaraf', 'endüstriyel'] },
    'camur-bertaraf-geri-kazanim': { title: 'Çamur Bertaraf ve Geri Kazanım Hizmeti', shortDesc: 'Arıtma tesisi ve endüstriyel çamurların bertaraf ve geri kazanım süreçleri.', tags: ['çamur', 'arıtma', 'bertaraf'] },
    'omrunu-tamamlamis-lastik': { title: 'Ömrünü Tamamlamış Lastik Bertaraf Hizmeti', shortDesc: 'Kullanılmış lastiklerin çevreci bertarafı.', tags: ['lastik', 'ÖTL', 'bertaraf'] },
    'hurda-elmas-karbur-geri-kazanimi': { title: 'Hurda Elmas uç ve Hurda Karbür Geri Kazanım Hizmeti', shortDesc: 'Hurda elmas uç ve hurda karbür atıkların geri kazanımı.', tags: ['elmas uç', 'karbür', 'hurda'] },
    'hurda-kablo-geri-kazanimi': { title: 'Hurda Kablo Geri Kazanımı', shortDesc: 'Bakır ve alüminyum içerikli hurda kablo geri kazanımı.', tags: ['hurda kablo', 'bakır', 'alüminyum'] },
    'moyden-belgesi': { title: 'Motor Yağı Değişim Noktası(MOYDEN) Belgesi Hizmeti', shortDesc: 'Motor yağı değişim noktası belgesi için başvuru, takip ve danışmanlık hizmetleri.', tags: ['MOYDEN', 'belge', 'motor yağı'] },
    'atik-sahasi-kurulum': { title: 'Tehlikeli ve Tehlikesiz Atık Sahası Kurulum Hizmeti', shortDesc: 'Tehlikeli ve tehlikesiz atık sahalarının mevzuata uygun kurulumu.', tags: ['atık sahası', 'kurulum', 'geçici depolama'] },
  },
  en: {} as Record<ServiceId, ServiceCopy>,
  de: {} as Record<ServiceId, ServiceCopy>,
};

serviceCopy.en = Object.fromEntries(
  serviceIds.map((id) => [
    id,
    {
      title: serviceCopy.tr[id].title
        .replace('Entegre Atık Yönetimi Hizmeti', 'Integrated Waste Management Service')
        .replace('Danışmanlık Hizmetleri', 'Consultancy Services')
        .replace('Tehlikeli Atık Geri Kazanımı', 'Hazardous Waste Recovery')
        .replace('Tehlikesiz Atık Geri Kazanımı', 'Non-Hazardous Waste Recovery')
        .replace('Atık Yağ Geri Kazanım Hizmeti', 'Waste Oil Recovery Service')
        .replace('Bitkisel Atık Yağ Geri Kazanım Hizmeti', 'Vegetable Waste Oil Recovery Service')
        .replace('Elektronik Atık Geri Kazanımı', 'Electronic Waste Recovery')
        .replace('Ömrünü Tamamlamış Araç (ÖTA) Hizmeti', 'End-of-Life Vehicle Service')
        .replace('Katalizör Geri Kazanımı', 'Catalyst Recovery')
        .replace('Metal Hurda İthalatı', 'Metal Scrap Import')
        .replace('Atık Akü Geri Kazanımı', 'Waste Battery Recovery')
        .replace('Tehlikeli Atık Taşıma Lisanslı Araç Hizmeti', 'Licensed Hazardous Waste Transport')
        .replace('Tehlikesiz Atık Taşıma Araç Hizmeti', 'Non-Hazardous Waste Transport')
        .replace('Sıfır ve 2. El Yıkanmış IBC Tank Temini', 'New and Washed Used IBC Tank Supply')
        .replace('Kimyasal Atık Bertaraf Hizmeti', 'Chemical Waste Disposal')
        .replace('Çamur Bertaraf ve Geri Kazanım Hizmeti', 'Sludge Disposal and Recovery')
        .replace('Ömrünü Tamamlamış Lastik Bertaraf Hizmeti', 'End-of-Life Tire Disposal')
        .replace('Hurda Elmas Uç ve Karbür Geri Kazanımı', 'Scrap Diamond Tip and Carbide Recovery')
        .replace('Hurda Kablo Geri Kazanımı', 'Scrap Cable Recovery')
        .replace('MOYDEN Belgesi Hizmeti', 'MOYDEN Certificate Service')
        .replace('Atık Sahası Kurulum Hizmeti', 'Waste Storage Area Setup'),
      shortDesc: 'Professional, licensed and regulation-compliant environmental solution for industrial waste management needs.',
      tags: ['waste', 'recovery', 'licensed'],
    },
  ])
) as Record<ServiceId, ServiceCopy>;

serviceCopy.de = Object.fromEntries(
  serviceIds.map((id) => [
    id,
    {
      title: serviceCopy.en[id].title
        .replace('Integrated Waste Management Service', 'Integriertes Abfallmanagement')
        .replace('Consultancy Services', 'Beratungsleistungen')
        .replace('Hazardous Waste Recovery', 'Rückgewinnung gefährlicher Abfälle')
        .replace('Non-Hazardous Waste Recovery', 'Rückgewinnung ungefährlicher Abfälle')
        .replace('Waste Oil Recovery Service', 'Altöl-Rückgewinnung')
        .replace('Vegetable Waste Oil Recovery Service', 'Rückgewinnung pflanzlicher Altöle')
        .replace('Electronic Waste Recovery', 'Elektronikabfall-Rückgewinnung')
        .replace('End-of-Life Vehicle Service', 'Altfahrzeug-Service')
        .replace('Catalyst Recovery', 'Katalysator-Rückgewinnung')
        .replace('Metal Scrap Import', 'Metallschrott-Import')
        .replace('Waste Battery Recovery', 'Altbatterie-Rückgewinnung')
        .replace('Licensed Hazardous Waste Transport', 'Lizenzierter Transport gefährlicher Abfälle')
        .replace('Non-Hazardous Waste Transport', 'Transport ungefährlicher Abfälle')
        .replace('New and Washed Used IBC Tank Supply', 'Neue und gereinigte gebrauchte IBC-Tanks')
        .replace('Chemical Waste Disposal', 'Chemische Abfallentsorgung')
        .replace('Sludge Disposal and Recovery', 'Schlamm-Entsorgung und Rückgewinnung')
        .replace('End-of-Life Tire Disposal', 'Altreifen-Entsorgung')
        .replace('Scrap Diamond Tip and Carbide Recovery', 'Schrott-Diamantspitzen und Karbid-Rückgewinnung')
        .replace('Scrap Cable Recovery', 'Schrottkabel-Rückgewinnung')
        .replace('MOYDEN Certificate Service', 'MOYDEN-Zertifikatsservice')
        .replace('Waste Storage Area Setup', 'Einrichtung von Abfalllagerflächen'),
      shortDesc: 'Professionelle, lizenzierte und rechtskonforme Umweltlösung für industrielle Abfallmanagementanforderungen.',
      tags: ['Abfall', 'Rückgewinnung', 'lizenziert'],
    },
  ])
) as Record<ServiceId, ServiceCopy>;

locales.forEach((locale) => {
  dictionaries[locale].services = serviceCopy[locale];
});

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function getLocalizedServices(locale: Locale) {
  const dict = getDictionary(locale);
  return serviceIds.map((id) => ({
    id,
    href: `/hizmetlerimiz/${id}`,
    featured: ['entegre-atik-yonetimi', 'danismanlik-hizmetleri', 'tehlikeli-atik-geri-kazanimi', 'tehlikesiz-atik-geri-kazanimi'].includes(id),
    ...dict.services[id],
  }));
}

export function getLocalizedFeaturedServices(locale: Locale) {
  return getLocalizedServices(locale).filter((service) => service.featured);
}
