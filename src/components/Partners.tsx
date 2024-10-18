import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'TechGaming', logo: 'https://via.placeholder.com/150?text=TechGaming' },
    { name: 'E-Sports Pro', logo: 'https://via.placeholder.com/150?text=E-Sports+Pro' },
    { name: 'GameFuel', logo: 'https://via.placeholder.com/150?text=GameFuel' },
    { name: 'StreamMaster', logo: 'https://via.placeholder.com/150?text=StreamMaster' },
  ];

  return (
    <section id="partenaires" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Partenaires et Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Devenez Partenaire</h3>
          <p className="mb-6">Intéressé par un partenariat ? Contactez-nous pour discuter des opportunités de collaboration.</p>
          <a href="#contact" className="btn btn-secondary">Devenir Partenaire</a>
        </div>
      </div>
    </section>
  );
};

export default Partners;