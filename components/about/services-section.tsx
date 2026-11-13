import React from "react";
import { Code, ShoppingBag, Newspaper } from "lucide-react";
import { FadeUp } from "@/components/animations";

const services = [
  {
    icon: Code,
    title: "Full-Stack Websites",
    description:
      "End-to-end web applications built from scratch using React, Next.js, and modern CSS tooling. Engineered for high performance, smooth interactivity, and maintainable codebase architectures.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    description:
      "Modern digital storefronts featuring structured catalog browsing, intuitive product displays, and seamless shopping workflows tailored for desktop and mobile shoppers.",
  },
  {
    icon: Newspaper,
    title: "Content & News Platforms",
    description:
      "High-speed publishing platforms and media systems optimized for readable typography, organized editorial management, and rapid content delivery.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Areas of Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-dark">
              What I Do
            </h2>
            <p className="mt-3 sm:mt-4 text-base text-text-muted font-light">
              Core solutions and specialized web applications I build for clients and users.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.title} delay={index * 0.12}>
                <div className="h-full flex flex-col justify-between bg-cream/40 border border-primary-dark/8 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-cream/70 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-primary-dark/8 flex items-center justify-center text-accent mb-6 shadow-xs">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-normal text-primary-dark mb-3 sm:mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-text-body font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-primary-dark/6 flex items-center text-xs font-medium text-accent-contrast">
                    <span>Full-Stack Development</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
