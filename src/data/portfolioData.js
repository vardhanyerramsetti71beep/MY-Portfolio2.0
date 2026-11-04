// src/data/portfolioData.js
// Canonical Master Registry for Vardhan Yerramsetti 2.0

export const PROFILE = {
  name: "Vardhan Yerramsetti",
  title: "Python Full Stack Developer & AWS Certified Cloud Practitioner",
  subtitle: "High-Throughput Microservices • Enterprise Cloud Architectures • Real-Time Computer Vision & ML",
  tagline: "I build Python backends, cloud deployments and ML features, and I measure the results. 8 projects live today.",
  location: "Andhra Pradesh, India",
  email: "vardhanyerramsetti71@gmail.com",
  phone: "+91 7386033417",
  whatsapp: "https://wa.me/917386033417?text=Hi%20Vardhan,%20I%20reviewed%20your%20Cinematic%20Portfolio%202.0%20and%20would%20love%20to%20discuss%20an%20opportunity!",
  github: "https://github.com/vardhanyerramsetti71beep",
  linkedin: "https://www.linkedin.com/in/vardhan-yerramsetti/",
  livePortfolio: "https://my-portfolio-vardhan-yerramsetti.vercel.app/",
  resumePdf: "/Vardhan_Yerramsetti_Resume.pdf",
  bio: "Results-driven Python Full Stack Developer and AWS Certified Cloud Practitioner with expertise in Data Science, Machine Learning, and cloud microservices. Builds backend APIs with Flask and FastAPI, implements ML models (BG/NBD, Gamma-Gamma, OpenCV), designs normalized MySQL schemas (-25% query latency), and builds frontends in React.js and Next.js. Backed by 8 production deployments across AWS and Vercel.",
  hook: "Zero-fluff engineering. Measurable throughput. Production-proven cloud microservices.",
  metrics: [
    { label: "Production Web Apps", value: "8", suffix: " Live", detail: "Live on Vercel & AWS, each with public source code" },
    { label: "Query Latency Reduction", value: "-25", suffix: "%", detail: "Compound B-Tree indexing on relational schemas" },
    { label: "Computer Vision Accuracy", value: ">90", suffix: "%", detail: "Real-time OpenCV multi-class emotion classification" },
    { label: "Data Integrity & Logistics", value: "99", suffix: "%", detail: "Supervised high-volume supply chain operations at Flipkart" }
  ]
};

export const RECRUITER_PILLARS = [
  {
    icon: "Rocket",
    title: "Immediate Day-1 Productivity",
    desc: "Shipped 8 live projects end-to-end, each with a public GitHub repository. Comfortable with Git workflows, modular codebases, and Vercel deployments."
  },
  {
    icon: "Cloud",
    title: "AWS Certified Cloud Foundation",
    desc: "AWS Certified Cloud Practitioner (2023). Hands-on with EC2, S3, RDS, Lambda, and IAM in deployed projects."
  },
  {
    icon: "Zap",
    title: "Measured Performance Gains",
    desc: "Cut MySQL query time from 18.4ms to 13.8ms (-25%) with compound B-Tree indexes. Builds REST APIs in FastAPI and Flask."
  },
  {
    icon: "Brain",
    title: "Data Science & Applied ML",
    desc: "Built working probabilistic customer lifetime value models (BG/NBD & Gamma-Gamma) with sub-15ms prediction latency, and a webcam facial-expression classifier with >90% accuracy."
  }
];

export const PROJECTS = [
  {
    id: "task-cloud-portal",
    index: "01",
    title: "Scalable Task & Data Management Cloud Portal",
    badge: "Enterprise Flagship",
    category: "Full Stack & Cloud",
    tags: ["Python", "Flask REST API", "React.js", "MySQL", "AWS EC2/S3", "Docker"],
    live: "https://task-cloud-portal.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/task-cloud-portal",
    metrics: [
      { label: "Query Latency", value: "-25%" },
      { label: "Query Time", value: "18.4→13.8ms" },
      { label: "Auth Token Security", value: "JWT Stateless" }
    ],
    pitch: "Engineered a high-availability multi-tenant cloud task and asset management portal with strict relational isolation.",
    solution: "Built a stateless Flask REST API backend integrated with React.js, structured normalized MySQL 3NF schemas with compound B-Tree indexes reducing query times from 18.4ms to 13.8ms, and containerized asset pipelines with AWS S3 & EC2.",
    architecture: "React SPA ➔ JWT Auth Guard ➔ Flask Microservice ➔ MySQL B-Tree Indexed Engine ➔ AWS S3 Object Store"
  },
  {
    id: "music-recommender",
    index: "02",
    title: "Music Emotion & Smart Recommender",
    badge: "AI & Computer Vision",
    category: "AI & Computer Vision",
    tags: ["Python", "OpenCV", "Flask REST API", "Scikit-learn", "Web Audio API"],
    live: "https://music-recommending.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/music-recommending",
    metrics: [
      { label: "Classification Accuracy", value: ">90%" },
      { label: "Input", value: "Live Webcam" },
      { label: "Model", value: "Scikit-learn" }
    ],
    pitch: "Recommends music based on your facial expression, read live from the webcam.",
    solution: "Engineered an end-to-end computer vision and microservice pipeline analyzing facial expressions via webcam stream. Utilized OpenCV landmark detection coupled with a Scikit-learn multi-class model (Happy, Sad, Neutral, Energetic), streaming mood vectors into a responsive Flask RESTful API that delivers targeted audio playback.",
    architecture: "Webcam Video Stream ➔ OpenCV Frame Extraction ➔ Facial Feature Matrix ➔ ML Emotion Classifier ➔ Flask REST API ➔ Reactive Track Dispatcher"
  },
  {
    id: "omnipulse-clv",
    index: "03",
    title: "OmniPulse Enterprise CLV & Retention Engine",
    badge: "Predictive Analytics",
    category: "AI & Computer Vision",
    tags: ["FastAPI", "Scikit-learn", "BG/NBD", "Gamma-Gamma", "Python"],
    live: "https://omni-pulse-enterprise-clv-churn-int-teal.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/OmniPulse-Enterprise-CLV-Churn-Intelligence-Engine",
    metrics: [
      { label: "Probabilistic Model", value: "BG/NBD" },
      { label: "Monetary Value", value: "Gamma-Gamma" },
      { label: "Prediction Latency", value: "<15ms" }
    ],
    pitch: "Statistical customer equity forecasting distinguishing churned buyers from active latent purchasers.",
    solution: "Developed an enterprise retention microservice utilizing Beta-Geometric/Negative Binomial Distribution (BG/NBD) for purchase frequency and Gamma-Gamma sub-models for monetary value. Computes live probability of being active P(Alive) and forecasts 12-month expected customer equity.",
    architecture: "Transaction Log Ingestion ➔ RFM Metric Aggregation ➔ BG/NBD Parameter Estimation ➔ FastAPI In-Memory Inference"
  },
  {
    id: "svt-tailors",
    index: "04",
    title: "S.V.T. Tailors Bespoke Atelier & Tracker",
    badge: "Full Stack & Microservices",
    category: "Full Stack & Cloud",
    tags: ["Python Serverless", "MySQL", "PyMySQL", "Tailwind CSS", "Vercel"],
    live: "https://svt-tailors.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/S.V.T.Tailors",
    metrics: [
      { label: "Workshop Stages", value: "5 States" },
      { label: "Stage Updates", value: "<35ms" },
      { label: "Order Tracking", value: "Public Portal" }
    ],
    pitch: "Replaced chaotic manual order logs with an automated 5-stage workshop fabrication tracker.",
    solution: "Built a production-grade digital atelier interface and tracking engine. Includes a dynamic garment customization configurator (fabrics, collar, cuffs, measurements) coupled with a serverless Python backend persisting orders into normalized MySQL schemas with a 5-stage live status pipeline: Order Logged ➔ Fabric Cut ➔ Master Stitch ➔ Steam Press ➔ Ready for Delivery.",
    architecture: "Client Atelier Configurator ➔ Python Serverless Endpoint ➔ PyMySQL Prepared Statements ➔ MySQL Relational Schema ➔ Real-Time Order Stage Tracker"
  },
  {
    id: "ms-pickles",
    index: "05",
    title: "MS Pickles Artisanal Andhra E-Commerce",
    badge: "E-Commerce & Frontend",
    category: "Full Stack & Cloud",
    tags: ["JavaScript ES6+", "Tailwind CSS", "LocalStorage", "Responsive Web"],
    live: "https://ms-pickles.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/MS-pickles",
    metrics: [
      { label: "Catalog Items", value: "15+ SKUs" },
      { label: "Cart", value: "LocalStorage" },
      { label: "First Paint", value: "<1s" }
    ],
    pitch: "Ultra-fast direct-to-consumer e-commerce storefront for authentic Andhra pickles with zero CMS bloat.",
    solution: "Designed and deployed a modern direct-to-consumer e-commerce storefront for authentic Andhra pickles and podis. Built using modular vanilla ES6+ architecture and utility-first Tailwind CSS, featuring instantaneous category filters, dynamic weight-based pricing, persistent shopping cart management, and seamless WhatsApp ordering.",
    architecture: "Modular Product Catalog ➔ Weight/Price State Matrix ➔ LocalStorage Synchronizer ➔ WhatsApp Checkout Dispatcher"
  },
  {
    id: "they-call-him-og",
    index: "06",
    title: "\"They Call Him OG\" Cinematic Showcase",
    badge: "Cinematic Media Experience",
    category: "Full Stack & Cloud",
    tags: ["Next.js 14", "React", "Tailwind CSS", "Web Audio API", "Vercel"],
    live: "https://they-call-him-og-lemon.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/They-call-him-og",
    metrics: [
      { label: "Video Loops", value: "5 Native MP4s" },
      { label: "Framework", value: "Next.js 14" },
      { label: "Showcase Tour", value: "55s Guided" }
    ],
    pitch: "High-fidelity interactive media showcase with synchronized HTML5 video loops and ambient sound.",
    solution: "Architected a high-fidelity cinematic fan web experience powered by Next.js 14 and React. Features synchronized HTML5 video loops, scroll-driven circular transitions, ambient Web Audio soundtracks, and a 55-second automated interactive showcase mode.",
    architecture: "Next.js App Router ➔ Intersection Observer Audio/Video Coordinator ➔ Scroll-Driven Transition Canvas ➔ Vercel Global Edge"
  },
  {
    id: "body-transformation",
    index: "07",
    title: "90-Day Transformation & 3D Manifolds",
    badge: "3D Analytics & Systems",
    category: "AI & Computer Vision",
    tags: ["Python", "Plotly 3D", "HTML5/CSS3", "JavaScript", "Analytics"],
    live: "https://90-days-body-transformation.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/90-Days-Body-Transformation",
    metrics: [
      { label: "Tracking Days", value: "90 Days" },
      { label: "Biometric Dimensions", value: "6 Axes" },
      { label: "3D Rendering", value: "Plotly WebGL" }
    ],
    pitch: "Multivariate biometric recomposition dashboard featuring Python-generated 3D topological manifolds.",
    solution: "Built a 90-day biometric transformation dashboard integrating Python-generated Plotly 3D topological manifolds. Users interactively explore morphological changes across chest, waist, biceps, body fat percentage, and caloric intake timelines.",
    architecture: "Time-Series Biometric Matrix ➔ Python Data Smoothing ➔ Plotly 3D WebGL Surface Mesh ➔ Interactive Browser Telemetry"
  },
  {
    id: "flask-google-forms",
    index: "08",
    title: "Google Forms Clone & MySQL ORM Engine",
    badge: "Relational ORM Architecture",
    category: "Full Stack & Cloud",
    tags: ["Python", "Flask", "Flask-SQLAlchemy", "MySQL", "Jinja2"],
    live: "https://flask-google-form.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/google-forms-",
    metrics: [
      { label: "Schema Compliant", value: "3NF Normal" },
      { label: "ORM", value: "SQLAlchemy" },
      { label: "Question Types", value: "Dynamic" }
    ],
    pitch: "Full-featured survey generation engine with dynamic relational schema binding in MySQL.",
    solution: "Engineered a full-featured survey creation and response aggregation engine in Python and Flask. Implemented a 3NF relational database schema in MySQL using Flask-SQLAlchemy with support for multiple-choice, text, checkbox inputs, and automated result charts.",
    architecture: "Survey Model ➔ Dynamic Form Generator ➔ Foreign Key Relational Persistence ➔ Analytical Response View"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Cloud & Infrastructure",
    accent: "#FF9900",
    skills: [
      { name: "AWS EC2", level: "Advanced", desc: "Instance provisioning, security groups, key pairs" },
      { name: "AWS S3", level: "Advanced", desc: "Bucket policies, asset lifecycle, static hosting" },
      { name: "AWS Lambda", level: "Proficient", desc: "Serverless execution, event handlers" },
      { name: "AWS IAM", level: "Advanced", desc: "Least-privilege policies, roles, audit trails" },
      { name: "Vercel Edge", level: "Advanced", desc: "Global edge CDN, automated git deployments" },
      { name: "Docker", level: "Intermediate", desc: "Containerization, environment parity" }
    ]
  },
  {
    name: "Backend Microservices & APIs",
    accent: "#00f0ff",
    skills: [
      { name: "Python 3.10+", level: "Expert", desc: "Core language, async, OOP, algorithms" },
      { name: "Flask", level: "Advanced", desc: "RESTful APIs, routing, microservices" },
      { name: "FastAPI", level: "Advanced", desc: "Pydantic validation, OpenAPI documentation" },
      { name: "Django", level: "Proficient", desc: "ORM data modeling, enterprise backend" },
      { name: "RESTful APIs", level: "Expert", desc: "Stateless architecture, JWT authentication" },
      { name: "Postman", level: "Advanced", desc: "Endpoint testing, automated collections" }
    ]
  },
  {
    name: "Databases & Performance Tuning",
    accent: "#4479A1",
    skills: [
      { name: "MySQL", level: "Advanced", desc: "3NF relational schemas, foreign key integrity" },
      { name: "PyMySQL", level: "Advanced", desc: "Prepared statements, SQL injection defense" },
      { name: "Flask-SQLAlchemy", level: "Advanced", desc: "ORM relationships, migration management" },
      { name: "Compound Indexing", level: "Advanced", desc: "B-Tree index optimization, -25% latency cut" },
      { name: "Database Normalization", level: "Expert", desc: "1NF, 2NF, 3NF schema architecture" }
    ]
  },
  {
    name: "Data Science, Computer Vision & ML",
    accent: "#a855f7",
    skills: [
      { name: "OpenCV", level: "Advanced", desc: "Facial landmarking, live frame classification" },
      { name: "Scikit-learn", level: "Advanced", desc: "Supervised classifiers, feature extraction" },
      { name: "NumPy & Pandas", level: "Advanced", desc: "Vectorized computing, time-series analysis" },
      { name: "BG/NBD & Gamma-Gamma", level: "Proficient", desc: "Customer retention & CLV probability modeling" },
      { name: "Plotly 3D WebGL", level: "Advanced", desc: "Interactive topological surface manifolds" }
    ]
  },
  {
    name: "Modern Frontend & Reactive UI",
    accent: "#38bdf8",
    skills: [
      { name: "React.js 19", level: "Advanced", desc: "Hooks, component architecture, state sync" },
      { name: "Next.js 14", level: "Proficient", desc: "App Router, SSR, performance optimization" },
      { name: "Tailwind CSS", level: "Expert", desc: "Cinematic design systems, responsive UX" },
      { name: "JavaScript ES6+", level: "Expert", desc: "Async/await, DOM events, LocalStorage" },
      { name: "Web Audio API", level: "Proficient", desc: "Browser synthesized audio and soundscapes" }
    ]
  }
];

export const EXPERIENCE = [
  {
    id: "instakart",
    role: "Operations and Logistics Associate",
    company: "Instakart Services Private Limited",
    division: "Flipkart Logistics & Supply Chain",
    period: "Jan 2026 – Apr 2026",
    location: "Andhra Pradesh, India",
    type: "Industry Operations & Data Integrity",
    highlights: [
      "Supervised real-time warehouse operations, order dispatch processing, and inventory databases, maintaining 99% data integrity.",
      "Coordinated cross-functional workflows between ground teams and dispatch systems, eliminating bottlenecks and driving a 15% increase in throughput.",
      "Conducted root-cause telemetry audits across fulfillment logistics pipelines to minimize order variance and transit latency."
    ],
    stats: [
      { label: "Data Integrity", value: "99%" },
      { label: "Throughput Boost", value: "+15%" },
      { label: "Scope", value: "Dispatch & Inventory" }
    ]
  },
  {
    id: "teaching-assistant",
    role: "Teaching Assistant — Computer Science",
    company: "Sri Srinivasa Gravity Junior College",
    division: "Department of Computer Science",
    period: "Jun 2022 – Aug 2022",
    location: "Andhra Pradesh, India",
    type: "Academic Mentorship & Technical Training",
    highlights: [
      "Mentored 40+ engineering aspirants in fundamental computer science principles, Object-Oriented Programming (OOP), and algorithmic problem-solving.",
      "Conducted weekly practical debugging labs in Python and C++ to build foundational algorithmic fluency."
    ],
    stats: [
      { label: "Students Mentored", value: "40+" },
      { label: "Core Focus", value: "DSA & OOP" },
      { label: "Labs", value: "Weekly" }
    ]
  },
  {
    id: "marketing-coordinator",
    role: "Direct Marketing Coordinator",
    company: "Future Generali Total Health Insurance",
    division: "Strategic Acquisition Team",
    period: "Aug 2022 – Jan 2023",
    location: "Andhra Pradesh, India",
    type: "Data-Driven Marketing Analytics",
    highlights: [
      "Executed targeted digital campaigns across multi-touch customer channels, engaging 5,000+ prospective leads.",
      "Analyzed conversion data and customer demographic funnels, driving a 10% uplift in qualified lead acquisition."
    ],
    stats: [
      { label: "Prospects Reached", value: "5,000+" },
      { label: "Conversion Lift", value: "+10%" },
      { label: "Funnel Analysis", value: "Multi-channel" }
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering (CSE)",
  institution: "Jawaharlal Nehru Technological University (JNTU) Kakinada",
  period: "2018 – 2026",
  cgpa: "6.5 / 10.0",
  coursework: [
    "Data Structures",
    "Database Management",
    "Operating Systems",
    "Computer Networks"
  ]
};

export const CERTIFICATIONS = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    badge: "Cloud Infrastructure",
    status: "Verified Credential",
    icon: "Cloud",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM", "VPC Networking", "Cloud Security", "Cost Optimization"],
    desc: "Demonstrated foundational knowledge of cloud concepts, security, technology, billing, and core AWS compute/storage/database services."
  },
  {
    id: "aws-foundations",
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    badge: "Cloud Architecture",
    status: "Verified Graduate",
    icon: "ShieldCheck",
    skills: ["High Availability", "Elastic Load Balancing", "CloudWatch Monitoring", "Architectural Best Practices"],
    desc: "AWS Academy course covering core cloud concepts, AWS services, security, architecture, and pricing."
  },
  {
    id: "android-enterprise",
    title: "Android Enterprise Associate",
    issuer: "Google",
    year: "2022",
    badge: "Enterprise Mobility",
    status: "Certified Associate",
    icon: "Smartphone",
    skills: ["Enterprise Fleet Management", "Mobile Security", "Application Distribution"],
    desc: "Google certification covering Android Enterprise deployment, device management, and security basics."
  },
  {
    id: "cisco-networking",
    title: "Cisco Networking Essentials",
    issuer: "Cisco Networking Academy",
    year: "2022",
    badge: "Computer Networks",
    status: "Completed",
    icon: "Network",
    skills: ["TCP/IP", "Subnetting", "Routing & Switching", "Network Security Protocols", "DNS / DHCP"],
    desc: "Cisco Networking Academy course covering network fundamentals, IP addressing, and the OSI model."
  }
];
