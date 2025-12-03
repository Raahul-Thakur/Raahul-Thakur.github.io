import React, { useState, useEffect } from 'react';
import { Podcast, FileDown, BookOpen, Newspaper, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';

export const MainContent: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const podcastEpisodes = [
    {
      title: "What is Chaos | A brief introduction to the reason behind my name",
      link: "https://open.spotify.com/episode/08Imnxw0h648dB2dO3iCav?si=lKM6Ae6_Sq6dGhj164F-LQ",
      description: "Dive into the fascinating world of chaos theory and discover the inspiration behind the podcast's name.",
      duration: "22:39",
      date: "August 15, 2020"
    },
    {
      title: "Chaos Theory in Language Studies: Navigating the Linguistic Labyrinth",
      link: "https://open.spotify.com/episode/6Dh8RVBKJIkzIghWSkg7h7?si=_XtJ8ac-S2WPu26vV8U9uQ",
      description: "Explore the intersection of chaos theory and linguistics, uncovering patterns in language evolution.",
      duration: "11:15",
      date: "April 12, 2024"
    },
    {
      title: "What is Dark DNA",
      link: "https://open.spotify.com/episode/3XAdnLt2ssxH7gfKOXVvaF?si=3Xz9wZNJTt-mKga5lTK-RA",
      description: "Exploring the mysterious world of dark DNA and its implications for genetics.",
      duration: "08:26",
      date: "January 15, 2021"
    },
    {
      title: "What is Butterfly Effect",
      link: "https://open.spotify.com/episode/7wX7gjw0INwWRxjx33hZdv?si=pHQ_zk7wT2O0tSxwO1L6Yw",
      description: "Understanding how small changes can create large impacts in complex systems.",
      duration: "06:54",
      date: "February 4, 2022"
    },
    {
      title: "What is Mandela effect?",
      link: "https://open.spotify.com/episode/7rrJxBwTgxczzS534VUl0u?si=3JhMDhkIToueFbk6M1H_ew",
      description: "Exploring the fascinating phenomenon of collective false memories.",
      duration: "09:59",
      date: "February 18, 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-400 relative overflow-hidden">
      <BackgroundBeams />
      <div className="scanline"></div>
      <div className="crt-overlay"></div>

      <header className={`py-6 px-4 md:py-8 md:px-12 border-b-2 border-cyan-400 fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="retro-text text-2xl">RAHUL</h1>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Home
            </button>
            <Link
              to="/projects"
              className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              to="/research"
              className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Research
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8 mt-48 relative z-10">
        <section id="hero" className="mb-16 pt-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase tracking-[0.3em] text-sm text-cyan-300"
              >
                Data Science | Research | Storytelling
              </motion.p>
              <TextGenerateEffect words="Building intelligent systems with a storyteller's heart" />
              <p className="opacity-80 leading-relaxed">
                I'm Rahul—part data scientist, part astrophysics enthusiast, and always chasing the next insight that connects numbers to narratives. Welcome to my little corner of the internet.
              </p>
              <div className="flex flex-wrap gap-4">
                <HoverBorderGradient
                  as="a"
                  href="https://drive.google.com/drive/folders/1rZ7mSLRbnkauo2SVn4qMp8DtgHsUuuW_?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400"
                >
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </HoverBorderGradient>
                <HoverBorderGradient
                  as={Link}
                  to="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </HoverBorderGradient>
              </div>
            </div>

            <SpotlightCard className="p-6">
              <h3 className="text-2xl font-bold mb-3">Home base</h3>
              <p className="opacity-80 leading-relaxed mb-4">
                This site is a snapshot of the projects, research, and conversations that keep me curious. Feel free to explore the highlights below or dive into the dedicated pages for projects, research, and ways to connect.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Quant finance', 'NLP', 'Storytelling', 'Learning in public'].map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-cyan-400/60 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </section>

        <section id="about" className="mb-16 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="retro-text text-3xl md:text-4xl mb-6"
          >
            About Me
          </motion.h2>
          <SpotlightCard className="p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-4 md:mb-6">
                Hi, I'm Rahul – part data scientist, part astrophysics enthusiast, and a full-time curious mind. My life's mission is to decode the universe, whether it's clustering stars in the night sky or clustering customer behaviors on Earth. I thrive at the intersection of data, science, and creativity – the perfect mix for a self-proclaimed "nerd with flair."
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-4 md:mb-6">
                Professionally, I've had the privilege of tackling projects ranging from AI in esports to used car price predictions to decoding solar energy production patterns. I like to think of myself as a problem-solver – whether it's optimizing a machine learning pipeline or figuring out how to fit gym, gaming, and sleep into a 24-hour day.
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6">
                I love a challenge, especially when it involves technology, innovation, and a dash of creativity. If you're here, chances are we have something in common – a drive to build, explore, and create something meaningful. So, let's connect, brainstorm, or just nerd out together. Who knows? Maybe we'll solve the next big mystery of the cosmos.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <HoverBorderGradient
                as="a"
                href="https://drive.google.com/drive/folders/1rZ7mSLRbnkauo2SVn4qMp8DtgHsUuuW_?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </HoverBorderGradient>
            </div>
          </SpotlightCard>
        </section>

        <section id="other-works" className="mb-16 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="retro-text text-3xl md:text-4xl mb-6"
          >
            Blog & Notes
          </motion.h2>

          <SpotlightCard className="p-4 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Recent writing</h3>
            </div>
            <p className="opacity-80 mb-4">
              Explore my thoughts and insights on data science, machine learning, and technology.
            </p>
            <HoverBorderGradient
              as="a"
              href="https://raahul-thakur.github.io/tensorandquarks.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400"
            >
              <Newspaper className="w-5 h-5" />
              Read Blog
            </HoverBorderGradient>
          </SpotlightCard>

          <SpotlightCard className="p-4 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Podcast className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Featured Podcast Episodes</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {podcastEpisodes.map((episode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-cyan-400/50 p-4 hover:bg-cyan-400/10 transition-colors rounded"
                >
                  <h4 className="text-lg font-bold mb-2">{episode.title}</h4>
                  <p className="opacity-80 mb-2">{episode.description}</p>
                  <div className="flex justify-between items-center text-sm opacity-70">
                    <span>{episode.duration}</span>
                    <span>{episode.date}</span>
                  </div>
                  <a
                    href={episode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-cyan-400 hover:text-white transition-colors"
                  >
                    Listen Now →
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <HoverBorderGradient
                as="a"
                href="https://open.spotify.com/show/54n5rd0nlXZQpdAwKkOz5N?si=m-nALYMnSOijG0rVgFZe6A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400"
              >
                <Podcast className="w-5 h-5" />
                View All Episodes
              </HoverBorderGradient>
            </div>
          </SpotlightCard>
        </section>
      </main>
    </div>
  );
}
