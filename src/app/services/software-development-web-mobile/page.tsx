
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Code, Smartphone, Cloud, Cpu, Shield, Box, Globe } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Software Development & Web/Mobile Apps | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Transform your ideas into scalable digital solutions. We build high-performance, secure, and future-ready applications tailored to your business goals.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'software-development-web-mobile');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="/videos/contact-background.mp4"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Software Development Services</h2>
            <p className="mt-4 text-lg">
              Transform your ideas into scalable digital solutions. We build high-performance, secure, and future-ready applications tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Modular Sections based on longDescription */}

      {/* Custom Software Development */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="A developer coding a custom software solution"
        imagePosition="left"
        title="Custom Software Development"
        text="End-to-end design and development of enterprise-grade software using modern frameworks like Spring Boot, .NET, and React. We deliver reliable solutions that streamline operations and boost productivity."
        imageHeight={300}
      />

      {/* Web Application Development */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Pexels image for web app development
        imageAlt="Web Application Development"
        imagePosition="right"
        title="Web Application Development"
        text="From dynamic portals to full-stack platforms, our experts craft responsive, secure, and cloud-ready web applications that adapt to any device and user demand."
        imageHeight={300}
      />

      {/* Mobile App Development */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Pexels image for mobile app development
        imageAlt="Mobile App Development"
        imagePosition="left"
        title="Mobile App Development"
        text="Native (Android/iOS) and cross-platform apps built for performance and user engagement. We combine sleek UI with robust backend integration."
        imageHeight={300}
      />

      {/* API & Microservices Development */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Pexels image for API & Microservices
        imageAlt="API & Microservices Development"
        imagePosition="right"
        title="API & Microservices Development"
        text="Scalable backend architectures with REST and GraphQL APIs, powered by microservices to ensure flexibility, modularity, and fast deployments."
        imageHeight={300}
      />

      {/* Software Maintenance & Support */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Pexels image for software maintenance
        imageAlt="Software Maintenance & Support"
        imagePosition="left"
        title="Software Maintenance & Support"
        text="Continuous monitoring, updates, and enhancements to keep your applications running smoothly and securely."
        imageHeight={300}
      />

      {/* Our Approach Section - Renamed and content adjusted */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Unified Development Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a comprehensive and agile approach to deliver robust and innovative software solutions across all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Discovery & Planning</h3>
              <p className="text-muted-foreground">In-depth analysis of requirements, strategic planning, and technology selection.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. Design & Architecture</h3>
              <p className="text-muted-foreground">Crafting scalable architectures and intuitive user experiences.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Development & Integration</h3>
              <p className="text-muted-foreground">Building high-quality code and integrating seamlessly with existing systems.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. Quality Assurance</h3>
              <p className="text-muted-foreground">Rigorous testing, security audits, and performance optimization.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Deployment & Launch</h3>
              <p className="text-muted-foreground">Smooth and efficient deployment, ensuring minimal disruption.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. Support & Evolution</h3>
              <p className="text-muted-foreground">Ongoing maintenance, support, and continuous feature enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies & Frameworks - Updated */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Key Technologies & Frameworks</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging a diverse tech stack to build modern, performant, and secure applications.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section - Updated icons and descriptions */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Comprehensive Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering high-performance and scalable solutions across various domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Custom Software</h3>
              <p className="text-muted-foreground">Tailored applications designed to fit your unique business processes.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Web Applications</h3>
              <p className="text-muted-foreground">Responsive and secure web solutions for any device and user demand.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Mobile Apps</h3>
              <p className="text-muted-foreground">Native and cross-platform mobile solutions for iOS and Android.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">API & Microservices</h3>
              <p className="text-muted-foreground">Building robust, modular, and scalable backend architectures.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="A diverse team collaborating on a project"
        imagePosition="right"
        title="Your Partner for Next-Gen Solutions"
        text="We are committed to delivering cutting-edge software and applications that drive innovation and achieve your business objectives."
        imageHeight={300}
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Strategic Partnership:</strong> Collaborating closely to understand and meet your unique vision.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">End-to-End Excellence:</strong> From concept to deployment and beyond, we ensure quality at every stage.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Future-Proof Solutions:</strong> Building adaptable and scalable applications for long-term success.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Build Your Next-Gen Application?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our expertise in software, web, and mobile development can transform your ideas into reality.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Contact Our Experts Today
          </a>
        </div>
      </section>
    </div>
  );
}
