
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/common/PageHeader';
import { services } from '@/lib/data';

export default function Home() {
  const displayServices = services.filter(s => s.id !== 'venture-capital' && s.id !== 'equity-markets' && s.id !== 'secondaries');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden -mt-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div className="relative z-20 h-full grid place-items-center text-center px-4 pt-16">
          <div className="text-primary-foreground max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tight">
              Shaping Tomorrow’s Technology Today
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Empowering businesses with smart, scalable technology.<br />We shape what’s next — today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="font-bold w-full sm:w-auto">
                <Link href="/about">The Whitewhale Journey</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="/contact">Let’s Build Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 sm:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom software to intelligent solutions, we have the expertise to bring your ideas to life.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-lg transition-full duration-300 p-6">
              <CardHeader className="p-0">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow mt-4 p-0">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <PageHeader
        title="Ready to Build Something Great?"
        description="Let's connect and explore how our development services can bring your project to life."
        ctaLabel="Get in Touch"
        ctaLink="/contact"
        withBackground={false}
        className="px-6 sm:px-8"
      />
    </div>
  );
}
