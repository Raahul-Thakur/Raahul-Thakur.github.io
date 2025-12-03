import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartScreen } from './components/StartScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { MainContent } from './components/MainContent';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Contact } from './components/Contact';

function App() {
  const [stage, setStage] = useState<'start' | 'loading' | 'main'>('start');

  const handleStart = () => {
    setStage('loading');
  };

  const handleLoadingComplete = () => {
    setStage('main');
  };

  if (stage === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (stage === 'loading') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;