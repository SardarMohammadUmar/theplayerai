import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { LanguageContext } from '../components/LanguageContext';

export default function DemoPage() {
  const { t } = useContext(LanguageContext);
  
  if (!t.demoPage) {
    return null;
  }

  const { title, subtitle, benefits, formTitle, namePlaceholder, emailPlaceholder, companyPlaceholder, phonePlaceholder, button } = t.demoPage;

  return (
    <div className="pt-16 pb-24 flex items-center justify-center min-h-[calc(100vh-112px)]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              {title}
            </span>
          </h1>
          <p className="text-xl text-slate-300">
            {subtitle}
          </p>
          <ul className="space-y-3 text-slate-400">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">✅ {benefit}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="bg-slate-900/40 p-8 rounded-2xl border border-slate-700/50"
        >
          <h2 className="text-2xl font-bold text-white mb-6">{formTitle}</h2>
          <form className="space-y-4">
            <Input type="text" placeholder={namePlaceholder} className="bg-slate-800 border-slate-600" />
            <Input type="email" placeholder={emailPlaceholder} className="bg-slate-800 border-slate-600" />
            <Input type="text" placeholder={companyPlaceholder} className="bg-slate-800 border-slate-600" />
            <Input type="tel" placeholder={phonePlaceholder} className="bg-slate-800 border-slate-600" />
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-bold group">
              {button}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}