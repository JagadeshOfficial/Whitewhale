
import { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckCircle, Code, Cloud, ClipboardCheck, Users, Wrench, Globe, ShieldCheck, Zap, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Outsourcing Services",
  description: "Empowering businesses through smart IT partnerships. We deliver scalable, secure, and cost-efficient IT solutions tailored to your goals.",
};

export default function ITOutsourcingPage() {
  return (
    <div>
      <PageHeader 
        title="IT Outsourcing Services"
        description="Empowering Businesses Through Smart IT Partnerships"
        videoUrl="/videos/contact-background.mp4"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
                <Image 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop" 
                    alt="Expert IT Outsourcing Team" 
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Redefining IT Outsourcing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At WHITEWHALE SOFTWARE SOLUTIONS, we redefine IT outsourcing by combining deep technical expertise with business intelligence. Our goal is simple — to help enterprises focus on growth while we manage their technology backbone. From application development to cloud infrastructure, we deliver scalable, secure, and cost-efficient IT solutions tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for quality, security, and cost-efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Expert Talent Pool</h3>
              <p className="text-muted-foreground">Certified professionals across technologies like Java, Python, .NET, Cloud, and AI.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Global Delivery Model</h3>
              <p className="text-muted-foreground">Agile teams distributed across time zones for faster turnaround.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Quality & Security</h3>
              <p className="text-muted-foreground">ISO-compliant processes ensuring confidentiality and data protection.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Cost Optimization</h3>
              <p className="text-muted-foreground">Flexible engagement models that reduce operational expenses without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to cover all your technology needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-secondary p-8 rounded-lg text-center shadow-lg">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Software Development Outsourcing</h3>
              <p className="text-muted-foreground">End-to-end custom web and mobile application development.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center shadow-lg">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Infrastructure & Cloud Management</h3>
              <p className="text-muted-foreground">Optimize operations with 24/7 monitoring, cloud migration, and DevOps automation.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center shadow-lg">
              <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">QA & Testing Services</h3>
              <p className="text-muted-foreground">Ensure performance, reliability, and scalability with our specialized testing teams.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center shadow-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">IT Staff Augmentation</h3>
              <p className="text-muted-foreground">Get access to experienced developers, analysts, and architects — when and where you need them.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center shadow-lg">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Maintenance & Support</h3>
              <p className="text-muted-foreground">Continuous improvement and support to keep your systems running at peak efficiency.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center shadow-lg">
              <BarChart2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Data Analytics & BI</h3>
              <p className="text-muted-foreground">Unlock insights from your data with our business intelligence and analytics solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="md:order-2">
                <Image 
                    src="https://images.pexels.com/photos/5833267/pexels-photo-5833267.jpeg" 
                    alt="Business growth chart" 
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Technology Partner for Growth</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                With our IT outsourcing services, you gain more than technical support — you gain a strategic partner who understands your business vision. Let us handle the complexity of technology so you can focus on innovation, customers, and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
