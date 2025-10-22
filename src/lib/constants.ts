import { PlaceHolderImages } from "./placeholder-images";
import type { NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "#",
    label: "Services",
    subLinks: [
      { href: "/custom-software", label: "Custom Software" },
      { href: "/web-mobile-apps", label: "Web & Mobile Apps" },
      { href: "/ai-solutions", label: "AI Solutions" },
    ],
  },
  { href: "/insights", label: "Blog" },
  { href: "/media", label: "Case Studies" },
  { href: "/contact", label: "Contact Us" },
];

function createImageMap() {
  const map: { [key: string]: { imageUrl: string; imageHint: string } } = {};
  PlaceHolderImages.forEach(img => {
    map[img.id] = { imageUrl: img.imageUrl, imageHint: img.imageHint };
  });
  return map;
}

export const placeholderImages = createImageMap();
