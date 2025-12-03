import React from 'react';
import { ArrowLeft, Calculator, LineChart, BarChart3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const QuantProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-white mb-6 md:mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="retro-text text-3xl md:text-4xl mb-6 md:mb-8">Quantitative Projects</h1>
        
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <div 
            onClick={() => navigate('/quant-projects/black-scholes')}
            className="card p-4 md:p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Advanced Black-Scholes Calculator</h2>
                <p className="opacity-80 mb-4">
                  An interactive web application for options pricing, sensitivity analysis, and risk management,
                  featuring advanced analytics and intuitive visualizations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://advancedfinancialcalculator.streamlit.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/Raahul-Thakur/Black-Scholes-Calculator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <Calculator className="hidden md:block w-12 h-12 text-cyan-400 mt-4 md:mt-0 md:ml-4" />
            </div>
          </div>

          <div className="card p-4 md:p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">Market Microstructure Analysis</h2>
              <BarChart3 className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="opacity-80 mb-4">
              Analysis of high-frequency trading data to understand market dynamics
              and order book behavior.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <span className="text-sm opacity-70">Python, SQL, Apache Spark</span>
              <a href="#" className="text-cyan-400 hover:text-white">View Project →</a>
            </div>
          </div>

          <div className="card p-4 md:p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">Algorithmic Trading System</h2>
              <LineChart className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="opacity-80 mb-4">
              A sophisticated trading system implementing mean reversion and momentum strategies
              using Python and machine learning algorithms.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <span className="text-sm opacity-70">Python, TensorFlow, Pandas</span>
              <a href="#" className="text-cyan-400 hover:text-white">View Project →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};