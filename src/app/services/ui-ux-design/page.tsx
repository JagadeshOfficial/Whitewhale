
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Palette, MousePointer, Tablet, MessageSquare } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';

export const metadata: Metadata = {
  title: 'UI/UX Design | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'User interface and user experience design for websites and apps.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'ui-ux-design');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="https://videos.pexels.com/video-files/3194524/3194524-hd_1920_1080_25fps.mp4"
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our UI/UX Design Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We create intuitive and beautiful designs that people love to use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">User Research</h3>
              <p className="text-muted-foreground">Understanding your users and their needs to create a design that resonates.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Wireframing & Prototyping</h3>
              <p className="text-muted-foreground">Creating interactive prototypes to visualize the user experience.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Tablet className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Visual Design</h3>
              <p className="text-muted-foreground">Crafting a beautiful and consistent visual identity for your brand.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <MousePointer className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Usability Testing</h3>
              <p className="text-muted-foreground">Testing the design with real users to ensure it's easy to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <SideBySide
        imageSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
        imageAlt="UI/UX Design"
        imagePosition="left"
        title="Design That Drives Engagement"
        text="Our UI/UX design services are focused on creating a seamless and enjoyable user experience that drives user adoption and retention."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Data-Driven Design:</strong> We use data and user research to inform our design decisions.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Collaborative Process:</strong> We work closely with you to ensure the design meets your vision.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Focus on Results:</strong> We design for usability, engagement, and conversion.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Create an Amazing User Experience?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to create a design that your users will love. Get in touch with us to discuss your design needs.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Request a Design Quote
          </a>
        </div>
      </section>
    </div>
  );
}
