import React from 'react';

/**
 * Fixed ambient background: soft gradient orbs + blueprint grid.
 * Sits behind all page content.
 */
export const Aurora: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-lines" />
      <div
        className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.35), rgba(34,211,238,0.12) 55%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-[45%] -left-64 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.4), transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full opacity-15 blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.35), transparent 70%)' }}
      />
    </div>
  );
};
