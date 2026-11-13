# Muhammad Ali — Full-Stack Web Developer Portfolio

A professional, modern portfolio website built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed with an elegant dark brown and cream palette, smooth subtle animations, full keyboard accessibility, responsive mobile-first layouts, and real email delivery via Resend.

---

## 🌟 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (native `@theme` tokens)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (with `prefers-reduced-motion` support)
- **Typography**: Google Fonts (`Playfair Display` for headings, `Inter` for body) via `next/font`
- **Icons**: [Lucide React](https://lucide.dev)
- **Email Service**: [Resend](https://resend.com) API SDK
- **Language**: TypeScript (Strict mode)

---

## 🎨 Design System

All design tokens are defined in [`app/globals.css`](./app/globals.css) and exposed as both CSS variables and Tailwind utility classes:

- **Deep Dark Brown**: `#2B1B14` (`--primary-dark`, `bg-primary-dark`, `text-primary-dark`) &mdash; used for hero, navbar, footer, and call-to-actions.
- **Soft Cream**: `#FAF7F2` (`--bg-cream`, `bg-cream`) &mdash; used for content sections and cards.
- **Soft Muted Tan**: `#C9A27E` (`--accent`, `bg-accent`, `text-accent`) &mdash; used for buttons, highlight pills, and active indicators.
- **High-Contrast Tan**: `#8F6541` (`--accent-contrast`, `text-accent-contrast`) &mdash; compliant with WCAG AA for small text on light backgrounds.
- **Borders & Shadows**: Subtle, low-opacity borders with soft elevations for a clean, light, and elegant feel.

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   └── contact/route.ts      # Real email delivery API route via Resend
│   ├── about/page.tsx            # About page (bio, skills, services, experience)
│   ├── contact/page.tsx          # Contact page (contact cards, live contact form)
│   ├── projects/page.tsx         # Projects page (WireDesk, BazaarHub alternating cards)
│   ├── icon.tsx                  # Dynamic branded 32x32 favicon generator
│   ├── opengraph-image.tsx       # Dynamic 1200x630 Open Graph preview generator
│   ├── robots.ts                 # Dynamic robots.txt configuration
│   ├── sitemap.ts                # Dynamic sitemap.xml configuration
│   ├── not-found.tsx             # Custom branded 404 page
│   ├── globals.css               # Design system tokens, custom scrollbar & base styles
│   ├── layout.tsx                # Root layout with fonts, SEO meta, Navbar & Footer
│   ├── page.tsx                  # Home page (Hero, Intro, Featured, Skills, CTA)
│   └── template.tsx              # Page transition wrapper
├── components/
│   ├── about/                    # Bio, Avatar, Services, Grouped Skills, Experience
│   ├── animations/               # Reusable FadeUp, Stagger, and PageTransition
│   ├── contact/                  # Contact cards & interactive form
│   ├── home/                     # Hero, Intro, Featured Work, Skills Strip, CTA
│   ├── projects/                 # Project card, media zoom, and image fallback
│   ├── footer.tsx                # Shared footer with social icons & copyright
│   ├── navbar.tsx                # Sticky navbar with mobile slide-in drawer
│   └── whatsapp-button.tsx       # Floating WhatsApp button
├── data/
│   ├── projects.ts               # Centralized project data store
│   ├── site-config.ts            # Owner profile details, navigation, and socials
│   └── skills.ts                 # Verified technical skills list & categories
├── public/
│   ├── images/                   # Static project screenshots and photos
│   └── cv.pdf                    # Downloadable CV document
├── .env.example                  # Environment variable reference template
├── .env.local                    # Local environment variables (git-ignored)
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18 or higher (v20+ recommended)
- **npm** or your preferred package manager

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Mali0313/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory (you can copy from `.env.example`):

```bash
cp .env.example .env.local
```

Add your credentials:
```env
# 1. Resend API Key (Create for free at https://resend.com/api-keys)
RESEND_API_KEY=re_your_api_key_here

# 2. Recipient Email (where you want to receive inquiries)
CONTACT_TO_EMAIL=muhammadali03139505103@gmail.com

# 3. Sender address (free test sandbox)
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>

# 4. Canonical Site URL (optional for production sitemap/canonical URLs)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Step-by-Step Vercel Deployment Guide

### Step 1: Push Code to GitHub
1. Initialize a git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "feat: complete portfolio website"
   ```
2. Create a new repository on GitHub (e.g., `portfolio`).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/Mali0313/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** &rarr; **Project**.
3. Under **Import Git Repository**, select your `portfolio` repository.
4. Keep the default Framework Preset (`Next.js`).

### Step 3: Add Environment Variables in Vercel
Before clicking Deploy, expand the **Environment Variables** section and add:
- `RESEND_API_KEY`: Your key from [resend.com/api-keys](https://resend.com/api-keys)
- `CONTACT_TO_EMAIL`: `muhammadali03139505103@gmail.com`
- `CONTACT_FROM_EMAIL`: `Portfolio Contact <onboarding@resend.dev>`
- `NEXT_PUBLIC_SITE_URL`: Your Vercel domain or custom domain (e.g., `https://your-app.vercel.app`)

### Step 4: Deploy
Click **Deploy**. Vercel will build your application and generate your live deployment URL within seconds.

---

## 🌐 Connecting a Custom Domain

When you are ready to link your own domain (e.g., `muhammadali.dev` or `yourname.com`):

1. Go to your project on the **Vercel Dashboard**.
2. Navigate to **Settings** &rarr; **Domains**.
3. Enter your domain name and click **Add**.
4. Vercel will display the required DNS records:
   - For an **Apex Domain** (e.g. `example.com`): Add an **A Record** pointing to `76.76.21.21`.
   - For a **Subdomain** (e.g. `www.example.com`): Add a **CNAME Record** pointing to `cname.vercel-dns.com`.
5. Update your domain registrar's DNS settings (Namecheap, GoDaddy, Cloudflare, etc.).
6. Vercel will automatically provision a free SSL certificate once the DNS propagates (usually within 5&ndash;30 minutes).

---

## 📄 License

Created by **Muhammad Ali**. All rights reserved.
