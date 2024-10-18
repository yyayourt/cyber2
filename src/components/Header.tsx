import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white neon-text">
            CyberGamer Pro
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#accueil" className="text-gray-300 hover:text-neon-blue transition duration-300">Accueil</a>
            <a href="#profil" className="text-gray-300 hover:text-neon-blue transition duration-300">Profil</a>
            <a href="#actualites" className="text-gray-300 hover:text-neon-blue transition duration-300">Actualités</a>
            <a href="#galerie" className="text-gray-300 hover:text-neon-blue transition duration-300">Galerie</a>
            <a href="#partenaires" className="text-gray-300 hover:text-neon-blue transition duration-300">Partenaires</a>
            <a href="#contact" className="text-gray-300 hover:text-neon-blue transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <a href="#accueil" className="block py-2 text-gray-300 hover:text-neon-blue transition duration-300">Accueil</a>
            <a href="#profil" className="block py-2 text-gray-300 hover:text-neon-blue transition duration-300">Profil</a>
            <a href="#actualites" className="block py-2 text-gray-300 hover:text-neon-blue transition duration-300">Actualités</a>
            <a href="#galerie" className="block py-2 text-gray-300 hover:text-neon-blue transition duration-300">Galerie</a>
            <a href="#partenaires" className="block py-2 text-gray-300 hover:text-neon-blue transition duration-300">Partenaires</a>
            <a href="#contact" className="block py-2 text-gray-300 hover:text-neon-blue transition duration-300">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;