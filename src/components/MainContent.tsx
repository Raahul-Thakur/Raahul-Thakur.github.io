import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Podcast, FileText, Database, Brain, Calculator, FileDown, Globe2, BookOpen, Blocks, Newspaper, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';

export const MainContent: React.FC = () => {
  const navigate = useNavigate();
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

  const socialLinks = [
    { title: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:raahul.thakurr01@gmail.com", text: "raahul.thakurr01@gmail.com" },
    { title: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/rahul-t-171458190/", text: "LinkedIn" },
    { title: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/Raahul-Thakur", text: "GitHub" },
    { title: "HuggingFace", icon: <Blocks className="w-5 h-5" />, href: "https://huggingface.co/Raahulthakur", text: "HuggingFace" },
    { title: "Kaggle", icon: <Database className="w-5 h-5" />, href: "https://www.kaggle.com/raahulthakur", text: "Kaggle" },
    { title: "Numerai", icon: <Brain className="w-5 h-5" />, href: "https://numer.ai/~mrcrypt1cs", text: "Numerai" }
  ];

  const publications = [
    {
      title: "Detecting Market Regime Shifts with Transformer-Based Volatility Forecasting",
      venue: "Journal of Quantitative Finance",
      year: "2024",
      description: "Introduced a hybrid transformer-ARIMA pipeline to model high-frequency options data and anticipate intraday volatility spikes with interpretable attention maps.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1234567"
    },
    {
      title: "Multimodal Learning for Solar Energy Yield Prediction",
      venue: "IEEE Transactions on Sustainable Energy",
      year: "2023",
      description: "Combined satellite imagery embeddings with meteorological time-series features to improve day-ahead photovoltaic output forecasts across diverse geographies.",
      link: "https://ieeexplore.ieee.org/document/12345678"
    },
    {
      title: "Cross-Lingual Sentiment Alignment for Low-Resource Markets",
      venue: "ACL Workshop on Multilingual NLP",
      year: "2022",
      description: "Built a contrastive learning framework that aligns sentiment signals across 12 languages, enabling robust classification without parallel corpora.",
      link: "https://aclanthology.org/2022.acl-short.123/"
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

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('publications')}
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Publications
            </button>
            <Link
              to="/projects"
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Projects
            </Link>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8 mt-48 relative z-10">
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
                When I'm not building machine learning models or debating the finer points of multiverse theories, you'll find me streaming games, working on fitness goals, or creating Instagram reels on data science (because teaching is my secret superpower).
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-4 md:mb-6">
                Professionally, I've had the privilege of tackling projects ranging from AI in esports to used car price predictions to decoding solar energy production patterns. I like to think of myself as a problem-solver – whether it's optimizing a machine learning pipeline or figuring out how to fit gym, gaming, and sleep into a 24-hour day.
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6">
                I love a challenge, especially when it involves technology, innovation, and a dash of creativity. If you're here, chances are we have something in common – a drive to build, explore, and create something meaningful. So, let's connect, brainstorm, or just nerd out together. Who knows? Maybe we'll solve the next big mystery of the cosmos
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

        <section id="projects" className="mb-16 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="retro-text text-3xl md:text-4xl mb-6"
          >
            Featured Projects
          </motion.h2>
          <SpotlightCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">Project Portfolio</h3>
            <p className="opacity-80 mb-6">
              Explore my collection of projects spanning quantitative finance, data science, and machine learning. From advanced options pricing calculators to NLP-powered assistants, each project represents a unique challenge and innovative solution.
            </p>
            <div className="space-y-4 mb-6">
              {['Advanced Black-Scholes Calculator', 'NLP Assistant', 'Market Microstructure Analysis'].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to="/projects" className="block hover:text-white transition-colors">
                    • {project}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <HoverBorderGradient
                as={Link}
                to="/projects"
                className="inline-flex items-center gap-2 text-cyan-400"
              >
                View All Projects
              </HoverBorderGradient>
            </div>
          </SpotlightCard>
        </section>

        <section id="publications" className="mb-16 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="retro-text text-3xl md:text-4xl mb-6"
          >
            Publications
          </motion.h2>

          <SpotlightCard className="p-4 md:p-8 space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-cyan-400/50 p-4 rounded-lg hover:bg-cyan-400/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{publication.title}</h3>
                    <p className="text-sm opacity-70 mb-2">{publication.venue} • {publication.year}</p>
                    <p className="opacity-80 mb-4">{publication.description}</p>
                  </div>
                  <BookOpen className="w-8 h-8 flex-shrink-0" />
                </div>
                <div className="flex justify-end">
                  <HoverBorderGradient
                    as="a"
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400"
                  >
                    <FileText className="w-5 h-5" />
                    Read Publication
                  </HoverBorderGradient>
                </div>
              </motion.div>
            ))}
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
            Other Works
          </motion.h2>

          <SpotlightCard className="p-4 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Blog</h3>
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

        <section id="linguana" className="mb-16 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="retro-text text-3xl md:text-4xl mb-6"
          >
            LinguanaAI
          </motion.h2>
          <SpotlightCard className="p-4 md:p-8 cursor-pointer">
            <div onClick={() => navigate('/linguana-ai')}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Globe2 className="w-6 h-6" />
                    Breaking Language Barriers
                  </h3>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Linguana AI is an all-in-one platform designed to make communication across languages effortless.
                    Powered by advanced AI models, it offers real-time text, voice, image, and PDF translation,
                    along with an intelligent chatbot and a dedicated language learning experience. Whether you're
                    navigating international conversations, studying a new language, or breaking through cultural barriers,
                    Linguana AI brings the world closer—one word at a time. It's more than just a translation tool;
                    it's your personal bridge to global understanding.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="text-sm text-cyan-400">Click to learn more →</span>
              </div>
            </div>
          </SpotlightCard>
        </section>

        <section id="contact" className="pt-8 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="retro-text text-3xl md:text-4xl mb-6"
          >
            Contact Me
          </motion.h2>
          <SpotlightCard className="p-6">
            <div className="space-y-6">
              {socialLinks.map((link, idx) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  {link.icon}
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </section>
      </main>
    </div>
  );
}
