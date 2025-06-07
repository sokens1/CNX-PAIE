'use client';

import { useState } from 'react';

interface CTASectionProps {
  onDemoClick: () => void;
}

export default function CTASection({ onDemoClick }: CTASectionProps) {
  const [email, setEmail] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@cnx4-0.com?subject=Contact depuis le site web&body=Mon email : ${email}`;
    window.location.href = mailtoLink;
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 bg-cnx-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Prêt à professionnaliser et fluidifier votre processus de paie ?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Le CNX PAIE accompagne l'évolution de votre entreprise en positionnant la gestion de la paie comme un
          pilier de fiabilité et de performance.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center mt-12">
          <button 
            onClick={onDemoClick}
            className="bg-white text-[#6c1010] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            <i className="fas fa-calendar mr-2"></i>Demander une démo
          </button>

          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contactez-nous</h3>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <a href="tel:+241076402886"
                className="transition-colors text-gray-700 hover:text-[#6c1010]">
                <i className="fas fa-phone text-[#6c1010] mr-1"></i>
                <span>+241 076402886</span>
              </a>
              <a href="mailto:support@cnx4-0.com"
                className="transition-colors text-gray-700 hover:text-[#6c1010] ">
                <i className="fas fa-envelope text-[#6c1010] mr-2"></i>
                <span>Nous écrire</span>
              </a>
            </div>

            <form onSubmit={sendEmail} className="mt-4">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6c1010] focus:ring-1 focus:ring-[#6c1010] text-sm"
                  placeholder="Votre email pour être recontacté"
                />
                <button 
                  type="submit"
                  className="bg-[#6c1010] hover:bg-[#6c1010] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}