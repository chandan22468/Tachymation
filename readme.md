<div align="center">
  <h1>✨ Aetomation</h1>
  <p><strong>Next-Generation Interactive Web Experience</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock" alt="GSAP" />
    <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js" alt="Three.js" />
  </p>
</div>

<br />

## 🚀 About The Project

**Aetomation** is a highly interactive, performance-driven web application built with the latest React 19 and Vite workflows. Designed with a focus on immersive user experiences, it leverages cutting-edge animation libraries and smooth scrolling mechanics to deliver a polished, award-winning touch to the web.

Whether it's custom cursor interactions, magnetic buttons, or premium 3D elements, Aetomation provides a modern template for a next-level digital presence.

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