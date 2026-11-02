import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { categories, accentStyles } from '../data/projects';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { site } from '../data/site';
import { cn } from '../utils/cn';

export const ProjectsIndex: React.FC = () => {
  return (
    <div className="majd-subpage relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-36">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            Pick a <span className="serif-accent text-zinc-400">universe</span>
          </>
        }
        description="Everything I build falls somewhere between a Jupyter notebook and a production deploy. Choose a domain to dig in."
      />

      <div className="grid gap-4">
        {categories.map((cat, i) => {
          const a = accentStyles[cat.accent];
          const featured = cat.projects.filter((p) => p.featured);
          return (
            <Reveal key={cat.id} delay={i * 0.07}>
              <Link
                to={`/projects/${cat.id}`}
                className={cn(
                  'glass group relative block overflow-hidden p-7 md:p-10',
                  a.border
                )}
              >
                <div
                  className={cn(
                    'pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100',
                    a.glow
                  )}
                />
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <span className={cn('flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em]', a.text)}>
                      <span className={cn('h-1.5 w-1.5 rounded-full', a.dot)} />
                      {cat.label}
                    </span>
                    <h2 className="display mt-4 text-2xl md:text-4xl">{cat.headline}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                      {cat.description}
                    </p>
                    {featured.length > 0 && (
                      <p className="mt-4 font-mono text-xs text-zinc-600">
                        Featuring: {featured.map((p) => p.title).join(' · ')}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-6 md:flex-col md:items-end">
                    <span className="display text-4xl text-zinc-700 transition-colors group-hover:text-zinc-400 md:text-5xl">
                      {String(cat.projects.length).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-zinc-300">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-10">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"
        >
          Or browse all {`>90`} repositories on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </div>
  );
};
