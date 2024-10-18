import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center bg-circuit-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-effect" data-text="CyberGamer Pro">
          CyberGamer Pro
        </h1>
        <p className="text-xl md:text-2xl mb-8 neon-text">
          Le meilleur gamer professionnel d'Abidjan
        </p>
        <a href="#profil" className="btn btn-primary inline-flex items-center">
          <Play className="mr-2" />
          Découvrir mon profil
        </a>
      </div>
    </section>
  );
};

export default Hero;