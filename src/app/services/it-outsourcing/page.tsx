
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { SideBySide } from "@/components/common/SideBySide";
import { CheckCircle, Users, Briefcase, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Outsourcing",
  description: "Leverage our expert IT outsourcing services to reduce costs, improve efficiency, and access specialized talent. Focus on your core business while we handle your technology needs.",
};

export default function ITOutsourcingPage() {
  return (
    <div>
      <PageHeader 
        title="IT Outsourcing"
        description="Focus on your core business while we handle your technology needs."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SideBySide
            imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
            imageAlt="IT Outsourcing Team"
            imagePosition="left"
            title="Unlock Your Business Potential with Expert IT Outsourcing"
            text="In today's fast-paced digital landscape, maintaining a competitive edge requires a strategic approach to technology. Our IT outsourcing services provide a cost-effective solution to access specialized expertise, streamline operations, and drive innovation without the overhead of an in-house team."
          >
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Cost Savings:</strong> Reduce operational costs by eliminating the need for recruitment, training, and infrastructure management.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Access to Expertise:</strong> Instantly tap into a pool of certified IT professionals with extensive industry experience.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Focus on Core Business:</strong> Free up your internal resources to concentrate on strategic initiatives and core business functions.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Scalability & Flexibility:</strong> Scale your IT resources up or down based on your business needs, ensuring you always have the right level of support.</span>
            </li>
          </SideBySide>
        </div>
      </div>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Comprehensive IT Outsourcing Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of IT outsourcing services to meet your specific business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg text-center shadow-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">IT Staff Augmentation</h3>
              <p className="text-muted-foreground">Supplement your existing team with our skilled IT professionals to fill skill gaps and meet project demands.</p>
            </div>
            <div className="bg-background p-8 rounded-lg text-center shadow-lg">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Managed Teams</h3>
              <p className="text-muted-foreground">Get a dedicated, fully-managed team of experts to handle your IT projects from start to finish.</p>
            </div>
            <div className="bg-background p-8 rounded-lg text-center shadow-lg">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Offshore Development Center</h3>
              <p className="text-muted-foreground">Establish a dedicated offshore development center with our help to reduce costs and accelerate growth.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SideBySide
            imageSrc="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop"
            imageAlt="Strategic IT Partnership"
            imagePosition="right"
            title="Your Strategic Partner in Growth"
            text="We do more than just manage your IT. We align our services with your business goals, acting as a strategic partner to help you navigate the complexities of technology and drive sustainable growth. Our proactive approach ensures that your IT infrastructure is not just stable and reliable, but also a catalyst for innovation."
          >
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Proactive Support:</strong> We anticipate and resolve issues before they impact your business, ensuring maximum uptime.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Strategic Guidance:</strong> We provide expert advice to help you make informed technology decisions that support your long-term goals.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <span><strong className="text-foreground">Enhanced Security:</strong> Protect your business with our robust security measures and proactive threat monitoring.</span>
            </li>
          </SideBySide>
        </div>
      </div>

    </div>
  );
}
