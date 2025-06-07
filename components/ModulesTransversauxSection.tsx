'use client';

import { useState } from 'react';

export default function ModulesTransversauxSection() {
  const [activeModule, setActiveModule] = useState('securite');

  const modules = [
    {
      id: 'analyses',
      icon: 'fas fa-chart-bar',
      title: 'Analyses Décisionnelles',
      content: {
        title: 'Analyses Décisionnelles',
        description: 'Des tableaux de bord dynamiques et rapports automatisés pour piloter efficacement vos coûts salariaux et anticiper les évolutions réglementaires.',
        features: [
          'Tableaux de bord en temps réel',
          'Indicateurs financiers et sociaux personnalisables',
          'Rapports automatisés',
          'Analyse prédictive des tendances salariales'
        ],
        benefits: [
          'Prise de décision éclairée',
          'Optimisation des coûts salariaux',
          'Anticipation des évolutions réglementaires',
          'Amélioration du pilotage budgétaire'
        ]
      }
    },
    {
      id: 'risques',
      icon: 'fas fa-shield-alt',
      title: 'Gestion des Risques',
      content: {
        title: 'Gestion des Risques',
        description: 'Détection proactive des anomalies, alertes automatiques et plans d\'action pour garantir la conformité et sécuriser vos cycles de paie.',
        features: [
          'Cartographie des risques paie',
          'Alertes sur anomalies et échéances critiques',
          'Plans d\'action préventifs automatisés',
          'Suivi des incidents et non-conformités'
        ],
        benefits: [
          'Réduction des erreurs et litiges',
          'Conformité réglementaire renforcée',
          'Continuité des cycles de paie',
          'Protection contre les sanctions juridiques'
        ]
      }
    },
    {
      id: 'securite',
      icon: 'fas fa-lock',
      title: 'Sécurité & Confidentialité',
      content: {
        title: 'Sécurité & Confidentialité',
        description: 'Protection avancée des données sensibles avec chiffrement, contrôles d\'accès et audits réguliers, assurant conformité et confiance.',
        features: [
          'Chiffrement des données sensibles',
          'Contrôles d\'accès granulaires et gestion des habilitations',
          'Audit de sécurité complet',
          'Conformité au RGPD et autres normes'
        ],
        benefits: [
          'Sécurisation des données paie',
          'Confiance renforcée des collaborateurs',
          'Respect des obligations légales',
          'Réputation et intégrité préservées'
        ]
      }
    },
    {
      id: 'interfacage',
      icon: 'fas fa-link',
      title: 'Interfaçage Systèmes',
      content: {
        title: 'Interfaçage Systèmes',
        description: 'Intégration fluide avec vos ERP, outils comptables et RH via API robustes, pour une gestion paie sans rupture d\'information.',
        features: [
          'API REST performantes',
          'Connecteurs prêts à l\'emploi (ERP, comptabilité, RH)',
          'Synchronisation temps réel des données',
          'Mapping précis des données paie'
        ],
        benefits: [
          'Élimination des silos d\'information',
          'Données paie unifiées et cohérentes',
          'Gain d\'efficacité opérationnelle',
          'Retour sur investissement maximisé'
        ]
      }
    },
    {
      id: 'conformite',
      icon: 'fas fa-balance-scale',
      title: 'Conformité Légale',
      content: {
        title: 'Conformité Légale',
        description: 'Automatisation des mises à jour réglementaires et contrôles, réduisant les risques juridiques et assurant une paie toujours conforme.',
        features: [
          'Veille légale dédiée à la paie',
          'Mises à jour automatiques des règles fiscales et sociales',
          'Contrôles de conformité intégrés',
          'Documentation et archivage réglementaire'
        ],
        benefits: [
          'Réduction des risques de contentieux',
          'Garantie d\'une paie conforme et sécurisée',
          'Processus simplifiés et fiabilisés',
          'Sérénité pour les équipes paie et direction'
        ]
      }
    }
  ];

  const activeModuleData = modules.find(module => module.id === activeModule);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modules transversaux CNX PAIE</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Des fonctionnalités complémentaires conçues pour renforcer la fiabilité, la sécurité et l'agilité de
            votre gestion de la paie. Une approche intégrée au service de votre performance opérationnelle.
          </p>
        </div>

        <div className="relative">
          {/* Central Circle */}
          <div className="flex justify-center mb-16">
            <div className="central-circle w-32 h-32 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center text-white shadow-2xl">
              <i className="fas fa-users text-2xl md:text-4xl mb-2"></i>
              <h3 className="text-lg md:text-xl font-bold">CNX PAIE</h3>
              <p className="text-xs md:text-sm">Solution Complète</p>
            </div>
          </div>

          {/* Surrounding Modules */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mb-12">
            {modules.map((module) => (
              <div
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`module-circle w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer mx-auto transition-all ${
                  activeModule === module.id ? 'bg-[#6c1010] text-white' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <i className={`${module.icon} text-lg md:text-2xl mb-2 ${activeModule === module.id ? 'text-white' : 'cnx-green'}`}></i>
                <h4 className="text-center text-xs md:text-sm font-semibold px-2">{module.title}</h4>
              </div>
            ))}
          </div>

          {/* Module Description */}
          <div className="max-w-4xl mx-auto">
            {activeModuleData && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold cnx-green mb-4">{activeModuleData.content.title}</h3>
                <p className="text-gray-600 mb-6">{activeModuleData.content.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 cnx-green">Fonctionnalités clés:</h4>
                    <ul className="space-y-3">
                      {activeModuleData.content.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="bg-cnx-green text-white rounded-full flex items-center justify-center w-6 h-6 mr-3 shadow-md">
                            <i className="fas fa-check text-xs"></i>
                          </span>
                          <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 cnx-green">Bénéfices:</h4>
                    <ul className="space-y-3">
                      {activeModuleData.content.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="bg-cnx-green text-white rounded-full flex items-center justify-center w-6 h-6 mr-3 shadow-md">
                            <i className="fas fa-check text-xs"></i>
                          </span>
                          <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}