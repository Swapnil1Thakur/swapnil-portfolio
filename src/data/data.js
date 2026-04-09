export const personalInfo = {
  name: "Swapnil Thakur",
  title: "Java Backend Engineer",
  typingStrings: [
    "secure REST APIs with Spring Boot.",
    "JWT & OAuth2 auth systems.",
    "scalable backend architectures.",
    "production-ready Java systems.",
  ],
  phone: "+91-7050910802",
  email: "thakur7swapnil@gmail.com",
  location: "Phagwara, Punjab, India",
  bio: "Final-year CS student and backend engineer who genuinely enjoys the challenge of building systems that are clean, secure, and hold up under load. I specialise in Java & Spring Boot — from authentication pipelines and RBAC to high-performance REST APIs. I care about code that's production-ready, not just working.",
  linkedin: "https://linkedin.com/in/swapnil-thakur-/",
  github: "https://github.com/Swapnil1Thakur/",
  portfolio: "https://portfolio-showcase--thakur7swapnil.replit.app/",
  // ✏️ EASY UPDATE: Replace the file ID below with your latest CV's Google Drive file ID.
  // How to get it: Drive > Share > "Anyone with link" > copy the ID from the URL.
  // Example URL: https://drive.google.com/file/d/THIS_IS_THE_FILE_ID/view
  resumeLink: "https://drive.google.com/file/d/1vLf-rZOAQzptY6eUIQm3siaZ8HsBBYJh/view?usp=sharing",
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    duration: "Aug 2022 – May 2026",
    status: "Pursuing",
  },
];

export const experience = [
  {
    role: "Java Backend Development Trainee",
    company: "GeeksforGeeks (GFG)",
    location: "Remote",
    duration: "June 2025 – Sept 2025",
    points: [
      "Developed and tested REST APIs integrated into real-time applications, following SOLID principles, layered architecture, and industry-standard Spring Boot practices.",
      "Designed normalized relational schemas and optimized CRUD workflows using Spring Data JPA and Hibernate ORM, reducing redundant database queries by 25%.",
    ],
  },
];

export const projects = [
  {
    name: "ShopNest",
    subtitle: "E-Commerce Backend Platform",
    tech: "Java, Spring Boot, Spring Security, JWT, MySQL, Spring Data JPA, Hibernate, JUnit, Mockito, Swagger",
    duration: "Jan 2026",
    description:
      "Full backend for an e-commerce platform — product catalog, cart, and order modules. Focused on getting auth airtight with Spring Security + JWT, RBAC across 4 privilege levels, and ensuring queries don't collapse under concurrent load with smart pagination and filtering.",
    github: "https://github.com/Swapnil1Thakur/sb-ecom",
    highlights: [
      "15+ RESTful APIs across catalog, cart & order modules",
      "40% faster API response with server-side pagination & filtering",
      "RBAC across 4 privilege levels · 80%+ JUnit/Mockito test coverage",
      "All endpoints documented via Swagger/OpenAPI spec",
    ],
    color: "#6C63FF",
  },
  {
    name: "AuthBridge",
    subtitle: "Full-Stack Authentication System",
    tech: "Spring Boot 3, Spring Security 6, OAuth2, JWT, MySQL, Docker, React, Vite",
    duration: "Mar 2026",
    description:
      "Production-ready auth system with credential login and OAuth2 SSO via Google & GitHub. Stateless JWT with HttpOnly cookie-based refresh token rotation per OWASP standards — XSS and CSRF eliminated at the architectural level. Containerised with Docker, React + Vite frontend.",
    github: "https://github.com/Swapnil1Thakur/auth-app-backend",
    highlights: [
      "OAuth2 SSO via Google & GitHub with full token lifecycle",
      "OWASP-compliant: HttpOnly cookies, XSS & CSRF mitigated",
      "Dockerised full-stack deployment (backend + frontend)",
      "Silent token refresh & protected routing on React/Vite frontend",
    ],
    color: "#00d9c0",
  },
];

export const skills = [
  {
    category: "Core Backend",
    items: [
      { name: "Java", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
      { name: "Spring Boot", icon: "https://img.icons8.com/color/48/spring-logo.png" },
      { name: "Spring Security", icon: "https://img.icons8.com/color/48/spring-logo.png" },
      { name: "Spring Data JPA", icon: "https://img.icons8.com/color/48/spring-logo.png" },
      { name: "Hibernate", icon: "https://img.icons8.com/color/48/hibernate.png" },
      { name: "REST APIs", icon: "https://img.icons8.com/color/48/api-settings.png" },
      { name: "OAuth2", icon: "https://img.icons8.com/color/48/security-checked.png" },
      { name: "JWT", icon: "https://img.icons8.com/color/48/security-checked.png" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "SQL", icon: "https://img.icons8.com/color/48/sql.png" },
    ],
  },
  {
    category: "Messaging & Cloud",
    items: [
      { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
      { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "RabbitMQ", icon: "https://img.icons8.com/color/48/rabbitmq.png" },
      { name: "Maven", icon: "https://img.icons8.com/color/48/apache-maven.png" },
      { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
      { name: "Postman", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
    ],
  },
  {
    category: "Testing & Docs",
    items: [
      { name: "JUnit", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
      { name: "Mockito", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
      { name: "Swagger/OpenAPI", icon: "https://img.icons8.com/color/48/api-settings.png" },
    ],
  },
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2024 Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1L_AeHiMIU1A2bIw3JKsboAyZPVMRMfLa/view?pli=1",
  },
  {
    name: "Generative AI Professional",
    issuer: "Oracle",
    date: "Sept 2025",
    link: "https://drive.google.com/file/d/1biPTEgMFA_ClI8NrNc665csjFdY08e2i/view",
  },
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1QIdwJbcKfPyHPZ73NZgn_PaNCeVqkG5v/view",
  },
];

export const achievements = [
  "Solved 300+ DSA problems across Trees, Graphs, and Dynamic Programming with a focus on time and space-optimised solutions (LeetCode, GeeksforGeeks).",
  "Applied system design principles — stateless architecture, token lifecycle management, and RBAC — across projects to build production-aligned backend systems.",
];
