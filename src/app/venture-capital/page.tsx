
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { clients, investmentApproach, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Venture Capital | WHITEWHALE SOFTWARE SOLUTIONS",
  description: "Our approach to investing in and supporting the next generation of market-defining companies.",
};

const vcService = services.find(s => s.id === 'venture-capital');

export default function VentureCapitalPage() {
  return (
    <div>
      <PageHeader
        title="Venture Capital"
        description={vcService?.description || "Investing in visionary founders building the future."}
        videoUrl="https://videos.pexels.com/video-files/8044631/8044631-hd_1920_1080_25fps.mp4"
      />

      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold">Our Philosophy</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {vcService?.longDescription}
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/seed/vc-philosophy/800/600"
                    alt="Team discussing strategy"
                    fill
                    className="object-cover"
                    data-ai-hint="team strategy"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Investment Approach</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine deep industry expertise with a hands-on approach to help our companies succeed.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentApproach.map((item) => (
                <div key={item.title} className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                        <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-headline text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground text-sm">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Portfolio</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Proud to partner with these innovative companies.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((company) => (
              <div key={company.id} className="relative h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
