import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Contactez-moi</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Informations de Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-neon-blue mr-4" />
                <span>contact@cybergamerpro.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-neon-purple mr-4" />
                <span>+225 01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-neon-red mr-4" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Nom</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;