import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import { seoKeywords } from '@/lib/seo';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: 'Hizmet – ECOREN' };

  const url = `https://ecoren.com.tr${service.href}`;
  const keywords = Array.from(new Set([...service.tags, service.title, ...seoKeywords]));

  return {
    title: service.title,
    description: `${service.shortDesc} ECOREN'den mevzuata uygun, sürdürülebilir ve kurumsal atık yönetimi çözümleri.`,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | ECOREN`,
      description: service.shortDesc,
      url,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return <ServiceDetailClient slug={slug} />;
}
