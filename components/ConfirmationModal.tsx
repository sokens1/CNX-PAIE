interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: { date: string; time: string };
}

export default function ConfirmationModal({ isOpen, onClose, details }: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-md">
        <div className="gradient-bg text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Réservation confirmée</h3>
            <button onClick={onClose} className="focus:outline-none">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto bg-[#6c1010]/20 rounded-full flex items-center justify-center mb-6">
            <i className="fas fa-check-circle text-green-600 text-3xl"></i>
          </div>
          <h4 className="text-xl font-bold mb-2">Merci pour votre demande</h4>
          <p className="text-gray-600 mb-6">
            Votre démonstration a été programmée avec succès. Un e-mail de confirmation vous a été envoyé.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg text-left mb-6">
            <p className="font-medium mb-1">Détails de la réservation :</p>
            <p className="text-gray-600">
              <span className="font-medium">Date :</span> <span>{details.date}</span>
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Heure :</span> <span>{details.time}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#6c1010] text-white rounded-md hover:bg-[#6c1010]/90"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}