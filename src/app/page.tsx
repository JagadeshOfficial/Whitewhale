
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/common/PageHeader';

export default function Home() {
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
          <source src="/videos/contact-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary/60 z-10" />
        <div className="relative z-20 h-full grid place-items-center text-center px-4 pt-16">
          <div className="text-primary-foreground max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tight">
              Shaping Tomorrow’s Technology Today
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Empowering businesses with smart, scalable technology.<br />We shape what’s next — today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="font-bold w-full sm:w-auto" style={{ backgroundColor: '#0000FF' }}>
                <Link href="/about">The Whitewhale Journey</Link>
              </Button>
              <Button asChild size="lg" className="font-bold w-full sm:w-auto" style={{ backgroundColor: '#0000FF' }}>
                <Link href="/contact">Let’s Build Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageHeader
        title="Ready to Build Something Great?"
        description="Let's connect and explore how our development services can bring your project to life."
        ctaLabel="Get in Touch"
        ctaLink="/contact"
        className="px-6 sm:px-8"
      />
    </div>
  );
}
