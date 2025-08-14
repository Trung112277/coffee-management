"use client"
import { useState } from 'react';
import { ModeToggle } from '@/components/feature/button/mode-toggle';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/components/providers/i18n-provider';
import i18n from '../i18n';

export default function Index() {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState('vi');
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t("welcome")}</h1>
      <p>{t("description")}</p>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
      <ModeToggle />
    </div>
  );
}
