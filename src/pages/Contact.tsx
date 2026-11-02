import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send } from 'lucide-react';
import { site } from '../data/site';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = `mailto:${site.email}?subject=${encodeURIComponent(
      `Hello Rahul — from ${form.name || 'your site'}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = link;
  };

  return (
    <div className="majd-subpage relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-36">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Say <span className="serif-accent text-zinc-400">hello</span>
          </>
        }
        description="Collaboration, research, a role, or just chaos theory — pick whichever door you like."
      />

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass h-full p-7 md:p-9">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/[0.04]"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/[0.04]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/[0.04]"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-50 px-6 py-3.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.01]"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                Send message
              </button>
            </div>
          </form>
        </Reveal>

        {/* Direct + socials */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Reveal delay={0.1}>
            <a
              href={`mailto:${site.email}`}
              className="glass group block p-7 hover:border-violet-400/40"
            >
              <Mail className="mb-4 h-6 w-6 text-violet-300" />
              <p className="eyebrow mb-2">Direct</p>
              <p className="break-all font-display text-lg text-zinc-100 group-hover:text-white">
                {site.email}
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="glass flex-1 p-7">
              <p className="eyebrow mb-5">Elsewhere</p>
              <div className="space-y-1">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
                  >
                    {s.label}
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
