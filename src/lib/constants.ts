
import type { NavLink } from "./types";
import { services } from "./data";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    subLinks: services.filter(s => s.id !== 'venture-capital' && s.id !== 'equity-markets' && s.id !== 'secondaries').map(service => ({ href: `/services/${service.id}`, label: service.title })),
  },
  {
    href: "/it-outsourcing",
    label: "IT Outsourcing",
  },
  { href: "/studies", label: "Innovation in Action"},
  { href: "/about", label: "About" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/contact", label: "Contact" },
];
