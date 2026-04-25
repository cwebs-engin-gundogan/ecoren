'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

const contactIcons = [MapPin, Phone, Mail, Clock];

export default function BizeUlasinPage() {
  const { dict } = useLanguage();
  const contactInfo = dict.pages.contact.contactInfo.map((item, index) => ({
    ...item,
    icon: contactIcons[index],
  }));
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
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">{dict.pages.contact.label}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            {dict.pages.contact.titlePrefix} <span className="text-primary">{dict.pages.contact.titleHighlight}</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            {dict.pages.contact.desc}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="bg-dark p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-semibold text-white mb-6 uppercase">{dict.pages.contact.infoTitle}</h2>
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

              <div className="bg-primary p-6 sm:p-8">
                <h3 className="font-heading text-xl font-semibold text-dark uppercase mb-3">{dict.pages.contact.supportTitle}</h3>
                <p className="font-body text-sm text-dark/70 mb-4">{dict.pages.contact.supportDesc}</p>
                <div className="font-heading text-2xl font-bold text-dark">+90 (212) 000 00 00</div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                  <div className="bg-white border border-primary/50 p-8 sm:p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-semibold text-text-main mb-4">{dict.pages.contact.successTitle}</h2>
                  <p className="font-body text-base text-text-main/60 max-w-md mx-auto">
                    {dict.pages.contact.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-6 sm:p-8 flex flex-col gap-6">
                  <h2 className="font-heading text-2xl font-semibold text-text-main uppercase">{dict.pages.contact.formTitle}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.name}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder={dict.pages.contact.placeholders.name}
                      />
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
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder={dict.pages.contact.placeholders.email}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wide text-text-main/60 mb-2 block">{dict.pages.contact.fields.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        placeholder={dict.pages.contact.placeholders.phone}
                      />
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
                      className="w-full border border-gray-200 px-4 py-3 font-body text-sm text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder={dict.pages.contact.placeholders.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-dark font-heading font-semibold py-4 uppercase tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    {dict.pages.contact.submit}
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
