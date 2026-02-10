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

          <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">Model Compression in Practice: Evaluating Quantization and Distillation on CIFAR-10</h2>
              <Brain className="w-8 h-8" />
            </div>
            <p className="opacity-80 mb-4">
              Built a PyTorch-based model compression pipeline comparing dynamic quantization and knowledge distillation on CIFAR-10 (ResNet18). Achieved 185× model size reduction and 3× CPU speedup via distillation with {'<'}9% accuracy loss. Implemented fair benchmarking, profiling, and visualization in Colab.
            </p>
            <p className="opacity-80 mb-6 whitespace-pre-line">
              --- Executive Summary ---{"\n"}
              Teacher (FP32) CPU Acc: 0.7987 | CPU Time: 0.157369s | Size: 44.81MB{"\n"}
              Quant (INT8) CPU Acc: 0.7989 | CPU Time: 0.155893s | Size: 44.79MB{"\n"}
              Student (KD) CPU Acc: 0.7152 | CPU Time: 0.054570s | Size: 0.24MB{"\n\n"}
              Notes:{"\n"}
              1) Dynamic quantisation affects mainly Linear layers (ResNet has some), and is optimised for CPU.{"\n"}
              2) Fair latency comparison is CPU-only (GPU vs CPU is not apples-to-apples).{"\n"}
              3) If you want stronger quantisation gains for CNNs, consider Static Quantisation or QAT with the fbgemm backend.
            </p>
            <div className="flex gap-4">
              <a
                href="https://colab.research.google.com/drive/1k1aMxx_yfpLjBBJdMOVzwJsPzKb6XCmi?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Open Colab
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-cyan-400 text-sm">Python</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">PyTorch</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">ResNet18</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">Quantization</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">Knowledge Distillation</span>
                <span className="px-3 py-1 border border-cyan-400 text-sm">Google Colab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
