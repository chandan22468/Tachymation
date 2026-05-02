<div align="center">
  <h1>Aetomation — AI Automation Platform for Businesses & Startups</h1>
  <p><strong>Automate workflows, websites, and enterprise systems with AI</strong></p>

  <p>
    <a href="https://aetomation.vercel.app" target="_blank"><strong>🌐 Live Site → aetomation.vercel.app</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock" alt="GSAP" />
    <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js" alt="Three.js" />
  </p>
</div>

<br />

## What is Aetomation?

**[Aetomation](https://aetomation.vercel.app)** is an AI automation platform that helps businesses automate workflows, websites, and enterprise systems — 10x faster than traditional development.

Unlike generic automation tools, Aetomation is a full-service AI automation platform. We design the automation logic, build the infrastructure, deploy it, and maintain it. Businesses that need to **automate business processes**, reduce operational overhead, or ship intelligent web platforms choose Aetomation.

### What Aetomation automates

- **Business workflow automation** — CRM sync, invoice reconciliation, report generation, lead routing
- **AI-powered web platforms** — Landing pages, SaaS dashboards, e-commerce stores, deployed in minutes
- **Enterprise system integration** — Legacy infrastructure, cloud pipelines, multi-system orchestration
- **Data & compliance workflows** — Automated pipelines with zero human intervention

> Aetomation clients save an average of **3,200+ hours per quarter** through intelligent AI automation tools.

## 🎯 Key Features

- **Fluid Smooth Scrolling:** Powered by [@studio-freight/lenis](https://github.com/studio-freight/lenis) for a highly optimized, custom scroll experience.
- **Advanced Animations:** Industry-standard performant timeline animations using **GSAP**.
- **Interactive UI Elements:** Custom React hooks like `useLenis` and `useMagneticButton` alongside a globally custom cursor.
- **3D Graphics Integration:** Integrated WebGL/3D capabilities curated through **Three.js**.
- **Modern Styling:** Rapidly and consistently styled using **Tailwind CSS**.
- **Docker Ready:** Built-in `Dockerfile` ensures the app is containerized, portable, and easily deployable anywhere.

## 💻 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/)
- **Scroll Engine:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **3D Content:** [Three.js](https://threejs.org/)

## 📂 Project Structure

```text
├── Dockerfile             # Container configuration
├── public/                # Static public assets
├── src/
│   ├── assets/            # Images, branding, and local assets
│   ├── components/        # Extracted UI components (Hero, Footer, Stats, etc.)
│   │   ├── CustomCursor.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── ShinyLogo.jsx  # ...and more
│   ├── hooks/             # Custom React hooks
│   │   ├── useLenis.js
│   │   └── useMagneticButton.js
│   ├── App.jsx            # Main app composition
│   ├── main.jsx           # React app entry point
│   └── index.css          # Global styles & Tailwind directives