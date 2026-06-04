// ── Edit this file to update your portfolio content ──────────────────────────

export const profile = {
  name: "Haseeb Tariq",
  role: "AI & Automation Engineer",
  tagline:
    "Full-stack AI engineer building custom agents, RAG systems & workflow automation that ships to production.",
  location: "Lahore, Pakistan",
  timezone: "GMT+5 · Remote-friendly",
  email: "contactbyhaseeb@gmail.com",
  phone: "+92 322 990 9327",
  github: "https://github.com/haseeb9933",
  linkedin: "https://www.linkedin.com/in/haseeb-tariq099",
  // Fill these in once your freelance profiles are live, then they appear automatically:
  fiverr: "",
  upwork: "",
  resumeUrl: "", // e.g. "/Haseeb_Tariq_AI_Engineer.pdf" (drop the PDF into /public)
};

export const about = `I build AI systems that actually run in production — not demos. Over the last
year I've shipped autonomous agents, AI receptionists, RAG assistants, web-scraping
pipelines, and full-stack AI platforms used by real teams. I design for reliability:
human-in-the-loop controls, structured fallbacks, error recovery, and real-time
observability. Message me with your problem and I'll tell you straight whether I'm
the right fit.`;

export const stats: { to: number; suffix: string; label: string }[] = [
  { to: 100, suffix: "+", label: "AI & automation systems shipped" },
  { to: 50, suffix: "+", label: "Bots & scrapers built" },
  { to: 10, suffix: "K+", label: "Leads automated end-to-end" },
  { to: 90, suffix: "+", label: "Production AI agents" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI & LLMs",
    items: [
      "LangChain", "LangGraph", "CrewAI", "OpenAI (GPT-4o)", "Gemini",
      "ElevenLabs", "RAG", "Prompt engineering", "Structured outputs",
    ],
  },
  {
    group: "Browser Automation",
    items: [
      "Selenium", "Playwright", "Puppeteer", "DrissionPage",
      "BeautifulSoup", "Scrapy", "Anti-bot & sessions",
    ],
  },
  {
    group: "Automation & Workflows",
    items: [
      "n8n", "Make", "Zapier", "Twilio", "HubSpot",
      "Google APIs (Sheets, Calendar, Gmail)", "Webhooks",
    ],
  },
  {
    group: "Backend",
    items: [
      "FastAPI", "Flask", "Node.js", "Fastify", "Express",
      "WebSockets", "asyncio", "PostgreSQL", "Supabase",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js 14", "TypeScript", "Tailwind", "Chrome Extensions"],
  },
  {
    group: "Infra & Tools",
    items: ["Docker", "AWS (EC2, S3)", "Vercel", "Render", "Turborepo", "GitHub Actions"],
  },
];

export const experience = [
  {
    company: "Digital Nexa",
    role: "AI Engineer",
    where: "Remote (Dubai HQ)",
    period: "Mar 2026 – Present",
    points: [
      "Architected and built Momentum, an internal project-tracker and resource-planning platform managing 190 active projects across 58 team members (replaces Forecast.it).",
      "Engineered the full TypeScript stack: Next.js 14, Fastify, PostgreSQL/Supabase, deployed on Render with JWT-based RBAC and per-user permission overrides.",
      "Shipped financial reporting, four-tier budget alerts, drag-to-extend resource allocation, timesheet locking, and event-driven SendGrid notifications.",
    ],
  },
  {
    company: "Schmoozzer",
    role: "AI Engineer",
    where: "Remote (Ecuador HQ)",
    period: "Sep 2025 – Mar 2026",
    points: [
      "Designed and shipped AI receptionist and lead-gen chatbots (OpenAI + LangChain) automating client intake across voice and chat in a live CRM.",
      "Built Flask APIs powering core CRM flows — chat intake, lead routing, status updates — with idempotent retry logic and structured error handling.",
      "Engineered Selenium data pipelines scraping LinkedIn and TikTok with persistent sessions, anti-detection patterns, and Sheets-based deduplication.",
    ],
  },
  {
    company: "EnlightSystems",
    role: "AI Intern",
    where: "Islamabad, Pakistan",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Built and tested NLP pipelines and Python automation scripts using LangChain in a fast-paced startup.",
      "Contributed to production AI features and LLM integrations alongside the engineering team.",
    ],
  },
  {
    company: "CodAgentic",
    role: "AI Intern",
    where: "Remote",
    period: "May 2025 – Jul 2025",
    points: [
      "Prototyped agentic AI systems for code generation and task automation using LangGraph and CrewAI.",
      "Documented multi-agent orchestration patterns and trade-offs across LangGraph, CrewAI, and AutoGen.",
    ],
  },
];

export type Project = {
  name: string;
  tag: string;
  blurb: string;
  stack: string[];
  points: string[];
  highlights?: string[];
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    name: "Momentum",
    tag: "Full-Stack",
    blurb: "A live internal project-tracker & resource-planning platform that replaced Forecast.it across the company.",
    highlights: ["Live in production", "Google OAuth + RBAC", "Next.js + Node", "Supabase Postgres", "Render auto-deploy"],
    stack: ["Next.js", "Node.js", "TypeScript", "Supabase", "Render"],
    points: [
      "Full TypeScript monorepo — Next.js frontend and a consolidated Node backend — auto-deployed on Render on every push to main.",
      "Domain-restricted Google sign-in with role-based access (Super Admin, Collaborator) and per-user permissions.",
      "Tracks projects, resource allocation, timesheets, and financials on Supabase Postgres.",
      "P&L / margin reporting, budget-alert thresholds, designer-handoff UI, and event-driven notifications.",
      "Running in production at momentum.digitalnexa.com, used by the whole team day-to-day.",
    ],
    live: "https://momentum.digitalnexa.com",
  },
  {
    name: "NEXA Ops Handbook",
    tag: "Full-Stack",
    blurb: "An internal authenticated handbook — SOPs, credentials, team directory, docs, and tools — for ~75 employees.",
    highlights: ["8 sections", "Google OAuth", "⌘K command palette", "Admin CRUD", "Global search"],
    stack: ["Next.js 15", "React 19", "Supabase", "Tailwind", "Radix UI"],
    points: [
      "One source of truth across 8 sections: SOPs, platform logins, team directory, documents, tools, comms, and onboarding.",
      "Google OAuth restricted to the company Workspace domain, with an Admin CRUD area and read-only access for everyone else.",
      "Global search and a ⌘K command palette (cmdk) for instant navigation across all content.",
      "Per-user onboarding checklists plus an announcements ticker archived into internal comms.",
      "Built on Next.js 15 / React 19 with Supabase SSR auth and a Radix + Tailwind UI.",
    ],
    live: "https://nexa-handbook.vercel.app",
  },
  {
    name: "Convo AI",
    tag: "AI Automation",
    blurb: "A SaaS platform that turns client chat data and GA4 analytics into private, shareable AI-insight dashboards.",
    highlights: ["GA4 + Sheets ingest", "Claude sentiment / intent", "Tokenised dashboards", "Scheduled jobs", "Admin panel"],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Anthropic", "APScheduler"],
    points: [
      "Pulls conversation data from Google Sheets and website analytics from GA4 on a schedule via APScheduler.",
      "Sends chat messages to the Claude API to extract sentiment, topics, and intent, stored in Postgres.",
      "Renders a private, tokenised dashboard per client at an unguessable share-link — no client login required.",
      "Admin panel to onboard clients, configure each dashboard's fields, and manage integrations.",
      "FastAPI + SQLAlchemy 2.0 + Alembic backend with Pydantic v2 validation.",
    ],
    code: "https://github.com/haseeb9933/convo-ai",
  },
  {
    name: "Upwork Job Bot",
    tag: "Browser Automation",
    blurb: "An Upwork automation bot that watches the job bell in real time, filters new postings, and serves them via an API.",
    highlights: ["Real-time bell watch", "New-job detection", "Dedup store", "Persistent session", "FastAPI service"],
    stack: ["Python", "FastAPI", "DrissionPage", "Uvicorn"],
    points: [
      "A bell-watcher monitors the Upwork notification bell and surfaces new job postings the moment they appear.",
      "Deduplicates against a processed-jobs store so every job is handled exactly once.",
      "Persistent browser session keeps the bot logged in across long monitoring runs.",
      "Exposes a FastAPI service so the live job feed can be consumed by other tools.",
      "Modular structure (browser / services / api / store) built to extend toward auto-proposals.",
    ],
    code: "https://github.com/haseeb9933/upwork-job-bot",
  },
  {
    name: "TikTok & Instagram Scraper",
    tag: "Browser Automation",
    blurb: "A FastAPI scraper that extracts TikTok and Instagram profile and post data via headless Selenium.",
    highlights: ["TikTok + Instagram", "FastAPI endpoint", "Headless Selenium", "Engagement parsing", "Cookie sessions"],
    stack: ["Python", "FastAPI", "Selenium", "BeautifulSoup"],
    points: [
      "Headless Chrome (Selenium + webdriver-manager) with a realistic user-agent to pull profiles and posts.",
      "Parses formatted engagement counts (10.5K, 2.1M → integers) and structures results behind a FastAPI endpoint.",
      "Cookie-based Instagram sessions for authenticated scraping of profiles and posts.",
      "Explicit waits and resilient selectors handle dynamic, JS-rendered pages.",
      "Returns clean JSON ready for analysis or outreach pipelines.",
    ],
    code: "https://github.com/haseeb9933/tiktok-instagram-scraper",
  },
  {
    name: "TikTok News Video Automation",
    tag: "AI Automation",
    blurb: "Turns a news-article URL into a review-ready vertical video — script, AI visuals, voiceover, captions, rendered MP4.",
    highlights: ["AI script + visuals", "Auto captions", "Voiceover sync", "Human review", "Email delivery"],
    stack: ["n8n", "GPT-4o", "Leonardo AI", "ElevenLabs", "Shotstack"],
    points: [
      "End-to-end pipeline: extracts article text, writes a 12-sentence script, generates 12 cinematic images, and renders a 1080×1920 MP4.",
      "Character-level narration timestamps drive synchronized SRT captions; Sheets-triggered with auto email delivery and a human-review checkpoint.",
      "Built-in validation and error handling at every step, with modular n8n nodes that retarget easily to other formats or platforms.",
    ],
    code: "https://github.com/abuzar561/TikTok-News-Video-Automation",
  },
  {
    name: "Axon Bridge",
    tag: "AI Automation",
    blurb: "A web platform that runs, monitors, and autonomously fixes n8n workflows using LLM root-cause analysis.",
    highlights: ["Auto-fix workflows", "LLM root-cause analysis", "Live logs + screenshots", "Agent + manual mode", "RCA / video export"],
    stack: ["React", "Vite", "FastAPI", "Selenium", "Gemini", "OpenAI"],
    points: [
      "Executes n8n workflows from a web UI with live-streamed logs and screenshots across a 9-phase pipeline.",
      "LLM-powered root-cause analysis detects failures and applies autonomous fixes, with a manual editor mode to take control.",
      "Packages execution logs, RCA reports, and run videos into downloadable ZIP archives.",
      "Iterative remediation loop retries AI-driven fixes until the workflow passes or attempt limits are hit.",
      "React + Vite frontend over a FastAPI backend, with JSON-based run persistence and artifact storage.",
    ],
    code: "https://github.com/haseeb9933/haseeb-portfolio",
  },
  {
    name: "AI Receptionist",
    tag: "AI Agents",
    blurb: "An n8n-orchestrated voice & chat receptionist that handles intake, FAQs, and booking with human fallbacks.",
    highlights: ["Voice + chat", "Intent routing", "Lead capture", "Booking", "Human handoff"],
    stack: ["n8n", "OpenAI", "ElevenLabs", "Twilio"],
    points: [
      "Routes voice (ElevenLabs + Twilio) and chat through intent classification and structured fallback chains.",
      "Captures leads and books appointments, logging to Google Sheets with email alerts.",
      "Low-confidence conversations escalate to a human, keeping every interaction on-brand.",
      "Built and exported as a reusable n8n workflow that drops into a new business with minimal setup.",
      "Configurable intent flows let new actions or knowledge be added without touching code.",
    ],
    code: "https://github.com/haseeb9933/Receptionist",
  },
  {
    name: "NOVA — n8n Copilot",
    tag: "Tooling",
    blurb: "A Chrome extension sidecar giving n8n engineers real-time error detection and AI chat, right in the browser.",
    highlights: ["Real-time error capture", "AI chat support", "Solution docs", "Command palette", "Supabase memory"],
    stack: ["Chrome MV3", "JavaScript", "Supabase", "GPT-4o-mini", "n8n"],
    points: [
      "Real-time error capture with deduplication, prompting engineers for hypotheses with confidence scoring.",
      "Context-aware AI agent merges current errors with historical patterns from a Supabase knowledge base.",
      "Workflow tray, error-ticket tracking, and a Ctrl/Cmd-K command palette inside a draggable, themed UI.",
      "Watches n8n cloud, localhost, and docs pages, so help appears exactly where engineers work.",
      "Three-step solution docs (root cause, fix logic, prevention rule) build a reusable knowledge base.",
    ],
    code: "https://github.com/haseeb9933/haseeb-portfolio",
  },
  {
    name: "Rubber Band Trading Bot",
    tag: "Automation",
    blurb: "A Binance Futures bot using a 13-stage martingale / Fibonacci 'doubling-down' strategy with full backtesting.",
    highlights: ["13-stage strategy", "Backtesting suite", "Binance Futures API", "Risk alerts", "n8n state sync"],
    stack: ["Python", "FastAPI", "n8n", "Binance API", "Google Sheets"],
    points: [
      "Opens and reinforces positions across 13 progressive stages, taking profit and flipping direction on the snap-back.",
      "Full backtesting suite with parameter-optimization grids and equity-curve visualization.",
      "Webhook-synced state between the Python bot and n8n, with email alerts from stage 3+ and a stage-12 stop-loss.",
      "Stage rulebook scales position sizing from $1 to $250 with per-stage take-profit and doubling percentages.",
      "FastAPI service with SQLite persistence exposes controls and syncs trade state in real time.",
    ],
    code: "https://github.com/haseeb9933/haseeb-portfolio",
  },
  {
    name: "LinkedIn Automation API",
    tag: "Browser Automation",
    blurb: "A Flask REST API that automates LinkedIn — commenting, following, and post extraction via Selenium.",
    highlights: ["REST API", "Human-like typing", "Post extraction", "Session management", "API-key auth"],
    stack: ["Python", "Flask", "Selenium", "ChromeDriver"],
    points: [
      "Posts comments with human-like typing and duplicate detection; follows profiles with smart fallback to connection requests.",
      "Extracts posts with rich metadata — engagement metrics, media, actor info — from any profile or company page.",
      "Thread-safe browser-session management with Chrome-profile / cookie auth and X-API-Key security.",
      "Designed as composable endpoints so it slots straight into larger outreach or research pipelines.",
      "Dual auth modes (Chrome profile or exported cookies) keep long automated sessions stable.",
    ],
    code: "https://github.com/haseeb9933/haseeb-portfolio",
  },
  {
    name: "Bidsquare Outreach Bot",
    tag: "AI Automation",
    blurb: "Watches YouTube videos, identifies valuable antiques with AI, and posts expert comments to drive resale engagement.",
    highlights: ["AI item analysis", "Whisper transcription", "Randomized comments", "Rate limiting", "Persistent sessions"],
    stack: ["Python", "FastAPI", "Playwright", "Claude", "Whisper", "n8n"],
    points: [
      "Pipeline downloads video (yt-dlp), transcribes audio with Whisper, extracts frames, and analyzes items with Claude.",
      "A 3-way randomized comment strategy (expert / soft-brand / data-driven) keeps posting natural and varied.",
      "Four n8n workflows handle metadata, processing, performance tracking, and rate limiting; persistent Chromium login.",
      "Maintains YouTube login through a local Chromium profile for repeated posting without re-authentication.",
      "A FastAPI service tunneled via ngrok coordinates with n8n Cloud for orchestration and tracking.",
    ],
    code: "https://github.com/haseeb9933/haseeb-portfolio",
  },
  {
    name: "Ops Hub",
    tag: "Full-Stack",
    blurb: "A full-stack operations hub — AI task extraction, real-time chat, WebRTC calls, billing, and an admin panel.",
    highlights: ["AI task extraction", "Real-time chat", "WebRTC voice calls", "Billing / invoices", "Admin + RBAC"],
    stack: ["React", "FastAPI", "Supabase", "WebRTC", "Claude", "GPT-4o"],
    points: [
      "AI task extraction from meeting notes via a 3-agent pipeline (Automation / CRM / Human → Governor consolidation).",
      "Real-time channel chat with voice messages, waveforms, reactions, GIFs, and file sharing.",
      "WebRTC peer-to-peer voice calls, multi-channel notifications, tax-aware invoicing, and an RBAC admin panel.",
      "Deployed on Ubuntu with Nginx + systemd; Supabase handles auth, realtime, and Postgres storage.",
      "Frontend in React 18, Vite, Zustand, and Tailwind; multi-model AI across Claude, GPT-4o, Gemini, and Whisper.",
    ],
    code: "https://github.com/haseeb9933/haseeb-portfolio",
  },
  {
    name: "Retail Sales Dashboard",
    tag: "Data & Analytics",
    blurb: "End-to-end retail sales analysis with a Python pipeline and an interactive Power BI dashboard.",
    highlights: ["Data cleaning", "EDA", "Power BI", "Reproducible", "Stakeholder reports"],
    stack: ["Python", "Pandas", "Seaborn", "Power BI"],
    points: [
      "Data cleaning, statistical analysis, and exploratory visualizations with Pandas, Matplotlib, and Seaborn.",
      "Interactive Power BI dashboard for stakeholder reporting and drill-down insights.",
      "Reproducible pipeline structured as data → scripts → reports → dashboard.",
      "Pairs Python EDA with a polished BI layer for both analysts and non-technical stakeholders.",
      "Statistical analysis surfaces sales trends, top products, and seasonality to guide decisions.",
    ],
    code: "https://github.com/haseeb9933/Retail-Sales-Data-Dashboard",
  },
  {
    name: "ML & Forecasting Models",
    tag: "ML / Data Science",
    blurb: "A suite of machine-learning and deep-learning experiments across forecasting and market analysis.",
    highlights: ["Forecasting", "Model eval", "Feature engineering", "Deep learning", "Visualisation"],
    stack: ["Python", "scikit-learn", "Pandas", "Deep Learning"],
    points: [
      "Models spanning stock-price prediction, real-estate valuation, and macro time-series.",
      "Full workflow: feature engineering, training, evaluation, and visualization.",
      "Comparative model evaluation with metrics and plots to pick the best performer per task.",
      "Covers deep learning, regression, and time-series across stock, real-estate, and macro datasets.",
      "Each notebook documents the full workflow from data prep to evaluation for easy reuse.",
    ],
    code: "https://github.com/haseeb9933/Full_Stack_AI__Haseeb",
  },
];

export type Service = {
  title: string;
  desc: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Custom AI Agents",
    desc: "Multi-agent systems & orchestration with LangGraph / CrewAI, tool-calling, and human-in-the-loop safety.",
    tags: ["LangGraph", "CrewAI", "OpenAI"],
  },
  {
    title: "AI Chatbots & Voice",
    desc: "24/7 chat and voice receptionists that capture leads, book appointments, and hand off to humans.",
    tags: ["OpenAI", "Twilio", "ElevenLabs"],
  },
  {
    title: "RAG Assistants",
    desc: "Chat over your own documents and databases — accurate answers with citations and guardrails.",
    tags: ["RAG", "Vector DB", "Gemini"],
  },
  {
    title: "Browser Automation & Scraping",
    desc: "Resilient Selenium / Playwright / Puppeteer bots — logins, anti-bot handling, scheduling, and clean structured data.",
    tags: ["Selenium", "Playwright", "Puppeteer"],
  },
  {
    title: "Workflow Automation",
    desc: "n8n / Make / Zapier workflows with retries, alerts, and recovery built in — brittle manual ops made self-healing.",
    tags: ["n8n", "Make", "APIs"],
  },
  {
    title: "Full-Stack AI Apps",
    desc: "From idea to deployed product — Next.js + FastAPI + LLMs, auth, database, the whole stack.",
    tags: ["Next.js", "FastAPI", "Supabase"],
  },
  {
    title: "AI Architecture",
    desc: "Design the agent/orchestration system, pick the right framework, and get a delivery roadmap.",
    tags: ["Strategy", "Design", "PoC"],
  },
];
