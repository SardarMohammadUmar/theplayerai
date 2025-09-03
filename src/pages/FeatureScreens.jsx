import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../components/LanguageContext';
import { Monitor, Map, Globe, Shield, Tv } from 'lucide-react';
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

export default function FeatureScreensPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Gestion des Écrans",
      titleHighlight: "Centralisée",
      subtitle: "Pilotez l'ensemble de votre parc d'écrans depuis une interface unique, où que vous soyez. Simplicité, contrôle et performance.",
      currentFeature: "Gestion Écrans",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f82de0?q=80&w=2070&auto=format&fit=crop",
      features: [
        {
          icon: Map,
          title: "Vue cartographique",
          description: "Visualisez tous vos écrans sur une carte interactive. Vérifiez leur statut en un clin d'œil et accédez rapidement à leurs paramètres."
        },
        {
          icon: Globe,
          title: "Contrôle à distance",
          description: "Mettez à jour, redémarrez ou modifiez le contenu de n'importe quel écran, partout dans le monde, depuis votre tableau de bord."
        },
        {
          icon: Shield,
          title: "Sécurité et Statut en temps réel",
          description: "Surveillez la santé de votre parc avec des alertes en temps réel. Notre infrastructure sécurisée garantit une diffusion fiable."
        },
        {
          icon: Tv,
          title: "Compatibilité Universelle",
          description: "Notre solution fonctionne avec une large gamme de matériel, des téléviseurs grand public aux écrans professionnels."
        }
      ]
    },
    en: {
      title: "Screen Management",
      titleHighlight: "Centralized",
      subtitle: "Control your entire fleet of screens from a single interface, wherever you are. Simplicity, control, and performance.",
      currentFeature: "Screen Management",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f82de0?q=80&w=2070&auto=format&fit=crop",
      features: [
        {
          icon: Map,
          title: "Map View",
          description: "Visualize all your screens on an interactive map. Check their status at a glance and quickly access their settings."
        },
        {
          icon: Globe,
          title: "Remote Control",
          description: "Update, restart, or change the content of any screen, anywhere in the world, from your dashboard."
        },
        {
          icon: Shield,
          title: "Real-time Status & Security",
          description: "Monitor the health of your fleet with real-time alerts. Our secure infrastructure ensures reliable broadcasting."
        },
        {
          icon: Tv,
          title: "Universal Compatibility",
          description: "Our solution works with a wide range of hardware, from consumer TVs to professional displays."
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
          <Monitor className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
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
            <img src={t.image} alt="Screen Management Showcase" className="w-full h-full object-cover" />
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