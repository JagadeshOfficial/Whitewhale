
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BrainCircuit, Cpu, Bot, Search, Cloud, Database, Server, Shield, Lock, Bug, Smartphone, Tablet, Watch, Code, ShoppingCart, PenTool, Eye, Palette, Users } from 'lucide-react';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | WHITEWHALE SOFTWARE SOLUTIONS`,
    description: service.description,
  };
}


const expertiseIcons: { [key: string]: React.ElementType } = {
  'artificial-intelligence-machine-learning': BrainCircuit,
  'natural-language-processing': BrainCircuit,
  'computer-vision': Search,
  'predictive-analytics': Bot,
  'generative-ai': Cpu,
  'cloud-services': Cloud,
  'cloud-strategy': Cloud,
  'cloud-migration': Server,
  'cloud-management': Database,
  'cloud-security': Shield,
  'cybersecurity': Shield,
  'security-audits': Shield,
  'penetration-testing': Bug,
  'incident-response': Lock,
  'threat-intelligence': Search,
  'mobile-app-development': Smartphone,
  'ios-development': Smartphone,
  'android-development': Bot,
  'cross-platform-apps': Tablet,
  'wearable-tech': Watch,
  'web-development': Code,
  'custom-web-apps': Code,
  'e-commerce-solutions': ShoppingCart,
  'cms-development': PenTool,
  'ui-ux-design': PenTool,
  'user-research': Users,
  'information-architecture': PenTool,
  'visual-design': Eye,
  'interaction-design': Palette
};

const getIcon = (id: string) => {
    return expertiseIcons[id] || CheckCircle;
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.id === params.id);
  const relatedCaseStudy = caseStudies.find(study => study.id.includes(params.id.split('-')[0]));
  
  if (!service) {
    notFound();
  }

  const expertiseItems = services
    .filter(s => s.id.startsWith(params.id))
    .flatMap(s => (s as any).expertise || []) as {id: string, title: string, description: string}[];


  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="/videos/contact-background.mp4"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground text-center">
            <p>{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {relatedCaseStudy && (
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={relatedCaseStudy.imageUrl}
                  alt={relatedCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{relatedCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{relatedCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/studies`} className="text-primary hover:underline font-semibold">
                    Explore All Case Studies
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
        imageAlt={service.title}
        imagePosition="right"
        title={`Why Choose Us for ${service.title}`}
        text="We are committed to delivering excellence and innovation in every project. Our dedicated team works closely with you to understand your unique challenges and deliver tailored solutions."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Expert Team:</strong> Our professionals are leaders in their fields, bringing a wealth of experience to your project.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Custom Solutions:</strong> We don't believe in one-size-fits-all. Every solution is tailored to your specific needs.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Measurable Results:</strong> We focus on delivering tangible results that drive business growth and ROI.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our {service.title} services can help you achieve your business goals.
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
