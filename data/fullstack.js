/**
 * fullstack.js
 * Complete data object for the Full Stack Developer profile.
 * Edit content here without touching any layout or logic files.
 */
const FULLSTACK_DATA = {
  profile: {
    name: "Ganesh Gharte",
    role: "Full Stack Developer",
    /* Replace with your real base64, or a relative path like "assets/photo.jpg" */
    image: "assets/Ai_image.png",
    intro: [
      "I build end-to-end web applications.",
      "Crafting scalable APIs & rich UIs.",
      "Turning ideas into production code.",
    ],
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com",
        icon: "devicon-github-original",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "devicon-linkedin-plain",
      },
      {
        platform: "Twitter",
        url: "https://x.com/G_Gharte01",
        icon: "devicon-twitter-original",
      },
    ],
  },

  techStack: [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Redis", icon: "devicon-redis-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
    { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  ],

  projects: [
    {
      title: "LakshyaIntern",
      tags: ["React.js", "MongoDB"],
      brief: "Real-time collaborative Internship Portal.",
      description:
        "Engineered a high-performance AI recommendation engine that processed 5,000+ data points for precise internship matching, while increasing user accessibility by 30% through multilingual support and intuitive card-based skills assessments. Developed a responsive UI using Tailwind CSS that delivered personalized career analysis for 100+ user profiles, ensuring a seamless and data-driven experience across all devices.",
      live: "https://teasm-lakshyaintern.vercel.app/",
      demo: "https://teasm-lakshyaintern.vercel.app/",
    },
    {
      title: "SpendFriendAi",
      tags: ["Next.js", "SQL"],
      brief: "Finance Management System",
      description:
        "Developed a high-performance finance tracker using Next.js 14 that integrated Plaid for secure connectivity across 10+ banking institutions and Lemon Squeezy for seamless payment processing. I streamlined data management for over 10,000 transactions by implementing a robust PostgreSQL and CSV import backend, while designing interactive dashboards with React Query to visualize complex financial data across 5+ distinct chart type.",
      live: "https://spend-friend-ai.vercel.app",
      demo: "https://spend-friend-ai.vercel.app",
    },
    {
      title: "ResumeRadar",
      tags: ["React.js", "TypeScript", "Node.js"],
      brief: "Resume Analyser and Builder",
      description:
        "Developed a Next.js 15 recruitment platform integrating Google Gemini AI via Genkit to automate intelligent resume screening and candidate ranking. I implemented secure authentication and real-time data persistence using Firebase Auth and Firestore, while engineering three core AI-driven features—a Resume Ranker, ATS Score Finder, and an automated interview question generator—to streamline the hiring process.",
      live: "https://resume-radar-taupe.vercel.app/",
      demo: "https://resume-radar-taupe.vercel.app/",
    },
  ],

  experience: [
    {
      role: "Full Stack Engineer",
      company: "Xenovate Intellitect",
      period: "Dec 2025 — Present",
      brief: "Leading a 6-person team building SaaS products.",
      details: [
        "Developed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB following modern development practices.",

        "Built RESTful APIs and integrated frontend interfaces with backend services to deliver scalable and efficient user experiences.",
      ],
    },
    {
      role: "Web Developer",
      company: "Blue Stocks Fintech",
      period: "Jan 2025 - Feb 2025",
      brief:
        "Developed and optimized responsive frontend applications by replicating production-level interfaces, improving user experience",
      details: [
        "Developed an exact replica of the company website using React.js and Tailwind CSS to maintain design consistency and modern UI standards.",

        "Enhanced user navigation by implementing dynamic routing, reusable components, and interactive user interface features.",

        "Identified and demonstrated potential frontend vulnerabilities through manual testing, contributing to improved website security practices.",
      ],
    },
  ],

  achievements: [
    { text: "200+ LeetCode problems solved", icon: "⚡" },
    { text: "MKCL Certified Web Developer", icon: "📝" },
    { text: " Won SNGU Innovation Hub Event", icon: " 🏅" },
    { text: "Avishkar 2k25 Zonal level Winner", icon: "🏆" },
  ],

  education: [
    {
      degree: " Master of Computer Applications",
      institution:
        " Shri Vile Parle Kelavani Mandal's Institute of Technology, Dhule, Maharashtra.",
      period: "2024 — 2026",
      score: "GPA: Pursuing",
    },
    {
      degree: "B.Sc in Computer Science",
      institution: "Zulal Bhilajirao Patil College, Dhule, Maharashtra",
      period: "2021 — 2024",
      score: "CGPA: 8.85 / 10",
    },
  ],
};
