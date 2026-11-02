import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description }) => (
  <Reveal className="mb-10 md:mb-14">
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-zinc-600" />
      <p className="eyebrow">{eyebrow}</p>
    </div>
    <h2 className="display text-3xl md:text-5xl">{title}</h2>
    {description && (
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
        {description}
      </p>
    )}
  </Reveal>
);
