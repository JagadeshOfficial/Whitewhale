
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Cloud, Database, Server, Shield } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'Cloud Services | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Cloud computing, storage, and migration solutions.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'cloud-services');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="https://videos.pexels.com/video-files/3831826/3831826-hd_1920_1080_25fps.mp4"
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Cloud Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide scalable and secure cloud solutions to power your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cloud Migration</h3>
              <p className="text-muted-foreground">Seamlessly migrate your infrastructure and applications to the cloud.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Server className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Serverless Architecture</h3>
              <p className="text-muted-foreground">Build and run applications without thinking about servers.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Managed Databases</h3>
              <p className="text-muted-foreground">Reliable, scalable, and secure database management.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cloud Security</h3>
              <p className="text-muted-foreground">Protect your cloud environment from threats and vulnerabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Cloud Services"
        imagePosition="right"
        title="Leverage the Power of the Cloud"
        text="We help you harness the full potential of the cloud to improve scalability, reduce costs, and accelerate innovation."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Cost-Effective:</strong> Optimize your cloud spending and pay only for what you use.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Scalable & Flexible:</strong> Scale your resources up or down as your business needs change.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Enhanced Security:</strong> Implement robust security measures to protect your data.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Move to the Cloud?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you navigate your cloud journey. Contact us today for a free consultation and cloud readiness assessment.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
