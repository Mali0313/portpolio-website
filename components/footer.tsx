import React from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";
import { Logo } from "@/components/logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#2B1B14] text-white border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Column 1: Brand & Owner Info */}
          <div>
            <Link
              href="/"
              className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
              aria-label="Home page"
            >
              <Logo size="md" />
            </Link>
            <p className="mt-3 text-sm text-white/75 max-w-sm">
              {siteConfig.owner.role} from {siteConfig.owner.location}.
            </p>
            <p className="mt-1 text-xs text-white/60">
              {siteConfig.owner.status.join(" • ")}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                Navigation
              </span>
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 block md:text-right">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub Profile"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-accent hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  aria-label="Send Direct Email"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-accent hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Chat on WhatsApp"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-accent hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            © {currentYear} {siteConfig.owner.name || "[YOUR FULL NAME]"}. All rights reserved.
          </p>
          <p className="text-white/50">
            Professional Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
