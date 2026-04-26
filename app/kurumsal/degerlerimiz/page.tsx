import type { Metadata } from 'next';
import DegerlerimizClient from './DegerlerimizClient';

export const metadata: Metadata = {
  title: 'Değerlerimiz – ECOREN',
  description: 'ECOREN\'in temel değerleri ve iş yapış anlayışı.',
};

export default function DegerlerimizPage() {
  return <DegerlerimizClient />;
}
