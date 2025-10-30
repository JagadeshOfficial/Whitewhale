
import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Approach | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'We combine deep industry expertise with a hands-on approach to help our companies succeed.',
};

export default function ServicePage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Our Approach
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            We combine deep industry expertise with a hands-on approach to help our companies succeed.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground">
            <p>We believe in a collaborative process, working closely with our clients to understand their unique needs and deliver tailored solutions. Our methodology is built on a foundation of strategy, design, and technology, ensuring that every project we undertake is not only technically sound but also aligned with business goals.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured process to ensure quality and success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Discovery & Strategy</h3>
                <p className="text-muted-foreground">We start by understanding your goals and challenges to define a clear roadmap.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Agile Development</h3>
                <p className="text-muted-foreground">We use an iterative process to build, test, and refine your product efficiently.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Quality Assurance</h3>
                <p className="text-muted-foreground">Rigorous testing ensures your solution is reliable, scalable, and secure.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Deployment & Support</h3>
                <p className="text-muted-foreground">We handle the launch and provide ongoing support to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
