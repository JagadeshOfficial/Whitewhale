import { Code, Smartphone, BrainCircuit, Target, Users, BarChart2 } from 'lucide-react';
import type { Service, Insight, TeamMember, PortfolioCompany, MediaMention } from './types';
import { placeholderImages } from './constants';

export const services: Service[] = [
  {
    title: 'Custom Software',
    description: 'Bespoke software solutions tailored to your unique business needs and challenges.',
    longDescription: 'Our custom software development services are designed to bring your vision to life. We work closely with you to understand your requirements and build scalable, secure, and high-performance applications that drive business growth. From enterprise systems to specialized tools, we deliver solutions that provide a competitive edge.',
    icon: Code,
    href: '/custom-software',
  },
  {
    title: 'Web & Mobile Apps',
    description: 'Engaging and responsive applications for web and mobile platforms.',
    longDescription: 'We build beautiful and intuitive web and mobile applications that captivate users and deliver exceptional experiences. Our team leverages the latest technologies to create cross-platform apps that are fast, reliable, and easy to use. Whether it\'s a consumer-facing app or an internal business tool, we have you covered.',
    icon: Smartphone,
    href: '/web-mobile-apps',
  },
  {
    title: 'AI Solutions',
    description: 'Integrating artificial intelligence to automate processes and unlock insights.',
    longDescription: 'Harness the power of Artificial Intelligence with our custom AI and machine learning solutions. We help businesses automate complex processes, gain valuable insights from data, and create intelligent products. From natural language processing to predictive analytics, we build AI-driven systems that deliver tangible results.',
    icon: BrainCircuit,
    href: '/ai-solutions',
  },
];

export const investmentApproach = [
    {
      title: "Agile Development",
      description: "Our iterative approach ensures we can adapt to changing requirements and deliver value quickly and efficiently.",
      icon: Target,
    },
    {
      title: "User-Centric Design",
      description: "We place users at the center of our design process, creating intuitive and engaging experiences.",
      icon: Users,
    },
    {
      title: "Scalable Architecture",
      description: "We build robust and scalable systems that can grow with your business and handle increasing demand.",
      icon: BarChart2,
    },
    {
      title: "Cutting-Edge Technology",
      description: "We stay at the forefront of technology to deliver modern, high-performance solutions.",
      icon: BrainCircuit,
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
    title: 'Building Scalable Web Apps with Next.js',
    description: 'Exploring the advantages of using Next.js for modern web development and best practices for building scalable applications.',
    imageUrl: placeholderImages.insight2.imageUrl,
    imageHint: placeholderImages.insight2.imageHint,
    category: 'Web Development',
    date: 'July 28, 2024',
  },
  {
    id: '3',
    title: 'The Importance of UX in Enterprise Software',
    description: 'A look into why user experience is critical for the success of enterprise applications and how to design for usability.',
    imageUrl: placeholderImages.insight3.imageUrl,
    imageHint: placeholderImages.insight3.imageHint,
    category: 'UX Design',
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
    title: 'AI-Powered Summarization: A Case Study',
    description: 'An overview of how we built an AI-powered text summarization tool and the challenges we overcame.',
    imageUrl: placeholderImages.insight5.imageUrl,
    imageHint: placeholderImages.insight5.imageHint,
    category: 'AI Solutions',
    date: 'June 5, 2024',
  },
  {
    id: '6',
    title: 'Choosing the Right Tech Stack for Your Mobile App',
    description: 'A guide to help you decide on the best technology stack for your mobile application based on your needs and goals.',
    imageUrl: placeholderImages.insight6.imageUrl,
    imageHint: placeholderImages.insight6.imageHint,
    category: 'Mobile Development',
    date: 'May 21, 2024',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Eleanor Vance',
    role: 'CEO & Founder',
    imageUrl: placeholderImages.teamMember1.imageUrl,
    imageHint: placeholderImages.teamMember1.imageHint,
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'CTO',
    imageUrl: placeholderImages.teamMember2.imageUrl,
    imageHint: placeholderImages.teamMember2.imageHint,
  },
  {
    id: '3',
    name: 'Isabelle Rossi',
    role: 'Head of Product',
    imageUrl: placeholderImages.teamMember3.imageUrl,
    imageHint: placeholderImages.teamMember3.imageHint,
  },
  {
    id: '4',
    name: 'Julian Chen',
    role: 'Lead Engineer',
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
        title: 'Case Study: How We Boosted E-commerce Sales by 300%',
        publication: 'Client: Retailify',
        date: 'August 1, 2024',
        link: '#',
        imageUrl: placeholderImages.mediaPublication1.imageUrl,
        imageHint: placeholderImages.mediaPublication1.imageHint,
    },
    {
        id: '2',
        title: 'Building a Scalable AI Platform for a FinTech Leader',
        publication: 'Client: FinSecure',
        date: 'July 20, 2024',
        link: '#',
        imageUrl: placeholderImages.mediaPublication2.imageUrl,
        imageHint: placeholderImages.mediaPublication2.imageHint,
    },
    {
        id: '3',
        title: 'Developing a Cross-Platform Mobile App for Healthcare',
        publication: 'Client: HealthSphere',
        date: 'July 5, 2024',
        link: '#',
        imageUrl: placeholderImages.mediaPublication3.imageUrl,
        imageHint: placeholderImages.mediaPublication3.imageHint,
    }
]
