import React from 'react';
import { Calendar } from 'lucide-react';

const News: React.FC = () => {
  const events = [
    { date: '2023-06-15', title: 'Tournoi National de Fortnite', description: 'Participez au plus grand tournoi de Fortnite en Côte d\'Ivoire' },
    { date: '2023-07-01', title: 'Streaming Marathon', description: '24 heures de streaming non-stop pour une œuvre caritative' },
    { date: '2023-08-20', title: 'Championnat Africain de LoL', description: 'Représentation de la Côte d\'Ivoire au championnat continental' },
  ];

  return (
    <section id="actualites" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Actualités et Événements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-6 hover:bg-gray-700 transition duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="text-neon-blue mr-2" />
                <span className="text-sm text-gray-400">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;