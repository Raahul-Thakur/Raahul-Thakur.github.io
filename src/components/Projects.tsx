import React from 'react';
import { ArrowLeft, Calculator, Brain, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="retro-text text-4xl mb-12">Projects</h1>
        
        {/* Quantitative Projects */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Quantitative Projects
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Advanced Black-Scholes Calculator</h3>
                  <p className="opacity-80 mb-4">
                    An interactive web application for options pricing, sensitivity analysis, and risk management,
                    featuring advanced analytics and intuitive visualizations.
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="https://advancedfinancialcalculator.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href="https://github.com/Raahul-Thakur/Black-Scholes-Calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
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
            </div>
          </div>
        </section>

        {/* Data Science Projects */}
        <section>
          <h2 className="text-2xl mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Data Science Projects
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">NLP Assistant</h3>
                  <p className="opacity-80 mb-4">
                    A lightweight NLP-powered assistant that provides summarization, news classification, 
                    and event detection from text, PDF uploads, or article URLs.
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="https://huggingface.co/spaces/Raahulthakur/NLP-Assistant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href="https://github.com/Raahul-Thakur/NLP-Assistant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};