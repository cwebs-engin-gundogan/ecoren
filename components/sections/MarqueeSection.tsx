import { services } from '@/data/services';

export default function MarqueeSection() {
  const items = [...services, ...services];

  return (
    <section className="bg-dark py-4 overflow-hidden border-y border-primary/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((s, i) => (
          <span key={`${s.id}-${i}`} className="inline-flex items-center gap-4 px-8 font-heading font-semibold text-sm uppercase tracking-widest text-primary">
            {s.title}
            <span className="text-white/20">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
