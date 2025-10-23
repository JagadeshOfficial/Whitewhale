
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { insights } from '@/lib/data';

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore our latest articles, tutorials, and perspectives on technology and software development.",
};

export default function InsightsPage() {
  return (
    <div>
      <PageHeader
        title="Tech Insights & Ideas"
        description="Stay ahead of the curve with our expert commentary on the trends shaping the future of technology."
        imageUrl="https://images.unsplash.com/photo-1532294220147-279399e4e00f?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwcmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      />

      <section className="bg-secondary">
        <div className="container mx-auto px-4">
           <Card className="bg-primary text-primary-foreground shadow-xl overflow-hidden">
             <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-6 w-6 text-accent" />
                    <h2 className="text-3xl font-headline font-bold">AI-Powered Summarizer</h2>
                  </div>
                  <p className="text-primary-foreground/80 mt-2">
                    Pressed for time? Paste any technical article or document into our intelligent tool and get a concise, easy-to-read summary in seconds.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="mt-6">
                    <Link href="/summarize">Try the Summarizer <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
                <div className="relative h-64 md:h-full hidden md:block">
                  <Image src="https://picsum.photos/seed/aisummarizer/800/600" alt="AI abstract" fill className="object-cover" />
                </div>
             </div>
           </Card>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <Card key={insight.id} className="overflow-hidden flex flex-col group">
                <div className="relative h-56 w-full">
                  <Image
                    src={insight.imageUrl}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{insight.title}</CardTitle>
                  <CardDescription>{insight.date} &bull; {insight.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{insight.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 font-bold">
                    <Link href={`/insights/${insight.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {/* Add pagination controls here if needed */}
        </div>
      </section>
    </div>
  );
}
