
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

const FloatingElements = () => (
  <>
    <motion.div 
      className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full"
      animate={{ 
        y: [0, -20, 0],
        opacity: [0.3, 1, 0.3]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute top-40 right-20 w-1 h-1 bg-teal-300 rounded-full"
      animate={{ 
        y: [0, -30, 0],
        x: [0, 10, 0],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div 
      className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-300/50 rounded-full blur-sm"
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.2, 0.8, 0.2]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
  </>
);

export default function Hero() {
  const { t } = useContext(LanguageContext);

  if (!t.hero) {
    // Optionally return a loading state or a fallback component if translations are not yet loaded
    return null; 
  }
  
  // containerVariants and itemVariants are no longer used for the specific implementation
  // within the mock dashboard, as direct animations are applied.
  // They are kept here as they might be used elsewhere or for future expansions
  // but are not explicitly removed by the prompt, only the content using them.
  // However, the prompt completely replaces the content of the motion.div below,
  // which implies they are no longer relevant for that section.
  // Based on the output of the prompt, the variants should be removed as they are not
  // referenced in the new code block for the three columns.

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      <FloatingElements />
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-teal-900/20 -z-10"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(6,182,212,0.15),_transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-8 shadow-xl"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
            {t.hero.title1}
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 mt-2 drop-shadow-lg">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12"
        >
          {t.hero.subtitle}
          <span className="text-cyan-300 font-medium"> {t.hero.subtitle2} </span>
          {t.hero.subtitle3}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <Button size="lg" className="group text-lg font-bold px-12 py-7 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-500 text-black hover:from-cyan-500 hover:to-teal-600 shadow-2xl shadow-cyan-500/25 transition-all duration-300">
            {t.hero.joinButton}
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group text-lg font-semibold px-12 py-7 rounded-2xl border-2 border-slate-600/50 bg-slate-800/40 backdrop-blur-xl hover:bg-slate-700/60 hover:border-cyan-400/50 text-white transition-all duration-300">
            <Play className="w-5 h-5 mr-3 group-hover:text-cyan-400 transition-colors" />
            {t.hero.watchDemo}
          </Button>
        </motion.div>

        <motion.div 
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent blur-3xl -z-10"></div>
          
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Fond animé avec des vagues de couleur */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-teal-500/10 rounded-3xl"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(6,182,212,0.1), rgba(168,85,247,0.05), rgba(20,184,166,0.1))',
                  'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(6,182,212,0.1), rgba(168,85,247,0.05))',
                  'linear-gradient(225deg, rgba(168,85,247,0.05), rgba(20,184,166,0.1), rgba(6,182,212,0.1))',
                  'linear-gradient(315deg, rgba(6,182,212,0.1), rgba(168,85,247,0.05), rgba(20,184,166,0.1))'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 h-80">
              {/* Column 1: Dashboard animé */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-600/30 flex flex-col gap-3 relative overflow-hidden"
              >
                {/* Header avec icône animée */}
                <motion.div 
                  className="flex items-center gap-2 h-6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <div className="h-4 bg-cyan-400/40 rounded w-24"></div>
                </motion.div>
                
                {/* Liste animée */}
                <div className="space-y-2 flex-grow">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div 
                        className="w-2 h-2 bg-teal-400 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <div className={`h-3 bg-slate-600/60 rounded ${index === 0 ? 'w-full' : index === 1 ? 'w-4/5' : index === 2 ? 'w-3/5' : index === 3 ? 'w-full' : 'w-2/3'}`}></div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Notification animée */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  className="absolute top-2 right-2"
                >
                  <motion.div 
                    className="w-3 h-3 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Column 2: Lecteur vidéo avec contrôles animés */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-600/30 flex flex-col relative overflow-hidden"
              >
                <div className="h-full bg-gradient-to-br from-cyan-900/50 to-teal-900/50 rounded-xl flex items-center justify-center relative">
                  {/* Bouton play animé */}
                  <motion.div 
                    className="w-16 h-16 bg-cyan-400/30 rounded-full flex items-center justify-center cursor-pointer"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(6,182,212,0.3)',
                        '0 0 40px rgba(6,182,212,0.6)', 
                        '0 0 20px rgba(6,182,212,0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-cyan-300" />
                  </motion.div>
                  
                  {/* Barre de progression animée */}
                  <div className="absolute bottom-2 left-2 right-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-teal-400"
                      animate={{ width: ['0%', '70%', '100%', '0%'] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                  
                  {/* Particules flottantes */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-300/50 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + Math.sin(i) * 20}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Column 3: Analytics avec graphiques animés */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-600/30 flex flex-col gap-4"
              >
                {/* Header avec icône pulsante */}
                <motion.div 
                  className="flex items-center gap-2 h-6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-teal-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: ['0 0 0 rgba(20,184,166,0.7)', '0 0 10px rgba(20,184,166,0.7)', '0 0 0 rgba(20,184,166,0.7)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="h-4 bg-teal-400/40 rounded w-20"></div>
                </motion.div>
                
                {/* Stats avec barres animées */}
                <div className="space-y-4 flex-grow">
                  {[
                    { color: 'bg-green-400', width: '80%', delay: 0 },
                    { color: 'bg-yellow-400', width: '65%', delay: 0.2 },
                    { color: 'bg-cyan-400', width: '90%', delay: 0.4 },
                    { color: 'bg-pink-400', width: '45%', delay: 0.6 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <motion.div 
                        className={`w-3 h-3 ${item.color} rounded-full`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: item.delay 
                        }}
                      />
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${item.color}`}
                          initial={{ width: '0%' }}
                          animate={{ width: item.width }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 2 + item.delay,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Graphique animé en bas */}
                <motion.div 
                  className="h-10 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-lg relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
