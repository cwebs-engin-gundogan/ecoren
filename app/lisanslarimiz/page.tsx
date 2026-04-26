import type { Metadata } from 'next';
import LisanslarimizClient from './LisanslarimizClient';

export const metadata: Metadata = {
  title: 'Lisanslarımız – ECOREN',
  description: 'ECOREN\'in sahip olduğu çevre lisansları ve sertifikalar.',
};

export default function LisanslarimizPage() {
  return <LisanslarimizClient />;
}
