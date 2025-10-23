
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PageHeader } from '@/app/common/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { mediaMentions } from '@/lib/data';

export const metadata: Metadata = {
  title: "Media",
  description: "See what others are saying about our work and our impact on the industry.",
};

export default function MediaPage() {
  return (
    <div>
      <PageHeader
        title="Innovate Solutions in the News"
        description="A collection of press mentions, articles, and other features about our company and our projects."
        imageUrl="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpZW50JTIwcHJlc2VudGF0aW9ufGVufDB8fDB8fHww"
      />

      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {mediaMentions.map((mention) => (
              <Card key={mention.id} className="hover:shadow-md transition-shadow duration-300">
                <Link href={mention.link} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-6 grid sm:grid-cols-4 gap-6 items-center">
                    <div className="relative h-12 w-40 sm:h-full sm:w-full grayscale opacity-70">
                       <Image
                        src={mention.imageUrl}
                        alt={`${mention.publication} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <p className="text-sm text-muted-foreground">{mention.publication}</p>
                      <h3 className="font-headline text-lg font-semibold mt-1 text-foreground">{mention.title}</h3>
                      <div className="flex items-center text-sm text-accent-foreground mt-2 font-semibold">
                        Read Article <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
