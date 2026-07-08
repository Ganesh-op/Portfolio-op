/**
 * fullstack.js
 * Complete data object for the Full Stack Developer profile.
 * Edit content here without touching any layout or logic files.
 */
const FULLSTACK_DATA = {
  profile: {
    name: "Ganesh Gharte",
    role: "Full Stack Developer",
    image: "./assets/images/Ai-image.png",
    intro: [
      "I am a Full Stack Developer specializing in building end-to-end web applications. I work with React.js, Node.js, Express, SQL, and MongoDB, bridging backend database development with responsive, modular user interfaces."
    ],
    contacts: {
      email: "ganeshgharte001@gmail.com",
      phone: "+917822835991",
      birthday: "October 02, 2003",
      location: "Pune, Maharashtra, India"
    },
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/Ganesh-op",
        icon: "devicon-github-original",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/ganeshgharte01",
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
    {
      category: "Programming & Core",
      skills: [
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
        { name: "OOPs Principles", icon: "ion-code-slash-outline" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
        { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
        { name: "HTML5/CSS3", icon: "devicon-html5-plain colored" }
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "Redis", icon: "devicon-redis-plain colored" }
      ]
    },
    {
      category: "Cloud & Devops",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
        { name: "GraphQL", icon: "devicon-graphql-plain colored" },
        { name: "Git/Github", icon: "devicon-git-plain colored" }
      ]
    }
  ],

  projects: [
    {
      title: "LakshyaIntern",
      tags: ["React.js", "MongoDB"],
      category: "web development",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80",
      brief: "Real-time collaborative Internship Portal.",
      description:
        "Engineered a high-performance AI recommendation engine that processed 5,000+ data points for precise internship matching, while increasing user accessibility by 30% through multilingual support and intuitive card-based skills assessments. Developed a responsive UI using Tailwind CSS that delivered personalized career analysis for 100+ user profiles, ensuring a data-driven experience across all devices.",
      live: "https://teasm-lakshyaintern.vercel.app/",
      demo: "https://teasm-lakshyaintern.vercel.app/",
    },
    {
      title: "SpendFriendAi",
      tags: ["Next.js", "SQL"],
      category: "applications",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&q=80",
      brief: "Finance Management System",
      description:
        "Developed a high-performance finance tracker using Next.js 14 that integrated Plaid for secure connectivity across 10+ banking institutions and Lemon Squeezy for seamless payment processing. I streamlined data management for over 10,000 transactions by implementing a robust PostgreSQL and CSV import backend, while designing interactive dashboards with React Query to visualize complex financial data across 5+ distinct chart type.",
      live: "https://spend-friend-ai.vercel.app",
      demo: "https://spend-friend-ai.vercel.app",
    },
    {
      title: "ResumeRadar",
      tags: ["React.js", "TypeScript", "Node.js"],
      category: "applications",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&q=80",
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
        "Developed responsive full-stack web applications using **React.js**, **Node.js**, **Express.js**, and **MongoDB** following modern development practices.",
        "Built **RESTful APIs** and integrated frontend interfaces with backend services to deliver scalable and efficient user experiences.",
      ],
    },
    {
      role: "Web Developer",
      company: "Blue Stocks Fintech",
      period: "Jan 2025 - Feb 2025",
      brief:
        "Developed and optimized responsive frontend applications by replicating production-level interfaces, improving user experience",
      details: [
        "Developed an exact replica of the company website using **React.js** and **Tailwind CSS** to maintain design consistency and modern UI standards.",
        "Enhanced user navigation by implementing **dynamic routing**, **reusable components**, and interactive user interface features.",
        "Identified and demonstrated potential frontend vulnerabilities through **manual testing**, contributing to improved website security practices.",
      ],
    },
  ],

  achievements: [
    { text: "Winner of Avishkar 2k25 Zonal Level", icon: "trophy-outline", url: "https://drive.google.com/file/d/18y7UQ9tBTn974Dh3kqDS40XviCwSiv9J/view" },
    { text: "Won SNGU Innovation Hub Competition", icon: "medal-outline", url: "https://drive.google.com/file/d/12iK5-TKvmQj-L1acvXMPYMeXri0tGN14/view?usp=sharing" },
    { text: "Solved 200+ problems on LeetCode", icon: "code-slash-outline", url: "https://leetcode.com/u/NniQZsmdzH" },
    { text: "Earned 10+ professional certificates", icon: "ribbon-outline", url: "https://drive.google.com/drive/folders/1IJXRLoSdjzIEhdZWtdE49BMPrgIt7BRi?usp=sharing" },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Shri Vile Parle Kelavani Mandal (SVKM) IOT, Dhule",
      period: "2024 — 2026",
      score: "Score: Pursuing",
    },
    {
      degree: "B.Sc in Computer Science",
      institution: "Jai Hind Et's Zulal Bhilajirao Patil College, Dhule",
      period: "2021 — 2024",
      score: "CGPA - **8.9** | 75.12%",
    },
    {
      degree: "Senior Secondary (HSC)",
      institution: "Jai Hind Et's Zulal Bhilajirao Patil College, Dhule",
      period: "2021",
      score: "Science | Score: **85.17%**",
    },
    {
      degree: "Secondary (CBSE X)",
      institution: "Kendriya Vidyalaya, Dhule",
      period: "2019",
      score: "Score: **62.2%**",
    },
  ],
};
