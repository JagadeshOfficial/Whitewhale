import { insights } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = insights.find((p) => p.id === params.id);
  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }
  return {
    title: insight.title,
    description: insight.description,
  };
}

export default function InsightDetailPage({ params }: Props) {
  const insight = insights.find((p) => p.id === params.id);

  if (!insight) {
    notFound();
  }

  const recentPosts = insights.filter(p => p.id !== insight.id).slice(0, 4);

  return (
    <div>
      <PageHeader
        title={insight.title}
        description={`Published on ${insight.date} in ${insight.category}`}
        imageUrl={insight.imageUrl}
        imageHint={insight.imageHint}
      />
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lg:gap-12">
            <main className="lg:col-span-2">
              <div className="prose prose-lg sm:prose-xl max-w-none text-muted-foreground">
                <p className="lead">{insight.description}</p>
                <p>
                  In the ever-evolving landscape of technology, staying ahead requires a commitment to continuous learning and adaptation. This post delves into the core concepts that are driving innovation in {insight.category}, offering a detailed perspective on the trends and tools that are shaping the future. Our goal is to provide actionable insights that you can apply to your own projects and business strategies.
                </p>
                
                <div className="relative my-8 rounded-lg overflow-hidden not-prose">
                  <Image 
                    src="https://picsum.photos/seed/insight-content/1200/600" 
                    alt={`An illustrative image for ${insight.title}`}
                    width={1200}
                    height={600}
                    className="object-cover"
                   />
                </div>

                <h3>Key Takeaways</h3>
                <p>
                  We explore the fundamental principles behind modern {insight.category.toLowerCase()} and how they are being leveraged to build robust, scalable, and intelligent systems. From foundational algorithms to advanced architectural patterns, this is what you need to know.
                </p>
                <ul>
                  <li><strong>Scalability:</strong> Building systems that can handle growth without compromising performance.</li>
                  <li><strong>User-Centric Design:</strong> The critical role of UX in creating products that resonate with users.</li>
                  <li><strong>Data-Driven Decisions:</strong> How to leverage analytics to inform your development process.</li>
                  <li><strong>Security First:</strong> Best practices for securing your applications and protecting user data.</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  The journey through the world of {insight.category.toLowerCase()} is both challenging and rewarding. By embracing the principles discussed here, you can not only build better software but also contribute to the broader technological advancements that are changing our world. Thank you for reading, and we invite you to continue the conversation in the comments below or by exploring our other articles.
                </p>
              </div>
            </main>

            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {recentPosts.map(post => (
                        <li key={post.id}>
                          <Link href={`/insights/${post.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>

          <div className="text-center pt-16">
            <Button asChild variant="outline">
                <Link href="/insights">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Insights
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
