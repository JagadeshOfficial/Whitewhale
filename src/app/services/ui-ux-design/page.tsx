
import { services, caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Eye, PenTool, Users, Palette } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'UI/UX Design | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'User interface and user experience design for websites and apps.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'ui-ux-design');
  const uiuxCaseStudy = caseStudies.find((study) => study.id === 'e-commerce-boost');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our UI/UX Design Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a human-centered design process to create intuitive and impactful user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Research & Discovery</h3>
              <p className="text-muted-foreground">We start by understanding your users, their needs, and their pain points through user research and analysis.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. Wireframing & Prototyping</h3>
              <p className="text-muted-foreground">We create low-fidelity wireframes and interactive prototypes to visualize the user flow and information architecture.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Visual Design</h3>
              <p className="text-muted-foreground">Our designers create high-fidelity mockups and a consistent design system that reflects your brand identity.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. User Testing</h3>
              <p className="text-muted-foreground">We conduct usability testing with real users to gather feedback and iterate on our designs.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Handoff & Collaboration</h3>
              <p className="text-muted-foreground">We provide developers with detailed design specifications and assets to ensure a smooth handoff.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. Continuous Improvement</h3>
              <p className="text-muted-foreground">We believe in continuous improvement and will work with you to refine your product over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Design Toolkit</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We use a variety of tools to create beautiful and user-friendly designs.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" alt="Sketch" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe-xd/adobe-xd-plain.svg" alt="Adobe XD" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Adobe Illustrator" className="h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Adobe Photoshop" className="h-16" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our UI/UX Design Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We design digital experiences that are intuitive, engaging, and aligned with your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">User Research</h3>
              <p className="text-muted-foreground">Understanding your users to create products they love.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Information Architecture</h3>
              <p className="text-muted-foreground">Organizing your content in a clear and logical way.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Visual Design</h3>
              <p className="text-muted-foreground">Creating beautiful and engaging interfaces.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Interaction Design</h3>
              <p className="text-muted-foreground">Designing how users interact with your product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {uiuxCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our UI/UX design capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={uiuxCaseStudy.imageUrl}
                  alt={uiuxCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{uiuxCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{uiuxCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${uiuxCaseStudy.id}`} className="text-primary hover:underline font-semibold">
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
        imageAlt="UI/UX Design"
        imagePosition="right"
        title="Design That Drives Results"
        text="We create designs that not only look good but also drive business results. Our human-centered approach ensures that your users will have a seamless and engaging experience."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Data-Driven Decisions:</strong> We use data and user research to inform our design decisions.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Collaborative Process:</strong> We work closely with you to ensure our designs meet your business goals.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Focus on ROI:</strong> We design experiences that drive conversions and deliver a return on investment.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Create an Amazing User Experience?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to design a product that your users will love. Get in touch with us to discuss your project.
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
