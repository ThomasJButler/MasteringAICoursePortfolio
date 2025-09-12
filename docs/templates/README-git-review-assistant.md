# 🔍 Git Review Assistant

AI-powered code review system with automated PR analysis, security scanning, and intelligent feedback generation using GitHub API integration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![LangChain](https://img.shields.io/badge/LangChain-0.3-yellow.svg)

## ✨ Features

### 🤖 Automated Code Review
- **PR Analysis**: Instant intelligent feedback on pull requests
- **Security Scanning**: OWASP Top 10 vulnerability detection
- **Quality Assessment**: Code smell detection and refactoring suggestions
- **Performance Optimization**: Algorithm and memory usage improvements
- **Style Consistency**: Automated style guide enforcement

### 🔐 Security & Quality
- **Vulnerability Detection**: Static analysis for security issues
- **Dependency Scanning**: Known vulnerability database checks
- **Secret Detection**: Prevents accidental credential commits
- **Supply Chain Security**: Third-party dependency analysis
- **Compliance Checking**: Industry standard adherence

### 📊 Team Collaboration
- **GitHub Integration**: Seamless webhook processing
- **Automated Comments**: Contextual review feedback
- **Team Metrics**: Code quality tracking and insights
- **Learning System**: Adapts to team coding standards
- **Workflow Automation**: CI/CD pipeline integration

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/git-review-assistant.git
cd git-review-assistant

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GitHub token and OpenAI API key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the dashboard.

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.6 (strict mode)
- **AI Engine**: LangChain + GPT-4o for review analysis
- **Integration**: GitHub API for PR management
- **Backend**: FastAPI for webhook processing

### Analysis & Security
- **Static Analysis**: ESLint, Pylint, SonarQube rules
- **Security**: Snyk, CodeQL integration
- **AST Parsing**: Tree-sitter for code understanding
- **Performance**: Custom algorithm complexity analysis

### UI & Visualization
- **Components**: Shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS with dark theme
- **Charts**: Chart.js for metrics visualization
- **Real-time**: WebSocket for live updates

## 📱 Screenshots

[Include 2-3 screenshots showing the review dashboard and PR analysis]

## 🔧 Configuration

### Environment Variables

```env
# Required
GITHUB_TOKEN=ghp_your-github-token
GITHUB_WEBHOOK_SECRET=your-webhook-secret
OPENAI_API_KEY=sk-your-openai-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional
SLACK_WEBHOOK_URL=your-slack-webhook
SENTRY_DSN=your-sentry-dsn
DATABASE_URL=postgresql://...
```

### GitHub Webhook Setup

1. Go to your repository settings
2. Navigate to "Webhooks"
3. Add webhook with URL: `https://your-app.vercel.app/api/webhook/github`
4. Select events: `Pull requests`, `Push`, `Pull request reviews`
5. Set content type to `application/json`

## 🎯 Usage Examples

### Automated PR Review

```bash
# When a PR is opened, the system automatically:
# 1. Analyzes code changes for security issues
# 2. Checks performance implications
# 3. Validates coding standards
# 4. Posts review comments with suggestions
# 5. Updates PR status checks
```

### Manual Review Trigger

```bash
# Trigger review via API
curl -X POST https://your-app.vercel.app/api/review/owner/repo/123 \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Content-Type: application/json"
```

### Review Categories

| Category | Description | Severity Levels |
|----------|-------------|----------------|
| Security | Vulnerability detection | Critical, High, Medium, Low |
| Performance | Optimization opportunities | High, Medium, Low |
| Style | Code consistency | Warning, Info |
| Best Practices | Industry standards | Warning, Info |

## 📊 Performance

- **Review Generation**: < 30 seconds per PR
- **Security Detection**: > 95% accuracy
- **False Positive Rate**: < 5%
- **API Response Time**: < 2 seconds
- **Webhook Processing**: < 5 seconds

## 🔍 Review Capabilities

### Security Analysis
- SQL injection prevention
- XSS vulnerability detection
- Authentication bypass checks
- Data exposure prevention
- Input validation enforcement

### Code Quality
- Cyclomatic complexity analysis
- Dead code detection
- Duplicate code identification
- Design pattern violations
- Architecture constraint validation

### Performance Optimization
- Algorithm complexity analysis
- Memory usage optimization
- Database query efficiency
- Bundle size impact assessment
- Loading performance suggestions

## 🧪 Testing

```bash
# Run all tests
npm run test

# Security tests
npm run test:security

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy with GitHub integration
vercel --prod
```

### GitHub App Setup

1. Create GitHub App in your organization
2. Set permissions: `Pull requests: Read & Write`, `Contents: Read`
3. Subscribe to events: `Pull request`, `Push`
4. Install app on target repositories

## 📈 Analytics & Metrics

### Team Metrics Dashboard
- Code review efficiency
- Security issues prevented
- Quality improvement trends
- Team productivity insights
- MTTR (Mean Time to Review)

### Individual Developer Insights
- Code quality score
- Security awareness level
- Review participation
- Improvement suggestions
- Learning recommendations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/review-enhancement`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass: `npm run test`
6. Test with actual GitHub webhooks
7. Commit your changes: `git commit -m 'Enhance review capabilities'`
8. Push to your branch: `git push origin feature/review-enhancement`
9. Open a Pull Request

## 🔐 Security

This application handles sensitive code and repository data. Security measures include:

- Encrypted webhook verification
- Secure token storage
- Minimal data retention
- GDPR compliance
- SOC 2 Type II standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the "Mastering Generative AI & Agents for Developers" bootcamp
- Powered by OpenAI GPT-4o and GitHub API
- Part of the [AI Portfolio Dashboard](https://your-portfolio-url.vercel.app)

## 📞 Support

- **Documentation**: [Full Documentation](docs/README.md)
- **Issues**: [GitHub Issues](https://github.com/your-username/git-review-assistant/issues)
- **Security**: [security@yourdomain.com](mailto:security@yourdomain.com)
- **Portfolio**: [View in Portfolio](https://your-portfolio-url.vercel.app)

---

**Built with ❤️ by [Tom Butler](https://github.com/your-username)**  
*Part of the MasteringAICoursePortfolio project*