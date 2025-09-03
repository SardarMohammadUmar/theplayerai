
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Globe, Heart } from 'lucide-react';
import { LanguageContext } from '../components/LanguageContext';

const TeamMember = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300"
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400/30"
    />
    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
    <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
    <p className="text-slate-400 leading-relaxed">{member.description}</p>
  </motion.div>
);

const ValueCard = ({ value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-300"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-cyan-900 to-teal-900 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
      <value.icon className="w-8 h-8 text-cyan-400" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
    <p className="text-slate-400 leading-relaxed">{value.description}</p>
  </motion.div>
);

export default function AboutPage() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      hero: {
        title: "À propos de",
        titleHighlight: "AllSign",
        subtitle: "Nous révolutionnons l'affichage dynamique avec l'intelligence artificielle pour créer des expériences visuelles exceptionnelles."
      },
      story: {
        title: "Notre Histoire",
        subtitle: "De l'idée à la révolution",
        content: "AllSign est né d'une vision simple : démocratiser l'affichage dynamique intelligent. Fondée en 2023 par une équipe d'experts en technologie et design, notre mission est de transformer la façon dont les entreprises communiquent visuellement.\n\nNous avons constaté que l'affichage dynamique traditionnel était complexe, coûteux et limité. C'est pourquoi nous avons développé une plateforme révolutionnaire qui combine intelligence artificielle, simplicité d'utilisation et performance exceptionnelle.\n\nAujourd'hui, AllSign est utilisé par des centaines d'entreprises à travers le monde pour créer des expériences visuelles engageantes et impactantes."
      },
      mission: {
        title: "Notre Mission",
        subtitle: "Transformer l'affichage dynamique",
        content: "Rendre l'affichage dynamique intelligent accessible à toutes les entreprises, quelle que soit leur taille. Nous croyons que chaque écran peut devenir un outil de communication puissant grâce à l'intelligence artificielle."
      },
      values: {
        title: "Nos Valeurs",
        subtitle: "Ce qui nous guide au quotidien",
        items: [
          {
            title: "Innovation",
            description: "Nous repoussons constamment les limites de la technologie pour offrir des solutions d'avant-garde qui anticipent les besoins de demain.",
            icon: Lightbulb
          },
          {
            title: "Simplicité",
            description: "Nous croyons que la technologie la plus puissante est celle qui reste simple à utiliser. Notre interface intuitive permet à chacun de créer des contenus professionnels.",
            icon: Target
          },
          {
            title: "Excellence",
            description: "Nous nous engageons à fournir une qualité irréprochable dans chaque aspect de notre produit, du design à la performance technique.",
            icon: Award
          },
          {
            title: "Accessibilité",
            description: "Notre mission est de démocratiser l'affichage dynamique intelligent en le rendant accessible à toutes les entreprises, partout dans le monde.",
            icon: Globe
          }
        ]
      },
      team: {
        title: "Notre Équipe",
        subtitle: "Les visionnaires derrière AllSign",
        members: [
          {
            name: "Marie Dubois",
            role: "CEO & Co-fondatrice",
            description: "Experte en transformation digitale avec 15 ans d'expérience. Passionnée par l'innovation et l'entrepreneuriat.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
          },
          {
            name: "Thomas Martin",
            role: "CTO & Co-fondateur",
            description: "Ingénieur en intelligence artificielle, ancien de Google. Expert en machine learning et architecture cloud.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          },
          {
            name: "Sophie Laurent",
            role: "Head of Design",
            description: "Designer UX/UI primée avec une expertise en psychologie cognitive et design d'interaction.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
          },
          {
            name: "Alex Chen",
            role: "Head of AI Research",
            description: "Docteur en informatique spécialisé en vision par ordinateur et génération de contenu par IA.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          }
        ]
      },
      stats: {
        items: [
          { value: "500+", label: "Entreprises clientes" },
          { value: "2000+", label: "Écrans connectés" },
          { value: "50+", label: "Pays" },
          { value: "99.9%", label: "Uptime garanti" }
        ]
      },
      vision: {
        title: "Notre Vision",
        subtitle: "L'avenir de l'affichage dynamique",
        content: "Nous imaginons un monde où chaque écran devient un assistant intelligent, capable de s'adapter automatiquement au contexte, aux préférences des utilisateurs et aux objectifs business. Notre vision est de créer un écosystème d'affichage dynamique totalement autonome et intelligent."
      }
    },
    en: {
      hero: {
        title: "About",
        titleHighlight: "AllSign",
        subtitle: "We're revolutionizing digital signage with artificial intelligence to create exceptional visual experiences."
      },
      story: {
        title: "Our Story",
        subtitle: "From idea to revolution",
        content: "AllSign was born from a simple vision: democratize intelligent digital signage. Founded in 2023 by a team of technology and design experts, our mission is to transform how businesses communicate visually.\n\nWe noticed that traditional digital signage was complex, expensive, and limited. That's why we developed a revolutionary platform that combines artificial intelligence, ease of use, and exceptional performance.\n\nToday, AllSign is used by hundreds of companies worldwide to create engaging and impactful visual experiences."
      },
      mission: {
        title: "Our Mission",
        subtitle: "Transforming digital signage",
        content: "Make intelligent digital signage accessible to all businesses, regardless of their size. We believe every screen can become a powerful communication tool through artificial intelligence."
      },
      values: {
        title: "Our Values",
        subtitle: "What guides us every day",
        items: [
          {
            title: "Innovation",
            description: "We constantly push the boundaries of technology to offer cutting-edge solutions that anticipate tomorrow's needs.",
            icon: Lightbulb
          },
          {
            title: "Simplicity",
            description: "We believe the most powerful technology is the one that remains simple to use. Our intuitive interface allows anyone to create professional content.",
            icon: Target
          },
          {
            title: "Excellence",
            description: "We commit to providing impeccable quality in every aspect of our product, from design to technical performance.",
            icon: Award
          },
          {
            title: "Accessibility",
            description: "Our mission is to democratize intelligent digital signage by making it accessible to all businesses, everywhere in the world.",
            icon: Globe
          }
        ]
      },
      team: {
        title: "Our Team",
        subtitle: "The visionaries behind AllSign",
        members: [
          {
            name: "Marie Dubois",
            role: "CEO & Co-founder",
            description: "Digital transformation expert with 15 years of experience. Passionate about innovation and entrepreneurship.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
          },
          {
            name: "Thomas Martin",
            role: "CTO & Co-founder",
            description: "AI engineer, former Google. Expert in machine learning and cloud architecture.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          },
          {
            name: "Sophie Laurent",
            role: "Head of Design",
            description: "Award-winning UX/UI designer with expertise in cognitive psychology and interaction design.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
          },
          {
            name: "Alex Chen",
            role: "Head of AI Research",
            description: "PhD in Computer Science specialized in computer vision and AI content generation.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          }
        ]
      },
      stats: {
        items: [
          { value: "500+", label: "Client companies" },
          { value: "2000+", label: "Connected screens" },
          { value: "50+", label: "Countries" },
          { value: "99.9%", label: "Guaranteed uptime" }
        ]
      },
      vision: {
        title: "Our Vision",
        subtitle: "The future of digital signage",
        content: "We envision a world where every screen becomes an intelligent assistant, capable of automatically adapting to context, user preferences, and business objectives. Our vision is to create a completely autonomous and intelligent digital signage ecosystem."
      }
    }
  };

  const t = content[language] || content.en;

  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-20 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
            {t.hero.title}{' '}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 mb-24"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.items.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 mb-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.story.title}
          </h2>
          <p className="text-xl text-slate-400">{t.story.subtitle}</p>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
          <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
            {t.story.content}
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 mb-24"
      >
        <div className="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{t.mission.title}</h2>
              <p className="text-cyan-300">{t.mission.subtitle}</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            {t.mission.content}
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 mb-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.values.title}
          </h2>
          <p className="text-xl text-slate-400">{t.values.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.values.items.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 mb-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.team.title}
          </h2>
          <p className="text-xl text-slate-400">{t.team.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.team.members.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.vision.title}
          </h2>
          <p className="text-xl text-slate-400">{t.vision.subtitle}</p>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
          <p className="text-slate-300 leading-relaxed text-lg text-center">
            {t.vision.content}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
