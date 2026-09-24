/**
 * Single source of truth for the portfolio content.
 * Update contact details, links and projects here.
 */

export const profile = {
  name: "Dhananjai D",
  tagline:
    "Computer Science Engineering Student | Cybersecurity Enthusiast | Future Software Engineer",
  intro:
    "Building, learning and exploring the future of technology through cybersecurity, software development and AI.",
  about: [
    "I am a Computer Science Engineering student interested in cybersecurity, ethical hacking, web development, and artificial intelligence.",
    "I enjoy exploring technology, building practical projects, learning security concepts, and designing modern digital experiences.",
    "My career goal is to become a skilled Software Engineer and Ethical Hacker.",
  ],
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Mar Baselios Institute of Technology and Science (MBITS)",
    graduation: "Expected graduation 2028",
  },
  // Replace with the real file once available (place it in /public).
  resumeUrl: "/resume.pdf",
};

export const contact = {
  email: "your.email@example.com", // placeholder
  phone: "+91 00000 00000", // placeholder
  linkedin: "https://linkedin.com/in/your-profile", // placeholder
  github: "https://github.com/your-username", // placeholder
  instagram: "https://instagram.com/your-handle", // placeholder
};

export const skills = [
  {
    title: "Cybersecurity",
    level: "Learning",
    description: "Security fundamentals, threat models, and defensive concepts.",
  },
  {
    title: "Ethical Hacking",
    level: "Exploring",
    description: "Hands-on practice with labs, reconnaissance and CTF-style challenges.",
  },
  {
    title: "UI / UX Design",
    level: "Developing",
    description: "Designing clean interfaces with focus on clarity and hierarchy.",
  },
  {
    title: "Web Development",
    level: "Developing",
    description: "Building responsive web interfaces and small full-stack projects.",
  },
  {
    title: "AI / Emerging Technologies",
    level: "Exploring",
    description: "Experimenting with AI tools and modern technology workflows.",
  },
  {
    title: "Technology Tools",
    level: "Developing",
    description: "Working with everyday developer and security tooling.",
  },
];

export const experience = [
  {
    role: "Intern",
    company: "Corizo",
    mode: "Online Internship",
  },
  {
    role: "Intern",
    company: "DeltaQ Solution",
    mode: "Offline Internship",
  },
];

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  features: string[];
  problem: string;
  contribution: string;
  future: string[];
};

export const projects: Project[] = [
  {
    name: "BioSync",
    summary: "Real-time health monitoring and adaptive alert system.",
    stack: [
      "Sensor-based health monitoring",
      "Microcontroller hardware",
      "Real-time data pipeline",
      "Alert & notification logic",
      "Dashboard interface",
    ],
    features: [
      "Continuous monitoring of health readings in real time",
      "Adaptive alerts that respond to changing readings",
      "Clear dashboard view of live status",
      "Designed for quick response in critical situations",
    ],
    problem:
      "Health issues are often noticed too late. BioSync watches vital readings continuously and raises an alert the moment values move outside a safe range.",
    contribution:
      "Worked on the system design, the monitoring and alert logic, and the interface used to present live readings.",
    future: [
      "Mobile companion app for alerts",
      "Longer-term data history and trends",
      "Smarter thresholds that adapt per user",
    ],
  },
];
