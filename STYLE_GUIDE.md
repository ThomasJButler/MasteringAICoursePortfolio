# 🎨 AI Portfolio Style Guide

## Overview
This style guide ensures consistency across all individual project repositories in the MasteringAICoursePortfolio. Each project should maintain the same visual language, interaction patterns, and technical standards.

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--matrix-green: #00ff00;      /* Primary accent, CTAs */
--matrix-cyan: #00ffff;       /* Secondary accent, links */
--deep-black: #0a0a0a;        /* Background */
--card-surface: #1a1a1a;      /* Card backgrounds */

/* Text Colors */
--text-primary: #ffffff;      /* Main headings */
--text-secondary: #e0e0e0;    /* Body text */
--text-muted: #a0a0a0;       /* Captions, labels */
--text-disabled: #666666;     /* Disabled states */

/* Status Colors */
--success: #00ff00;          /* Success states */
--warning: #ffaa00;          /* Warning states */
--error: #ff3333;            /* Error states */
--info: #00ffff;             /* Information */

/* Glass Morphism */
--glass-bg: rgba(26, 26, 26, 0.6);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-shadow: rgba(0, 0, 0, 0.25);
```

### Typography
```css
/* Font Stack */
--font-primary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", Consolas, monospace;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## 🧩 Component Patterns

### Cards
```css
.card {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.6), rgba(15, 15, 15, 0.8));
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: rgba(0, 255, 0, 0.3);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #00ff00, #00cc00);
  color: #000000;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #00cc00, #00aa00);
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(0, 255, 0, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #00ff00;
  border: 2px solid #00ff00;
  font-weight: 500;
  padding: 10px 22px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(0, 255, 0, 0.1);
  border-color: #00ffff;
  color: #00ffff;
}
```

### Form Elements
```css
.input {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #00ff00;
  box-shadow: 0 0 0 3px rgba(0, 255, 0, 0.1);
}

.input::placeholder {
  color: #666666;
}
```

---

## 🎭 Animation Standards

⚠️ **IMPORTANT**: Anime.js is ONLY used in the Portfolio Dashboard for showcase purposes. Individual projects should use CSS animations, Framer Motion, or other lightweight animation libraries.

### Animation Library Usage by Project
- **Portfolio Dashboard**: Anime.js 3.2.2 (showcase/demo purposes)
- **Individual AI Projects**: CSS animations + Framer Motion (if needed)
- **Reason**: Keep individual projects lightweight and focused on functionality

### Timing Functions
```css
/* Ease Functions */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth-out: cubic-bezier(0, 0, 0.2, 1);
--ease-smooth-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Durations */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;
--duration-slower: 600ms;
```

### Animation Patterns
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale In */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

/* Slide In From Left */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Usage */
.animate-fade-in {
  animation: fadeIn 400ms var(--ease-smooth) both;
}

.animate-scale-in {
  animation: scaleIn 300ms var(--ease-bounce) both;
}
```

---

## 🛠 Technical Standards

### HTML Structure
```html
<!-- Page Layout -->
<div class="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
  <!-- Background Effects -->
  <div class="matrix-rain-bg"></div>
  
  <!-- Navigation -->
  <nav class="relative z-10">...</nav>
  
  <!-- Main Content -->
  <main class="relative z-10 container mx-auto px-4 py-20">
    <!-- Hero Section -->
    <section class="text-center mb-20">...</section>
    
    <!-- Content Sections -->
    <section class="mb-16">...</section>
  </main>
  
  <!-- Footer -->
  <footer class="relative z-10">...</footer>
</div>
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1280px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
}
```

### Loading States
```css
.skeleton {
  background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 🌟 Interactive Elements

### Hover Effects
```css
/* Card Hover */
.interactive-card {
  transition: all 0.3s var(--ease-smooth);
}

.interactive-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 255, 0, 0.15);
  border-color: rgba(0, 255, 0, 0.4);
}

/* Button Hover */
.interactive-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.2s var(--ease-smooth);
}

.interactive-btn:hover {
  transform: translateY(-2px);
}

.interactive-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.interactive-btn:hover::before {
  left: 100%;
}
```

### Focus States
```css
.focusable {
  transition: all 0.2s var(--ease-smooth);
}

.focusable:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 255, 0, 0.3);
  border-color: #00ff00;
}

.focusable:focus-visible {
  outline: 2px solid #00ff00;
  outline-offset: 2px;
}
```

---

## 📱 Mobile Optimization

### Touch Targets
```css
/* Minimum touch target size: 44px */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
}

/* Mobile-specific spacing */
@media (max-width: 640px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .section-spacing {
    margin-bottom: 40px;
  }
  
  .text-responsive {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
}
```

---

## ♿ Accessibility Standards

### Color Contrast
- Ensure minimum contrast ratio of 4.5:1 for normal text
- Ensure minimum contrast ratio of 3:1 for large text
- Use tools like WebAIM Color Contrast Checker

### Screen Reader Support
```html
<!-- Descriptive alt text -->
<img src="chart.png" alt="Performance metrics showing 95% uptime">

<!-- ARIA labels for interactive elements -->
<button aria-label="Close dialog">×</button>

<!-- Skip navigation link -->
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

<!-- Proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### Keyboard Navigation
```css
/* Focus indicators */
.keyboard-focusable:focus {
  outline: 2px solid #00ff00;
  outline-offset: 2px;
}

/* Skip links */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sr-only.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
}
```

---

## 🔧 Code Standards

### File Naming
```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
└── features/
    ├── ProjectCard.tsx
    └── TechStack.tsx
```

### Component Structure
```tsx
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'secondary';
}

export default function Component({ 
  className,
  children,
  variant = 'default',
  ...props 
}: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Side effects here
  }, []);

  return (
    <div 
      className={cn(
        'base-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### CSS Organization
```css
/* 1. Base styles */
.component {
  /* Layout */
  display: flex;
  position: relative;
  
  /* Box model */
  width: 100%;
  padding: 16px;
  margin: 0;
  
  /* Typography */
  font-size: 16px;
  font-weight: 400;
  
  /* Visual */
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  
  /* Animation */
  transition: all 0.2s var(--ease-smooth);
}

/* 2. States */
.component:hover {
  transform: translateY(-2px);
}

.component:focus {
  outline: 2px solid var(--matrix-green);
}

/* 3. Variants */
.component--secondary {
  background: var(--card-surface);
}

/* 4. Responsive */
@media (max-width: 640px) {
  .component {
    padding: 12px;
  }
}
```

---

## 📊 Performance Guidelines

### Image Optimization
```tsx
import Image from 'next/image';

// Always use Next.js Image component
<Image
  src="/project-screenshot.jpg"
  alt="Project dashboard interface"
  width={800}
  height={600}
  quality={85}
  priority={false} // Only true for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Bundle Optimization
```tsx
// Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
});

// Lazy load non-critical features
const AdminPanel = lazy(() => import('./AdminPanel'));
```

---

## 🧪 Testing Standards

### Unit Tests
```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## 🚀 Deployment Checklist

### Before Deployment
- [ ] All TypeScript errors resolved
- [ ] ESLint passes with no errors
- [ ] Tests pass (90%+ coverage)
- [ ] Lighthouse score >90
- [ ] Accessibility audit passes
- [ ] Performance audit passes
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility verified

### Environment Variables
```env
# Required for all projects
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_GITHUB_URL=https://github.com/username/repo

# API Keys (never commit to repo)
OPENAI_API_KEY=sk-...
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=eyJ...
```

---

## 📝 Documentation Standards

### README Template
```markdown
# Project Name

Brief description of what this project does and its key features.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## ✨ Features

- Feature 1
- Feature 2
- Feature 3

## 🛠 Tech Stack

- Framework: Next.js 15
- Language: TypeScript
- Styling: Tailwind CSS
- AI: LangChain + OpenAI

## 📱 Screenshots

[Include 2-3 key screenshots]

## 🔧 Configuration

[Environment variables and setup instructions]

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: <1s
- Time to Interactive: <2s
```

---

**Maintained by**: Tom Butler  
**Last Updated**: 2025-01-12  
**Version**: 1.0.0

---

*This style guide is a living document. Update it as new patterns emerge or requirements change.*