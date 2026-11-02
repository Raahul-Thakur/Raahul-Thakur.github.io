export type CategoryId = 'ml-ai' | 'astro' | 'quant' | 'sports';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel: string;
  headline: string;
  description: string;
  accent: string; // tailwind color stem used in class maps
  projects: Project[];
}

const gh = (repo: string) => `https://github.com/Raahul-Thakur/${repo}`;

export const categories: Category[] = [
  {
    id: 'ml-ai',
    label: 'ML / AI Projects',
    shortLabel: 'ML / AI',
    headline: 'Machine intelligence, end to end',
    description:
      'LLM agents, RAG pipelines, NLP systems, and classical ML — built to ship, not just to demo.',
    accent: 'violet',
    projects: [
      {
        title: 'Autonomous Web Agent',
        description:
          'LLM-powered agent that browses, extracts, and structures web data autonomously — cut manual extraction time by 60% during my Fellowship.AI residency.',
        tags: ['LLMs', 'Agents', 'Python'],
        github: gh('Web-Agent'),
        featured: true,
      },
      {
        title: 'RAG Evolution',
        description:
          'A hands-on progression through retrieval-augmented generation — from naive retrieval to reranking, query transforms, and agentic RAG.',
        tags: ['RAG', 'LangChain', 'Vector Search'],
        github: gh('rag-evolution'),
        featured: true,
      },
      {
        title: 'NLP Assistant',
        description:
          'Lightweight assistant for summarization, news classification, and event detection from raw text, PDFs, or article URLs.',
        tags: ['Transformers', 'KeyBERT', 'Streamlit'],
        github: gh('NLP-Assistant'),
        demo: 'https://huggingface.co/spaces/Raahulthakur/NLP-Assistant',
      },
      {
        title: 'Model Compression in Practice',
        description:
          'Quantization vs. knowledge distillation on CIFAR-10 with ResNet18 — 185× smaller model and 3× CPU speedup at under 9% accuracy loss.',
        tags: ['PyTorch', 'Quantization', 'Distillation'],
        demo: 'https://colab.research.google.com/drive/1k1aMxx_yfpLjBBJdMOVzwJsPzKb6XCmi?usp=sharing',
      },
      {
        title: 'DocuVision AI',
        description:
          'Document intelligence pipeline combining vision and language models to parse, understand, and answer questions over documents.',
        tags: ['Multimodal', 'OCR', 'LLMs'],
        github: gh('Docuvision-AI'),
      },
      {
        title: 'Sentiment Analysis API',
        description:
          'Production-style FastAPI service wrapping Hugging Face sentiment models, complete with a built-in interactive playground.',
        tags: ['FastAPI', 'Hugging Face', 'APIs'],
        github: gh('fastapi-sentiment-anaylsis-api'),
      },
      {
        title: 'Movie Recommendation System',
        description:
          'Hybrid recommender on MovieLens 20M blending content features, collaborative filtering, fuzzy title search, and rating confidence.',
        tags: ['scikit-learn', 'Flask', 'Recommenders'],
        github: gh('Movie-Recommendation-System'),
      },
      {
        title: 'PaperPulse',
        description:
          'Research-paper monitoring tool that tracks new publications and distills them into digestible pulses.',
        tags: ['NLP', 'Automation', 'Python'],
        github: gh('PaperPulse'),
      },
      {
        title: 'Toxic Comment Classification',
        description:
          'Multi-label NLP classifier flagging toxicity categories in online comments.',
        tags: ['NLP', 'Classification', 'Python'],
        github: gh('Toxic-Comment-Classification'),
      },
      {
        title: 'CrewAI YouTube Blogger',
        description:
          'Multi-agent CrewAI pipeline that turns YouTube videos into structured blog posts.',
        tags: ['CrewAI', 'Agents', 'Content'],
        github: gh('crewai-youtube-blogger'),
      },
      {
        title: 'Autonomous Object Detection',
        description:
          'Computer-vision pipeline for detecting objects in driving scenes.',
        tags: ['Computer Vision', 'Deep Learning'],
        github: gh('autonomous-object-detection'),
      },
      {
        title: 'Credit Card Usage Segmentation',
        description:
          "Capstone for my Master's Diploma — unsupervised segmentation of credit-card usage behaviour to profile customer archetypes.",
        tags: ['Clustering', 'Unsupervised', 'Capstone'],
        github: gh('Credit-Card-Usage-Segmentation-Using-Unsupervised-Learning'),
      },
    ],
  },
  {
    id: 'astro',
    label: 'Computational Astro Projects',
    shortLabel: 'Astro',
    headline: 'Physics, simulated at scale',
    description:
      'Orbital mechanics, gravitational waves, stellar populations, and mission design — a physics degree put to computational work.',
    accent: 'cyan',
    projects: [
      {
        title: 'Interplanetary Mission Trajectory Simulator',
        description:
          'Trajectory design and transfer-window analysis for interplanetary missions — Lambert solvers, porkchop plots, and mission Δv budgets.',
        tags: ['Orbital Mechanics', 'Python', 'Simulation'],
        github: gh('Interplanetary-Mission-Trajectory-Simulator'),
        featured: true,
      },
      {
        title: 'Orbital Debris Dynamics Simulator',
        description:
          'Long-term debris propagation under J2, solar radiation pressure, and atmospheric drag — the engine behind my GLEX 2025 paper.',
        tags: ['Space Debris', 'Perturbations', 'Research'],
        github: gh('Orbital-Debris-Dynamics-Simulator'),
        featured: true,
      },
      {
        title: 'Satellite Orbit Propagation & Collision Avoidance',
        description:
          'End-to-end system propagating satellite orbits and flagging conjunctions for collision-avoidance planning.',
        tags: ['SGP4', 'Conjunctions', 'Python'],
        github: gh('Satellite-Orbit-Propogation-and-Collision-Avoidance-System'),
      },
      {
        title: 'Black Hole Mergers & Gravitational Waves',
        description:
          'Analysis of black-hole merger signals and gravitational-wave detection using open LIGO data.',
        tags: ['LIGO', 'Signal Processing', 'GW'],
        github: gh('Black-Hole-Mergers-and-Gravitational-Wave-Detection'),
      },
      {
        title: 'Black Hole Imaging with EHT Data',
        description:
          'Reconstructing black-hole images from Event Horizon Telescope interferometry data.',
        tags: ['EHT', 'Interferometry', 'Imaging'],
        github: gh('Black-Hole-Imaging-using-EHT-Data'),
      },
      {
        title: 'Celestial Sky Renderer',
        description:
          'Procedural renderer that draws the night sky — stars, constellations, and planets — for any time and place on Earth.',
        tags: ['Astropy', 'Visualization', 'Python'],
        github: gh('Celestial-Sky-Renderer'),
      },
      {
        title: 'Exoplanet Transit Prediction',
        description:
          'Detecting and predicting exoplanet transits from light-curve photometry.',
        tags: ['Kepler', 'Light Curves', 'ML'],
        github: gh('exoplanet-transit-prediction'),
      },
      {
        title: 'Variable Star Cross-Matching',
        description:
          'Cross-matching and characterizing variable stars across astronomical survey catalogues.',
        tags: ['Surveys', 'Catalogues', 'Python'],
        github: gh('Cross-Matching-and-Characterizing-Variable-Stars'),
      },
      {
        title: 'Interactive H-R Diagram Dashboard',
        description:
          'Interactive Hertzsprung–Russell diagram for exploring stellar populations and evolutionary tracks.',
        tags: ['Dashboard', 'Stellar Physics'],
        github: gh('interactive-hr-diagram-dashboard'),
      },
      {
        title: 'Asteroid Deflection System',
        description:
          'Modelling kinetic-impactor deflection strategies for hazardous near-Earth asteroids.',
        tags: ['Planetary Defense', 'Simulation'],
        github: gh('Asteroid-Deflection-System'),
      },
      {
        title: 'Stellar Temperature from Black-Body Fits',
        description:
          'Estimating stellar effective temperatures by fitting black-body curves to photometric data.',
        tags: ['Photometry', 'Curve Fitting'],
        github: gh('Stellar-Temperature-Estimation-using-Black-Body-Fits'),
      },
      {
        title: 'AstroPlanner',
        description:
          'Observational planning tool computing target visibility, altitude, and optimal observing windows.',
        tags: ['Observation', 'Astropy'],
        github: gh('AstroPlanner-Astronomical-Observational-Planner'),
      },
    ],
  },
  {
    id: 'quant',
    label: 'Quant Projects',
    shortLabel: 'Quant',
    headline: 'Markets, modelled properly',
    description:
      'Statistical arbitrage, derivatives pricing, volatility forecasting, and credit risk — where the math meets the money.',
    accent: 'emerald',
    projects: [
      {
        title: 'Statistical Arbitrage with ML',
        description:
          'Machine-learning-driven stat-arb research: pair selection, spread modelling, and signal generation with proper backtesting.',
        tags: ['Stat Arb', 'Backtesting', 'ML'],
        github: gh('Statistical-Arbitrage-with-ML'),
        featured: true,
      },
      {
        title: 'Advanced Black–Scholes Calculator',
        description:
          'Interactive options-pricing app with Greeks, sensitivity analysis, and risk visualizations.',
        tags: ['Options', 'Streamlit', 'NumPy'],
        github: gh('Black-Scholes-Calculator'),
        demo: 'https://advancedfinancialcalculator.streamlit.app/',
        featured: true,
      },
      {
        title: 'Econometric ML Stock Selection',
        description:
          'Blending econometric factors with machine learning for systematic stock selection.',
        tags: ['Econometrics', 'Factor Models'],
        github: gh('Econometric-ML-Stock-Selection'),
      },
      {
        title: 'Portfolio Optimization',
        description:
          'Mean-variance and beyond — constructing efficient portfolios with realistic constraints.',
        tags: ['Markowitz', 'Optimization'],
        github: gh('Portfolio-Optimization'),
      },
      {
        title: 'Volatility Forecasting',
        description:
          'Forecasting realized volatility with GARCH-family and ML models.',
        tags: ['GARCH', 'Time Series'],
        github: gh('forecasting-volatility'),
      },
      {
        title: 'Risk-Based Pricing',
        description:
          'Credit risk-based pricing models linking default probability to loan pricing.',
        tags: ['Credit Risk', 'Pricing'],
        github: gh('Risk-Based-Pricing'),
      },
      {
        title: 'Credit Scorecard Rating',
        description:
          'Building an interpretable credit scorecard with weight-of-evidence binning and logistic regression.',
        tags: ['Scorecards', 'WoE', 'Logistic'],
        github: gh('Scorecard-Rating'),
      },
      {
        title: 'Macroeconomic Variable Forecasting',
        description:
          'Forecasting macro indicators with econometric and machine-learning approaches.',
        tags: ['Macro', 'Forecasting'],
        github: gh('forecast-macroeconomic-variable'),
      },
      {
        title: 'Financial News Intelligence Dashboard',
        description:
          'NLP dashboard scoring financial news for sentiment and relevance in real time.',
        tags: ['NLP', 'Finance', 'Dashboard'],
        github: gh('Financial-News-Intelligence-Dashboard'),
      },
      {
        title: 'JPMorgan Quantitative Research Simulation',
        description:
          'Forage job simulation: loan default prediction, FICO bucketing, and gas-storage contract pricing.',
        tags: ['Credit Risk', 'Pricing', 'Forage'],
        github: gh('Forage-JPMorgan-Quantitative-Research-Job-Simulation'),
      },
    ],
  },
  {
    id: 'sports',
    label: 'Sports Analytics Projects',
    shortLabel: 'Sports',
    headline: 'The beautiful game, quantified',
    description:
      'Football simulations, F1 telemetry, and race strategy — sports fandom with a statistics engine underneath.',
    accent: 'amber',
    projects: [
      {
        title: 'FIFA World Cup 2026 Simulator',
        description:
          'Monte Carlo simulation of the 2026 World Cup — team strength modelling, group-stage dynamics, and knockout probabilities.',
        tags: ['Monte Carlo', 'Football', 'Python'],
        github: gh('FIFA-World-Cup-2026-Simulator'),
        featured: true,
      },
      {
        title: 'F1 Race Season Simulation 2026',
        description:
          'Season-long Formula 1 simulator modelling driver performance, reliability, and championship outcomes.',
        tags: ['F1', 'Simulation', 'Python'],
        github: gh('F1-Race-Season-Simulation-2026'),
        featured: true,
      },
      {
        title: 'F1 Telemetry 2026',
        description:
          'High-performance C++ telemetry processing for Formula 1 data streams.',
        tags: ['C++', 'Telemetry', 'F1'],
        github: gh('F1-Telemetry-2026'),
      },
      {
        title: 'BoxBox AI',
        description:
          'AI assistant for Formula 1 — race strategy questions answered with data.',
        tags: ['LLMs', 'F1', 'Python'],
        github: gh('boxboxai'),
      },
      {
        title: 'Football Data Platform',
        description:
          'TypeScript platform aggregating football data — fixtures, stats, and analysis in one place.',
        tags: ['TypeScript', 'Football', 'Data'],
        github: gh('Football-Data-Platform'),
      },
      {
        title: 'GoalMind AI',
        description:
          'ML-powered football match prediction and analysis engine.',
        tags: ['Prediction', 'Football', 'ML'],
        github: gh('GoalMind-AI'),
      },
      {
        title: 'Football Guessing Game',
        description:
          'Wordle-style daily football player guessing game built in TypeScript.',
        tags: ['TypeScript', 'Game', 'Web'],
        github: gh('Football-Guessing-Game'),
      },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);

/** Accent class maps — Tailwind needs literal class names. */
export const accentStyles: Record<
  string,
  { text: string; hoverText: string; bg: string; border: string; glow: string; dot: string }
> = {
  violet: {
    text: 'text-violet-300',
    hoverText: 'hover:text-violet-300',
    bg: 'bg-violet-500/10',
    border: 'hover:border-violet-400/40',
    glow: 'from-violet-500/20',
    dot: 'bg-violet-400',
  },
  cyan: {
    text: 'text-cyan-300',
    hoverText: 'hover:text-cyan-300',
    bg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-400/40',
    glow: 'from-cyan-500/20',
    dot: 'bg-cyan-400',
  },
  emerald: {
    text: 'text-emerald-300',
    hoverText: 'hover:text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-400/40',
    glow: 'from-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  amber: {
    text: 'text-amber-300',
    hoverText: 'hover:text-amber-300',
    bg: 'bg-amber-500/10',
    border: 'hover:border-amber-400/40',
    glow: 'from-amber-500/20',
    dot: 'bg-amber-400',
  },
};
