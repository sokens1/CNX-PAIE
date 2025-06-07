'use client';

import { useState } from 'react';

export default function ParcoursSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: 'fas fa-search',
      title: '1. Configuration',
      content: {
        title: 'PHASE 1 : CONFIGURATION INITIALE & PRÉPARATION EFFICACE',
        items: [
          {
            icon: 'fas fa-bullseye',
            title: 'Paramétrage Adapté à Votre Entreprise',
            description: 'Configuration de votre profil entreprise et de vos règles métier'
          },
          {
            icon: 'fas fa-network-wired',
            title: 'Intégration des référentiels légaux et sociaux',
            description: 'Mise à jour continue des taux, plafonds, barèmes selon la législation en vigueur (adaptable par pays/région).'
          },
          {
            icon: 'fas fa-filter',
            title: 'Collecte Automatisée & Centralisée des Données',
            description: 'Import fluide des données administratives et des absences validées.'
          },
          {
            icon: 'fas fa-calendar-check',
            title: 'Gestion simplifiée des Éléments Variables de Paie (EVP)',
            description: 'Interfaces conviviales pour la saisie ou l\'import en masse des données, avec workflows de validation.'
          }
        ],
        style: { marginTop: '-1.5rem' },
        tags: ['Paramétrage flexible', 'Conformité légale intégrée', 'Interfaces robustes']
      }
    },
    {
      id: 2,
      icon: 'fas fa-handshake',
      title: '2. Calcul',
      content: {
        title: 'PHASE 2 : CALCUL FIABLE & CONTRÔLES INTELLIGENTS',
        items: [
          {
            icon: 'fas fa-clipboard-list',
            title: 'Puissance et Précision du Calcul',
            description: 'Des traitements rapides, des résultats exacts. Garantissez une paie conforme, quel que soit le niveau de complexité.'
          },
          {
            icon: 'fas fa-route',
            title: 'Exécution rapide et automatisée du moteur de paie',
            description: 'Application rigoureuse de toutes les règles pour un calcul exact du brut au net.'
          },
          {
            icon: 'fas fa-users',
            title: 'Simulations illimitées pour anticiper et décider',
            description: 'Évaluez l\'impact de changements (augmentations, primes) avant de finaliser la paie.'
          },
          {
            icon: 'fas fa-graduation-cap',
            title: 'Vérifications Multi-Niveaux & Alertes Proactives',
            description: 'Batterie de contrôles de cohérence automatisés. Détection des anomalies, des écarts significatifs, des erreurs potentielles avant validation.'
          }
        ],
        tags: ['Moteur de calcul éprouvé', 'Outils de simulation', 'Contrôles proactifs']
      }
    },
    {
      id: 3,
      icon: 'fas fa-chart-bar',
      title: '3. Livrables',
      content: {
        title: 'PHASE 3 : GÉNÉRATION DES LIVRABLES & PAIEMENTS FLUIDIFIÉS',
        items: [
          {
            icon: 'fas fa-users-gear',
            title: 'Production de Documents Clairs et Conformes',
            description: 'Des documents fiables, compréhensibles et toujours à jour. Renforcez la transparence auprès des employés et des instances.'
          },
          {
            icon: 'fas fa-ship',
            title: 'Génération automatique des bulletins de paie',
            description: 'Bulletins détaillés, respectant les obligations légales et personnalisables à l\'image de votre entreprise.'
          },
          {
            icon: 'fas fa-chart-line',
            title: 'Éditions comptables prêtes à l\'emploi',
            description: 'Journal de paie, Grand Livre, et export des écritures comptables formaté pour votre système financier.'
          },
          {
            icon: 'fas fa-heart',
            title: 'Exécution Simplifiée des Paiements',
            description: 'Création automatisée des fichiers de virement des salaires. Formats compatibles avec les principales banques pour un traitement rapide.'
          }
        ],
        tags: ['Éditions conformes et personnalisables', 'Automatisation des flux financiers']
      }
    },
    {
      id: 4,
      icon: 'fas fa-arrow-up',
      title: '4. Déclarations',
      content: {
        title: 'PHASE 4 : DÉCLARATIONS LÉGALES SANS STRESS',
        items: [
          {
            icon: 'fas fa-map',
            title: 'Génération Automatisée des Déclarations Sociales et Fiscales',
            description: 'Une gestion simplifiée des déclarations sociales et fiscales. Gagnez en fiabilité, réduisez les risques d\'erreur et sécurisez vos échéances légales.'
          },
          {
            icon: 'fas fa-puzzle-piece',
            title: 'Production des fichiers normalisés pour les organismes collecteurs',
            description: 'Déclarations nominatives (cotisations sociales, impôts sur le revenu) prêtes à être transmises, adaptées à la législation de votre pays.'
          },
          {
            icon: 'fas fa-graduation-cap',
            title: 'Assistance à la télétransmission',
            description: 'Simplification de l\'envoi des déclarations aux portails administratifs.'
          },
          {
            icon: 'fas fa-exchange-alt',
            title: 'Suivi des Échéances et Paiement des Cotisations',
            description: 'Rappels des dates limites de déclaration et de paiement. Système d\'alerte personnalisable pour ne manquer aucune échéance.'
          }
        ],
        tags: ['Conformité garantie', 'Automatisation des déclarations', 'Réduction des risques']
      }
    },
    {
      id: 5,
      icon: 'fas fa-door-open',
      title: '5. Pilotage',
      content: {
        title: 'PHASE 5 : ARCHIVAGE SÉCURISÉ & PILOTAGE ÉCLAIRÉ',
        items: [
          {
            icon: 'fas fa-clock',
            title: 'Conservation Fiable et Conforme des Données',
            description: 'Un environnement de stockage sécurisé pour une gestion sereine de la paie'
          },
          {
            icon: 'fas fa-exchange',
            title: 'Archivage électronique sécurisé de tous les documents et données de paie',
            description: 'Respect des durées légales de conservation, accès facilité pour consultation.'
          },
          {
            icon: 'fas fa-comments',
            title: 'Analyse et Reporting de la Masse Salariale',
            description: 'Tableaux de bord et rapports personnalisables. Suivez l\'évolution de votre masse salariale, analysez les coûts, simulez des impacts budgétaires.'
          },
          {
            icon: 'fas fa-file-alt',
            title: 'Traçabilité Complète pour les Audits',
            description: 'Piste d\'audit détaillée de toutes les opérations. Facilite les contrôles internes et externes.'
          }
        ],
        tags: ['Conformité garantie', 'Automatisation des déclarations', 'Réduction des risques']
      }
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep);

  return (
    <section id="parcours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">La gestion de la paie en action</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment CNX Paie structure, sécurise et fiabilise chaque étape du cycle de paie,
            de la préparation des éléments variables jusqu'à la production conforme des bulletins et déclarations.
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 text-sm">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`step-button px-4 md:px-6 py-3 rounded-full transition-all ${
                activeStep === step.id ? 'active' : ''
              }`}
            >
              <i className={`${step.icon} mr-2`}></i>
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">{step.id}</span>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          {currentStep && (
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {currentStep.content.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {currentStep.content.items.slice(0, Math.ceil(currentStep.content.items.length / 2)).map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#6c1010]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} cnx-green`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  {currentStep.content.items.slice(Math.ceil(currentStep.content.items.length / 2)).map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#6c1010]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} cnx-green`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 cnx-green">Atouts de la Solution Paie CNX 4.0</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStep.content.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[var(--cnx-green)] border border-cnx-green text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}