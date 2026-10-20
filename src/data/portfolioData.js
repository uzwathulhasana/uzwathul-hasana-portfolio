// Centralized Data Layer for Uzwathul Hasana's Portfolio
import learningHubImg from '../assets/learning-hub.jpg';
import apparelSystemImg from '../assets/apparel-system.jpg';
import inventorySystemImg from '../assets/inventory-system.jpg';

export const personalInfo = {
  name: "Uzwathul Hasana",
  firstName: "Uzwathul",
  lastName: "Hasana",
  role: "Web Developer",
  headlineRole: "Web Developer",
  shortIntro: "I create simple, user-friendly and meaningful digital experiences. Passionate about designing, learning new technologies and building a better tomorrow.",
  aboutBio: "I'm Uzwathul Hasana, a Web Developer with a strong interest in creating beautiful and functional digital experiences. I enjoy turning ideas into user-friendly designs and simple solutions. I'm always eager to learn, explore new tools and grow in the tech world.",
  
  // Quick Info
  location: "Coimbatore, India",
  degree: "MCA (Completed)",
  availability: "Available for opportunities",
  signature: "Uzwathul Hasana ♡",

  // Contact Info
  phone: "+91 7200825518",
  email: "uzwathuhasana@gmail.com",
  linkedin: "https://linkedin.com/in/uzwathulhasana61",
  github: "https://github.com/uzwathulhasana",
  resumeUrl: "/k.Uzwathul_Hasana_Resume.pdf",
};

export const myGoal = {
  title: "My goal",
  description: "To build impactful digital products and grow into a skilled developer.",
  pillars: [
    { title: "Design", icon: "PenTool" },
    { title: "Problem Solving", icon: "Lightbulb" },
    { title: "Teamwork", icon: "Users" },
    { title: "Continuous Learning", icon: "RotateCw" }
  ],
  stickyNote: "Better Design,\nBetter Tomorrow.",
  noteSubtitle: "Small steps create big results ♡",
  heroNote: "Turning\nideas into\nbeautiful\nexperiences\n♡",
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    iconName: "Layout",
    countText: "5 Core Tools",
    skills: [
      { id: "html", name: "HTML", tag: "Markup" },
      { id: "css", name: "CSS", tag: "Styling" },
      { id: "javascript", name: "JavaScript", tag: "Interactivity" },
      { id: "react", name: "React.js (React 18)", tag: "UI Library" },
      { id: "tailwind", name: "Tailwind CSS", tag: "Utility CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    iconName: "Server",
    countText: "3 Core Tools",
    skills: [
      { id: "nodejs", name: "Node.js", tag: "Runtime" },
      { id: "python", name: "Python", tag: "Backend Scripting" },
      { id: "flask", name: "Flask", tag: "Microframework" },
    ],
  },
  {
    id: "database",
    title: "Database",
    iconName: "Database",
    countText: "2 Core Tools",
    skills: [
      { id: "mysql", name: "MySQL", tag: "Relational RDBMS" },
      { id: "firebase", name: "Firebase", tag: "Cloud Firestore & BaaS" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    iconName: "Terminal",
    countText: "4 Core Tools",
    skills: [
      { id: "python", name: "Python", tag: "OOP & Automation" },
      { id: "javascript", name: "JavaScript", tag: "Full-Stack Scripting" },
      { id: "java", name: "Java", tag: "Core OOP" },
      { id: "sql", name: "SQL", tag: "Database Queries" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Other Skills",
    iconName: "Wrench",
    countText: "8 Skills",
    isWide: true,
    subgroups: [
      {
        title: "Development Tools",
        skills: [
          { id: "git", name: "Git", tag: "Version Control" },
          { id: "github", name: "GitHub", tag: "Code Collaboration" },
          { id: "vscode", name: "VS Code", tag: "Code Editor" },
          { id: "antigravity", name: "Antigravity", tag: "AI Coding Assistant" },
        ],
      },
      {
        title: "Design & Digital Skills",
        skills: [
          { id: "uiux", name: "UI/UX Design", tag: "Wireframing & Prototyping" },
          { id: "responsive", name: "Responsive Web Design", tag: "Mobile-First Layouts" },
          { id: "seo", name: "Digital Marketing & SEO", tag: "Search Optimization" },
          { id: "aitools", name: "AI Tools", tag: "Productivity & Generative AI" },
        ],
      },
    ],
  },
];

export const additionalTechnicalKnowledge = [
  { id: "razorpay", name: "Razorpay Payment Gateway", role: "Payments Integration" },
  { id: "google-oauth", name: "Google OAuth", role: "Secure Authentication" },
  { id: "ms-word", name: "Microsoft Word", role: "Documentation" },
  { id: "ms-excel", name: "Microsoft Excel", role: "Data Analysis" },
  { id: "ms-powerpoint", name: "Microsoft PowerPoint", role: "Presentations" },
];

export const skillsFilterTabs = [
  { id: "all", label: "ALL" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "database", label: "DATABASE" },
  { id: "programming", label: "PROGRAMMING" },
  { id: "tools", label: "TOOLS" },
  { id: "other", label: "OTHER SKILLS" },
  { id: "additional", label: "ADDITIONAL TECHNICAL KNOWLEDGE" },
];

export const skillsGridList = [
  // Row 1
  {
    id: "html",
    name: "HTML",
    categories: ["all", "frontend"],
  },
  {
    id: "css",
    name: "CSS",
    categories: ["all", "frontend"],
  },
  {
    id: "javascript",
    name: "JAVASCRIPT",
    categories: ["all", "frontend", "programming"],
  },
  {
    id: "react",
    name: "REACT.JS",
    categories: ["all", "frontend"],
  },
  {
    id: "tailwind",
    name: "TAILWIND CSS",
    categories: ["all", "frontend"],
  },

  // Row 2
  {
    id: "nodejs",
    name: "NODE.JS",
    categories: ["all", "backend"],
  },
  {
    id: "python",
    name: "PYTHON",
    categories: ["all", "backend", "programming"],
  },
  {
    id: "flask",
    name: "FLASK",
    categories: ["all", "backend"],
  },
  {
    id: "php",
    name: "PHP",
    categories: ["all", "backend", "programming"],
  },
  {
    id: "mysql",
    name: "MYSQL",
    categories: ["all", "database"],
  },

  // Row 3
  {
    id: "firebase",
    name: "FIREBASE",
    categories: ["all", "database", "backend"],
  },
  {
    id: "supabase",
    name: "SUPABASE",
    categories: ["all", "database", "backend"],
  },
  {
    id: "java",
    name: "JAVA",
    categories: ["all", "programming"],
  },
  {
    id: "sql",
    name: "SQL",
    categories: ["all", "database", "programming"],
  },
  {
    id: "git",
    name: "GIT",
    categories: ["all", "tools"],
  },

  // Row 4
  {
    id: "github",
    name: "GITHUB",
    categories: ["all", "tools"],
  },
  {
    id: "vscode",
    name: "VS CODE",
    categories: ["all", "tools"],
  },
  {
    id: "vite",
    name: "VITE",
    categories: ["all", "tools", "frontend"],
  },
  {
    id: "uiux",
    name: "UI/UX",
    categories: ["all", "other"],
  },
  {
    id: "responsive",
    name: "RESPONSIVE WEB DESIGN",
    lines: ["RESPONSIVE", "WEB DESIGN"],
    categories: ["all", "frontend", "other"],
  },

  // Row 5
  {
    id: "digitalmarketing",
    name: "DIGITAL MARKETING",
    lines: ["DIGITAL", "MARKETING"],
    categories: ["all", "other"],
  },
  {
    id: "seo",
    name: "SEO",
    categories: ["all", "other"],
  },
  {
    id: "aitools",
    name: "AI TOOLS",
    categories: ["all", "tools", "other"],
  },

  // Row 6 / Additional Technical Knowledge
  {
    id: "razorpay",
    name: "RAZORPAY",
    lines: ["RAZORPAY", "PAYMENTS"],
    categories: ["all", "backend", "additional"],
  },
  {
    id: "google-oauth",
    name: "GOOGLE OAUTH",
    lines: ["GOOGLE", "OAUTH 2.0"],
    categories: ["all", "backend", "additional"],
  },
  {
    id: "ms-word",
    name: "MS WORD",
    lines: ["MICROSOFT", "WORD"],
    categories: ["all", "additional"],
  },
  {
    id: "ms-excel",
    name: "MS EXCEL",
    lines: ["MICROSOFT", "EXCEL"],
    categories: ["all", "additional"],
  },
  {
    id: "ms-powerpoint",
    name: "MS POWERPOINT",
    lines: ["MICROSOFT", "POWERPOINT"],
    categories: ["all", "additional"],
  },
];

export const skillsData = [
  { id: "html", name: "HTML", category: "Frontend" },
  { id: "css", name: "CSS", category: "Frontend" },
  { id: "javascript", name: "JavaScript", category: "Frontend & Programming" },
  { id: "react", name: "React.js (React 18)", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
  { id: "nodejs", name: "Node.js", category: "Backend" },
  { id: "python", name: "Python", category: "Backend & Programming" },
  { id: "flask", name: "Flask", category: "Backend" },
  { id: "mysql", name: "MySQL", category: "Database" },
  { id: "firebase", name: "Firebase", category: "Database" },
  { id: "java", name: "Java", category: "Programming" },
  { id: "sql", name: "SQL", category: "Programming" },
  { id: "git", name: "Git", category: "Tools" },
  { id: "github", name: "GitHub", category: "Tools" },
  { id: "vscode", name: "VS Code", category: "Tools" },
  { id: "antigravity", name: "Antigravity", category: "Tools" },
];

// Actual Existing Projects with High-Res Screenshots & Verified Details
export const projectsData = [
  {
    id: "qmex-learning-hub",
    title: "QMEX Learning Hub",
    tags: ["React 18", "UI/UX Design", "Firebase", "Supabase", "Tailwind CSS"],
    shortDescription: "React-based e-learning platform built for real clients with course modules, certifications, and URL-based routing.",
    description: "Designed a complete EdTech platform with courses, workshops, and certifications. Refactored navigation architecture from state machines to URL route parameters with a centralized, reusable SiteNav component.",
    image: learningHubImg,
    imageAlt: "QMEX Learning Hub Platform Dashboard",
    liveUrl: "https://learninghub.qmex.org",
    githubUrl: "https://github.com/uzwathulhasana",
    role: "Frontend / Full-Stack Developer",
    caseStudy: {
      overview: "Full-scale e-learning platform providing interactive courses, workshops, and verified certifications for students and professionals.",
      problem: "The legacy platform used state-only navigation, which broke browser back/forward buttons, prevented shareable course links, and caused session inconsistencies.",
      solution: "Engineered URL-based routing with deep linking, built a unified SiteNav navigation bar handling auth state, and created a responsive course catalog.",
      features: [
        "URL-based deep course link sharing",
        "Unified SiteNav navigation bar",
        "Authentication state integration",
        "Interactive course catalog",
        "Responsive student dashboard"
      ],
      technology: ["React 18", "JavaScript", "Tailwind CSS", "Firebase", "Supabase", "HTML5"],
      myContribution: "Designed UI/UX layouts, refactored routing architecture, built reusable components, and ensured seamless mobile responsiveness.",
      challenges: "Preserving user authentication states smoothly across dynamic route transitions without unnecessary re-renders.",
      result: "Enabled bookmarkable deep links, smooth browser history navigation, and enhanced user engagement across courses."
    }
  },
  {
    id: "apparel-design-system",
    title: "Apparel Design & Order Management System",
    tags: ["React", "Python", "Flask", "MySQL", "UI/UX Design"],
    shortDescription: "Full-stack web application designed for tailoring boutiques and custom garment designers to manage measurements, orders, and design sketches.",
    description: "A centralized web portal that digitizes the custom tailoring lifecycle—linking client profiles to measurement records, design sketch uploads, automated billing, and live stage tracking.",
    image: apparelSystemImg,
    imageAlt: "Apparel Design & Order Management Dashboard",
    liveUrl: null,
    githubUrl: "https://github.com/uzwathulhasana",
    role: "Full Stack Developer (Sole Lead)",
    caseStudy: {
      overview: "Comprehensive web platform for tailoring shops and custom apparel designers to digitize measurements, orders, and tracking.",
      problem: "Traditional tailoring relies on manual paper logs for customer measurements, leading to lost records, order mismatches, and delayed production updates.",
      solution: "Engineered a normalized MySQL database schema with a clean React frontend and Flask API to track orders across Draft, Tailoring, Ready, and Delivered stages.",
      features: [
        "Customer profile & measurement history",
        "Custom apparel sketch uploads",
        "Automated billing receipt generation",
        "Order stage management lifecycle",
        "Admin analytics dashboard"
      ],
      technology: ["React", "Python", "Flask", "MySQL", "JavaScript", "CSS3"],
      myContribution: "Sole developer responsible for frontend UI layout, relational database normalization (MySQL), Flask API routes, and admin dashboard workflows.",
      challenges: "Structuring multi-garment measurement fields cleanly while keeping client profile lookup instant.",
      result: "Completely replaced physical paper logs with a reliable digital workflow from client measurement to final delivery."
    }
  },
  {
    id: "inventory-reorder-alert",
    title: "Inventory Reorder Alert System",
    tags: ["Python", "Automation", "Data Processing", "MySQL"],
    shortDescription: "Automated inventory management system that monitors stock levels in real time and triggers restock alerts at safety thresholds.",
    description: "Engineered automated data processing scripts using Python that monitor stock quantities, evaluate safety thresholds, and generate structured restock reports to prevent stockouts.",
    image: inventorySystemImg,
    imageAlt: "Inventory Reorder Alert System Console & Report Generator",
    liveUrl: null,
    githubUrl: "https://github.com/uzwathulhasana",
    role: "Python Developer (Sole Lead)",
    caseStudy: {
      overview: "Python automation software built to prevent warehouse stockouts by continuously calculating stock reserves against dynamic threshold levels.",
      problem: "Small businesses perform manual periodic audits, resulting in unspotted inventory dips and costly supply chain delays.",
      solution: "Created an automated stock monitoring script in Python that evaluates inventory quantities against dynamic minimum safety thresholds and outputs actionable alerts.",
      features: [
        "Real-time stock level monitoring",
        "Automated threshold evaluation",
        "Reorder alert notification generation",
        "Restock summary report export (CSV/Text)",
        "Supplier mapping & catalog"
      ],
      technology: ["Python", "Data Processing", "CSV", "Automation", "MySQL"],
      myContribution: "Developed core Python application logic, data ingestion algorithms, and automated report generation scripts.",
      challenges: "Handling varied CSV data formats from multiple suppliers and ensuring accurate threshold alerts.",
      result: "Automated daily inventory audits and eliminated stockout surprises."
    }
  }
];

export const experienceData = [
  {
    id: "qmex",
    company: "QMEX Learning Hub",
    role: "Software Developer Intern",
    period: "2026",
    bullets: [
      "Designed and developed UI/UX for the learning platform.",
      "Worked on frontend development and integrations.",
      "Collaborated with the team on product improvements."
    ],
  },
  {
    id: "freelance",
    company: "Freelance Projects",
    role: "Web Developer",
    period: "2026",
    bullets: [
      "Created website designs for small businesses.",
      "Worked on social media creatives and branding.",
      "Focused on user-friendly and responsive design."
    ],
  },
  {
    id: "college",
    company: "College Projects",
    role: "Web Developer",
    period: "2026",
    bullets: [
      "Built academic projects using HTML, CSS, JavaScript, React.",
      "Used MySQL for relational database management and queries.",
      "Focused on clean code and user experience."
    ],
  },
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Bishop Appasamy College of Arts and Sciences",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 – 2026",
    status: "Completed",
    description: "Focusing on advanced software engineering, cloud computing, database management systems, algorithms, and full-stack web development."
  },
  {
    degree: "Bachelor of Commerce with Computer Applications - B.Com(CA)",
    institution: "Bishop Appasamy College of Arts and Sciences",
    location: "Coimbatore, Tamil Nadu",
    period: "2021 – 2024",
    status: "Graduated",
    description: "Built strong foundations in business logic, financial accounting systems, database administration, and web technologies."
  }
];

export const certificationsData = [
  {
    id: "qmex-internship-cert",
    title: "Software Development Internship Certificate",
    issuer: "QMEX Solutions",
    year: "2026",
    badge: "Verified Credential",
    description: "Successfully completed a 3-month hands-on Software Development Internship in 2026 focusing on React.js, Python, full-stack application engineering, and client software projects."
  },
  {
    id: "scaler-rag-masterclass",
    title: "Designing Scalable RAG Pipelines Masterclass",
    issuer: "Scaler Masterclass",
    year: "2026",
    badge: "Certificate of Participation",
    description: "Participated and upskilled in building robust retrieval-augmented generation architectures and scalable AI systems."
  }
];

export const quoteCard = {
  quote: "Always learning,\nalways growing ♡",
  subtitle: "Committed to continuous curiosity and craftsmanship.",
};
