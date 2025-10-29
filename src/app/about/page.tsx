
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Whitewhale Software Solutions",
  description: "Learn about our mission, vision, and the dedicated team at Whitewhale Software Solutions.",
};

const coreValues = [
    { name: "Innovation", description: "Constantly exploring emerging technologies to create forward-thinking solutions." },
    { name: "Collaboration", description: "Teamwork, trust, and open communication drive our success." },
    { name: "Excellence", description: "Delivering quality, precision, and performance in every project." },
    { name: "Integrity", description: "Acting with honesty, fairness, and long-term commitment." },
    { name: "Customer Success", description: "Measuring our growth by the value we create for our clients." },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="About Whitewhale Software Solutions"
        description="Innovating the Future, One Line of Code at a Time."
        withBackground={true}
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground mb-4">About Us</h2>
              <p>
                At Whitewhale Software Solutions, innovation drives everything we do. Founded three years ago, we’ve grown into a modern tech company specializing in Java, Python, Blockchain, Cloud Computing, and Mobile Application Development. We craft scalable, secure, and high-performance digital solutions that help startups and enterprises thrive in the digital era.
              </p>
              <p>
                From cloud-based enterprise systems to next-gen blockchain applications and intuitive mobile apps, we merge creativity with technology to bring ideas to life.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                “At Whitewhale, we don’t just build software — we engineer possibilities.”
              </blockquote>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/office-team/800/600"
                alt="Our Team Collaborating"
                fill
                className="object-cover"
                data-ai-hint="team collaboration"
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
                  <p className="text-muted-foreground">To empower businesses with smart, scalable, and future-ready software solutions that combine creativity, technology, and innovation across multiple platforms.</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To be a global technology innovator simplifying digital transformation and creating intelligent solutions for a connected, sustainable world.</p>
                </CardContent>
              </Card>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
                 <h2 className="text-3xl font-headline text-foreground mb-6">Our Core Values</h2>
                 <div className="space-y-4">
                    {coreValues.map((value) => (
                        <div key={value.name} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4 mt-1">
                                <Check className="h-4 w-4" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground !m-0">{value.name}</h3>
                                <p className="text-muted-foreground !m-0">{value.description}</p>
                            </div>
                        </div>
                    ))}
                 </div>
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
                      width={300}
                      height={300}
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
