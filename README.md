<div align="center">

<img src="public/Aamod007_light.svg" alt="Logo" width="100" height="100" />

# ✦ Aamod Kumar — Personal Portfolio

### *AI & Data Engineer · Cloud & Backend Architect · Blockchain Enthusiast*

**Bridging Technical Innovation with Strategic Execution**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-6366f1?style=for-the-badge)](https://personal-blog-aamod.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aamod-kumar/)

---

![GitHub last commit](https://img.shields.io/github/last-commit/Aamod007/PersonalBlog?style=flat-square&color=6366f1)
![GitHub repo size](https://img.shields.io/github/repo-size/Aamod007/PersonalBlog?style=flat-square&color=a855f7)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

</div>

---

## ✨ Overview

> A **production-grade creative portfolio** engineered to showcase expertise in Artificial Intelligence, Cloud/Backend Architecture, and Blockchain. This platform transcends traditional static websites by delivering a high-performance interactive experience powered by advanced WebGL shaders, physics-based simulations, real-time data integration, and a dual-provider AI chatbot assistant.

```text
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│    👤  Aamod Kumar  (@Aamod007)                                     │
│    🎓  Computer Science · AI and Data Engineering                   │
│    📍  Uttar Pradesh, India                                         │
│    🔬  AI & Data Engineer                                           │
│    🌐  Exploring: AI Agents · Blockchain · Cloud Architectures      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🌟 Key Features

<table>
<tr>
<td width="50%">

### 🎮 Immersive 3D Experience
- **Physics-simulated 3D Lanyard** — Interactive ID card powered by the Rapier physics engine that reacts to mouse movement in real-time.
- **WebGL Hyperspeed Effect** — Custom GLSL shader-based warp/space background.
- **Particle Systems** — Configurable density particle fields built with TSParticles.
- **Interactive Globe** — 3D world globe visualization in the About section.

</td>
<td width="50%">

### 📊 Real-Time Developer Data
- **GitHub Integration** — Live contribution heatmap, repository stats, and language breakdown using the GitHub API.
- **LeetCode & Kaggle Metrics** — Live tracking of coding algorithms, contest ratings, solved problems, and ML achievements.
- **Efficient Caching** — Intelligent background revalidation prevents rate-limiting and ensures high performance.
- **Graceful Fallbacks** — Highly resilient UI that never shows broken states.

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Advanced Animations
- **Framer Motion** — Fluid page transitions, modal reveals, and smooth micro-interactions.
- **GSAP ScrollTrigger** — Complex, highly-choreographed scroll-driven timeline animations.
- **React Spring** — Physics-based spring animations for a more natural, organic feel.
- **Custom Hooks** — Purpose-built hooks for scramble text, typing effects, and scroll monitoring.

</td>
<td width="50%">

### 🤖 AI Portfolio Chatbot
- **Dual-Provider Architecture** — Uses Groq (LLaMA 3.1) for blazing fast responses, with a seamless fallback to Google Gemini.
- **Context-Aware** — The AI reads the entire `portfolio.ts` configuration, effectively knowing everything about my experience and projects.
- **Rich Markdown UI** — Renders bold text, italics, bullet lists, code snippets, and hyperlinks directly in the chat interface.

</td>
</tr>
</table>

---

## ⚙️ Tech Stack

**Core Framework**: `Next.js 16 (App Router)` · `React 19` · `TypeScript 5.3` · `Node.js 18+`

**3D Graphics & Animation**: 
`Three.js` · `@react-three/fiber` · `@react-three/rapier` · `Framer Motion` · `GSAP`

**Styling & UI**: 
`Tailwind CSS` · `shadcn/ui` · `Lucide Icons` · `React Icons`

**AI & External APIs**: 
`Groq API (LLaMA)` · `Gemini API (Flash)` · `GitHub GraphQL` · `LeetCode API` · `Kaggle API`

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher) or yarn/pnpm

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

To run the APIs (like the Chatbot, LeetCode stats, Kaggle stats, and the Email contact form), you will need to set up your environment variables.

Create a new file named `.env.local` in the root directory and add the following keys:

```env
# ─── Data & Platform APIs ─────────────────────────────
# Required for Kaggle stats integration
KAGGLE_USERNAME=your_kaggle_username
KAGGLE_API_TOKEN=your_kaggle_api_token

# Required for LeetCode stats integration
LEETCODE_USERNAME=your_leetcode_username

# ─── Email Configuration (Contact Form) ───────────────
# Uses Nodemailer (e.g., Gmail App Passwords)
EMAIL_USER=your_email@gmail.com
EMAIL_APP_PASSWORD=your_app_password

# ─── AI Chatbot Providers ─────────────────────────────
# Get a free key at https://console.groq.com/keys
GROQ_API_KEY=your_groq_api_key

# Get a free key at https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key
```

> **Note**: Do NOT commit your `.env.local` file to version control. It is already added to `.gitignore`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🧠 Skills & Expertise

```text
  Full Stack Development   ████████████████████  Expert
  Python & TypeScript      ████████████████████  Expert
  ─────────────────────────────────────────────
  Deep Learning & AI       ██████████████████░░  Advanced
  System Architecture      ██████████████████░░  Advanced
  Data Analytics           ██████████████████░░  Advanced
  ─────────────────────────────────────────────
  Blockchain & Web3        ████████████████░░░░  Intermediate
  Docker & Cloud           ████████████████░░░░  Intermediate
```

---

## 📬 Let's Connect

<div align="center">

| Platform | Link |
|----------|------|
| 📧 **Email** | [aamoddev23@gmail.com](mailto:aamoddev23@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/aamod-kumar](https://www.linkedin.com/in/aamod-kumar/) |
| 🐙 **GitHub** | [github.com/Aamod007](https://github.com/Aamod007) |
| 𝕏 **Twitter** | [@Aamoddev23](https://x.com/Aamoddev23) |

</div>

<div align="center">
  <p>Built with ❤️ by Aamod Kumar</p>
</div>
