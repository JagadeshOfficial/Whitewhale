import { caseStudies } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PageHeader } from '@/app/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((s) => s.id === params.id);
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }
  return {
    title: study.title,
    description: study.description,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = caseStudies.find((s) => s.id === params.id);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudies.filter(s => s.id !== study.id).slice(0, 3);

  return (
    <div>
      <PageHeader
        title={study.title}
        description={`A case study on how we helped ${study.client} achieve their goals.`}
        imageUrl={`https://picsum.photos/seed/${study.id}/1920/1080`}
        imageHint={`An image representing the ${study.title} project`}
      />
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lg:gap-12">
            <main className="lg:col-span-2">
              <div className="prose prose-lg sm:prose-xl max-w-none text-muted-foreground">
                <p className="lead">
                  {study.description}
                </p>
                <p>
                  In this case study, we'll walk you through the journey of how we collaborated with {study.client} to overcome their challenges and deliver a solution that not only met but exceeded their expectations. Our team was tasked with a significant challenge, and through a combination of expertise, dedication, and a client-focused approach, we were able to deliver outstanding results.
                </p>
                
                <div className="relative my-8 rounded-lg overflow-hidden not-prose">
                  <Image 
                    src={`https://picsum.photos/seed/${study.id}-detail/1200/600`} 
                    alt={`A detailed view of the ${study.title} project`}
                    width={1200}
                    height={600}
                    className="object-cover"
                   />
                </div>

                <h3>The Challenge</h3>
                <p>{study.challenge}</p>

                <h3>Our Solution</h3>
                <p>{study.solution}</p>

                <h3>Key Results</h3>
                <ul className="not-prose pl-0">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </main>

            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Other Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {otherStudies.map(s => (
                        <li key={s.id}>
                          <Link href={`/case-studies/${s.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>

          <div className="text-center pt-16">
            <Button asChild variant="outline">
                <Link href="/case-studies">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Case Studies
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
