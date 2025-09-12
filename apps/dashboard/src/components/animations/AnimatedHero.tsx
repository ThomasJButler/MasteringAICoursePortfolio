"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { animate as anime, stagger, createTimeline, utils } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Award, X } from "lucide-react";

export default function AnimatedHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [showCertificate, setShowCertificate] = useState(false);

  const createFloatingParticles = useCallback(() => {
    if (!particlesRef.current || prefersReducedMotion) return;

    const colors = ["#00ff00", "#00ffff", "#00ff88"];
    const particles = 15;

    for (let i = 0; i < particles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.position = "absolute";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = "0";
      particle.style.pointerEvents = "none";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
      particlesRef.current.appendChild(particle);

      anime(particle, {
        translateX: () => utils.random(-100, 100),
        translateY: () => utils.random(-100, 100),
        opacity: [
          { value: 0, duration: 0 },
          { value: 0.8, duration: durations.normal },
          { value: 0, duration: durations.slow }
        ],
        scale: [
          { value: 0, duration: 0 },
          { value: utils.random(1, 2), duration: durations.normal },
          { value: 0, duration: durations.slow }
        ],
        duration: durations.slowest * 3,
        delay: utils.random(0, durations.slowest),
        loop: true,
        easing: animeEasings.smoothInOut
      });
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeline = createTimeline({
      playbackEase: animeEasings.appleEaseOut,
    });

    if (titleRef.current) {
      const titleText = titleRef.current.textContent || "";
      titleRef.current.innerHTML = "";
      titleRef.current.style.opacity = "1";

      const words = titleText.split(" ");
      words.forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.marginRight = "0.3em";
        
        word.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          charSpan.style.display = "inline-block";
          charSpan.style.opacity = "0";
          charSpan.style.transform = "translateY(30px) rotateX(-90deg)";
          charSpan.className = "bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent";
          wordSpan.appendChild(charSpan);
        });
        
        titleRef.current?.appendChild(wordSpan);
      });

      timeline.add(
        titleRef.current.querySelectorAll("span span"),
        {
          opacity: [0, 1],
          translateY: [30, 0],
          rotateX: [-90, 0],
          duration: durations.slow,
          delay: stagger(30, { from: "center" }),
          easing: animeEasings.appleSpring,
        }
      );
    }

    if (subtitleRef.current) {
      timeline.add(
        subtitleRef.current,
        {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: durations.normal,
          easing: animeEasings.smoothOut,
        },
        "-=400"
      );
    }

    if (buttonsRef.current) {
      timeline.add(
        buttonsRef.current.children,
        {
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.8, 1],
          duration: durations.normal,
          delay: stagger(100),
          easing: animeEasings.appleElastic,
        },
        "-=300"
      );
    }

    createFloatingParticles();

    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;

    return () => {
      if (title) utils.remove(title);
      if (subtitle) utils.remove(subtitle);
      if (buttons) utils.remove(buttons);
    };
  }, [prefersReducedMotion, createFloatingParticles]);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;
    
    const button = e.currentTarget;
    anime(button, {
      scale: 1.05,
      duration: durations.fast,
      easing: animeEasings.smoothOut,
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;
    
    const button = e.currentTarget;
    anime(button, {
        scale: 1,
      duration: durations.normal,
      easing: animeEasings.appleSpring
      });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;
    
    const button = e.currentTarget;
    
    anime(button, {
        scale: [1, 0.95, 1.02, 1],
      duration: durations.normal,
      easing: animeEasings.appleElastic
      });

    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.width = "100%";
    ripple.style.height = "100%";
    ripple.style.borderRadius = "inherit";
    ripple.style.background = "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)";
    ripple.style.pointerEvents = "none";
    ripple.style.top = "0";
    ripple.style.left = "0";
    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);

    anime(ripple, {
      scale: [0, 2],
      opacity: [1, 0],
      duration: durations.slow,
      ease: animeEasings.smoothOut,
      complete: () => ripple.remove(),
    });
  };

  return (
    <section id="hero" className="container mx-auto px-4 py-20 text-center pt-32 relative">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      <h1 
        ref={titleRef}
        className="text-6xl font-bold mb-6"
        style={{ opacity: 0 }}
      >
        AI Course Portfolio
      </h1>
      
      <p 
        ref={subtitleRef}
        className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        style={{ opacity: 0 }}
      >
        Mastering Generative AI & Agents for Developers
      </p>
      
      <div 
        ref={buttonsRef}
        className="flex gap-4 justify-center"
      >
        <Button 
          className="bg-green-500 hover:bg-green-600 text-black font-semibold transform-gpu"
          style={{ opacity: 0 }}
          onClick={(e) => {
            handleButtonClick(e);
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          View Projects
        </Button>
        <Button 
          variant="outline" 
          className="border-green-500 text-green-500 hover:bg-green-500/10 transform-gpu"
          style={{ opacity: 0 }}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onClick={handleButtonClick}
        >
          <Link href="https://github.com/tombutler" target="_blank">
            GitHub
          </Link>
        </Button>
      </div>
      
      {/* Certificate Button */}
      <div className="mt-6">
        <Button 
          variant="ghost" 
          className="text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 transform-gpu"
          onClick={() => setShowCertificate(true)}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <Award className="mr-2" size={18} />
          Show Certificate
        </Button>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl mx-4 bg-gray-900 border border-green-500/30 rounded-lg p-6">
            <Button 
              variant="ghost" 
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowCertificate(false)}
            >
              <X size={24} />
            </Button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Certificate of Completion</h3>
              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-8 mb-4">
                <p className="text-gray-300 mb-2">Mastering Generative AI & Agents for Developers</p>
                <p className="text-lg font-semibold text-white">Tom Butler</p>
                <p className="text-sm text-gray-400 mt-2">Codecademy Bootcamp 2025</p>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500">
                    This certificate demonstrates completion of advanced coursework in:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-400">
                    <div>• LangChain & LangGraph</div>
                    <div>• RAG Systems</div>
                    <div>• Multi-Agent Systems</div>
                    <div>• Vector Databases</div>
                    <div>• AI Workflow Automation</div>
                    <div>• Production AI Applications</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold"
                  onClick={() => {
                    // In a real implementation, this would download a PDF
                    alert('Certificate download would be implemented here');
                  }}
                >
                  Download Certificate
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  onClick={() => setShowCertificate(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}