import type { NavLink } from "./types";
import { services } from "./data";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    subLinks: services.map(service => ({ href: service.href, label: service.title })),
  },
  { href: "/case-studies", label: "Case Studies"},
  { href: "/about", label: "About" },
  { href: "/insights", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
