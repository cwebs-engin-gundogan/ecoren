import type { MetadataRoute } from 'next';
import { serviceIds } from '@/lib/i18n';

const base = 'https://ecoren.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/hizmetlerimiz`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/kurumsal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/kurumsal/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kurumsal/misyon-vizyon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kurumsal/degerlerimiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/lisanslarimiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/atik-kodlari`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/haberler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/bize-ulasin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceIds.map((id) => ({
    url: `${base}/hizmetlerimiz/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
