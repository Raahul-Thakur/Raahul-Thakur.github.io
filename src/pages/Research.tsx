import React from 'react';
import { FileText, Presentation, Github, BookOpen, FlaskConical } from 'lucide-react';
import { publishedWork, ongoingResearch } from '../data/research';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Research: React.FC = () => {
  return (
    <div className="majd-subpage relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-36">
      <SectionHeading
        eyebrow="Research"
        title={
          <>
            Papers, preprints & <span className="serif-accent text-zinc-400">open questions</span>
          </>
        }
        description="From orbital debris dynamics presented at GLEX to the syntax of tiny language models — research is where I get to be wrong in interesting ways."
      />

      {/* Published */}
      <div className="mb-6 flex items-center gap-3">
        <BookOpen className="h-5 w-5 text-cyan-300" />
        <h2 className="font-display text-xl font-semibold text-zinc-100">Published & Presented</h2>
      </div>

      <div className="space-y-4">
        {publishedWork.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.08}>
            <article className="glass p-7 md:p-8 hover:border-cyan-400/30">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                  {pub.year}
                </span>
                <span className="text-sm text-zinc-400">{pub.venue}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-sm text-zinc-500">{pub.location}</span>
              </div>

              <h3 className="font-display text-xl font-semibold leading-snug text-zinc-50 md:text-2xl">
                {pub.title}
              </h3>
              <p className="mt-2 font-mono text-xs text-zinc-500">{pub.authors}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">{pub.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={pub.links.abstract}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <FileText className="h-4 w-4" />
                  Abstract
                </a>
                <a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Presentation className="h-4 w-4" />
                  Full Paper
                </a>
                <a
                  href={pub.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Ongoing */}
      <div className="mb-6 mt-20 flex items-center gap-3">
        <FlaskConical className="h-5 w-5 text-violet-300" />
        <h2 className="font-display text-xl font-semibold text-zinc-100">Ongoing Research</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {ongoingResearch.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <article className="glass h-full p-6 hover:border-violet-400/30">
              <span className="inline-block rounded-full border border-white/[0.1] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {r.area}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-zinc-50">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{r.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
