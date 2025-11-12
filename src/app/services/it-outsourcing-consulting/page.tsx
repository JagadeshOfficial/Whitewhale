
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Users, BarChart2, Server, Handshake } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'IT Outsourcing & Consulting | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Your Trusted Technology Partner',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'it-outsourcing-consulting');

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
              Your Trusted Technology Partner
            </h2>
            <p className="mt-4 text-lg">
              We provide skilled professionals, strategic IT guidance, and end-to-end outsourcing to help organizations scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* IT Consulting & Digital Strategy */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="IT Consulting & Digital Strategy"
        imagePosition="left"
        title="IT Consulting & Digital Strategy"
        text="Expert analysis and technology roadmaps to align IT initiatives with business goals and maximize ROI."
        imageHeight={300}
      />

      {/* Dedicated Development Teams */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Dedicated Development Teams"
        imagePosition="right"
        title="Dedicated Development Teams"
        text="Augment your workforce with highly skilled developers, architects, and testers who integrate seamlessly with your team."
        imageHeight={300}
      />

      {/* Project Outsourcing & Management */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Project Outsourcing & Management"
        imagePosition="left"
        title="Project Outsourcing & Management"
        text="From planning to delivery, we manage complete software projects so you can focus on core business operations."
        imageHeight={300}
      />

      {/* System Integration Services */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="System Integration Services"
        imagePosition="right"
        title="System Integration Services"
        text="Unify disparate platforms and APIs into cohesive, high-performing ecosystems that improve efficiency and data flow."
        imageHeight={300}
      />

      {/* Support & Maintenance Services */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Support & Maintenance Services"
        imagePosition="left"
        title="Support & Maintenance Services"
        text="Reliable 24×7 technical support, troubleshooting, and long-term maintenance for mission-critical systems."
        imageHeight={300}
      />

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Partner with Us for Scalable IT Outsourcing & Consulting Solutions"
        imagePosition="right"
        title="Partner with Us for Scalable IT Outsourcing & Consulting Solutions"
        text=""
        imageHeight={300}
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Access to Top Talent:</strong> Leverage our global network of skilled IT professionals.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Cost-Effective Solutions:</strong> Reduce overhead and improve your bottom line with our flexible engagement models.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Scalable and Flexible:</strong> Adapt to changing business needs with our scalable and flexible IT outsourcing solutions.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Partner with Us for Scalable IT Outsourcing & Consulting Solutions</h2>
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
