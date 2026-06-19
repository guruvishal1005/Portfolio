export const profile = {
  name: "Guru Vishal",
  shortName: "Vishal",
  roles: ["Software Engineer", "AI Engineer", "Cybersecurity Researcher"],
  location: "Chennai, India",
  email: "gprsguru1777@gmail.com",
  tagline:
    "Building production-grade software, AI-powered systems, and cybersecurity solutions that solve real-world problems.",
  heroLeadHighlight: "Software Engineer",
  heroLeadHighlight2: "Cybersecurity Researcher",
  currentlyWorkingOn: "CONTEXTA",
  socials: {
    github: "https://github.com/guruvishal1005",
    linkedin: "https://www.linkedin.com/in/guruvishal-sr/",
    instagram: "https://www.instagram.com/guru.vishal10/",
  },
};

export const quote = {
  text: "Security is not a product, but a process.",
  author: "Bruce Schneier",
};

export const aboutParagraphs = [
  "I am a Software Engineer and Cybersecurity enthusiast passionate about building scalable software systems, intelligent AI applications, and innovative security solutions.",
  "My experience spans full-stack web development, AI agents, machine learning, blockchain technologies, threat intelligence, and enterprise software architecture. I have led engineering teams, designed production-ready applications, implemented CI/CD pipelines, and developed solutions across healthcare, cybersecurity, and decentralized finance domains.",
  "Beyond development, I actively participate in hackathons, cybersecurity research, and competitive programming, continuously exploring emerging technologies and modern software engineering practices.",
];

export const aboutIntro =
  "Currently pursuing a Bachelor's degree in Computer Science Engineering (Cyber Security) at Chennai Institute of Technology. I specialize in full-stack development, AI-driven applications, cybersecurity research, and system architecture, with experience leading development teams and delivering production-ready software for industry and academic organizations.";

export const interests = [
  "Software Engineering",
  "Artificial Intelligence & Agentic Systems",
  "Cybersecurity & Threat Intelligence",
  "Full Stack Development",
  "Cloud & DevOps",
  "Blockchain & Web3",
  "System Design & Architecture",
];

export type Experience = {
  role: string;
  company: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Universiti Sains Islam Malaysia (USIM)",
    points: [
      "Led a 4-member engineering team in delivering production-ready software solutions for industry and organizational stakeholders.",
      "Architected, developed, tested, and deployed scalable full-stack applications and RESTful APIs while implementing CI/CD pipelines and automated deployment workflows.",
    ],
  },
  {
    role: "Threat Analyst Intern",
    company: "CyberXTron Technologies",
    points: [
      "Researched ransomware groups, cybercriminal ecosystems, and emerging threat actors through dark web monitoring, threat intelligence analysis, and IOC tracking.",
      "Produced technical threat reports and blogs on ransomware operations, attack methodologies, vulnerabilities, and the evolving cyber threat landscape.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  featured?: boolean;
  links: { label: string; href: string; variant?: "primary" | "ghost" }[];
};

export const projects: Project[] = [
  {
    title: "CONTEXTA",
    subtitle:
      "Autonomous Context-Aware Threat Intelligence & Business Risk Platform",
    description:
      "An enterprise-grade Security Operations Center (SOC) platform combining AI-powered multi-agent systems, machine learning, digital twin simulations, and blockchain-backed audit trails for contextual threat intelligence and business risk assessment.",
    tags: ["AI Agents", "Machine Learning", "Blockchain", "SOC"],
    highlights: [
      "AI-powered multi-agent threat analysis",
      "Business-Weighted Vulnerability Scoring (BWVS)",
      "Digital twin attack path simulation",
      "Blockchain-based immutable audit logging",
      "Automated incident response workflows",
      "Real-time CVE intelligence integration",
    ],
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/guruvishal1005", variant: "primary" },
    ],
  },
  {
    title: "Lendora AI",
    subtitle: "AI-Powered Decentralized Lending Protocol",
    description:
      "A next-generation DeFi lending platform leveraging AI agents and zero-knowledge proofs to automate loan negotiations while preserving user privacy.",
    tags: ["AI Agents", "Solidity", "ZKP", "React Three Fiber"],
    highlights: [
      "Autonomous AI loan negotiation agents",
      "Zero-Knowledge credit scoring",
      "Ethereum Layer-2 settlement",
      "Privacy-preserving financial verification",
      "React Three Fiber 3D dashboard",
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/guruvishal1005/Lendora-AI",
        variant: "primary",
      },
    ],
  },
  {
    title: "College Attendance System",
    subtitle: "Smart, secure attendance management",
    description:
      "A production-ready smart attendance platform utilizing location verification, QR authentication, and facial recognition for secure attendance management.",
    tags: ["MERN", "Face Recognition", "Geolocation"],
    highlights: [
      "Dynamic QR authentication",
      "Geolocation verification",
      "Face recognition integration",
      "Role-based access control",
      "Real-time attendance tracking",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/guruvishal1005", variant: "primary" },
    ],
  },
  {
    title: "CyberScan 1005",
    subtitle: "Multithreaded network port scanner",
    description:
      "A multithreaded network port scanner developed for security professionals and learners, with banner grabbing and simple vulnerability detection.",
    tags: ["Python", "Networking", "Security"],
    highlights: [
      "Concurrent scanning engine",
      "CIDR network support",
      "Customizable scan configurations",
      "Performance-optimized architecture",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/guruvishal1005/CyberScan-1005",
        variant: "primary",
      },
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Web Development",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "LLMs",
      "Agentic AI",
      "Multi-Agent Orchestration",
      "NLP",
      "AI Agents",
      "RAG",
    ],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "Postman"],
  },
  {
    title: "Blockchain & Web3",
    items: ["Solidity", "Ethereum", "Smart Contracts", "Hardhat", "IPFS", "ZKP"],
  },
  {
    title: "Cybersecurity",
    items: [
      "Threat Intelligence",
      "Vulnerability Assessment",
      "IOC Analysis",
      "CVE Analysis",
      "OSINT",
      "Dark Web Monitoring",
    ],
  },
];

export const achievements = [
  { icon: "trophy", text: "2× National-Level Hackathon Winner" },
  {
    icon: "trophy",
    text: "Winner of CyberShield 2026 Hackathon — Ministry of Electronics and Information Technology",
  },
  { icon: "code", text: "Top 10% Global Ranking on LeetCode" },
  {
    icon: "rocket",
    text: "Led development teams delivering production-grade software solutions",
  },
];

export const personalStatement =
  "I enjoy solving complex engineering problems at the intersection of software, AI, and cybersecurity. My goal is to build intelligent, secure, and scalable systems that create meaningful real-world impact.";
