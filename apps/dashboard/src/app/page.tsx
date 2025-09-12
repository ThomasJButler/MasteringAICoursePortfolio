"use client";

import { Button } from "@/components/ui/button";
import OptimizedMatrixRain from "@/components/animations/OptimizedMatrixRain";
import AnimatedHero from "@/components/animations/AnimatedHero";
import AnimatedProjectCard from "@/components/animations/AnimatedProjectCard";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TechStackIcon from "@/components/ui/TechStackIcon";
import { animate as anime, stagger } from 'animejs';
import { useEffect, useRef } from "react";
import { animeEasings, durations } from "@/lib/easings";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Home() {
  const contestRef = useRef<HTMLDivElement>(null);
  const [contestSectionRef, isContestVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isContestVisible && !prefersReducedMotion && contestRef.current) {
      anime(contestRef.current, {
        opacity: [0, 1],
        scale: [0.9, 1],
        translateY: [30, 0],
        duration: durations.slow,
        easing: animeEasings.appleElastic,
      });

      anime(contestRef.current.querySelectorAll("h2, p, button"), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(100, { start: 200 }),
        easing: animeEasings.smoothOut,
      });
    }
  }, [isContestVisible, prefersReducedMotion]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Optimized Matrix Rain Background Effect */}
      <OptimizedMatrixRain />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Animated Hero Section */}
        <AnimatedHero />

        {/* Animated Projects Grid */}
        <section id="projects" className="container mx-auto px-4 py-20">
          <ProjectsHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Technologies Demonstrated
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Expertise in cutting-edge technologies valuable to employers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              "Gen AI", "Azure AI Foundry", "RAG pipelines", "Machine Learning", 
              "LLMs", "Python", "C#", "APIs", "OpenAI", "LangChain",
              "Frontend Development", "Backend Development", "TypeScript", "React"
            ].map((skill) => (
              <div 
                key={skill} 
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center transition-all duration-500 hover:border-gray-600/70 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className="p-4 bg-gray-800/50 rounded-full group-hover:bg-gray-700/50 transition-colors duration-300">
                    <TechStackIcon tech={skill} size={32} className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" showTooltip={false} />
                  </div>
                </div>
                
                {/* Text */}
                <div className="relative">
                  <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {skill}
                  </h3>
                </div>
                
                {/* Subtle highlight bar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-green-400/0 via-green-400/60 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Contest Banner */}
        <section ref={contestSectionRef} id="contest" className="container mx-auto px-4 py-20">
          <div 
            ref={contestRef}
            className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 rounded-lg p-8 text-center border border-green-500/30 relative overflow-hidden"
            style={{ opacity: 0 }}
          >
            <ContestGlow />
            <h2 className="text-3xl font-bold mb-4 text-green-400" style={{ opacity: 0 }}>
              🏆 Contest Entry: SQL Query Buddy
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto" style={{ opacity: 0 }}>
              Natural language to SQL with AI-powered optimisation, visual query builder, 
              and real-time performance analysis.
            </p>
            <Button 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transform-gpu"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => handleButtonHover(e.currentTarget)}
              onMouseLeave={(e) => handleButtonLeave(e.currentTarget)}
            >
              View Contest Project
            </Button>
          </div>
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
    id: "ai-code-generator",
    title: "AI Code Generator",
    description: "Natural language to code conversion with multi-language support",
    week: "Week 1",
    status: "upcoming",
    techStack: ["LangChain", "GPT-4o", "Tree-sitter"],
  },
  {
    id: "git-review-assistant",
    title: "Git Review Assistant",
    description: "AI-powered code review system with automated PR feedback",
    week: "Week 2",
    status: "upcoming",
    techStack: ["LangChain", "GitHub API", "FastAPI"],
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
    id: "sql-ball",
    title: "SQL-Ball",
    description: "Football data analytics with natural language queries and AI insights",
    week: "Contest",
    status: "in-progress",
    techStack: ["Supabase", "LangChain", "D3.js"],
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

function ProjectsHeader() {
  const [headerRef, isVisible] = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isVisible && !prefersReducedMotion && headerRef.current) {
      anime(headerRef.current, {
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: durations.slow,
        easing: animeEasings.appleEaseOut,
      });
    }
  }, [isVisible, prefersReducedMotion, headerRef]);

  return (
    <h2
      ref={headerRef}
      className="text-4xl font-bold text-center mb-12 text-green-400"
      style={{ opacity: 0 }}
    >
      Portfolio Projects
    </h2>
  );
}

function ContestGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!glowRef.current || prefersReducedMotion) return;

    anime(glowRef.current, {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      duration: durations.slowest * 4,
      easing: animeEasings.smoothInOut,
      loop: true,
    });
  }, [prefersReducedMotion]);

  return (
    <div
      ref={glowRef}
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent, rgba(0, 255, 0, 0.3), transparent)",
        backgroundSize: "200% 100%",
      }}
    />
  );
}

function handleButtonHover(button: HTMLElement) {
  anime(button, {
    scale: 1.05,
    duration: durations.fast,
    easing: animeEasings.smoothOut,
  });
}

function handleButtonLeave(button: HTMLElement) {
  anime(button, {
    scale: 1,
    duration: durations.normal,
    easing: animeEasings.appleSpring,
  });
}
