
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { caseStudies } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Case Studies | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Explore our successful projects and see how we have helped our clients achieve their goals.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Case Studies"
        description="We are proud of the work we do. Explore some of our most successful projects and see how we have helped our clients achieve their goals."
        imageUrl="https://picsum.photos/seed/case-studies-hero/1920/1080"
      />

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
                <CardFooter>
                  <Button asChild variant="link" className="p-0 font-bold">
                    <Link href={`/case-studies/${study.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
