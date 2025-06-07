import Image from 'next/image';

export default function InformationPaieSection() {
  return (
    <section id="information-paie" className="py-20 bg-gradient-to-br from-green-50 via-green-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                CNX RH : L'intelligence au service de la gestion des Ressources Humaines
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Pilotez vos processus RH avec fluidité et sérénité grâce à une solution moderne, pensée pour
                répondre aux exigences réglementaires et organisationnelles. Faites de la gestion des
                ressources humaines un moteur d'agilité et de création de valeur pour votre entreprise.
              </p>
            </div>
            <div className="pt-4">
              <a href="../cnxrh-nextjs/app/page.tsx" className="btn-primary text-white px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-colors duration-300">
                <i className="fas fa-play-circle mr-2"></i>
                Découvrir CNX RH
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-6">
            {/* Cadre vert superposé */}
            {/* <div className="paie-frame"></div> */}
            {/* Image en arrière-plan */}
            <div className="relative w-full max-w-md mx-auto rounded-xl p-4">
              <Image 
                src="/img/var_paie.png" 
                alt="cnx-paie" 
                width={400}
                height={300}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}