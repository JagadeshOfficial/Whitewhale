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
        title="About Investor Insights Hub"
        description="We are a forward-thinking investment firm dedicated to identifying and nurturing the most promising ventures that will shape tomorrow's world."
        imageUrl={placeholderImages.heroAbout.imageUrl}
        imageHint={placeholderImages.heroAbout.imageHint}
      />

      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground">Our Story</h2>
              <p>
                Founded in 2010 by a group of passionate investors and entrepreneurs, Investor Insights Hub was built on a simple premise: to be a true partner to visionaries. We saw a gap in the market for an investment firm that provided not only capital but also deep operational expertise and unwavering support.
              </p>
              <p>
                Over the past decade, we have grown from a small fund to a multi-strategy investment platform, but our core philosophy remains unchanged. We believe in building lasting relationships and growing together with our portfolio companies.
              </p>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To empower visionary entrepreneurs and businesses with the capital, strategic guidance, and network they need to create transformative and lasting value.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To be the investment partner of choice for the next generation of industry-defining companies, fostering innovation that drives positive global change.</p>
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
              A blend of experienced investors, operators, and technologists passionate about building great companies.
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
