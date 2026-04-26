import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';

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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return <ServiceDetailClient slug={slug} />;
}
