
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Shield, Lock, Bug, Search } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cybersecurity | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Cybersecurity assessments, penetration testing, and incident response.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'cybersecurity');
  const cyberCaseStudy = caseStudies.find((study) => study.id === 'fintech-ai-platform');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Cybersecurity Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proactive and comprehensive approach to protect your business from cyber threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Risk Assessment</h3>
              <p className="text-muted-foreground">We identify and assess your cybersecurity risks to develop a customized security strategy.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. Penetration Testing</h3>
              <p className="text-muted-foreground">We simulate real-world attacks to identify vulnerabilities in your systems and applications.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Security Implementation</h3>
              <p className="text-muted-foreground">We implement robust security controls and measures to protect your assets.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. Incident Response</h3>
              <p className="text-muted-foreground">We provide 24/7 incident response to quickly contain and remediate security breaches.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Security Training</h3>
              <p className="text-muted-foreground">We train your employees to recognize and respond to cyber threats.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. Continuous Monitoring</h3>
              <p className="text-muted-foreground">We continuously monitor your systems to detect and respond to threats in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Cybersecurity Tools We Use</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We use the latest cybersecurity tools and technologies to protect your business.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Cybersecurity Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a wide range of cybersecurity services to protect your business from modern threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Security Audits</h3>
              <p className="text-muted-foreground">Comprehensive assessments of your security posture.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Bug className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Penetration Testing</h3>
              <p className="text-muted-foreground">Simulating attacks to find and fix vulnerabilities.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Incident Response</h3>
              <p className="text-muted-foreground">Responding to and recovering from security incidents.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Threat Intelligence</h3>
              <p className="text-muted-foreground">Proactively identifying and mitigating threats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {cyberCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our cybersecurity capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={cyberCaseStudy.imageUrl}
                  alt={cyberCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{cyberCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{cyberCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${cyberCaseStudy.id}`} className="text-primary hover:underline font-semibold">
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
        imageAlt="Cybersecurity"
        imagePosition="right"
        title="Protect Your Business from Cyber Threats"
        text="We provide comprehensive cybersecurity solutions to protect your business from modern threats. Our team of certified cybersecurity experts is here to help you stay ahead of the curve and keep your data safe."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Certified Experts:</strong> Our team holds certifications from major cybersecurity organizations.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Proactive Approach:</strong> We take a proactive approach to cybersecurity, helping you stay ahead of threats.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">24/7 Support:</strong> We provide round-the-clock support to respond to and remediate security incidents.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Secure Your Business?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you protect your business from cyber threats. Get in touch with us to discuss your security needs.
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
