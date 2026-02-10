import React from 'react';
import { ArrowLeft, BookOpen, FileText, Github, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';

const publishedWork = [
  {
    title: "Physics-Based Long-Term Propagation Under J2, SRP, and Atmospheric Drag Perturbations",
    venue: "Global Space Exploration Conference — GLEX 2025, New Delhi",
    year: "2025",
    description:
      "Comprehensive analysis of orbital perturbations including J2 effects, solar radiation pressure, and atmospheric drag for long-term satellite propagation and mission planning.",
    authors: "Ridima Sur, Rahul Thakur",
    links: {
      abstract: "https://iafastro.directory/iac/archive/browse/GLEX-2025/8/2/93423/",
      paper: "https://www.academia.edu/144961165/Astrophysical_Techniques_for_Space_Debris_Mitigation_Through_Orbital_Resonance",
      code: "https://github.com/Raahul-Thakur/Orbital-Debris-Dynamics-Simulator",
    }
  },
  {
    title: "Resonant Harmony: Leveraging Orbital Resonance Maps to Architect Safer, Smarter Small-Satellite Constellations",
    venue: "In Review",
    year: "2025",
    description:
      "Novel approach to designing robust small-satellite constellations using orbital resonance mapping for collision avoidance and mission optimization.",
    authors: "Rahul Thakur",
    links: {
      abstract: "https://drive.google.com/file/d/10dTT5LMm4s2ZH_tbWiXUrvF0xo8ulb5H/view",
      presentation: "https://docs.google.com/presentation/d/1Oaf7aL765ODIeiHrzb8o19xTEBxCBOz2Nrz5aUrdIx8/edit?usp=sharing",
      code: "https://github.com/Raahul-Thakur/WSW",
    }
  },
];

const ongoingResearch = [
  {
    title: "Emergence of Syntax in Tiny Language Models: A Theoretical and Empirical Analysis Using PicoLM",
    description: "Investigating how syntactic structures emerge in resource-constrained language models and analyzing the theoretical foundations of linguistic structure formation.",
  },
  {
    title: "Astronomy-Safe Contrastive Learning for Rare Variable Star Discovery in Kepler & TESS",
    description: "Developing contrastive learning methods optimized for astronomical data to identify rare variable stars from Kepler and TESS survey data.",
  },
  {
    title: "Latent Graph Attention for Table Reasoning via Learned Row–Column Relations",
    description: "Novel graph attention mechanism for reasoning over structured tabular data by learning implicit row-column relationships.",
  },
  {
    title: "Single-Asset \"No-Trade Region\" Optimal Rebalancing with Proportional Transaction Costs",
    description: "Theoretical framework for optimal portfolio rebalancing strategies in presence of transaction costs, identifying trading boundaries.",
  },
  {
    title: "Bayesian Hierarchical Volatility Forecasting Across Multiple Assets Using Order-Book Microstructure Features",
    description: "Multi-asset volatility forecasting using Bayesian hierarchical models informed by high-frequency order-book microstructure data.",
  },
];

export const Research: React.FC = () => {
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
          Research
        </motion.h1>

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <BookOpen className="w-6 h-6" />
            Published Work
          </motion.h2>

          <div className="space-y-6">
            {publishedWork.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{publication.title}</h3>
                      <p className="text-sm opacity-70 mb-1">{publication.venue} • {publication.year}</p>
                      <p className="text-sm opacity-60 mb-3">{publication.authors}</p>
                      <p className="opacity-80">{publication.description}</p>
                    </div>
                    <BookOpen className="w-8 h-8 flex-shrink-0" />
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <HoverBorderGradient
                      as="a"
                      href={publication.links.abstract}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400"
                      containerClassName="p-0"
                    >
                      <FileText className="w-4 h-4" />
                      Abstract
                    </HoverBorderGradient>

                    {publication.links.paper !== "#" && (
                      <HoverBorderGradient
                        as="a"
                        href={publication.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400"
                        containerClassName="p-0"
                      >
                        <Presentation className="w-4 h-4" />
                        Full Paper
                      </HoverBorderGradient>
                    )}

                    <HoverBorderGradient
                      as="a"
                      href={publication.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400"
                      containerClassName="p-0"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </HoverBorderGradient>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <BookOpen className="w-6 h-6" />
            Ongoing Research
          </motion.h2>

          <div className="space-y-4">
            {ongoingResearch.map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-4">
                  <h3 className="text-lg font-bold mb-2">{research.title}</h3>
                  <p className="opacity-80 text-sm">{research.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
