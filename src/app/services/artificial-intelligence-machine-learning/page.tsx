
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, BrainCircuit, Cpu, Bot, Search } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Artificial Intelligence & Machine Learning | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'AI tools, chatbots, and predictive analytics.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'artificial-intelligence-machine-learning');
  const aiCaseStudy = caseStudies.find((study) => study.id === 'fintech-ai-platform');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our AI & Machine Learning Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a data-driven process to build intelligent systems that deliver tangible results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Data Collection & Preparation</h3>
              <p className="text-muted-foreground">We help you collect, clean, and prepare your data for machine learning.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. Model Development & Training</h3>
              <p className="text-muted-foreground">We develop and train custom machine learning models to solve your specific business problems.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Model Evaluation & Tuning</h3>
              <p className="text-muted-foreground">We rigorously evaluate and tune our models to ensure they meet your performance and accuracy requirements.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. Deployment & Integration</h3>
              <p className="text-muted-foreground">We deploy our models into production and integrate them with your existing systems.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Monitoring & Maintenance</h3>
              <p className="text-muted-foreground">We continuously monitor our models to ensure they are performing as expected and retrain them as needed.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. Continuous Improvement</h3>
              <p className="text-muted-foreground">We work with you to continuously improve your AI-driven systems and unlock new opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">AI & Machine Learning Technologies</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We use the latest AI and machine learning technologies to build intelligent systems.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our AI & Machine Learning Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We build custom AI and machine learning solutions that help you gain a competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Natural Language Processing</h3>
              <p className="text-muted-foreground">Building systems that understand and process human language.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Computer Vision</h3>
              <p className="text-muted-foreground">Developing systems that can see and understand the visual world.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Predictive Analytics</h3>
              <p className="text-muted-foreground">Using data to predict future outcomes and trends.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Generative AI</h3>
              <p className="text-muted-foreground">Creating new content, such as text, images, or music, using AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {aiCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our AI & Machine Learning capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={aiCaseStudy.imageUrl}
                  alt={aiCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{aiCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{aiCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${aiCaseStudy.id}`} className="text-primary hover:underline font-semibold">
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
        imageAlt="Artificial Intelligence & Machine Learning"
        imagePosition="right"
        title="Harness the Power of AI"
        text="We help you leverage the power of AI to automate processes, gain insights from your data, and create intelligent products that drive business value."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Custom Solutions:</strong> We build custom AI solutions that are tailored to your specific business needs.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Experienced Team:</strong> Our team of AI and machine learning experts has a proven track record of success.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Measurable Results:</strong> We focus on delivering measurable results that improve your bottom line.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Unlock the Power of AI?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you harness the power of AI to transform your business. Get in touch with us to discuss your project.
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
