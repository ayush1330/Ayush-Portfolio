
import {
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  gearXpert,
  project2,
  project3,
  apache_spark,
  aws,
  docker,
  fastapi,
  git,
  huggingface,
  kubernetes,
  langchain,
  mongodb,
  openai,
  postgresql,
  python,
  pytorch,
  tensorflow,
  typescript,
  vertex_ai,
} from '../assets'

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineering",
    icon: web,
  },
  {
    title: "ML Engineering",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: backend,
  },
  {
    title: "MLOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Pinecone",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  {
    name: "LangGraph",
    icon: langchain,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Apache Spark",
    icon: apache_spark,
  },
  {
    name: "Vertex AI",
    icon: vertex_ai,
  },
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "AI Innovations Inc",
    location: "San Francisco, CA",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jan 2018 - Dec 2018",
    points: [
      "📊 Analyzed large datasets to extract meaningful insights and patterns.",
      "🤖 Developed predictive models using machine learning algorithms.",
      "📈 Created data visualizations and reports for stakeholders.",
      "🔬 Conducted statistical analysis and hypothesis testing.",
    ],
    position: "right"
  },
  {
    title: "Senior ML Engineer",
    company_name: "Grand View Research US",
    location: "New York, NY",
    icon: tekisky,
    iconBg: "#666666",
    date: "Sep 2020 - Dec 2023",
    points: [
      "🚀 Created End-to-End Auto ML orchestration Platform with UI, enabling data upload from S3 bucket and training deep learning models with hyperparameter tuning (PyTorch) and monitoring (via TensorBoard).",
      "🤖 Developed AI Image Culling software, implementing face quality algorithm (MediaPipe) and removing duplicates, blurriness, background removal and blinking images.",
      "🏗️ Architected researcher platform and developed custom-built Federated Machine Learning and Analytics Python packages.",
      "⚡ Managed Kubernetes clusters for containerizing ML models and deploying them to production, reducing deployment time by 80%.",
      "📈 Designed automated Facebook ad system with GPT-3, boosting engagement rates by 35%.",
      "🎯 Developed customer segmentation using K-Means clustering with Python and Scikit-learn, improving marketing effectiveness by 20%.",
    ],
    position: "left"
  },
  {
    title: "ML Engineer",
    company_name: "TechCorp Solutions",
    location: "Seattle, WA",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jan 2019 - Aug 2020",
    points: [
      "🔬 Developed machine learning models for predictive analytics and data insights.",
      "📊 Implemented data preprocessing pipelines and feature engineering workflows.",
      "🤖 Built and deployed ML models for production environments.",
      "📈 Collaborated with cross-functional teams to deliver data-driven solutions.",
    ],
    position: "left"
  },
  {
    title: "Research Intern",
    company_name: "University Lab",
    location: "Boston, MA",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jun 2017 - Dec 2017",
    points: [
      "🔬 Conducted research on machine learning algorithms and neural networks.",
      "📚 Published research papers on deep learning applications.",
      "🎓 Collaborated with professors and graduate students on research projects.",
      "💡 Developed innovative solutions for complex computational problems.",
    ],
    position: "right"
  },
];

const projects = [
  {
    name: "AI Research Assistant with RAG & Agents",
    description:
      "Developed a smart assistant using LangChain, LangGraph, OpenAI LLMs, and vector search to answer complex queries with agent-based reasoning and document retrieval. Built custom workflows with LlamaIndex and ReAct agents.",
    tags: [
      {
        name: "LangChain",
        color: "text-primary",
      },
      {
        name: "OpenAI",
        color: "text-secondary",
      },
      {
        name: "Python",
        color: "text-accent",
      },
      {
        name: "RAG",
        color: "text-primary-light",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/ayush1330/ai-research-assistant",
    live_demo_link: "https://ai-assistant-demo.vercel.app",
    buttonType: "Live Demo",
    impact: "Reduced research time by 60% for 50+ users",
  },
  {
    name: "Auto ML Orchestration Platform",
    description:
      "Created End-to-End Auto ML orchestration Platform with UI, enabling data upload from S3 bucket, training deep learning models with hyperparameter tuning (PyTorch) and monitoring via TensorBoard.",
    tags: [
      {
        name: "PyTorch",
        color: "text-primary",
      },
      {
        name: "TensorBoard",
        color: "text-primary-light",
      },
      {
        name: "AWS S3",
        color: "text-accent",
      },
      {
        name: "Python",
        color: "text-secondary",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/ayush1330/auto-ml-platform",
    live_demo_link: "https://auto-ml-demo.vercel.app",
    buttonType: "Case Study",
    impact: "Reduced model deployment time by 80%",
  },
  {
    name: "Synthetic Data Generator with LLMs",
    description:
      "Built a tool using OpenAI's LLMs to generate schema-aligned synthetic data with label conditioning for ML model training. Deployed Llama 3 90b model on Google Vertex AI for domain-specific synthetic data generation.",
    tags: [
      {
        name: "OpenAI",
        color: "text-primary",
      },
      {
        name: "Llama 3",
        color: "text-secondary",
      },
      {
        name: "GCP Vertex AI",
        color: "text-primary-light",
      },
      {
        name: "Python",
        color: "text-accent",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ayush1330/synthetic-data-generator",
    live_demo_link: "https://synthetic-data-demo.vercel.app",
    buttonType: "Case Study",
    impact: "Generated 1M+ synthetic records for ML training",
  },
];

export { services, technologies, experiences, projects };


