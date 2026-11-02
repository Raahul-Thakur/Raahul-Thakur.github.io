import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CircleDot,
  Github,
  Podcast,
  Radio,
  Sparkles,
} from 'lucide-react';
import { site, experience, education, skills, podcastEpisodes } from '../data/site';
import { categories } from '../data/projects';
import { publishedWork } from '../data/research';
import { Reveal } from '../components/ui/Reveal';

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const domainMeta = {
  'ml-ai': { index: '01', color: '#a78bfa', code: 'INTELLIGENCE' },
  astro: { index: '02', color: '#67e8f9', code: 'COMPUTATION' },
  quant: { index: '03', color: '#6ee7b7', code: 'SYSTEMS' },
  sports: { index: '04', color: '#fbbf24', code: 'SIMULATION' },
};

const TiltCard: React.FC<React.PropsWithChildren<{ className?: string; accent?: string }>> = ({
  children,
  className = '',
  accent,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 22 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
        '--accent': accent,
      } as React.CSSProperties}
      onPointerMove={(event) => {
        if (reduceMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
};

const ProjectVisual: React.FC<{ id: string; color: string }> = ({ id, color }) => {
  if (id === 'astro') {
    return (
      <div className="project-visual relative" style={{ '--accent': color } as React.CSSProperties}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="orbit-system scale-75 md:scale-100">
            <span className="orbit-core" />
            <span className="orbit-ring orbit-ring-a"><i /></span>
            <span className="orbit-ring orbit-ring-b"><i /></span>
            <span className="orbit-ring orbit-ring-c"><i /></span>
          </div>
        </div>
        <span className="visual-coordinate left-5 top-5">RA 17h 45m</span>
        <span className="visual-coordinate bottom-5 right-5">DEC -29° 00'</span>
      </div>
    );
  }

  if (id === 'quant') {
    return (
      <div className="project-visual relative" style={{ '--accent': color } as React.CSSProperties}>
        <svg viewBox="0 0 480 240" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={color} stopOpacity=".28" />
              <stop offset="1" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 205 C45 190 52 158 94 172 S150 125 188 143 S238 78 278 108 S340 49 377 71 S427 25 480 38 V240 H0Z" fill="url(#chartFill)" />
          <path d="M0 205 C45 190 52 158 94 172 S150 125 188 143 S238 78 278 108 S340 49 377 71 S427 25 480 38" fill="none" stroke={color} strokeWidth="2" />
        </svg>
        <span className="visual-coordinate left-5 top-5">ALPHA / 1.84</span>
        <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[9px] text-white/30">
          <span>09:30</span><span>11:00</span><span>13:30</span><span>16:00</span>
        </div>
      </div>
    );
  }

  if (id === 'sports') {
    return (
      <div className="project-visual relative overflow-hidden" style={{ '--accent': color } as React.CSSProperties}>
        <div className="pitch-plane">
          <span className="pitch-line center" /><span className="pitch-circle" />
          {[18, 34, 52, 68, 82].map((left, i) => <i key={left} style={{ left: `${left}%`, top: `${i % 2 ? 62 : 30}%` }} />)}
        </div>
        <span className="visual-coordinate left-5 top-5">MONTE CARLO / 10K</span>
      </div>
    );
  }

  return (
    <div className="project-visual relative" style={{ '--accent': color } as React.CSSProperties}>
      <div className="node-map absolute inset-0">
        <span className="node node-main">LLM</span>
        <span className="node node-a">01</span><span className="node node-b">02</span>
        <span className="node node-c">03</span><span className="node node-d">04</span>
        <svg viewBox="0 0 480 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <g stroke={color} strokeOpacity=".35" strokeWidth="1">
            <line x1="240" y1="120" x2="92" y2="58" /><line x1="240" y1="120" x2="390" y2="48" />
            <line x1="240" y1="120" x2="108" y2="190" /><line x1="240" y1="120" x2="382" y2="186" />
          </g>
        </svg>
      </div>
      <span className="visual-coordinate left-5 top-5">AGENT / ACTIVE</span>
    </div>
  );
};

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTitleY = useTransform(heroScroll, [0, 1], [0, -260]);
  const heroTitleOpacity = useTransform(heroScroll, [0, .72, 1], [1, .9, 0]);

  return (
    <div className="majd-home relative z-10 overflow-hidden">
      <section ref={heroRef} className="majd-cover flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#111111] px-5 text-[#faf7f3]">
        <motion.h1
          variants={heroItem}
          initial="hidden"
          animate="show"
          style={{ y: heroTitleY, opacity: heroTitleOpacity }}
          className="majd-cover-title"
        >
          DATA SCIENTIST
        </motion.h1>
      </section>

      <section className="majd-profile-reveal relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f4f0e8] px-6 py-28">
        <Reveal className="relative">
          <div className="majd-card-wrap">
            <div className="identity-card-back identity-card-back-one" />
            <div className="identity-card-back identity-card-back-two" />
            <motion.article
              className="identity-card"
              whileHover={{ y: -10, rotateZ: -1.4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="identity-card-topline">
                <span>RT / PROFILE</span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <i className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  AVAILABLE
                </span>
              </div>
              <div className="identity-portrait">
                <span className="identity-portrait-grid" />
                <span className="identity-monogram">RT</span>
                <span className="identity-orbit"><i /></span>
                <span className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[.2em] text-white/55">Mumbai / India</span>
              </div>
              <div className="px-5 pb-5 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-500">Data scientist · Researcher</p>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950">Rahul Thakur</h2>
                  <span className="mb-1 font-mono text-[8px] text-zinc-400">EST. 2024</span>
                </div>
                <p className="mt-3 border-t border-black/10 pt-3 text-xs leading-relaxed text-zinc-600">
                  I build intelligent systems from market microstructure to the night sky.
                </p>
                <div className="identity-socials">
                  {site.socials.slice(0, 4).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label}
                      <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </Reveal>
      </section>

      <section className="majd-intro majd-light bg-[#f4f0e8] px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-display text-5xl font-medium tracking-tight text-[#111] md:text-7xl">Hey!</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.22em] text-black/45">/ Based in Mumbai, India</p>
          </div>
          <div>
            <p className="max-w-4xl font-display text-3xl font-medium leading-[1.13] tracking-tight text-[#111] md:text-5xl">
              I’m Rahul, a physics-trained data scientist turning complex signals into
              useful systems.
            </p>
            <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-2">
              <p className="text-base leading-relaxed text-black/60">My work spans autonomous agents, quantitative models, computational astrophysics, and simulation-heavy sports analytics.</p>
              <p className="text-base leading-relaxed text-black/60">I care about rigorous thinking, clear communication, and shipping research that works beyond the notebook.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="majd-light mx-auto max-w-7xl bg-[#f4f0e8] px-6 py-24 lg:px-10" id="work">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 md:flex-row md:items-end">
            <div><p className="eyebrow mb-4">Selected portfolio</p><h2 className="display text-4xl md:text-6xl">Four ways I <span className="serif-accent text-zinc-500">think.</span></h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">A curated cross-section of shipped systems, experiments, and research code.</p>
          </div>
        </Reveal>

        <div className="space-y-7">
          {categories.map((category, index) => {
            const meta = domainMeta[category.id];
            const project = category.projects.find((item) => item.featured) ?? category.projects[0];
            return (
              <Reveal key={category.id} delay={index * .05}>
                <TiltCard className="portfolio-card group" accent={meta.color}>
                  <Link to={`/projects/${category.id}`} className="grid min-h-[350px] lg:grid-cols-[.88fr_1.12fr]">
                    <div className="relative z-10 flex flex-col p-7 md:p-10">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.25em]" style={{ color: meta.color }}>
                        <span>{meta.index} / {category.shortLabel}</span><span className="text-zinc-600">{meta.code}</span>
                      </div>
                      <div className="my-auto py-12">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[.25em] text-zinc-600">Featured case study</p>
                        <h3 className="display max-w-xl text-3xl leading-tight md:text-5xl">{project.title}</h3>
                        <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">{project.description}</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/[.08] pt-5">
                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-600">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                    <div className="m-3 min-h-[280px] overflow-hidden rounded-[1.35rem] border border-white/[.07] bg-black/25 lg:min-h-0">
                      <ProjectVisual id={category.id} color={meta.color} />
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 flex justify-end"><Link to="/projects" className="text-link">Browse the complete project archive <ArrowRight className="h-4 w-4" /></Link></div>
      </section>

      <section className="majd-light mx-auto grid max-w-7xl gap-16 bg-[#f4f0e8] px-6 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow mb-5">Profile / 02</p>
            <h2 className="display text-4xl leading-tight md:text-6xl">A physicist's curiosity,<br /><span className="serif-accent text-zinc-500">applied to data.</span></h2>
            <p className="mt-7 max-w-md leading-relaxed text-zinc-400">I like problems with noisy signals, hidden structure, and real consequences. The domain changes; the habit of asking better questions does not.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.github} target="_blank" rel="noreferrer" className="mini-chip"><Github className="h-3.5 w-3.5" />GitHub</a>
              <Link to="/research" className="mini-chip"><BookOpen className="h-3.5 w-3.5" />Research</Link>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal><p className="eyebrow mb-6">Experience log</p></Reveal>
          <div className="border-t border-white/10">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * .06}>
                <article className="group grid gap-4 border-b border-white/10 py-8 md:grid-cols-[80px_1fr]">
                  <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="display text-2xl">{job.company} <span className="font-sans text-sm font-normal tracking-normal text-zinc-500">/ {job.role}</span></h3><span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">{job.period}</span></div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">{job.points[0]}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={.1} className="mt-12">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              <div className="bg-ink-950 p-7"><p className="eyebrow mb-5">Education</p>{education.map(ed => <div key={ed.school} className="mb-5 last:mb-0"><h3 className="text-sm font-medium text-zinc-100">{ed.school}</h3><p className="mt-1 text-xs leading-relaxed text-zinc-500">{ed.degree} · {ed.period}</p></div>)}</div>
              <div className="bg-ink-950 p-7"><p className="eyebrow mb-5">Working set</p><div className="flex flex-wrap gap-2">{skills.flatMap(s => s.items.slice(0, 2)).map(item => <span key={item} className="mini-chip">{item}</span>)}</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="majd-light mx-auto max-w-7xl bg-[#f4f0e8] px-6 py-24 lg:px-10">
        <Reveal><div className="mb-10 flex items-end justify-between border-b border-white/10 pb-7"><div><p className="eyebrow mb-4">Research shelf</p><h2 className="display text-4xl md:text-6xl">Ideas in <span className="serif-accent text-zinc-500">motion.</span></h2></div><Sparkles className="hidden h-8 w-8 text-cyan-300 md:block" /></div></Reveal>
        <div className="research-stack">
          {publishedWork.map((publication, index) => (
            <Reveal key={publication.title} delay={index * .06}>
              <article className="research-card" style={{ transform: `rotate(${index % 2 ? 1 : -1}deg)` }}>
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan-300">Publication / {publication.year}</span><CircleDot className="h-4 w-4 text-zinc-600" /></div>
                <h3 className="display mt-10 text-2xl leading-snug md:text-3xl">{publication.title}</h3>
                <div className="mt-8 flex items-end justify-between border-t border-black/10 pt-4 text-xs text-zinc-600"><span>{publication.venue}</span><span className="font-mono">{publication.location}</span></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="majd-light mx-auto max-w-7xl bg-[#f4f0e8] px-6 py-24 lg:px-10">
        <Reveal>
          <div className="majd-outlets grid overflow-hidden rounded-[2rem] border border-black/15 bg-[#111] md:grid-cols-2">
            <a href={site.blog} target="_blank" rel="noreferrer" className="group p-8 transition-colors hover:bg-violet-500/[.06] md:p-12">
              <BookOpen className="h-6 w-6 text-violet-300" /><p className="eyebrow mt-16">Essays</p><h2 className="display mt-3 text-4xl">Tensors & Quarks</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">Notes where machine learning, physics, and curious detours meet.</p><span className="text-link mt-8">Open notebook <ArrowUpRight className="h-4 w-4" /></span>
            </a>
            <a href={site.podcast} target="_blank" rel="noreferrer" className="group border-t border-white/10 p-8 transition-colors hover:bg-emerald-500/[.06] md:border-l md:border-t-0 md:p-12">
              <Radio className="h-6 w-6 text-emerald-300" /><p className="eyebrow mt-16">Audio journal</p><h2 className="display mt-3 text-4xl">Chaos, the podcast</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">Latest: {podcastEpisodes[0].title} · {podcastEpisodes[0].duration}</p><span className="text-link mt-8">Listen on Spotify <Podcast className="h-4 w-4" /></span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
