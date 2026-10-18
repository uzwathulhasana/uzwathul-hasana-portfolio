import learningHubImg from '../assets/learning-hub.jpg';
import apparelSystemImg from '../assets/apparel-system.jpg';
import inventorySystemImg from '../assets/inventory-system.jpg';

export const personalInfo = {
  name: "Uzwathul Hasana",
  title: "MCA Graduate | Web Developer | Full-Stack Developer",
  positioning: "MCA Graduate | Web Developer | Full-Stack Developer | AI & Technology Enthusiast",
  location: "Coimbatore, Tamil Nadu",
  phone: "7200825518",
  email: "uzwathuhasna@gmail.com",
  linkedin: "https://linkedin.com/in/uzwathulhasana61",
  github: "https://github.com/uzwathulhasana",
  linkedinDisplay: "linkedin.com/in/uzwathulhasana61",
  githubDisplay: "github.com/uzwathulhasana",
  
  headline: "MCA Graduate & Web Developer Building Practical Digital Experiences",
  subheadline: "I build responsive web applications and real-world projects using modern web technologies, with a focus on clean UI, usability, and problem solving.",
  objective: "I build responsive, user-focused web applications that turn ideas into practical digital experiences.",
  aboutBio: "I'm Uzwathul Hasana, an MCA graduate with a strong interest in web development and modern technology. I enjoy building practical applications that solve real problems and continuously improving my technical skills through projects and hands-on learning.",
  philosophy: "I build software that bridges human needs with clean, functional code. Whether refactoring routing architectures for seamless navigation or structuring relational databases for custom ordering systems, I focus on performance, clarity, and intuitive user experiences.",
  
  availabilityBadge: "Open to Work • Web Developer / Full-Stack Developer Roles",
  languages: ["Tamil", "English"],
  hobbies: ["Chess", "Learning New Technology", "AI Tools Exploration"]
};

export const aboutStats = [
  { label: "Degree Focus", value: "MCA Graduate" },
  { label: "Primary Discipline", value: "Web Development" },
  { label: "Practical Experience", value: "Real-World Projects" },
  { label: "Growth Mindset", value: "Continuous Learner" }
];

export const skillsCategories = [
  {
    category: "Frontend",
    description: "Responsive, accessible, and user-focused web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    description: "Server logic, RESTful APIs, and application frameworks.",
    skills: ["Node.js", "Python", "Flask", "PHP"]
  },
  {
    category: "Database",
    description: "Relational database design and cloud backend services.",
    skills: ["MySQL", "Firebase", "Supabase"]
  },
  {
    category: "Programming",
    description: "Core languages for application logic and database queries.",
    skills: ["Python", "JavaScript", "Java", "SQL"]
  },
  {
    category: "Tools",
    description: "Version control, code editors, and modern build tools.",
    skills: ["Git", "GitHub", "VS Code", "Vite"]
  },
  {
    category: "Other Skills",
    description: "UI design principles, optimization, and digital strategy.",
    skills: ["UI/UX", "Responsive Web Design", "Digital Marketing", "SEO", "AI Tools"]
  }
];

export const experienceData = [
  {
    id: "qmex-internship",
    role: "Software Intern",
    company: "QMEX Solutions",
    companyCategory: "Digital Marketing & Software Company",
    period: "2026",
    location: "Coimbatore, Tamil Nadu",
    type: "Internship / Client Projects",
    summary: "Hands-on experience building React and Python-based web applications for real clients while mastering modern developer workflows.",
    highlights: [
      "Served as a frontend and full-stack developer on client and internal web projects built with React and Python.",
      "Architected, built, and maintained the QMEX Learning Hub (learninghub.qmex.org), an e-learning platform.",
      "Acquired working knowledge of digital marketing strategies, web analytics, and lead conversion optimizations."
    ],
    techStack: ["React 18", "Python", "JavaScript", "Tailwind CSS", "Firebase", "Supabase"]
  }
];

export const projectsData = [
  {
    id: "apparel-design-system",
    title: "Apparel Design & Order Management System",
    shortDescription: "A web-based platform designed for tailoring shops and designers to manage apparel customization, customer measurements, designs, orders, billing, payments, and order tracking.",
    problem: "Tailoring businesses and custom clothing customers lacked a structured digital system to submit custom measurements, upload outfit sketches, and monitor live tailoring status.",
    role: "Full Stack Developer (Sole Lead)",
    stack: ["HTML", "CSS", "JavaScript", "React", "Python", "Flask", "MySQL"],
    features: [
      "Customer management & client profile history",
      "Apparel customization & sketch uploads",
      "Custom measurement record management",
      "Order stage management (Draft, Tailoring, Ready, Delivered)",
      "Automated billing receipt generation",
      "Integrated payment workflow",
      "Real-time order tracking portal",
      "Comprehensive Admin dashboard"
    ],
    technicalHighlight: "Designed frontend pages, structured normalized MySQL database schema linking clients, measurement records, and order stages, and built the admin dashboard for tailor management.",
    githubUrl: "https://github.com/uzwathulhasana",
    image: apparelSystemImg,
    imageAlt: "Apparel Design & Order Management Dashboard",
    featured: true,
    caseStudy: {
      overview: "Full-stack web application designed for tailoring shops to streamline custom garment ordering, client measurements, and status tracking.",
      problem: "Traditional tailoring shops rely on paper logs for customer measurements and order updates, causing lost records, communication delays, and order errors.",
      solution: "Built a centralized web portal linking customer profiles to custom measurement sheets, digital design uploads, automated billing, and live stage tracking.",
      features: ["Customer Management", "Apparel Customization", "Measurement Records", "Order Management", "Billing", "Payment Workflow", "Order Tracking", "Admin Dashboard"],
      technology: ["HTML", "CSS", "JavaScript", "React", "Python", "Flask", "MySQL"],
      myContribution: "Sole developer responsible for frontend UI layout, relational database normalization (MySQL), Flask API routes, and admin dashboard workflows.",
      challenges: "Structuring multi-garment measurement fields cleanly while keeping client profile lookup fast.",
      result: "Digitized complete tailoring ordering lifecycle from measurement input to final order delivery."
    }
  },
  {
    id: "inventory-reorder-alert",
    title: "Inventory Reorder Alert System",
    shortDescription: "A Python-based inventory management solution that monitors stock levels and generates reorder alerts and restock reports when inventory reaches defined thresholds.",
    problem: "Small businesses manually check stock levels, leading to stockouts of high-demand items and delayed replenishment.",
    role: "Python Developer (Sole Lead)",
    stack: ["Python", "CSV", "Automation", "Data Processing"],
    features: [
      "Real-time stock level monitoring",
      "Automated threshold evaluation",
      "Reorder alert notification generation",
      "Restock summary report export (CSV/Text)",
      "Item category & supplier data mapping"
    ],
    technicalHighlight: "Engineered automated data processing scripts using Python to parse inventory data, compute minimum safety stock thresholds, and produce structured restock reports.",
    githubUrl: "https://github.com/uzwathulhasana",
    image: inventorySystemImg,
    imageAlt: "Inventory Reorder Alert System Console & Report Generator",
    featured: true,
    caseStudy: {
      overview: "Python automation tool created to prevent inventory shortages by evaluating stock quantities against safety thresholds.",
      problem: "Manual stock audits miss low-inventory thresholds, resulting in unfulfilled orders and stockout downtime.",
      solution: "Created an automated stock monitoring script in Python that evaluates stock items against dynamic minimum thresholds and outputs actionable reorder alerts.",
      features: ["Stock Level Monitoring", "Automated Threshold Evaluation", "Reorder Alerts", "CSV Data Import/Export", "Restock Report Generation"],
      technology: ["Python", "CSV", "Automation", "Data Processing"],
      myContribution: "Built complete Python application logic, file parsing algorithms, and alert generation workflows.",
      challenges: "Handling messy CSV data formatting and ensuring threshold calculation accuracy for varied item categories.",
      result: "Eliminated manual inventory checks and enabled automated daily restock report generation."
    }
  },
  {
    id: "qmex-learning-hub",
    title: "QMEX Learning Hub",
    shortDescription: "React-based e-learning platform built for real clients. Refactored navigation state machine into URL route parameters and built reusable SiteNav component.",
    problem: "The legacy platform used state-only navigation, breaking browser back/forward buttons, rendering deep course links impossible to share, and creating duplicate navigation logic.",
    role: "Frontend / Full-Stack Developer",
    stack: ["React 18", "JavaScript", "Firebase", "Supabase", "Tailwind CSS", "HTML5"],
    features: [
      "URL-based course route parameters",
      "Reusable SiteNav navigation component",
      "Global authentication state integration",
      "Shareable deep links for course modules",
      "Responsive course catalog layout"
    ],
    technicalHighlight: "Refactored navigation architecture from state-only state machines to URL-based route parameters. Extracted a unified, reusable SiteNav component that handles auth state across all learning views.",
    liveUrl: "https://learninghub.qmex.org",
    githubUrl: "https://github.com/uzwathulhasana",
    image: learningHubImg,
    imageAlt: "QMEX Learning Hub Platform Dashboard",
    featured: true,
    caseStudy: {
      overview: "E-learning platform providing course content and interactive modules for students and professionals.",
      problem: "State-only navigation broke browser history navigation and prevented users from bookmarking or sharing specific course pages.",
      solution: "Refactored client routing to URL route parameters and designed a centralized SiteNav component for consistent navigation across views.",
      features: ["URL Route Navigation", "Reusable Navigation Component", "Firebase/Supabase Integration", "Responsive Dashboard", "Course Catalog"],
      technology: ["React 18", "JavaScript", "Firebase", "Supabase", "Tailwind CSS"],
      myContribution: "Refactored navigation architecture, built SiteNav component, and integrated responsive course cards.",
      challenges: "Maintaining active session state cleanly across route changes without triggering unnecessary re-renders.",
      result: "Enabled shareable deep links, seamless browser back/forward navigation, and cleaner component code."
    }
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Bishop Appasamy College of Arts and Sciences",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 – 2026",
    status: "Graduated",
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
    title: "Software Development Internship Certificate (3 Months)",
    organization: "QMEX Solutions",
    year: "2026",
    date: "2026",
    badge: "Verified Credential",
    description: "Successfully completed a 3-month hands-on Software Development Internship in 2026 focusing on React.js, Python, full-stack application engineering, and client software projects.",
    skills: ["Software Development", "React.js", "Python", "Full-Stack Applications"]
  },
  {
    id: "scaler-rag-masterclass",
    title: "Designing Scalable RAG Pipelines Masterclass",
    organization: "Scaler Masterclass",
    year: "2026",
    date: "17th September 2026",
    badge: "Certificate of Participation",
    description: "Participated and upskilled in the Designing Scalable RAG Pipelines Masterclass, focusing on building robust retrieval-augmented generation architectures and scalable AI systems.",
    skills: ["RAG Pipelines", "Scalable Systems", "AI Architectures", "Vector Search"],
    instructors: "Anshuman Singh & Abhimanyu Saxena (Co-founders, Scaler)"
  }
];


