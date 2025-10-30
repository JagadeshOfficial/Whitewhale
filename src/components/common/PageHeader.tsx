
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageHeaderProps {
  title: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  ctaLabel?: string;
  ctaLink?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  imageUrl,
  videoUrl,
  ctaLabel,
  ctaLink,
  children,
}: PageHeaderProps) {
  const content = (
    <div className="relative z-10 px-4 text-center max-w-3xl mx-auto py-20">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
      {ctaLabel && ctaLink && (
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={ctaLink}>{ctaLabel}</Link>
          </Button>
        </div>
      )}
    </div>
  );

  if (videoUrl) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
          key={videoUrl}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="text-primary-foreground">{content}</div>
      </section>
    );
  }

  if (imageUrl) {
    return (
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="text-primary-foreground">{content}</div>
      </section>
    );
  }

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 text-primary-foreground">
        {content}
      </div>
    </section>
  );
}
