import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LinguanaAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="max-w-4xl mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-cyan-400 hover:text-white">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="text-center">
          <h1 className="retro-text text-6xl mb-8 animate-pulse">Coming Soon</h1>
          <div className="loading-bar w-48 mx-auto mb-8">
            <div 
              className="loading-progress animate-[width] w-full"
              style={{ 
                animation: 'loading 2s ease-in-out infinite'
              }}
            />
          </div>
          <p className="text-xl opacity-80">
            LinguanaAI is under development. Stay tuned for something amazing!
          </p>
        </div>
      </div>
    </div>
  );
};