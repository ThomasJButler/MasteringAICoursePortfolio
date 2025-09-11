"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const charArray = matrixChars.split("");

    let frameCount = 0;
    const drawMatrix = () => {
      frameCount++;
      
      // Only draw every 3rd frame for subtlety and performance
      if (frameCount % 3 !== 0) {
        requestAnimationFrame(drawMatrix);
        return;
      }

      // Subtle fade effect - very light overlay for trailing effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix green with low opacity for subtlety
      ctx.fillStyle = "rgba(0, 255, 0, 0.15)";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomly skip some columns for sparseness
        if (Math.random() > 0.975) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Brighter green for the leading character
          if (Math.random() > 0.9) {
            ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
            ctx.fillText(text, x, y);
            ctx.fillStyle = "rgba(0, 255, 0, 0.15)";
          } else {
            ctx.fillText(text, x, y);
          }

          // Reset drop randomly after falling off screen
          if (y > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

      requestAnimationFrame(drawMatrix);
    };

    // Start animation
    drawMatrix();

    // CSS-based pulsing effect instead of anime.js
    let opacity = 0.4;
    let increasing = true;
    const pulseAnimation = setInterval(() => {
      if (increasing) {
        opacity += 0.01;
        if (opacity >= 0.5) increasing = false;
      } else {
        opacity -= 0.01;
        if (opacity <= 0.3) increasing = true;
      }
      canvas.style.opacity = opacity.toString();
    }, 50);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(pulseAnimation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}