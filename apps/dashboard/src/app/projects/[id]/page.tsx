"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Award } from "lucide-react";
import MatrixRain from "@/components/animations/MatrixRain";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TechStackIcon from "@/components/ui/TechStackIcon";
import ImageGallery from "@/components/ui/ImageGallery";

const projectDetails = {
  "ai-code-generator": {
    title: "AI Code Generator",
    fullDescription: "An intelligent natural language to code conversion system that leverages advanced AI models to generate high-quality, well-structured code from plain English descriptions. Features support for multiple programming languages and frameworks.",
    week: "Week 1",
    status: "upcoming",
    techStack: ["LangChain", "GPT-4o", "Tree-sitter", "Python", "TypeScript"],
    learnings: [
      "Advanced prompt engineering for code generation tasks",
      "Multi-language code generation strategies",
      "AST parsing and code structure validation",
      "Context-aware code completion techniques",
      "Performance optimization for real-time generation"
    ],
    features: [
      "Natural language to code generation",
      "Multi-language support (Python, TypeScript, Java, C#)",
      "Test case generation for any function",
      "Code documentation generation",
      "Framework-specific code templates",
      "UK English code comments support",
      "Design pattern integration",
      "Code quality optimization"
    ],
    screenshots: {
      desktop: ["/screenshots/ai-code-generator-desktop-1.jpg", "/screenshots/ai-code-generator-desktop-2.jpg"],
      mobile: ["/screenshots/ai-code-generator-mobile-1.jpg", "/screenshots/ai-code-generator-mobile-2.jpg"],
      structure: ["/screenshots/ai-code-generator-architecture.jpg"]
    },
    implementation: "Coming soon...",
    github: "https://github.com/ThomasJButler/ai-code-generator",
    demo: null 
  },
  "git-review-assistant": {
    title: "Git Review Assistant",
    fullDescription: "An AI-powered code review system that provides intelligent feedback on pull requests, identifies potential issues, and suggests improvements. Integrates seamlessly with Git workflows for automated code quality assurance.",
    week: "Week 2",
    status: "upcoming",
    techStack: ["LangChain", "GPT-4o", "GitHub API", "Python", "FastAPI"],
    learnings: [
      "Automated code review methodologies",
      "Git integration patterns and webhook handling",
      "Static code analysis with AI enhancement",
      "Security vulnerability detection in code",
      "Performance bottleneck identification"
    ],
    features: [
      "Automated pull request reviews",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Code style consistency checking",
      "Git commit message improvement",
      "Refactoring recommendations",
      "Test coverage analysis",
      "Documentation gap identification"
    ],
    screenshots: {
      desktop: ["/screenshots/git-review-assistant-desktop-1.jpg", "/screenshots/git-review-assistant-desktop-2.jpg"],
      mobile: ["/screenshots/git-review-assistant-mobile-1.jpg"],
      structure: ["/screenshots/git-review-assistant-workflow.jpg"]
    },
    implementation: "Coming soon...",
    github: "https://github.com/ThomasJButler/git-review-assistant",
    demo: null
  },
  "rag-chatbot": {
    title: "RAG Chatbot",
    fullDescription: "A sophisticated document-based Q&A system that uses Retrieval-Augmented Generation to provide accurate, contextual responses with source citations. Implements semantic search across multiple documents.",
    week: "Week 3",
    status: "upcoming",
    techStack: ["Pinecone", "OpenAI", "LangChain", "FastAPI", "React"],
    learnings: [
      "Vector database design and optimization strategies",
      "Retrieval-Augmented Generation (RAG) implementation patterns",
      "Embedding generation and similarity search algorithms",
      "Document chunking and preprocessing techniques",
      "Context window management for large documents"
    ],
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
    screenshots: {
      desktop: ["/screenshots/rag-chatbot-desktop-1.jpg", "/screenshots/rag-chatbot-desktop-2.jpg"],
      mobile: ["/screenshots/rag-chatbot-mobile-1.jpg", "/screenshots/rag-chatbot-mobile-2.jpg"],
      structure: ["/screenshots/rag-chatbot-architecture.jpg"]
    },
    implementation: "Coming soon...",
    github: "https://github.com/ThomasJButler/rag-chatbot",
    demo: null
  },
  "multi-agent-system": {
    title: "Multi-Agent System",
    fullDescription: "A collaborative AI system where multiple specialized agents work together to solve complex tasks. Features real-time visualization of agent communication and decision-making processes.",
    week: "Week 4",
    status: "upcoming",
    techStack: ["LangGraph", "Multiple LLMs", "WebSocket", "D3.js", "FastAPI"],
    learnings: [
      "Multi-agent system architecture and coordination patterns",
      "LangGraph workflow orchestration and state management",
      "Real-time communication between distributed AI agents",
      "Load balancing and failover strategies for LLM requests",
      "Visualization of complex agent interaction networks"
    ],
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
    screenshots: {
      desktop: ["/screenshots/multi-agent-system-desktop-1.jpg", "/screenshots/multi-agent-system-desktop-2.jpg"],
      mobile: ["/screenshots/multi-agent-system-mobile-1.jpg"],
      structure: ["/screenshots/multi-agent-system-flow.jpg", "/screenshots/multi-agent-system-architecture.jpg"]
    },
    implementation: "Coming soon...",
    github: "https://github.com/ThomasJButler/multi-agent-system",
    demo: null
  },
  "workflow-agent": {
    title: "Dev Workflow Agent",
    fullDescription: "An intelligent automation system for development workflows using Model Context Protocol (MCP). Streamlines CI/CD, documentation, and deployment processes.",
    week: "Week 5",
    status: "upcoming",
    techStack: ["MCP", "GitHub Actions", "Docker", "Node.js", "Python"],
    learnings: [
      "Model Context Protocol (MCP) implementation and best practices",
      "CI/CD pipeline automation with AI-driven optimizations",
      "Containerization strategies for AI development workflows",
      "Infrastructure as Code for scalable AI deployments",
      "Performance monitoring and alerting for production AI systems"
    ],
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
    screenshots: {
      desktop: ["/screenshots/workflow-agent-desktop-1.jpg", "/screenshots/workflow-agent-desktop-2.jpg"],
      mobile: ["/screenshots/workflow-agent-mobile-1.jpg"],
      structure: ["/screenshots/workflow-agent-pipeline.jpg"]
    },
    implementation: "Coming soon...",
    github: "https://github.com/ThomasJButler/workflow-agent",
    demo: null
  },
  "sql-ball": {
    title: "SQL-Ball",
    fullDescription: "An award-winning football data analytics platform that combines natural language queries with comprehensive match statistics. Features AI-powered insights, player performance analysis, and predictive modeling using Supabase for real-time data.",
    week: "Contest",
    status: "in-progress",
    techStack: ["Supabase", "LangChain", "OpenAI", "D3.js", "React", "PostgreSQL"],
    learnings: [
      "Sports data analytics and statistical modeling",
      "Real-time database integration with Supabase",
      "Natural language to SQL for sports queries",
      "Predictive analytics with machine learning",
      "Interactive sports data visualization techniques"
    ],
    features: [
      "Natural language football statistics queries",
      "Player performance analytics dashboard",
      "Match prediction algorithms",
      "Team comparison and analysis tools",
      "Real-time match data integration",
      "Interactive data visualizations",
      "Fantasy football insights",
      "Historical trend analysis"
    ],
    screenshots: {
      desktop: ["/screenshots/sql-ball-desktop-1.jpg", "/screenshots/sql-ball-desktop-2.jpg", "/screenshots/sql-ball-desktop-3.jpg"],
      mobile: ["/screenshots/sql-ball-mobile-1.jpg", "/screenshots/sql-ball-mobile-2.jpg"],
      structure: ["/screenshots/sql-ball-architecture.jpg", "/screenshots/sql-ball-data-flow.jpg"]
    },
    implementation: "Currently in development. Targeting contest submission deadline.",
    github: "https://github.com/ThomasJButler/sql-ball",
    demo: null
  },
  "portfolio-dashboard": {
    title: "Portfolio Dashboard",
    fullDescription: "This stunning portfolio website showcasing all AI projects from the bootcamp. Features modern animations, responsive design, and an immersive Matrix-themed experience.",
    week: "Ongoing",
    status: "in-progress",
    techStack: ["Next.js 15", "Tailwind CSS", "Anime.js", "Framer Motion", "TypeScript"],
    learnings: [
      "Next.js 15 App Router and server-side rendering optimizations",
      "Advanced CSS animations and performance considerations",
      "TypeScript strict mode and type safety best practices",
      "Responsive design patterns for modern web applications",
      "Web accessibility and inclusive design principles"
    ],
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
    screenshots: {
      desktop: ["/screenshots/portfolio-dashboard-desktop-1.jpg", "/screenshots/portfolio-dashboard-desktop-2.jpg"],
      mobile: ["/screenshots/portfolio-dashboard-mobile-1.jpg", "/screenshots/portfolio-dashboard-mobile-2.jpg"],
      structure: ["/screenshots/portfolio-dashboard-structure.jpg"]
    },
    implementation: "You're looking at it! This portfolio is built with cutting-edge web technologies.",
    github: "https://github.com/ThomasJButler/MasteringAICoursePortfolio",
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-green-400 transition-all duration-500">
              {project.title}
            </h1>
            <span className={`px-3 py-1 rounded-md text-sm transition-all duration-200 hover:scale-110 ${statusColors[project.status as keyof typeof statusColors]}`}>
              {project.status === "in-progress" ? "In Progress" : project.status === "completed" ? "Completed" : "Upcoming"}
            </span>
          </div>
          <p className="text-xl text-gray-400 hover:text-gray-300 transition-colors duration-200">{project.week}</p>
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Overview</h2>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-green-500/30 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-200">{project.fullDescription}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="group flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg hover:border-green-400/50 transition-all duration-300 hover:bg-gray-800/70 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
              >
                <TechStackIcon tech={tech} size={24} className="group-hover:scale-110 transition-transform duration-200" showTooltip={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-200">
                <span className="text-green-400 mt-1 group-hover:text-cyan-400 transition-colors duration-200">▸</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        {project.screenshots && (
          <>
            {/* Desktop Screenshots */}
            {project.screenshots.desktop && project.screenshots.desktop.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">Desktop Screenshots</h2>
                <ImageGallery 
                  images={project.screenshots.desktop} 
                  title={`${project.title} Desktop`}
                />
              </div>
            )}

            {/* Mobile Screenshots */}
            {project.screenshots.mobile && project.screenshots.mobile.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">Mobile Screenshots</h2>
                <ImageGallery 
                  images={project.screenshots.mobile} 
                  title={`${project.title} Mobile`}
                />
              </div>
            )}

            {/* Architecture/Structure Diagrams */}
            {project.screenshots.structure && project.screenshots.structure.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">Project Structure</h2>
                <ImageGallery 
                  images={project.screenshots.structure} 
                  title={`${project.title} Architecture`}
                />
              </div>
            )}
          </>
        )}

        {/* Learning & Development Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
            <Award className="text-cyan-400" size={24} />
            Learning & Development
          </h2>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/30 transition-all duration-300">
            <p className="text-gray-300 mb-4 text-sm">
              Key learning outcomes and technical insights gained from this project:
            </p>
            <div className="grid gap-3">
              {project.learnings?.map((learning, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <span className="text-green-400 mt-1 group-hover:text-cyan-400 transition-colors duration-200">▸</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{learning}</span>
                </div>
              )) || (
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span className="text-gray-300">Learning outcomes will be documented as the project develops</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Implementation Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Implementation Status</h2>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-green-500/30 transition-all duration-300">
            <p className="text-gray-300">{project.implementation}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <Button
              asChild
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20"
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
              className="bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            >
              <Link href={project.demo} target={project.demo === "/" ? "_self" : "_blank"}>
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}