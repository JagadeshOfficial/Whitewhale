
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
  imageUrl?: string;
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

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  longDescription: string;
  results: string[];
  imageUrl: string;
}
