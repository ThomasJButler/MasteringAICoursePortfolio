"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import MatrixRain from "@/components/animations/MatrixRain";
import Navigation from "@/components/layout/Navigation";

const projectDetails = {
  "ai-developer-agent": {
    title: "AI Developer Agent",
    fullDescription: "An intelligent code generation and review system that leverages advanced AI models to assist developers in writing, reviewing, and optimizing code. Features Git integration for automated PR reviews and test generation capabilities.",
    week: "Week 1-2",
    status: "upcoming",
    techStack: ["LangChain", "GPT-4o", "Tree-sitter", "Python", "TypeScript"],
    features: [
      "Natural language to code generation",
      "Automated code review with actionable suggestions",
      "Test case generation for any function",
      "Performance optimization recommendations",
      "Git PR integration for automated reviews",
      "UK English code comments support",
      "Design pattern recognition and suggestions",
      "Security vulnerability detection"
    ],
    implementation: "Coming soon...",
    github: "https://github.com/tombutler/ai-developer-agent",
    demo: null
  },
  "rag-chatbot": {
    title: "RAG Chatbot",
    fullDescription: "A sophisticated document-based Q&A system that uses Retrieval-Augmented Generation to provide accurate, contextual responses with source citations. Implements semantic search across multiple documents.",
    week: "Week 3",
    status: "upcoming",
    techStack: ["Pinecone", "OpenAI", "LangChain", "FastAPI", "React"],
    features: [
      "Multi-document ingestion and processing",
      "Semantic search using vector embeddings",
      "Contextual response generation with GPT-4",
      "Source citation and highlighting",
      "Conversation memory and context retention",
      "Confidence scoring for responses",
      "Multi-language document support",
      "Document summarization capabilities"
    ],
    implementation: "Coming soon...",
    github: "https://github.com/tombutler/rag-chatbot",
    demo: null
  },
  "multi-agent-system": {
    title: "Multi-Agent System",
    fullDescription: "A collaborative AI system where multiple specialized agents work together to solve complex tasks. Features real-time visualization of agent communication and decision-making processes.",
    week: "Week 4",
    status: "upcoming",
    techStack: ["LangGraph", "Multiple LLMs", "WebSocket", "D3.js", "FastAPI"],
    features: [
      "Research agent for web searching and data gathering",
      "Code agent for implementation tasks",
      "Review agent for quality assurance",
      "Orchestrator for task coordination",
      "Real-time agent communication visualization",
      "Task delegation optimization",
      "Agent performance metrics dashboard",
      "Collaborative decision-making algorithms"
    ],
    implementation: "Coming soon...",
    github: "https://github.com/tombutler/multi-agent-system",
    demo: null
  },
  "workflow-agent": {
    title: "Dev Workflow Agent",
    fullDescription: "An intelligent automation system for development workflows using Model Context Protocol (MCP). Streamlines CI/CD, documentation, and deployment processes.",
    week: "Week 5",
    status: "upcoming",
    techStack: ["MCP", "GitHub Actions", "Docker", "Node.js", "Python"],
    features: [
      "Automated task execution",
      "CI/CD pipeline generation",
      "Smart documentation generation",
      "Code formatting and linting automation",
      "Deployment automation with rollback",
      "Custom workflow builder UI",
      "Template marketplace integration",
      "Performance benchmarking tools"
    ],
    implementation: "Coming soon...",
    github: "https://github.com/tombutler/workflow-agent",
    demo: null
  },
  "sql-query-buddy": {
    title: "SQL Query Buddy",
    fullDescription: "An award-winning natural language to SQL conversion tool with AI-powered optimization. Features a visual query builder and real-time performance analysis for both beginners and experts.",
    week: "Contest",
    status: "in-progress",
    techStack: ["LangChain", "ChromaDB", "D3.js", "FastAPI", "PostgreSQL"],
    features: [
      "Natural language to SQL conversion",
      "AI-powered query optimization",
      "Visual drag-and-drop query builder",
      "Real-time query execution plans",
      "Performance simulation and analysis",
      "Multi-dialect support (PostgreSQL, MySQL, SQLite)",
      "Query history with performance tracking",
      "Collaborative query sharing and improvement"
    ],
    implementation: "Currently in development. Targeting contest submission deadline.",
    github: "https://github.com/tombutler/sql-query-buddy",
    demo: null
  },
  "portfolio-dashboard": {
    title: "Portfolio Dashboard",
    fullDescription: "This stunning portfolio website showcasing all AI projects from the bootcamp. Features modern animations, responsive design, and an immersive Matrix-themed experience.",
    week: "Ongoing",
    status: "in-progress",
    techStack: ["Next.js 15", "Tailwind CSS", "Anime.js", "Framer Motion", "TypeScript"],
    features: [
      "Matrix rain animation background",
      "Smooth scroll navigation",
      "Project showcase with detail pages",
      "Loading animations and transitions",
      "Responsive mobile navigation",
      "Dark theme with Matrix aesthetic",
      "Performance optimized",
      "SEO optimized"
    ],
    implementation: "You're looking at it! This portfolio is built with cutting-edge web technologies.",
    github: "https://github.com/tombutler/MasteringAICoursePortfolio",
    demo: "/"
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <MatrixRain />
        <Navigation />
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Button onClick={() => router.push("/")} className="bg-green-500 hover:bg-green-600 text-black">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const statusColors = {
    completed: "text-green-400 bg-green-500/10",
    "in-progress": "text-cyan-400 bg-cyan-500/10",
    upcoming: "text-gray-400 bg-gray-500/10",
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MatrixRain />
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 py-32">
        {/* Back Button */}
        <Button
          onClick={() => router.push("/")}
          variant="ghost"
          className="mb-8 text-gray-400 hover:text-green-400"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <span className={`px-3 py-1 rounded-md text-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
              {project.status === "in-progress" ? "In Progress" : project.status === "completed" ? "Completed" : "Upcoming"}
            </span>
          </div>
          <p className="text-xl text-gray-400">{project.week}</p>
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 border border-green-500/30 text-gray-300 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-400 mt-1">▸</span>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Implementation Status</h2>
          <p className="text-gray-300">{project.implementation}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <Button
              asChild
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
            >
              <Link href={project.github} target="_blank">
                <Github className="mr-2" size={20} />
                View on GitHub
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              <Link href={project.demo} target={project.demo === "/" ? "_self" : "_blank"}>
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}