import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.05 : 1 }}
    whileHover={{ scale: plan.popular ? 1.08 : 1.03, y: -5 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    className={`relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
      plan.popular 
        ? 'bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border-cyan-400/60 shadow-xl shadow-cyan-500/20' 
        : plan.free
        ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-400/50'
        : 'bg-slate-900/50 border-slate-700/50 hover:border-cyan-400/30'
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-400 to-teal-400 text-black text-xs font-bold rounded-full">
          <Star className="w-3 h-3" />
          Le plus populaire
        </div>
      </div>
    )}

    {plan.free && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-black text-xs font-bold rounded-full">
          Plan actuel
        </div>
      </div>
    )}

    <div className="text-center mb-6">
      <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
        plan.popular ? 'bg-gradient-to-r from-cyan-400 to-teal-400' :
        plan.free ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
        'bg-gradient-to-r from-slate-600 to-slate-700'
      }`}>
        {plan.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-sm text-slate-400 mb-4">{plan.description}</p>
      <div className="flex items-baseline justify-center mb-4">
        <span className={`text-3xl font-black ${plan.popular ? 'text-cyan-400' : plan.free ? 'text-green-400' : 'text-white'}`}>
          {plan.price}
        </span>
        <span className="text-slate-400 ml-1">{plan.period}</span>
      </div>
    </div>

    <div className="space-y-3 mb-6">
      {plan.features.map((feature, featureIndex) => (
        <div key={featureIndex} className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
            plan.popular ? 'bg-cyan-400/20' : plan.free ? 'bg-green-400/20' : 'bg-slate-600/20'
          }`}>
            <Check className={`w-3 h-3 ${plan.popular ? 'text-cyan-400' : plan.free ? 'text-green-400' : 'text-slate-400'}`} />
          </div>
          <span className="text-sm text-slate-300">{feature}</span>
        </div>
      ))}
    </div>

    <Button 
      className={`w-full py-2 font-semibold transition-all duration-300 ${
        plan.popular
          ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-500 hover:to-teal-500'
          : plan.free
          ? 'bg-slate-700 text-white hover:bg-slate-600 cursor-default'
          : plan.enterprise
          ? 'bg-slate-800 text-white border border-slate-600 hover:bg-slate-700'
          : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:from-cyan-600 hover:to-teal-600'
      }`}
      disabled={plan.free}
    >
      {plan.buttonText}
    </Button>
  </motion.div>
);

export default function PricingPreview() {
  const { t, language } = useContext(LanguageContext);
  
  const plans = [
    {
      name: 'Plan Gratuit',
      price: 'Gratuit',
      period: '',
      description: 'Idéal pour débuter',
      free: true,
      icon: <Crown className="w-6 h-6 text-black" />,
      features: [
        '2 écrans maximum',
        '10 générations IA/mois',
        '1 GB de stockage',
        '3 playlists',
        'Support de base',
        'Templates de base'
      ],
      buttonText: 'Plan actuel'
    },
    {
      name: 'Plan Starter',
      price: '19.99€',
      period: '/mois',
      description: 'Idéal pour les petites entreprises',
      popular: true,
      icon: <Star className="w-6 h-6 text-black" />,
      features: [
        '10 écrans maximum',
        '100 générations IA/mois',
        '10 GB de stockage',
        '20 playlists',
        'Support prioritaire',
        'Templates premium',
        'Analytics de base'
      ],
      buttonText: 'Commencer'
    },
    {
      name: 'Plan Professionnel',
      price: '49.99€',
      period: '/mois',
      description: 'Pour les entreprises en croissance',
      icon: <Crown className="w-6 h-6 text-white" />,
      features: [
        '50 écrans maximum',
        '500 générations IA/mois',
        '50 GB de stockage',
        '100 playlists',
        'Support prioritaire',
        'Templates premium',
        'Analytics avancés',
        'Branding personnalisé'
      ],
      buttonText: 'Mettre à niveau'
    },
    {
      name: 'Plan Enterprise',
      price: '99.99€',
      period: '/mois',
      description: 'Solution complète pour les grandes entreprises',
      enterprise: true,
      icon: <Crown className="w-6 h-6 text-white" />,
      features: [
        'Écrans illimités',
        'Générations IA illimitées',
        '500 GB de stockage',
        'Playlists illimitées',
        'Support dédié',
        'Templates premium',
        'Analytics avancés',
        'Branding personnalisé',
        'Accès API'
      ],
      buttonText: 'Contacter-nous'
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              Choisissez votre formule
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Sélectionnez le plan qui correspond parfaitement à vos besoins. Passez à un plan supérieur à tout moment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}