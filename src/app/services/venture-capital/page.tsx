
import { services, caseStudies, investmentApproach } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Venture Capital | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Investing in and mentoring early-stage startups.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'venture-capital');
  const vcCaseStudy = caseStudies.find((study) => study.id === 'fintech-ai-platform');

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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Venture Capital Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a rigorous and collaborative process to identify and invest in the most promising startups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">1. Deal Sourcing & Screening</h3>
              <p className="text-muted-foreground">We actively source and screen startups that align with our investment thesis.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">2. Due Diligence</h3>
              <p className="text-muted-foreground">We conduct thorough due diligence to assess the team, product, market, and financials.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">3. Investment Decision</h3>
              <p className="text-muted-foreground">We make investment decisions based on our due diligence and conviction in the team.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">4. Portfolio Support</h3>
              <p className="text-muted-foreground">We provide our portfolio companies with strategic guidance, mentorship, and access to our network.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">5. Exit Strategy</h3>
              <p className="text-muted-foreground">We work with our portfolio companies to identify and execute the best exit strategy.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">6. Continuous Partnership</h3>
              <p className="text-muted-foreground">We believe in building long-term partnerships with our portfolio companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Investment Focus</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in early-stage startups that are building the future of technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentApproach.map((item, index) => (
              <div key={index} className="bg-secondary p-8 rounded-lg text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {vcCaseStudy && (
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A real-world example of our venture capital capabilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={vcCaseStudy.imageUrl}
                  alt={vcCaseStudy.title}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">{vcCaseStudy.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{vcCaseStudy.description}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${vcCaseStudy.id}`} className="text-primary hover:underline font-semibold">
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
        imageAlt="Venture Capital"
        imagePosition="right"
        title="Partnering with Visionary Founders"
        text="We are more than just investors; we are partners. We work closely with our portfolio companies to help them build successful businesses and create long-term value."
      >
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Strategic Guidance:</strong> We provide strategic guidance and mentorship to help you navigate the challenges of building a startup.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Access to Network:</strong> We provide access to our extensive network of industry experts, partners, and customers.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
          <span><strong className="text-foreground">Long-Term Partnership:</strong> We are committed to building long-term partnerships with our portfolio companies.</span>
        </li>
      </SideBySide>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Pitch Your Startup?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always looking for the next big thing. If you are a visionary founder with a disruptive idea, we would love to hear from you.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Submit Your Pitch
          </a>
        </div>
      </section>
    </div>
  );
}
