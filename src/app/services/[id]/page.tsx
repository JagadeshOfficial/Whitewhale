
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  params: { id: string };
}

const serviceVideos: { [key: string]: string } = {
  'web-development': 'https://videos.pexels.com/video-files/5740359/5740359-hd_1920_1080_30fps.mp4',
  'mobile-app-development': 'https://videos.pexels.com/video-files/5933240/5933240-hd_1920_1080_25fps.mp4',
  'cloud-services': 'https://videos.pexels.com/video-files/4780517/4780517-hd_1920_1080_24fps.mp4',
  'ui-ux-design': 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  'artificial-intelligence-machine-learning': 'https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4',
  'cybersecurity': 'https://videos.pexels.com/video-files/5361234/5361234-hd_1920_1080_25fps.mp4',
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.id === params.id);
  if (!service) {
    return {
      title: "Service Not Found"
    }
  }
  return {
    title: `${service.title} | Services`,
    description: service.longDescription,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      <PageHeader
        title={service.title}
        description={service.description}
        videoUrl={serviceVideos[service.id] || 'https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4'}
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-headline text-foreground mb-0">{`Our ${service.title} Expertise`}</h2>
                </div>
              <p>{service.longDescription}</p>
              <Button asChild size="lg" className="mt-4">
                  <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`https://picsum.photos/seed/${service.id}-detail/800/600`}
                alt={`${service.title} illustration`}
                fill
                className="object-cover"
                data-ai-hint="abstract technology"
              />
            </div>
          </div>
        </div>
      </section>

       <PageHeader
        title="Ready to Start Your Project?"
        description={`Let's discuss how our ${service.title} services can help you achieve your goals.`}
        ctaLabel="Contact Us Today"
        ctaLink="/contact"
        withBackground={true}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return services.filter(s => s.id !== 'venture-capital').map((service) => ({
    id: service.id,
  }));
}
