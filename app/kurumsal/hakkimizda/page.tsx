import type { Metadata } from 'next';
import HakkimizdaClient from './HakkimizdaClient';

export const metadata: Metadata = {
  title: 'Hakkımızda – ECOREN',
  description: 'ECOREN Atık Yönetimi Danışmanlık ve Mühendislik Hizmetleri hakkında bilgi edinin.',
};

export default function HakkimizdaPage() {
  return <HakkimizdaClient />;
}
