import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

export const NotFound: React.FC = () => (
  <div className="majd-subpage relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-start justify-center px-6 pb-20 pt-36">
    <Reveal>
      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">404 / Lost in space</p>
      <h1 className="display mt-4 text-4xl md:text-6xl">This page drifted out of orbit.</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
        The link may be broken, or the page may have moved during the redesign.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#111] px-4 py-2 text-sm text-[#faf7f3] transition-opacity hover:opacity-85"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </Reveal>
  </div>
);
