export default function TagsSection() {
  const tags = [
    '#GestionPaie',
    '#ConformitéLégale',
    '#AutomatisationPaie',
    '#TransformationDigitale',
    '#SécuritéDesDonnées',
    '#PilotageDeLaPaie',
    '#SystèmePaieIntégré',
    '#EngagementCollaborateurs',
    '#ReportingPaie'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Mots-clés</h2>
          <p className="text-gray-600 mt-2">Découvrez nos domaines d'expertise</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-shadow border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}