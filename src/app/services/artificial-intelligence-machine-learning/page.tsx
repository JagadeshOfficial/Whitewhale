
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, BrainCircuit, Bot, MessageSquare, BarChart } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'Artificial Intelligence & Machine Learning | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'AI tools, chatbots, and predictive analytics.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'artificial-intelligence-machine-learning');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="https://videos.pexels.com/video-files/8567265/8567265-hd_1920_1080_25fps.mp4"
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our AI & ML Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We build intelligent solutions that unlock the power of your data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Predictive Analytics</h3>
              <p className="text-muted-foreground">Leverage your data to forecast trends and make smarter decisions.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">AI-Powered Chatbots</h3>
              <p className="text-muted-foreground">Engage your customers with intelligent, automated conversations.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Natural Language Processing</h3>
              <p className="text-muted-foreground">Analyze and understand human language to extract valuable insights.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Computer Vision</h3>
              <p className="text-muted-foreground">Enable your applications to see and interpret the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Artificial Intelligence & Machine Learning"
        imagePosition="right"
        title="Unlock the Power of AI"
        text="We help you leverage artificial intelligence and machine learning to automate processes, gain insights, and create innovative products."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Custom AI Solutions:</strong> We develop AI models tailored to your specific business needs.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Data-Driven Insights:</strong> We help you uncover valuable insights from your data.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Scalable & Secure:</strong> Our AI solutions are built to be scalable and secure.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Build an Intelligent Future?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's explore how AI and machine learning can transform your business. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
