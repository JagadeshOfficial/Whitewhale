import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div>
      <PageHeader
        title={service.title}
        description={service.description}
        imageUrl={`https://picsum.photos/seed/${service.id}/1920/1080`}
        imageHint={`Abstract image representing ${service.title}`}
      />
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lg:gap-12">
            <main className="lg:col-span-2">
              <div className="prose prose-lg sm:prose-xl max-w-none text-muted-foreground">
                <p className="lead">
                  {service.longDescription}
                </p>
                <p>
                  In today's digital world, a robust online presence is not just an advantage; it's a necessity. Whether you need a dynamic web application, a high-performance API, or a cloud-native solution, our team has the expertise to deliver. We leverage the latest technologies to ensure your project is at the forefront of innovation.
                </p>
                
                <div className="relative my-8 rounded-lg overflow-hidden not-prose">
                  <Image 
                    src={`https://picsum.photos/seed/${service.id}-detail/1200/600`} 
                    alt={`A detailed view of ${service.title} in action`}
                    width={1200}
                    height={600}
                    className="object-cover"
                   />
                </div>

                <h3>Our Approach</h3>
                <p>
                  We follow a structured and transparent process to ensure your project's success. From initial discovery to deployment and beyond, we work closely with you at every stage. Our agile methodology allows us to adapt to changing requirements and deliver value quickly.
                </p>
                <ul>
                  <li><CheckCircle className="inline-block h-5 w-5 text-primary mr-2" /><strong>Discovery and Planning:</strong> Understanding your goals and defining the project scope.</li>
                  <li><CheckCircle className="inline-block h-5 w-5 text-primary mr-2" /><strong>Design and Prototyping:</strong> Creating intuitive user interfaces and experiences.</li>
                  <li><CheckCircle className="inline-block h-5 w-5 text-primary mr-2" /><strong>Development and Testing:</strong> Building and rigorously testing your application.</li>
                  <li><CheckCircle className="inline-block h-5 w-5 text-primary mr-2" /><strong>Deployment and Support:</strong> Launching your project and providing ongoing support.</li>
                </ul>
              </div>
            </main>

            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Other Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {otherServices.map(s => (
                        <li key={s.id}>
                          <Link href={`/services/${s.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
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
                <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Services
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// This function generates the static paths for each service page.
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}
