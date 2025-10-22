import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageHeaderProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  ctaLabel?: string;
  ctaLink?: string;
  withBackground?: boolean;
}

export function PageHeader({ 
  title, 
  description, 
  imageUrl, 
  imageHint, 
  ctaLabel, 
  ctaLink,
  withBackground = true,
}: PageHeaderProps) {
  const content = (
    <div className="relative z-10 px-4 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
        {description}
      </p>
      {ctaLabel && ctaLink && (
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={ctaLink}>{ctaLabel}</Link>
          </Button>
        </div>
      )}
    </div>
  );

  if (imageUrl) {
    return (
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={imageHint}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="text-primary-foreground">{content}</div>
      </section>
    );
  }

  return (
    <section className={withBackground ? "bg-secondary" : ""}>
      <div className="container mx-auto px-4">
        {content}
      </div>
    </section>
  );
}
