"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "4e9a241a-42d8-407f-9a38-3b929c9fb39d";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `New Portfolio Message from ${formData.name.trim()}`,
          from_name: "Muhammad Ali Portfolio",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to deliver message via Web3Forms.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setServerMessage(err.message);
      } else {
        setServerMessage("An unexpected error occurred. Please try again or email directly.");
      }
    }
  };

  const handleWhatsAppDirect = () => {
    let text = "Hi Muhammad Ali, I visited your portfolio website and would like to discuss a project with you.";
    if (formData.name.trim() || formData.message.trim()) {
      const parts = [];
      if (formData.name.trim()) parts.push(`My name is ${formData.name.trim()}.`);
      if (formData.email.trim()) parts.push(`Email: ${formData.email.trim()}`);
      if (formData.message.trim()) parts.push(`\nMessage: ${formData.message.trim()}`);
      text = `Hi Muhammad Ali, ${parts.join(" ")}`;
    }
    const url = `https://wa.me/923139505103?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-primary-dark/8 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-soft">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="py-10 sm:py-12 text-center flex flex-col items-center justify-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-5 sm:mb-6">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-primary-dark">
              Message Sent Successfully
            </h3>

            <p className="mt-3 text-sm sm:text-base text-text-body font-light max-w-md mx-auto leading-relaxed">
              Thank you for reaching out! Your message has been dispatched to my inbox. I will review it and reply as soon as possible.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setServerMessage("");
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-cream hover:bg-cream/70 text-primary-dark border border-primary-dark/10 font-medium text-xs sm:text-sm tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Send Another Message
              </button>

              <a
                href="https://wa.me/923139505103?text=Hi%20Muhammad%20Ali%2C%20I%20just%20submitted%20the%20contact%20form%20on%20your%20website%20and%20wanted%20to%20connect%20here%20as%20well."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#2B1B14] hover:bg-[#38241b] text-white border border-accent/40 font-medium text-xs sm:text-sm tracking-wide transition-all shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <h3 className="font-serif text-2xl font-normal text-primary-dark">
                Send a Message
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-text-muted font-light">
                Fill out the form below and I&apos;ll get back to you promptly.
              </p>
            </div>

            {/* Error Notification Banner */}
            {status === "error" && (
              <div
                role="alert"
                className="p-3.5 sm:p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5 sm:gap-3"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <div className="flex-1">
                  <p className="font-medium">Message could not be sent</p>
                  <p className="mt-0.5 text-xs text-red-600/90">{serverMessage}</p>
                </div>
              </div>
            )}

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 sm:mb-2"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                disabled={status === "loading"}
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                }}
                placeholder="Muhammad Ali"
                className={`w-full px-4 py-2.5 sm:py-3 rounded-xl bg-cream/40 border text-sm text-primary-dark placeholder:text-text-muted/50 focus:bg-white transition-all ${
                  formErrors.name
                    ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
                    : "border-primary-dark/10 focus:border-accent focus:ring-2 focus:ring-accent/20"
                }`}
              />
              {formErrors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-500">{formErrors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 sm:mb-2"
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                disabled={status === "loading"}
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                }}
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 sm:py-3 rounded-xl bg-cream/40 border text-sm text-primary-dark placeholder:text-text-muted/50 focus:bg-white transition-all ${
                  formErrors.email
                    ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
                    : "border-primary-dark/10 focus:border-accent focus:ring-2 focus:ring-accent/20"
                }`}
              />
              {formErrors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500">{formErrors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 sm:mb-2"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                disabled={status === "loading"}
                aria-invalid={!!formErrors.message}
                aria-describedby={formErrors.message ? "message-error" : undefined}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                }}
                placeholder="Describe your project, inquiry, or timeline..."
                className={`w-full px-4 py-2.5 sm:py-3 rounded-xl bg-cream/40 border text-sm text-primary-dark placeholder:text-text-muted/50 focus:bg-white transition-all resize-y ${
                  formErrors.message
                    ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
                    : "border-primary-dark/10 focus:border-accent focus:ring-2 focus:ring-accent/20"
                }`}
              />
              {formErrors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500">{formErrors.message}</p>
              )}
            </div>

            {/* Action Buttons: Send Message + WhatsApp Direct */}
            <div className="space-y-3 pt-1">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-[#2B1B14] font-medium text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#2B1B14]" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              <div className="relative flex items-center justify-center my-1.5">
                <div className="border-t border-primary-dark/8 w-full" />
                <span className="bg-white px-3 text-[11px] uppercase tracking-wider text-text-muted/60">
                  or
                </span>
                <div className="border-t border-primary-dark/8 w-full" />
              </div>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cream hover:bg-cream/80 text-primary-dark border border-primary-dark/10 hover:border-accent font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <MessageCircle className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-200" />
                <span>Chat Directly on WhatsApp</span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
