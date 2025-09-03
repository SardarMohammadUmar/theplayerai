import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { WaitlistSubscriber } from '@/api/entities';
import { CheckCircle, Sparkles, Users, Zap, Shield, Calendar } from 'lucide-react';
import { LanguageContext } from './LanguageContext';

export default function WaitlistForm() {
  const { language, t } = useContext(LanguageContext);

  if (!t.waitlist) {
    return null;
  }
  
  const translations = t.waitlist;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    screensCount: '',
    interests: [],
    language: language
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interestIcons = {
    'ai-content': Sparkles,
    'multi-screen': Users,
    'scheduling': Calendar,
    'analytics': Zap,
    'integrations': Shield
  };
  
  const interestOptions = translations.interestOptions.map(opt => ({...opt, icon: interestIcons[opt.value]}));

  const handleInterestChange = (value, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(interest => interest !== value)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await WaitlistSubscriber.create({...formData, language: language});
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  React.useEffect(() => {
    setFormData(prev => ({...prev, language: language}));
  }, [language]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{translations.form.successMessage}</h3>
      </motion.div>
    );
  }

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                  {translations.title}
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-6">{translations.subtitle}</p>
              <p className="text-slate-400">{translations.description}</p>
            </div>

            <div className="space-y-4">
              {translations.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder={translations.form.firstName}
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="bg-slate-800 border-slate-600 text-white"
                  required
                />
                <Input
                  placeholder={translations.form.lastName}
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="bg-slate-800 border-slate-600 text-white"
                  required
                />
              </div>

              <Input
                type="email"
                placeholder={translations.form.email}
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-slate-800 border-slate-600 text-white"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder={translations.form.company}
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="bg-slate-800 border-slate-600 text-white"
                  required
                />
                <Input
                  placeholder={translations.form.role}
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>

              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, screensCount: value }))}>
                <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                  <SelectValue placeholder={translations.form.screensCount} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="6-20">6-20</SelectItem>
                  <SelectItem value="21-50">21-50</SelectItem>
                  <SelectItem value="50+">50+</SelectItem>
                </SelectContent>
              </Select>

              <div>
                <label className="text-sm font-medium text-slate-300 mb-4 block">
                  {translations.form.interests}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.value}
                        onCheckedChange={(checked) => handleInterestChange(option.value, checked)}
                        className="border-slate-600"
                      />
                      <label
                        htmlFor={option.value}
                        className="text-sm text-slate-300 cursor-pointer flex items-center gap-2"
                      >
                        <option.icon className="w-4 h-4" />
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-bold py-3 text-lg"
              >
                {isLoading ? translations.form.sending : translations.form.submitButton}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}