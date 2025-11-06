
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Whitewhale Software Solutions",
  description: "Learn about our mission, vision, and the core values that drive Whitewhale Software Solutions.",
};

const coreValues = [
    { name: "Innovation", description: "Constantly exploring emerging technologies to create forward-thinking solutions.", icon: <Lightbulb className="h-8 w-8" /> },
    { name: "Collaboration", description: "Teamwork, trust, and open communication drive our success.", icon: <Users className="h-8 w-8" /> },
    { name: "Excellence", description: "Delivering quality, precision, and performance in every project.", icon: <Award className="h-8 w-8" /> },
    { name: "Integrity", description: "Acting with honesty, fairness, and long-term commitment.", icon: <ShieldCheck className="h-8 w-8" /> },
    { name: "Customer Success", description: "Measuring our growth by the value we create for our clients.", icon: <HeartHandshake className="h-8 w-8" /> },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="About Whitewhale Software Solutions"
        description="Innovating the Future, One Line of Code at a Time."
        videoUrl="/videos/contact-background.mp4"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground mb-4">Who We Are</h2>
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
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern Office Space"
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
             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop"
                alt="Team discussing a project"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <Card className="bg-card shadow-md border-none">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To empower businesses with smart, scalable, and future-ready software solutions that combine creativity, technology, and innovation across multiple platforms.</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md border-none">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To be a global technology innovator simplifying digital transformation and creating intelligent solutions for a connected, sustainable world.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((value) => (
              <div key={value.name} className="text-center p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    {value.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-foreground">{value.name}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
