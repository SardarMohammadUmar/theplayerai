
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Bell } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

export default function AppStores() {
  const { t } = useContext(LanguageContext);

  if (!t.appStores) {
    return null;
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Fond avec effet de vagues */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-teal-600/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 backdrop-blur-xl border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-8">
            <Smartphone className="w-4 h-4 animate-bounce" />
            {t.appStores.badge}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.appStores.title1}{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {t.appStores.title2}
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t.appStores.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* App Store Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <img 
                    src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" 
                    alt="App Store" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">App Store</h3>
                <p className="text-slate-400 mb-6">{t.appStores.appStore.description}</p>
                
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/60 border border-slate-600/50 rounded-2xl text-slate-300"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 rgba(147,51,234,0)',
                      '0 0 20px rgba(147,51,234,0.3)',
                      '0 0 0 rgba(147,51,234,0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">{t.appStores.appStore.comingSoon}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Google Play Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.04 5.51A2.5 2.5 0 0 1 3.5 4h17A2.5 2.5 0 0 1 23 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 17.5v-11c0-.69.28-1.32.76-1.77L12 12l10.24-6.49z"/>
                    <path d="m1.04 18.49 10.2-6.48L23 18.5a2.5 2.5 0 0 1-2.5 1.5h-17A2.5 2.5 0 0 1 1 17.5c0 .35.14.67.38.91L12 12z"/>
                    <path d="M12 12 1.76 5.51A2.5 2.5 0 0 1 3.5 4h17A2.5 2.5 0 0 1 23 6.5L12 12z"/>
                    <path d="M12 12 1.04 18.49A2.5 2.5 0 0 1 1 17.5v-11c0-.69.28-1.32.76-1.77L12 12z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Google Play</h3>
                <p className="text-slate-400 mb-6">{t.appStores.googlePlay.description}</p>
                
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/60 border border-slate-600/50 rounded-2xl text-slate-300"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 rgba(6,182,212,0)',
                      '0 0 20px rgba(6,182,212,0.3)',
                      '0 0 0 rgba(6,182,212,0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">{t.appStores.googlePlay.comingSoon}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Notification Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Download className="w-8 h-8 text-purple-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">{t.appStores.notification.title}</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              {t.appStores.notification.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {t.appStores.notification.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full text-sm text-slate-300"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
