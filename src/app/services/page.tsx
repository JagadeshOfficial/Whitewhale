
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { services } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Our Services | WHITEWHALE SOFTWARE SOLUTIONS',
  description: 'Explore the wide range of services we offer to help your business grow and succeed.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Our Services"
        description="We offer a wide range of services to help your business grow and succeed. Explore our offerings below."
        videoUrl="/videos/contact-background.mp4"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`relative w-full h-80 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={service.imageUrl || 'https://picsum.photos/seed/' + service.id + '/800/600'}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-headline font-bold">{service.title}</h3>
                  <p className="mt-4 text-lg text-muted-foreground">{service.longDescription}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
