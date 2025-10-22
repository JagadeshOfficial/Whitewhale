export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

export type Service = {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
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

export type PortfolioCompany = {
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
