import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { mediaMentions } from '@/lib/data';
import { placeholderImages } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore our success stories and see how we've helped our clients achieve their goals.",
};

export default function MediaPage() {
  return (
    <div>
      <PageHeader
        title="Our Work in Action"
        description="A look at some of the solutions we've delivered for our clients."
        imageUrl={placeholderImages.heroMedia.imageUrl}
        imageHint={placeholderImages.heroMedia.imageHint}
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
                        data-ai-hint={mention.imageHint}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <p className="text-sm text-muted-foreground">{mention.publication}</p>
                      <h3 className="font-headline text-lg font-semibold mt-1 text-foreground">{mention.title}</h3>
                      <div className="flex items-center text-sm text-accent-foreground mt-2 font-semibold">
                        Read Case Study <ExternalLink className="ml-2 h-4 w-4" />
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
