
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, ShieldCheck, Lock, Bug, Network } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'Cybersecurity | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Data protection, security audits, and threat prevention.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'cybersecurity');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="https://videos.pexels.com/video-files/5495882/5495882-hd_1920_1080_25fps.mp4"
      />

      {/* Long Description */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground text-center">
            <p>{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Cybersecurity Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We protect your digital assets with comprehensive security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Security Audits</h3>
              <p className="text-muted-foreground">Comprehensive assessments to identify and address vulnerabilities.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Data Protection</h3>
              <p className="text-muted-foreground">Protecting your sensitive data from unauthorized access and breaches.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Bug className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Threat Prevention</h3>
              <p className="text-muted-foreground">Proactive measures to detect and prevent cyber threats.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Network className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Network Security</h3>
              <p className="text-muted-foreground">Securing your network infrastructure from internal and external threats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.unsplash.com/photo-1550645612-83f5d594b671?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Cybersecurity"
        imagePosition="left"
        title="Protect Your Business from Cyber Threats"
        text="We provide end-to-end cybersecurity services to protect your business from the ever-evolving threat landscape."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Proactive Approach:</strong> We take a proactive approach to security, identifying and addressing threats before they can cause damage.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Expert Team:</strong> Our team of cybersecurity experts has decades of experience in protecting businesses of all sizes.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">24/7 Monitoring:</strong> We provide round-the-clock monitoring to ensure your systems are always protected.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Secure Your Business?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you protect your business from cyber threats. Contact us today for a free security consultation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get a Free Security Assessment
          </a>
        </div>
      </section>
    </div>
  );
}
