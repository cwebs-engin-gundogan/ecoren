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
  hero: {
    eyebrow: string;
    line1: string;
    highlight: string;
    line2: string;
    line3: string;
    body: string;
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
  };
  servicesSection: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
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
    hero: {
      eyebrow: '. ECOREN - Çevre Mühendisliği',
      line1: 'SÜRDÜRÜLEBİLİR',
      highlight: 'GELECEK',
      line2: 'İÇİN',
      line3: 'ATIK YÖNETİMİ',
      body: 'Geri dönüşüm ve çevre yönetimi alanında Türkiye’nin öncü firmalarından ECOREN, atık yönetimi ve geri dönüşüm hizmetlerinde çevreye duyarlı çözümler sunar.',
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
    },
    servicesSection: { label: 'Hizmetlerimiz', titlePrefix: 'Uçtan Uca', titleHighlight: 'Atık Yönetimi', titleSuffix: 'Çözümleri', cta: 'Tüm Hizmetleri Gör' },
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
          { label: 'Telefon', value: '+90 (212) 000 00 00' },
          { label: 'E-posta', value: 'info@ecoren.com.tr' },
          { label: 'Çalışma Saatleri', value: 'Pzt-Cum: 08:00-18:00' },
        ],
      },
    },
    services: {} as Record<ServiceId, ServiceCopy>,
    news: [
      { slug: 'sifir-atik-yonetmeligi-2024', title: 'Sıfır Atık Yönetmeliğinde 2024 Değişiklikleri', date: '15 Nisan 2025', excerpt: 'Çevre ve Şehircilik Bakanlığı tarafından güncellenen Sıfır Atık Yönetmeliği kapsamında firmaların uyum süreçleri.' },
      { slug: 'dongusel-ekonomi-turkiye', title: "Döngüsel Ekonomi ve Türkiye'nin Yeşil Dönüşümü", date: '2 Mart 2025', excerpt: "Döngüsel ekonomi ilkelerinin Türk sanayi sektörüne entegrasyonu ve ECOREN'in bu süreçteki rolü." },
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
    hero: {
      eyebrow: '. ECOREN - Environmental Engineering',
      line1: 'SUSTAINABLE',
      highlight: 'FUTURE',
      line2: 'THROUGH',
      line3: 'WASTE MANAGEMENT',
      body: 'ECOREN delivers professional solutions across 21 service categories, from recovery, disposal and transport of hazardous and non-hazardous waste to environmental consultancy.',
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
      titlePrefix: "Turkey's Trusted",
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
    },
    servicesSection: { label: 'Services', titlePrefix: 'End-to-End', titleHighlight: 'Waste Management', titleSuffix: 'Solutions', cta: 'View All Services' },
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
          { label: 'Phone', value: '+90 (212) 000 00 00' },
          { label: 'Email', value: 'info@ecoren.com.tr' },
          { label: 'Working Hours', value: 'Mon-Fri: 08:00-18:00' },
        ],
      },
    },
    services: {} as Record<ServiceId, ServiceCopy>,
    news: [
      { slug: 'sifir-atik-yonetmeligi-2024', title: '2024 Updates to the Zero Waste Regulation', date: '15 April 2025', excerpt: 'Compliance processes for companies under the updated Zero Waste Regulation issued by the Ministry of Environment and Urbanization.' },
      { slug: 'dongusel-ekonomi-turkiye', title: "Circular Economy and Turkey's Green Transformation", date: '2 March 2025', excerpt: 'The integration of circular economy principles into Turkish industry and ECOREN’s role in this transition.' },
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
    hero: {
      eyebrow: '. ECOREN - Umwelttechnik',
      line1: 'NACHHALTIGE',
      highlight: 'ZUKUNFT',
      line2: 'DURCH',
      line3: 'ABFALLMANAGEMENT',
      body: 'ECOREN bietet professionelle Lösungen in 21 Leistungskategorien, von Rückgewinnung, Entsorgung und Transport gefährlicher und ungefährlicher Abfälle bis zur Umweltberatung.',
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
    },
    servicesSection: { label: 'Leistungen', titlePrefix: 'Ganzheitliche', titleHighlight: 'Abfallmanagement', titleSuffix: 'Lösungen', cta: 'Alle Leistungen' },
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
          { label: 'Telefon', value: '+90 (212) 000 00 00' },
          { label: 'E-Mail', value: 'info@ecoren.com.tr' },
          { label: 'Arbeitszeiten', value: 'Mo-Fr: 08:00-18:00' },
        ],
      },
    },
    services: {} as Record<ServiceId, ServiceCopy>,
    news: [
      { slug: 'sifir-atik-yonetmeligi-2024', title: 'Änderungen der Zero-Waste-Verordnung 2024', date: '15. April 2025', excerpt: 'Compliance-Prozesse für Unternehmen im Rahmen der aktualisierten Zero-Waste-Verordnung.' },
      { slug: 'dongusel-ekonomi-turkiye', title: 'Kreislaufwirtschaft und die grüne Transformation der Türkei', date: '2. März 2025', excerpt: 'Die Integration von Kreislaufwirtschaftsprinzipien in die türkische Industrie und ECORENs Rolle dabei.' },
      { slug: 'karbon-ayak-izi-azaltma', title: '5 Wege zur Reduzierung des CO2-Fußabdrucks', date: '10. Februar 2025', excerpt: 'Wie Unternehmen durch Abfallmanagement und Energieeffizienz CO2-neutrale Ziele erreichen können.' },
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
