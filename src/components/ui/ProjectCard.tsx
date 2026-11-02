import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project, accentStyles } from '../../data/projects';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  accent: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, accent }) => {
  const a = accentStyles[accent];

  return (
    <article
      className={cn(
        'glass group relative flex h-full flex-col overflow-hidden p-6',
        a.border,
        project.featured && 'md:col-span-2'
      )}
    >
      {/* corner glow on hover */}
      <div
        className={cn(
          'pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100',
          'bg-gradient-to-br to-transparent',
          a.glow
        )}
      />

      {project.featured && (
        <span
          className={cn(
            'mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]',
            a.bg,
            a.text
          )}
        >
          <Star className="h-3 w-3" />
          Featured
        </span>
      )}

      <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-white/[0.06] pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors', a.hoverText)}
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors', a.hoverText)}
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
};
