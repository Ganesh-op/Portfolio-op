/**
 * analytics.js
 * Complete data object for the Data Analytics profile.
 * Edit content here without touching any layout or logic files.
 */
const ANALYTICS_DATA = {
  profile: {
    name: "Ganesh Gharte",
    role: "Data Analyst",
    image: "./assets/images/Ai-image.png",
    intro: [
      "Data Analyst converting raw datasets into **verified** financial and operational metrics. Engineered analytical pipelines that drove a **25% revenue increase** and a **15% risk reduction** across core business units."
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
      category: "Core Programming & Analysis",
      skills: [
        { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Excel", icon: "devicon-microsoftexcel-original colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Pandas", icon: "devicon-pandas-plain" }
      ]
    },
    {
      category: "Data Visualization",
      skills: [
        { name: "Power BI", icon: "devicon-powerbi-original colored" },
        { name: "Tableau", icon: "devicon-chrome-plain colored" },
        { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
        { name: "Seaborn", icon: "devicon-python-plain" },
        { name: "Plotly", icon: "devicon-plotly-plain colored" },
        { name: "Streamlit", icon: "devicon-streamlit-plain colored" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
      ]
    },
    {
      category: "Tech Concepts",
      skills: [
        { name: "Artificial Intelligence", icon: "ion-git-network-outline" },
        { name: "Machine Learning", icon: "ion-stats-chart-outline" },
        { name: "Generative AI", icon: "ion-sparkles-outline" },
        { name: "Git/Github", icon: "devicon-git-plain colored" },
        { name: "OOPs Principles", icon: "ion-code-slash-outline" }
      ]
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Analytical Thinking", icon: "ion-analytics-outline" },
        { name: "Problem Solving", icon: "ion-bulb-outline" },
        { name: "Collaboration", icon: "ion-people-outline" }
      ]
    }
  ],

  projects: [
    {
      title: "Supply Chain Analysis",
      tags: ["Python", "Pandas", "Matplotlib"],
      category: "data analysis",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
      brief: "Real-time supply chain pricing & logistics analysis.",
      description:
        "Uncovered hidden pricing patterns by executing **price-to-revenue correlation analyses** in **Python** across item categories, boosting projected revenue by **25%**. Audited **shipping carrier performance metrics** to evaluate cost-efficiency scales, successfully identifying and eliminating **three underperforming logistics routes**. Developed an **inventory tracking system** utilizing stock-level and turnover trends to flag high-risk **stockout SKUs**, cutting material delays significantly.",
      code: "https://github.com/Ganesh-op/Supply_Chain_Analysis_Using_Python",
      demo: "https://github.com/Ganesh-op/Supply_Chain_Analysis_Using_Python",
    },
    {
      title: "HR-Analytics-PowerBI",
      tags: ["Python", "Microsoft Power BI"],
      category: "dashboards",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80",
      brief: "HR Attrition Power BI Dashboard tracking 76K+ records.",
      description:
        "Built a **Power BI dashboard** analyzing attrition trends across **76K employee records**, which allowed HR teams to reduce overall workforce risk by **15%**. Cleaned and transformed raw HR datasets using **Power Query Editor** to optimize the ETL pipeline, reducing recurring data processing cycles by **30%**. Created **demographic and performance trackers** within the dashboard, delivering clear **talent analytics** used directly for executive staffing decisions.",
      code: "https://github.com/Ganesh-op/HR-Analytics-PowerBI",
      demo: "https://github.com/Ganesh-op/HR-Analytics-PowerBI",
    },
    {
      title: "Heart-Disease-Analysis",
      tags: ["Python", "Matplotlib", "Seaborn"],
      category: "machine learning",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop&q=80",
      brief: "Heart Disease Analysis & Predictive Machine Learning Pipeline.",
      description:
        "Constructed a predictive machine learning pipeline with **94% diagnostic accuracy** by executing exploratory data analysis and rigorous **neural network tuning**. Maximize model precision to **92%** by optimizing training workflows and performing rigorous **feature selection**, outperforming baseline statistical models.",
      code: "https://github.com/Ganesh-op/Heart-Disease-Analysis",
      demo: "https://github.com/Ganesh-op/Heart-Disease-Analysis",
    },
  ],

  experience: [
    {
      role: "Freelance Data Analyst",
      company: "Xenovate IntelliTect",
      period: "Jan 2026 — June 2026",
      brief:
        "Executed multiple production-grade data analytics solutions for global clients, elevating baseline project delivery quality and enhancing customer satisfaction.",
      details: [
        "Executed **multiple production-grade data analytics solutions** for global clients, elevating baseline project delivery quality and enhancing customer satisfaction.",
        "Formulated data requirements through direct client collaboration, ensuring **100% compliance** with business goals and delivering verified statistical outcomes."
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "BlueStock.in",
      period: "Jan 2025 - Feb 2025",
      brief:
        "Contributed to data-driven business solutions by analyzing datasets",
      details: [
        "Identified critical navigation bottlenecks by evaluating **heatmaps** of user interaction data, delivering core UX optimization insights to the engineering team.",
        "Restructured and cleansed user activity datasets for over **500 active profiles** by collaborating with backend engineers, improving UI reporting precision by **20%**."
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
