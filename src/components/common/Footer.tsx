import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { Logo } from '@/components/common/Logo';

export function Footer() {
    const servicesLinks = NAV_LINKS.find(link => link.label === "Services")?.subLinks?.slice(0, 5) || [];
    const companyLinks = NAV_LINKS.filter(link => link.label !== "Home" && !link.subLinks);

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Engineering Digital Excellence.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://twitter.com/whiwtewhale2023" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link>
              <Link href="https://www.linkedin.com/in/white-w-705173285/" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {servicesLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link>
                </li>
              ))}
               <li>
                  <Link href="/services" className="text-sm font-bold text-primary hover:underline">View All</Link>
                </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold">Our Location (India)</h5>
                  <p className="text-muted-foreground">Plot no.18, iLabs Centre, Level 2, Oval Building, Inorbit Mall Rd, Hyderabad, Telangana 500081</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold">Our Location (USA)</h5>
                  <p className="text-muted-foreground">1010 E Elm St, Springfield, Missouri 65806, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold">For Business</h5>
                  <a href="mailto:business@whitewhalesoft.in" className="text-muted-foreground hover:text-primary">business@whitewhalesoft.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold">For Careers</h5>
                  <a href="mailto:contact@whitewhalesoft.in" className="text-muted-foreground hover:text-primary">contact@whitewhalesoft.in</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WHITEWHALE SOFTWARE SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
