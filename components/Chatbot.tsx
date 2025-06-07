'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Bonjour ! Je suis votre assistant virtuel CNX PAIE. 👋\nComment puis-je vous aider aujourd\'hui ?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const keywords = {
    greetings: {
      patterns: ['bonjour', 'salut', 'bonsoir', 'hello', 'hey'],
      responses: [
        'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
        'Salut ! Ravi de vous accueillir. Que puis-je faire pour vous ?',
        'Bonjour ! Je suis là pour répondre à vos questions sur CNX MCH.'
      ]
    },
    farewell: {
      patterns: ['au revoir', 'bye', 'à bientôt', 'merci', 'bonne journée'],
      responses: [
        'Au revoir ! N\'hésitez pas à revenir si vous avez d\'autres questions.',
        'Merci de votre visite ! Passez une excellente journée.',
        'À bientôt ! Je reste disponible pour toute autre question.'
      ]
    },
    product: {
      patterns: ['fonctionnalités', 'features', 'produit', 'solution', 'logiciel', 'outil', 'système', 'plateforme', 'application', 'app'],
      responses: [
        'CNX Paie est la solution complète pour une paie fiable et sécurisée qui comprend :\n• Précision & Maîtrise\n• Contrôle & Visibilité\n• Conformité & Sérénité\n• Sécurité & Confiance\n• Souplesse & Adaptabilité\n\nQuel aspect vous intéresse le plus ?',
        'Notre solution s\'adapte à tous les secteurs d\'activité. Voulez-vous en savoir plus sur une fonctionnalité particulière ?'
      ]
    },
    pricing: {
      patterns: ['prix', 'tarif', 'coût', 'budget', 'devis', 'combien', 'investissement', 'package', 'offre'],
      responses: [
        'Nos tarifs sont personnalisés selon vos besoins. Souhaitez-vous être contacté par notre équipe commerciale ?',
        'Le prix dépend de plusieurs facteurs (nombre d\'utilisateurs, modules souhaités...). Je peux vous mettre en relation avec un conseiller.'
      ]
    },
    demo: {
      patterns: ['démonstration', 'demo', 'essai', 'test', 'voir', 'présentation', 'découvrir', 'tester'],
      responses: [
        'Je peux organiser une démonstration personnalisée avec l\'un de nos experts. Quel serait le meilleur moment pour vous ?',
        'Excellent choix ! Une démo est le meilleur moyen de découvrir CNX MCH. Souhaitez-vous être contacté pour planifier une session ?'
      ]
    }
  };

  const findKeywordMatch = (message: string) => {
    const normalizedMessage = message.toLowerCase();

    for (const [category, data] of Object.entries(keywords)) {
      for (const pattern of data.patterns) {
        if (normalizedMessage.includes(pattern)) {
          return {
            category,
            response: data.responses[Math.floor(Math.random() * data.responses.length)]
          };
        }
      }
    }
    return null;
  };

  const handleQuickAction = (action: string) => {
    const responses = {
      features: keywords.product.responses[0],
      demo: keywords.demo.responses[0],
      pricing: keywords.pricing.responses[0]
    };

    setMessages(prev => [...prev, { type: 'bot', content: responses[action as keyof typeof responses] }]);
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');

    // Find keyword match and respond accordingly
    const match = findKeywordMatch(userMessage);
    setTimeout(() => {
      if (match) {
        setMessages(prev => [...prev, { type: 'bot', content: match.response }]);
      } else {
        // Default response if no keyword match
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'Je comprends votre intérêt. Pour mieux vous répondre, souhaitez-vous :\n• En savoir plus sur nos fonctionnalités ?\n• Obtenir une démonstration ?\n• Discuter avec un conseiller ?\n\nVous pouvez aussi nous appeler directement au +241 076402886.'
        }]);
      }
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-bubble bg-cnx-green shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-comments text-white text-xl"></i>
      </div>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl max-h-[460px] flex flex-col">
          {/* Header */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-semibold text-gray-800">CNX PAIE Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Chat Messages Container */}
          <div className="p-3 overflow-y-auto space-y-3 flex-grow" style={{ maxHeight: '250px' }}>
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start ${message.type === 'user' ? 'justify-end' : ''}`}>
                {message.type === 'bot' && (
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cnx-green flex items-center justify-center">
                      <i className="fas fa-robot text-white text-xs"></i>
                    </div>
                  </div>
                )}
                <div className={`${message.type === 'user' ? 'bg-cnx-green text-white' : 'bg-gray-100 text-gray-800'} rounded-lg p-2 ${message.type === 'bot' ? 'ml-2' : ''} max-w-[85%]`}>
                  <p className="text-xs leading-snug whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-2 border-t border-gray-200 space-y-1">
            <button 
              onClick={() => handleQuickAction('features')}
              className="w-full text-left p-1.5 rounded hover:bg-gray-100 transition-colors text-sm"
            >
              <i className="fas fa-list-ul mr-2 text-cnx-green"></i> Fonctionnalités CNX PAIE
            </button>
            <button 
              onClick={() => handleQuickAction('demo')}
              className="w-full text-left p-1.5 rounded hover:bg-gray-100 transition-colors text-sm"
            >
              <i className="fas fa-desktop mr-2 text-cnx-green"></i> Demander une démo
            </button>
            <button 
              onClick={() => handleQuickAction('pricing')}
              className="w-full text-left p-1.5 rounded hover:bg-gray-100 transition-colors text-sm"
            >
              <i className="fas fa-tag mr-2 text-cnx-green"></i> Tarifs
            </button>
            <a href="tel:+24176402886"
              className="block w-full text-left p-1.5 rounded hover:bg-gray-100 transition-colors text-sm">
              <i className="fas fa-phone mr-2 text-cnx-green"></i> Appeler (+241 076402886)
            </a>
          </div>

          {/* Message Input */}
          <div className="p-2 border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écrivez votre message..."
                className="flex-1 p-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-cnx-green"
              />
              <button 
                onClick={sendMessage}
                className="px-3 py-1.5 bg-cnx-green text-white rounded-lg hover:bg-cnx-dark-green transition-colors"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}