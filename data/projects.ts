export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string | null;
  githubUrl: string;
  category?: string;
  tagline?: string;
  href?: string;
}

export const projects: Project[] = [
  {
    id: "wiredesk",
    title: "WireDesk",
    type: "Full-stack news and articles platform",
    category: "Full-Stack Web App",
    tagline: "News & Media Platform",
    description:
      "A news website where users can read news, and writers can write, upload and publish articles. It includes categories (Top Stories, Pakistan, World, Politics, Business & Tech, Science & Climate, Opinion, Sports), user accounts and roles, and an admin command center for approving articles, managing users and roles, and managing categories.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    image: "/images/wiredesk.png",
    liveUrl: "https://news-simple-ruddy.vercel.app",
    githubUrl: "https://github.com/Mali0313/news-simple-",
    href: "/projects",
  },
  {
    id: "bazaarhub",
    title: "BazaarHub",
    type: "Full-stack e-commerce platform",
    category: "E-Commerce",
    tagline: "E-Commerce Marketplace",
    description:
      "An online store where people can buy and sell products. It includes product categories, flash sales, cart, orders, local payment methods, and an admin console for managing orders and payments, products, inventory, customers, reviews, sales reports and coupons.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    image: "/images/bazaarhub.png",
    liveUrl: "https://e-commerce-website-two-wheat-17.vercel.app",
    githubUrl: "https://github.com/Mali0313/e-commerce-website",
    href: "/projects",
  },
  {
    id: "sweet-crust-bakery",
    title: "Sweet Crust Bakery",
    type: "Static website for a bakery store",
    category: "Business Website",
    tagline: "Bakery Store & WhatsApp Ordering",
    description:
      "A warm, inviting, and fully responsive static website designed for Sweet Crust Bakery in Mardan, Pakistan. Built with clean HTML, CSS, and JavaScript. Features product showcases for fresh handmade cakes, cupcakes, and brownies, interactive menu browsing, photo gallery, location details, and direct one-click ordering via WhatsApp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/sweet-crust-bakery.jpg",
    liveUrl: "https://bakery-shop-website-gules.vercel.app",
    githubUrl: "https://github.com/Mali0313/bakery-shop-website",
    href: "/projects",
  },
];

// For backward compatibility and home page display
export const featuredProjects = projects;
