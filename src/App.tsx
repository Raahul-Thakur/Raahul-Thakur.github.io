import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Intro } from './components/Intro';
import { Aurora } from './components/layout/Aurora';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { ProjectsIndex } from './pages/ProjectsIndex';
import { ProjectCategory } from './pages/ProjectCategory';
import { Research } from './pages/Research';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

const INTRO_KEY = 'intro-seen';

// Show the intro loader once per browser session.
const shouldShowIntro = () => {
  try {
    return sessionStorage.getItem(INTRO_KEY) !== '1';
  } catch {
    return true;
  }
};

function App() {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

  const handleIntroComplete = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      // Storage unavailable; the intro will simply show again next load.
    }
    setShowIntro(false);
  }, []);

  return (
    <Router>
          <AnimatePresence>
            {showIntro && <Intro key="intro" onComplete={handleIntroComplete} />}
          </AnimatePresence>
          <div className="noise relative min-h-screen">
            <Aurora />
            <ScrollToTop />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsIndex />} />
                <Route path="/projects/:categoryId" element={<ProjectCategory />} />
                <Route path="/research" element={<Research />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
    </Router>
  );
}

export default App;
