

import React, { useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer"; // Moved Footer to its own component file
import { LanguageContext } from './components/LanguageContext';

const translations = {
  fr: {
    nav: { features: 'Fonctionnalités', pricing: 'Tarifs', contact: 'Contact', joinWaitlist: 'Rejoindre la liste d\'attente', demo: 'Demander une démo', about: 'À propos' },
    hero: { badge: 'Intelligence artificielle • Affichage dynamique • Innovation', title1: 'L\'affichage intelligent', title2: 'réinventé par l\'IA', subtitle: 'AllSign transforme vos écrans en outils de communication ultra-intelligents.', subtitle2: 'Générez, programmez et diffusez', subtitle3: 'vos contenus avec une facilité déconcertante.', joinButton: 'Rejoindre la liste d\'attente', watchDemo: 'Voir la démo' },
    features: { title1: 'Des fonctionnalités', title2: 'révolutionnaires', subtitle: 'AllSign repousse les limites de l\'affichage dynamique avec des technologies d\'avant-garde.', items: [ { title: 'Génération IA de contenu', description: 'Créez instantanément des visuels, vidéos et présentations percutantes grâce à notre IA.' }, { title: 'Suggestions intelligentes', description: 'AllSign analyse votre agenda et propose automatiquement des contenus adaptés.' }, { title: 'Diffusion multi-écrans', description: 'Contrôlez et synchronisez tous vos écrans depuis une interface centralisée.' } ] },
    aiShowcase: { badge: 'Intelligence Artificielle Avancée', title1: 'L\'IA qui révolutionne', title2: 'votre créativité', subtitle: 'Notre intelligence artificielle crée, optimise et adapte vos contenus en temps réel.', capabilities: [ 'Génération d\'images', 'Création de vidéos', 'Rédaction de contenu', 'Optimisation auto' ], benefits: [ { title: 'Création instantanée', description: 'Générez visuels, vidéos et textes en quelques secondes avec des prompts simples.' }, { title: 'Adaptation intelligente', description: 'L\'IA apprend vos préférences et adapte automatiquement le style et le ton.' }, { title: 'Optimisation continue', description: 'Amélioration permanente des performances selon l\'engagement de votre audience.' } ], quote: '"L\'IA d\'AllSign a transformé notre productivité créative de 300%"' },
    integrations: { title1: 'Intégrations', title2: 'transparentes', subtitle: 'Connectez AllSign à tous vos outils favoris pour un workflow fluide et efficace.', workflowTitle: 'Workflow automatisé', workflowSteps: ['Calendrier', 'IA AllSign', 'Écrans'] },
    compatibility: { title1: 'Compatible avec', title2: 'tous vos écrans', subtitle: 'Une solution universelle qui s\'adapte à n\'importe quel appareil d\'affichage.', stats: [ { value: '99.8%', label: 'Taux de compatibilité' }, { value: '< 30s', label: 'Installation moyenne' }, { value: '24/7', label: 'Support technique' } ] },
    testimonials: { title1: 'Ils nous font', title2: 'confiance', subtitle: 'Découvrez pourquoi des centaines d\'entreprises choisissent AllSign.', items: [ { name: 'Marie Dubois', role: 'Directrice Marketing', company: 'TechCorp', content: 'AllSign a révolutionné notre communication interne. L\'IA génère des contenus parfaitement adaptés à nos événements.' }, { name: 'Thomas Martin', role: 'Gérant', company: 'Retail Plus', content: 'Installation en 5 minutes sur nos écrans Samsung. L\'interface est intuitive et les résultats impressionnants.' }, { name: 'Sophie Laurent', role: 'Resp. Communication', company: 'Events Pro', content: 'La synchronisation avec Google Agenda est parfaite. Plus besoin de mise à jour manuelle de nos écrans.' } ], stats: [ { value: '1000+', label: 'Entreprises' }, { value: '5000+', label: 'Écrans connectés' }, { value: '99%', label: 'Satisfaction client' }, { value: '24/7', label: 'Support' } ] },
    pricing: { title: 'Des tarifs', titleHighlight: 'transparents', subtitle: 'Choisissez l\'offre qui correspond à vos besoins. Essai gratuit de 14 jours, sans engagement.', plans: [ { name: 'Plan Gratuit', price: 'Gratuit', period: '', description: 'Idéal pour débuter', features: [ '2 écrans maximum', '10 générations IA/mois', '1 GB de stockage', '3 playlists', 'Support de base', 'Templates de base' ], button: 'Plan actuel', free: true }, { name: 'Plan Starter', price: '19.99€', period: '/mois', description: 'Idéal pour les petites entreprises', features: [ '10 écrans maximum', '100 générations IA/mois', '10 GB de stockage', '20 playlists', 'Support prioritaire', 'Templates premium', 'Analytics de base' ], button: 'Commencer', popular: true }, { name: 'Plan Professional', price: '49.99€', period: '/mois', description: 'Pour les entreprises en croissance', features: [ '50 écrans maximum', '500 générations IA/mois', '50 GB de stockage', '100 playlists', 'Support prioritaire', 'Templates premium', 'Analytics avancés', 'Branding personnalisé' ], button: 'Mettre à niveau' }, { name: 'Plan Enterprise', price: '99.99€', period: '/mois', description: 'Solution complète pour les grandes entreprises', features: [ 'Écrans illimités', 'Générations IA illimitées', '500 GB de stockage', 'Playlists illimitées', 'Support dédié', 'Templates premium', 'Analytics avancés', 'Branding personnalisé', 'Accès API' ], button: 'Contactez-nous', enterprise: true } ], note: 'Toutes les offres incluent l\'essai gratuit de 14 jours', subnote: 'Aucune carte de crédit requise • Annulation à tout moment' },
    finalCta: { badge: 'Rejoignez la révolution de l\'affichage intelligent', title1: 'Prêt à transformer', title2: 'vos écrans ?', subtitle: 'Rejoignez la liste d\'attente et soyez parmi les premiers à découvrir la puissance de l\'affichage dynamique intelligent.', button1: 'Rejoindre la liste d\'attente', button2: 'Planifier une démo', guarantees: ['Aucune carte de crédit requise', 'Installation en moins de 5 minutes', 'Annulation à tout moment'] },
    waitlist: { title: 'Rejoignez la révolution', subtitle: 'Soyez parmi les premiers à découvrir AllSign', description: 'Inscrivez-vous à notre liste d\'attente pour un accès prioritaire et des mises à jour exclusives.', form: { firstName: 'Prénom', lastName: 'Nom', email: 'Email professionnel', company: 'Nom de l\'entreprise', role: 'Votre rôle', screensCount: 'Nombre d\'écrans prévus', interests: 'Vos besoins principaux', submitButton: 'Rejoindre la liste d\'attente', successMessage: 'Merci ! Vous êtes maintenant sur notre liste d\'attente.', sending: 'Envoi...' }, benefits: ['Accès prioritaire au lancement', 'Tarifs préférentiels early bird', 'Démonstration personnalisée', 'Support dédié pendant l\'onboarding'], interestOptions: [ { value: 'ai-content', label: 'Génération IA' }, { value: 'multi-screen', label: 'Gestion multi-écrans' }, { value: 'scheduling', label: 'Planification avancée' }, { value: 'analytics', label: 'Analytics et rapports' }, { value: 'integrations', label: 'Intégrations' } ] },
    detailedFeatures: { title: 'Une puissance', titleHighlight: 'sans équivalent', subtitle: 'AllSign est bien plus qu\'un simple outil d\'affichage. C\'est une plateforme complète conçue pour décupler votre efficacité.', items: [ { title: 'Génération de Contenu par IA', description: 'Créez instantanément des visuels, textes publicitaires et courtes vidéos à partir d\'un simple prompt. Notre IA est entraînée pour maximiser l\'impact visuel et marketing.' }, { title: 'Suggestions Intelligentes Proactives', description: 'AllSign se connecte à votre calendrier (Google, Outlook) et vous propose automatiquement des contenus adaptés pour vos réunions, promotions ou événements à venir.' }, { title: 'Gestion Multi-Écrans Centralisée', description: 'Pilotez un nombre illimité d\'écrans, où qu\'ils soient. Créez des groupes, programmez des contenus spécifiques par lieu ou par heure, et surveillez le statut de votre parc en temps réel.' }, { title: 'Planification Avancée', description: 'Organisez vos campagnes sur des semaines ou des mois. Définissez des règles de diffusion complexes (ex: diffuser uniquement le matin en semaine) en quelques clics.' }, { title: 'Analyses et Rapports de Performance', description: 'Suivez l\'engagement de vos contenus. Sachez quelles créations sont les plus efficaces et optimisez votre stratégie de communication grâce à des données claires.' }, { title: 'Gestion des Utilisateurs et des Rôles', description: 'Collaborez en équipe. Attribuez des droits spécifiques à vos collaborateurs pour un workflow sécurisé.' }, { title: 'Médiathèque Intelligente', description: 'Stockez et organisez tous vos médias. Notre IA tague automatiquement vos images et vidéos pour vous permettre de les retrouver et de les réutiliser facilement.' }, { title: 'Sécurité et Fiabilité d\'Entreprise', description: 'Profitez d\'une infrastructure robuste, d\'une surveillance 24/7 et d\'options de déploiement sécurisées pour garantir une diffusion sans interruption.' } ] },
    pricingPage: { title: 'Des tarifs clairs et', titleHighlight: 'adaptés à vos besoins', subtitle: 'Toutes nos offres incluent un essai gratuit de 14 jours. Sans engagement, sans carte de crédit requise.', comparisonTitle: 'Comparatif détaillé des fonctionnalités', featureHeader: 'Fonctionnalité', plans: ['Starter', 'Professional', 'Enterprise'], features: [ { feature: "Nombre d'écrans", starter: '3', pro: '10', enterprise: 'Illimité' }, { feature: "Génération IA de visuels", starter: true, pro: true, enterprise: true }, { feature: "Génération IA de vidéos", starter: 'Basique', pro: 'Avancée', enterprise: 'Personnalisée' }, { feature: "Suggestions intelligentes", starter: false, pro: true, enterprise: true }, { feature: "Intégrations (Agenda, Drive...)", starter: 'Limitées', pro: 'Complètes', enterprise: 'Sur mesure' }, { feature: "Analytics et rapports", starter: false, pro: true, enterprise: 'Avancés' }, { feature: "Gestion des utilisateurs", starter: '1 utilisateur', pro: 'Jusqu\'à 10', enterprise: 'Illimité' }, { feature: "Support technique", starter: 'Email', pro: 'Prioritaire', enterprise: 'Dédié 24/7' } ], faqTitle: 'Questions fréquentes', faqs: [ { q: 'Puis-je changer de forfait plus tard ?', a: 'Oui, absolument. Vous pouvez faire évoluer ou réduire votre forfait à tout moment depuis votre espace client pour l\'adapter à vos besoins.' }, { q: 'Quelles sont les options de paiement ?', a: 'Nous acceptons les principales cartes de crédit (Visa, MasterCard, American Express) ainsi que les virements bancaires pour les forfaits Entreprise.' }, { q: 'Y a-t-il une garantie de remboursement ?', a: 'Nous offrons un essai gratuit de 14 jours pour vous permettre de tester pleinement AllSign. Si vous n\'êtes pas satisfait, vous pouvez annuler à tout moment.' }, { q: 'Le support technique est-il inclus ?', a: 'Oui, toutes nos offres incluent un support technique. Le niveau de priorité et les canaux de communication varient en fonction de votre forfait.' } ] },
    contactPage: { title: 'Contactez-nous', subtitle: 'Une question ? Une idée de projet ? Notre équipe est là pour vous répondre.', info: 'Nos coordonnées', formTitle: 'Envoyez-nous un message', namePlaceholder: 'Votre nom', emailPlaceholder: 'Votre email', messagePlaceholder: 'Votre message', sendButton: 'Envoyer', details: [ { title: 'Email', value: 'contact@allsign.app' }, { title: 'Téléphone', value: '+33 1 23 45 67 89' }, { title: 'Adresse', value: '123 Avenue des Innovations, 75000 Paris, France' } ] },
    demoPage: { title: 'Préparez-vous à être impressionné.', subtitle: 'Demandez une démonstration personnalisée de 30 minutes et découvrez comment AllSign peut révolutionner votre communication visuelle.', benefits: ['Présentation de la génération par IA', 'Démonstration du planning intelligent', 'Session de questions/réponses'], formTitle: 'Planifier votre démo', namePlaceholder: 'Nom complet', emailPlaceholder: 'Email professionnel', companyPlaceholder: 'Nom de l\'entreprise', phonePlaceholder: 'Numéro de téléphone', button: 'Recevoir un lien de planification' },
    appStores: {
      badge: 'Applications mobiles en développement',
      title1: 'Bientôt disponible sur',
      title2: 'vos mobiles',
      subtitle: 'Contrôlez vos écrans AllSign directement depuis votre smartphone ou tablette.',
      appStore: {
        description: 'Application native iOS optimisée pour iPhone et iPad',
        comingSoon: 'Bientôt disponible'
      },
      googlePlay: {
        description: 'Application Android compatible avec tous vos appareils',
        comingSoon: 'Bientôt disponible'
      },
      notification: {
        title: 'Soyez les premiers informés',
        description: 'Inscrivez-vous à notre liste d\'attente pour recevoir une notification dès que les applications mobiles seront disponibles.',
        features: ['Contrôle à distance', 'Notifications push', 'Mode hors-ligne', 'Synchronisation cloud']
      }
    },
    footer: { copyright: 'Tous droits réservés.', tagline: 'Propulsé par une technologie d\'un autre monde.' }
  },
  en: {
    nav: { features: 'Features', pricing: 'Pricing', contact: 'Contact', joinWaitlist: 'Join Waitlist', demo: 'Request a demo', about: 'About' },
    hero: { badge: 'Artificial Intelligence • Digital Signage • Innovation', title1: 'Smart signage', title2: 'reimagined by AI', subtitle: 'AllSign turns your screens into ultra-smart communication tools.', subtitle2: 'Generate, schedule, and broadcast', subtitle3: 'your content with stunning ease.', joinButton: 'Join the Waitlist', watchDemo: 'Watch Demo' },
    features: { title1: 'Revolutionary', title2: 'features', subtitle: 'AllSign pushes the boundaries of digital signage with cutting-edge technologies.', items: [ { title: 'AI Content Generation', description: 'Instantly create impactful visuals, videos, and presentations with our AI.' }, { title: 'Smart Suggestions', description: 'AllSign analyzes your calendar and automatically suggests relevant content.' }, { title: 'Multi-Screen Broadcast', description: 'Control and sync all your screens from one centralized, intuitive interface.' } ] },
    aiShowcase: { badge: 'Advanced Artificial Intelligence', title1: 'The AI that sparks', title2: 'your creativity', subtitle: 'Our artificial intelligence creates, optimizes, and adapts your content in real time.', capabilities: [ 'Image Generation', 'Video Creation', 'Content Writing', 'Auto-Optimization' ], benefits: [ { title: 'Instant Creation', description: 'Generate visuals, videos, and text in seconds with simple prompts.' }, { title: 'Intelligent Adaptation', description: 'The AI learns your preferences and automatically adapts the style and tone.' }, { title: 'Continuous Optimization', description: 'Constantly improving performance based on your audience engagement.' } ], quote: '"AllSign\'s AI has boosted our creative productivity by 300%"' },
    integrations: { title1: 'Seamless', title2: 'integrations', subtitle: 'Connect AllSign to all your favorite tools for a smooth and efficient workflow.', workflowTitle: 'Automated Workflow', workflowSteps: ['Calendar', 'AllSign AI', 'Screens'] },
    compatibility: { title1: 'Compatible with', title2: 'all your screens', subtitle: 'A universal solution that adapts to any display device.', stats: [ { value: '99.8%', label: 'Compatibility Rate' }, { value: '< 30s', label: 'Average Setup Time' }, { value: '24/7', label: 'Technical Support' } ] },
    testimonials: { title1: 'Trusted by', title2: 'the best', subtitle: 'Discover why hundreds of companies choose AllSign for their screens.', items: [ { name: 'Sarah Johnson', role: 'Marketing Director', company: 'Innovate Inc.', content: 'AllSign has revolutionized our internal communication. The AI generates content perfectly tailored to our events.' }, { name: 'Michael Chen', role: 'Store Manager', company: 'Urban Outfitters', content: 'Set up in 5 minutes on our Samsung screens. The interface is intuitive, and the results are impressive.' }, { name: 'Emily Rodriguez', role: 'Communications Lead', company: 'Global Events Co.', content: 'The sync with Google Calendar is flawless. No more manual updates for our event screens.' } ], stats: [ { value: '1000+', label: 'Companies' }, { value: '5000+', label: 'Connected Screens' }, { value: '99%', label: 'Customer Satisfaction' }, { value: '24/7', label: 'Support' } ] },
    pricing: { title: 'Transparent', titleHighlight: 'Pricing', subtitle: 'Choose the plan that fits your needs. 14-day free trial, no commitment.', plans: [ { name: 'Free Plan', price: 'Free', period: '', description: 'Perfect to get started', features: [ '2 screens maximum', '10 AI generations/month', '1 GB storage', '3 playlists', 'Basic support', 'Basic templates' ], button: 'Current Plan', free: true }, { name: 'Starter Plan', price: '$19.99', period: '/mo', description: 'Ideal for small businesses', features: [ '10 screens maximum', '100 AI generations/month', '10 GB storage', '20 playlists', 'Priority support', 'Premium templates', 'Basic analytics' ], button: 'Get Started', popular: true }, { name: 'Professional Plan', price: '$49.99', period: '/mo', description: 'For growing businesses', features: [ '50 screens maximum', '500 AI generations/month', '50 GB storage', '100 playlists', 'Priority support', 'Premium templates', 'Advanced analytics', 'Custom branding' ], button: 'Upgrade' }, { name: 'Enterprise Plan', price: '$99.99', period: '/mo', description: 'Complete solution for large enterprises', features: [ 'Unlimited screens', 'Unlimited AI generations', '500 GB storage', 'Unlimited playlists', 'Dedicated support', 'Premium templates', 'Advanced analytics', 'Custom branding', 'API Access' ], button: 'Contact Us', enterprise: true } ], note: 'All plans include a 14-day free trial', subnote: 'No credit card required • Cancel anytime' },
    finalCta: { badge: 'Join the smart signage revolution', title1: 'Ready to transform', title2: 'your screens?', subtitle: 'Join the waitlist and be among the first to discover the power of smart digital signage.', button1: 'Join the Waitlist', button2: 'Schedule a Demo', guarantees: ['No credit card required', 'Setup in under 5 minutes', 'Cancel anytime'] },
    waitlist: { title: 'Join the Revolution', subtitle: 'Be among the first to discover AllSign', description: 'Sign up for our waitlist for priority access and exclusive updates.', form: { firstName: 'First Name', lastName: 'Last Name', email: 'Work Email', company: 'Company Name', role: 'Your Role', screensCount: 'Number of screens planned', interests: 'Your main needs', submitButton: 'Join The Waitlist', successMessage: 'Thank you! You are now on our waitlist.', sending: 'Sending...' }, benefits: ['Priority access at launch', 'Early-bird special pricing', 'Personalized demo', 'Dedicated onboarding support'], interestOptions: [ { value: 'ai-content', label: 'AI Generation' }, { value: 'multi-screen', label: 'Multi-screen management' }, { value: 'scheduling', label: 'Advanced scheduling' }, { value: 'analytics', label: 'Analytics & Reports' }, { value: 'integrations', label: 'Integrations' } ] },
    detailedFeatures: { title: 'Unparalleled', titleHighlight: 'Power', subtitle: 'AllSign is much more than a simple signage tool. It is a complete platform designed to multiply your efficiency.', items: [ { title: 'AI Content Generation', description: 'Instantly create visuals, ad copy, and short videos from a simple prompt. Our AI is trained to maximize visual and marketing impact.' }, { title: 'Proactive Smart Suggestions', description: 'AllSign connects to your calendar (Google, Outlook) and automatically suggests content tailored to your upcoming meetings, promotions, or events.' }, { title: 'Centralized Multi-Screen Management', description: 'Control an unlimited number of screens, wherever they are. Create groups, schedule specific content by location or time, and monitor your fleet\'s status in real time.' }, { title: 'Advanced Scheduling', description: 'Organize your campaigns over weeks or months. Define complex broadcasting rules (e.g., display only on weekday mornings) in just a few clicks.' }, { title: 'Performance Analytics & Reports', description: 'Track your content\'s engagement. Know which creations are most effective and optimize your communication strategy with clear data.' }, { title: 'User & Role Management', description: 'Collaborate as a team. Assign specific rights to your colleagues for a secure workflow.' }, { title: 'Smart Media Library', description: 'Store and organize all your media. Our AI automatically tags your images and videos, allowing you to find and reuse them easily.' }, { title: 'Enterprise Security & Reliability', description: 'Benefit from a robust infrastructure, 24/7 monitoring, and secure deployment options to ensure uninterrupted broadcasting.' } ] },
    pricingPage: { title: 'Clear and', titleHighlight: 'adapted pricing', subtitle: 'All our plans include a 14-day free trial. No commitment, no credit card required.', comparisonTitle: 'Detailed Feature Comparison', featureHeader: 'Feature', plans: ['Starter', 'Professional', 'Enterprise'], features: [ { feature: 'Number of screens', starter: '3', pro: '10', enterprise: 'Unlimited' }, { feature: 'AI Visual Generation', starter: true, pro: true, enterprise: true }, { feature: 'AI Video Generation', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' }, { feature: 'Smart Suggestions', starter: false, pro: true, enterprise: true }, { feature: 'Integrations (Calendar, Drive...)', starter: 'Limited', pro: 'Complete', enterprise: 'Custom' }, { feature: 'Analytics & Reports', starter: false, pro: true, enterprise: 'Advanced' }, { feature: 'User Management', starter: '1 user', pro: 'Up to 10', enterprise: 'Unlimited' }, { feature: 'Technical Support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated 24/7' } ], faqTitle: 'Frequently Asked Questions', faqs: [ { q: 'Can I change my plan later?', a: 'Yes, absolutely. You can upgrade or downgrade your plan at any time from your client area to fit your needs.' }, { q: 'What are the payment options?', a: 'We accept major credit cards (Visa, MasterCard, American Express) as well as bank transfers for Enterprise plans.' }, { q: 'Is there a money-back guarantee?', a: 'We offer a 14-day free trial to allow you to fully test AllSign. If you are not satisfied, you can cancel at any time.' }, { q: 'Is technical support included?', a: 'Yes, all our plans include technical support. The priority level and communication channels vary depending on your plan.' } ] },
    contactPage: { title: 'Contact Us', subtitle: 'A question? A project idea? Our team is here to answer you.', info: 'Our contact information', formTitle: 'Send us a message', namePlaceholder: 'Your name', emailPlaceholder: 'Your email', messagePlaceholder: 'Your message', sendButton: 'Send', details: [ { title: 'Email', value: 'contact@allsign.app' }, { title: 'Phone', value: '+1 (555) 123-4567' }, { title: 'Address', value: '123 Innovation Drive, San Francisco, CA 94105, USA' } ] },
    demoPage: { title: 'Get ready to be impressed.', subtitle: 'Request a personalized 30-minute demo and discover how AllSign can revolutionize your visual communication.', benefits: ['AI generation presentation', 'Smart scheduling demonstration', 'Q&A session'], formTitle: 'Schedule your demo', namePlaceholder: 'Full name', emailPlaceholder: 'Work email', companyPlaceholder: 'Company name', phonePlaceholder: 'Phone number', button: 'Get a scheduling link' },
    appStores: {
      badge: 'Mobile apps in development',
      title1: 'Coming soon to',
      title2: 'your mobile',
      subtitle: 'Control your AllSign screens directly from your smartphone or tablet.',
      appStore: {
        description: 'Native iOS app optimized for iPhone and iPad',
        comingSoon: 'Coming Soon'
      },
      googlePlay: {
        description: 'Android app compatible with all your devices',
        comingSoon: 'Coming Soon'
      },
      notification: {
        title: 'Be the first to know',
        description: 'Sign up for our waitlist to receive a notification as soon as the mobile apps are available.',
        features: ['Remote control', 'Push notifications', 'Offline mode', 'Cloud sync']
      }
    },
    footer: { copyright: 'All rights reserved.', tagline: 'Powered by out-of-this-world technology.' }
  }
};

export default function Layout({ children, currentPageName }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const location = useLocation();

  const t = translations[language]; // Renamed from currentTranslations to t

  const navLinks = [
    { name: t.nav.features, path: "Fonctionnalites" },
    { name: t.nav.pricing, path: "Tarifs" },
    { name: "Blog", path: "Blog" },
    { name: t.nav.about, path: "About" },
    { name: t.nav.contact, path: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };
  
  return (
    <LanguageContext.Provider value={{ language, t }}>
      <div className="bg-black text-slate-200 min-h-screen font-sans antialiased flex flex-col">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 origin-left z-50"
          style={{ scaleX }}
        />
        
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-slate-700/50' : 'bg-transparent'
          }`}
        >
          <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
            <Link to={createPageUrl("Home")}>
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/67fcbacf1_Green_Modern_Marketing_Logo__4_-removebg-preview.png" alt="AllSign Logo" className="h-12" />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <LanguageSwitcher 
                currentLanguage={language} 
                onLanguageChange={handleLanguageChange} 
              />
              <Link to={createPageUrl("Waitlist")}>
                <Button className="group bg-white/10 backdrop-blur-lg border border-cyan-400/30 text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  {t.nav.joinWaitlist}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </nav>
          
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden flex flex-col items-center gap-6 py-6 border-t border-slate-700/50"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  className="text-xl text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <LanguageSwitcher 
                currentLanguage={language} 
                onLanguageChange={handleLanguageChange} 
              />
              <Link to={createPageUrl("Waitlist")}>
                <Button className="group bg-white/10 backdrop-blur-lg border border-cyan-400/30 text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg px-6 py-3">
                  {t.nav.joinWaitlist}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.header>

        <main className="pt-24 md:pt-28 flex-grow">
          {children}
        </main>
        
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

