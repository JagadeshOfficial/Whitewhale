
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Cloud, Server, Cpu, Shield, Globe } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cloud, DevOps & Microservices | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Empowering Businesses with Cloud-Native Solutions',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'cloud-devops-microservices');
  const cloudCaseStudy = caseStudies.find((study) => study.id === 'fintech-ai-platform');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Empowering Businesses with Cloud-Native Solutions
            </h2>
            <p className="mt-4 text-lg">
              Accelerate innovation through cloud transformation, automation, and microservices architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Migration & Modernization */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Cloud Migration & Modernization"
        imagePosition="left"
        title="Cloud Migration & Modernization"
        text="Seamlessly move your workloads to AWS, Azure, or Google Cloud with minimal downtime and maximum performance."
        imageHeight={300}
      />

      {/* DevOps Automation */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="DevOps Automation"
        imagePosition="right"
        title="DevOps Automation"
        text="Implement CI/CD pipelines, containerization (Docker, Kubernetes), and Infrastructure as Code for faster, error-free releases."
        imageHeight={300}
      />

      {/* Microservices Architecture Design */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Microservices Architecture Design"
        imagePosition="left"
        title="Microservices Architecture Design"
        text="Break down monoliths into agile, independently deployable services that scale effortlessly with your business."
        imageHeight={300}
      />

      {/* Cloud Application Development */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Cloud Application Development"
        imagePosition="right"
        title="Cloud Application Development"
        text="Build cloud-native applications optimized for reliability, scalability, and real-time performance."
        imageHeight={300}
      />

      {/* Monitoring & Performance Optimization */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Monitoring & Performance Optimization"
        imagePosition="left"
        title="Monitoring & Performance Optimization"
        text="Advanced observability, automated alerts, and performance tuning for peak efficiency."
        imageHeight={300}
      />

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Modernize Your IT Infrastructure"
        imagePosition="right"
        title="Modernize Your IT Infrastructure with Our Cloud & DevOps Experts."
        text=""
        imageHeight={300}
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Certified Cloud Experts:</strong> Our team holds certifications from major cloud providers.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Proven DevOps Methodology:</strong> We use a proven methodology to ensure successful cloud adoption and automation.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">24/7 Support and Monitoring:</strong> We provide round-the-clock support to keep your cloud environment running smoothly.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Modernize Your Infrastructure?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you harness the power of the cloud and DevOps to transform your business.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
