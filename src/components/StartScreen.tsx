import React from 'react';
import { Power } from 'lucide-react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-cyan-400 relative overflow-hidden">
      <BackgroundBeams />
      <div className="scanline"></div>
      <div className="crt-overlay"></div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        className="retro-text text-6xl mb-12 font-bold relative z-10"
      >
        Welcome
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="group relative px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 z-10"
      >
        <span className="retro-text flex items-center gap-2">
          <Power className="w-6 h-6" />
          Press Start
        </span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8 text-sm relative z-10"
      >
        © 2026
      </motion.div>
    </div>
  );
}
