import type { NavLink } from "./types";
import { services } from "./data";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "#",
    label: "Services",
    subLinks: services.slice(0, 6).map(service => ({ href: service.href, label: service.title })),
  },
  { href: "/insights", label: "Blog" },
  { href: "/media", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];
