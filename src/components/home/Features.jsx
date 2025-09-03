import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Calendar, MonitorPlay } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

const featureIcons = [Wand2, Calendar, MonitorPlay];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-teal-900/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full flex flex-col items-start group-hover:border-cyan-400/30 transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-900 to-teal-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
        <feature.icon className="w-8 h-8 text-cyan-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-400 leading-relaxed flex-grow group-hover:text-slate-300 transition-colors">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

export default function Features() {
  const { t } = useContext(LanguageContext);

  if (!t.features) {
    return null;
  }
  
  const features = t.features.items.map((item, index) => ({...item, icon: featureIcons[index]}));

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.features.title1}{' '}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              {t.features.title2}
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t.features.subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}