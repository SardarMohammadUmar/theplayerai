import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PricingPreview from '../components/home/PricingPreview';
import FinalCTA from '../components/home/FinalCTA';
import { Check, X, ChevronDown } from 'lucide-react';
import { LanguageContext } from '../components/LanguageContext';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '16px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px' },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function TarifsPage() {
  const { t } = useContext(LanguageContext);
  
  if (!t.pricingPage) {
    return null;
  }
  
  const { title, titleHighlight, subtitle, comparisonTitle, featureHeader, plans, features, faqTitle, faqs } = t.pricingPage;

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-20 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
            {title}{' '}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            {titleHighlight}
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      <PricingPreview />

      <div className="py-24 sm:py-32 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {comparisonTitle}
        </h2>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="p-4 text-lg font-bold text-white w-2/5">{featureHeader}</th>
                <th className="p-4 text-lg font-bold text-white text-center">{plans[0]}</th>
                <th className="p-4 text-lg font-bold text-cyan-400 text-center">{plans[1]}</th>
                <th className="p-4 text-lg font-bold text-white text-center">{plans[2]}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-b border-slate-800">
                  <td className="p-4 font-medium text-slate-300">{item.feature}</td>
                  <td className="p-4 text-center text-slate-400">{typeof item.starter === 'boolean' ? (item.starter ? <Check className="text-green-400 mx-auto" /> : <X className="text-red-400 mx-auto" />) : item.starter}</td>
                  <td className="p-4 text-center font-bold text-cyan-400 bg-cyan-900/10">{typeof item.pro === 'boolean' ? (item.pro ? <Check className="text-green-400 mx-auto" /> : <X className="text-red-400 mx-auto" />) : item.pro}</td>
                  <td className="p-4 text-center text-slate-400">{typeof item.enterprise === 'boolean' ? (item.enterprise ? <Check className="text-green-400 mx-auto" /> : <X className="text-red-400 mx-auto" />) : item.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pb-24 sm:pb-32 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">{faqTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.q}
              answer={faq.a}
            />
          ))}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}