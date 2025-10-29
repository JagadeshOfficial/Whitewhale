
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckCircle } from "lucide-react";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equity Markets",
  description: "Our disciplined approach to investing in public equity markets for sustainable, long-term growth.",
};

const equityService = services.find(s => s.title === 'Equity Markets');

const strategies = [
    "Fundamental Research",
    "Long-Term Horizon",
    "Quality Compounders",
    "Concentrated Portfolio",
    "Risk Management",
    "Global Perspective"
];

export default function EquityMarketsPage() {
  return (
    <div>
      <PageHeader
        title="Equity Markets"
        description={"Strategic investments in public markets to generate consistent, long-term growth."}
        videoUrl={"https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4"}
      />

      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-headline text-foreground">Our Strategy</h2>
              <p>
                We believe that superior returns are achieved by being patient, disciplined, and focused on the underlying fundamentals of the businesses we own. Our process is designed to mitigate behavioral biases and focus on what truly matters: the long-term intrinsic value of a company.
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/seed/equity-strategy/800/600"
                    alt="Financial charts and graphs"
                    fill
                    className="object-cover"
                    data-ai-hint="financial charts"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Core Tenets of Our Approach</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every investment decision we make in the public markets.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {strategies.map((strategy) => (
              <div key={strategy} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                    <h3 className="font-headline text-lg font-semibold">{strategy}</h3>
                    <p className="mt-1 text-muted-foreground text-sm">
                        Focused analysis on business performance and market position.
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
