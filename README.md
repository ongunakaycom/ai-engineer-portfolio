# 🤖 AI Engineer Portfolio

> Portfolio of **Ongun Akay** — Senior Full-Stack AI/LLM Engineer.
> Built with Next.js 15, Vercel AI SDK, and a RAG-powered chat demo.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-4-black?logo=vercel)](https://sdk.vercel.ai)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## ✨ Features

- ⚡ **Next.js 15 App Router** — server components, edge runtime, streaming
- 🧠 **RAG-powered chat** — ask questions about my CV and get streamed answers
- 🎨 **Tailwind CSS** — clean, responsive, dark-mode ready
- 🔍 **SEO-first** — schema.org, sitemap, OG tags, robots.txt
- 🚀 **Deployed on Vercel** — edge functions, instant global delivery
- 📊 **Vercel Analytics** — pageviews + Core Web Vitals
- 🔒 **Rate limiting** — Upstash Redis for the chat endpoint

---

## 🧱 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI SDK | Vercel AI SDK |
| LLM | Llama 3.3 70B (Groq) / GPT-4o-mini (OpenAI) |
| Rate limiting | Upstash Redis |
| Analytics | Vercel Analytics + Speed Insights |
| Deploy | Vercel |

---

## 🗂 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout (SEO, analytics, nav)
│   ├── page.tsx             # Home — AI hero
│   ├── about/page.tsx       # About page
│   ├── cv/page.tsx          # CV / skills
│   ├── chat/page.tsx        # RAG chat demo UI
│   ├── blog/                # Blog (MDX)
│   ├── api/chat/route.ts    # Streaming LLM endpoint
│   ├── sitemap.ts           # Auto sitemap
│   └── robots.ts
├── components/
│   ├── Nav.tsx
│   └── ProjectCard.tsx
├── lib/
│   ├── data.ts              # Profile, skills, projects
│   └── ai.ts                # LLM client setup
└── public/
```

---

## 🚀 Getting Started

### 1. Clone & install

```bash
git clone https://github.com/ongunakaycom/ai-engineer-portfolio.git
cd ai-engineer-portfolio
npm install
```

### 2. Set up environment

Create `.env.local`:

```bash
GROQ_API_KEY=gsk_xxxxxxxxxxxx
# Optional
# OPENAI_API_KEY=sk-xxxxxxxxxxxx
```

Get a **free** Groq key → https://console.groq.com/keys

### 3. Run dev server

```bash
npm run dev
# → http://localhost:3000
```

### 4. Deploy

```bash
npm i -g vercel
vercel link
vercel env add GROQ_API_KEY
vercel --prod
```

---

## 🧠 How the RAG chat works

The `/chat` page demonstrates a minimal **RAG (Retrieval-Augmented Generation)** pipeline:

1. User asks a question in natural language
2. Server injects structured context (profile, skills, projects) into the system prompt
3. LLM streams a grounded answer back via the Vercel AI SDK
4. Response arrives token-by-token using edge runtime

Future improvements: vector embeddings, hybrid search, re-ranking, evaluation with Ragas.

---

## 📌 Roadmap

- [x] Next.js 15 + Tailwind scaffold
- [x] SEO metadata + schema.org
- [x] Streaming AI chat demo
- [ ] Vector-store-backed RAG (pgvector)
- [ ] MCP server integration
- [ ] Blog with MDX
- [ ] Rate limiting with Upstash
- [ ] OG image generation

---

## 👨‍💻 About Me

I'm **Ongun Akay**, a Senior Full-Stack Engineer specializing in AI/LLM integration.
I bridge traditional software engineering with modern AI systems — shipping production
RAG pipelines, agentic workflows, and LLM-powered apps.

- 🌐 Website → [ongunakay.com](https://ongunakay.com)
- 💻 GitHub → [github.com/ongunakaycom](https://github.com/ongunakaycom)
- 🔗 LinkedIn → [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)
- ✉️ Email → info@ongunakay.com

---

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.
```
