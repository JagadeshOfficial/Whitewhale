import { Rocket, BarChart2, Repeat, Target, BrainCircuit, Users } from 'lucide-react';
import type { Service, Insight, TeamMember, PortfolioCompany, MediaMention } from './types';
import { placeholderImages } from './constants';

export const services: Service[] = [
  {
    title: 'Venture Capital',
    description: 'Investing in early-stage, visionary companies that are set to redefine their industries.',
    longDescription: 'Our Venture Capital arm focuses on identifying and nurturing high-growth, early-stage companies with the potential for significant market disruption. We provide not just capital, but also strategic guidance and access to our extensive network to help our portfolio companies achieve their full potential. We look for innovative ideas, strong leadership, and scalable business models.',
    icon: Rocket,
    href: '/venture-capital',
  },
  {
    title: 'Equity Markets',
    description: 'Strategic investments in public markets to generate consistent, long-term growth.',
    longDescription: 'In the public Equity Markets, our strategy is centered around fundamental analysis and a long-term perspective. We invest in high-quality businesses with durable competitive advantages, strong management teams, and attractive valuations. Our goal is to compound capital at superior rates over the long haul, navigating market cycles with discipline and patience.',
    icon: BarChart2,
    href: '/equity-markets',
  },
  {
    title: 'Secondaries',
    description: 'Providing liquidity solutions in the private markets for investors and founders.',
    longDescription: 'Our Secondaries platform offers liquidity solutions to private market stakeholders, including limited partners, founders, and early employees. We acquire interests in venture-backed companies and venture capital funds, providing a crucial mechanism for realizing value prior to a traditional exit. We act as a trusted partner, facilitating smooth and efficient transactions.',
    icon: Repeat,
    href: '/secondaries',
  },
];

export const investmentApproach = [
    {
      title: "Data-Driven Decisions",
      description: "Our investment theses are built on rigorous quantitative and qualitative analysis, ensuring we identify true market leaders.",
      icon: BarChart2,
    },
    {
      title: "Long-Term Partnerships",
      description: "We see ourselves as partners, not just investors. We work closely with management teams to build enduring value.",
      icon: Users,
    },
    {
      title: "Sector-Specific Expertise",
      description: "Our team possesses deep domain knowledge across key technology and growth sectors, from AI to life sciences.",
      icon: BrainCircuit,
    },
    {
      title: "Global Vision",
      description: "We identify and invest in opportunities across the globe, recognizing that innovation knows no borders.",
      icon: Target,
    },
]

export const insights: Insight[] = [
  {
    id: '1',
    title: 'The Future of AI in FinTech: A 2024 Perspective',
    description: 'An in-depth analysis of how artificial intelligence is reshaping the financial technology landscape, from automated trading to personalized banking.',
    imageUrl: placeholderImages.insight1.imageUrl,
    imageHint: placeholderImages.insight1.imageHint,
    category: 'AI & Machine Learning',
    date: 'August 15, 2024',
  },
  {
    id: '2',
    title: 'Navigating the Green Transition: Investment Opportunities in Renewable Energy',
    description: 'Exploring the burgeoning opportunities within the renewable energy sector as the world shifts towards a more sustainable future.',
    imageUrl: placeholderImages.insight2.imageUrl,
    imageHint: placeholderImages.insight2.imageHint,
    category: 'Sustainability',
    date: 'July 28, 2024',
  },
  {
    id: '3',
    title: 'Understanding the Secondary Market Boom',
    description: 'A look into why the secondary market for private assets is experiencing unprecedented growth and what it means for investors.',
    imageUrl: placeholderImages.insight3.imageUrl,
    imageHint: placeholderImages.insight3.imageHint,
    category: 'Secondaries',
    date: 'July 10, 2024',
  },
  {
    id: '4',
    title: 'The Metaverse: Hype vs. Reality for Enterprise',
    description: 'Cutting through the noise to identify real-world enterprise applications and investment theses for the metaverse.',
    imageUrl: placeholderImages.insight4.imageUrl,
    imageHint: placeholderImages.insight4.imageHint,
    category: 'Future Tech',
    date: 'June 22, 2024',
  },
  {
    id: '5',
    title: 'Biotech Breakthroughs: Where We\'re Placing Our Bets',
    description: 'An overview of the most promising areas in biotechnology, from gene editing to personalized medicine.',
    imageUrl: placeholderImages.insight5.imageUrl,
    imageHint: placeholderImages.insight5.imageHint,
    category: 'Biotechnology',
    date: 'June 5, 2024',
  },
  {
    id: '6',
    title: 'The Resilience of SaaS: A Post-Pandemic Analysis',
    description: 'SaaS business models have shown remarkable resilience. We analyze the key factors and future growth drivers for the sector.',
    imageUrl: placeholderImages.insight6.imageUrl,
    imageHint: placeholderImages.insight6.imageHint,
    category: 'Venture Capital',
    date: 'May 21, 2024',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Eleanor Vance',
    role: 'Managing Partner',
    imageUrl: placeholderImages.teamMember1.imageUrl,
    imageHint: placeholderImages.teamMember1.imageHint,
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Partner, Head of Venture',
    imageUrl: placeholderImages.teamMember2.imageUrl,
    imageHint: placeholderImages.teamMember2.imageHint,
  },
  {
    id: '3',
    name: 'Isabelle Rossi',
    role: 'Partner, Head of Equities',
    imageUrl: placeholderImages.teamMember3.imageUrl,
    imageHint: placeholderImages.teamMember3.imageHint,
  },
  {
    id: '4',
    name: 'Julian Chen',
    role: 'Principal, Secondaries',
    imageUrl: placeholderImages.teamMember4.imageUrl,
    imageHint: placeholderImages.teamMember4.imageHint,
  },
];

export const portfolioCompanies: PortfolioCompany[] = [
    { id: '1', name: "InnovateAI", logoUrl: placeholderImages.portfolioLogo1.imageUrl, logoHint: placeholderImages.portfolioLogo1.imageHint },
    { id: '2', name: "QuantumLeap", logoUrl: placeholderImages.portfolioLogo2.imageUrl, logoHint: placeholderImages.portfolioLogo2.imageHint },
    { id: '3', name: "BioGenex", logoUrl: placeholderImages.portfolioLogo3.imageUrl, logoHint: placeholderImages.portfolioLogo3.imageHint },
    { id: '4', name: "FutureSynth", logoUrl: placeholderImages.portfolioLogo4.imageUrl, logoHint: placeholderImages.portfolioLogo4.imageHint },
    { id: '5', name: "NextGen Mobility", logoUrl: placeholderImages.portfolioLogo5.imageUrl, logoHint: placeholderImages.portfolioLogo5.imageHint },
    { id: '6', name: "DataWeave", logoUrl: placeholderImages.portfolioLogo6.imageUrl, logoHint: placeholderImages.portfolioLogo6.imageHint },
]

export const mediaMentions: MediaMention[] = [
    {
        id: '1',
        title: 'Investor Insights Hub Announces $500M Fund for AI Startups',
        publication: 'TechCrunch',
        date: 'August 1, 2024',
        link: '#',
        imageUrl: placeholderImages.mediaPublication1.imageUrl,
        imageHint: placeholderImages.mediaPublication1.imageHint,
    },
    {
        id: '2',
        title: 'The Vision of Eleanor Vance: A New Era of Venture Capital',
        publication: 'Forbes',
        date: 'July 20, 2024',
        link: '#',
        imageUrl: placeholderImages.mediaPublication2.imageUrl,
        imageHint: placeholderImages.mediaPublication2.imageHint,
    },
    {
        id: '3',
        title: 'How Secondary Markets are Unlocking Trillions in Value',
        publication: 'The Wall Street Journal',
        date: 'July 5, 2024',
        link: '#',
        imageUrl: placeholderImages.mediaPublication3.imageUrl,
        imageHint: placeholderImages.mediaPublication3.imageHint,
    }
]
