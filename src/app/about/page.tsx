import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/constants";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, vision, and the dedicated team driving our success.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Innovate Solutions"
        description="We are a passionate team of engineers, designers, and strategists dedicated to building exceptional digital products."
        imageUrl={placeholderImages.heroAbout.imageUrl}
        imageHint={placeholderImages.heroAbout.imageHint}
      />

      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground">Our Story</h2>
              <p>
                Founded in 2015, Innovate Solutions was built on the idea that technology can solve real-world problems. We saw a need for a software partner that was agile, collaborative, and deeply committed to client success.
              </p>
              <p>
                Over the years, we've grown into a full-service digital product agency, but our core philosophy remains the same: we build software that people love to use, and we build relationships that last.
              </p>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To empower businesses with innovative and reliable technology, turning ambitious ideas into powerful digital realities.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To be the most trusted technology partner for businesses looking to innovate, scale, and lead their industries.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Team</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              A blend of experienced architects, creative designers, and passionate developers.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      data-ai-hint={member.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-headline text-lg font-bold">{member.name}</h3>
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
