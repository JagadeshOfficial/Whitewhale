
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Bot, Cpu, Search, BarChart2 } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'AI, Data Analytics & Automation | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Intelligent Technology for Smart Decisions',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'ai-data-analytics-automation');

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
              Intelligent Technology for Smart Decisions
            </h2>
            <p className="mt-4 text-lg">
              Harness the power of data and artificial intelligence to transform operations and uncover insights.
            </p>
          </div>
        </div>
      </section>

      {/* Artificial Intelligence Solutions */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Artificial Intelligence Solutions"
        imagePosition="left"
        title="Artificial Intelligence Solutions"
        text="Predictive models, NLP systems, and recommendation engines that help you make data-driven decisions faster."
        imageHeight={300}
      />

      {/* Machine Learning Model Development */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Machine Learning Model Development"
        imagePosition="right"
        title="Machine Learning Model Development"
        text="Custom ML pipelines for classification, forecasting, and anomaly detection using TensorFlow, PyTorch, or Scikit-learn."
        imageHeight={300}
      />

      {/* Data Analytics & Business Intelligence */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Data Analytics & Business Intelligence"
        imagePosition="left"
        title="Data Analytics & Business Intelligence"
        text="Collect, clean, and visualize data to reveal patterns and trends through Power BI, Tableau, or custom dashboards."
        imageHeight={300}
      />

      {/* Process Automation (RPA) */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/7567561/pexels-photo-7567561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Process Automation (RPA)"
        imagePosition="right"
        title="Process Automation (RPA)"
        text="Automate repetitive workflows with bots that improve accuracy and free up valuable employee time."
        imageHeight={300}
      />

      {/* AI-Powered Chatbots & Virtual Assistants */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="AI-Powered Chatbots & Virtual Assistants"
        imagePosition="left"
        title="AI-Powered Chatbots & Virtual Assistants"
        text="Enhance customer engagement through intelligent chat interfaces integrated across web and mobile."
        imageHeight={300}
      />

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Turn Data into Actionable Intelligence"
        imagePosition="right"
        title="Turn Data into Actionable Intelligence"
        text=""
        imageHeight={300}
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Custom AI/ML Solutions:</strong> We build custom AI solutions that are tailored to your specific business needs.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Expert Data Scientists:</strong> Our team of data scientists has a proven track record of success.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Measurable ROI:</strong> We focus on delivering measurable results that improve your bottom line.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Turn Data into Actionable Intelligence</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a Free Consultation
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
