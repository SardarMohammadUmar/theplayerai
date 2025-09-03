import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronRight, Wand2, Monitor, ListVideo, Calendar, Grid3X3 } from 'lucide-react';
import { LanguageContext } from './LanguageContext';

export default function FeatureSubNav({ currentFeature }) {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  const content = {
    fr: {
      breadcrumb: 'Fonctionnalités',
      features: [
        { name: 'Génération IA', path: 'FeatureAI', icon: Wand2 },
        { name: 'Gestion Écrans', path: 'FeatureScreens', icon: Monitor },
        { name: 'Playlists', path: 'FeaturePlaylists', icon: ListVideo },
        { name: 'Synchronisation', path: 'FeatureAgenda', icon: Calendar },
        { name: 'Applications', path: 'FeatureApps', icon: Grid3X3 }
      ]
    },
    en: {
      breadcrumb: 'Features',
      features: [
        { name: 'AI Generation', path: 'FeatureAI', icon: Wand2 },
        { name: 'Screen Management', path: 'FeatureScreens', icon: Monitor },
        { name: 'Playlists', path: 'FeaturePlaylists', icon: ListVideo },
        { name: 'Calendar Sync', path: 'FeatureAgenda', icon: Calendar },
        { name: 'Apps', path: 'FeatureApps', icon: Grid3X3 }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/50 sticky top-24 z-30">
      <div className="container mx-auto px-6 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link 
            to={createPageUrl("Home")} 
            className="hover:text-cyan-400 transition-colors"
          >
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link 
            to={createPageUrl("Fonctionnalites")} 
            className="hover:text-cyan-400 transition-colors"
          >
            {t.breadcrumb}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-cyan-400">{currentFeature}</span>
        </div>

        {/* Feature Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {t.features.map((feature, index) => {
            const isActive = location.pathname.includes(feature.path);
            const IconComponent = feature.icon;
            
            return (
              <Link
                key={index}
                to={createPageUrl(feature.path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400 text-black font-medium'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{feature.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}