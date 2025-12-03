import React from 'react';
import { ArrowLeft, Calculator, Brain, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { HoverBorderGradient } from './ui/HoverBorderGradient';

export const Projects: React.FC = () => {
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
          Projects
        </motion.h1>

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl mb-6 flex items-center gap-2"
          >
            <Calculator className="w-6 h-6" />
            Quantitative Projects
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SpotlightCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Black-Scholes Calculator</h3>
                    <p className="opacity-80 mb-4">
                      An interactive web application for options pricing, sensitivity analysis, and risk management,
                      featuring advanced analytics and intuitive visualizations.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <HoverBorderGradient
                        as="a"
                        href="https://advancedfinancialcalculator.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400"
                        containerClassName="p-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </HoverBorderGradient>
                      <HoverBorderGradient
                        as="a"
                        href="https://github.com/Raahul-Thakur/Black-Scholes-Calculator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400"
                        containerClassName="p-0"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </HoverBorderGradient>
                    </div>
                  </div>
                  <Calculator className="w-12 h-12" />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-cyan-400 text-sm">Python</span>
                    <span className="px-3 py-1 border border-cyan-400 text-sm">Streamlit</span>
                    <span className="px-3 py-1 border border-cyan-400 text-sm">NumPy</span>
                    <span className="px-3 py-1 border border-cyan-400 text-sm">Pandas</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl mb-6 flex items-center gap-2"
          >
            <Brain className="w-6 h-6" />
            Data Science Projects
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">NLP Assistant</h3>
                    <p className="opacity-80 mb-4">
                      A lightweight NLP-powered assistant that provides summarization, news classification,
                      and event detection from text, PDF uploads, or article URLs.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <HoverBorderGradient
                        as="a"
                        href="https://huggingface.co/spaces/Raahulthakur/NLP-Assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400"
                        containerClassName="p-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </HoverBorderGradient>
                      <HoverBorderGradient
                        as="a"
                        href="https://github.com/Raahul-Thakur/NLP-Assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400"
                        containerClassName="p-0"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </HoverBorderGradient>
                    </div>
                  </div>
                  <Brain className="w-12 h-12" />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-cyan-400 text-sm">Python</span>
                    <span className="px-3 py-1 border border-cyan-400 text-sm">Transformers</span>
                    <span className="px-3 py-1 border border-cyan-400 text-sm">KeyBERT</span>
                    <span className="px-3 py-1 border border-cyan-400 text-sm">Streamlit</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
