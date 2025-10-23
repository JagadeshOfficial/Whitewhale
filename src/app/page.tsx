import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { services, insights } from '@/lib/data';
import { PageHeader } from '@/components/common/PageHeader';
import { placeholderImages } from '@/lib/image-map';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
        <Image
          src={placeholderImages.heroHome.imageUrl}
          alt="Abstract technology background"
          data-ai-hint={placeholderImages.heroHome.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 px-4 text-primary-foreground max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Engineering Digital Excellence.
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            We build innovative software solutions that power businesses and delight users.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/about">Our Process</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom software to intelligent solutions, we have the expertise to bring your ideas to life.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
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
      </section>

      {/* Insights Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">From the Blog</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our expert analysis on technology, development, and innovation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0, 3).map((insight) => (
              <Card key={insight.id} className="overflow-hidden flex flex-col group">
                <div className="relative h-56 w-full">
                  <Image
                    src={insight.imageUrl}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{insight.title}</CardTitle>
                  <CardDescription>{insight.date} &bull; {insight.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{insight.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 font-bold">
                    <Link href={`/insights/${insight.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/insights">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageHeader
        title="Ready to Build Something Great?"
        description="Let's connect and explore how our development services can bring your project to life."
        ctaLabel="Get in Touch"
        ctaLink="/contact"
        withBackground={false}
      />
    </div>
  );
}
