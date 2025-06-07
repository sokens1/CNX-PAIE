import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'La Paie Simplifiée, Sécurisée et Stratégique par CNX 4.0',
  description: 'Optimisez vos processus de paie en toute sécurité grâce à une plateforme robuste, évolutive et conçue pour s\'adapter à vos obligations réglementaires comme à vos enjeux opérationnels.',
  keywords: 'gestion paie, conformité légale, automatisation paie, transformation digitale, sécurité données, pilotage paie',
  authors: [{ name: 'CNX 4.0' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/img/logo.jpeg" />
        <link 
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" 
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script 
          src="https://cdn.jsdelivr.net/npm/flatpickr" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://npmcdn.com/flatpickr/dist/l10n/fr.js" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}