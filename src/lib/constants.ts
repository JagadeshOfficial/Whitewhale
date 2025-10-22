import { PlaceHolderImages } from "./placeholder-images";
import type { NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "#",
    label: "Services",
    subLinks: [
      { href: "/venture-capital", label: "Venture Capital" },
      { href: "/equity-markets", label: "Equity Markets" },
      { href: "/secondaries", label: "Secondaries" },
    ],
  },
  { href: "/insights", label: "Insights" },
  { href: "/media", label: "Media" },
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
