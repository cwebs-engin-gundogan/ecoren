import type { Metadata } from 'next';
import MisyonVizyonClient from './MisyonVizyonClient';

export const metadata: Metadata = {
  title: 'Misyon & Vizyon – ECOREN',
  description: 'ECOREN\'in misyonu ve vizyonu hakkında bilgi edinin.',
};

export default function MisyonVizyonPage() {
  return <MisyonVizyonClient />;
}
