import type { Metadata } from "next";
import { ContactInfo, ContactForm } from "@/components/contact";
import { FadeUp } from "@/components/animations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Ali for freelance web projects, full-stack web applications, and development collaborations. Available via direct email and WhatsApp.",
  openGraph: {
    title: "Contact | Muhammad Ali",
    description:
      "Get in touch with Muhammad Ali for freelance web projects, full-stack web applications, and development collaborations.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Muhammad Ali",
    description:
      "Get in touch with Muhammad Ali for freelance web projects, full-stack web applications, and development collaborations.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-cream">
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 border-b border-primary-dark/6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Contact &amp; Inquiries
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-primary-dark tracking-tight">
              Get In Touch
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-light max-w-xl mx-auto leading-relaxed">
              I&apos;m currently available for freelance projects and new development collaborations. Let&apos;s discuss your ideas.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact Details & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <FadeUp>
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-normal text-primary-dark">
                    Contact Information
                  </h2>
                  <p className="mt-1 text-sm text-text-muted font-light leading-relaxed">
                    Reach out directly through email, WhatsApp, or connect on GitHub.
                  </p>
                </div>
              </FadeUp>

              <ContactInfo />
            </div>

            {/* Right Column: Interactive Working Contact Form */}
            <div className="lg:col-span-7">
              <FadeUp delay={0.2}>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
