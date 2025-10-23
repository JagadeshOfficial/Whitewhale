import type { NavLink } from "./types";
import { services } from "./data";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    subLinks: services.map(service => ({ href: service.href, label: service.title })),
  },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies"},
  { href: "/insights", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
