
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { LanguageContext } from './LanguageContext';

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      tagline: "La révolution de l'affichage intelligent commence ici.",
      description: "AllSign transforme vos écrans en outils de communication ultra-intelligents grâce à l'IA.",
      quickLinks: {
        title: "Liens rapides",
        links: [
          { name: "Accueil", path: "Home" },
          { name: "Fonctionnalités", path: "Fonctionnalites" },
          { name: "Tarifs", path: "Tarifs" },
          { name: "Blog", path: "Blog" },
          { name: "À propos", path: "About" }
        ]
      },
      product: {
        title: "Produit",
        links: [
          { name: "Démonstration", path: "Demo" },
          { name: "Liste d'attente", path: "Waitlist" },
          { name: "Cas d'usage", path: "Blog" },
          { name: "Intégrations", path: "Blog" },
          { name: "API", href: "#" }
        ]
      },
      support: {
        title: "Support",
        links: [
          { name: "Centre d'aide", href: "#" },
          { name: "Documentation", href: "#" },
          { name: "Contact", path: "Contact" },
          { name: "Status", href: "#" },
          { name: "Communauté", href: "#" }
        ]
      },
      legal: {
        title: "Légal",
        links: [
          { name: "Mentions légales", href: "#" },
          { name: "Politique de confidentialité", href: "#" },
          { name: "Conditions d'utilisation", href: "#" },
          { name: "Cookies", href: "#" }
        ]
      },
      contact: {
        title: "Contact",
        details: [
          {
            icon: Mail,
            text: "contact@allsign.app",
            href: "mailto:contact@allsign.app"
          },
          {
            icon: Phone,
            text: "+33 1 23 45 67 89",
            href: "tel:+33123456789"
          },
          {
            icon: MapPin,
            text: "123 Avenue des Innovations\n75000 Paris, France"
          }
        ]
      },
      social: {
        title: "Suivez-nous",
        links: [
          { name: "Twitter", icon: Twitter, href: "https://twitter.com/allsign" },
          { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/allsign" },
          { name: "GitHub", icon: Github, href: "https://github.com/allsign" }
        ]
      },
      newsletter: {
        title: "Newsletter",
        description: "Restez informé des dernières nouveautés et conseils.",
        placeholder: "Votre email",
        button: "S'abonner"
      },
      copyright: "Tous droits réservés.",
      madeWith: "Fait avec ❤️ à Paris"
    },
    en: {
      tagline: "The smart signage revolution starts here.",
      description: "AllSign transforms your screens into ultra-intelligent communication tools powered by AI.",
      quickLinks: {
        title: "Quick Links",
        links: [
          { name: "Home", path: "Home" },
          { name: "Features", path: "Fonctionnalites" },
          { name: "Pricing", path: "Tarifs" },
          { name: "Blog", path: "Blog" },
          { name: "About", path: "About" }
        ]
      },
      product: {
        title: "Product",
        links: [
          { name: "Demo", path: "Demo" },
          { name: "Waitlist", path: "Waitlist" },
          { name: "Use Cases", path: "Blog" },
          { name: "Integrations", path: "Blog" },
          { name: "API", href: "#" }
        ]
      },
      support: {
        title: "Support",
        links: [
          { name: "Help Center", href: "#" },
          { name: "Documentation", href: "#" },
          { name: "Contact", path: "Contact" },
          { name: "Status", href: "#" },
          { name: "Community", href: "#" }
        ]
      },
      legal: {
        title: "Legal",
        links: [
          { name: "Legal Notice", href: "#" },
          { name: "Privacy Policy", href: "#" },
          { name: "Terms of Service", href: "#" },
          { name: "Cookies", href: "#" }
        ]
      },
      contact: {
        title: "Contact",
        details: [
          {
            icon: Mail,
            text: "contact@allsign.app",
            href: "mailto:contact@allsign.app"
          },
          {
            icon: Phone,
            text: "+1 (555) 123-4567",
            href: "tel:+15551234567"
          },
          {
            icon: MapPin,
            text: "123 Innovation Drive\nSan Francisco, CA 94105, USA"
          }
        ]
      },
      social: {
        title: "Follow Us",
        links: [
          { name: "Twitter", icon: Twitter, href: "https://twitter.com/allsign" },
          { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/allsign" },
          { name: "GitHub", icon: Github, href: "https://github.com/allsign" }
        ]
      },
      newsletter: {
        title: "Newsletter",
        description: "Stay updated with the latest news and tips.",
        placeholder: "Your email",
        button: "Subscribe"
      },
      copyright: "All rights reserved.",
      madeWith: "Made with ❤️ in San Francisco"
    }
  };

  const t = content[language] || content.en;

  return (
    <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50 mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to={createPageUrl("Home")} className="inline-block mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/67fcbacf1_Green_Modern_Marketing_Logo__4_-removebg-preview.png" 
                alt="AllSign Logo" 
                className="h-10"
              />
            </Link>
            <p className="text-slate-400 mb-4 text-lg font-medium">
              {t.tagline}
            </p>
            <p className="text-slate-500 mb-6 leading-relaxed">
              {t.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {t.social.links.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/60 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white mb-4">{t.quickLinks.title}</h3>
                <ul className="space-y-3">
                  {t.quickLinks.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={createPageUrl(link.path)}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-bold text-white mb-4">{t.product.title}</h3>
                <ul className="space-y-3">
                  {t.product.links.map((link, index) => (
                    <li key={index}>
                      {link.path ? (
                        <Link 
                          to={createPageUrl(link.path)}
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a 
                          href={link.href}
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-bold text-white mb-4">{t.support.title}</h3>
                <ul className="space-y-3">
                  {t.support.links.map((link, index) => (
                    <li key={index}>
                      {link.path ? (
                        <Link 
                          to={createPageUrl(link.path)}
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a 
                          href={link.href}
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold text-white mb-4">{t.legal.title}</h3>
                <ul className="space-y-3">
                  {t.legal.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-800/50">
          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-white mb-6">{t.contact.title}</h3>
            <div className="space-y-4">
              {t.contact.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <detail.icon className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  {detail.href ? (
                    <a 
                      href={detail.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {detail.text}
                    </a>
                  ) : (
                    <span className="text-slate-400 whitespace-pre-line">
                      {detail.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-4">{t.newsletter.title}</h3>
            <p className="text-slate-400 mb-6">
              {t.newsletter.description}
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-medium rounded-xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-300">
                {t.newsletter.button}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-slate-800/50 text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} AllSign. {t.copyright}
          </p>
          <p className="mt-4 md:mt-0">
            {t.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
