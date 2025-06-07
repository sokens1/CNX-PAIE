'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    // Reset after animation
    setTimeout(() => setActiveLink(''), 300);
  };

  return (
    <footer className="bg-gray-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="#" className="inline-block mb-1">
              <h2 className="text-4xl font-bold">
                <span className="text-gray-500">CNX </span>
                <span className="text-green-500">4</span>
                <span className="text-gray-500">.0</span>
              </h2>
            </Link>
            <div className="space-y-2">
              <p className="text-gray-600">Votre spécialiste en architecture d'affaires.</p>
              <p className="text-gray-600">CNX 4.0 accompagne les entreprises dans leur transformation pour
                atteindre l'excellence opérationnelle.</p>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('gch')}
                  className={`transition-colors text-gray-700 hover:text-[#6c1010] ${
                    activeLink === 'gch' ? 'text-[#6c1010]' : ''
                  }`}
                >
                  <span>CNX Gestion Capital Humain</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('paie')}
                  className={`transition-colors text-gray-700 hover:text-[#6c1010] ${
                    activeLink === 'paie' ? 'text-[#6c1010]' : ''
                  }`}
                >
                  <span>CNX Paie</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className={`transition-colors text-gray-700 hover:text-[#6c1010] ${
                    activeLink === 'services' ? 'text-[#6c1010]' : ''
                  }`}
                >
                  <span>Nos services</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Localisation */}
          <div className="lg:pl-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Localisation</h4>
            <div className="text-gray-600">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <p className="leading-relaxed">Ancienne Sobraga, Immeuble La Vénézienne, Rez de Chaussée, Porte
                  Gauche Libreville, GA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Copyright et liens légaux */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">&copy; 2025 CNX 4.0. Tous droits réservés.</p>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => handleLinkClick('mentions')}
              className={`text-sm text-gray-600 hover:text-[#6c1010] transition-colors ${
                activeLink === 'mentions' ? 'text-[#6c1010]' : ''
              }`}
            >
              Mentions Légales
            </button>
            <button 
              onClick={() => handleLinkClick('confidentialite')}
              className={`text-sm text-gray-600 hover:text-[#6c1010] transition-colors ${
                activeLink === 'confidentialite' ? 'text-[#6c1010]' : ''
              }`}
            >
              Politique de Confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}