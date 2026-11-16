/**
 * ===================================================================
 * PORTFOLIO DATA CONFIGURATION FOR AJIT
 * ===================================================================
 * All portfolio content is managed here.
 * You can easily edit names, links, bios, skills, projects, and education
 * without touching any JSX or styling code!
 */

export const personalInfo = {
  name: "Ajit",
  fullName: "Ajit",
  role: "Aspiring Software Developer & Tech Enthusiast",
  subRole: "3rd-Year Information Science and Engineering (ISE) Student",
  status: "Available for Internships & Projects",
  email: "ajit.dev.ise@example.com", // Replace with your real email
  location: "Bengaluru, India", // Replace with your city/country
  bioShort:
    "A curious 3rd-year Information Science & Engineering student with a love for building clean, user-centric web applications and solving complex algorithmic challenges.",
  bioLong: [
    "I am currently in my 3rd year pursuing a Bachelor of Engineering in Information Science and Engineering (ISE). My technical journey is fueled by a passion for creating impactful software solutions that merge elegant frontend design with robust backend architecture.",
    "Beyond academic coursework in Data Structures, Database Systems, and Computer Networks, I spend my time building full-stack web applications, exploring modern dev ecosystems, and continually sharpening my problem-solving capabilities.",
    "I'm eager to contribute to innovative software engineering teams, collaborate on open-source projects, and take on challenging software internships."
  ],
  // Replace these with your actual profiles
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com/in",
    twitter: "https://x.com",
    email: "mailto:ajit.dev.ise@example.com",
  },
  resumeUrl: "#", // Add your resume link or local path e.g. "/resume.pdf"
  stats: [
    { label: "Academic Year", value: "3rd Year" },
    { label: "Branch", value: "ISE" },
    { label: "Projects Completed", value: "10+" },
    { label: "Coding Problems Solved", value: "250+" },
  ],
};

export const aboutHighlights = [
  {
    title: "Software Engineering",
    description:
      "Crafting responsive, performant web applications using modern component-driven architectures and clean code practices.",
    iconName: "Code",
  },
  {
    title: "DSA & Problem Solving",
    description:
      "Deep understanding of core data structures, algorithms, and complexity analysis with active practice on competitive platforms.",
    iconName: "BrainCircuit",
  },
  {
    title: "Emerging Tech & Systems",
    description:
      "Constantly exploring system design concepts, cloud tools, database optimization, and modern developer tooling.",
    iconName: "Sparkles",
  },
];

/**
 * SKILLS SECTION
 * Organized into 4 categories:
 * 1. Programming Languages
 * 2. Web Development
 * 3. Database Management
 * 4. Tools & Technologies
 */
export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "CodeXml",
    description: "Core languages used for algorithmic problem solving and development",
    skills: [
      { name: "C++", level: "Advanced", highlight: true },
      { name: "Python", level: "Intermediate", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Intermediate", highlight: true },
      { name: "Java", level: "Intermediate", highlight: false },
      { name: "C", level: "Intermediate", highlight: false },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    icon: "LayoutGrid",
    description: "Technologies for building fast, modern, and accessible web experiences",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Node.js", level: "Intermediate", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Intermediate", highlight: true },
      { name: "Next.js", level: "Intermediate", highlight: false },
      { name: "HTML5 / CSS3", level: "Advanced", highlight: false },
      { name: "RESTful APIs", level: "Advanced", highlight: false },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    icon: "Database",
    description: "Relational and NoSQL database engines for reliable data storage",
    skills: [
      { name: "PostgreSQL", level: "Intermediate", highlight: true },
      { name: "MongoDB", level: "Intermediate", highlight: true },
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "Redis", level: "Basics", highlight: false },
      { name: "Prisma ORM", level: "Intermediate", highlight: false },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: "Wrench",
    description: "Essential workflow, version control, and development environments",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "Docker", level: "Basics", highlight: false },
      { name: "Postman", level: "Intermediate", highlight: true },
      { name: "Linux / Bash", level: "Intermediate", highlight: false },
      { name: "VS Code", level: "Advanced", highlight: false },
      { name: "Vite", level: "Advanced", highlight: false },
    ],
  },
];

/**
 * PROJECTS SECTION
 * Replace these placeholder projects with your actual works!
 */
export const projectsData = [
  {
    id: 1,
    title: "DevConnect - Developer Community & Collab Hub",
    category: "Full Stack",
    description:
      "A collaborative platform for student developers to showcase projects, share tech blogs, and join coding study rooms with real-time discussion boards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
    tagline: "Community & Peer Code Sharing",
    metrics: "Real-time updates & Auth",
  },
  {
    id: 2,
    title: "AlgoTrack - Interactive DSA Visualizer & Tracker",
    category: "Frontend",
    description:
      "An interactive web tool to visualize sorting, graph traversal algorithms, and track problem-solving streaks across LeetCode & Codeforces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
    tagline: "Algorithm Simulation & Interview Prep",
    metrics: "Step-by-step visual animation",
  },
  {
    id: 3,
    title: "CampusEase - Student Resource & Event Management",
    category: "Full Stack",
    description:
      "A unified portal for college students to share lecture notes, find previous year question papers, and register for department tech club events.",
    technologies: ["React", "PostgreSQL", "Tailwind CSS", "Express", "Prisma"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
    tagline: "Academic Resource Centralization",
    metrics: "Role-based access & File uploads",
  },
  {
    id: 4,
    title: "CloudPulse - Microservice Health & Latency Monitor",
    category: "Tools & Systems",
    description:
      "A lightweight observability dashboard displaying system uptime, ping response latencies, and alert notifications for REST APIs.",
    technologies: ["React", "Node.js", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: false,
    tagline: "Telemetry & Uptime Visualizer",
    metrics: "Sub-second metrics polling",
  },
];

/**
 * EDUCATION SECTION
 * Highlights your 3rd-year ISE journey and academic background
 */
export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Information Science and Engineering (ISE)",
    status: "3rd Year (Currently Pursuing)",
    institution: "XYZ Institute of Technology", // Replace with your college name
    university: "Affiliated to State Technological University", // Replace with your university
    duration: "2023 - 2027", // Replace with your actual batch years
    grade: "Current CGPA: 8.8 / 10.0 (Placeholder)", // Editable
    location: "Karnataka, India",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
      "Web Technologies",
      "Design & Analysis of Algorithms",
    ],
    achievements: [
      "Active member of the College Coding & Open Source Club",
      "Participated in regional collegiate hackathons and tech symposiums",
      "Consistent academic performance in core computer science modules",
    ],
  },
  {
    degree: "Pre-University / Higher Secondary Education (12th Grade)",
    major: "PCMC (Physics, Chemistry, Mathematics, Computer Science)",
    status: "Completed",
    institution: "National Pre-University College", // Replace with your school/college
    duration: "2021 - 2023",
    grade: "Percentage: 92% (Placeholder)",
    location: "Karnataka, India",
    courses: ["Computer Science Fundamentals", "Mathematics", "Physics"],
    achievements: ["Top percentile in state science stream board examinations"],
  },
];

/**
 * CONTACT INFO & MESSAGES
 */
export const contactData = {
  heading: "Let's Build Something Great Together",
  subheading:
    "Whether you have an internship opportunity, a project collaboration idea, or just want to discuss software and tech, my inbox is always open!",
  email: "ajit.dev.ise@example.com", // Replace with your real email
  responseExpectation: "Usually replies within 24 hours",
  opportunities: [
    "Software Development Engineering (SDE) Internships",
    "Full-Stack Web Development Projects",
    "Open Source Collaborations",
    "Tech Discussions & Hackathons",
  ],
};
