import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/tombutler", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/tombutler", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/tombutler", icon: Twitter, label: "Twitter" },
    { href: "mailto:tom@example.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contest", label: "Contest" },
  ];

  return (
    <footer className="relative z-10 border-t border-green-500/20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">AI Course Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Showcasing cutting-edge AI projects from the &ldquo;Mastering Generative AI & Agents for Developers&rdquo; bootcamp.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Built with Next.js, TypeScript, and love from Liverpool, UK 🇬🇧
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/projects/sql-query-buddy"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  Contest Entry 🏆
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
            <p className="text-gray-500 text-xs">
              Tom Butler<br />
              Liverpool, UK<br />
              #CodecademyGenAIBootcamp
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© {currentYear} Tom Butler. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              Made with <Heart size={12} className="mx-1 text-red-500" /> for the AI community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}