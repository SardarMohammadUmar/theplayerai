import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../components/LanguageContext';
import { Calendar, Zap, Clock, ArrowRight, Monitor } from 'lucide-react';
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

export default function FeatureAgendaPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Synchronisation Agenda",
      titleHighlight: "Automatique",
      subtitle: "Connectez vos calendriers Google ou Outlook pour un affichage toujours à jour, sans effort. Vos écrans s'adaptent automatiquement à vos événements.",
      currentFeature: "Synchronisation",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop",
      features: [
        {
          icon: Zap,
          title: "Synchronisation Temps Réel",
          description: "Dès qu'un événement est ajouté, modifié ou supprimé dans votre calendrier, vos écrans se mettent à jour automatiquement."
        },
        {
          icon: Clock,
          title: "Affichage Contextuel",
          description: "Vos écrans affichent automatiquement les informations pertinentes : réunions du jour, événements à venir, salles disponibles."
        },
        {
          icon: ArrowRight,
          title: "Intégrations Multiples",
          description: "Compatible avec Google Calendar, Outlook, Apple Calendar et la plupart des systèmes de calendrier professionnels."
        },
        {
          icon: Monitor,
          title: "Personnalisation Avancée",
          description: "Choisissez quelles informations afficher, personnalisez le design et définissez des règles d'affichage selon vos besoins."
        }
      ]
    },
    en: {
      title: "Calendar Sync",
      titleHighlight: "Automatic",
      subtitle: "Connect your Google or Outlook calendars for effortlessly up-to-date displays. Your screens automatically adapt to your events.",
      currentFeature: "Calendar Sync",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop",
      features: [
        {
          icon: Zap,
          title: "Real-time Synchronization",
          description: "As soon as an event is added, modified, or deleted in your calendar, your screens update automatically."
        },
        {
          icon: Clock,
          title: "Contextual Display",
          description: "Your screens automatically display relevant information: today's meetings, upcoming events, available rooms."
        },
        {
          icon: ArrowRight,
          title: "Multiple Integrations",
          description: "Compatible with Google Calendar, Outlook, Apple Calendar, and most professional calendar systems."
        },
        {
          icon: Monitor,
          title: "Advanced Customization",
          description: "Choose which information to display, customize the design, and define display rules according to your needs."
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
          <Calendar className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
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
            <img src={t.image} alt="Calendar Sync Showcase" className="w-full h-full object-cover" />
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