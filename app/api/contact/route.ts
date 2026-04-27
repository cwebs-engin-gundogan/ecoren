import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  phonePrefix?: string;
  subject?: string;
  message?: string;
};

const required = (value: unknown) => typeof value === 'string' && value.trim().length > 0;

export async function POST(request: Request) {
  const data = (await request.json()) as ContactPayload;

  if (!required(data.name) || !required(data.email) || !required(data.message)) {
    return NextResponse.json({ error: 'Zorunlu alanlar eksik.' }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN || process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: 'Telegram bağlantı bilgileri eksik.' }, { status: 500 });
  }

  const phone = data.phone?.trim();
  const phonePrefix = data.phonePrefix?.trim() || '+90';
  const subject = data.subject?.trim();

  const text = [
    'Yeni İletişim Formu',
    '',
    `Ad Soyad: ${data.name?.trim()}`,
    data.company?.trim() ? `Firma: ${data.company.trim()}` : null,
    `E-posta: ${data.email?.trim()}`,
    phone ? `Telefon: ${phonePrefix} ${phone}` : null,
    subject ? `Konu: ${subject}` : null,
    `Mesaj: ${data.message?.trim()}`,
  ].filter(Boolean).join('\n');

  const messageResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!messageResponse.ok) {
    const details = await messageResponse.text();
    return NextResponse.json({ error: 'Telegram mesajı gönderilemedi.', details }, { status: 502 });
  }

  if (phone) {
    try {
      const contactName = [data.name?.trim(), data.company?.trim()].filter(Boolean).join(' ');
      const fullPhone = `${phonePrefix}${phone.replace(/\s/g, '')}`;
      const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${contactName}`,
        `N:${data.company?.trim() || ''};${data.name?.trim()};;;`,
        data.company?.trim() ? `ORG:${data.company.trim()}` : null,
        `TEL;TYPE=CELL:${fullPhone}`,
        data.email?.trim() ? `EMAIL:${data.email.trim()}` : null,
        'END:VCARD',
      ].filter(Boolean).join('\r\n');

      const fd = new FormData();
      fd.append('chat_id', chatId);
      fd.append('document', new Blob([vcard], { type: 'text/vcard' }), `${data.name?.trim().replace(/\s+/g, '_')}.vcf`);
      fd.append('caption', 'Rehbere eklemek için dosyaya tıklayın');

      await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: fd,
      });
    } catch {
      // Ana mesaj gönderildiyse vCard hatası formu başarısız saymasın.
    }
  }

  return NextResponse.json({ ok: true });
}
