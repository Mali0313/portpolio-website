export interface OwnerInfo {
  name: string;
  role: string;
  location: string;
  status: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  email: string;
  whatsapp: string;
}

export interface SiteConfig {
  owner: OwnerInfo;
  socials: SocialLinks;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  owner: {
    name: "Muhammad Ali",
    role: "Full-Stack Web Developer",
    location: "Khyber Pakhtunkhwa (KPK), Pakistan",
    status: ["Freelancer", "Student"],
  },
  socials: {
    github: "https://github.com/Mali0313",
    email: "muhammadali03139505103@gmail.com",
    whatsapp: "https://wa.me/923139505103?text=Hi%20Muhammad%20Ali%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
};
