import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
    whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.3 } }}
    className="relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
  >
    <div className="absolute top-6 left-6 text-cyan-400/30">
      <Quote className="w-8 h-8" />
    </div>
    
    <div className="relative z-10 pt-6">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-slate-300 leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4">
        <img 
          src={avatars[index]} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-sm text-slate-400">{testimonial.role} • {testimonial.company}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const { t } = useContext(LanguageContext);
  
  if (!t.testimonials) {
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
              {t.testimonials.title1}{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              {t.testimonials.title2}
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {t.testimonials.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-black text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}