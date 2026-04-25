'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Türkiye' },
  { icon: Phone, label: 'Telefon', value: '+90 (212) 000 00 00' },
  { icon: Mail, label: 'E-posta', value: 'info@ecoren.com.tr' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt–Cum: 08:00–18:00' },
];

export default function BizeUlasinPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16">
      <section className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">İletişim</SectionLabel>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mb-6">
            Bize <span className="text-primary">Ulaşın</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            Atık yönetimi hizmetlerimiz hakkında bilgi almak veya teklif talep etmek için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="bg-dark p-8">
                <h2 className="font-heading text-2xl font-semibold text-white mb-6 uppercase">İletişim Bilgileri</h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-body text-xs text-white/40 uppercase tracking-wide mb-1">{c.label}</div>
                          <div className="font-body text-sm text-white">{c.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-primary p-8">
                <h3 className="font-heading text-xl font-semibold text-dark uppercase mb-3">Hızlı Destek</h3>
                <p className="font-body text-sm text-dark/70 mb-4">Acil atık yönetimi durumları için 7/24 hattımızı arayabilirsiniz.</p>
                <div className="font-heading text-2xl font-bold text-dark">+90 (212) 000 00 00</div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-primary/50 p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-semibold text-text-main mb-4">Mesajınız Alındı!</h2>
                  <p className="font-body text-base text-text-main/60 max-w-md mx-auto">
                    En kısa sürede ekibimiz tarafından geri dönüş yapılacaktır. Teşekkür ederiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 flex flex-col gap-6">
                  <h2 className="font-heading text-2xl font-semibold text-text-main uppercase">İletişim Formu</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">Ad Soyad *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">Firma</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder="Firma Adınız"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">E-posta *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder="ornek@firma.com"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">Konu</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Konu Seçiniz</option>
                      <option value="tehlikeli-atik">Tehlikeli Atık Yönetimi</option>
                      <option value="tehlikesiz-atik">Tehlikesiz Atık Yönetimi</option>
                      <option value="danismanlik">Danışmanlık Hizmetleri</option>
                      <option value="tasima">Atık Taşıma</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">Mesaj *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Mesajınızı yazınız..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-dark font-heading font-semibold py-4 uppercase tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
