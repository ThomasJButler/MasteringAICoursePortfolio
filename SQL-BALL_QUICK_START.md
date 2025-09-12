# 🏆 SQL-Ball Quick Start Guide

**Tonight's Mission: Transform PLOracle → Contest Winner**

## ⚡ Instant Setup (5 minutes)

### **In Your PLOracle Project Directory:**
```bash
# Copy the specialist agent
cp /Users/tombutler/Repos/MasteringAICoursePortfolio/.claude/agents/sql-ball-specialist.md .claude-agent.md

# Copy style guide
cp /Users/tombutler/Repos/MasteringAICoursePortfolio/STYLE_GUIDE.md .

# Install RAG dependencies
npm install @langchain/core @langchain/openai @langchain/community chromadb-default-embed

# Set environment variables
echo "OPENAI_API_KEY=your-key-here" >> .env.local
echo "LANGCHAIN_TRACING_V2=true" >> .env.local
```

## 🤖 **Exact Prompt to Use Tonight**

Copy this into Claude:

```
I'm using the sql-ball-specialist agent config. I have an existing PLOracle football app with Supabase match database that needs to be transformed to SQL-Ball. 

Following the CRITICAL TRANSFORMATION REQUIREMENTS in the specialist config, help me:

1. Audit the codebase and remove ALL prediction functionality
2. Clean up unused ML/prediction dependencies  
3. Rebrand completely from PLOracle to SQL-Ball
4. Add RAG system for natural language to SQL conversion
5. Transform visualizations to focus on pattern discovery and unusual statistics

My current setup:
- Framework: [your current framework - Svelte/Next.js/etc]
- Database: Supabase PostgreSQL with matches table
- Current features: [list your current PLOracle features]

Database schema includes: home_team, away_team, home_score, away_score, match_date, season

Ready to start the transformation following the specialist config exactly!
```

## 🔥 **Key Phrases for Agent Activation**
- *"Following the sql-ball-specialist config..."*
- *"As specified in the critical transformation requirements..."*
- *"The specialist config requires pattern discovery focus..."*
- *"Using the contest-winning strategy from the agent..."*

## 📋 **Tonight's Checklist**

### **Phase 1: Cleanup (45 mins)**
- [ ] Remove all prediction algorithms
- [ ] Remove ML model dependencies
- [ ] Remove "Oracle" branding everywhere
- [ ] Clean up unused prediction UI components
- [ ] Remove player stats features (not in your DB)

### **Phase 2: RAG System (90 mins)**
- [ ] Install LangChain dependencies
- [ ] Create ChromaDB vector store for schema
- [ ] Build NL-to-SQL conversion API route
- [ ] Test with example queries
- [ ] Add query explanation features

### **Phase 3: Pattern Discovery (60 mins)**
- [ ] Transform prediction charts to trend analysis
- [ ] Add unusual statistics detection
- [ ] Create anomaly highlighting system
- [ ] Build pattern discovery dashboard
- [ ] Add historical comparison features

### **Phase 4: Contest Polish (30 mins)**
- [ ] Create demo query examples
- [ ] Take LinkedIn-ready screenshots
- [ ] Prepare 60-second demo video
- [ ] Test all functionality
- [ ] Deploy final version

## 🎯 **Example Pattern Discovery Queries**
Test these after your RAG system is working:

```sql
-- These should be convertible from natural language
"Show me the biggest upset victories this season"
"Which teams perform unusually well away from home?"
"Find matches with the most goals in the last 10 games"
"What are the most unusual scorelines this season?"
"Show teams with the most inconsistent results"
```

## 🚀 **Success Criteria**
By morning you should have:
- ✅ Clean, prediction-free codebase
- ✅ Working NL-to-SQL conversion
- ✅ Pattern discovery features
- ✅ Contest-ready demo
- ✅ LinkedIn post material

## 🆘 **If You Get Stuck**
Use these exact phrases:
- *"The sql-ball-specialist config says to [specific requirement]"*
- *"Following the transformation requirements, I need help with..."*
- *"The contest strategy requires [specific feature], how do I..."*

---

**🏆 Remember: You already have the hardest parts (database + auth)! Tonight is just transformation and RAG integration. You've got this!**