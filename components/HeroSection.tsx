'use client';

import Image from 'next/image';

interface HeroSectionProps {
  onDemoClick: () => void;
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Pilotez la paie</span> autrement
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Optimisez vos processus de paie en toute sécurité grâce à une plateforme robuste,
              évolutive et conçue pour s'adapter à vos obligations réglementaires comme à vos enjeux
              opérationnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button
                onClick={onDemoClick}
                className="border-2 border-[#6c1010] gradient-text px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6c1010]/10 transition-colors"
              >
                <i className="fas fa-calendar mr-2"></i>Demander une démo
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Decorative shapes */}
            <div className="decorative-shape shape-circle"
              style={{ width: '200px', height: '200px', top: '-50px', right: '-10px' }}></div>
            <div className="decorative-shape shape-square"
              style={{ width: '120px', height: '120px', bottom: '20px', left: '-10px' }}></div>
            <div className="decorative-shape shape-line"
              style={{ width: '180px', top: '70%', right: '10%', transform: 'rotate(45deg)' }}></div>

            {/* Image container */}
            <div className="hero-image-container">
              <Image 
                src="/img/groupe_mockup-removebg-preview.png" 
                alt="CNX MCH Interface"
                width={600}
                height={400}
                className="w-full rounded-lg mx-auto animate-float"
                style={{ animation: 'float 6s ease-in-out infinite' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}