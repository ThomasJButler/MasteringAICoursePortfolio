"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MatrixRain from "@/components/animations/MatrixRain";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Matrix Rain Background Effect */}
      <MatrixRain />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 py-20 text-center pt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AI Course Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Mastering Generative AI & Agents for Developers
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button 
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
              <Link href="https://github.com/tombutler" target="_blank">
                GitHub
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="container mx-auto px-4 py-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-green-400"
          >
            Portfolio Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contest Banner */}
        <section id="contest" className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 rounded-lg p-8 text-center border border-green-500/30"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-400">
              🏆 Contest Entry: SQL Query Buddy
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Natural language to SQL with AI-powered optimisation, visual query builder, 
              and real-time performance analysis.
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
              View Contest Project
            </Button>
          </motion.div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  week: string;
  status: "completed" | "in-progress" | "upcoming";
  techStack: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "ai-developer-agent",
    title: "AI Developer Agent",
    description: "Intelligent code generation and review system with Git integration",
    week: "Week 1-2",
    status: "upcoming",
    techStack: ["LangChain", "GPT-4o", "Tree-sitter"],
  },
  {
    id: "rag-chatbot",
    title: "RAG Chatbot",
    description: "Document-based Q&A system with semantic search and citations",
    week: "Week 3",
    status: "upcoming",
    techStack: ["Pinecone", "OpenAI", "LangChain"],
  },
  {
    id: "multi-agent-system",
    title: "Multi-Agent System",
    description: "Collaborative AI agents for complex task orchestration",
    week: "Week 4",
    status: "upcoming",
    techStack: ["LangGraph", "Multiple LLMs", "WebSocket"],
  },
  {
    id: "workflow-agent",
    title: "Dev Workflow Agent",
    description: "Automate development workflows with MCP integration",
    week: "Week 5",
    status: "upcoming",
    techStack: ["MCP", "GitHub Actions", "Docker"],
  },
  {
    id: "sql-query-buddy",
    title: "SQL Query Buddy",
    description: "NL to SQL conversion with query optimisation and visualisation",
    week: "Contest",
    status: "in-progress",
    techStack: ["LangChain", "ChromaDB", "D3.js"],
  },
  {
    id: "portfolio-dashboard",
    title: "Portfolio Dashboard",
    description: "This stunning portfolio showcasing all AI projects",
    week: "Ongoing",
    status: "in-progress",
    techStack: ["Next.js 15", "Tailwind", "Anime.js"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const statusColors = {
    completed: "border-green-500 bg-green-500/10",
    "in-progress": "border-cyan-500 bg-cyan-500/10",
    upcoming: "border-gray-500 bg-gray-500/10",
  };

  const statusText = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  };

  return (
    <motion.div 
      className="group relative border border-gray-800 rounded-lg p-6 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:border-green-500/50"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 -mt-1 -mr-1">
        <span className={`inline-block px-2 py-1 text-xs rounded-md ${statusColors[project.status]}`}>
          {statusText[project.status]}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-green-400 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-sm text-gray-500 mb-3">{project.week}</p>
      
      <p className="text-gray-300 mb-4 text-sm">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <Link href={`/projects/${project.id}`}>
        <Button size="sm" className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50">
          View Project →
        </Button>
      </Link>
    </motion.div>
  );
}
