import rfidPresentationPptx from "@/assets/rfid-attendance-presentation.pptx.asset.json";
import rfidPresentationPdf from "@/assets/rfid-attendance-presentation.pdf.asset.json";

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
  resumeUrl:
    "/__l5e/assets-v1/14934a1d-e58a-4b0f-8f9b-d3ca8e740883/Dhananjai_D_Resume.docx",
  resumeViewUrl:
    "/__l5e/assets-v1/18e27c39-f465-4792-8b07-4c0b9241d84b/Dhananjai_D_Resume.pdf",
};

export const contact = {
  email: "dhananjaid230@gmail.com",
  phone: "9539862098",
  linkedin: "https://www.linkedin.com/in/dhananjai-d-7a3164311/",
  github: "https://github.com/dhananjai04",
  instagram: "https://www.instagram.com/_d_hananjai_d_/",
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
  presentation?: {
    viewUrl: string;
    downloadUrl: string;
  };
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
  {
    name: "RFID-Based Smart Attendance System",
    summary: "Arduino-powered student identification and attendance tracking.",
    stack: [
      "Arduino UNO R3",
      "RC522 RFID reader and cards",
      "16×2 LCD display",
      "DS3231 real-time clock",
      "Buzzer and LED indicators",
    ],
    features: [
      "Recognizes registered students using unique RFID card IDs",
      "Tracks student entry and exit with repeated scans",
      "Displays student names and attendance status on the LCD",
      "Uses a buzzer and LEDs for scan feedback and invalid-card alerts",
      "Designed to record attendance date and time with an RTC module",
    ],
    problem:
      "Manual roll calls and paper registers take time, can introduce errors, and make it difficult to track student entry and exit. This project automates identification and attendance recording with RFID cards and an Arduino-based system.",
    contribution:
      "Designed and assembled the hardware circuit, connecting the Arduino UNO, RFID reader, LCD, RTC, buzzer, and LED indicators.",
    future: [
      "Store attendance records on an SD card or database",
      "Upload records to a cloud platform for online monitoring",
      "Create automated attendance reports and a teacher-facing mobile app",
    ],
    presentation: {
      viewUrl: rfidPresentationPdf.url,
      downloadUrl: rfidPresentationPptx.url,
    },
  },
];
