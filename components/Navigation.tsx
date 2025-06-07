'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationProps {
  onDemoClick: () => void;
}

export default function Navigation({ onDemoClick }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['solution', 'parcours', 'benefices', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                className="w-32" 
                src="/img/logo.jpeg" 
                alt="cnx-logo" 
                width={128} 
                height={64}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('solution')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'solution' 
                    ? 'text-[#6c1010] bg-[#6c1010]/10' 
                    : 'text-gray-700 hover:text-[#6c1010]'
                }`}
              >
                Notre solution PAIE
              </button>
              <button
                onClick={() => scrollToSection('parcours')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'parcours' 
                    ? 'text-[#6c1010] bg-[#6c1010]/10' 
                    : 'text-gray-700 hover:text-[#6c1010]'
                }`}
              >
                Le parcours paie
              </button>
              <button
                onClick={() => scrollToSection('benefices')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'benefices' 
                    ? 'text-[#6c1010] bg-[#6c1010]/10' 
                    : 'text-gray-700 hover:text-[#6c1010]'
                }`}
              >
                Bénéfices clés
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-[#6c1010] bg-[#6c1010]/10' 
                    : 'text-gray-700 hover:text-[#6c1010]'
                }`}
              >
                Contactez-nous
              </button>
              <button
                onClick={onDemoClick}
                className="btn-primary text-white px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                <i className="fas fa-calendar mr-2"></i>Demander une démo
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}