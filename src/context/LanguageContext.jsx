import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default language is 'ar' as requested by the user
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('ora_language');
      return saved === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  const t = translations[lang] || translations.ar;

  useEffect(() => {
    try {
      localStorage.setItem('ora_language', lang);
    } catch {
      // Ignore storage errors in restricted contexts
    }
    const html = document.documentElement;
    html.lang = lang;
    html.dir = t.dir;

    if (lang === 'ar') {
      document.title = 'أورا للمعالم المائية — تصميم · تنفيذ · تشغيل | ORA Water Features';
    } else {
      document.title = 'ORA Water Features — Design · Build · Operate';
    }
  }, [lang, t.dir]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, isRTL: t.dir === 'rtl' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
