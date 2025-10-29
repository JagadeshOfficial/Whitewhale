
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Our Services | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Explore the wide range of software development services we offer to help your business grow.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Our Services"
        description="From custom software to mobile apps, we have the expertise to bring your vision to life."
        withBackground={true}
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">What We Do</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive suite of software development services, tailored to meet the unique needs of your business. Whether you're a startup or an enterprise, we have the skills and experience to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col overflow-hidden group">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                 <CardFooter>
                    <Button asChild variant="link" className="text-primary font-bold">
                        <Link href={`/services/${service.id}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
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
