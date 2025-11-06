
import { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/common/PageHeader";
import { clients } from "@/lib/clients";
import { InfiniteClientScroller } from "@/components/common/InfiniteClientScroller";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "We take pride in being the trusted technology partner for organizations across industries and geographies.",
};

export default function ClientsPage() {
  return (
    <div>
      <PageHeader
        title="Our Clients"
        description="Building successful partnerships"
        videoUrl="/videos/contact-background.mp4"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Valued Partners</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We take pride in being the trusted technology partner for organizations across industries and geographies. From startups to enterprises, we empower our clients with innovative IT solutions that drive performance, scalability, and digital transformation.
            </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Trusted by Industry Leaders</h2>
          </div>
          <InfiniteClientScroller items={clients} />
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop"
                alt="Collaborative Client Partnership"
                width={800}
                height={600}
                className="object-cover w-full h-full shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Vision, Our Expertise</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At WhiteWhale, we believe in building more than just software; we build lasting partnerships. Our approach is founded on a deep understanding of your unique challenges and a shared commitment to achieving your goals. We align our success with yours, ensuring that every solution we deliver is a step toward a more innovative and prosperous future.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Let us be the catalyst for your next big achievement. Together, we can turn your vision into a reality that drives growth and sets new industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
