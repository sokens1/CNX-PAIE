'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (details: { date: string; time: string }) => void;
}

export default function DemoModal({ isOpen, onClose, onConfirm }: DemoModalProps) {
  const [formData, setFormData] = useState({
    fullname: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [modules, setModules] = useState({
    'module-calcul-bulletins': false,
    'module-declarations': false,
    'module-dossier-salarie': false,
    'module-suivi-absences': false,
    'module-conformite': false,
    'module-reporting': false
  });

  const timeSlots = ['9:00', '10:30', '14:00', '15:30', '17:00'];

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Initialize flatpickr when modal opens
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/flatpickr';
      script.onload = () => {
        const flatpickr = (window as any).flatpickr;
        if (flatpickr) {
          flatpickr('#demo-date', {
            minDate: 'today',
            dateFormat: 'd/m/Y',
            disable: [
              function(date: Date) {
                return (date.getDay() === 0 || date.getDay() === 6);
              }
            ],
            onChange: function(selectedDates: Date[], dateStr: string) {
              setFormData(prev => ({ ...prev, date: dateStr }));
              setShowTimeSlots(true);
            },
            enableTime: false,
            altInput: true,
            altFormat: 'j F Y',
            monthSelectorType: 'static'
          });
        }
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleModuleChange = (moduleId: string) => {
    setModules(prev => ({ ...prev, [moduleId]: !prev[moduleId as keyof typeof prev] }));
  };

  const handleTimeSlotClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    const newErrors = [];
    if (!formData.fullname) newErrors.push('Nom complet');
    if (!formData.email) newErrors.push('Email professionnel');
    if (!formData.date) newErrors.push('Date souhaitée');
    if (!selectedTime) newErrors.push('Créneau horaire');

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      onConfirm({ date: formData.date, time: selectedTime });
      onClose();
      // Reset form
      setFormData({
        fullname: '',
        company: '',
        email: '',
        phone: '',
        date: '',
        message: ''
      });
      setSelectedTime('');
      setShowTimeSlots(false);
      setModules({
        'module-calcul-bulletins': false,
        'module-declarations': false,
        'module-dossier-salarie': false,
        'module-suivi-absences': false,
        'module-conformite': false,
        'module-reporting': false
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-md md:max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="gradient-bg text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Réserver une démonstration</h3>
            <button onClick={onClose} className="focus:outline-none">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Explorez CNX Paie, la solution conçue pour fiabiliser, structurer et sécuriser votre gestion salariale.
              Sélectionnez un créneau pour une démonstration personnalisée et explorez les fonctionnalités
              clés de notre solution.
            </p>
          </div>

          {errors.length > 0 && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 font-medium mb-2">Veuillez compléter les informations suivantes :</p>
              <ul className="text-red-600 text-sm list-disc list-inside">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email professionnel
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Modules d'intérêt</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="module-calcul-bulletins"
                    checked={modules['module-calcul-bulletins']}
                    onChange={() => handleModuleChange('module-calcul-bulletins')}
                    className="mr-2"
                  />
                  <label htmlFor="module-calcul-bulletins" className="text-sm text-gray-600">
                    Calcul & Bulletins
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="module-declarations"
                    checked={modules['module-declarations']}
                    onChange={() => handleModuleChange('module-declarations')}
                    className="mr-2"
                  />
                  <label htmlFor="module-declarations" className="text-sm text-gray-600">
                    Déclarations Sociales & Fiscales
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="module-dossier-salarie"
                    checked={modules['module-dossier-salarie']}
                    onChange={() => handleModuleChange('module-dossier-salarie')}
                    className="mr-2"
                  />
                  <label htmlFor="module-dossier-salarie" className="text-sm text-gray-600">
                    Dossier salarié & Historique de paie
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="module-suivi-absences"
                    checked={modules['module-suivi-absences']}
                    onChange={() => handleModuleChange('module-suivi-absences')}
                    className="mr-2"
                  />
                  <label htmlFor="module-suivi-absences" className="text-sm text-gray-600">
                    Suivi des absences et éléments variables
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="module-conformite"
                    checked={modules['module-conformite']}
                    onChange={() => handleModuleChange('module-conformite')}
                    className="mr-2"
                  />
                  <label htmlFor="module-conformite" className="text-sm text-gray-600">
                    Conformité & Veille légale
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="module-reporting"
                    checked={modules['module-reporting']}
                    onChange={() => handleModuleChange('module-reporting')}
                    className="mr-2"
                  />
                  <label htmlFor="module-reporting" className="text-sm text-gray-600">
                    Reporting & Tableaux de bord
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="demo-date" className="block text-sm font-medium text-gray-700 mb-1">
                Date et heure souhaitées
              </label>
              <input
                type="text"
                id="demo-date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="Choisir une date"
              />
            </div>

            {showTimeSlots && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Créneaux disponibles</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSlotClick(time)}
                      className={`px-3 py-2 border rounded-md focus:outline-none transition-colors ${
                        selectedTime === time
                          ? 'bg-[#6c1010]/10 border-[#6c1010] text-[#6c1010]'
                          : 'border-gray-300 hover:bg-[#6c1010]/10 hover:border-[#6c1010]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bouton_confirm text-white rounded-md hover:bg-[#6c1010]"
              >
                Confirmer la réservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}