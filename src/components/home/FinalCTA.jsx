
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';
import { Link } from 'react-router-dom'; // Added import
import { createPageUrl } from '@/utils'; // Added import

export default function FinalCTA() {
  const { t } = useContext(LanguageContext);

  if (!t.finalCta) {
    return null;
  }
  
  return (
    <section className="py-24 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-teal-900/30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(6,182,212,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(20,184,166,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(6,182,212,0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-8"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(6,182,212,0.3)',
                '0 0 40px rgba(6,182,212,0.5)',
                '0 0 20px rgba(6,182,212,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>{t.finalCta.badge}</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.finalCta.title1}
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 mt-2">
              {t.finalCta.title2}
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            {t.finalCta.subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* The primary button is now wrapped with Link */}
            <Link to={createPageUrl("Waitlist")}>
              <Button 
                size="lg" 
                className="group text-xl font-bold px-12 py-8 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-500 text-black hover:from-cyan-500 hover:to-teal-600 shadow-2xl shadow-cyan-500/30 transition-all duration-300"
              >
                {t.finalCta.button1}
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl font-semibold px-12 py-8 rounded-2xl border-2 border-slate-600/50 bg-slate-800/40 backdrop-blur-xl hover:bg-slate-700/60 hover:border-cyan-400/50 text-white transition-all duration-300"
            >
              {t.finalCta.button2}
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-sm text-slate-400">
            {t.finalCta.guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-400' : index === 1 ? 'bg-cyan-400' : 'bg-teal-400'}`}></div>
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
