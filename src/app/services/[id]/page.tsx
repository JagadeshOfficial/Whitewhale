
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/common/PageHeader';
import { services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

// Using a static metadata object to avoid the build issue with dynamic generation in Next.js 15.
export const metadata: Metadata = {
  title: 'Service Details | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Learn more about our software development services.',
};

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = [
    { id: 1, title: "Boosting E-commerce Sales", description: "How we helped a retail client increase their online sales by 300%." },
    { id: 2, title: "AI-Powered Fraud Detection", description: "Developing a real-time fraud detection system for a fintech startup." },
  ];

  return (
    <div className="bg-background">
      <PageHeader
        title={service.title}
        description={service.description}
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground">
            <p>{service.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine deep industry expertise with a hands-on approach to help our companies succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Discovery & Strategy</h3>
                <p className="text-muted-foreground">We start by understanding your goals and challenges to define a clear roadmap.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Agile Development</h3>
                <p className="text-muted-foreground">We use an iterative process to build, test, and refine your product efficiently.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Quality Assurance</h3>
                <p className="text-muted-foreground">Rigorous testing ensures your solution is reliable, scalable, and secure.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Deployment & Support</h3>
                <p className="text-muted-foreground">We handle the launch and provide ongoing support to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
