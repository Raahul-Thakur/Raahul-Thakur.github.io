import React, { useState } from 'react';
import { ArrowLeft, Calculator, Brain, Code2, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { HoverBorderGradient } from './ui/HoverBorderGradient';

type ProjectTab = 'data-science' | 'quant' | 'misc';

const projectTabs: Array<{ id: ProjectTab; label: string }> = [
  { id: 'data-science', label: 'Data Science Projects' },
  { id: 'quant', label: 'Quant Projects' },
  { id: 'misc', label: 'Misc Coding Projects' },
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>('data-science');

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
          className="retro-text text-4xl mb-8"
        >
          Projects
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
          aria-label="Project category tabs"
        >
          <div className="flex flex-wrap gap-3 border border-cyan-500/60 rounded-lg p-3 bg-black/50 backdrop-blur-sm">
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md border transition-all duration-200 text-sm md:text-base ${
                    isActive
                      ? 'bg-cyan-500/20 border-cyan-300 text-white'
                      : 'bg-transparent border-cyan-500/60 text-cyan-400 hover:border-cyan-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.nav>

        {activeTab === 'quant' && (
          <section>
            <motion.h2
              key="quant-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl mb-6 flex items-center gap-2"
            >
              <Calculator className="w-6 h-6" />
              Quant Projects
            </motion.h2>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                key="quant-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
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
        )}

        {activeTab === 'data-science' && (
          <section>
            <motion.h2
              key="ds-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl mb-6 flex items-center gap-2"
            >
              <Brain className="w-6 h-6" />
              Data Science Projects
            </motion.h2>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                key="ds-card-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
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

              <motion.div
                key="ds-card-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <SpotlightCard className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Model Compression in Practice: Evaluating Quantization and Distillation on CIFAR-10</h3>
                      <p className="opacity-80 mb-4">
                        Built a PyTorch-based model compression pipeline comparing dynamic quantization and knowledge distillation on CIFAR-10 (ResNet18). Achieved 185× model size reduction and 3× CPU speedup via distillation with {'<'}9% accuracy loss.
                      </p>
                      <p className="opacity-80 mb-4 whitespace-pre-line">
                        {'--- Executive Summary ---\n'}
                        {'Teacher (FP32) CPU Acc: 0.7987 | CPU Time: 0.157369s | Size: 44.81MB\n'}
                        {'Quant (INT8) CPU Acc: 0.7989 | CPU Time: 0.155893s | Size: 44.79MB\n'}
                        {'Student (KD) CPU Acc: 0.7152 | CPU Time: 0.054570s | Size: 0.24MB\n\n'}
                        {'Notes:\n'}
                        {'1) Dynamic quantisation affects mainly Linear layers (ResNet has some), and is optimised for CPU.\n'}
                        {'2) Fair latency comparison is CPU-only (GPU vs CPU is not apples-to-apples).\n'}
                        {'3) If you want stronger quantisation gains for CNNs, consider Static Quantisation or QAT with the fbgemm backend.'}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <HoverBorderGradient
                          as="a"
                          href="https://colab.research.google.com/drive/1k1aMxx_yfpLjBBJdMOVzwJsPzKb6XCmi?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-400"
                          containerClassName="p-0"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open Colab
                        </HoverBorderGradient>
                      </div>
                    </div>
                    <Brain className="w-12 h-12" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border border-cyan-400 text-sm">Python</span>
                      <span className="px-3 py-1 border border-cyan-400 text-sm">PyTorch</span>
                      <span className="px-3 py-1 border border-cyan-400 text-sm">ResNet18</span>
                      <span className="px-3 py-1 border border-cyan-400 text-sm">Quantization</span>
                      <span className="px-3 py-1 border border-cyan-400 text-sm">Knowledge Distillation</span>
                      <span className="px-3 py-1 border border-cyan-400 text-sm">Google Colab</span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>
          </section>
        )}

        {activeTab === 'misc' && (
          <section>
            <motion.h2
              key="misc-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl mb-6 flex items-center gap-2"
            >
              <Code2 className="w-6 h-6" />
              Misc Coding Projects
            </motion.h2>

            <motion.div
              key="misc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <SpotlightCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">More coding builds coming soon</h3>
                    <p className="opacity-80 mb-4">
                      This tab is reserved for general software projects, experiments, and utility tools beyond
                      data science and quantitative finance.
                    </p>
                    <HoverBorderGradient
                      as="a"
                      href="https://github.com/Raahul-Thakur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400"
                      containerClassName="p-0"
                    >
                      <Github className="w-4 h-4" />
                      Browse GitHub
                    </HoverBorderGradient>
                  </div>
                  <Code2 className="w-12 h-12" />
                </div>
              </SpotlightCard>
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
};
