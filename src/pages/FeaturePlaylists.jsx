import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../components/LanguageContext';
import { ListVideo, Clock, Calendar, Shuffle, Play } from 'lucide-react';
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

export default function FeaturePlaylistsPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Playlists Dynamiques",
      titleHighlight: "Intelligentes",
      subtitle: "Organisez et programmez vos contenus avec une flexibilité totale. Créez des expériences sur mesure qui s'adaptent automatiquement.",
      currentFeature: "Playlists",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop",
      features: [
        {
          icon: Clock,
          title: "Programmation Avancée",
          description: "Définissez des horaires précis, des règles de répétition et des conditions d'affichage complexes. Votre contenu s'affiche au bon moment, automatiquement."
        },
        {
          icon: Calendar,
          title: "Planification Saisonnière",
          description: "Créez des campagnes sur plusieurs mois avec des variations selon les saisons, les événements ou les promotions spéciales."
        },
        {
          icon: Shuffle,
          title: "Rotation Intelligente",
          description: "L'IA optimise l'ordre de diffusion selon l'engagement de votre audience et les performances de chaque contenu."
        },
        {
          icon: Play,
          title: "Diffusion Adaptative",
          description: "Vos playlists s'adaptent automatiquement selon le contexte : heure, météo, événements en cours ou données de votre système."
        }
      ]
    },
    en: {
      title: "Dynamic Playlists",
      titleHighlight: "Intelligent",
      subtitle: "Organize and schedule your content with total flexibility. Create custom experiences that adapt automatically.",
      currentFeature: "Playlists",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop",
      features: [
        {
          icon: Clock,
          title: "Advanced Scheduling",
          description: "Define precise schedules, repeat rules, and complex display conditions. Your content displays at the right time, automatically."
        },
        {
          icon: Calendar,
          title: "Seasonal Planning",
          description: "Create campaigns spanning multiple months with variations based on seasons, events, or special promotions."
        },
        {
          icon: Shuffle,
          title: "Smart Rotation",
          description: "AI optimizes the broadcast order based on your audience engagement and the performance of each piece of content."
        },
        {
          icon: Play,
          title: "Adaptive Broadcasting",
          description: "Your playlists automatically adapt based on context: time, weather, current events, or data from your system."
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
          <ListVideo className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
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
            <img src={t.image} alt="Dynamic Playlists Showcase" className="w-full h-full object-cover" />
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