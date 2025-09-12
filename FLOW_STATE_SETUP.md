# 🚀 Flow State Setup Guide

**Get into the zone and start building your AI portfolio!**

## ⚡ Quick Start (5 minutes to flow state)

### 1. Choose Your Starting Point
```bash
# Option A: Start with Week 1 (AI Code Generator) - Most foundational
ai-week-project "1 standard build"

# Option B: Jump to Contest Winner (SQL-Ball) - Highest impact
ai-contest-winner "maximum exceptional all"

# Option C: Build everything rapid-fire - Catch up mode
ai-course-godmode "build all rapid"
```

### 2. Instant Environment Setup
```bash
# Navigate to your workspace
cd /Users/tombutler/Repos/MasteringAICoursePortfolio

# Create your first project (example: AI Code Generator)
mkdir -p apps/ai-code-generator
cd apps/ai-code-generator

# Initialize with Next.js 15 + TypeScript
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --turbo --eslint

# Copy the perfect agent config
cp ../../.claude/agents/ai-code-generator-specialist.md .claude-agent.md

# Copy README template
cp ../../docs/templates/README-ai-code-generator.md README.md
```

### 3. Set Up Environment Variables
```bash
# Copy environment template
cp .env.example .env.local

# Add your keys (get these from respective platforms)
echo "OPENAI_API_KEY=sk-your-key-here" >> .env.local
echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env.local
```

### 4. Start Coding Flow
```bash
# Install everything
npm install

# Start development (this opens flow state)
npm run dev
```

---

## 🎯 Project Priority Matrix

### **Immediate Impact (Start Here)**
1. **SQL-Ball** - Contest winner, most impressive
   - Use: `ai-contest-winner "maximum exceptional all"`
   - Time: 2-3 days intensive
   - Impact: 🏆 Contest winner

2. **Portfolio Dashboard** - Showcase everything
   - Already started in `apps/dashboard`
   - Just needs project data updates
   - Impact: Professional presentation

### **Foundation Building**
3. **AI Code Generator** - Week 1
   - Use: `ai-week-project "1 standard build"`
   - Demonstrates core AI skills
   - Impact: Employer-friendly

4. **RAG Chatbot** - Week 3
   - Use: `ai-week-project "3 standard build"`
   - Popular AI application
   - Impact: High market value

### **Advanced Showcase**
5. **Multi-Agent System** - Week 4
   - Most technically impressive
   - Shows advanced AI orchestration
   - Impact: Technical leadership

---

## 🔥 Flow State Triggers

### **The 15-Minute Rule**
```bash
# Set a 15-minute timer and just start
# Momentum builds from small actions

# Quick wins to build momentum:
1. npm create-next-app
2. Copy agent config
3. Install shadcn/ui
4. Create first component
5. See it working in browser
```

### **Development Flow Commands**
```bash
# Terminal 1: Development server
npm run dev

# Terminal 2: Type checking (optional but satisfying)
npm run type-check -- --watch

# Terminal 3: Testing (for confidence)
npm run test -- --watch

# Browser: http://localhost:3000 (instant feedback)
```

### **Micro-Milestones for Momentum**
1. ✅ Next.js app running
2. ✅ First component renders
3. ✅ Tailwind styles working
4. ✅ Shadcn/ui component added
5. ✅ API route responds
6. ✅ AI integration working
7. ✅ First feature complete

---

## 🛠 One-Command Setups

### **AI Code Generator (Week 1)**
```bash
# Complete setup in one go
mkdir -p apps/ai-code-generator && cd apps/ai-code-generator && \
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --turbo --eslint && \
cp ../../.claude/agents/ai-code-generator-specialist.md .claude-agent.md && \
cp ../../docs/templates/README-ai-code-generator.md README.md && \
npm install && \
echo "🚀 Ready to build AI Code Generator!"
```

### **SQL-Ball Contest Winner**
```bash
# Complete setup in one go
mkdir -p apps/sql-ball && cd apps/sql-ball && \
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --turbo --eslint && \
cp ../../.claude/agents/sql-ball-specialist.md .claude-agent.md && \
cp ../../docs/templates/README-sql-ball.md README.md && \
npm install && \
echo "🏆 Ready to build the contest winner!"
```

### **RAG Chatbot (Week 3)**
```bash
# Complete setup in one go  
mkdir -p apps/rag-chatbot && cd apps/rag-chatbot && \
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --turbo --eslint && \
cp ../../.claude/agents/rag-architect.md .claude-agent.md && \
cp ../../docs/templates/README-rag-chatbot.md README.md && \
npm install && \
echo "💬 Ready to build RAG Chatbot!"
```

---

## 🎨 Instant UI Setup

### **Add Shadcn/UI (Your Design System)**
```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Add essential components
npx shadcn@latest add button card input textarea select dialog
npx shadcn@latest add dropdown-menu tooltip progress badge

# You now have beautiful, consistent components!
```

### **Quick Dark Theme Setup**
```tsx
// Add to your layout.tsx or globals.css
<div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
  {children}
</div>
```

---

## ⚙️ Essential Environment Variables

### **Create `.env.local`**
```env
# AI APIs
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=your-claude-key

# Database (for SQL-Ball and RAG projects)
DATABASE_URL=postgresql://...
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...

# Vector Database (for RAG)
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=...

# Development
NEXT_PUBLIC_APP_URL=http://localhost:3000
LANGCHAIN_TRACING_V2=true
```

---

## 🧠 Flow State Psychology

### **Remove Decision Fatigue**
- Use the templates provided (no blank page syndrome)
- Follow the agent configurations exactly
- Copy working patterns from similar projects

### **Immediate Feedback Loops**
```bash
# Hot reload development
npm run dev

# Browser auto-refresh on changes
# Console.log for instant debugging
# Component renders immediately
```

### **Progressive Complexity**
1. **Start Simple**: Get Next.js running
2. **Add Structure**: Components and routing
3. **Add Styling**: Make it look good
4. **Add Features**: One at a time
5. **Add AI**: Connect to APIs
6. **Polish**: Performance and testing

---

## 🎯 My Recommendation for You

### **Start with SQL-Ball (Contest Winner)**

**Why?**
- Highest impact for your portfolio
- Contest deadline creates urgency (good for flow)
- Football data is fun and engaging
- RAG + visualization = impressive demo

**How?**
```bash
# 1. Set up the project (5 minutes)
mkdir -p apps/sql-ball && cd apps/sql-ball
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --turbo --eslint

# 2. Copy the specialist config (1 minute)
cp ../../.claude/agents/sql-ball-specialist.md .claude-agent.md

# 3. Start building (enter flow state)
npm run dev

# 4. Use the specialist agent
# In Claude: "Help me build the SQL-Ball contest winner following the specialist config"
```

### **Your Next 2 Hours**
1. **15 min**: Project setup + shadcn/ui
2. **30 min**: Basic RAG architecture with LangChain  
3. **45 min**: Simple natural language to SQL conversion
4. **30 min**: Football database schema setup
5. **You're in flow state and building!**

---

## 🚨 Anti-Flow Patterns (Avoid These)

❌ **Analysis Paralysis**: Don't perfect the first component  
❌ **Tool Switching**: Stick to your stack  
❌ **Perfectionism**: Build, test, iterate  
❌ **Context Switching**: Focus on one project  
❌ **Over-Planning**: Start coding within 15 minutes  

---

**Ready to flow? Pick a project above and run the one-command setup! 🚀**