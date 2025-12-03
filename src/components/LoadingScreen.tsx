import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let progressValue = 0;

    const timer = setInterval(() => {
      if (mounted) {
        progressValue += 2;
        if (progressValue >= 100) {
          clearInterval(timer);
          setProgress(100);
          // Use a separate effect for completion callback
          if (mounted) {
            onComplete();
          }
        } else {
          setProgress(progressValue);
        }
      }
    }, 50);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="w-80">
        <div className="retro-text mb-4">Loading...</div>
        <div className="loading-bar">
          <div 
            className="loading-progress"
            style={{ 
              width: `${progress}%`,
              transition: 'width 50ms linear'
            }}
          />
        </div>
        <div className="text-right mt-2">{progress}%</div>
      </div>
    </div>
  );
}