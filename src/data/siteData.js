export const siteConfig = {
  name: "TRICODE AI Technologies",
  shortName: "TRICODE",
  tagline: "Engineering the Future of Intelligent Systems",
  description: "TRICODE AI Technologies engineers intelligent software, high-performance web platforms, and visionary digital products that empower industry leaders.",
  email: "tricodeaitechnologies@gmail.com",
  phone: "+92 311 4569115",
  address: "Opposite to Wapda, Bahawalnagar, Punjab, Pakistan",
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
    id: "mobile-development",
    number: "01", // Ab yeh pehle number par aayega
    title: "Mobile Application Engineering",
    shortDesc: "Silky smooth iOS and Android applications with offline-first synchronization and native tactile responsiveness.",
    fullDesc: "Our mobile engineering team creates intuitive, gesture-driven applications. Every transition, touch feedback, and background synchronization workflow is tuned for maximum retention and seamless usability across all device form factors.",
    icon: "Smartphone",
    accent: "violet", // Color blue kar diya taake pehle wale card jaisa lage
    deliverables: [
      "Cross-Platform iOS & Android Apps",
      "Native Performance Optimization",
      "Real-Time Push & Device Sync",
      "Biometric Security Integration",
      "Mobile-First AI Assistants"
    ],
    technologies: ["Flutter", "Dart", "React Native", "Swift", "Kotlin"] // Technologies update
  },
  {
    id: "web-apps",
    number: "02", // Web beech mein
    title: "Web Platforms & Next-Gen Frontends",
    shortDesc: "Architecturally sound, blazing-fast web applications with editorial visual polish and reactive design systems.",
    fullDesc: "We craft web software that leaves lasting impressions. By combining modern front-end engineering with fluid micro-interactions and rigorous performance optimization, we build applications that scale gracefully from startup MVP to millions of concurrent users.",
    icon: "Globe",
    accent: "coral", // Purple color
    deliverables: [
      "Enterprise Web Applications",
      "High-Performance Dashboards",
      "Interactive 3D / Canvas Experiences",
      "Scalable Design Systems",
      "Headless & API-First Architectures"
    ],
    technologies: ["React 19", "Next.js", "Node.js", "Express.js", "Tailwind CSS"] // Node.js & Express add kiye
  },
  {
    id: "ai-solutions",
    number: "03", // AI ab teesre number par
    title: "AI Solutions & Intelligent Automation",
    shortDesc: "End-to-end custom LLMs, enterprise agentic workflows, and predictive analytics that automate complex operational reasoning.",
    fullDesc: "We build tailored intelligent systems designed to transform messy business data into decisive enterprise advantages. From private retrieval-augmented generation (RAG) to autonomous multi-agent task runners, our solutions operate with high precision and deterministic governance.",
    icon: "Brain",
    accent: "mint", // Cyan color
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
    id: "candid-dating",
    title: "Candid — Video Dating App",
    category: "Mobile Applications",
    client: "Candid Technologies Inc.",
    year: "2025 - 2026",
    badge: "Google Play Store Live",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.candiddatingapp.candid",
    shortDesc: "Video-first dating mobile application featuring unscripted video prompts, scheduled virtual speed dating, and real-time WebRTC matchmaking.",
    fullDesc: "Candid revolutionizes digital matchmaking by replacing static photo swiping with authentic, unscripted video prompt profiles and scheduled virtual speed dating sessions. Engineered with Flutter and WebRTC for fluid 60 FPS mobile performance, sub-50ms message delivery, and low-latency interactive streaming directly on Android and iOS.",
    metrics: [
      { label: "Active Format", value: "100% Video" },
      { label: "Stream Latency", value: "<60ms" },
      { label: "Store Rating", value: "4.8 ★" }
    ],
    technologies: ["Flutter", "Dart", "WebRTC", "Firebase", "Node.js", "Google Play"],
    accent: "from-[#FF4E88] to-[#FF8E53]",
    visualType: "image",
    thumbnail: "/images/projects/candid-app.jpg"
  },
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

export const teamMembers = [
  {
    id: "waqas-ahmad",
    name: "Waqas Ahmad", // Name updated
    role: "Flutter App Developer & Founder", // Role updated
    department: "Executive Leadership",
    isLeader: true,
    bio: "Visionary leader guiding TRICODE's mobile engineering initiatives. 10+ years of experience delivering 100+ successful Flutter apps and digital products for enterprise clients.",
    skills: ["Flutter", "Dart", "App Architecture", "Product Vision", "Enterprise Scaling"],
    image: "/images/team/waqas-ahmad.jpeg", // Apni image ka path dein
    objectPosition: "center 20%",
    initials: "SF",
    gradient: "from-[#2563EB] to-[#7C3AED]",
    social: {
      linkedin: "#",
      github: "#",
      email: "sufyan@tricode.ai"
    }
  },
  {
    id: "adeeba",
    name: "Adeeba Imran",
    role: "Backend Developer",
    department: "Core Backend Engineering",
    isLeader: false,
    bio: "Core backend engineer specializing in scalable microservices, secure REST/GraphQL APIs, database modeling, and high-concurrency server pipelines.",
    skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "System Architecture"],
    image: "/images/team/adeeba.png",
    objectPosition: "center 20%",
    initials: "AI",
    gradient: "from-[#0284C7] to-[#2563EB]",
    social: { linkedin: "#", github: "#", email: "adeeba@tricode.ai" }
  },
  {
    id: "sajid",
    name: "Muhammad Sajid",
    role: "Backend Developer",
    department: "Backend & Cloud Systems",
    isLeader: false,
    bio: "Dedicated backend engineer focused on resilient API integration, cloud-native deployments, distributed caching, and backend performance tuning.",
    skills: ["Django", "Python", "RESTful APIs", "Redis", "Docker"],
    image: "/images/team/sajid.jpeg",
    objectPosition: "center top",
    initials: "MS",
    gradient: "from-[#2563EB] to-[#00D2FF]",
    social: { linkedin: "#", github: "#", email: "sajid@tricode.ai" }
  },
  {
    id: "sehar",
    name: "Sehar Qadeer",
    role: "Flutter Developer",
    department: "Mobile Engineering",
    isLeader: false,
    bio: "Expert Flutter engineer crafting visually stunning, responsive Android and iOS apps with 60FPS fluid motion, reactive state management, and native device integrations.",
    skills: ["Flutter", "Dart", "BLoC / Provider", "iOS & Android", "UI/UX Motion"],
    image: "/images/team/sehar.jpeg",
    objectPosition: "center 15%",
    initials: "SQ",
    gradient: "from-[#00D2FF] to-[#2563EB]",
    social: { linkedin: "#", github: "#", email: "sehar@tricode.ai" }
  },
  {
    id: "salman",
    name: "Muhammad Salman",
    role: "Shopify Developer",
    department: "E-Commerce Solutions",
    isLeader: false,
    bio: "Specialist in bespoke Shopify storefronts, custom Liquid templating, headless commerce architectures, and conversion-optimized retail experiences.",
    skills: ["Shopify Plus", "Liquid", "Headless Hydrogen", "Theme Customization", "E-Commerce APIs"],
    image: "/images/team/salman.jpeg",
    objectPosition: "center 15%",
    initials: "MS",
    gradient: "from-[#10B981] to-[#2563EB]",
    social: { linkedin: "#", github: "#", email: "salman@tricode.ai" }
  },
  {
    id: "bisma",
    name: "Bisma Jamil",
    role: "Marketing Manager",
    department: "Growth & Brand Strategy",
    isLeader: false,
    bio: "Strategic growth marketer leading TRICODE's digital presence, multi-channel outreach campaigns, brand positioning, and enterprise client acquisition funnels.",
    skills: ["Brand Strategy", "Digital Marketing", "SEO & Content", "Performance Analytics", "Client Growth"],
    image: "/images/team/bisma.jpeg",
    objectPosition: "center 15%",
    initials: "BJ",
    gradient: "from-[#EC4899] to-[#7C3AED]",
    social: { linkedin: "#", github: "#", email: "bisma@tricode.ai" }
  },
  // NAYA MEMBER SUFYAN ADD KIYA HAI
  {
    id: "sufyan",
    name: "Sufyan Rafeeq",
    role: "Marketing Manager",
    department: "Growth & Strategy",
    isLeader: false,
    bio: "Result-driven Marketing Manager specializing in digital growth, brand positioning, and client acquisition. Focused on scaling TRICODE's reach and building long-term enterprise relationships.",
    skills: ["Digital Marketing", "Lead Generation", "Brand Strategy", "SEO & Analytics"],
    image: "/images/team/sufyan.jpg", // Yahan Sufyan ki image path dein
    objectPosition: "center 15%",
    initials: "SF",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    social: { linkedin: "#", github: "#", email: "sufyan@tricode.ai" }
  }
];


export const clientsData = [
  {
    id: "candid",
    name: "Candid Dating",
    category: "Mobile Consumer App",
    location: "United States",
    badge: "Play Store Verified",
    url: "https://play.google.com/store/apps/details?id=com.candiddatingapp.candid",
    description: "Full-cycle Flutter mobile engineering, real-time WebRTC video speed dating, and high-concurrency push architecture.",
    logoText: "CANDID",
    logoColor: "from-[#FF4E88] to-[#FF8E53]",
    isLiveApp: true
  },
  {
    id: "biosync",
    name: "BioSync Health Networks",
    category: "Digital Healthcare",
    location: "United Kingdom",
    badge: "HIPAA Compliant",
    description: "Cross-platform clinical companion and real-time medical sensor telemetry dashboard for critical care.",
    logoText: "BIOSYNC",
    logoColor: "from-[#00BCA6] to-[#00D2FF]"
  },
  {
    id: "apex",
    name: "Apex Capital Strategies",
    category: "Fintech & Quantitative",
    location: "Singapore",
    badge: "Enterprise",
    description: "High-frequency algorithmic trading visualizer and ultra-low-latency market data analytics.",
    logoText: "APEX CAP",
    logoColor: "from-[#2563EB] to-[#7C3AED]"
  },
  {
    id: "sovereign",
    name: "Sovereign Retail Group",
    category: "E-Commerce Flagship",
    location: "UAE",
    badge: "Omnichannel",
    description: "Vector-driven generative product search and dynamic headless Shopify storefront architecture.",
    logoText: "SOVEREIGN",
    logoColor: "from-[#D946EF] to-[#2563EB]"
  },
  {
    id: "nextgen",
    name: "Next-Gen Media Labs",
    category: "Interactive Canvas & SaaS",
    location: "Germany",
    badge: "SaaS Platform",
    description: "WebGL interactive collaborative canvas and multi-user delta WebSocket synchronization.",
    logoText: "NEXT-GEN",
    logoColor: "from-[#00D2FF] to-[#2563EB]"
  },
  {
    id: "voxel",
    name: "Voxel Global Systems",
    category: "Cloud Native & DevOps",
    location: "Canada",
    badge: "Enterprise Cloud",
    description: "Automated Kubernetes GPU cluster allocation and dynamic workload autoscaling.",
    logoText: "VOXEL",
    logoColor: "from-[#7C3AED] to-[#9333EA]"
  }
];

export const clientTestimonials = [
  {
    quote: "TRICODE brought Candid from concept to a production-grade video app on Google Play with stellar execution. Their Flutter architecture and video streaming pipelines are unmatched.",
    author: "Product Leadership",
    role: "Candid Dating App",
    highlight: "Google Play Store Live",
    stars: 5,
    verified: true
  },
  {
    quote: "Working with TRICODE felt like having a dedicated tier-1 Silicon Valley engineering team. Transparent sprints, rock-solid code, and zero downtime across our entire infrastructure.",
    author: "VP of Engineering",
    role: "BioSync Health Networks",
    highlight: "Enterprise Scale",
    stars: 5,
    verified: true
  },
  {
    quote: "Their full-stack speed and attention to responsive detail exceeded all expectations. Our active user engagement grew by 320% within the first two months post-launch.",
    author: "Founder & CTO",
    role: "Apex Capital Strategies",
    highlight: "+320% Engagement",
    stars: 5,
    verified: true
  }
];
