
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "./ContactForm";
import { Mail, Waves, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for project inquiries or other questions.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        videoUrl="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4"
      >
       
      </PageHeader>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-headline font-bold">Drop us a line</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Use the form to send us a message, or contact us directly using the information below.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Location (India)</h3>
                    <p className="text-muted-foreground">Plot no.18, iLabs Centre, Level 2, Oval Building, Inorbit Mall Rd, Hyderabad, Telangana 500081</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Location (USA)</h3>
                    <p className="text-muted-foreground">1010 E Elm St, Springfield, Missouri 65806, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">For Business</h3>
                    <a href="mailto:business@whitewhalesoft.in" className="text-muted-foreground hover:text-primary">business@whitewhalesoft.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">For Careers</h3>
                    <a href="mailto:contact@whitewhalesoft.in" className="text-muted-foreground hover:text-primary">contact@whitewhalesoft.in</a>
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

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-headline font-bold text-center mb-8">Our Locations</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                 <iframe 
                    src="https://maps.google.com/maps?q=Plot%20no.18,%20iLabs%20Centre,%20Level%202,%20Oval%20Building,%20Inorbit%20Mall%20Rd,%20Hyderabad,%20Telangana%20500081&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                 <iframe 
                    src="https://maps.google.com/maps?q=1010%20E%20Elm%20St,%20Springfield,%20Missouri%2065806,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
