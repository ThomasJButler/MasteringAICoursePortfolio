# 🚀 Portfolio Dashboard

Stunning AI portfolio showcase featuring Matrix-inspired animations, interactive project displays, and comprehensive documentation of all bootcamp projects with Anime.js effects.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![Anime.js](https://img.shields.io/badge/Anime.js-3.2.2-red.svg)

## ✨ Showcase Features

### 🎭 Matrix-Inspired Animations
- **Matrix Rain Effect**: Cascading green characters background
- **Interactive Project Cards**: Hover effects with smooth transitions
- **Smooth Page Transitions**: Anime.js powered navigation
- **Particle Effects**: Dynamic visual feedback on interactions
- **Loading Animations**: Skeleton screens and progress indicators

### 📱 Responsive Portfolio Design
- **Mobile-First**: Optimized for all device sizes
- **Dark Theme**: Professional Matrix-inspired color scheme
- **Glass Morphism**: Modern translucent card designs
- **Typography**: Inter variable font with perfect readability
- **Accessibility**: WCAG AA compliant with screen reader support

### 🎯 Project Showcases
- **7 AI Projects**: Complete bootcamp project gallery
- **Live Demos**: Direct links to deployed applications
- **Code Repositories**: GitHub integration with star counts
- **Technology Stacks**: Visual tech stack displays
- **Performance Metrics**: Lighthouse scores and analytics

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio-dashboard.git
cd portfolio-dashboard

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GitHub token for repository data

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.6 (strict mode)
- **Styling**: Tailwind CSS 4.0 with custom design system
- **Animations**: Anime.js 3.2.2 for showcase effects
- **Components**: Shadcn/ui + Radix UI primitives

### Performance & SEO
- **Image Optimization**: Next.js Image with blur placeholders
- **Bundle Optimization**: Dynamic imports and code splitting
- **SEO**: Comprehensive meta tags and structured data
- **Analytics**: Vercel Analytics integration
- **Monitoring**: Sentry error tracking

### Development Tools
- **Testing**: Vitest + React Testing Library + Playwright
- **Linting**: ESLint + Prettier with strict rules
- **Type Checking**: TypeScript strict mode
- **CI/CD**: GitHub Actions with automated deployments

## 📱 Screenshots

[Include 3-4 high-quality screenshots showing the Matrix effect, project cards, and mobile responsiveness]

## 🎨 Design System

### Color Palette
```css
/* Matrix-inspired colors */
--matrix-green: #00ff00;      /* Primary accent */
--matrix-cyan: #00ffff;       /* Secondary accent */  
--deep-black: #0a0a0a;        /* Background */
--card-surface: #1a1a1a;      /* Card backgrounds */
--text-primary: #ffffff;      /* Main text */
--text-secondary: #e0e0e0;    /* Secondary text */
--text-muted: #a0a0a0;       /* Muted text */
```

### Typography Scale
```css
--font-primary: "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", monospace;

/* Responsive font sizes */
--text-xs: clamp(0.75rem, 2vw, 0.875rem);
--text-sm: clamp(0.875rem, 2.5vw, 1rem);
--text-base: clamp(1rem, 3vw, 1.125rem);
--text-lg: clamp(1.125rem, 3.5vw, 1.25rem);
--text-xl: clamp(1.25rem, 4vw, 1.5rem);
```

## 🎭 Animation Features

### Matrix Rain Effect
```typescript
// Optimized Matrix rain with performance monitoring
class OptimizedMatrixRain {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private drops: number[] = [];
  private animationId: number;
  
  init() {
    this.setupCanvas();
    this.initializeDrops();
    this.animate();
  }
  
  animate() {
    // 60fps animation loop with performance monitoring
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = '#00ff00';
    this.ctx.font = '15px monospace';
    
    // Render falling characters
    for (let i = 0; i < this.drops.length; i++) {
      const text = String.fromCharCode(Math.random() * 128);
      this.ctx.fillText(text, i * 20, this.drops[i] * 20);
      
      if (this.drops[i] * 20 > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }
}
```

### Interactive Project Cards
```typescript
// Anime.js hover animations
const projectCardAnimation = {
  scale: [1, 1.05],
  translateY: [0, -8],
  boxShadow: [
    '0 4px 6px rgba(0, 0, 0, 0.1)',
    '0 20px 40px rgba(0, 255, 0, 0.15)'
  ],
  duration: 300,
  easing: 'easeOutCubic'
};
```

## 📊 Project Data

### Featured Projects
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  week: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  lighthouseScore?: number;
}

const projects: Project[] = [
  {
    id: 'ai-code-generator',
    title: 'AI Code Generator',
    description: 'Natural language to code conversion with multi-language support',
    week: 'Week 1',
    status: 'completed',
    techStack: ['LangChain', 'GPT-4o', 'Tree-sitter', 'FastAPI'],
    demoUrl: 'https://ai-code-generator.vercel.app',
    lighthouseScore: 96
  },
  // ... other projects
];
```

### Performance Metrics
```typescript
interface PortfolioMetrics {
  totalProjects: 7;
  completionRate: number;
  averageLighthouseScore: number;
  totalGithubStars: number;
  deploymentStatus: 'live' | 'building' | 'error';
}
```

## 🎯 Key Sections

### Hero Section
- Animated typewriter effect introduction
- Matrix rain background
- Call-to-action buttons with hover effects
- Social media links with icons

### Projects Gallery
- Responsive grid layout
- Animated project cards
- Technology stack visualization
- Status badges and progress indicators
- Direct links to live demos

### Skills & Technologies
- Interactive technology icons
- Expertise level indicators
- Categorized skill groups
- Hover animations and tooltips

### Contact & Links
- Professional contact information
- GitHub repository integration
- LinkedIn profile connection
- Email contact form

## 📱 Responsive Design

### Breakpoint Strategy
```css
/* Mobile-first responsive design */
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

### Mobile Optimizations
- Touch-friendly interaction areas (44px minimum)
- Optimized animation performance
- Reduced motion for accessibility
- Improved readability on small screens

## 🧪 Testing

```bash
# Run all tests
npm run test

# Visual regression tests
npm run test:visual

# Accessibility tests
npm run test:a11y

# Performance tests
npm run test:perf

# E2E user journey tests
npm run test:e2e
```

### Animation Testing
```typescript
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import AnimatedProjectCard from './AnimatedProjectCard';

describe('Animated Project Card', () => {
  test('should animate on intersection', async () => {
    const { container } = render(
      <AnimatedProjectCard project={mockProject} index={0} />
    );
    
    const card = container.firstChild;
    expect(card).toHaveStyle({ opacity: '0' });
    
    // Simulate intersection
    mockIntersectionObserver.trigger(card);
    
    await waitFor(() => {
      expect(card).toHaveStyle({ opacity: '1' });
    });
  });
});
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod

# Automatic deployments on git push
# Custom domain configuration
# Edge function optimization
```

### Performance Optimization
```json
{
  "images": {
    "formats": ["image/webp", "image/avif"],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]
  },
  "experimental": {
    "optimizeCss": true,
    "optimizePackageImports": ["@radix-ui/react-icons"]
  }
}
```

## 📈 Analytics & Monitoring

### Performance Metrics
```typescript
interface PerformanceMetrics {
  lighthouseScore: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  coreWebVitals: {
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
  };
  userEngagement: {
    averageSessionDuration: number;
    bounceRate: number;
    pageViews: number;
  };
}
```

### Real User Monitoring
```typescript
// Vercel Analytics integration
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## 🎨 Customization

### Theme Configuration
```typescript
const portfolioTheme = {
  colors: {
    primary: '#00ff00',
    secondary: '#00ffff', 
    background: '#0a0a0a',
    surface: '#1a1a1a'
  },
  animations: {
    enabled: true,
    reducedMotion: 'respect-user-preference',
    duration: {
      fast: 150,
      normal: 300,
      slow: 500
    }
  }
};
```

### Content Management
```typescript
// Easy content updates
const portfolioContent = {
  hero: {
    title: "Tom Butler",
    subtitle: "AI Developer & Full-Stack Engineer",
    description: "Building intelligent applications with cutting-edge AI technology"
  },
  projects: projects, // Imported from data file
  contact: {
    email: "tom@example.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username"
  }
};
```

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

### Feedback & Suggestions
1. Open an issue for bugs or suggestions
2. Fork for personal use (please credit)
3. Star the repository if you found it helpful
4. Share feedback on design and user experience

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Matrix movie aesthetics and modern web design
- **Animation Library**: Anime.js for smooth, performant animations
- **UI Components**: Shadcn/ui for consistent, accessible components
- **Framework**: Next.js 15 for optimal performance and developer experience
- **Hosting**: Vercel for seamless deployment and analytics

## 📞 Contact

- **Live Portfolio**: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-username)
- **Email**: your.email@domain.com

---

**🎭 Built with Matrix-inspired design by [Tom Butler](https://github.com/your-username)**  
*Showcasing the MasteringAICoursePortfolio project collection*