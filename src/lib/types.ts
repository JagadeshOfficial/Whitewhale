
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
};

export type Insight = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
};

export type Client = {
  id: string;
  name:string;
  logoUrl: string;
}

export type MediaMention = {
  id: string;
  title: string;
  publication: string;
  date: string;
  link: string;
  imageUrl: string;
}

export type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
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

export type JobOpening = {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
};
