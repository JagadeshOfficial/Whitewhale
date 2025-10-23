import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS } from '@/lib/constants';

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
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></Link>
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
            <h3 className="font-headline font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Innovation Drive</li>
              <li>San Francisco, CA 94105</li>
              <li className="pt-2"><a href="mailto:contact@innovatesolutions.com" className="hover:text-foreground">contact@innovatesolutions.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-foreground">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Innovate Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
