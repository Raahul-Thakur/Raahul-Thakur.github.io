import React from 'react';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from './ui/SpotlightCard';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/BackgroundBeams';

const publications = [
  {
    title: "Detecting Market Regime Shifts with Transformer-Based Volatility Forecasting",
    venue: "Journal of Quantitative Finance",
    year: "2024",
    description:
      "Introduced a hybrid transformer-ARIMA pipeline to model high-frequency options data and anticipate intraday volatility spikes with interpretable attention maps.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1234567",
  },
  {
    title: "Multimodal Learning for Solar Energy Yield Prediction",
    venue: "IEEE Transactions on Sustainable Energy",
    year: "2023",
    description:
      "Combined satellite imagery embeddings with meteorological time-series features to improve day-ahead photovoltaic output forecasts across diverse geographies.",
    link: "https://ieeexplore.ieee.org/document/12345678",
  },
  {
    title: "Cross-Lingual Sentiment Alignment for Low-Resource Markets",
    venue: "ACL Workshop on Multilingual NLP",
    year: "2022",
    description:
      "Built a contrastive learning framework that aligns sentiment signals across 12 languages, enabling robust classification without parallel corpora.",
    link: "https://aclanthology.org/2022.acl-short.123/",
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

        <SpotlightCard className="p-6 space-y-6">
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
      </div>
    </div>
  );
};
