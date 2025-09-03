import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-400" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange(currentLanguage === 'fr' ? 'en' : 'fr')}
        className="text-slate-300 hover:text-cyan-400 transition-colors px-2 py-1"
      >
        {currentLanguage === 'fr' ? 'EN' : 'FR'}
      </Button>
    </div>
  );
}