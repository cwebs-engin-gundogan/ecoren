'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale, getDictionary, isLocale, type Locale } from '@/lib/i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: ReturnType<typeof getDictionary>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return initialLocale;

    const storedLocale = window.localStorage.getItem('NEXT_LOCALE');
    const cookieLocale = document.cookie
      .split('; ')
      .find((item) => item.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];

    return isLocale(storedLocale) ? storedLocale : isLocale(cookieLocale) ? cookieLocale : initialLocale;
  });

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.localStorage.setItem('NEXT_LOCALE', nextLocale);
    document.documentElement.lang = nextLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      dict: getDictionary(locale),
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
