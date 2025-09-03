import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import FinalCTA from '../components/home/FinalCTA';
import { Wand2, Monitor, ListVideo, Calendar, Grid3X3, ArrowRight } from 'lucide-react';
import { LanguageContext } from '../components/LanguageContext';

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-300 flex flex-col"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-cyan-900 to-teal-900 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
      <feature.icon className="w-8 h-8 text-cyan-400" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
    <p className="text-slate-400 leading-relaxed flex-grow">{feature.description}</p>
    <Link to={feature.path} className="mt-6">
      <button className="font-semibold text-cyan-400 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
        En savoir plus
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  </motion.div>
);

export default function FonctionnalitesPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Une puissance",
      titleHighlight: "sans équivalent",
      subtitle: "AllSign est bien plus qu'un simple outil d'affichage. C'est une plateforme complète conçue pour décupler votre efficacité. Découvrez nos fonctionnalités en détail.",
      features: [
        {
          title: "Génération par IA",
          description: "Créez contenus, visuels et vidéos instantanément à partir d'une simple phrase.",
          icon: Wand2,
          path: createPageUrl("FeatureAI")
        },
        {
          title: "Gestion des Écrans",
          description: "Pilotez un nombre illimité d'écrans, où qu'ils soient, depuis une interface unique.",
          icon: Monitor,
          path: createPageUrl("FeatureScreens")
        },
        {
          title: "Playlists Dynamiques",
          description: "Organisez et programmez vos contenus avec une flexibilité totale pour un impact maximal.",
          icon: ListVideo,
          path: createPageUrl("FeaturePlaylists")
        },
        {
          title: "Synchronisation Agenda",
          description: "Connectez vos calendriers Google ou Outlook pour un affichage toujours à jour, sans effort.",
          icon: Calendar,
          path: createPageUrl("FeatureAgenda")
        },
        {
          title: "Applications Intégrées",
          description: "Enrichissez vos écrans avec la météo, les actualités, les réseaux sociaux et bien plus.",
          icon: Grid3X3,
          path: createPageUrl("FeatureApps")
        }
      ]
    },
    en: {
      title: "Unparalleled",
      titleHighlight: "Power",
      subtitle: "AllSign is much more than a simple signage tool. It's a complete platform designed to boost your efficiency. Explore our features in detail.",
      features: [
        {
          title: "AI Generation",
          description: "Instantly create content, visuals, and videos from a simple sentence.",
          icon: Wand2,
          path: createPageUrl("FeatureAI")
        },
        {
          title: "Screen Management",
          description: "Control an unlimited number of screens, wherever they are, from a single interface.",
          icon: Monitor,
          path: createPageUrl("FeatureScreens")
        },
        {
          title: "Dynamic Playlists",
          description: "Organize and schedule your content with total flexibility for maximum impact.",
          icon: ListVideo,
          path: createPageUrl("FeaturePlaylists")
        },
        {
          title: "Calendar Sync",
          description: "Connect your Google or Outlook calendars for effortlessly up-to-date displays.",
          icon: Calendar,
          path: createPageUrl("FeatureAgenda")
        },
        {
          title: "Integrated Apps",
          description: "Enrich your screens with weather, news, social media feeds, and much more.",
          icon: Grid3X3,
          path: createPageUrl("FeatureApps")
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-20 px-6"
      >
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

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}