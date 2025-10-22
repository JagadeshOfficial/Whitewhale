import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { placeholderImages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for project inquiries or other questions.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We're here to answer your questions. Reach out to us and we'll respond as soon as we can."
        imageUrl={placeholderImages.heroContact.imageUrl}
        imageHint={placeholderImages.heroContact.imageHint}
      />

      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-headline font-bold">Get In Touch</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Have a project in mind? Use the form to send us a message, or contact us directly using the information below.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 Innovation Drive, Suite 100<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:contact@innovatesolutions.com" className="text-muted-foreground hover:text-primary">contact@innovatesolutions.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
