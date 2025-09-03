import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../components/LanguageContext';
import { Grid3X3, Sun, Newspaper, Youtube, Twitter, Code, Clock } from 'lucide-react';
import FinalCTA from '../components/home/FinalCTA';
import FeatureSubNav from '../components/FeatureSubNav';

const FeatureDetail = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start gap-4"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-cyan-900 to-teal-900 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-cyan-400/30">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function FeatureAppsPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Applications Intégrées",
      titleHighlight: "Puissantes",
      subtitle: "Enrichissez vos écrans avec une bibliothèque d'applications prêtes à l'emploi. Météo, actualités, réseaux sociaux et bien plus.",
      currentFeature: "Applications",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      features: [
        {
          icon: Sun,
          title: "Météo en Temps Réel",
          description: "Affichez les conditions météorologiques actuelles et les prévisions. Parfait pour les espaces d'accueil et les vitrines."
        },
        {
          icon: Newspaper,
          title: "Flux d'Actualités",
          description: "Intégrez des flux RSS ou des sources d'actualités pour tenir votre audience informée des dernières nouvelles."
        },
        {
          icon: Youtube,
          title: "Contenus Multimédia",
          description: "Diffusez facilement des vidéos YouTube, des flux Instagram ou d'autres contenus multimédias dynamiques."
        },
        {
          icon: Clock,
          title: "Horloges et Compteurs",
          description: "Ajoutez des horloges mondiales, des compteurs d'événements ou des timers pour enrichir l'expérience utilisateur."
        }
      ]
    },
    en: {
      title: "Integrated Apps",
      titleHighlight: "Powerful",
      subtitle: "Enrich your screens with a library of ready-to-use applications. Weather, news, social media, and much more.",
      currentFeature: "Apps",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      features: [
        {
          icon: Sun,
          title: "Real-time Weather",
          description: "Display current weather conditions and forecasts. Perfect for reception areas and storefronts."
        },
        {
          icon: Newspaper,
          title: "News Feeds",
          description: "Integrate RSS feeds or news sources to keep your audience informed of the latest news."
        },
        {
          icon: Youtube,
          title: "Multimedia Content",
          description: "Easily broadcast YouTube videos, Instagram feeds, or other dynamic multimedia content."
        },
        {
          icon: Clock,
          title: "Clocks and Counters",
          description: "Add world clocks, event counters, or timers to enrich the user experience."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="pt-16">
      <FeatureSubNav currentFeature={t.currentFeature} />
      
      <div className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 px-6 pt-12"
        >
          <Grid3X3 className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              {t.title}{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              {t.titleHighlight}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden"
          >
            <img src={t.image} alt="Integrated Apps Showcase" className="w-full h-full object-cover" />
          </motion.div>
          
          <div className="space-y-8">
            {t.features.map((feature, index) => (
              <FeatureDetail 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        <FinalCTA />
      </div>
    </div>
  );
}