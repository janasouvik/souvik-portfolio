export interface NavLink {
  label: string;
  id: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", id: "home", href: "#home" },
  { label: "Services", id: "services", href: "#services" },
  { label: "Resume", id: "resume", href: "#resume" },
  { label: "Work", id: "work", href: "#work" },
  { label: "Contact", id: "contact", href: "#contact" },
];
