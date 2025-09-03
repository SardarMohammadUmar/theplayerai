import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LanguageContext } from '../components/LanguageContext';

export default function ContactPage() {
  const { t } = useContext(LanguageContext);

  if (!t.contactPage) {
    return null;
  }
  const { title, subtitle, info, formTitle, namePlaceholder, emailPlaceholder, messagePlaceholder, sendButton, details } = t.contactPage;

  return (
    <div className="pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            {title}
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">{info}</h2>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="font-semibold text-white">{details[0].title}</h3>
              <p className="text-slate-400">{details[0].value}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="font-semibold text-white">{details[1].title}</h3>
              <p className="text-slate-400">{details[1].value}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="font-semibold text-white">{details[2].title}</h3>
              <p className="text-slate-400">{details[2].value}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="bg-slate-900/40 p-8 rounded-2xl border border-slate-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-6">{formTitle}</h2>
          <form className="space-y-6">
            <Input type="text" placeholder={namePlaceholder} className="bg-slate-800 border-slate-600" />
            <Input type="email" placeholder={emailPlaceholder} className="bg-slate-800 border-slate-600" />
            <Textarea placeholder={messagePlaceholder} className="bg-slate-800 border-slate-600 h-32" />
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-bold">
              {sendButton}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}