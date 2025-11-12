
import type { NavLink } from "./types";
import { services } from "./data";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    subLinks: services.filter(s => s.id !== 'venture-capital' && s.id !== 'equity-markets' && s.id !== 'secondaries' && s.id !== 'ats-resume-builder').map(service => ({ href: `/services/${service.id}`, label: service.title })),
  },
  { href: "/clients", label: "Clients" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/contact", label: "Contact" },
];
