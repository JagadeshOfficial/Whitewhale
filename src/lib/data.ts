
import { Code, Smartphone, BrainCircuit, Target, Users, BarChart2, Globe, Cloud, PenTool, Cpu, Shield, ArrowRight } from 'lucide-react';
import type { Service, Insight, TeamMember, Client, MediaMention, Project, CaseStudy, JobOpening } from './types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites, e-commerce, CMS platforms.',
    longDescription: 'We build beautiful and intuitive web and mobile applications that captivate users and deliver exceptional experiences. Our team leverages the latest technologies to create cross-platform apps that are fast, reliable, and easy to use. Whether it\'s a consumer-facing app or an internal business tool, we have you covered.',
    icon: Globe,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Android, iOS, and cross-platform mobile applications.',
    longDescription: 'We build beautiful and intuitive web and mobile applications that captivate users and deliver exceptional experiences. Our team leverages the latest technologies to create cross-platform apps that are fast, reliable, and easy to use. Whether it\'s a consumer-facing app or an internal business tool, we have you covered.',
    icon: Smartphone,
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud computing, storage, and migration solutions.',
    longDescription: 'Harness the power of the cloud with our comprehensive cloud services. We offer cloud strategy, migration, and management services to help you build a scalable and resilient infrastructure. Our expertise spans across major cloud platforms, including AWS, Azure, and Google Cloud.',
    icon: Cloud,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User interface and user experience design for websites and apps.',
    longDescription: 'Great software is more than just code; it\'s about creating a seamless and intuitive user experience. Our UI/UX design team works to understand your users and design interfaces that are not only beautiful but also easy to use and navigate.',
    icon: PenTool,
  },
  {
    id: 'artificial-intelligence-machine-learning',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'AI tools, chatbots, and predictive analytics.',
    longDescription: 'Harness the power of Artificial Intelligence with our custom AI and machine learning solutions. We help businesses automate complex processes, gain valuable insights from data, and create intelligent products. From natural language processing to predictive analytics, we build AI-driven systems that deliver tangible results.',
    icon: Cpu,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Data protection, security audits, and threat prevention.',
    longDescription: 'In an increasingly digital world, security is paramount. Our cybersecurity services are designed to protect your data and infrastructure from evolving threats. We offer security audits, penetration testing, and a range of other services to help you stay ahead of the curve.',
    icon: Shield,
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    description: "Investing in visionary founders building the future.",
    longDescription: "We partner with early-stage, mission-driven founders who are creating the next generation of transformative companies. Our approach goes beyond capital, providing hands-on support in strategy, product, and growth.",
    icon: BrainCircuit
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
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QUklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww',
    category: 'AI & Machine Learning',
    date: 'August 15, 2024',
  },
  {
    id: '2',
    title: 'Building Scalable Web Apps with Next.js',
    description: 'Exploring the advantages of using Next.js for modern web development and best practices for building scalable applications.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww',
    category: 'Web Development',
    date: 'July 28, 2024',
  },
  {
    id: '3',
    title: 'The Importance of UX in Enterprise Software',
    description: 'A look into why user experience is critical for the success of enterprise applications and how to design for usability.',
    imageUrl: 'https://images.unsplash.com/photo-1559028005-4c1b1050b48b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VUlTJTIwZGVzaWdufGVufDB8fDB8fHww',
    category: 'UX Design',
    date: 'July 10, 2024',
  },
];

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

export const mediaMentions: MediaMention[] = [
    {
        id: '1',
        title: 'Case Study: How We Boosted E-commerce Sales by 300%',
        publication: 'Client: Retailify',
        date: 'August 1, 2024',
        link: '#',
        imageUrl: 'https://logodix.com/logo/100.png',
    },
    {
        id: '2',
        title: 'Building a Scalable AI Platform for a FinTech Leader',
        publication: 'Client: FinSecure',
        date: 'July 20, 2024',
        link: '#',
        imageUrl: 'https://logodix.com/logo/12.png',
    },
    {
        id: '3',
        title: 'Developing a Cross-Platform Mobile App for Healthcare',
        publication: 'Client: HealthSphere',
        date: 'July 5, 2024',
        link: '#',
        imageUrl: 'https://logodix.com/logo/42.png',
    }
]

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'A feature-rich online store with a custom CMS and payment gateway integration.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'E-commerce',
  },
  {
    id: '2',
    name: 'FinTech Mobile App',
    description: 'An iOS and Android app for personal finance management and investment tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
    category: 'FinTech',
  },
  {
    id: '3',
    name: 'AI-Powered Analytics Dashboard',
    description: 'A web-based platform that uses machine learning to provide business intelligence.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QUklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww',
    category: 'AI & Machine Learning',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "e-commerce-boost",
    title: "Boosting E-commerce Sales by 300% for Retailify",
    client: "Retailify",
    description: "A comprehensive overhaul of Retailify's online presence, leading to a massive increase in sales and customer engagement.",
    challenge: "Retailify's existing e-commerce platform was outdated, slow, and not mobile-friendly. They were losing customers and revenue due to a poor user experience.",
    solution: "We designed and developed a new, modern e-commerce platform from the ground up using Next.js and Shopify. The new site is fast, responsive, and features a streamlined checkout process. We also implemented a new SEO strategy to improve their search engine rankings.",
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
    challenge: "FinSecure needed to improve the accuracy and speed of their fraud detection system to combat increasingly sophisticated fraudulent activities.",
    solution: "Our team developed a real-time AI-powered fraud detection platform using machine learning models. The system analyzes transaction data in real-time to identify and flag suspicious activities, significantly reducing false positives and improving detection rates.",
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
    challenge: "HealthSphere wanted to provide their patients with a convenient way to access their health information, book appointments, and communicate with their doctors. They needed a secure and user-friendly app that worked on both iOS and Android.",
    solution: "We developed a cross-platform mobile app using React Native that allows patients to securely access their medical records, schedule appointments, and communicate with their healthcare providers. The app integrates with their existing EHR system and features a clean, intuitive interface.",
    results: [
      "Over 100,000 downloads in the first year.",
      "Improved patient engagement and satisfaction.",
      "Streamlined appointment booking process, reducing administrative overhead.",
      "Secure and HIPAA-compliant data handling."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
  }
];

export const jobOpenings: JobOpening[] = [
  {
    id: "frontend-engineer",
    title: "Senior Frontend Engineer",
    location: "Remote",
    department: "Engineering",
    description: "We are looking for an experienced Frontend Engineer to join our team. You will be responsible for building and maintaining our web applications, and working with the latest technologies.",
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability",
    ],
    qualifications: [
      "5+ years of experience in frontend development",
      "Proficient in React, Next.js, and TypeScript",
      "Experience with Tailwind CSS",
      "Strong understanding of web performance",
    ]
  },
  {
    id: "backend-engineer",
    title: "Senior Backend Engineer",
    location: "Hyderabad, India",
    department: "Engineering",
    description: "We are seeking a Senior Backend Engineer to design, build, and maintain the server-side of our web applications. You will work with a team of talented engineers to deliver high-quality software.",
    responsibilities: [
      "Design and implement scalable and reliable backend services",
      "Work with databases, APIs, and other backend technologies",
      "Collaborate with front-end developers and other team members",
      "Write clean, maintainable, and testable code",
    ],
    qualifications: [
      "5+ years of experience in backend development",
      "Proficient in Node.js, Python, or Go",
      "Experience with SQL and NoSQL databases",
      "Knowledge of cloud platforms like AWS or Google Cloud",
    ]
  },
    {
    id: "product-manager",
    title: "Product Manager",
    location: "Springfield, USA",
    department: "Product",
    description: "We're looking for a Product Manager to guide the development of our products. You'll be responsible for the product planning and execution throughout the Product Lifecycle.",
    responsibilities: [
      "Define the product vision, roadmap, and growth opportunities",
      "Gather and prioritize product and customer requirements",
      "Work closely with engineering, sales, marketing, and support to ensure revenue and customer satisfaction goals are met",
      "Act as a product evangelist to build awareness and understanding",
    ],
    qualifications: [
      "3+ years of experience in product management",
      "Experience in a software development environment",
      "Excellent written and verbal communication skills",
      "Proven ability to influence cross-functional teams without formal authority",
    ]
  }
];
