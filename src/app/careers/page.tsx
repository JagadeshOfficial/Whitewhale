
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { JobOpening } from '@/lib/types';
import { MapPin } from 'lucide-react';
import { ApplyForm } from './ApplyForm';
import { getJobs } from '@/lib/jobs';

export const metadata: Metadata = {
  title: 'Careers | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Join our team of innovators and help us build the future of software.',
};

export default async function CareersPage() {
  const jobOpenings: JobOpening[] = await getJobs();

  return (
    <div className="bg-background">
      <PageHeader
        title="Join Our Team. Build the Future."
        description="At WhiteWhale Software Solutions, we’re not just building software — we’re shaping the digital future."
        videoUrl="/videos/contact-background.mp4"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Current Openings</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We’re always on the lookout for passionate innovators, problem solvers, and tech enthusiasts who are ready to make an impact.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you’re a fresher eager to learn or a professional ready to take your career to the next level, we offer opportunities that challenge, inspire, and reward.
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
