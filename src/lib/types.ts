export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  imageUrl?: string;
  imageHint?: string;
};

export type Insight = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  date: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
};

export type Client = {
  id: string;
  name:string;
  logoUrl: string;
  logoHint: string;
}

export type MediaMention = {
  id: string;
  title: string;
  publication: string;
  date: string;
  link: string;
  imageUrl: string;
  imageHint: string;
}

export type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
};
