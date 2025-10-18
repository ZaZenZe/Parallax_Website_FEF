import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
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
            <About />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
