import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { site } from '../../data/site';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-4 mt-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-ink-950/70 px-5 py-3 backdrop-blur-xl md:mx-auto md:mt-6 md:max-w-7xl md:px-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-zinc-50">
          Rahul Thakur<span className="text-aurora">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {({ isActive }) => (
                <span
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm transition-colors',
                    isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-100'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.08]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </span>
              )}
            </NavLink>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/[0.12] p-2 text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-white/[0.08] bg-ink-950/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-4 py-3 text-sm',
                    isActive ? 'bg-white/[0.08] text-zinc-50' : 'text-zinc-400'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-4 py-3 text-sm text-zinc-400"
            >
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-4 py-3 text-sm text-zinc-400"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
