import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { jobOpenings } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { ApplyForm } from './ApplyForm';

export const metadata: Metadata = {
  title: 'Careers | Innovate Solutions',
  description: 'Join our team of innovators and help us build the future of software.',
};

export default function CareersPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Join Our Team"
        description="We are always looking for talented individuals to join us. Explore our open positions and find your next opportunity."
        imageUrl="https://picsum.photos/seed/careers-hero/1920/1080"
        imageHint="A diverse team working together in a modern office"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Current Openings</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find where you fit in. We're a growing team with a passion for innovation and excellence.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                 <CardHeader>
                    <CardTitle className="font-headline text-2xl">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 pt-1">
                        <span>{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
                <CardFooter>
                    <ApplyForm jobTitle={job.title} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
