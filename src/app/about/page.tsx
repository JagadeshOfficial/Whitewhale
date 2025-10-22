import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/image-map";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Innovate Solutions",
  description: "Learn about our mission, vision, and the dedicated team at Innovate Solutions.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="About Innovate Solutions"
        description="We are a team of passionate innovators, dedicated to crafting exceptional software that drives results."
        imageUrl={placeholderImages.heroAbout.imageUrl}
        imageHint={placeholderImages.heroAbout.imageHint}
        ctaLabel="Get in Touch"
        ctaLink="/contact"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground mb-4">Our Story</h2>
              <p>
                Founded with the vision of making a mark in the software industry, Innovate Solutions is committed to delivering excellence. We believe in building strong partnerships with our clients, understanding their needs, and providing solutions that are not only effective but also elegant.
              </p>
              <p>
                Our journey has been one of continuous learning and growth. We have evolved from a small team of enthusiasts to a full-fledged software house, but our core values of innovation, quality, and integrity have remained unchanged.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={placeholderImages.heroContact.imageUrl}
                alt="Our Office"
                data-ai-hint={placeholderImages.heroContact.imageHint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To empower businesses with innovative and reliable technology, turning ambitious ideas into powerful digital realities.</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To be the most trusted technology partner for businesses looking to innovate, scale, and lead their industries.</p>
                </CardContent>
              </Card>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground mb-4">Our Philosophy</h2>
              <p>
                We believe in a collaborative approach, working closely with our clients to understand their unique challenges and opportunities. Our process is transparent, our communication is clear, and our focus is always on delivering the best possible outcome.
              </p>
              <p>
                We are not just a software company; we are your technology partner. We are here to help you navigate the ever-changing digital landscape and achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The driving force behind our success is our team of dedicated professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative h-48 w-48 rounded-full mx-auto overflow-hidden mb-4">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      data-ai-hint={member.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-accent-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
