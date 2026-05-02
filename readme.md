<div align="center">

  <h1>Aetomation</h1>
  <p><strong>AI Automation Platform for Businesses and Startups</strong></p>
  <p>Automate workflows, build AI-powered web platforms, and integrate enterprise systems - 10x faster than traditional development.</p>

  <br />

  <a href="https://aetomation.vercel.app" target="_blank">
    <strong>aetomation.vercel.app</strong>
  </a>

  <br /><br />

  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=react-router" alt="React Router" />
  <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />

</div>

---

## What is Aetomation?

**[Aetomation](https://aetomation.vercel.app)** is an AI automation platform that replaces manual, repetitive business work with intelligent systems. Unlike generic no-code tools, Aetomation handles the full lifecycle - designing the automation logic, building the infrastructure, deploying it, and maintaining it.

Businesses that need to automate business processes, reduce operational overhead, or ship intelligent web platforms choose Aetomation.

> Aetomation clients save an average of **3,200+ hours per quarter** through AI automation tools.

---

## Pages

| Route | Title | Description |
|---|---|---|
| `/` | Home | Hero, features overview, use cases, testimonials |
| `/features` | Features | Full breakdown of AI automation capabilities |
| `/use-cases` | Use Cases | Industry-specific automation examples with stats |
| `/about` | About | Mission, values, and company story |
| `/contact` | Contact | Enquiry form connected to Formspree |
| `/blog` | Blog | Long-form content on AI automation |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| Routing | [React Router DOM v6](https://reactrouter.com/) |
| SEO | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Animations | [GSAP 3](https://gsap.com/) + ScrollTrigger |
| Scroll | [Lenis](https://lenis.studiofreight.com/) (smooth scroll) |
| 3D | [Three.js](https://threejs.org/) (WebGL particle field) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | [Formspree](https://formspree.io/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```text
Aetomation/
├── public/
│   ├── sitemap.xml              # All 6 page URLs for search indexing
│   ├── robots.txt               # Search engine crawl rules
│   └── favicon.webp
├── src/
│   ├── assets/
│   │   └── eagle.webp           # Brand logo
│   ├── components/              # Reusable section components
│   │   ├── Navbar.jsx           # Fixed nav with NavLink active states
│   │   ├── Footer.jsx           # Crawlable footer links
│   │   ├── Hero.jsx             # Three.js particle hero
│   │   ├── WhatIsAetomation.jsx
│   │   ├── Features.jsx
│   │   ├── UseCases.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── SocialProof.jsx
│   │   ├── BlogPage.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── CustomCursor.jsx
│   ├── pages/                   # Route-level page components
│   │   ├── HomePage.jsx         # / - wraps all home sections
│   │   ├── AboutPage.jsx        # /about
│   │   ├── FeaturesPage.jsx     # /features
│   │   ├── UseCasesPage.jsx     # /use-cases
│   │   └── ContactPage.jsx      # /contact - Formspree form
│   ├── hooks/
│   │   ├── useLenis.js          # Smooth scroll init
│   │   └── useMagneticButton.js # Magnetic cursor effect
│   ├── App.jsx                  # BrowserRouter + Routes + HelmetProvider
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives + global styles
├── index.html                   # JSON-LD structured data (Organization, WebSite, SearchAction, FAQPage)
├── vercel.json                  # SPA rewrite rules + cache headers
├── .env.example                 # Environment variable reference
└── vite.config.js               # Build config with manual chunk splitting
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/darshanpurohit20/Aetomation.git
cd Aetomation

# Install dependencies
npm install

# Copy environment variable template
cp .env.example .env.local
```

### Environment Variables

Edit `.env.local` and fill in your values:

```env
# Formspree form IDs - get from https://formspree.io
# Create a form per recipient, paste the ID from the endpoint URL
VITE_FORMSPREE_ID=your_first_form_id
VITE_FORMSPREE_ID1=your_second_form_id   # optional - second recipient
```

### Run Locally

```bash
npm run dev
```

Opens at `http://localhost:3000` (or next available port).

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Deployment

The project is deployed on **Vercel** with the following configuration in `vercel.json`:

- **SPA rewrite rule** - all routes (`/about`, `/features`, etc.) serve `index.html` so React Router handles navigation
- **Asset caching** - Vite-generated assets under `/assets/` are cached for 1 year (`immutable`)
- **Security headers** - `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` applied globally

### Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in **Settings - Environment Variables**:
   - `VITE_FORMSPREE_ID`
   - `VITE_FORMSPREE_ID1` (optional)
4. Deploy - Vercel auto-detects Vite

---

## SEO

The site is fully optimised for Google sitelinks and rich search appearance:

- **Per-page titles and meta descriptions** via `react-helmet-async`
- **Canonical URLs** on every page
- **JSON-LD structured data** in `index.html`:
  - `Organization` - brand entity with social profiles
  - `WebSite` + `SearchAction` - triggers Google sitelinks search box
  - `ItemList` - explicitly lists all 6 pages for sitelinks eligibility
  - `FAQPage` - 4 Q&As targeting high-intent search queries
  - `SoftwareApplication` - with aggregate rating
- **BreadcrumbList** JSON-LD injected per page via Helmet
- **Crawlable `<a href>` links** in Navbar, Footer, and all page CTAs (no JS-only navigation)
- **`sitemap.xml`** listing all 6 routes with priority and changefreq
- **`robots.txt`** pointing to sitemap

---

## Performance

- Vite manual chunk splitting: `three`, `gsap`, `lenis`, `react` in separate chunks
- All page components lazy-loaded with `React.lazy` + `Suspense`
- Images use `.webp` format with explicit `width`/`height` to prevent layout shift
- Fonts loaded non-blocking (`media="print"` swap pattern)
- Lenis + GSAP ScrollTrigger animations respect `prefers-reduced-motion`

---

## Contact

Built and maintained by the Aetomation team.

- **Website:** [aetomation.vercel.app](https://aetomation.vercel.app)
- **Contact form:** [aetomation.vercel.app/contact](https://aetomation.vercel.app/contact)

---

<div align="center">
  <p>Built with React, Vite, GSAP, Three.js, and Tailwind CSS</p>
</div>