
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Cloud, Database, Server, Shield } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cloud Services | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Cloud computing, storage, and migration solutions.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'cloud-services');
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

      {/* Long Description */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground text-center">
            <p>{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Cloud Services Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured and transparent process to ensure the successful delivery of your cloud project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Assessment & Planning</h3>
              <p className="text-muted-foreground">We assess your current infrastructure and business needs to create a customized cloud strategy.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. Migration & Implementation</h3>
              <p className="text-muted-foreground">We handle the entire migration process, ensuring a seamless transition to the cloud with minimal disruption.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Optimization & Management</h3>
              <p className="text-muted-foreground">We continuously monitor and optimize your cloud environment for performance, security, and cost-effectiveness.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. Security & Compliance</h3>
              <p className="text-muted-foreground">We implement robust security measures and ensure compliance with industry standards.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Automation & DevOps</h3>
              <p className="text-muted-foreground">We automate your infrastructure and deployment pipelines to improve efficiency and reduce costs.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. 24/7 Support</h3>
              <p className="text-muted-foreground">We provide round-the-clock support to ensure your cloud environment is always running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Cloud Platforms We Support</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We have expertise in the leading cloud platforms to provide you with the best solution for your business.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Cloud Services Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a wide range of cloud services to help you build a scalable and resilient infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cloud Strategy</h3>
              <p className="text-muted-foreground">Developing a cloud adoption roadmap that aligns with your business goals.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Server className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cloud Migration</h3>
              <p className="text-muted-foreground">Seamlessly migrating your applications and data to the cloud.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cloud Management</h3>
              <p className="text-muted-foreground">Optimizing your cloud infrastructure for performance, security, and cost.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cloud Security</h3>
              <p className="text-muted-foreground">Protecting your cloud environment from threats and ensuring compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {cloudCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our cloud services capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={cloudCaseStudy.imageUrl}
                  alt={cloudCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{cloudCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{cloudCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${cloudCaseStudy.id}`} className="text-primary hover:underline font-semibold">
                    Read Full Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Cloud Services"
        imagePosition="right"
        title="Unlock the Power of the Cloud"
        text="We help you leverage the full potential of the cloud to drive innovation, improve agility, and accelerate business growth. Our team of certified cloud experts is here to guide you every step of the way."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Certified Experts:</strong> Our team holds certifications from major cloud providers.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Proven Methodology:</strong> We use a proven methodology to ensure successful cloud adoption.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">24/7 Support:</strong> We provide round-the-clock support to keep your cloud environment running smoothly.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Move to the Cloud?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you harness the power of the cloud to transform your business. Get in touch with us to discuss your project.
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
