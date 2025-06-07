'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top bg-cnx-green text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-cnx-dark-green transition-colors fixed bottom-24 right-8 z-50"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}