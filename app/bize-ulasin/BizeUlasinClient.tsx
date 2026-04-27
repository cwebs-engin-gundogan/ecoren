'use client';

import { useEffect, useRef, useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { MapPin, Phone, Mail, X, PhoneCall, UserPlus, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

const contactIcons = [MapPin, Phone, Mail];
const PHONE_RAW = '+905443141506';
const PHONE_DISPLAY = '+90 544 314 15 06';
const CONTACT_NAME = 'Ä°lker Can Eren ECOREN';

function PhoneModal({ onClose }: { onClose: () => void }) {
  const handleCall = () => { window.location.href = `tel:${PHONE_RAW}`; };
  const handleWhatsApp = () => { window.open(`https://wa.me/${PHONE_RAW.replace('+', '')}`, '_blank'); };
  const handleAddContact = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONTACT_NAME}`,
      'N:Eren;Ä°lker Can;;;',
      'ORG:ECOREN',
      `TEL;TYPE=CELL:${PHONE_RAW}`,
      'EMAIL:info@ecoren.com.tr',
      'URL:https://ecoren.com.tr',
      'END:VCARD',
    ].join('\n');
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ecoren.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white w-full max-w-xs shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-dark px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-0.5">ECOREN</p>
            <p className="font-heading text-base font-bold text-white">{PHONE_DISPLAY}</p>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <button
            onClick={handleCall}
            className="flex items-center gap-3 w-full px-4 py-3 bg-primary text-dark font-heading font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all"
          >
            <PhoneCall size={18} /> Telefon Et
          </button>
          <button
            onClick={handleAddContact}
            className="flex items-center gap-3 w-full px-4 py-3 bg-dark text-white font-heading font-bold text-sm uppercase tracking-wide hover:bg-dark/80 transition-all"
          >
            <UserPlus size={18} /> Rehbere Ekle
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 w-full px-4 py-3 bg-[#25D366] text-white font-heading font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all"
          >
            <MessageCircle size={18} /> WhatsApp&apos;tan Mesaj At
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BizeUlasinClient() {
  const { dict } = useLanguage();
  const contactInfo = dict.pages.contact.contactInfo.map((item, index) => ({
    ...item,
    icon: contactIcons[index],
  }));
  const [phonePrefix, setPhonePrefix] = useState('+90');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!submitted) return;

    successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    successRef.current?.focus({ preventScroll: true });
  }, [submitted]);

  const validate = (data: typeof formData) => {
    const e: Record<string, string> = {};
    if (!data.name.trim() || data.name.trim().length < 2) e.name = 'Ad Soyad en az 2 karakter olmalÄ±dÄ±r.';
    if (!data.email.trim()) {
      e.email = 'E-posta adresi zorunludur.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = 'GeÃ§erli bir e-posta adresi giriniz.';
    }
    if (data.phone.trim() && !/^[\d\s\-().]+$/.test(data.phone)) {
      e.phone = 'GeÃ§erli bir telefon numarasÄ± giriniz.';
    }
    if (!data.message.trim()) e.message = 'Mesaj zorunludur.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setSending(true);

    const subject = dict.pages.contact.subjects.find(s => s.value === formData.subject)?.label || formData.subject;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phonePrefix,
          subject,
        }),
      });

      if (!response.ok) {
        throw new Error('Mesaj gönderilemedi.');
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError('Mesaj gönderilemedi. Lütfen tekrar deneyin veya telefon/e-posta ile bize ulaşın.');
    } finally {
      setSending(false);
    }
  };  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    {phoneModalOpen && <PhoneModal onClose={() => setPhoneModalOpen(false)} />}
    <div className="pt-14">
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">{dict.pages.contact.label}</SectionLabel>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            {dict.pages.contact.titlePrefix} <span className="text-primary">{dict.pages.contact.titleHighlight}</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            {dict.pages.contact.desc}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="bg-dark p-5 sm:p-8">
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-6 uppercase">{dict.pages.contact.infoTitle}</h2>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((c, i) => {
                    const Icon = c.icon;
                    const isPhone = i === 1;
                    const isEmail = i === 2;
                    const isAddress = i === 0;
                    return (
                      <div
                        key={c.label}
                        className={`flex items-start gap-4 ${isPhone ? 'cursor-pointer group' : ''} ${isEmail || isAddress ? 'group' : ''}`}
                        onClick={isPhone ? () => setPhoneModalOpen(true) : undefined}
                      >
                        <div className={`w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 transition-colors ${isPhone || isEmail || isAddress ? 'group-hover:bg-primary/25' : ''}`}>
                          <Icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-body text-xs text-white/40 uppercase tracking-wide mb-1">{c.label}</div>
                          {isEmail ? (
                            <a href={`mailto:${c.value}`} className="font-body text-sm text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">{c.value}</a>
                          ) : isAddress ? (
                            <a href="https://maps.google.com/?q=ECOREN+TÃ¼rkiye" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">{c.value}</a>
                          ) : (
                            <div className={`font-body text-sm transition-colors ${isPhone ? 'text-primary underline underline-offset-2 group-hover:text-primary/80' : 'text-white'}`}>{c.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-primary p-5 sm:p-8">
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-dark uppercase mb-3">{dict.pages.contact.supportTitle}</h3>
                <p className="font-body text-sm text-dark/70 mb-4">{dict.pages.contact.supportDesc}</p>
                <button
                  onClick={() => setPhoneModalOpen(true)}
                  className="font-heading text-xl sm:text-2xl font-bold text-dark underline underline-offset-2 hover:text-dark/70 transition-colors"
                >
                  {PHONE_DISPLAY}
                </button>
              </div>
            </div>

            {/* Form */}
            <div id="iletisim-formu" className="lg:col-span-2 scroll-mt-24">
              {submitted ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  className="bg-white border border-primary/50 p-8 sm:p-12 text-center focus:outline-none"
                >
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text-main mb-4">{dict.pages.contact.successTitle}</h2>
                  <p className="font-body text-base text-text-main/60 max-w-md mx-auto">
                    {dict.pages.contact.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-5 sm:p-8 flex flex-col gap-5">
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold text-text-main uppercase">{dict.pages.contact.formTitle}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.name}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border px-4 py-3 font-body text-sm text-text-main focus:outline-none transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`}
                        placeholder={dict.pages.contact.placeholders.name}
                      />
                      {errors.name && <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.company}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder={dict.pages.contact.placeholders.company}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.email}</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border px-4 py-3 font-body text-sm text-text-main focus:outline-none transition-colors ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`}
                        placeholder={dict.pages.contact.placeholders.email}
                      />
                      {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.phone}</label>
                      <div className="flex">
                        <input
                          type="text"
                          value={phonePrefix}
                          onChange={(e) => setPhonePrefix(e.target.value)}
                          className="w-[4.5rem] shrink-0 border border-r-0 border-gray-200 px-2 py-3 font-body text-sm text-text-main text-center focus:outline-none focus:border-primary transition-colors bg-gray-50"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="5XX XXX XX XX"
                          className={`flex-1 border px-4 py-3 font-body text-sm text-text-main focus:outline-none transition-colors ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`}
                        />
                      </div>
                      {errors.phone && <p className="font-body text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.subject}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors bg-white"
                    >
                      <option value="">{dict.pages.contact.placeholders.subject}</option>
                      {dict.pages.contact.subjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>{subject.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.message}</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full border px-4 py-3 font-body text-sm text-text-main focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`}
                      placeholder={dict.pages.contact.placeholders.message}
                    />
                    {errors.message && <p className="font-body text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  {submitError && (
                    <p className="font-body text-sm text-red-600">
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary text-dark font-heading font-semibold py-4 min-h-[48px] uppercase tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'â³ GÃ¶nderiliyor...' : dict.pages.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}


