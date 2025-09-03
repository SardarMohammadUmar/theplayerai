
import React, { useContext } from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import AIShowcase from "../components/home/AIShowcase";
import IntegrationsSection from "../components/home/IntegrationsSection";
import DeviceCompatibility from "../components/home/DeviceCompatibility";
import Testimonials from "../components/home/Testimonials";
import { LanguageContext } from "../components/LanguageContext";
import FinalCTA from "../components/home/FinalCTA";
import AppStores from "../components/home/AppStores"; // Added import for AppStores

export default function HomePage() {
  const { t, language } = useContext(LanguageContext);

  if (!t) return null;

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-teal-800/15"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-800/10 to-teal-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-600/15 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-600/12 via-transparent to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/8 via-teal-500/5 to-transparent blur-3xl"></div>
      </div>
      
      <Hero />
      <Features />
      <AIShowcase />
      <IntegrationsSection />
      <AppStores /> {/* Added AppStores component here */}
      <DeviceCompatibility />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
