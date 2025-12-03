import React from 'react';
import { Power } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-cyan-400 relative overflow-hidden">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <h1 className="retro-text text-6xl mb-12 font-bold">Welcome</h1>
      
      <button
        onClick={onStart}
        className="group relative px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
      >
        <span className="retro-text flex items-center gap-2">
          <Power className="w-6 h-6" />
          Press Start
        </span>
      </button>
      
      <div className="mt-8 text-sm opacity-50">© 2024</div>
    </div>
  );
}