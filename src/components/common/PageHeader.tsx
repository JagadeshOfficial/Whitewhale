
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  ctaLabel?: string;
  ctaLink?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  imageUrl,
  videoUrl,
  ctaLabel,
  ctaLink,
  children,
  className
}: PageHeaderProps) {
  // Content block is now defined without vertical padding, which will be applied by the container
  const content = (
    <div className={cn("relative z-10 px-4 text-center max-w-3xl mx-auto", className)}>
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
          <Button asChild size="lg" variant="secondary">
            <Link href={ctaLink}>{ctaLabel}</Link>
          </Button>
        </div>
      )}
    </div>
  );

  if (videoUrl) {
    // This section now mirrors the homepage's structure for a consistent look
    return (
      <section className="relative w-full h-screen overflow-hidden -mt-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
          key={videoUrl}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-20 h-full grid place-items-center text-primary-foreground pt-16">
            {content}
        </div>
      </section>
    );
  }

  if (imageUrl) {
    return (
      <section className="relative w-full h-[75vh] flex items-center justify-center">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
        {/* Padding is added here to vertically center the content */}
        <div className="text-primary-foreground py-20">{content}</div>
      </section>
    );
  }

  // Padding is added here for the standard, non-media header
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-4 text-slate-100">
        {content}
      </div>
    </section>
  );
}
