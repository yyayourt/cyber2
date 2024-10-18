import React from 'react';
import { Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const mediaItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Tournoi e-sport' },
    { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Meilleurs moments' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Setup gaming' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Équipe e-sport' },
  ];

  return (
    <section id="galerie" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Galerie Multimédia</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-xl">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
              ) : (
                <div className="relative pt-56.25%">
                  <iframe
                    src={item.src}
                    title={item.title}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white w-16 h-16" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;