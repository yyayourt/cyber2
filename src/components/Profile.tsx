import React from 'react';
import { Trophy, Target, Zap } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section id="profil" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Profil du Gamer</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CyberGamer Pro" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">CyberGamer Pro</h3>
            <p className="mb-6">Passionné de jeux vidéo depuis mon plus jeune âge, j'ai transformé ma passion en une carrière professionnelle. Basé à Abidjan, je représente fièrement la Côte d'Ivoire dans les compétitions internationales.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Trophy className="text-neon-purple mr-4" />
                <span>Champion national de League of Legends 2022</span>
              </div>
              <div className="flex items-center">
                <Target className="text-neon-blue mr-4" />
                <span>Spécialiste en FPS et MOBA</span>
              </div>
              <div className="flex items-center">
                <Zap className="text-neon-red mr-4" />
                <span>Streamer avec plus de 100K followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;