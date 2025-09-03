import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Tv, Smartphone } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

const devices = [
  { name: 'Android TV', icon: Tv, compatibility: '100%', color: 'from-green-500 to-green-600' },
  { name: 'LG webOS', icon: Monitor, compatibility: '100%', color: 'from-blue-500 to-blue-600' },
  { name: 'Samsung Tizen', icon: Monitor, compatibility: '100%', color: 'from-purple-500 to-purple-600' },
  { name: 'Amazon Fire TV', icon: Smartphone, compatibility: '100%', color: 'from-orange-500 to-orange-600' },
  { name: 'Chrome OS', icon: Monitor, compatibility: '100%', color: 'from-cyan-500 to-cyan-600' }
];

const DeviceCard = ({ device, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    className="group relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
  >
    <div className="relative z-10">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <device.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
      <div className="flex items-center justify-center gap-2">
        <span className="text-green-400 font-mono text-sm">{device.compatibility}</span>
        <span className="text-slate-400 text-sm">compatible</span>
      </div>
    </div>
  </motion.div>
);

export default function DeviceCompatibility() {
  const { t } = useContext(LanguageContext);

  if (!t.compatibility) {
    return null;
  }

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.compatibility.title1}{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              {t.compatibility.title2}
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t.compatibility.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.compatibility.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
                <div className="text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}