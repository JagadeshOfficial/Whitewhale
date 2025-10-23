import { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  subLinks?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
}

export interface MediaMention {
    id: string;
    title: string;
    publication: string;
    date: string;
    link: string;
    imageUrl: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}
