export const siteConfig = {
  name: "TRICODE AI Technologies",
  shortName: "TRICODE",
  tagline: "Engineering the Future of Intelligent Systems",
  description: "TRICODE AI Technologies engineers intelligent software, high-performance web platforms, and visionary digital products that empower industry leaders.",
  email: "hello@tricodetech.ai",
  phone: "+1 (888) 874-2633",
  address: "Innovation District, Tech Boulevard, Suite 700",
  socials: [
    { name: "GitHub", href: "https://github.com", icon: "Github" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter / X", href: "https://x.com", icon: "Twitter" },
    { name: "Discord", href: "https://discord.com", icon: "MessageSquare" }
  ]
};

export const technologies = [
  { name: "React 19 & Next.js", category: "Frontend", tag: "Core" },
  { name: "PyTorch & TensorFlow", category: "Machine Learning", tag: "AI/ML" },
  { name: "Autonomous Multi-Agents", category: "AI Systems", tag: "AI/ML" },
  { name: "FastAPI & Python", category: "Backend", tag: "Backend" },
  { name: "Go & Rust Engines", category: "High Performance", tag: "Backend" },
  { name: "Vector DBs (Qdrant/Pinecone)", category: "Embeddings", tag: "Data" },
  { name: "Tailwind CSS & Motion", category: "Design Tech", tag: "Frontend" },
  { name: "Kubernetes & Docker", category: "Cloud Native", tag: "DevOps" },
  { name: "Three.js & Canvas WebGL", category: "Visual Tech", tag: "Creative" }
];

export const servicesData = [
  {
    id: "ai-solutions",
    number: "01",
    title: "AI Solutions & Intelligent Automation",
    shortDesc: "End-to-end custom LLMs, enterprise agentic workflows, and predictive analytics that automate complex operational reasoning.",
    fullDesc: "We build tailored intelligent systems designed to transform messy business data into decisive enterprise advantages. From private retrieval-augmented generation (RAG) to autonomous multi-agent task runners, our solutions operate with high precision and deterministic governance.",
    icon: "Brain",
    accent: "violet",
    deliverables: [
      "Custom SLM & LLM Fine-Tuning",
      "Private Enterprise RAG Pipelines",
      "Autonomous Multi-Agent Systems",
      "Computer Vision & Document OCR",
      "Predictive Machine Learning Models"
    ],
    technologies: ["PyTorch", "LangGraph", "Hugging Face", "Qdrant", "Python"]
  },
  {
    id: "web-apps",
    number: "02",
    title: "Web Platforms & Next-Gen Frontends",
    shortDesc: "Architecturally sound, blazing-fast web applications with editorial visual polish and reactive design systems.",
    fullDesc: "We craft web software that leaves lasting impressions. By combining modern front-end engineering with fluid micro-interactions and rigorous performance optimization, we build applications that scale gracefully from startup MVP to millions of concurrent users.",
    icon: "Globe",
    accent: "coral",
    deliverables: [
      "Enterprise Web Applications",
      "High-Performance Dashboards",
      "Interactive 3D / Canvas Experiences",
      "Scalable Design Systems",
      "Headless & API-First Architectures"
    ],
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    id: "mobile-development",
    number: "03",
    title: "Mobile Application Engineering",
    shortDesc: "Silky smooth iOS and Android applications with offline-first synchronization and native tactile responsiveness.",
    fullDesc: "Our mobile engineering team creates intuitive, gesture-driven applications. Every transition, touch feedback, and background synchronization workflow is tuned for maximum retention and seamless usability across all device form factors.",
    icon: "Smartphone",
    accent: "mint",
    deliverables: [
      "Cross-Platform iOS & Android Apps",
      "Native Performance Optimization",
      "Real-Time Push & Device Sync",
      "Biometric Security Integration",
      "Mobile-First AI Assistants"
    ],
    technologies: ["React Native", "Swift", "Kotlin", "GraphQL", "Capacitor"]
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX & Product Design Systems",
    shortDesc: "Futuristic digital product design that unifies usability, typographic sophistication, and human-centric ergonomics.",
    fullDesc: "Great code needs transcendent product design. We dissect your product vision, map user psychological friction, and craft cohesive design languages featuring harmonious palettes, clear hierarchies, and production-ready component libraries.",
    icon: "Layers",
    accent: "violet",
    deliverables: [
      "Interactive High-Fidelity Prototypes",
      "Design Systems & Token Libraries",
      "User Journey & Friction Audits",
      "Motion Design & Micro-Interactions",
      "Accessible Design (WCAG 2.1 AAA)"
    ],
    technologies: ["Figma", "Design Tokens", "Micro-animations", "Prototyping", "UX Strategy"]
  },
  {
    id: "backend-engineering",
    number: "05",
    title: "Backend Development & API Engineering",
    shortDesc: "Fault-tolerant distributed microservices, low-latency gRPC/GraphQL APIs, and resilient cloud architectures.",
    fullDesc: "We engineer high-throughput data backbones capable of processing millions of requests without breaking a sweat. Through modern concurrency patterns, event streaming, and rock-solid relational/vector database design, your core systems stay rock solid.",
    icon: "Cpu",
    accent: "coral",
    deliverables: [
      "Distributed Microservices",
      "High-Throughput GraphQL & REST APIs",
      "Real-Time WebSocket Streaming",
      "Database Modeling & Vector Search",
      "Enterprise Security & Auth Systems"
    ],
    technologies: ["FastAPI", "Go", "Node.js", "PostgreSQL", "Redis", "Kafka"]
  },
  {
    id: "custom-software",
    number: "06",
    title: "Custom Software & Cloud Systems",
    shortDesc: "Bespoke digital engines engineered to solve unique organizational bottlenecks with zero technical debt.",
    fullDesc: "When off-the-shelf software falls short, TRICODE crafts custom software engines engineered strictly for your proprietary business logic. We ensure complete ownership of source code, zero vendor lock-in, and military-grade security standards.",
    icon: "Code2",
    accent: "mint",
    deliverables: [
      "Proprietary Business Logic Engines",
      "Cloud Infrastructure (K8s/Terraform)",
      "Legacy Codebase Modernization",
      "Automated CI/CD Deployment Pipelines",
      "24/7 Reliability & Telemetry Monitoring"
    ],
    technologies: ["Kubernetes", "AWS / GCP", "Terraform", "Docker", "Prometheus"]
  }
];

export const projectsData = [
  {
    id: "omninexus",
    title: "OmniNexus AI",
    category: "AI & Autonomous Systems",
    client: "Enterprise Automation Core",
    year: "2026",
    badge: "Featured AI Flagship",
    shortDesc: "Autonomous multi-agent orchestration platform integrating real-time vector memory and contextual policy reasoning.",
    fullDesc: "OmniNexus is a mission-critical multi-agent coordination system that enables enterprise teams to assign complex, multi-stage analytical goals to coordinated AI agents. Featuring deterministic audit logging, self-correcting validation pipelines, and sub-100ms vector index queries.",
    metrics: [
      { label: "Throughput Boost", value: "+380%" },
      { label: "Latency Reduction", value: "65%" },
      { label: "Accuracy Score", value: "99.4%" }
    ],
    technologies: ["Python", "FastAPI", "React 19", "Qdrant", "Tailwind CSS"],
    accent: "from-[#7547F5] to-[#B055DE]",
    visualType: "network-graph"
  },
  {
    id: "aurasync",
    title: "AuraSync Creative Studio",
    category: "Web Applications",
    client: "Next-Gen Media Labs",
    year: "2026",
    badge: "Interactive Canvas",
    shortDesc: "Real-time collaborative generative canvas connecting remote design teams with AI-assisted vector manipulation.",
    fullDesc: "A high-performance creative workspace built for visual storytellers and UI designers. AuraSync utilizes WebGL acceleration and delta-compression WebSockets to allow hundreds of users to co-author complex multimedia nodes with zero perceptible input lag.",
    metrics: [
      { label: "Framerate", value: "60 FPS Native" },
      { label: "Realtime Sync", value: "<15ms" },
      { label: "Active Nodes", value: "50k+" }
    ],
    technologies: ["React", "WebGL", "TypeScript", "Node.js", "WebSockets"],
    accent: "from-[#FF795E] to-[#FFA18F]",
    visualType: "canvas-matrix"
  },
  {
    id: "veloce-health",
    title: "Veloce Clinical Intelligence",
    category: "Mobile & Health Tech",
    client: "BioSync Health Networks",
    year: "2025",
    badge: "Healthcare Grade",
    shortDesc: "HIPAA-compliant mobile clinical diagnostic platform summarizing patient telemetry with neural safety guardrails.",
    fullDesc: "A secure cross-platform diagnostic companion for critical care physicians. Veloce aggregates real-time ICU sensor feeds, cross-references international pharmacopeias, and surfaces anomalous trends minutes before they manifest into clinical emergencies.",
    metrics: [
      { label: "Triage Acceleration", value: "4.2x Faster" },
      { label: "Compliance", value: "HIPAA / GDPR" },
      { label: "Doctor Rating", value: "4.9 / 5.0" }
    ],
    technologies: ["React Native", "PyTorch", "FHIR APIs", "Secure Enclave"],
    accent: "from-[#00BCA6] to-[#9BEBD6]",
    visualType: "biometric-pulse"
  },
  {
    id: "kinetix-algo",
    title: "Kinetix Quantitative Analytics",
    category: "Custom Software",
    client: "Apex Capital Strategies",
    year: "2025",
    badge: "Financial Engineering",
    shortDesc: "Ultra-low-latency algorithmic strategy visualizer processing millions of market tick events per second.",
    fullDesc: "Designed for quantitative hedge fund trading desks, Kinetix renders high-dimensional volatility surfaces and Monte Carlo simulations with immediate visual feedback, allowing risk officers to stress-test multimillion-dollar asset allocations.",
    metrics: [
      { label: "Event Ingestion", value: "1.2M ticks/sec" },
      { label: "Query Time", value: "2.4ms" },
      { label: "Zero Downtime", value: "99.999%" }
    ],
    technologies: ["Go", "React", "D3.js", "ClickHouse", "TimescaleDB"],
    accent: "from-[#7547F5] to-[#FF795E]",
    visualType: "quantum-chart"
  },
  {
    id: "synthetica-cloud",
    title: "Synthetica Neural Cloud",
    category: "Cloud & DevOps",
    client: "Voxel Global Systems",
    year: "2025",
    badge: "Infrastructure",
    shortDesc: "Autonomous Kubernetes cluster cost optimization and dynamic GPU allocation for heavy deep learning training jobs.",
    fullDesc: "Synthetica uses predictive reinforcement learning to preemptively scale and pack container workloads across heterogeneous GPU instances, reducing cloud hyper-scaler expenses by over 44% without dropping job deadlines.",
    metrics: [
      { label: "Cloud Cost Cut", value: "-44.2%" },
      { label: "GPU Utilization", value: "94%" },
      { label: "Auto-Failover", value: "100%" }
    ],
    technologies: ["Kubernetes", "Golang", "Prometheus", "Terraform", "React"],
    accent: "from-[#281C40] to-[#7547F5]",
    visualType: "cloud-cluster"
  },
  {
    id: "lumina-commerce",
    title: "Lumina Generative Commerce",
    category: "UI/UX & Web Apps",
    client: "Sovereign Retail Group",
    year: "2026",
    badge: "E-Commerce AI",
    shortDesc: "Hyper-personalized digital flagship featuring multimodal semantic search and real-time virtual try-on previews.",
    fullDesc: "Transforming standard product listings into an immersive editorial showroom. Lumina's vector-powered recommendation engine interprets unstructured shopper queries (e.g. 'outfit for a rooftop gallery opening in autumn') and generates cohesive personalized looks instantly.",
    metrics: [
      { label: "Cart Value", value: "+32%" },
      { label: "Conversion Rate", value: "+2.8x" },
      { label: "Bounce Reduction", value: "48%" }
    ],
    technologies: ["Next.js", "Computer Vision", "Tailwind CSS", "Redis Vector"],
    accent: "from-[#FF795E] to-[#9BEBD6]",
    visualType: "neural-fashion"
  }
];

export const processSteps = [
  {
    step: "01",
    phase: "Discover",
    title: "Deep Technical Exploration & Systems Audit",
    description: "We dive straight into your architecture, data boundaries, and user challenges to pinpoint highest-leverage technology opportunities.",
    deliverables: ["Systems Architecture Audit", "Data Readiness Assessment", "Technical Milestone Roadmap"]
  },
  {
    step: "02",
    phase: "Design",
    title: "Editorial UI/UX & Intelligent Prototypes",
    description: "We establish a cohesive visual language, design tokens, and interactive clickable prototypes that eliminate ambiguity before code is written.",
    deliverables: ["High-Fidelity Component Library", "Interactive Motion Prototypes", "Design Token Specification"]
  },
  {
    step: "03",
    phase: "Develop",
    title: "Agile Engineering & Neural Integration",
    description: "Our senior engineers implement modular, test-covered codebases utilizing modern frontends, high-throughput microservices, and AI integrations.",
    deliverables: ["Production-Ready Source Code", "Automated Test Suites", "Continuous Deployment Pipeline"]
  },
  {
    step: "04",
    phase: "Deliver",
    title: "Hardened Launch, Scale & Governance",
    description: "We deploy with zero-downtime safeguards, configure comprehensive telemetry monitors, and empower your internal teams for long-term ownership.",
    deliverables: ["Zero-Downtime Deployment", "Full Telemetry & Alerting", "Knowledge Transfer & Documentation"]
  }
];

export const teamPhilosophy = [
  {
    title: "Craft Over Assembly",
    description: "We reject cookie-cutter templates. Every system, animation curve, and API contract is engineered with deliberate intentionality."
  },
  {
    title: "Engineering Integrity",
    description: "We write clean, test-backed, maintainable codebases that your internal teams will genuinely love operating and scaling."
  },
  {
    title: "AI as a Force Multiplier",
    description: "We treat artificial intelligence not as marketing hype, but as a mathematical amplifier for human ingenuity and operational precision."
  },
  {
    title: "Transparency by Default",
    description: "Direct access to lead engineers, visible sprint boards, and honest technical guidance. No middlemen, no buzzword inflation."
  }
];

export const companyValues = [
  { stat: "99.8%", label: "On-Time Milestone Delivery" },
  { stat: "15+", label: "Proprietary AI Models Deployed" },
  { stat: "5.0★", label: "Client Satisfaction Rating" },
  { stat: "0%", label: "Generic Boilerplate Used" }
];
