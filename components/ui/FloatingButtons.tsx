'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 sm:right-6">
      {/* Scroll to top — only shown after scrolling down */}
      <button
        onClick={scrollToTop}
        aria-label="Yukarı çık"
        className={`flex items-center gap-2 bg-dark/90 text-white border border-white/10 shadow-lg backdrop-blur-sm
          px-3 py-2.5 sm:px-4 transition-all duration-300 hover:bg-dark hover:border-primary/50
          ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp size={16} className="shrink-0" />
        <span className="hidden sm:inline font-heading text-xs font-semibold uppercase tracking-widest">
          Yukarı Çık
        </span>
      </button>

    </div>
  );
}
