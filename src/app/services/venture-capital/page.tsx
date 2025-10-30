
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, DollarSign, BrainCircuit, ShieldCheck, TrendingUp } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';

export const metadata: Metadata = {
  title: 'Venture Capital | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Investing in visionary founders building the future of technology.',
};

export default function ServicePage() {
  const service = services.find((service) => service.id === 'venture-capital');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl="https://videos.pexels.com/video-files/853875/853875-hd_1920_1080_25fps.mp4"
      />

      {/* Long Description */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground text-center">
            <p>{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Our Investment Focus Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Investment Focus</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in early-stage companies poised to redefine industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground">Disruptive AI solutions that drive automation and intelligence.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground">Next-generation security platforms to protect digital assets.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">SaaS Platforms</h3>
              <p className="text-muted-foreground">Scalable and innovative software-as-a-service models.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Fintech</h3>
              <p className="text-muted-foreground">Technologies that are reshaping financial services.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Partner With Us Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline text-foreground mb-4">Why Partner With Us?</h2>
            <p className="prose prose-lg max-w-none text-muted-foreground mx-auto">
              We provide more than just capital. We are partners in growth, offering strategic guidance, operational expertise, and access to our extensive network.
            </p>
            <ul className="mt-8 space-y-4 inline-block text-left">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-foreground">Strategic Guidance:</strong> Decades of experience in scaling technology companies.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-foreground">Industry Network:</strong> Access to a global network of partners, customers, and talent.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-foreground">Long-Term Partnership:</strong> We are committed to supporting our portfolio companies from seed to exit.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Have a Visionary Idea?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always looking for the next generation of innovators. If you are a founder with a bold vision, we would love to hear from you.
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
