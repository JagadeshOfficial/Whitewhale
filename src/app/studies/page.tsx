
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { SideBySide } from '@/components/common/SideBySide';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { caseStudies } from '@/lib/data';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Innovation in Action | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Explore our successful projects and see how we have helped our clients achieve their goals.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Innovation in Action"
        description="Explore our successful projects and see how we have helped our clients achieve their goals."
        videoUrl="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4"
      />

      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Client Growth"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">
                We measure success by our clients’ growth.
            </h2>
        </div>
      </section>

      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            alt="Case Studies"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">
                Dive into our case studies and see the difference we make.
            </h2>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden flex flex-col group">
                <div className="relative h-56 w-full">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <SideBySide
                imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                imageAlt="Client Collaboration"
                imagePosition="right"
                title="A Client-Centric Approach to Success"
                text="Our methodology is built on a deep understanding of your business and a commitment to your goals. We believe in building partnerships, not just projects."
            >
                <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-foreground">Collaborative Partnership:</strong> We work with you, not for you, to ensure our solutions are perfectly aligned with your vision.</span>
                </li>
                <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-foreground">Transparent Communication:</strong> We keep you informed at every stage of the process, providing regular updates and clear communication.</span>
                </li>
                <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-foreground">Measurable Results:</strong> We focus on delivering solutions that provide tangible business value and a clear return on investment.</span>
                </li>
            </SideBySide>
        </div>
      </div>

    </div>
  );
}
