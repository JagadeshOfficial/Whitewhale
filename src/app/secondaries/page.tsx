
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, ShieldCheck } from "lucide-react";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Secondaries",
  description: "Providing tailored liquidity solutions for private market investors, founders, and employees.",
};

const secondariesService = services.find(s => s.title === 'Secondaries');

const benefits = [
    {
        icon: Users,
        title: "For LPs",
        description: "Achieve early liquidity, rebalance portfolios, and manage fund life cycles effectively."
    },
    {
        icon: FileText,
        title: "For Founders & Employees",
        description: "Gain personal liquidity without waiting for a company sale or IPO, enabling financial planning."
    },
    {
        icon: TrendingUp,
        title: "For GPs",
        description: "Offer liquidity options to LPs, restructure funds, and manage portfolio concentration."
    },
    {
        icon: ShieldCheck,
        title: "Discreet & Efficient",
        description: "We conduct all transactions with the utmost confidentiality and efficiency, respecting all stakeholders."
    },
]

export default function SecondariesPage() {
  return (
    <div>
      <PageHeader
        title="Secondaries"
        description={"Providing liquidity solutions in the private markets for investors and founders."}
        videoUrl={"https://videos.pexels.com/video-files/7553534/7553534-hd_1920_1080_25fps.mp4"}
      />

       <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-80 w-full rounded-lg overflow-hidden md:order-2">
                <Image 
                    src="https://picsum.photos/seed/secondaries-process/800/600"
                    alt="Two people shaking hands over a deal"
                    fill
                    className="object-cover"
                    data-ai-hint="business handshake"
                />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground md:order-1">
              <h2 className="text-3xl font-headline text-foreground">A Trusted Partner in Private Market Liquidity</h2>
              <p>
                The private markets have grown exponentially, but liquidity remains a challenge. Our secondaries team specializes in navigating this complex landscape, offering customized solutions that align the interests of sellers, general partners, and the underlying companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Who We Help</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our solutions are tailored to meet the unique needs of various private market participants.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <div className="p-2 bg-primary/10 rounded-md">
                        <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
