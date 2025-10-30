
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Smartphone, Tablet, Watch, Bot } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'Mobile App Development | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Native and cross-platform mobile apps for iOS and Android.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'mobile-app-development');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="https://videos.pexels.com/video-files/4784093/4784093-hd_1920_1080_25fps.mp4"
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
