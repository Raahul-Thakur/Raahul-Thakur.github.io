import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { categories, getCategory, accentStyles } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Reveal } from '../components/ui/Reveal';
import { site } from '../data/site';
import { cn } from '../utils/cn';

export const ProjectCategory: React.FC = () => {
  const { categoryId } = useParams();
  const category = getCategory(categoryId ?? '');

  if (!category) return <Navigate to="/projects" replace />;

  const a = accentStyles[category.accent];
  const featured = category.projects.filter((p) => p.featured);
  const rest = category.projects.filter((p) => !p.featured);

  return (
    <div className="majd-subpage relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-36">
      <Reveal>
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className={cn('h-1.5 w-1.5 rounded-full', a.dot)} />
          <p className={cn('font-mono text-[11px] uppercase tracking-[0.35em]', a.text)}>
            {category.label}
          </p>
        </div>
        <h1 className="display text-4xl md:text-6xl">{category.headline}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {category.description}
        </p>
      </Reveal>

      {/* Category switcher */}
      <Reveal delay={0.1} className="mt-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = cat.id === category.id;
            const ca = accentStyles[cat.accent];
            return (
              <Link
                key={cat.id}
                to={`/projects/${cat.id}`}
                className={cn(
                  'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors',
                  isActive
                    ? cn('border-transparent', ca.bg, ca.text)
                    : 'border-white/[0.1] text-zinc-500 hover:border-white/25 hover:text-zinc-200'
                )}
              >
                {cat.shortLabel}
              </Link>
            );
          })}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {[...featured, ...rest].map((project, i) => (
          <Reveal
            key={project.title}
            delay={Math.min(i * 0.05, 0.3)}
            className={project.featured ? 'md:col-span-2' : undefined}
          >
            <ProjectCard project={project} accent={category.accent} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"
        >
          More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </div>
  );
};
