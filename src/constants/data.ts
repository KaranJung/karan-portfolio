// Experience data type
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

// Education data type
export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

// Experience data
export const experience: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Senior Creative Technologist",
    company: "Freelance / Independent",
    description:
      "Architecting premium web experiences, pushing the boundaries of 3D motion, and building scalable full-stack applications for global clients.",
  },
  {
    period: "2022 - 2024",
    role: "Full-Stack Developer",
    company: "Tech Agency",
    description:
      "Led the development of bespoke CRM dashboards and high-performance Laravel/React ecosystems. Managed SEO audits and technical performance optimization.",
  },
  {
    period: "2021 - 2022",
    role: "UI/UX Designer & Web Developer",
    company: "Creative Studio",
    description:
      "Designed responsive, accessible, and high-conversion interfaces. Integrated modern styling frameworks to unify brand identities.",
  },
];

// Education data
export const education: EducationItem[] = [
  {
    period: "2020 - 2024",
    degree: "Bachelor in Computer Science",
    institution: "Tribune University",
    description: "Focused on software engineering, data structures, and web development.",
  },
  {
    period: "2018 - 2020",
    degree: "High School Diploma (+2 Science)",
    institution: "National School of Sciences",
    description: "Specialized in physics, mathematics, and computer science.",
  },
];

export const PORTFOLIO_DATA = {
  identity: {
    fullName: "Karan Jung Budhathoki",
    brandLogo: "<KJB />",
    title: "Full-Stack Developer & Creative Technologist",
    location: "Kathmandu, Nepal",
    tagline:
      "Crafting immersive digital experiences with futuristic design and scalable engineering.",
    summary:
      "I am a premium full-stack developer and creative technologist specializing in modern web applications, UI/UX design, SEO optimization, cybersecurity, graphic design, video editing, WordPress development, and hardware/software systems. I bridge design, engineering, and performance to create immersive digital products.",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Clients Globally", value: "15+" },
    ],
    roles: [
      "Full-Stack Developer",
      "Creative Technologist",
      "UI/UX Designer",
      "SEO Specialist",
      "Cybersecurity Enthusiast",
    ],
  },
  contact: {
    email: "underside001@gmail.com",
    phone: "+977-9842388429",
    address: "Koteshwor, Kathmandu, Nepal",
    website: "https://karanjungbudhathoki.com.np",
    socials: {
      github: "https://github.com/KaranJung",
      facebook: "https://www.facebook.com/karanjung.budhathoki.16",
      instagram: "https://www.instagram.com/karan_jung_budhathoki/",
    },
  },
  skills: {
    frontend: [
      { name: "React", icon: "react", level: 5 },
      { name: "Next.js", icon: "nextjs", level: 5 },
      { name: "TypeScript", icon: "typescript", level: 4 },
      { name: "Tailwind CSS", icon: "tailwind", level: 5 },
    ],
    backend: [
      { name: "PHP", icon: "php", level: 4 },
      { name: "Node.js", icon: "nodejs", level: 4 },
      { name: "Laravel", icon: "laravel", level: 4 },
      { name: "MySQL", icon: "mysql", level: 4 },
    ],
    tools: [
      { name: "Git", icon: "git", level: 5 },
      { name: "Docker", icon: "docker", level: 3 },
      { name: "Vercel", icon: "vercel", level: 5 },
      { name: "Cloudflare", icon: "cloudflare", level: 4 },
    ],
    creative: [
      { name: "Photoshop", icon: "photoshop", level: 5 },
      { name: "Premiere Pro", icon: "premiere", level: 4 },
      { name: "Figma", icon: "figma", level: 5 },
      { name: "Canva", icon: "canva", level: 5 },
    ],
  },
  services: [
    { title: "Futuristic Web Design", icon: "MonitorSmartphone", desc: "Pushing boundaries with immersive, modern web experiences." },
    { title: "Full Stack Development", icon: "Code2", desc: "End-to-end engineering from database to deployment." },
    { title: "UI/UX Design", icon: "PenTool", desc: "Human-centered design that converts and delights." },
    { title: "SEO Optimization", icon: "Search", desc: "Data-driven strategies for organic search dominance." },
    { title: "Performance Optimization", icon: "Gauge", desc: "Lightning-fast load times and smooth interactions." },
    { title: "Cybersecurity Consulting", icon: "ShieldCheck", desc: "Protecting digital assets from modern threats." },
    { title: "WordPress Development", icon: "Layout", desc: "Custom themes and scalable WordPress solutions." },
    { title: "Branding / Graphic Design", icon: "Palette", desc: "Visual identity systems that leave lasting impressions." },
  ],
  projects: [
    {
      title: "PrivacyShield Pro",
      description: "Advanced cybersecurity solution for data privacy and protection, featuring real-time monitoring and threat neutralisation.",
      tags: ["Python", "Security", "Privacy"],
      github: "https://github.com/KaranJung/PrivacyShield-Pro",
      live: "#",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    },
    {
      title: "The Chulo Restro",
      description: "Custom digital presence and management system for a premium culinary establishment, focusing on seamless user experience.",
      tags: ["React", "UI/UX", "Client Project"],
      github: "https://github.com/KaranJung/ThechuloRestro",
      live: "#",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
      title: "BreachChecker Intelligence",
      description: "Comprehensive Cyber Threat Intelligence platform developed to monitor and analyse global data breaches in real-time.",
      tags: ["Cybersecurity", "Intelligence", "Data Analytics"],
      github: "https://github.com/KaranJung/BreachChecker-Cyber-Threat-Intelligence-Platform",
      live: "#",
      image: "https://images.unsplash.com/photo-1563986768494-2d254c0b2f42?w=800&q=80",
    },
    {
      title: "Secure-Vault",
      description: "Enterprise-grade encryption vault for secure file storage and credential management with advanced cryptographic protocols.",
      tags: ["Encryption", "Security", "Full-Stack"],
      github: "https://github.com/KaranJung/Secure-Vault",
      live: "#",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
    {
      title: "Smart Supermarket Scanner",
      description: "AI-powered POS scanning system built with Python Flask and computer vision for automated checkout experiences.",
      tags: ["Python", "Flask", "AI/ML", "Computer Vision"],
      github: "https://github.com/KaranJung/Build-a-Smart-Supermarket-Scanner-with-Python-Flask-and-JavaScript",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    },
    {
      title: "Diabetes Prediction ML",
      description: "Predictive diagnostics system leveraging advanced machine learning algorithms to assist in early healthcare intervention.",
      tags: ["Machine Learning", "Healthcare", "Data Science"],
      github: "https://github.com/KaranJung/Diabetes-Predictions-system-using-machine-learning",
      live: "#",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    },
    {
      title: "GPS Location Tracker",
      description: "Real-time geographical tracking application with high-precision mapping and trajectory analysis.",
      tags: ["JavaScript", "Geolocation", "Maps API"],
      github: "https://github.com/KaranJung/GPS-Location-Tracker",
      live: "#",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    },
    {
      title: "Student College Finder",
      description: "Intelligent academic advisory platform helping students navigate their higher education journey with personality-matching algorithms.",
      tags: ["Next.js", "AI", "Education Tech"],
      github: "https://github.com/KaranJung/Student-College-Finder",
      live: "#",
      image: "/projects/college_finder.png",
    },
    {
      title: "Product Management System",
      description: "Robust inventory lifecycle management and warehouse tracking system designed for industrial-scale operations.",
      tags: ["System Design", "Inventory", "Database"],
      github: "https://github.com/KaranJung/Product-Management-System-PMS-",
      live: "#",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      title: "Premium Agency Branding",
      description: "A high-end portfolio and branding concept for creative agencies, showcasing luxury motion design and aesthetics.",
      tags: ["UI/UX", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/KaranJung?tab=repositories",
      live: "#",
      image: "/projects/agency_branding.png",
    },
    {
      title: "Enterprise CRM Dashboard",
      description: "State-of-the-art analytics dashboard system for managing complex client relations and internal corporate workflows.",
      tags: ["React", "Node.js", "MySQL"],
      github: "https://github.com/KaranJung?tab=repositories",
      live: "#",
      image: "/projects/crm_dashboard.png",
    },
  ],
};
