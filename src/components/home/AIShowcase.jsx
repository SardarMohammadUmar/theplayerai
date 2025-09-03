import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Brain } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

export default function AIShowcase() {
  const { t } = useContext(LanguageContext);

  if (!t.aiShowcase) {
    return null;
  }

  const aiCapabilities = [
    { title: t.aiShowcase.capabilities[0], progress: 95, color: 'from-purple-500 to-pink-500' },
    { title: t.aiShowcase.capabilities[1], progress: 88, color: 'from-blue-500 to-cyan-500' },
    { title: t.aiShowcase.capabilities[2], progress: 92, color: 'from-green-500 to-teal-500' },
    { title: t.aiShowcase.capabilities[3], progress: 90, color: 'from-orange-500 to-yellow-500' }
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 backdrop-blur-xl border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-8">
            <Brain className="w-4 h-4 animate-pulse" />
            {t.aiShowcase.badge}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              {t.aiShowcase.title1}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.aiShowcase.title2}
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t.aiShowcase.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">DisplayFlow AI Engine</span>
                </div>
                
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{capability.title}</span>
                      <span className="text-cyan-400 font-mono text-sm">{capability.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${capability.color} rounded-full`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${capability.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.aiShowcase.benefits[0].title}</h3>
                  <p className="text-slate-400">{t.aiShowcase.benefits[0].description}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.aiShowcase.benefits[1].title}</h3>
                  <p className="text-slate-400">{t.aiShowcase.benefits[1].description}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.aiShowcase.benefits[2].title}</h3>
                  <p className="text-slate-400">{t.aiShowcase.benefits[2].description}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl">
              <p className="text-cyan-300 font-medium text-center">
                {t.aiShowcase.quote}
              </p>
              <p className="text-slate-400 text-sm text-center mt-2">
                - Marketing Director, TechCorp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}