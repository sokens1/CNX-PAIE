import Image from 'next/image';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image à gauche */}
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="/img/organisation_mockup.png" 
                alt="Organisation mockup"
                width={600}
                height={400}
                className="w-full rounded-lg mx-auto animate-float"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* Contenu à droite */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Solution de Gestion de Paie</h2>
              <p className="text-lg md:text-xl text-gray-600">
                Une plateforme complète et flexible qui couvre l'ensemble du cycle de traitement de la paie,
                développée pour s'adapter à vos processus internes tout en assurant clarté, fluidité et
                conformité.
              </p>
            </div>

            {/* Solutions de gestion du capital humain */}
            <div className="grid gap-6">
              {/* Traitement & Fiabilité */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#6c1010]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-users text-xl cnx-green"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Traitement & Fiabilité</h3>
                  <p className="text-gray-600 text-sm">Assurez un calcul précis et une gestion fluide de la
                    paie grâce à des processus automatisés et sécurisés.</p>
                </div>
              </div>

              {/* Suivi & Pilotage */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#6c1010]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-chart-line text-xl cnx-green"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Suivi & Pilotage</h3>
                  <p className="text-gray-600 text-sm">Pilotez vos cycles de paie, maîtrisez les coûts
                    salariaux et optimisez la gestion des ressources financières.</p>
                </div>
              </div>

              {/* Conformité & Protection */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#6c1010]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-xl cnx-green"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Conformité & Protection</h3>
                  <p className="text-gray-600 text-sm">Garantissez la conformité réglementaire et la
                    protection des données sensibles liées à la paie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}