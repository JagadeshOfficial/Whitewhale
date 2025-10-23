import { caseStudies } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const study = caseStudies.find((p) => p.id === params.id);
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

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const study = caseStudies.find((p) => p.id === params.id);

  if (!study) {
    notFound();
  }

  const recentStudies = caseStudies.filter(p => p.id !== study.id).slice(0, 4);

  return (
    <div>
      <PageHeader
        title={study.title}
        description={`A deep dive into our work with ${study.client}`}
        imageUrl={study.imageUrl}
      />
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lg:gap-12">
            <main className="lg:col-span-2">
              <div className="prose prose-lg sm:prose-xl max-w-none text-muted-foreground">
                <p className="lead">{study.description}</p>
                
                <h3>The Challenge</h3>
                <p>{study.challenge}</p>
                
                <div className="relative my-8 rounded-lg overflow-hidden not-prose">
                  <Image 
                    src="https://picsum.photos/seed/case-study-content/1200/600" 
                    alt={`Illustrative image for the ${study.title} case study`}
                    width={1200}
                    height={600}
                    className="object-cover"
                   />
                </div>

                <h3>Our Solution</h3>
                <p>{study.solution}</p>
                
                <h3>Key Results</h3>
                <ul>
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
                
                <h3>Conclusion</h3>
                <p>
                  The {study.title} case study is a testament to our commitment to excellence and our ability to solve complex challenges with innovative solutions. We are proud of the results achieved and look forward to continuing our partnership with {study.client}.
                </p>
              </div>
            </main>

            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {recentStudies.map(post => (
                        <li key={post.id}>
                          <Link href={`/case-studies/${post.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{post.client}</p>
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
