<div align="center">

<img src="public/Aamod007_light.svg" alt="Logo" width="80" height="80" />

# ✦ Aamod Kumar — Personal Portfolio

### *AI Engineer · Full Stack Developer · Blockchain Enthusiast*

**Bridging Technical Innovation with Strategic Execution**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-6366f1?style=for-the-badge)](https://aamodkumar.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Aamod007-181717?style=for-the-badge&logo=github)](https://github.com/Aamod007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aamod-kumar/)

---

![GitHub last commit](https://img.shields.io/github/last-commit/Aamod007/PersonalBlog?style=flat-square&color=6366f1)
![GitHub repo size](https://img.shields.io/github/repo-size/Aamod007/PersonalBlog?style=flat-square&color=a855f7)
![GitHub stars](https://img.shields.io/github/stars/Aamod007/PersonalBlog?style=flat-square&color=f59e0b)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ec4899?style=flat-square)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🌟 Features](#-features)
- [🗺️ Pages & Routes](#️-pages--routes)
- [⚙️ Tech Stack](#️-tech-stack)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💼 Projects Showcase](#-projects-showcase)
- [🧠 Skills & Expertise](#-skills--expertise)
- [👔 Professional Experience](#-professional-experience)
- [🎓 Education & Certifications](#-education--certifications)
- [🏆 Achievements](#-achievements)
- [🌐 Internationalization](#-internationalization)
- [🎨 Design System](#-design-system)
- [📡 API Integrations](#-api-integrations)
- [🤖 AI Chatbot](#-ai-chatbot)
- [📬 Contact](#-contact)

---

## ✨ Overview

> A **production-grade creative portfolio** engineered to showcase expertise in Artificial Intelligence, Blockchain, and Modern Web Architecture. This platform transcends traditional static websites by delivering a high-performance interactive experience powered by advanced WebGL shaders, physics-based simulations, real-time data integration, and an AI-powered chatbot assistant.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│    👤  Aamod Kumar  (@Aamod007)                         │
│    🎓  Information Technology · Telkom University · GPA 3.8/4.0     │
│    📍  DKI Jakarta, Indonesia                                        │
│    🔬  AI Researcher @ Cyber Physical System Lab                    │
│    🌐  Currently Exploring: AI Agents · Blockchain · Web3           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🎮 Immersive 3D Experience
- **Physics-simulated 3D Lanyard** — Interactive ID card powered by Rapier physics engine that reacts to mouse movement in real-time
- **WebGL Hyperspeed Effect** — Custom GLSL shader-based warp/space background
- **Particle Systems** — Configurable density particle fields with TSParticles
- **Globe Visualization** — Interactive 3D world globe in the About section

</td>
<td width="50%">

### 📊 Real-Time Data
- **GitHub API (GraphQL)** — Live contribution heatmap, repo stats, language breakdown
- **WakaTime API** — Live coding activity: top languages, hours, and streaks
- **1-hour cache revalidation** — Fresh data without hammering APIs
- **Graceful error fallbacks** — Never shows broken states to the user

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Advanced Animations
- **Framer Motion** — Fluid page transitions and micro-interactions
- **GSAP ScrollTrigger** — Complex, scroll-driven timeline animations
- **React Spring** — Physics-based spring animations for natural feel
- **Custom Hooks** — `useTextScramble`, `useTypewriter`, `useCountUp`, `useScrollAnimation`

</td>
<td width="50%">

### 🌍 Multilingual & Accessible
- **Bilingual EN/ID** — Full internationalization via `next-intl`
- **Auto language detection** — Uses `Accept-Language` browser header
- **Welcome in 12 languages** — Animated cycling greetings on hero
- **Dark / Light mode** — System-preferred with smooth toggle & CSS variables

</td>
</tr>
<tr>
<td width="50%">

### ⚡ Performance-First
- **Dynamic imports** — 3D components SSR-disabled and lazy-loaded
- **Low-power detection** — `usePerformance()` hook reduces animations on battery-saving mode
- **Image optimization** — AVIF/WebP formats via Next.js Image
- **Smooth scrolling** — Lenis-based premium scroll experience

</td>
<td width="50%">

### 🤖 AI Portfolio Chatbot
- **Groq + Gemini dual-provider** — Auto-fallback if one limit is hit
- **Portfolio-aware context** — Reads all data from `portfolio.ts` as knowledge base
- **Markdown rendering** — Bold, italic, lists, code, links rendered in chat
- **Smart UX** — Typing indicator, retry on error, suggested questions

</td>
</tr>
</table>

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home / Hero** | 3D Lanyard, particle background, animated intro, stats |
| `/projects` | **Projects** | Filterable showcase of 19 projects across 6 categories |
| `/projects/[slug]` | **Project Detail** | Tech stack, features, installation guide, challenges & solutions |
| `/experience` | **Experience** | Career timeline, education, journey tabs |
| `/skills` | **Skills** | Hard skills, soft skills, tools & tech radar |
| `/achievements` | **Achievements** | 30+ certifications, awards, programs |
| `/blog` | **Blog** | 9 articles on AI, Web3, and engineering |
| `/blog/[slug]` | **Blog Detail** | Full-length article view with syntax highlighting |
| `/gallery` | **Gallery** | Multi-layout image gallery (Stack, Dome, Circular) |
| `/contact` | **Contact** | Contact form + social links |
| `/resume` | **Resume** | Interactive CV/resume page |
| `/api/chat` | **Chat API** | AI chatbot backend (Groq → Gemini fallback) |
| `/api/github-stats` | **GitHub API** | GraphQL-based GitHub statistics |
| `/api/github-languages` | **Languages API** | Top language breakdown |
| `/api/wakatime` | **WakaTime API** | Coding activity from WakaTime |

---

## ⚙️ Tech Stack

### Core Framework

```
Next.js 16.1.6  ·  React 19.2.4  ·  TypeScript 5.3  ·  Node.js 18+
```

### 3D Graphics & WebGL

[![Three.js](https://img.shields.io/badge/Three.js-000?logo=threedotjs&style=flat-square)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/@react--three/fiber-000?logo=threedotjs&style=flat-square)](https://r3f.docs.pmnd.rs/)
[![Drei](https://img.shields.io/badge/@react--three/drei-000?logo=threedotjs&style=flat-square)](https://github.com/pmndrs/drei)
[![Rapier](https://img.shields.io/badge/@react--three/rapier-E63012?style=flat-square)](https://rapier.rs/)
[![Postprocessing](https://img.shields.io/badge/Postprocessing-gray?style=flat-square)](https://github.com/pmndrs/postprocessing)
[![OGL](https://img.shields.io/badge/OGL-gray?style=flat-square)](https://github.com/oframe/ogl)
[![Spline](https://img.shields.io/badge/Spline-7B3FE4?style=flat-square)](https://spline.design/)
[![Three Globe](https://img.shields.io/badge/Three--Globe-2.45-1E3A5F?style=flat-square)](https://github.com/vasturiano/three-globe)

### Animation

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square)](https://greensock.com/gsap/)
[![React Spring](https://img.shields.io/badge/React_Spring-10-68D391?style=flat-square)](https://react-spring.dev/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3-F97316?style=flat-square)](https://lenis.darkroom.engineering/)
[![AOS](https://img.shields.io/badge/AOS-2.3-3B82F6?style=flat-square)](https://michalsnik.github.io/aos/)

### Styling & UI

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-New_York-000?style=flat-square)](https://ui.shadcn.com/)
[![CVA](https://img.shields.io/badge/class--variance--authority-0.7-8B5CF6?style=flat-square)](https://cva.style/)
[![Lucide](https://img.shields.io/badge/Lucide_React-0.309-F97316?style=flat-square)](https://lucide.dev/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5-E11D48?style=flat-square)](https://react-icons.github.io/)
[![Headless UI](https://img.shields.io/badge/Headless_UI-2.2-66E3FF?style=flat-square&logo=headlessui)](https://headlessui.com/)

### Internationalization & Theming

[![next-intl](https://img.shields.io/badge/next--intl-4.8-3B82F6?style=flat-square)](https://next-intl-docs.vercel.app/)
[![next-themes](https://img.shields.io/badge/next--themes-0.2-000?style=flat-square)](https://github.com/pacocoursey/next-themes)

### AI & External APIs

[![Groq](https://img.shields.io/badge/Groq_API-LLaMA_3.1-F97316?style=flat-square)](https://groq.com/)
[![Gemini](https://img.shields.io/badge/Gemini_1.5_Flash-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![GitHub GraphQL](https://img.shields.io/badge/GitHub_GraphQL_API-181717?style=flat-square&logo=github)](https://docs.github.com/en/graphql)
[![WakaTime](https://img.shields.io/badge/WakaTime_API-5C4EE5?style=flat-square)](https://wakatime.com/)

### Particles & Effects

[![TSParticles](https://img.shields.io/badge/TSParticles-3.9-6366F1?style=flat-square)](https://particles.js.org/)
[![Meshline](https://img.shields.io/badge/Meshline-3.3-gray?style=flat-square)](https://github.com/spite/THREE.MeshLine)

---

## 🏗️ Project Structure

```
PersonalBlog/
│
├── src/
│   ├── app/                          # Next.js 16 App Router
│   │   ├── page.tsx                  # 🏠 Home — Hero, 3D, Stats
│   │   ├── layout.tsx                # Root layout with all providers
│   │   ├── loading.tsx               # Global loading UI
│   │   ├── projects/                 # Projects list & [slug] detail
│   │   ├── experience/               # Career & education timeline
│   │   ├── skills/                   # Skills showcase
│   │   ├── achievements/             # Certifications & awards
│   │   ├── blog/                     # Blog list & [slug] detail
│   │   ├── gallery/                  # Image gallery
│   │   ├── contact/                  # Contact form
│   │   ├── resume/                   # CV/Resume page
│   │   └── api/
│   │       ├── chat/route.ts         # 🤖 AI Chatbot (Groq + Gemini fallback)
│   │       ├── github-stats/         # GitHub GraphQL stats
│   │       ├── github-languages/     # Language breakdown
│   │       └── wakatime/             # Coding activity
│   │
│   ├── components/
│   │   ├── layout/                   # Nav, Footer, SocialCorner, ChatBot
│   │   ├── sections/                 # About, Expertise, Stats, CTA
│   │   ├── three/                    # Lanyard (R3F + Rapier), Scene3D
│   │   ├── stats/                    # GitHubStats, WakaTimeStats
│   │   ├── projects/                 # Project detail components
│   │   ├── effects/                  # FallingText, visual effects
│   │   ├── animate-ui/               # Custom animated primitives
│   │   └── ui/                       # 54+ reusable UI components
│   │       ├── Hyperspeed.tsx        # WebGL warp background (GLSL shaders)
│   │       ├── Particles.tsx         # TSParticles wrapper
│   │       ├── Globe.tsx             # 3D world globe
│   │       ├── SkillRadar.tsx        # Skills radar chart
│   │       ├── TechConstellation.tsx # Connected tech node graph
│   │       ├── Marquee.tsx           # Infinite scroll marquee
│   │       ├── Terminal.tsx          # Terminal UI component
│   │       ├── ScrollVelocity.tsx    # Velocity-based scroll text
│   │       ├── KineticTechGrid.tsx   # Dynamic tech logo grid
│   │       ├── OrbitalWorkbench.tsx  # Orbital animation system
│   │       └── ...44+ more           #
│   │
│   ├── data/
│   │   └── portfolio.ts              # 📊 Central data source (ALL content)
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useIsMobile.ts            #   Responsive breakpoint detection
│   │   ├── useTextScramble.ts        #   Scramble animation effect
│   │   ├── useTypewriter.ts          #   Typewriter text animation
│   │   ├── useCountUp.ts             #   Animated number counter
│   │   ├── useScrollAnimation.ts     #   Scroll-based triggers
│   │   └── usePerformance.ts         #   Low-power mode detection
│   │
│   ├── i18n/                         # next-intl config (EN/ID routing)
│   ├── providers/                    # Theme, I18n, SmoothScroll providers
│   ├── lib/                          # utils.ts (cn, formatDate helpers)
│   ├── types/                        # TypeScript interfaces & declarations
│   └── styles/
│       └── globals.css               # Tailwind layers + CSS variables
│
├── messages/
│   ├── en.json                       # English translations
│   └── id.json                       # Indonesian translations
│
├── public/                           # Static assets (images, SVGs, PDFs)
├── next.config.ts                    # Next.js + next-intl plugin config
├── tailwind.config.ts                # Custom theme, animations, keyframes
├── tsconfig.json                     # Strict TypeScript config
├── components.json                   # shadcn/ui configuration
└── .env.local                        # API keys (never committed)
```

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### 1. Clone the repository

```bash
git clone https://github.com/Aamod007/PersonalBlog.git
cd PersonalBlog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
# ─── GitHub Integration (for stats section) ───────────────────────────────
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=github_pat_your_personal_access_token

# ─── WakaTime Integration (for coding stats) ──────────────────────────────
WAKATIME_API_KEY=waka_your_wakatime_api_key

# ─── AI Chatbot — Groq (primary LLM provider) ─────────────────────────────
GROQ_API_KEY=gsk_your_groq_api_key

# ─── AI Chatbot — Gemini (automatic fallback) ─────────────────────────────
GEMINI_API_KEY=your_gemini_api_key
```

> **How to get each API key:**
> | Key | Where to get it | Required scopes |
> |-----|----------------|-----------------|
> | `GITHUB_TOKEN` | [github.com/settings/tokens](https://github.com/settings/tokens) | `read:user`, `repo` |
> | `WAKATIME_API_KEY` | [wakatime.com/settings/api-key](https://wakatime.com/settings/api-key) | — |
> | `GROQ_API_KEY` | [console.groq.com](https://console.groq.com) | — |
> | `GEMINI_API_KEY` | [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) | — |

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build optimized production bundle |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 💼 Projects Showcase

> **19 projects** across **6 categories** — from AI research to Blockchain DApps to IoT systems.

| # | Project | Category | Stack | Status |
|---|---------|----------|-------|--------|
| 1 | [Creative Portfolio Website](https://aamodkumar.vercel.app) | Creative Tech | Next.js, Three.js, GSAP, R3F | ✅ Live |
| 2 | [SNBTIn Platform](https://snbtin.vercel.app) | EdTech | Next.js, TypeScript, Tailwind | ✅ Live |
| 3 | [TerraFlow Platform](https://terraflowio.vercel.app) | IoT & Embedded | Next.js, Go/Gin, Firebase, ESP32 | ✅ Live |
| 4 | DocsInsight Engine | AI & ML | Python, Flask, LangChain, ChromaDB, Ollama | ✅ Done |
| 5 | [Donasiaku](https://donasiku.site) | Software Eng | Laravel 12, React 19, MySQL, Sanctum | ✅ Live |
| 6 | Security Automation GenAI | AI & ML | Python, TensorFlow, Transformers, Adaptive Attention | ✅ Done |
| 7 | [Web3 Guestbook DApp](https://metamaskguestbook.vercel.app) | Blockchain | Solidity, Hardhat, Next.js, Ethers.js, MetaMask | ✅ Live |
| 8 | Digilibzx | Software Eng | Java, Spring Boot 3, Next.js 14, Google Gemini | ✅ Done |
| 9 | [POLABDC Dental SaaS](https://polabdc.my.id) | Software Eng | Next.js, Express, Prisma, Supabase, Python AI | ✅ Live |
| 10 | [Deep Learning Image Classifier](https://ca-modul03-handson.streamlit.app) | AI & ML | Python, TensorFlow, MobileNetV2, Streamlit | ✅ Live |
| 11 | AI Book Discovery Platform | AI & ML | Python, Ollama, LangChain, Nomic Embed, Streamlit | ✅ Done |
| 12 | MyTelkomsel Sentiment Analysis | Data Science | Python, BiLSTM, SVM, Word2Vec, Gensim | ✅ Done |
| 13 | NeuroVision (Real-time Detection) | AI & ML | Python, YOLOv3, Darknet-53, OpenCV, CUDA | ✅ Done |
| 14 | Voices Unheard | Software Eng | Node.js, Express, PostgreSQL, NLP, AES-256 | ✅ Done |
| 15 | Smart Motion Detection System | IoT & Embedded | Python, YOLO11-Pose, MQTT, Raspberry Pi 5 | ✅ Done |
| 16 | Solar Energy PINN Prediction | AI & ML | Python, TensorFlow, PINN, NSRDB API | ✅ Done |
| 17 | [Credit Risk Analysis LSTM](https://huggingface.co/spaces/Aamod/CreditRisk_Analysis) | Data Science | Python, Stacked LSTM, SMOTE, TensorFlow | ✅ Live |
| 18 | Hand Gesture Recognition | AI & ML | Python, MediaPipe, OpenCV, 21-Landmark | ✅ Done |
| 19 | Data Analyst Dashboard | Data Science | Python, Streamlit, Pandas, Plotly | ✅ Done |

---

## 🧠 Skills & Expertise

### Hard Skills Proficiency

```
  Data Science             ████████████████████  Expert
  Full Stack Development   ████████████████████  Expert
  Data Visualization       ████████████████████  Expert
  SQL & DBMS               ████████████████████  Expert
  Socket Programming        ████████████████████  Expert
  ─────────────────────────────────────────────
  Deep Learning (CV/NLP)   ██████████████████░░  Advanced
  Machine Learning Ops     ██████████████████░░  Advanced
  Data Analytics           ██████████████████░░  Advanced
  Software Design          ██████████████████░░  Advanced
  System Analysis          ██████████████████░░  Advanced
  DevOps                   ██████████████████░░  Advanced
  ─────────────────────────────────────────────
  Computer Vision          ████████████████░░░░  Intermediate
  LLMs / GenAI             ████████████████░░░░  Intermediate
  System Architecture      ████████████████░░░░  Intermediate
  Docker & Kubernetes      ████████████████░░░░  Intermediate
  ─────────────────────────────────────────────
  Blockchain / Web3        ████████░░░░░░░░░░░░  Beginner/Learning
  AI Agents & Autonomy     ████████░░░░░░░░░░░░  Beginner/Learning
  Solidity / DApps         ████████░░░░░░░░░░░░  Beginner/Learning
  GCP / Cloud              ████████░░░░░░░░░░░░  Beginner/Learning
```

### Tech Stack Badges

<table>
<tr><th>Category</th><th>Technologies</th></tr>
<tr>
<td><b>Languages</b></td>
<td>

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-363636?style=flat-square&logo=solidity)

</td>
</tr>
<tr>
<td><b>Frameworks</b></td>
<td>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)

</td>
</tr>
<tr>
<td><b>AI / ML</b></td>
<td>

![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square)
![Hugging Face](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy)

</td>
</tr>
<tr>
<td><b>Databases</b></td>
<td>

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

</td>
</tr>
<tr>
<td><b>DevOps & Cloud</b></td>
<td>

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</td>
</tr>
<tr>
<td><b>Tools</b></td>
<td>

![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

</td>
</tr>
</table>

### Soft Skills

> `Leadership` · `Critical Thinking` · `Public Speaking` · `Teamwork` · `Communication` · `Problem Solving` · `Adaptability` · `Public Relations` · `Entrepreneurship` · `Event Management` · `Research Skills` · `Mentorship`

---

## 👔 Professional Experience

### 🔬 Technical & Research Roles

| Period | Role | Organization | Type |
|--------|------|--------------|------|
| Aug 2025 – Present | **Research Assistant** | Cyber Physical System Laboratory | Contract |
| Jul – Sep 2025 | **CV Researcher Intern** | CPS Laboratory, Telkom University | Internship |
| Sep – Dec 2025 | **AI Developer Intern** | HUMIC Engineering Research Center | Internship |
| Jul – Oct 2025 | **System Analyst Intern** | Advanced Software Engineering Lab | Internship |
| Sep 2025 – Jan 2026 | **Computer Network Practicum Assistant** | Informatics Lab, Telkom University | Contract |
| Oct 2025 – Jan 2026 | **Digital Learning Experience Auditor** | Dicoding Indonesia | Freelance |
| Jan 2025 | **Machine Learning Code Reviewer** | Dicoding Academy | Freelance |
| Jun – Aug 2024 | **Data Entry Assistant** | Dinas Pangan & Pertanian Kota Bandung | Internship |

### 🏛️ Leadership & Organizational Roles

| Period | Role | Organization |
|--------|------|--------------|
| Jul 2025 – Present | **HR Staff** | Cyber Physical System Laboratory |
| Mar – Sep 2025 | **Chief Committee** | Digistar Club by Telkom Indonesia |
| Mar 2025 – Present | **Ranger, Digital Application Club** | Digistar Club by Telkom Indonesia |
| Sep 2024 – Jan 2025 | **Academic Affairs Division** | HMIT Telkom University |
| Jul 2024 – Jan 2025 | **Public Relations** | Youth Ranger Indonesia |

### 🤝 Volunteer Experience

| Period | Role | Organization |
|--------|------|--------------|
| Feb – Mar 2025 | **Fundraising Assistant** | Galeri Investasi BEI, Telkom University |
| Nov – Dec 2024 | **Event Planner & Organizer (MAKRAB 2024)** | HMIT Telkom University |
| Feb 2024 | **Environmental Hygiene Team** | Young On Top Bandung |
| Jan 2024 | **Logistics Operator (Campus Expo)** | SMAN 88 Jakarta |

---

## 🎓 Education & Certifications

### 🎓 Education

| Degree | Institution | Period | GPA |
|--------|-------------|--------|-----|
| **B.Tech — Information Technology** | Telkom University, Bandung | Aug 2023 – Present | **3.8 / 4.0** |
| **High School Diploma (Science/IPA)** | SMAN 88 Jakarta | 2020 – 2023 | — |

### 🏅 Featured Training Programs

```
★  Coding Camp by DBS Foundation       AI Engineer Scholarship        Apr – Oct 2025  (6 months)
★  Indosat Ooredoo IDCamp              ML Engineer Path               Jun – Dec 2024  (6 months)
★  AIESEC Future Leaders 2024          Leadership Development          Oct 2024 – Jan 2025
★  CA Study Group — CPS Lab            IoT · Web · ML Research        Nov 2024 – Jan 2025
★  GDSC Telkom University              Machine Learning Path          Nov 2023 – Present
```

### 📜 Certifications (30+)

<details>
<summary><b>Click to expand full certifications list</b></summary>

**🤖 AI & Machine Learning**
- Generative AI *(Dicoding, May 2025)*
- Practical AI for Productivity *(Dicoding, May 2025)*
- Supervised ML: Regression & Classification *(DeepLearning.AI, Jan 2025)*
- Machine Learning Modeling Beginner *(Dicoding, Oct 2024)*
- Machine Learning Foundations *(AWS, Dec 2024)*
- Introduction to Generative AI *(AWS, Jan 2025)*
- Deep Learning Beginner *(Udemy, Jan 2025)*
- Dasar Artificial Intelligence *(Dicoding, Jul 2024)*
- elevAIte with Dicoding 2025 *(Dicoding, Jan 2025)*
- AI Innovation Challenge *(COMPFEST, Nov 2024)*

**☁️ Cloud & DevOps**
- Data Analytics on Google Cloud *(Google Cloud Skills Boost, Jan 2025)*
- Cloud Practitioner Essentials *(Dicoding, Dec 2024)*
- AWS Academy Graduate — Cloud Foundations *(AWS, Oct 2024)*
- Getting Started with Databases *(AWS, Feb 2025)*
- Docker, Kubernetes dan DevOps *(Udemy, Aug 2024)*

**💻 Programming Languages**
- Back-End dengan JavaScript *(Dicoding, Feb 2025)*
- Pemrograman dengan Java *(Dicoding, Feb 2025)*
- Dasar Pemrograman JavaScript *(Dicoding, Jan 2025)*
- Pemrograman dengan Python *(Dicoding, Jul 2024)*
- Pemrograman dengan Dart *(Dicoding, Oct 2024)*
- Python Lanjutan *(Skilvul, Aug 2024)*
- Algorithm & Data Structures with Python *(Skilvul, Aug 2024)*

**📊 Data Science & Analytics**
- Dasar SQL *(Dicoding, Jul 2024)*
- Fundamental SQL Using SELECT Statement *(DQLab, Jan 2024)*
- Visualisasi Data *(Dicoding, Jul 2024)*

**🌐 Web & Blockchain**
- Mastering Smart Contract *(ICP HUB Indonesia, Oct 2024)*
- React Dasar Gold *(Skilvul, Sep 2024)*
- Fullstack Programming for Beginners *(Udemy, Jul 2024)*
- Google Play Store Listing Certificate *(Google, Jul 2024)*
- Financial Literacy *(Dicoding, May 2025)*

</details>

---

## 🏆 Achievements

<table>
<tr>
<td align="center" width="50%">

### 🥇 Top 15 out of 90 Teams
**Data Mining Competition — ADIKARA 2024**

*Telkom University · October 2024*

Applied advanced ML models to complex datasets, placing in the top 15 in a 90-team national data mining competition.

</td>
<td align="center" width="50%">

### 🥈 4th Place Nationally
**Business Case Competition**

*GENBI · January 2025*

Developed innovative solutions for real-world business problems, placing 4th among strong national competitors.

</td>
</tr>
</table>

---

## 🌐 Internationalization

This portfolio fully supports **2 languages** with automatic browser detection:

| Language | Code | Coverage |
|----------|------|----------|
| 🇺🇸 English | `en` | 100% |
| 🇮🇩 Indonesian | `id` | 100% |

The hero section cycles **welcome greetings in 12 languages** with Framer Motion transitions:

```
Halo  ·  Hello  ·  Hola  ·  Bonjour  ·  こんにちは  ·  안녕하세요
مرحباً  ·  Hallo  ·  Olá  ·  Ciao  ·  你好  ·  Привет
```

**Detection Flow:**
```
Browser Request
      │
      ▼
Accept-Language Header
      │
      ▼
next-intl Middleware → Route to /en or /id
      │
      ▼
Cookie-based Persistence (remembers preference)
```

---

## 🎨 Design System

### Color System (CSS Variables)

| Token | Usage | Dark | Light |
|-------|-------|------|-------|
| `--background` | Page background | `#09090b` | `#ffffff` |
| `--foreground` | Primary text | `#fafafa` | `#09090b` |
| `--primary` | Accent, CTAs | Indigo/Purple | Indigo/Purple |
| `--muted` | Subtle text | `#71717a` | `#71717a` |
| `--glow-cyan` | 3D glow effects | `#00FFFF` | — |
| `--glow-purple` | Accent glows | `#A855F7` | — |
| `--glow-pink` | Highlight glows | `#EC4899` | — |

### Custom Tailwind Animations

```
fade-in · fade-up · slide-in-left · slide-in-right · scale-in
glow-pulse · float · rotate-slow · gradient-shift
marquee · marquee-reverse · scan · meteor
```

### Typography Stack

| Font | Usage | Source |
|------|-------|--------|
| **Inter** | Body text, UI elements | Google Fonts |
| **JetBrains Mono** | Code blocks, terminals | Google Fonts |
| **Playfair Display** | Display headings | Google Fonts |
| **Alex Brush** | Signature / decorative | Google Fonts |

---

## 📡 API Integrations

### GitHub Statistics

```typescript
// GET /api/github-stats
// Auth:     GITHUB_TOKEN (GraphQL API v4)
// Cache:    revalidate every 3600 seconds
// Returns:  total contributions, public repos,
//           stars, followers, top languages
```

### WakaTime Coding Activity

```typescript
// GET /api/wakatime
// Auth:     WAKATIME_API_KEY
// Cache:    revalidate every 3600 seconds
// Returns:  top languages (7-day), daily average,
//           total hours, editor breakdown
```

### GitHub Languages

```typescript
// GET /api/github-languages
// Auth:     GITHUB_TOKEN
// Cache:    revalidate every 3600 seconds
// Returns:  language percentage breakdown
//           across all public repositories
```

---

## 🤖 AI Chatbot

The portfolio includes a built-in AI assistant — click the chat icon at the bottom of the sidebar.

### Provider Fallback Architecture

```
┌──────────────────────────────────────────────────┐
│            POST /api/chat                        │
│                                                  │
│  messages[] ──► Build System Prompt             │
│                  (from portfolio.ts data)        │
│                        │                        │
│                        ▼                        │
│          ┌─────────────────────────┐            │
│          │  Try: Groq API          │            │
│          │  Model: llama-3.1-8b    │ ──► ✅ OK  │
│          └─────────────────────────┘            │
│                   │ (rate limit / error)         │
│                   ▼                             │
│          ┌─────────────────────────┐            │
│          │  Fallback: Gemini API   │            │
│          │  Model: gemini-1.5-flash│ ──► ✅ OK  │
│          └─────────────────────────┘            │
│                   │ (both fail)                 │
│                   ▼                             │
│            503 with error details               │
└──────────────────────────────────────────────────┘
```

### Chatbot Features

| Feature | Detail |
|---------|--------|
| 🧠 **Portfolio-aware** | System prompt auto-built from all `portfolio.ts` data |
| 🌐 **Bilingual** | Responds in EN or ID matching user's language |
| 📝 **Markdown** | Renders bold, italic, lists, inline code, and links |
| 🔁 **Retry** | One-click retry button when a response fails |
| 💬 **Suggested questions** | Quick-start prompts shown on first open |
| ⌨️ **Keyboard shortcuts** | `Enter` send · `Shift+Enter` newline · `Escape` close |
| 📜 **Context window** | Last 20 messages kept for multi-turn conversations |

---

## 📬 Contact

<div align="center">

| Platform | Link |
|----------|------|
| 📧 **Email** | [aamod@gmail.com](mailto:aamod@gmail.com) |
| 💼 **LinkedIn** | [aamod-kumar](https://www.linkedin.com/in/aamod-kumar/) |
| 🐙 **GitHub** | [@Aamod007](https://github.com/Aamod007) |
| 🐦 **Twitter / X** | [@aamod](https://twitter.com/aamod) |
| 📸 **Instagram** | [@aamod](https://www.instagram.com/aamod.23/) |
| 🎵 **Spotify** | [aamod](https://open.spotify.com/user/aamod) |
| 🎮 **Discord** | [aamod](https://discord.com/users/aamod) |

</div>

---

<div align="center">

### ⭐ If you find this portfolio inspiring, consider giving it a star!

[![Star this repo](https://img.shields.io/github/stars/Aamod007/PersonalBlog?style=social)](https://github.com/Aamod007/PersonalBlog)
[![Fork](https://img.shields.io/github/forks/Aamod007/PersonalBlog?style=social)](https://github.com/Aamod007/PersonalBlog/fork)
[![Follow](https://img.shields.io/github/followers/Aamod007?style=social)](https://github.com/Aamod007)

---

<sub>Built with ❤️ by <strong>Aamod Kumar</strong></sub>

<sub>Powered by Next.js · Three.js · React · Framer Motion · GSAP · Groq · Gemini</sub>

<sub>© 2025 Aamod Kumar · All rights reserved.</sub>

</div>
