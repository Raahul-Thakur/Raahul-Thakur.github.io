import React from 'react';
import { ArrowLeft, Brain, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DataScienceProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="retro-text text-4xl mb-8">Data Science Projects</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">NLP Assistant</h2>
              <Brain className="w-8 h-8" />
            </div>
            <p className="opacity-80 mb-6">
              A lightweight NLP-powered assistant that provides summarization, news classification, 
              and event detection from text, PDF uploads, or article URLs. Built using Transformers, 
              KeyBERT, Streamlit, and pdfplumber.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Raahul-Thakur/NLP-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-cyan-400 text-sm">Python</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">Transformers</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">KeyBERT</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">Streamlit</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">pdfplumber</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};