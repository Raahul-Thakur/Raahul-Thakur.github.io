import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../../data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#111] text-[#faf7f3]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 border-b border-white/15 pb-16 md:grid-cols-[1.3fr_.7fr] md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.24em] text-white/45">/ Contact</p>
            <p className="mt-5 font-display text-[clamp(4rem,10vw,9rem)] font-medium leading-[.78] tracking-[-.07em]">
              Let's talk.
            </p>
          </div>
          <div className="md:text-right">
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/55 md:ml-auto">
              Have a role, research question, or collaboration in mind? My inbox is open.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-sweep inline-flex items-center gap-2 font-display text-xl text-white md:text-2xl"
            >
              {site.email}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-2xl font-semibold">Rahul Thakur.</p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[.2em] text-white/35">
              Data scientist / Researcher
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep inline-flex items-center gap-1 text-sm text-white/50 hover:text-white"
              >
                {s.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Rahul Thakur. Built with React, Tailwind & Framer Motion.</p>
          <div className="flex gap-5">
            <Link to="/projects" className="hover:text-zinc-300">Projects</Link>
            <Link to="/research" className="hover:text-zinc-300">Research</Link>
            <Link to="/contact" className="hover:text-zinc-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
