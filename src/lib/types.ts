export interface NavLink {
  href: string;
  label: string;
  subLinks?: NavLink[];
}
