import React, { useState } from 'react';
import { ArrowLeft, Github, Linkedin, Mail, Blocks, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:raahul.thakurr01@gmail.com?subject=Hello%20Rahul&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    { title: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rahul-t-171458190/' },
    { title: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/Raahul-Thakur' },
    { title: 'HuggingFace', icon: <Blocks className="w-5 h-5" />, href: 'https://huggingface.co/Raahulthakur' },
    { title: 'LeetCode', icon: <Code className="w-5 h-5" />, href: 'https://leetcode.com/u/Blitzzkrieg/' },
    { title: 'Kaggle', icon: <Database className="w-5 h-5" />, href: 'https://www.kaggle.com/raahulthakur' },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-400 relative overflow-hidden">
      <BackgroundBeams />
      <div className="scanline"></div>
      <div className="crt-overlay"></div>

      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="retro-text text-4xl mb-12"
        >
          Contact
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          <SpotlightCard className="p-6">
            <h2 className="text-2xl font-bold mb-4">Send a message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-cyan-400/60 focus:border-cyan-300 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-cyan-400/60 focus:border-cyan-300 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-cyan-400/60 focus:border-cyan-300 outline-none"
                />
              </div>
              <HoverBorderGradient as="button" type="submit" className="w-full justify-center flex items-center gap-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                Send Email
              </HoverBorderGradient>
            </form>
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <h2 className="text-2xl font-bold mb-4">Connect</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:raahul.thakurr01@gmail.com" className="hover:text-white transition-colors">
                  raahul.thakurr01@gmail.com
                </a>
              </div>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  {link.icon}
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {link.title}
                  </a>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};
