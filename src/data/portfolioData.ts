import { PortfolioProfile } from '../types';

export const initialPortfolioData: PortfolioProfile = {
  name: 'Phillip Macias',
  title: 'Senior Full-Stack & Distributed Systems Engineer',
  subtitle: 'Building resilient web platforms, cloud-native services, and high-craft user experiences with modern TypeScript, Go, and React.',
  bioHeadline: 'Architecting high-scale distributed applications and refined digital interfaces.',
  bioParagraphs: [
    'I am a senior software engineer with over 8 years of experience designing, shipping, and scaling production software. My expertise spans from building responsive, accessible client interfaces to architecting low-latency microservices and distributed data pipelines.',
    'Over the course of my career, I have led engineering initiatives for high-traffic SaaS platforms, reduced p99 latency in event-driven streaming clusters, and established design systems adopted across distributed engineering teams. I take pride in balancing rapid delivery with rigorous engineering standards—ensuring systems remain maintainable, secure, and observable.',
    'When I am not in my editor or profiling database queries, you can find me contributing to open-source tooling, mentoring aspiring engineers, and exploring the intersection of distributed systems and developer experience.'
  ],
  location: 'Oxnard, CA (Open to Remote)',
  email: 'phillipmacias82@gmail.com', 
  yearsOfExperience: 8,
  principles: [
    {
      title: 'Performance by Design',
      description: 'Latency, bundle footprint, and memory overhead are core design features. Every millisecond shaved from round trips directly impacts user satisfaction and system reliability.'
    },
    {
      title: 'Craft & Usability',
      description: 'Engineering excellence is incomplete without pristine visual rhythm, WCAG AA accessibility, keyboard operability, and intuitive mental models.'
    },
    {
      title: 'Resilience & Observability',
      description: 'Failure is inevitable in distributed systems. Systems must degrade gracefully with circuit breakers, idempotent APIs, and actionable telemetry.'
    },
    {
      title: 'Clear Communication',
      description: 'Code is written for humans first. High-functioning teams thrive on transparent RFCs, actionable pull request reviews, and cohesive architectural documentation.'
    }
  ],
  socialProfiles: [
    {
      name: 'GitHub',
      url: 'https://github.com/philsthinkerbox1982',
      username: '@philsthinkerbox1982',
      icon: 'github',
      primary: true,
      color: 'slate'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/phillip-macias-217020403',
      icon: 'linkedin',
      primary: true,
      color: 'blue'
    },
    {
      name: 'Email Direct',
      url: 'mailto:phillipmacias82@gmail.com',
      username: 'phillipmacias82@gmail.com',
      icon: 'mail',
      primary: true,
      color: 'emerald'
    },
    {
      name: 'Resume / CV',
      url: '#resume',
      username: 'Phillip_Macias_CV.pdf',
      icon: 'file-text',
      primary: false,
      color: 'indigo'
    }
  ],
  projects: [
    {
      id: 'apex-mesh',
      title: 'ApexMesh',
      tagline: 'High-throughput event streaming & message router handling 120k events/sec',
      category: 'Distributed Systems',
      description: 'A distributed event-streaming gateway built to aggregate, deduplicate, and route asynchronous telemetry streams with sub-5ms median delivery latency.',
      featured: true,
      featuredBadge: 'Featured Architecture',
      stars: 480,
      metrics: [
        { label: 'Throughput', value: '120k req/s' },
        { label: 'p99 Latency', value: '< 8.2ms' },
        { label: 'Packet Drop', value: '0.001%' }
      ],
      technologies: ['Go', 'Kafka', 'Redis', 'WebSockets', 'TypeScript', 'Docker', 'Prometheus'],
      githubUrl: 'https://github.com/PhillipMacias/apex-mesh',
      liveUrl: 'https://apexmesh.demo.dev',
      caseStudy: {
        overview: 'ApexMesh was conceived to replace an aging monolithic polling queue that struggled under peak surge traffic, resulting in dropped telemetry payloads and erratic database spikes.',
        challenge: 'Handling burst traffic spikes from over 45,000 concurrent edge nodes while guaranteeing strict message ordering, zero data loss, and real-time observability for engineering teams.',
        solution: 'Engineered a concurrent Go worker engine backed by partition-keyed Kafka streams and an in-memory Redis cluster for sliding-window deduplication. Provided a reactive TypeScript dashboard streaming live diagnostics over WebSockets.',
        architecture: [
          'Edge ingest proxy with rate-limiting token buckets and TLS termination',
          'Go worker pool consuming from partitioned Kafka topics with backpressure handling',
          'Distributed memory ring buffer using Redis for stateful deduplication',
          'Live WebSocket telemetry daemon emitting metric aggregates to the browser UI'
        ],
        results: [
          'Reduced p99 ingress latency from 145ms down to 8.2ms under peak load',
          'Eliminated queue dropouts during multi-region failover events',
          'Adopted as the foundational ingestion layer across 3 internal engineering squads'
        ]
      }
    },
    {
      id: 'pulse-vault',
      title: 'PulseVault Analytics',
      tagline: 'Multi-tenant financial reconciliation & real-time anomaly detection suite',
      category: 'Full-Stack SaaS',
      description: 'An enterprise-grade audit and accounting platform that cross-checks millions of transactional records against settlement feeds to detect discrepancies automatically.',
      featured: true,
      featuredBadge: 'Enterprise SaaS',
      stars: 320,
      metrics: [
        { label: 'Processed Volume', value: '$1.4B+' },
        { label: 'Audit Speed', value: '14x faster' },
        { label: 'Discrepancy Catch', value: '99.98%' }
      ],
      technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      githubUrl: 'https://github.com/PhillipMacias/pulsevault-audit',
      liveUrl: 'https://pulsevault.demo.dev',
      caseStudy: {
        overview: 'Financial operations teams spent 18+ hours each week manually inspecting multi-currency CSV extracts and merchant settlement batches.',
        challenge: 'Delivering an interactive client interface capable of rendering 100,000+ transaction rows with instant filter/sort operations without UI thread freezing.',
        solution: 'Built a virtualized grid engine with Web Worker calculation offloading, backed by indexed PostgreSQL schemas and asynchronous background worker queues in Node.js.',
        architecture: [
          'Optimized PostgreSQL schema with composite indexing and partition pruning by fiscal quarter',
          'Node.js job dispatcher processing streaming ledger uploads via multipart streams',
          'Client-side virtual window renderer capable of scrolling 500k rows at 60 FPS',
          'Role-based granular permission guards and tamper-evident audit logs'
        ],
        results: [
          'Accelerated end-of-month financial reconciliation from 3.5 days to under 4 hours',
          'Audited more than $1.4B in cumulative transactional volume with zero data regressions'
        ]
      }
    },
    {
      id: 'vortex-ide',
      title: 'Vortex Cloud Sandbox',
      tagline: 'Collaborative in-browser code execution playground powered by WebAssembly',
      category: 'Developer Tools',
      description: 'An interactive multi-language code playground providing instant containerized execution, live pair-programming sessions, and AST-level linting in the browser.',
      featured: true,
      stars: 890,
      metrics: [
        { label: 'Cold Start', value: '< 180ms' },
        { label: 'GitHub Stars', value: '890★' },
        { label: 'Weekly Runs', value: '42,000' }
      ],
      technologies: ['React', 'TypeScript', 'WebAssembly', 'Node.js', 'WebSockets', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PhillipMacias/vortex-cloud-sandbox',
      liveUrl: 'https://vortexide.demo.dev',
      caseStudy: {
        overview: 'Modern developers needed a lightning-fast sandbox for testing code snippets and debugging algorithms without waiting for remote server boots.',
        challenge: 'Executing untrusted user code safely with sub-second launch times while supporting collaborative multi-cursor synchronization.',
        solution: 'Implemented client-side sandboxed runtime layers using WebAssembly micro-containers alongside an operational transformation synchronization engine for real-time collaboration.',
        architecture: [
          'Wasm sandbox runtime isolating memory execution from host browser context',
          'CRDT conflict-free synchronization layer over lightweight WebSocket channels',
          'Monaco-powered editor with custom syntax highlighting and language server integration'
        ],
        results: [
          'Achieved near-instantaneous 180ms sandbox boot time compared to 6s cloud containers',
          'Grew to 42,000 weekly executions and garnered 890+ open-source stars'
        ]
      }
    },
    {
      id: 'kubeflow-inspector',
      title: 'KubeFlow Inspector',
      tagline: 'Cloud infrastructure cost analyzer & pod latency diagnostic engine',
      category: 'Cloud & DevOps',
      description: 'An observability CLI and companion web dashboard for Kubernetes clusters that correlates CPU/Memory over-provisioning with real-time cloud provider billing data.',
      featured: false,
      stars: 240,
      metrics: [
        { label: 'Avg Cost Savings', value: '28%' },
        { label: 'Cluster Footprint', value: '< 15MB' },
        { label: 'Sync Interval', value: '15s' }
      ],
      technologies: ['Go', 'Kubernetes', 'GraphQL', 'React', 'Prometheus', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PhillipMacias/kubeflow-inspector',
      caseStudy: {
        overview: 'Engineering organizations routinely waste up to 35% of cloud spend on idle Kubernetes pods and oversized resource requests.',
        challenge: 'Extracting live metric streams from hundreds of pods across diverse namespaces without introducing significant agent CPU overhead on target clusters.',
        solution: 'Developed a lightweight daemon written in Go that queries the Kubelet API directly, computes allocation waste matrices, and exposes them through a high-contrast web dashboard.',
        architecture: [
          'Stateless Go daemonset consuming under 15MB memory per cluster node',
          'GraphQL aggregation layer harmonizing cloud pricing APIs with pod usage data',
          'Responsive React visualization console featuring treemaps and cost projection models'
        ],
        results: [
          'Uncovered an average 28% infrastructure cost reduction across 14 pilot deployments',
          'Helped multiple engineering teams eliminate silent pod OOMKills'
        ]
      }
    },
    {
      id: 'neuro-form',
      title: 'NeuroForm Engine',
      tagline: 'Declarative schema-driven dynamic form engine with zero re-render overhead',
      category: 'Developer Tools',
      description: 'A headless, strictly typed form management library for modern React architectures supporting complex conditional branching, JSON Schema validation, and undo/redo histories.',
      featured: false,
      stars: 510,
      metrics: [
        { label: 'Bundle Size', value: '3.4 kB' },
        { label: 'Re-render Reduction', value: '85%' },
        { label: 'TS Type Safety', value: 'Strict' }
      ],
      technologies: ['TypeScript', 'React 19', 'Zod', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/PhillipMacias/neuroform-engine',
      liveUrl: 'https://neuroform.demo.dev',
      caseStudy: {
        overview: 'Enterprise applications with 50+ input dynamic forms frequently suffer from sluggish input response times caused by full-tree React re-renders.',
        challenge: 'Maintaining isolated field-level subscription state while allowing deep cross-field validation rules and nested array structures.',
        solution: 'Constructed an un-opinionated pub/sub subscription state manager using React 19 hooks and proxy listeners, eliminating unnecessary ancestor re-renders.',
        architecture: [
          'Atomic subscription store decoupling input keystrokes from root form state',
          'Native Zod and JSON Schema parsing for automatic runtime validation',
          'Pluggable layout components adhering strictly to WAI-ARIA form accessibility guidelines'
        ],
        results: [
          'Maintained consistent 60fps typing response even in forms exceeding 120 input elements',
          'Extensively integrated into multiple production admin dashboards'
        ]
      }
    },
    {
      id: 'echolog-agent',
      title: 'EchoLog Agent',
      tagline: 'Ultra-lightweight zero-overhead structured telemetry collector',
      category: 'Cloud & DevOps',
      description: 'A production telemetry forwarder engineered to harvest container logs, normalize JSON payloads, and forward to vector sinks without CPU throttling.',
      featured: false,
      stars: 175,
      metrics: [
        { label: 'RAM Footprint', value: '6.8MB' },
        { label: 'Zero Drop', value: '100%' },
        { label: 'OpenTelemetry', value: 'v1.2+' }
      ],
      technologies: ['Go', 'OpenTelemetry', 'Docker', 'Linux', 'REST APIs'],
      githubUrl: 'https://github.com/PhillipMacias/echolog-agent',
      caseStudy: {
        overview: 'Heavy log collector agents can consume upwards of 300MB RAM per host and choke application CPU during high I/O spikes.',
        challenge: 'Engineering an embeddable binary that parses syslog, Docker socket outputs, and custom JSON streams while guaranteeing zero memory leaks under continuous operation.',
        solution: 'Architected a zero-allocation parsing pipeline utilizing Go memory arenas, circular ring buffers, and compressed HTTP batching.',
        architecture: [
          'Asynchronous log socket listener with zero-copy buffer pools',
          'Regex-free fast JSON parser extracting standard timestamps and severity levels',
          'Gzip compressed batch dispatcher communicating over TLS to OpenTelemetry collectors'
        ],
        results: [
          'Cut logging daemon memory footprint from 280MB down to 6.8MB per node',
          'Maintained steady memory usage over 90+ days of uninterrupted stress testing'
        ]
      }
    }
  ],
  skills: [
    // Frontend
    { name: 'TypeScript', category: 'Frontend', level: 'Expert', years: 8, highlight: true, description: 'Type-level programming, strict configs, generics, AST transformations' },
    { name: 'React 19 & Next.js', category: 'Frontend', level: 'Expert', years: 7, highlight: true, description: 'Server Components, concurrent rendering, hooks architecture, routing' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', years: 6, highlight: true, description: 'Utility-first styling, design system tokens, responsive layout math' },
    { name: 'State Architecture', category: 'Frontend', level: 'Advanced', years: 7, highlight: false, description: 'Zustand, Redux Toolkit, React Query/TanStack, atomic stores' },
    { name: 'Web Performance & Accessibility', category: 'Frontend', level: 'Advanced', years: 7, highlight: true, description: 'Core Web Vitals, WCAG AA compliance, virtualized rendering' },
    
    // Backend
    { name: 'Go (Golang)', category: 'Backend', level: 'Advanced', years: 5, highlight: true, description: 'Goroutines, channels, microservices, high-throughput network daemons' },
    { name: 'Node.js & Express', category: 'Backend', level: 'Expert', years: 8, highlight: true, description: 'Async event loop, RESTful APIs, streaming I/O, middleware architecture' },
    { name: 'Python', category: 'Backend', level: 'Advanced', years: 5, highlight: false, description: 'Data processing scripts, FastAPI services, automated test harnesses' },
    { name: 'GraphQL & REST', category: 'Backend', level: 'Advanced', years: 6, highlight: false, description: 'Schema design, DataLoader batching, rate limiting, OpenAPI specifications' },
    { name: 'WebSockets & SSE', category: 'Backend', level: 'Advanced', years: 6, highlight: true, description: 'Bi-directional messaging, heartbeat protocols, socket clustering' },

    // Cloud & DevOps
    { name: 'Docker & Containers', category: 'Cloud & DevOps', level: 'Expert', years: 7, highlight: true, description: 'Multi-stage builds, rootless execution, image optimization' },
    { name: 'Kubernetes', category: 'Cloud & DevOps', level: 'Advanced', years: 4, highlight: true, description: 'Deployments, services, ingress controllers, Helm charts' },
    { name: 'Google Cloud & AWS', category: 'Cloud & DevOps', level: 'Advanced', years: 6, highlight: true, description: 'Cloud Run, GKE, IAM security, S3/Cloud Storage, Cloudflare' },
    { name: 'CI/CD Pipelines', category: 'Cloud & DevOps', level: 'Advanced', years: 7, highlight: false, description: 'GitHub Actions, automated test suites, semantic versioning' },
    { name: 'Terraform & IaC', category: 'Cloud & DevOps', level: 'Proficient', years: 3, highlight: false, description: 'Infrastructure declarations, state management, modularization' },

    // Databases
    { name: 'PostgreSQL', category: 'Databases', level: 'Expert', years: 7, highlight: true, description: 'Query plan optimization, indexing strategies, partition pruning, migrations' },
    { name: 'Redis', category: 'Databases', level: 'Expert', years: 6, highlight: true, description: 'In-memory caching, Pub/Sub, sorted sets, sliding-window rate limiting' },
    { name: 'Kafka & Event Queues', category: 'Databases', level: 'Advanced', years: 4, highlight: true, description: 'Partitioning, consumer groups, offsets, idempotent producers' },
    { name: 'MongoDB / Document Stores', category: 'Databases', level: 'Advanced', years: 5, highlight: false, description: 'Aggregation pipelines, schema indexing, change streams' },

    // Architecture
    { name: 'Distributed Systems Design', category: 'Architecture', level: 'Advanced', years: 5, highlight: true, description: 'Eventual consistency, CAP tradeoffs, circuit breakers, idempotency' },
    { name: 'Microservices Architecture', category: 'Architecture', level: 'Advanced', years: 6, highlight: true, description: 'Domain-Driven Design, API gateways, boundary isolation' },
    { name: 'Observability & Telemetry', category: 'Architecture', level: 'Advanced', years: 5, highlight: true, description: 'OpenTelemetry, Prometheus, distributed tracing, structured logging' },
    { name: 'Technical Mentorship', category: 'Architecture', level: 'Expert', years: 5, highlight: false, description: 'Engineering RFCs, code quality standards, onboarding frameworks' }
  ],
  experiences: [
    {
      company: 'HyperScale Technologies',
      role: 'Staff / Senior Full-Stack Engineer',
      period: '2022 — Present',
      location: 'San Francisco, CA (Hybrid)',
      type: 'Full-time',
      summary: 'Architecting core ingestion platforms, web application suites, and developer infrastructure for real-time observability services processing over 1B events daily.',
      achievements: [
        'Designed and spearheaded the migration to an event-driven telemetry pipeline, reducing p99 API query response times by 42%.',
        'Built and open-sourced the frontend design system adopted across 5 product engineering pods, cutting new feature UI cycle times by 30%.',
        'Introduced end-to-end distributed tracing using OpenTelemetry, shrinking mean-time-to-detection (MTTD) for production incidents from 45 min to under 6 min.',
        'Mentored 6 mid-level engineers through promotion cycles and authored 12 technical RFCs guiding team architecture.'
      ],
      technologies: ['TypeScript', 'React 19', 'Go', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Docker']
    },
    {
      company: 'CloudPulse Systems',
      role: 'Lead Full-Stack Software Engineer',
      period: '2019 — 2022',
      location: 'San Francisco, CA',
      type: 'Full-time',
      summary: 'Directed full-stack development for multi-tenant financial audit and billing automation products serving mid-market and enterprise accounts.',
      achievements: [
        'Engineered high-concurrency ledger reconciliation engine processing over $100M in daily transactions with zero ledger drift.',
        'Redesigned the client dashboard from ground up using React and Tailwind, improving customer CSAT score from 74 to 92.',
        'Integrated automated CI/CD security scanning, decreasing dependency vulnerability resolution times by 75%.',
        'Spearheaded the migration of monolithic database queries into partition-pruned PostgreSQL clusters.'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Tailwind CSS']
    },
    {
      company: 'Nexa Labs',
      role: 'Software Engineer',
      period: '2017 — 2019',
      location: 'San Jose, CA',
      type: 'Full-time',
      summary: 'Built responsive web applications, interactive data dashboards, and robust RESTful API endpoints for B2B SaaS clients.',
      achievements: [
        'Developed interactive charting components with D3 and React for analytics suites viewed by 50,000+ monthly active users.',
        'Refactored legacy REST endpoints to TypeScript and Express with comprehensive unit and integration test coverage (92%).',
        'Collaborated directly with product designers to implement pixel-perfect, accessible UI components adhering strictly to WCAG AA.'
      ],
      technologies: ['JavaScript/TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'CSS3']
    }
  ],
  education: [
    {
      institution: 'Chaffey College',
      degree: 'A.A. Liberal Arts and Sciences',
      period: '2001 - 2004'
    }
  ]
};
