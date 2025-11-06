
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Code, ShoppingCart, PenTool, Search } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Development | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Custom websites, e-commerce stores, and content management systems.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'web-development');
  const webCaseStudy = caseStudies.find((study) => study.id === 'e-commerce-boost');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Web Development Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured and transparent process to ensure the successful delivery of your web project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Discovery & Strategy</h3>
              <p className="text-muted-foreground">We start by understanding your business goals and project requirements to define a clear strategy.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. UI/UX Design</h3>
              <p className="text-muted-foreground">Our design team creates intuitive and engaging user interfaces that align with your brand.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Development & Coding</h3>
              <p className="text-muted-foreground">Our developers bring the designs to life using the latest technologies and coding standards.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. Testing & QA</h3>
              <p className="text-muted-foreground">We conduct rigorous testing to ensure your web application is bug-free, secure, and performs optimally.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Deployment & Launch</h3>
              <p className="text-muted-foreground">We handle the entire deployment process, ensuring a smooth and seamless launch of your web application.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. Support & Maintenance</h3>
              <p className="text-muted-foreground">We provide ongoing support and maintenance to ensure your web application remains up-to-date and secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Technologies We Use</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We use a modern tech stack to build fast, scalable, and secure web applications.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Web Development Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We build high-performance web solutions that drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Custom Web Apps</h3>
              <p className="text-muted-foreground">Tailored web applications to meet your specific business needs.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">E-commerce Solutions</h3>
              <p className="text-muted-foreground">Robust and scalable online stores to sell your products.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">CMS Development</h3>
              <p className="text-muted-foreground">Easy-to-use content management systems for your website.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">Intuitive and engaging user interfaces for your web application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {webCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our web development capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={webCaseStudy.imageUrl}
                  alt={webCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{webCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{webCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${webCaseStudy.id}`} className="text-primary hover:underline font-semibold">
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
        imageAlt="Web Development"
        imagePosition="right"
        title="Build a Powerful Web Presence"
        text="We create websites and web applications that are not just visually appealing but also highly functional, scalable, and optimized for performance."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Responsive Design:</strong> Flawless performance on all devices, from desktops to smartphones.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Scalable Architecture:</strong> Built to grow with your business and handle increasing traffic.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">SEO Optimized:</strong> Designed to rank high on search engines and attract organic traffic.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Build Your Web Presence?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to create a web solution that drives your business forward. Get in touch with us to discuss your project.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
