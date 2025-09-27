
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
    id: "projects",
    title: "Projects",
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
    title: "AI Engineer",
    company_name: "TECHCOSPACE",
    location: "UK",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jul 2024 - Aug 2025",
    points: [
      "🤖 Designed custom retrieval workflows with agent for dynamic chunking; improved query processing efficiency by 40%.",
      "⚡ Fine-tuned 442M parameter models on Vertex AI, optimizing performance for specialized domain tasks.",
      "🔧 Implemented advanced RAG systems with dynamic context window management.",
      "📊 Developed agentic workflows for automated data processing and analysis.",
    ],
    position: "left"
  },
  {
    title: "MSc. Data Science",
    company_name: "IU Hochschule",
    location: "Berlin, DE",
    icon: tekisky,
    iconBg: "#666666",
    date: "APR 2023 - APR 2025",
    points: [
      "📊 Master's degree in Data Science with a focus on AI and Machine Learning.",
      "🤖 Specialized in LLMs, RAG, and Agentic workflows.",
      "📈 Developed end-to-end solutions for data-driven products.",
      "🔬 Conducted research on LLMs and Agentic workflows.",
    ],
    position: "right"
  },
  {
    title: "Senior ML Engineer",
    company_name: "Grand View Research",
    location: "San Francisco, CA",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jan 2022 - Dec 2023",
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
    company_name: "Grand View Research",
    location: "San Francisco, CA",
    icon: tekisky,
    iconBg: "#666666",
    date: "Sep 2020 - Dec 2021",
    points: [
      "🔬 Developed machine learning models for predictive analytics and data insights.",
      "📊 Implemented data preprocessing pipelines and feature engineering workflows.",
      "🤖 Built and deployed ML models for production environments.",
      "📈 Collaborated with cross-functional teams to deliver data-driven solutions.",
    ],
    position: "left"
  },
  {
    title: "BTech. ECE",
    company_name: "JIIT",
    location: "Noida, IN",
    icon: tekisky,
    iconBg: "#666666",
    date: "July 2016 - July 2020",
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
    name: "AI Podcast Generator",
    description:
      "An multi-agent application that creates personalized podcast content using advanced language models and text-to-speech technology. Built with LangGraph, it integrates various AI components to generate engaging podcast episodes.",
    tags: [
      {
        name: "Agents",
        color: "text-primary",
      },
      {
        name: "LangGraph",
        color: "text-secondary",
      },
      {
        name: "OpenAI",
        color: "text-accent",
      },
      {
        name: "TTS",
        color: "text-primary-light",
      },
      {
        name: "FAISS",
        color: "text-primary-light",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/ayush1330/ai_podcast",
    live_demo_link: "",
    buttonType: "Live Demo",
    impact: "Generated personalized podcast content for enhanced user engagement",
  },
  {
    name: "LlamaIndex DynamicK Agent",
    description:
      "Developed an agentic application utilizing the LlamaIndex framework to dynamically adjust the number of retrieved chunks (k) in Retrieval-Augmented Generation (RAG) systems. This approach optimizes context window sizing based on query complexity, enhancing response accuracy and efficiency.",
    tags: [
      {
        name: "LlamaIndex",
        color: "text-primary",
      },
      {
        name: "RAG",
        color: "text-secondary",
      },
      {
        name: "Python",
        color: "text-accent",
      },
      {
        name: "Agents",
        color: "text-primary-light",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/ayush1330/LlamaIndex-DynamicK-Agent",
    live_demo_link: "",
    buttonType: "Case Study",
    impact: "Improved response accuracy by 30%, enhanced computational efficiency",
  },
  {
    name: "Synthetic Data for LLM Reasoning",
    description:
      "Built a Python framework using MuSR methodology to generate synthetic tax law cases and evaluate LLM reasoning capabilities. Created scenarios to assess model performance in specialized domains.",
    tags: [
      {
        name: "Python",
        color: "text-primary",
      },
      {
        name: "MuSR",
        color: "text-secondary",
      },
      {
        name: "LLM Reasoning",
        color: "text-primary-light",
      },
      {
        name: "Synthetic Data",
        color: "text-accent",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ayush1330/LLM-Reasoning-Model-Synthetic-data",
    live_demo_link: "",
    buttonType: "Case Study",
    impact: "Generated 500+ tax scenarios, improved reasoning accuracy by 25%",
  },
];

export { services, technologies, experiences, projects };


