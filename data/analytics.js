/**
 * analytics.js
 * Complete data object for the Data Analytics profile.
 * Edit content here without touching any layout or logic files.
 */
const ANALYTICS_DATA = {
  profile: {
    name: "Ganesh Gharte",
    role: "Data Analyst",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent",
    intro: [
      "I turn raw data into decisions.",
      "Building dashboards & predictive models.",
      "Making data speak through visuals."
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com", icon: "devicon-github-original" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "devicon-linkedin-plain" },
      { platform: "Twitter", url: "https://x.com/G_Gharte01", icon: "devicon-twitter-original" }
    ]
  },

  techStack: [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "R", icon: "devicon-r-plain colored" },
    { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    { name: "Pandas", icon: "devicon-pandas-plain" },
    { name: "NumPy", icon: "devicon-numpy-plain colored" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
    { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
    { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Apache Spark", icon: "devicon-apachespark-original colored" },
    { name: "Tableau", icon: "devicon-chrome-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" }
  ],

  projects: [
    {
      title: "Supply Chain Analysis",
      tags: ["Python", "Pandas", "Matplotlib"],
      brief: "Real-time market sentiment analysis dashboard.",
      description: "An end-to-end pipeline ingesting 100k+ tweets daily, performing NLP-based sentiment scoring, and rendering interactive Tableau dashboards. Features time-series correlation analysis between sentiment shifts and stock price movements.",
      code: "https://github.com/Ganesh-op/Supply_Chain_Analysis_Using_Python",
      demo: "https://github.com/Ganesh-op/Supply_Chain_Analysis_Using_Python"
    },
    {
      title: "HR-Analytics-PowerBI",
      tags: ["Python", "Microsoft Power BI"],
      brief: "HR Analytics Overview.",
      description: "The original dataset had more than 80K records which needed to be cleaned first and processed for this portfolio project and only the cleaned dataset of 76K records is present in repository.",
      code: "https://github.com/Ganesh-op/HR-Analytics-PowerBI",
      demo: "https://github.com/Ganesh-op/HR-Analytics-PowerBI"
    },
    {
      title: "Heart-Disease-Analysis",
      tags: ["Python", "Matplotlib", "Seaborn"],
      brief: "This project aims to analyze heart disease datasets using various machine-learning techniques to identify patterns, risk factors, and predictive models.",
      description: "Welcome to the Heart Disease Analysis project repository! In this project, we analyze datasets related to heart disease to gain insights, develop predictive models, and contribute to understanding cardiovascular health.",
      code: "https://github.com/Ganesh-op/Heart-Disease-Analysis",
      demo: "https://github.com/Ganesh-op/Heart-Disease-Analysis"
    }
  ],

  experience: [
    {
      role: "Freelance Data Analyst",
      company: "Xenovate Intellitect",
      period: "Dec 2025 — Present",
      brief: "Providing end-to-end data analysis, dashboard development, and business intelligence solutions for startups, students, and small businesses.",
      details: [
        "Analyzed structured and semi-structured datasets using Python, SQL, Excel, and Pandas to uncover trends, customer behavior, and business insights.",

        "Built interactive dashboards in Power BI and Tableau featuring KPI tracking, sales analysis, customer segmentation, revenue forecasting, and performance monitoring.",

        "Performed data cleaning, preprocessing, and transformation on large datasets using NumPy and Pandas, improving data accuracy and reporting efficiency."
      ]
    },
    {
      role: "Data Analyst",
      company: "Blue Stocks Fintech",
      period: "Jan 2025 - Feb 2025",
      brief: "Contributed to data-driven business solutions by analyzing datasets",
      details: [
        "Developed automated reporting workflows that reduced manual reporting time and improved operational productivity for clients.",

        "Conducted exploratory data analysis (EDA) to identify patterns, anomalies, correlations, and actionable business opportunities.",

        "Worked on real-world analytics projects including sales analysis, customer churn analysis, HR analytics, and e-commerce performance tracking."
      ]
    }
  ],

  achievements: [
    { text: "200+ LeetCode problems solved", icon: "⚡" },
    { text: " Won SNGU Innovation Hub Event", icon: " 🏅" },
    { text: "Avishkar 2k25 Zonal level Winner", icon: "🏆" }
  ],

  education: [
    {
      degree: " Master of Computer Applications",
      institution: " Shri Vile Parle Kelavani Mandal's Institute of Technology, Dhule, Maharashtra.",
      period: "2024 — 2026",
      score: "GPA: Pursuing"
    },
    {
      degree: "B.Sc in Computer Science",
      institution: "Zulal Bhilajirao Patil College, Dhule, Maharashtra",
      period: "2021 — 2024",
      score: "CGPA: 8.85 / 10"
    }
  ]
};
