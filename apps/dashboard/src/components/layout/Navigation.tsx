"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "projects", "contest"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contest", label: "Contest" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm border-b border-green-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-green-400 font-bold text-xl">
                AI Portfolio
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-green-400"
                        : "text-gray-400 hover:text-green-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://github.com/tombutler"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/tombutler"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                LinkedIn
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-green-400"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-green-500/20 p-6 pt-20">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-green-400"
                      : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-gray-800 space-y-4">
                <Link
                  href="https://github.com/tombutler"
                  target="_blank"
                  className="block text-gray-400 hover:text-green-400 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/tombutler"
                  target="_blank"
                  className="block text-gray-400 hover:text-green-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-gray-800 z-40">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300"
          style={{
            width: `${
              typeof window !== "undefined"
                ? (window.scrollY /
                    (document.documentElement.scrollHeight - window.innerHeight)) *
                  100
                : 0
            }%`,
          }}
        />
      </div>
    </>
  );
}