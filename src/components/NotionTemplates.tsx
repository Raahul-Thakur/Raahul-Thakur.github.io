import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotionTemplates: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 relative">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="retro-text text-4xl mb-8">Notion Templates</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Project Management Template</h2>
            <p className="opacity-80 mb-4">
              A comprehensive project management system with task tracking, timeline management,
              and team collaboration features.
            </p>
            <a href="#" className="text-cyan-400 hover:text-white">Get Template →</a>
          </div>

          <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Daily Journal Template</h2>
            <p className="opacity-80 mb-4">
              Structured daily journaling system with mood tracking, habit monitoring,
              and reflection prompts.
            </p>
            <a href="#" className="text-cyan-400 hover:text-white">Get Template →</a>
          </div>

          <div className="card p-6 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Knowledge Base Template</h2>
            <p className="opacity-80 mb-4">
              Organized system for storing and retrieving information, with tags,
              cross-referencing, and search functionality.
            </p>
            <a href="#" className="text-cyan-400 hover:text-white">Get Template →</a>
          </div>
        </div>
      </div>
    </div>
  );
};