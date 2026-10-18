# Patrick Nguyen

**Role:** Software Engineer @ Clear.ai
**Location:** Sydney, NSW, Australia
**LinkedIn:** [linkedin.com/in/patrick-nguyen-44766a188](https://www.linkedin.com/in/patrick-nguyen-44766a188/)
**GitHub:** [Phat0101](https://github.com/Phat0101)
**Email:** [Patrick.Nguyen01@outlook.com](mailto:Patrick.Nguyen01@outlook.com)
**Website:** [patrickdevs.vercel.app](https://patrickdevs.vercel.app)
**Languages:** English, Vietnamese

---

## About

I'm an early software engineer at Clear.ai, an AI-native software company for freight forwarders and customs brokers in Sydney. I build full-stack logistics products across freight forwarding, customs and transport management (TMS). A recent highlight is TariffChat™, a tariff classification assistant that has served 35,000+ classifications for 100+ organisations across APAC.

These days tools like Claude Code handle much of the implementation, so more of my time goes into understanding what customers are struggling with and how a solution should fit together. I still believe in holding the whole problem in my head first — a habit from writing algorithms by hand on my school's competitive programming team in Vietnam.

I moved to Australia from Vietnam in 2018 for high school, finished with an ATAR of 97.6, and graduated with distinction in Computer Science (Advanced) from Western Sydney University.

---

## Work Experience

### Clear.ai — Sydney, NSW (On-site, full-time)
AI-native software for freight forwarders and customs brokers. In 2026 Clear.ai migrated Qube's freight forwarding operation onto its platform in 18 weeks, across forwarding, customs and billing, with autonomous AI agents running in live workflows.

**Software Engineer** · Nov 2025 – Present
- Full-stack engineer on the customs and freight-forwarding platform (about 1,700 commits): React, TanStack Router/Query/Table and Convex on the front end; Django, DRF, Celery, Postgres/pgvector and AWS on the back end. Built declaration workflows, workflow automation rules, shipment tracking timelines, CRM and billing features, and large-list performance work.
- Built TariffChat™, an AI tariff classification assistant for licensed customs brokers, using Next.js 16, the Vercel AI SDK across several model providers, pgvector semantic search over tariff data, and web research tools. 35,000+ classifications, 300+ brokers and 100+ organisations across APAC. It covers the Australian Working Tariff, including Schedule 3 classifications, Tariff Concession Orders, Schedule 4 concessional rates and by-laws.
- Core contributor (about 650 commits) to the transport management system built for Qube: a Convex realtime back end, an Expo / React Native driver tablet app and a React + TanStack fleet portal, including a customs integration module.
- Built LLM classification services for AU, NZ, UK, US, CA and SG tariffs plus e-commerce risk, using FastAPI and pydantic-ai. Grounded agents in supplied source text to cut unsupported citations, and tuned prompts against a broker benchmark.
- Built and run an internal AI engineering agent that starts Claude Code / Codex sessions from Slack, with automated PR review, role-scoped tool policies and a live session viewer.
- Infrastructure as code with AWS CDK (CloudFront, RDS, SQS, KMS) and GitHub OIDC CI/CD. Contributed to a Rust (Axum, Tokio) email ingestion and vector matching service.
- Take on project management and technical leadership, working directly with customers on what to build.

**Junior Software Engineer** · May 2025 – Oct 2025
- Engineered early AI prototypes for customs brokerage: a broker agent (Next.js, AI SDK, Gemini), AI document extraction for invoices and customs data (Convex, Gemini), and a rule-based customs entry audit tool (FastAPI, pydantic-ai).

### QRisk — Queensland (Remote, contract)
**Junior Full-stack Developer** · Feb 2025 – May 2025
- Maintained and developed risk quantification software based on Open FAIR, using Next.js, FastAPI, Prisma ORM and AWS.
- My first paid software role.

### Tata Consultancy Services × Creators Club — North Sydney (Hybrid, internship)
**Full-stack Developer Intern – Partnership** · Oct 2024 – Feb 2025
- Co-founded NaviFi, an AI-powered investment research and community platform, built in partnership with TCS for their Shark Tank competition. Funded by the Creators Club and mentored by TCS.
- Delivered customised AI functionality using multiple models and agentic RAG techniques; also built a Chrome extension.
- Developed the SkillPies GitHub course and mentored new club members on web technologies.

### Western Sydney University — Kingswood, NSW (Hybrid, internship)
**Full-stack Developer Intern** · Mar 2024 – Nov 2024
- Migrated the SSTaRs staff roster from a file-based process to an interactive web app (React, Node.js, MongoDB).
- Handled staff preferences, sick leave, and public and university holidays; calendar export plus CSV and PDF downloads.
- Built the Zoom Summariser for multi-speaker transcript summarisation with LLMs.

### Western Sydney University, School of Medicine — GPT for Health (Research)
**Software Engineer, Project Manager** · Jul 2024 – Dec 2024 · Supervisor: Assoc. Prof. Brahm Marjadi
- Built an AI system (Next.js, TypeScript, SQLite, AWS) that simulates realistic family scenarios for medical students in the "Health Across the Lifespan" workshops.
- Researched how students respond to LLM-simulated patients compared with real interactions.

### Western Sydney University — Peer Assisted Study Sessions
**Maths Facilitator (Statistics)** · Feb 2023 – Jun 2023
- Ran weekly sessions on statistical decision making with R and Python; about 30% improvement on previous semesters, with 75% of students achieving Distinction or above.

### Retail (part-time, while studying)
- **Sales Representative – Beauty Advisor, Prestige** · Oct 2022 – Jan 2024 — fragrance brands (Versace, Michael Kors, Moschino and others) at Myer and David Jones.
- **Sales Consultant, Swarovski** · Oct 2020 – Feb 2022.
- Gave me a user-first perspective and strong communication skills that I bring to product work.

---

## Education

**Western Sydney University** — Bachelor of Computer Science (Advanced), with distinction
Major: Artificial Intelligence · Minor: Cloud Computing · GPA 6.54/7 · Graduated 2024
- Dean's Merit List 2022, 2023 and 2024
- Vice-Chancellor's Academic Excellence Undergraduate Scholarship
- Coursework: Data Structures & Algorithms, Systems Programming, Cloud Computing Architecture, AI, Machine Learning & Data Science, Cyber Security, Robotics

**High school (NSW)** — ATAR 97.6; first in Maths Advanced, Software Design & Development, and Information Processes & Technology.

**ACS Professional Year Program** — completed Apr 2026 (32 weeks alongside full-time work; professional communication and feedback).

---

## Projects

### Claude Code Diff Review (2026, open source)
VS Code / Cursor extension that lets Claude Code edit without blocking on approvals, captures every change as a before/after diff, and offers batch keep or revert when the agent finishes. Built with Claude Code hooks, a local Bun server and the VS Code extension API. [github.com/Phat0101/claude-diff-review](https://github.com/Phat0101/claude-diff-review)

### Zoom Summariser (2024)
Multi-speaker transcript summarisation: assign timeframes to speakers, summarise each with customisable LLM prompts, download the results. [zoom-summariser.vercel.app](https://zoom-summariser.vercel.app/)

### LangGraph industry research agents
Multi-agent system that plans research queries, runs parallel web searches (Tavily), analyses industry data, risks and trends, and writes a full report.

### Sudoku Solver
My first real program (in Pascal, as a teenager) was a backtracking Sudoku solver. The web version solves puzzles typed in manually or photographed and read by a vision model.

### Mini-SHRDLU (C++)
Solver for a simplified SHRDLU blocks world using A* search.

### Book Catalog (2021)
My first deployed app: Node, Express, JWT and MongoDB on Heroku, with an Electron desktop build.

---

## Skills

- **Languages:** TypeScript/JavaScript, Python, Rust, C/C++, Java, SQL
- **AI/LLM:** Vercel AI SDK, pydantic-ai, LangChain/LangGraph, RAG and vector search (pgvector, embeddings), structured document extraction, tool-calling agents, LLM-as-judge evaluation, Claude, Gemini, OpenAI, PyTorch
- **Backend:** Django, DRF, Celery, FastAPI, Convex, Hono, Bun, Node.js, Rust (Axum, Tokio), REST/OpenAPI, EDI/EDIFACT and XML messaging
- **Frontend:** React, Next.js 16, Vite, TanStack Router/Query/Table/Virtual, Tailwind CSS v4, shadcn/ui, AG Grid, Expo / React Native, Electron
- **Data & infra:** PostgreSQL, pgvector, Redis, Prisma, Drizzle, Supabase, AWS (S3, SQS, RDS, CloudFront, KMS, Textract, CDK), Docker, Vercel, Railway, Cloudflare, GitHub Actions, OpenTelemetry, Vitest, Playwright
- **Integrations:** Slack (Bolt), Clerk, Postmark/Resend, PostHog
- **Domain:** Freight forwarding, customs brokerage, tariff classification, transport management, risk quantification (Open FAIR)
- **Working style:** Project management, stakeholder management, team leadership, mentoring

---

## Community

- Advisor at UAVS Hackathon 2026 (Vietnamese Students in NSW), helping teams sharpen their ideas and pitches.
- Plasma donor with Australian Red Cross Lifeblood.

## Certifications

- AWS Academy Graduate — Cloud Architecting; Cloud Foundations
- JavaScript Algorithms and Data Structures
- Artificial Intelligence Foundations: Neural Networks
