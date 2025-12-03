import React from 'react';
import { ArrowLeft, Calculator, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlackScholesProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/quant-projects" className="flex items-center gap-2 text-cyan-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        <div className="mb-8 flex items-center justify-between">
          <h1 className="retro-text text-4xl">Advanced Black-Scholes Calculator</h1>
          <Calculator className="w-12 h-12" />
        </div>

        <div className="flex gap-4 mb-8">
          <a 
            href="https://advancedfinancialcalculator.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a 
            href="https://github.com/Raahul-Thakur/Black-Scholes-Calculator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <div className="space-y-8">
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="opacity-80 leading-relaxed">
              The Advanced Black-Scholes Calculator is an interactive web application designed for options pricing, 
              sensitivity analysis, risk management, and educational exploration of financial derivatives. Built using 
              Streamlit, the tool empowers users with advanced analytics and intuitive visualizations for making 
              informed decisions in financial markets.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Core Functionality</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Black-Scholes model for European options</li>
                  <li>• Greeks analysis (Delta, Gamma, Theta, Vega, Rho)</li>
                  <li>• Value at Risk (VaR) calculations</li>
                  <li>• Conditional VaR (CVaR) metrics</li>
                  <li>• Heston stochastic volatility model</li>
                  <li>• SABR volatility model implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Advanced Capabilities</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Real-time data integration with Yahoo Finance</li>
                  <li>• Strategy backtesting framework</li>
                  <li>• Model validation tools</li>
                  <li>• Interactive heatmaps</li>
                  <li>• Draggable profit/loss charts</li>
                  <li>• Portfolio hedging analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                <p className="opacity-80">Python, Streamlit, NumPy, Pandas, Yahoo Finance API</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementation Highlights</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Efficient numerical methods for options pricing</li>
                  <li>• Real-time market data integration</li>
                  <li>• Responsive UI with dark mode support</li>
                  <li>• Comprehensive error handling and validation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Educational Value</h2>
            <p className="opacity-80 leading-relaxed">
              The calculator serves as both a practical tool and an educational resource, featuring:
            </p>
            <ul className="mt-4 space-y-2 opacity-80">
              <li>• Interactive case studies on portfolio hedging</li>
              <li>• Volatility trading scenarios</li>
              <li>• Risk management examples</li>
              <li>• Model assumption analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};