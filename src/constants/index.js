
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
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
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "LLM Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: html, // Using HTML icon as placeholder for Python
  },
  {
    name: "PyTorch",
    icon: css, // Using CSS icon as placeholder for PyTorch
  },
  {
    name: "LangChain",
    icon: javascript,
  },
  {
    name: "OpenAI",
    icon: reactjs,
  },
  {
    name: "Docker",
    icon: gsap,
  },
  {
    name: "Kubernetes",
    icon: framer,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure ML",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "FastAPI",
    icon: mui,
  },
  {
    name: "Apache Spark",
    icon: nodejs,
  },
  {
    name: "TensorBoard",
    icon: express,
  },
  {
    name: "GCP Vertex AI",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Terraform",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Senior ML Engineer",
    company_name: "Grand View Research US",
    icon: tekisky, // Using existing icon as placeholder
    iconBg: "#383E56",
    date: "Sep 2020 - Dec 2023",
    points: [
      "Created End-to-End Auto ML orchestration Platform with UI, enabling data upload from S3 bucket and training deep learning models with hyperparameter tuning (PyTorch) and monitoring (via TensorBoard).",
      "Developed AI Image Culling software, implementing face quality algorithm (MediaPipe) and removing duplicates, blurriness, background removal and blinking images.",
      "Architected researcher platform and developed custom-built Federated Machine Learning and Analytics Python packages.",
      "Managed Kubernetes clusters for containerizing ML models and deploying them to production, reducing deployment time by 80%.",
      "Designed automated Facebook ad system with GPT-3, boosting engagement rates by 35%.",
      "Developed customer segmentation using K-Means clustering with Python and Scikit-learn, improving marketing effectiveness by 20%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ayush's expertise in LLMs and AI automation helped us build a sophisticated research assistant that significantly improved our workflow efficiency.",
    name: "[PLACEHOLDER]",
    designation: "Research Director",
    company: "[PLACEHOLDER COMPANY]",
    image: firstTestimonial,
  },
  {
    testimonial:
      "The Auto ML platform Ayush developed reduced our model deployment time by 80% and improved our research capabilities tremendously.",
    name: "[PLACEHOLDER]",
    designation: "Data Science Manager",
    company: "[PLACEHOLDER COMPANY]",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Ayush's AI solutions and machine learning expertise have been instrumental in driving our business growth and operational efficiency.",
    name: "[PLACEHOLDER]",
    designation: "CTO",
    company: "[PLACEHOLDER COMPANY]",
    image: thirdTestimonial,
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
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "RAG",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Auto ML Orchestration Platform",
    description:
      "Created End-to-End Auto ML orchestration Platform with UI, enabling data upload from S3 bucket, training deep learning models with hyperparameter tuning (PyTorch) and monitoring via TensorBoard.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "TensorBoard",
        color: "green-text-gradient",
      },
      {
        name: "AWS S3",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Synthetic Data Generator with LLMs",
    description:
      "Built a tool using OpenAI's LLMs to generate schema-aligned synthetic data with label conditioning for ML model training. Deployed Llama 3 90b model on Google Vertex AI for domain-specific synthetic data generation.",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "Llama 3",
        color: "white-text-gradient",
      },
      {
        name: "GCP Vertex AI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };


