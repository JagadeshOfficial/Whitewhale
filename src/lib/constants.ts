
import type { NavLink } from "./types";
import { services } from "./data";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    subLinks: services.filter(s => s.id !== 'venture-capital').map(service => ({ href: `/services/${service.id}`, label: service.title })),
  },
  {
    href: "/investments",
    label: "Investments",
    subLinks: [
      { href: "/venture-capital", label: "Venture Capital" },
      { href: "/equity-markets", label: "Equity Markets" },
      { href: "/secondaries", label: "Secondaries" },
    ]
  },
  { href: "/studies", label: "Case Studies"},
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
