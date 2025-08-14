'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '../../i18n';

interface I18nContextType {
  t: (key: string) => string;
  i18n: typeof i18n;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChanged = () => {
      forceUpdate({});
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const t = (key: string) => {
    return i18n.t(key);
  };

  return (
    <I18nContext.Provider value={{ t, i18n }}>
      {children}
    </I18nContext.Provider>
  );
}
