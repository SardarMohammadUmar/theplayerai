import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../components/LanguageContext';
import { Wand2, Sparkles, Film, Mic, Palette } from 'lucide-react';
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

export default function FeatureAIPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Génération par IA",
      titleHighlight: "Révolutionnaire",
      subtitle: "Créez des contenus visuels et textuels percutants en quelques secondes. Laissez notre intelligence artificielle transformer vos idées en réalité.",
      currentFeature: "Génération IA",
      image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1974&auto=format&fit=crop",
      features: [
        {
          icon: Sparkles,
          title: "Visuels Instantanés",
          description: "Décrivez l'image que vous souhaitez et notre IA la génère pour vous. Idéal pour les promotions, les annonces ou les fonds d'écran personnalisés."
        },
        {
          icon: Film,
          title: "Courtes Vidéos Automatisées",
          description: "Transformez une série d'images et de textes en une courte vidéo promotionnelle animée. Parfait pour dynamiser vos écrans."
        },
        {
          icon: Mic,
          title: "Rédaction de Contenu",
          description: "Besoin d'une accroche marketing ou d'un texte descriptif ? Notre IA rédige des contenus optimisés pour capter l'attention."
        },
        {
          icon: Palette,
          title: "Adaptation de Style",
          description: "L'IA analyse votre charte graphique pour proposer des créations qui s'intègrent parfaitement à votre identité de marque."
        }
      ]
    },
    en: {
      title: "AI Generation",
      titleHighlight: "Revolutionary",
      subtitle: "Create impactful visual and textual content in seconds. Let our artificial intelligence turn your ideas into reality.",
      currentFeature: "AI Generation",
      image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1974&auto=format&fit=crop",
      features: [
        {
          icon: Sparkles,
          title: "Instant Visuals",
          description: "Describe the image you want, and our AI generates it for you. Ideal for promotions, announcements, or custom wallpapers."
        },
        {
          icon: Film,
          title: "Automated Short Videos",
          description: "Transform a series of images and texts into a short, animated promotional video. Perfect for bringing your screens to life."
        },
        {
          icon: Mic,
          title: "Content Writing",
          description: "Need a marketing hook or descriptive text? Our AI writes optimized content to capture attention."
        },
        {
          icon: Palette,
          title: "Style Adaptation",
          description: "The AI analyzes your brand guidelines to suggest creations that perfectly match your brand identity."
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
          <Wand2 className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
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
            <img src={t.image} alt="AI Generation Showcase" className="w-full h-full object-cover" />
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