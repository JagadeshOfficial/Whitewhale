import { Code, Smartphone, BrainCircuit, Target, Users, BarChart2, Globe, Cloud, PenTool, Cpu, Shield, Megaphone, GitMerge, Bitcoin, Building, Plug, ClipboardCheck, Briefcase, PieChart, Router, History, Layers, AppWindow, Database } from 'lucide-react';
import type { Service, Insight, TeamMember, PortfolioCompany, MediaMention } from './types';
import { placeholderImages } from './image-map';

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom websites, e-commerce, CMS platforms.',
    longDescription: 'We build beautiful and intuitive web and mobile applications that captivate users and deliver exceptional experiences. Our team leverages the latest technologies to create cross-platform apps that are fast, reliable, and easy to use. Whether it\'s a consumer-facing app or an internal business tool, we have you covered.',
    icon: Globe,
    href: '/web-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Android, iOS, and cross-platform mobile applications.',
    longDescription: 'We build beautiful and intuitive web and mobile applications that captivate users and deliver exceptional experiences. Our team leverages the latest technologies to create cross-platform apps that are fast, reliable, and easy to use. Whether it\'s a consumer-facing app or an internal business tool, we have you covered.',
    icon: Smartphone,
    href: '/mobile-app-development',
  },
  {
    title: 'Cloud Services',
    description: 'Cloud computing, storage, and migration solutions.',
    longDescription: 'Harness the power of the cloud with our comprehensive cloud services. We offer cloud strategy, migration, and management services to help you build a scalable and resilient infrastructure. Our expertise spans across major cloud platforms, including AWS, Azure, and Google Cloud.',
    icon: Cloud,
    href: '/cloud-services',
  },
  {
    title: 'UI/UX Design',
    description: 'User interface and user experience design for websites and apps.',
    longDescription: 'Great software is more than just code; it\'s about creating a seamless and intuitive user experience. Our UI/UX design team works to understand your users and design interfaces that are not only beautiful but also easy to use and navigate.',
    icon: PenTool,
    href: '/ui-ux-design',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'AI tools, chatbots, and predictive analytics.',
    longDescription: 'Harness the power of Artificial Intelligence with our custom AI and machine learning solutions. We help businesses automate complex processes, gain valuable insights from data, and create intelligent products. From natural language processing to predictive analytics, we build AI-driven systems that deliver tangible results.',
    icon: Cpu,
    href: '/artificial-intelligence-machine-learning',
  },
  {
    title: 'Cybersecurity',
    description: 'Data protection, security audits, and threat prevention.',
    longDescription: 'In an increasingly digital world, security is paramount. Our cybersecurity services are designed to protect your data and infrastructure from evolving threats. We offer security audits, penetration testing, and a range of other services to help you stay ahead of the curve.',
    icon: Shield,
    href: '/cybersecurity',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, social media marketing, and content strategies.',
    longDescription: 'Your product is only as good as your ability to reach your target audience. Our digital marketing services can help you connect with your customers and grow your business. We offer a range of services, including SEO, social media marketing, and content strategy.',
    icon: Megaphone,
    href: '/digital-marketing',
  },
  {
    title: 'DevOps Services',
    description: 'CI/CD pipelines, infrastructure as code, and containerization.',
    longDescription: 'Streamline your development process and accelerate your time to market with our DevOps services. We can help you implement CI/CD pipelines, automate your infrastructure, and leverage containerization technologies like Docker and Kubernetes.',
    icon: GitMerge,
    href: '/devops-services',
  },
  {
    title: 'Blockchain Solutions',
    description: 'Decentralized applications, smart contracts, and cryptocurrency platforms.',
    longDescription: 'Explore the potential of blockchain technology with our custom blockchain solutions. We can help you build decentralized applications, smart contracts, and cryptocurrency platforms that are secure, transparent, and immutable.',
    icon: Bitcoin,
    href: '/blockchain-solutions',
  },
  {
    title: 'Enterprise Software Development',
    description: 'Large-scale software solutions for enterprise environments.',
    longDescription: 'We specialize in building robust and scalable software solutions for large enterprises. Our team has the expertise to tackle complex challenges and deliver software that meets the demands of a modern enterprise environment.',
    icon: Building,
    href: '/enterprise-software-development',
  },
  {
    title: 'API Development and Integration',
    description: 'Connecting your software systems and enabling new capabilities.',
    longDescription: 'Our API development and integration services can help you unlock new capabilities and create a more connected software ecosystem. We design and build APIs that are secure, scalable, and easy to use.',
    icon: Plug,
    href: '/api-development-and-integration',
  },
  {
    title: 'Quality Assurance and Testing',
    description: 'Ensuring your software is reliable, secure, and performant.',
    longDescription: 'Our quality assurance and testing services are designed to give you confidence in your software. We offer a range of testing services, including functional testing, performance testing, and security testing.',
    icon: ClipboardCheck,
    href: '/quality-assurance-and-testing',
  },
  {
    title: 'IT Consulting and Strategy',
    description: 'Expert guidance to help you navigate the ever-changing technology landscape.',
    longDescription: 'Our IT consulting and strategy services can help you make the right technology decisions for your business. We provide expert guidance on everything from technology selection to digital transformation.',
    icon: Briefcase,
    href: '/it-consulting-and-strategy',
  },
  {
    title: 'Data Analytics and Business Intelligence',
    description: 'Turning your data into actionable insights.',
    longDescription: 'Unlock the power of your data with our data analytics and business intelligence services. We can help you collect, analyze, and visualize your data to gain valuable insights and make better business decisions.',
    icon: PieChart,
    href: '/data-analytics-and-business-intelligence',
  },
  {
    title: 'Internet of Things (IoT) Development',
    description: 'Connecting the physical and digital worlds.',
    longDescription: 'Our IoT development services can help you create innovative products and services that connect the physical and digital worlds. We have the expertise to build everything from smart home devices to industrial IoT solutions.',
    icon: Router,
    href: '/internet-of-things-iot-development',
  },
  {
    title: 'Legacy System Modernization',
    description: 'Bringing your old software systems into the modern era.',
    longDescription: 'Don\'t let your legacy systems hold you back. Our legacy system modernization services can help you update your old software systems to take advantage of modern technologies and improve performance, security, and scalability.',
    icon: History,
    href: '/legacy-system-modernization',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end development of your web and mobile applications.',
    longDescription: 'Our full stack development services cover everything from the front-end to the back-end, ensuring a seamless and integrated solution. We have the expertise to build complex applications from the ground up.',
    icon: Layers,
    href: '/full-stack-development',
  },
  {
    title: 'Frontend Development',
    description: 'Creating beautiful and intuitive user interfaces.',
    longDescription: 'Our front-end development team specializes in creating user interfaces that are not only visually appealing but also highly functional and easy to use. We leverage the latest front-end technologies to build experiences that your users will love.',
    icon: AppWindow,
    href: '/frontend-development',
  },
  {
    title: 'Backend Development',
    description: 'Building the robust and scalable foundation for your applications.',
    longDescription: 'Our back-end development services provide the foundation for your applications. We build robust and scalable back-end systems that can handle high traffic and complex business logic.',
    icon: Database,
    href: '/backend-development',
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
