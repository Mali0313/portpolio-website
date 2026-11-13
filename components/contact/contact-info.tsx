import React from "react";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { FadeUp } from "@/components/animations";

export function ContactInfo() {
  const contactMethods = [
    {
      title: "Email",
      value: "muhammadali03139505103@gmail.com",
      href: "mailto:muhammadali03139505103@gmail.com",
      actionText: "Send direct email",
      icon: Mail,
      isExternal: false,
    },
    {
      title: "WhatsApp",
      value: "03139505103",
      href: "https://wa.me/923139505103",
      actionText: "Chat on WhatsApp",
      icon: MessageCircle,
      isExternal: true,
    },
    {
      title: "GitHub",
      value: "github.com/Mali0313",
      href: "https://github.com/Mali0313",
      actionText: "View repositories",
      icon: GithubIcon,
      isExternal: true,
    },
    {
      title: "Location",
      value: "Khyber Pakhtunkhwa, Pakistan",
      href: null,
      actionText: "Open to worldwide remote & freelance",
      icon: MapPin,
      isExternal: false,
    },
  ];

  return (
    <div className="space-y-3.5 sm:space-y-4">
      {contactMethods.map((item, index) => {
        const Icon = item.icon;
        const CardContent = (
          <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary-dark/8 shadow-soft hover:shadow-card hover:border-accent/50 transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cream border border-primary-dark/6 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-[#2B1B14] transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-text-muted">
                  {item.title}
                </span>
                {item.href && (
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-contrast transition-colors duration-200" />
                )}
              </div>
              <p className="mt-1 font-medium text-primary-dark text-xs sm:text-base break-all sm:break-normal">
                {item.value}
              </p>
              <span className="mt-0.5 block text-xs text-text-muted">
                {item.actionText}
              </span>
            </div>
          </div>
        );

        return (
          <FadeUp key={item.title} delay={index * 0.08}>
            {item.href ? (
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
              >
                {CardContent}
              </a>
            ) : (
              <div>{CardContent}</div>
            )}
          </FadeUp>
        );
      })}
    </div>
  );
}
