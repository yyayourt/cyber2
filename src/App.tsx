import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import News from './components/News';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Profile />
      <News />
      <Gallery />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;