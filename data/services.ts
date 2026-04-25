export type Service = {
  id: string;
  title: string;
  shortDesc: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const services: Service[] = [
  { id: 'entegre-atik-yonetimi', title: 'Entegre Atık Yönetimi Hizmeti', shortDesc: 'Sıfır Atık Felsefesiyle tüm atık türlerinin uçtan uca yönetimi.', tags: ['atık', 'yönetim', 'sıfır atık'], href: '/hizmetlerimiz/entegre-atik-yonetimi', featured: true },
  { id: 'danismanlik-hizmetleri', title: 'Danışmanlık Hizmetleri', shortDesc: 'Çevre mevzuatı, lisans süreçleri ve atık yönetim sistemleri danışmanlığı.', tags: ['danışmanlık', 'mevzuat', 'lisans'], href: '/hizmetlerimiz/danismanlik-hizmetleri', featured: true },
  { id: 'tehlikeli-atik-geri-kazanimi', title: 'Tehlikeli Atık Geri Kazanımı', shortDesc: 'Tehlikeli atıkların çevreye uyumlu biçimde geri kazanımı ve bertarafı.', tags: ['tehlikeli atık', 'geri kazanım', 'bertaraf'], href: '/hizmetlerimiz/tehlikeli-atik-geri-kazanimi', featured: true },
  { id: 'tehlikesiz-atik-geri-kazanimi', title: 'Tehlikesiz Atık Geri Kazanımı', shortDesc: 'Endüstriyel tehlikesiz atıkların mevzuata uygun geri kazanım süreçleri.', tags: ['tehlikesiz atık', 'geri kazanım'], href: '/hizmetlerimiz/tehlikesiz-atik-geri-kazanimi', featured: true },
  { id: 'atik-yag-geri-kazanimi', title: 'Atık Yağ Geri Kazanım Hizmeti', shortDesc: 'Motor ve endüstriyel atık yağların lisanslı tesislerde geri kazanımı.', tags: ['atık yağ', 'geri kazanım'], href: '/hizmetlerimiz/atik-yag-geri-kazanimi' },
  { id: 'bitkisel-atik-yag-geri-kazanimi', title: 'Bitkisel Atık Yağ Geri Kazanım Hizmeti', shortDesc: 'Gıda sektöründen kaynaklanan bitkisel atık yağların geri kazanımı.', tags: ['bitkisel yağ', 'gıda atığı', 'geri kazanım'], href: '/hizmetlerimiz/bitkisel-atik-yag-geri-kazanimi' },
  { id: 'elektronik-atik-geri-kazanimi', title: 'Elektronik Atık Geri Kazanımı', shortDesc: 'AEEE yönetmeliği kapsamında elektronik ve elektrikli atıkların geri kazanımı.', tags: ['e-atık', 'elektronik', 'AEEE'], href: '/hizmetlerimiz/elektronik-atik-geri-kazanimi' },
  { id: 'omrunu-tamamlamis-arac', title: 'Ömrünü Tamamlamış Araç (ÖTA) Hizmeti', shortDesc: 'ÖTA kabulü, geçici depolama ve parça sökümü ile çevresel dönüşüm.', tags: ['ÖTA', 'araç', 'hurda'], href: '/hizmetlerimiz/omrunu-tamamlamis-arac' },
  { id: 'katalizor-geri-kazanimi', title: 'Katalizör Geri Kazanımı', shortDesc: 'Değerli metal içeren katalizörlerin geri kazanım ve değerlendirme süreci.', tags: ['katalizör', 'değerli metal', 'geri kazanım'], href: '/hizmetlerimiz/katalizor-geri-kazanimi' },
  { id: 'metal-hurda-ithalati', title: 'Metal Hurda İthalatı', shortDesc: 'Uluslararası tedarik ağıyla hammadde olarak metal hurda ithalatı.', tags: ['metal hurda', 'ithalat', 'hammadde'], href: '/hizmetlerimiz/metal-hurda-ithalati' },
  { id: 'atik-aku-geri-kazanimi', title: 'Atık Akü Geri Kazanımı', shortDesc: 'Kurşun-asit ve lityum bazlı atık akülerin lisanslı geri kazanımı.', tags: ['atık akü', 'kurşun', 'lityum'], href: '/hizmetlerimiz/atik-aku-geri-kazanimi' },
  { id: 'tehlikeli-atik-tasima', title: 'Tehlikeli Atık Taşıma Lisanslı Araç Hizmeti', shortDesc: 'ADR lisanslı araçlarla tehlikeli atıkların güvenli taşınması.', tags: ['taşıma', 'ADR', 'tehlikeli atık'], href: '/hizmetlerimiz/tehlikeli-atik-tasima' },
  { id: 'tehlikesiz-atik-tasima', title: 'Tehlikesiz Atık Taşıma Araç Hizmeti', shortDesc: 'Tehlikesiz sınıf atıkların mevzuata uygun taşıma hizmetleri.', tags: ['taşıma', 'lojistik', 'tehlikesiz'], href: '/hizmetlerimiz/tehlikesiz-atik-tasima' },
  { id: 'sifir-ibc-tank-temini', title: 'Sıfır (Re-Bottle) ve 2.El Yıkanmış IBC Tank Temini', shortDesc: 'Kimyasal depolama için sıfır ve yenilenmiş IBC tank tedariki.', tags: ['IBC tank', 'depolama', 'Re-Bottle'], href: '/hizmetlerimiz/sifir-ibc-tank-temini' },
  { id: 'kimyasal-atik-bertaraf', title: 'Kimyasal Atık Bertaraf Hizmeti', shortDesc: 'Endüstriyel kimyasal atıkların güvenli ve lisanslı bertarafı.', tags: ['kimyasal', 'bertaraf', 'endüstriyel'], href: '/hizmetlerimiz/kimyasal-atik-bertaraf' },
  { id: 'camur-bertaraf-geri-kazanim', title: 'Çamur Bertaraf ve Geri Kazanım Hizmeti', shortDesc: 'Arıtma tesisi ve endüstriyel çamurların bertaraf ve geri kazanım süreçleri.', tags: ['çamur', 'arıtma', 'bertaraf'], href: '/hizmetlerimiz/camur-bertaraf-geri-kazanim' },
  { id: 'omrunu-tamamlamis-lastik', title: 'Ömrünü Tamamlamış Lastik (ÖTL) Bertaraf Hizmeti', shortDesc: 'ÖTL yönetmeliği kapsamında kullanılmış lastiklerin çevreci bertarafı.', tags: ['lastik', 'ÖTL', 'bertaraf'], href: '/hizmetlerimiz/omrunu-tamamlamis-lastik' },
  { id: 'hurda-elmas-karbur-geri-kazanimi', title: 'Hurda Elmas Uç ve Hurda Karbür Geri Kazanımı', shortDesc: 'Takım tezgahlarından çıkan elmas uç ve karbür atıkların değerlendirilmesi.', tags: ['elmas uç', 'karbür', 'hurda'], href: '/hizmetlerimiz/hurda-elmas-karbur-geri-kazanimi' },
  { id: 'hurda-kablo-geri-kazanimi', title: 'Hurda Kablo Geri Kazanımı', shortDesc: 'Bakır ve alüminyum içerikli hurda kablo geri kazanım ve değerlendirmesi.', tags: ['hurda kablo', 'bakır', 'alüminyum'], href: '/hizmetlerimiz/hurda-kablo-geri-kazanimi' },
  { id: 'moyden-belgesi', title: 'Motor Yağı Değişim Noktası (MOYDEN) Belgesi Hizmeti', shortDesc: 'MOYDEN belgesi başvuru, takip ve danışmanlık hizmetleri.', tags: ['MOYDEN', 'belge', 'motor yağı'], href: '/hizmetlerimiz/moyden-belgesi' },
  { id: 'atik-sahasi-kurulum', title: 'Tehlikeli ve Tehlikesiz Atık Sahası Kurulum Hizmeti', shortDesc: 'Mevzuata uygun geçici atık depolama sahalarının tasarım ve kurulumu.', tags: ['atık sahası', 'kurulum', 'geçici depolama'], href: '/hizmetlerimiz/atik-sahasi-kurulum' },
];

export const featuredServices = services.filter((s) => s.featured);
