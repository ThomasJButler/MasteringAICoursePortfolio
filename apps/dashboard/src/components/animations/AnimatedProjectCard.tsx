"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Project {
  id: string;
  title: string;
  description: string;
  week: string;
  status: "completed" | "in-progress" | "upcoming";
  techStack: string[];
  link?: string;
}

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}

export default function AnimatedProjectCard({ project, index }: AnimatedProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ 
    threshold: 0.2,
    freezeOnceVisible: true 
  });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  const statusColors = {
    completed: "border-green-500 bg-green-500/10",
    "in-progress": "border-cyan-500 bg-cyan-500/10",
    upcoming: "border-gray-500 bg-gray-500/10",
  };

  const statusGlowColors = {
    completed: "rgba(0, 255, 0, 0.5)",
    "in-progress": "rgba(0, 255, 255, 0.5)",
    upcoming: "rgba(128, 128, 128, 0.3)",
  };

  const statusText = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  };

  const animateCardEntrance = useCallback(() => {
    if (!cardRef.current) return;

    anime(cardRef.current, {
        opacity: [0, 1],
      translateY: [50, 0],
      rotateX: [-15, 0],
      duration: durations.slow,
      delay: index * durations.stagger,
      easing: animeEasings.appleEaseOut
      });

    if (contentRef.current) {
      anime(contentRef.current.children, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(50, { start: index * durations.stagger + 200
      }),
        easing: animeEasings.smoothOut,
      });
    }

    if (techStackRef.current) {
      anime(techStackRef.current.children, {
        opacity: [0, 1],
        scale: [0, 1],
        duration: durations.fast,
        delay: stagger(30, { start: index * durations.stagger + 400
      }),
        easing: animeEasings.appleElastic,
      });
    }
  }, [index]);

  useEffect(() => {
    if (isVisible && !hasAnimated.current && !prefersReducedMotion) {
      hasAnimated.current = true;
      animateCardEntrance();
    }
  }, [isVisible, prefersReducedMotion, animateCardEntrance]);

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    setIsHovered(true);

    const card = cardRef.current;
    if (!card) return;

    anime(card, {
        translateY: -8,
      scale: 1.02,
      duration: durations.normal,
      easing: animeEasings.appleEaseOut
      });

    anime(card, {
        boxShadow: [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "0 20px 40px -10px rgba(0, 255, 0, 0.2)"
      ],
      duration: durations.normal,
      easing: animeEasings.smoothOut
      });

    if (glowRef.current) {
      anime(glowRef.current, {
        opacity: [0, 0.3],
        scale: [0.8, 1],
        duration: durations.normal,
        easing: animeEasings.smoothOut
      });
    }

    if (buttonRef.current) {
      anime(buttonRef.current, {
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        scale: 1.05,
        duration: durations.fast,
        easing: animeEasings.smoothOut
      });
    }

    if (techStackRef.current) {
      anime(techStackRef.current.children, {
        translateY: -2,
        duration: durations.fast,
        delay: stagger(20),
        ease: animeEasings.bounce,
      });
    }
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    setIsHovered(false);

    const card = cardRef.current;
    if (!card) return;

    anime(card, {
        translateY: 0,
      scale: 1,
      duration: durations.normal,
      ease: animeEasings.appleSpring
      });

    anime(card, {
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      duration: durations.normal,
      easing: animeEasings.smoothOut
      });

    if (glowRef.current) {
      anime(glowRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: durations.normal,
        easing: animeEasings.smoothOut
      });
    }

    if (buttonRef.current) {
      anime(buttonRef.current, {
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        scale: 1,
        duration: durations.fast,
        easing: animeEasings.smoothOut,
      });
    }

    if (techStackRef.current) {
      anime(techStackRef.current.children, {
        translateY: 0,
        duration: durations.fast,
        delay: stagger(20),
        easing: animeEasings.smoothOut
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !isHovered) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    anime(card, {
      rotateX,
      rotateY,
      duration: durations.instant,
      ease: "linear",
    });

    if (glowRef.current) {
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, ${statusGlowColors[project.status]}, transparent 60%)`;
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        className="relative border border-gray-800 rounded-lg p-6 bg-gray-900/50 transition-colors duration-300 hover:border-green-500/50"
        style={{ 
          opacity: 0,
          transformStyle: "preserve-3d",
          transform: "translateZ(0)",
        }}
      >
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ 
            opacity: 0,
            background: `radial-gradient(circle at 50% 50%, ${statusGlowColors[project.status]}, transparent 60%)`,
          }}
        />

        <div ref={contentRef}>
          <div className="absolute top-0 right-0 -mt-1 -mr-1">
            <span 
              className={`inline-block px-2 py-1 text-xs rounded-md ${statusColors[project.status]}`}
              style={{ opacity: 0 }}
            >
              {statusText[project.status]}
            </span>
          </div>
          
          <h3 
            className="text-xl font-semibold mb-2 text-green-400 transition-colors"
            style={{ opacity: 0 }}
          >
            {project.title}
          </h3>
          
          <p 
            className="text-sm text-gray-500 mb-3"
            style={{ opacity: 0 }}
          >
            {project.week}
          </p>
          
          <p 
            className="text-gray-300 mb-4 text-sm"
            style={{ opacity: 0 }}
          >
            {project.description}
          </p>
        </div>
        
        <div ref={techStackRef} className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded transform-gpu"
              style={{ opacity: 0 }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link href={`/projects/${project.id}`}>
          <Button 
            ref={buttonRef}
            size="sm" 
            className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 transform-gpu"
          >
            View Project →
          </Button>
        </Link>
      </div>
    </div>
  );
}