
import { Code, Smartphone, BrainCircuit, Target, Users, BarChart2, Globe, Cloud, PenTool, Cpu, Shield, DollarSign, Handshake, Lightbulb, TrendingUp, Bug, Database, Eye, Lock, Palette, Search, Server } from 'lucide-react';
import type { Service, TeamMember, Client, JobOpening, CaseStudy } from './types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites, e-commerce stores, and content management systems.',
    longDescription: 'We build beautiful, high-performance websites and web applications that are tailored to your specific business needs. Our team of expert developers uses the latest technologies to create solutions that are scalable, secure, and optimized for performance.',
    icon: Globe,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    longDescription: 'We design and develop mobile apps that offer a rich user experience and drive engagement. From concept to launch, we are your trusted partner in creating intuitive and high-performance mobile applications for all platforms.',
    icon: Smartphone,
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User interface and user experience design for websites and apps.',
    longDescription: 'We create designs that not only look good but also drive business results. Our human-centered approach ensures that your users will have a seamless and engaging experience that is intuitive and easy to use.',
    icon: PenTool,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud computing, storage, and migration solutions.',
    longDescription: 'We help you leverage the full potential of the cloud to drive innovation, improve agility, and accelerate business growth. Our team of certified cloud experts is here to guide you every step of the way.',
    icon: Cloud,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'artificial-intelligence-machine-learning',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'AI tools, chatbots, and predictive analytics.',
    longDescription: 'We help you leverage the power of AI to automate processes, gain insights from your data, and create intelligent products that drive business value. Our team of AI and machine learning experts has a proven track record of success.',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Cybersecurity assessments, penetration testing, and incident response.',
    longDescription: 'We provide comprehensive cybersecurity solutions to protect your business from modern threats. Our team of certified cybersecurity experts is here to help you stay ahead of the curve and keep your data safe.',
    icon: Shield,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    description: "Investing in and mentoring early-stage startups.",
    longDescription: "We are more than just investors; we are partners. We work closely with our portfolio companies to help them build successful businesses and create long-term value.",
    icon: BrainCircuit,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
];

export const investmentApproach = [
  {
    title: "Innovative Ideas",
    description: "We invest in disruptive ideas that have the potential to create new markets and challenge the status quo.",
    icon: Lightbulb,
  },
  {
    title: "Strong Teams",
    description: "We back passionate and resilient founders with a proven track record of success and a clear vision for the future.",
    icon: Handshake,
  },
  {
    title: "Scalable Markets",
    description: "We look for startups that are targeting large and growing markets with a clear path to monetization and profitability.",
    icon: TrendingUp,
  },
  {
    title: "Early-Stage Focus",
    description: "We invest in early-stage startups, from pre-seed to Series A, and provide them with the resources they need to succeed.",
    icon: DollarSign,
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Eleanor Vance',
    role: 'CEO & Founder',
    imageUrl: 'https://picsum.photos/seed/1/300/300',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'CTO',
    imageUrl: 'https://picsum.photos/seed/2/300/300',
  },
  {
    id: '3',
    name: 'Isabelle Rossi',
    role: 'Head of Product',
    imageUrl: 'https://picsum.photos/seed/3/300/300',
  },
  {
    id: '4',
    name: 'Julian Chen',
    role: 'Lead Engineer',
    imageUrl: 'https://picsum.photos/seed/4/300/300',
  },
];

export const clients: Client[] = [
    { id: '1', name: "InnovateAI", logoUrl: "https://logodix.com/logo/23577.png"},
    { id: '2', name: "QuantumLeap", logoUrl: "https://logodix.com/logo/20126.png"},
    { id: '3', name: "BioGenex", logoUrl: "https://logodix.com/logo/18855.png"},
    { id: '4', name: "FutureSynth", logoUrl: "https://logodix.com/logo/23871.png"},
    { id: '5', name: "NextGen Mobility", logoUrl: "https://logodix.com/logo/25619.png"},
    { id: '6', name: "DataWeave", logoUrl: "https://logodix.com/logo/28434.png"},
]

export const caseStudies: CaseStudy[] = [
  {
    id: "e-commerce-boost",
    title: "Boosting E-commerce Sales by 300% for Retailify",
    client: "Retailify",
    description: "A comprehensive overhaul of Retailify's online presence, leading to a massive increase in sales and customer engagement.",
    longDescription: "Retailify's existing e-commerce platform was outdated, slow, and not mobile-friendly. They were losing customers and revenue due to a poor user experience. We designed and developed a new, modern e-commerce platform from the ground up using Next.js and Shopify. The new site is fast, responsive, and features a streamlined checkout process. We also implemented a new SEO strategy to improve their search engine rankings.",
    results: [
      "300% increase in online sales within 6 months.",
      "50% reduction in page load times.",
      "40% increase in mobile conversion rates.",
      "Top 3 ranking on Google for key product categories."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: "fintech-ai-platform",
    title: "Building a Scalable AI Platform for FinSecure",
    client: "FinSecure",
    description: "Delivering a cutting-edge AI platform for a leading FinTech company to enhance their fraud detection capabilities.",
    longDescription: "FinSecure needed to improve the accuracy and speed of their fraud detection system to combat increasingly sophisticated fraudulent activities. Our team developed a real-time AI-powered fraud detection platform using machine learning models. The system analyzes transaction data in real-time to identify and flag suspicious activities, significantly reducing false positives and improving detection rates.",
    results: [
      "95% accuracy in fraud detection.",
      "Reduced false positives by 60%.",
      "Real-time processing of over 10,000 transactions per second.",
      "Enhanced security and trust for millions of users."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QUklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww'
  },
  {
    id: "healthcare-mobile-app",
    title: "Cross-Platform Mobile App for HealthSphere",
    client: "HealthSphere",
    description: "Creating an intuitive mobile app to help patients manage their health records and appointments.",
    longDescription: "HealthSphere wanted to provide their patients with a convenient way to access their health information, book appointments, and communicate with their doctors. They needed a secure and user-friendly app that worked on both iOS and Android. We developed a cross-platform mobile app using React Native that allows patients to securely access their medical records, schedule appointments, and communicate with their healthcare providers. The app integrates with their existing EHR system and features a clean, intuitive interface.",
    results: [
      "Over 100,000 downloads in the first year.",
      "Improved patient engagement and satisfaction.",
      "Streamlined appointment booking process, reducing administrative overhead.",
      "Secure and HIPAA-compliant data handling."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
  }
];
