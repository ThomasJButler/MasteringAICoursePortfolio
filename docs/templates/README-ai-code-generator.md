# 🤖 AI Code Generator

Natural language to code conversion system with multi-language support, test generation, and intelligent optimization suggestions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![LangChain](https://img.shields.io/badge/LangChain-0.3-yellow.svg)

## ✨ Features

### 🧠 Intelligent Code Generation
- **Natural Language Processing**: Convert plain English requirements into production-ready code
- **Multi-Language Support**: Python, TypeScript, Java, C# with framework-specific templates
- **Context-Aware Generation**: Understands project structure and coding patterns
- **Design Pattern Integration**: Automatically suggests and implements appropriate patterns

### 🧪 Quality Assurance
- **Automatic Test Generation**: Creates comprehensive unit and integration tests
- **Code Quality Analysis**: ESLint, Pylint, and custom quality metrics
- **Security Scanning**: Vulnerability detection and prevention
- **Performance Optimization**: Algorithm complexity analysis and suggestions

### 📚 Documentation & Learning
- **Auto-Documentation**: Generates comprehensive API docs and code comments
- **UK English Support**: British spelling and conventions when requested
- **Best Practices**: Follows industry standards and team conventions
- **Interactive Examples**: Live code examples and usage tutorials

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/ai-code-generator.git
cd ai-code-generator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OpenAI API key and other required variables

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the application.

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.6 (strict mode)
- **AI Engine**: LangChain + GPT-4o for code generation
- **Parser**: Tree-sitter for AST manipulation
- **Backend**: FastAPI for code generation endpoints

### UI & Styling
- **Components**: Shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React with custom tech stack icons

### Development Tools
- **Testing**: Vitest + React Testing Library + Playwright
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode
- **CI/CD**: GitHub Actions

## 📱 Screenshots

[Include 2-3 key screenshots showing the interface]

## 🔧 Configuration

### Environment Variables

```env
# Required
OPENAI_API_KEY=sk-your-openai-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your-langsmith-key
SENTRY_DSN=your-sentry-dsn
```

### Supported Languages & Frameworks

| Language   | Frameworks Supported                    |
|------------|-----------------------------------------|
| TypeScript | Next.js, React, Node.js, Express      |
| Python     | FastAPI, Django, Flask, Pandas        |
| Java       | Spring Boot, Spring MVC               |
| C#         | ASP.NET Core, Entity Framework        |

## 🎯 Usage Examples

### Basic Code Generation

```typescript
// Example: Generate a REST API endpoint
const prompt = "Create a TypeScript API endpoint for user authentication with JWT tokens";

// Generated code includes:
// - Endpoint implementation
// - Type definitions
// - Error handling
// - Unit tests
// - Documentation
```

### Advanced Features

```typescript
// Request with specific requirements
const request = {
  description: "User management system with CRUD operations",
  language: "typescript",
  framework: "nextjs",
  includeTests: true,
  includeDocumentation: true,
  codeStyle: "airbnb"
};
```

## 📊 Performance

- **Code Generation**: < 3 seconds for standard requests
- **Quality Score**: > 90% for generated code
- **Test Coverage**: > 85% for generated test suites
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Type checking
npm run type-check
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Docker

```bash
# Build image
docker build -t ai-code-generator .

# Run container
docker run -p 3000:3000 ai-code-generator
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass: `npm run test`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the "Mastering Generative AI & Agents for Developers" bootcamp
- Powered by OpenAI GPT-4o and LangChain
- Part of the [AI Portfolio Dashboard](https://your-portfolio-url.vercel.app)

## 📞 Support

- **Documentation**: [Full Documentation](docs/README.md)
- **Issues**: [GitHub Issues](https://github.com/your-username/ai-code-generator/issues)
- **Portfolio**: [View in Portfolio](https://your-portfolio-url.vercel.app)

---

**Built with ❤️ by [Tom Butler](https://github.com/your-username)**  
*Part of the MasteringAICoursePortfolio project*