export default function BeneficesSection() {
  const benefices = [
    {
      icon: 'fas fa-user',
      title: 'Pour les employés',
      items: [
        'Accès direct aux bulletins et informations salariales',
        'Transparence sur les éléments de rémunération',
        'Consultation facilitée des historiques de paie',
        'Démarches administratives simplifiées',
        'Sécurité des données personnelles garanties'
      ]
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Pour les managers',
      items: [
        'Suivi fiable des effectifs et des coûts salariaux',
        'Accès centralisé aux éléments de paie des équipes',
        'Meilleure coordination avec les services RH et finance',
        'Visibilité sur les cycles de paie et les échéances',
        'Gain de temps sur les validations et remontées d\'informations'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Pour la fonction RH',
      items: [
        'Gestion centralisée et conforme des données de paie',
        'Réduction des risques d\'erreurs et des tâches manuelles',
        'Traçabilité complète des opérations sensibles',
        'Interopérabilité avec les autres modules RH',
        'Pilotage optimisé des campagnes de paie'
      ]
    }
  ];

  return (
    <section id="benefices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Les bénéfices clés de CNX PAIE</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Notre solution apporte une valeur ajoutée significative à chaque niveau de
            l'organisation, de l'employé aux dirigeants.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {benefices.map((benefice, index) => (
            <div key={index} className="text-center p-4 rounded bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#6c1010]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${benefice.icon} text-2xl md:text-3xl cnx-green`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{benefice.title}</h3>
              <div className="space-y-4">
                {benefice.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-left">
                    <i className="fas fa-check-circle cnx-green mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}