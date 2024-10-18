import React from 'react';
import { Facebook, Twitter, Instagram, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold neon-text">CyberGamer Pro</h3>
            <p className="text-sm text-gray-400">© 2023 Tous droits réservés</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Twitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Twitch />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;