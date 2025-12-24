import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Process from './components/Process';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-champagne-200 selection:text-slate-900">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;