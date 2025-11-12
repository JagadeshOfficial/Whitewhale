
import Image from 'next/image';

interface SideBySideProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  title: string;
  text: string;
  children?: React.ReactNode;
  imageHeight?: number; // New optional prop for image height
}

export function SideBySide({
  imageSrc,
  imageAlt,
  imagePosition,
  title,
  text,
  children,
  imageHeight = 400, // Default height of 400
}: SideBySideProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`prose prose-lg max-w-none text-muted-foreground ${imagePosition === 'right' ? 'md:order-1' : ''}`}>
            <h2 className="text-3xl font-headline text-foreground mb-4">{title}</h2>
            <p>{text}</p>
            <ul className="mt-4 space-y-4">{children}</ul>
          </div>
          <div className={`${imagePosition === 'left' ? 'md:order-2' : ''}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={imageHeight} // Use the new imageHeight prop
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
