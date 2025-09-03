
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../LanguageContext';

const integrations = [
  { 
    name: 'YouTube', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    color: 'from-red-500 to-red-600', 
    description: 'Importez vos vidéos directement' 
  },
  { 
    name: 'Google Agenda', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
    color: 'from-blue-500 to-blue-600', 
    description: 'Synchronisation automatique' 
  },
  { 
    name: 'Canva', 
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Canva-Logo.png',
    color: 'from-purple-500 to-pink-500', 
    description: 'Créations graphiques intégrées' 
  },
  { 
    name: 'Drive', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
    color: 'from-green-500 to-green-600', 
    description: 'Stockage cloud unifié' 
  },
  { 
    name: 'Chrome Store', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    color: 'from-yellow-500 to-orange-500', 
    description: 'Installation simplifiée' 
  },
  { 
    name: 'Google Play', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
    color: 'from-cyan-500 to-blue-500', 
    description: 'Disponible sur mobile' 
  }
];

const IntegrationCard = ({ integration, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
    className="group relative"
  >
    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
        <img 
          src={integration.logo} 
          alt={integration.name}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {integration.name}
      </h3>
      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
        {integration.description}
      </p>
    </div>
  </motion.div>
);

export default function IntegrationsSection() {
  const { t } = useContext(LanguageContext);

  if (!t.integrations) {
    return null;
  }
  
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.integrations.title1}{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              {t.integrations.title2}
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t.integrations.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t.integrations.workflowTitle}</h3>
            <div className="flex items-center justify-between">
              {t.integrations.workflowSteps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-slate-300 font-medium">{step}</span>
                  </div>
                  {index < 2 && (
                    <motion.div
                      className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 mx-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 + index * 0.3 }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
