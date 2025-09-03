import React from 'react';
import { motion } from 'framer-motion';
import WaitlistForm from '../components/WaitlistForm';

export default function WaitlistPage() {
  return (
    <div className="pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
            Rejoignez l'avenir
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            de l'affichage intelligent
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Inscrivez-vous dès maintenant pour bénéficier d'un accès prioritaire et de tarifs exclusifs au lancement d'AllSign.
        </p>
      </motion.div>

      <WaitlistForm />
    </div>
  );
}