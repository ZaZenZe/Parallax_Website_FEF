import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero.tsx';
import Facts from './components/Facts.tsx';
import Spotlight from './components/Spotlight.tsx';
import Gallery from './components/Gallery.tsx';
import Footer from './components/Footer.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import './App.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Hero />
          <main className="app__main">
            <Facts />
            <Spotlight />
            <Gallery />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
