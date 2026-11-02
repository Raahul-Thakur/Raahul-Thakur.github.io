import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

/** Minimal counting intro loader. */
export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      onComplete();
    };
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(finish, 350);
    };
    raf = requestAnimationFrame(tick);
    // Fallback: guarantee completion even if rAF is throttled (backgrounded tab).
    const fallback = setTimeout(finish, duration + 1200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
    >
      <div className="grid-lines absolute inset-0 opacity-50" />
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display relative text-3xl md:text-5xl"
      >
        Rahul <span className="text-aurora">Thakur</span>
      </motion.h1>
      <p className="eyebrow relative mt-3">Data Scientist · Researcher</p>

      <div className="relative mt-12 w-64 max-w-[70vw]">
        <div className="mb-2 flex justify-between font-mono text-xs text-zinc-600">
          <span>loading</span>
          <span>{count}%</span>
        </div>
        <div className="h-px w-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};
