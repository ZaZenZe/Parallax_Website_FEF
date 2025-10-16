import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Works from './components/Works.tsx';
import Gallery from './components/Gallery.tsx';
import Footer from './components/Footer.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import './App.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main className="app__main">
            <Hero />
            <About />
            <Works />
            <Gallery />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
