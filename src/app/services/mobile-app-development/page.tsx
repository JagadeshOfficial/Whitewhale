
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Smartphone, Tablet, Watch, Bot } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mobile App Development | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Native and cross-platform mobile apps for iOS and Android.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'mobile-app-development');
  const mobileCaseStudy = caseStudies.find((study) => study.id === 'healthcare-mobile-app');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mobile App Development Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured and transparent process to ensure the successful delivery of your mobile app.
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
              We use a modern tech stack to build fast, scalable, and secure mobile applications.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mobile App Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We build intuitive and high-performance mobile apps for all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">iOS Development</h3>
              <p className="text-muted-foreground">Native iOS apps that deliver a seamless user experience.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Android Development</h3>
              <p className="text-muted-foreground">Custom Android apps built to perform on any device.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Tablet className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cross-Platform Apps</h3>
              <p className="text-muted-foreground">Hybrid apps that work on both iOS and Android platforms.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Watch className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Wearable Tech</h3>
              <p className="text-muted-foreground">Innovative apps for smartwatches and other wearable devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {mobileCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our mobile app development capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={mobileCaseStudy.imageUrl}
                  alt={mobileCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{mobileCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{mobileCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${mobileCaseStudy.id}`} className="text-primary hover:underline font-semibold">
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
        imageSrc="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Mobile App Development"
        imagePosition="left"
        title="Engage Your Users on Mobile"
        text="We design and develop mobile apps that offer a rich user experience and drive engagement. From concept to launch, we are your trusted partner."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">User-Centric Design:</strong> Beautiful and intuitive interfaces that users love.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Agile Development:</strong> An iterative and flexible process to deliver results faster.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Ongoing Support:</strong> We provide maintenance and support to keep your app running smoothly.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Build Your Mobile App?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's turn your app idea into a reality. Contact us today to get started on your mobile app development project.
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
