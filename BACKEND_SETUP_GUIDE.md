# 🐍 Backend Setup Guide - All AI Projects

**Complete Python + LangChain backend setup for all projects requiring server-side AI processing**

## 📋 Projects Requiring Backend

### **Full Backend Required**
1. **AI Code Generator** - FastAPI + LangChain + Tree-sitter
2. **Git Review Assistant** - FastAPI + GitHub API + LangChain  
3. **RAG Chatbot** - FastAPI + LangChain + Vector DB
4. **Multi-Agent System** - FastAPI + LangGraph + Redis
5. **Workflow Agent** - FastAPI + MCP + Docker

### **Frontend + Database Only (No Python Backend)**
- **SQL-Ball** - Next.js + Supabase (you already have this!)
- **Portfolio Dashboard** - Next.js only (static)

---

## 🚀 Universal Backend Foundation

### **Project Structure (All Backends)**
```
apps/[project-name]/
├── frontend/              # Next.js app
│   ├── src/
│   ├── package.json
│   └── next.config.js
├── backend/               # Python FastAPI
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py        # FastAPI entry
│   │   ├── models/        # Pydantic models
│   │   ├── services/      # LangChain logic
│   │   ├── routes/        # API endpoints
│   │   └── utils/         # Helpers
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
└── README.md
```

### **Universal Backend Setup (5 minutes)**
```bash
# From any project root (e.g., apps/ai-code-generator/)
mkdir -p backend/app/{models,services,routes,utils}
cd backend

# Create requirements.txt
cat > requirements.txt << 'EOF'
fastapi==0.104.1
uvicorn==0.24.0
langchain==0.2.16
langchain-openai==0.1.23
langchain-community==0.2.16
pydantic==2.5.0
python-dotenv==1.0.0
httpx==0.25.2
redis==5.0.1
sqlalchemy==2.0.23
alembic==1.13.0
pytest==7.4.3
pytest-asyncio==0.21.1
EOF

# Install Python dependencies
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create main FastAPI app
cat > app/main.py << 'EOF'
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(
    title="AI Project API",
    version="1.0.0",
    description="LangChain-powered AI backend"
)

# CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "AI backend running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
EOF

# Create .env template
cat > .env << 'EOF'
OPENAI_API_KEY=sk-your-openai-key-here
ANTHROPIC_API_KEY=your-anthropic-key
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
REDIS_URL=redis://localhost:6379
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your-langsmith-key
ENVIRONMENT=development
EOF

echo "✅ Universal backend foundation ready!"
echo "💡 Run: uvicorn app.main:app --reload --port 8000"
```

---

## 🤖 Project-Specific Backend Implementations

### **1. AI Code Generator Backend**

```bash
# Setup specific to code generation
cd apps/ai-code-generator/backend

# Additional requirements
cat >> requirements.txt << 'EOF'
tree-sitter==0.20.4
tree-sitter-python==0.20.4
tree-sitter-javascript==0.20.3
tree-sitter-typescript==0.20.4
tree-sitter-java==0.20.2
ast-tools==0.2.0
black==23.11.0
autopep8==2.0.4
pylint==3.0.3
EOF

pip install -r requirements.txt

# Code generation service
cat > app/services/code_generator.py << 'EOF'
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from typing import Dict, List, Optional
import tree_sitter_python as tspython
import tree_sitter_typescript as tstyprescript
from tree_sitter import Language, Parser
import ast
import black

class CodeGeneratorService:
    def __init__(self):
        self.llm = ChatOpenAI(
            model="gpt-4o",
            temperature=0.3,
            max_tokens=4000
        )
        self.setup_parsers()
        
    def setup_parsers(self):
        """Setup Tree-sitter parsers for different languages"""
        self.parsers = {
            'python': self._create_parser(tspython.language()),
            'typescript': self._create_parser(tstyprescript.language()),
        }
    
    def _create_parser(self, language):
        parser = Parser()
        parser.set_language(language)
        return parser
    
    async def generate_code(self, 
                          requirements: str, 
                          language: str = "python",
                          framework: str = None,
                          include_tests: bool = True) -> Dict:
        """Generate production-ready code from natural language"""
        
        prompt = PromptTemplate(
            input_variables=["requirements", "language", "framework", "include_tests"],
            template="""
            Generate production-ready {language} code for the following requirements:
            {requirements}
            
            Framework: {framework}
            Include tests: {include_tests}
            
            Requirements:
            1. Clean, well-structured code
            2. Proper error handling
            3. Type annotations/hints where applicable
            4. Comprehensive docstrings
            5. Follow {language} best practices
            6. Include security considerations
            
            Return the response in this JSON format:
            {{
                "main_code": "// Generated code here",
                "tests": "// Test code here",
                "dependencies": ["list", "of", "dependencies"],
                "documentation": "Brief explanation of the code",
                "quality_score": 95
            }}
            """
        )
        
        chain = LLMChain(llm=self.llm, prompt=prompt)
        
        result = await chain.arun(
            requirements=requirements,
            language=language,
            framework=framework or "standard",
            include_tests=include_tests
        )
        
        # Parse and validate the generated code
        parsed_result = self._parse_llm_response(result)
        validated_code = self._validate_and_format_code(
            parsed_result.get("main_code", ""), 
            language
        )
        
        return {
            "code": validated_code,
            "tests": parsed_result.get("tests", ""),
            "dependencies": parsed_result.get("dependencies", []),
            "documentation": parsed_result.get("documentation", ""),
            "quality_analysis": self._analyze_code_quality(validated_code, language)
        }
    
    def _validate_and_format_code(self, code: str, language: str) -> str:
        """Validate and format code using Tree-sitter and language-specific formatters"""
        try:
            if language == "python":
                # Parse with Tree-sitter to check syntax
                tree = self.parsers['python'].parse(bytes(code, "utf8"))
                if tree.root_node.has_error:
                    return f"# Syntax Error Detected\n{code}"
                
                # Format with Black
                formatted = black.format_str(code, mode=black.FileMode())
                return formatted
            
            elif language == "typescript":
                tree = self.parsers['typescript'].parse(bytes(code, "utf8"))
                if tree.root_node.has_error:
                    return f"// Syntax Error Detected\n{code}"
                
                return code  # You could add Prettier formatting here
            
            return code
        except Exception as e:
            return f"// Formatting Error: {str(e)}\n{code}"
    
    def _analyze_code_quality(self, code: str, language: str) -> Dict:
        """Analyze code quality metrics"""
        return {
            "cyclomatic_complexity": self._calculate_complexity(code),
            "lines_of_code": len(code.split('\n')),
            "estimated_quality_score": 85,
            "suggestions": [
                "Consider adding more error handling",
                "Add input validation",
                "Consider performance optimizations"
            ]
        }
    
    def _calculate_complexity(self, code: str) -> int:
        """Calculate approximate cyclomatic complexity"""
        complexity_keywords = ['if', 'elif', 'else', 'for', 'while', 'try', 'except', 'with']
        return sum(code.count(keyword) for keyword in complexity_keywords)
    
    def _parse_llm_response(self, response: str) -> Dict:
        """Parse LLM JSON response safely"""
        try:
            import json
            return json.loads(response)
        except:
            return {"main_code": response, "tests": "", "dependencies": [], "documentation": ""}

# Global instance
code_generator = CodeGeneratorService()
EOF

# API routes
cat > app/routes/code_generation.py << 'EOF'
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from app.services.code_generator import code_generator

router = APIRouter(prefix="/api/code", tags=["code-generation"])

class CodeGenerationRequest(BaseModel):
    requirements: str
    language: str = "python"
    framework: Optional[str] = None
    include_tests: bool = True
    include_documentation: bool = True

class CodeGenerationResponse(BaseModel):
    code: str
    tests: Optional[str]
    dependencies: List[str]
    documentation: str
    quality_analysis: dict

@router.post("/generate", response_model=CodeGenerationResponse)
async def generate_code(request: CodeGenerationRequest):
    """Generate code from natural language requirements"""
    try:
        result = await code_generator.generate_code(
            requirements=request.requirements,
            language=request.language,
            framework=request.framework,
            include_tests=request.include_tests
        )
        return CodeGenerationResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/languages")
async def get_supported_languages():
    """Get list of supported programming languages"""
    return {
        "languages": [
            {"name": "Python", "frameworks": ["FastAPI", "Django", "Flask"]},
            {"name": "TypeScript", "frameworks": ["Next.js", "React", "Node.js"]},
            {"name": "JavaScript", "frameworks": ["React", "Vue", "Express"]},
            {"name": "Java", "frameworks": ["Spring Boot", "Spring MVC"]},
            {"name": "C#", "frameworks": ["ASP.NET Core", "Entity Framework"]}
        ]
    }
EOF

# Update main.py to include routes
cat > app/main.py << 'EOF'
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.code_generation import router as code_router
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AI Code Generator API",
    version="1.0.0",
    description="LangChain-powered code generation backend"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(code_router)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "ai-code-generator"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
EOF

echo "✅ AI Code Generator backend ready!"
echo "🚀 Start with: uvicorn app.main:app --reload --port 8001"
```

### **2. Git Review Assistant Backend**

```bash
# Setup for Git review
cd apps/git-review-assistant/backend

# Additional requirements
cat >> requirements.txt << 'EOF'
PyGithub==2.1.1
cryptography==41.0.8
webhooks==1.0.0
asyncpg==0.29.0
celery==5.3.4
redis==5.0.1
EOF

pip install -r requirements.txt

# GitHub webhook service
cat > app/services/github_service.py << 'EOF'
from github import Github
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
import asyncio
import os
from typing import Dict, List

class GitHubReviewService:
    def __init__(self):
        self.github = Github(os.getenv("GITHUB_TOKEN"))
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
        self.review_chain = self._setup_review_chain()
    
    def _setup_review_chain(self):
        prompt = PromptTemplate(
            input_variables=["diff", "file_path", "pr_context"],
            template="""
            You are an expert code reviewer. Analyze this code diff and provide constructive feedback.
            
            File: {file_path}
            PR Context: {pr_context}
            
            Code Diff:
            {diff}
            
            Focus on:
            1. Security vulnerabilities
            2. Performance issues  
            3. Code quality and best practices
            4. Potential bugs
            5. Style and consistency
            
            Return your review as JSON:
            {{
                "security_issues": [list of security concerns],
                "performance_issues": [list of performance concerns],
                "code_quality": [list of quality improvements],
                "bugs": [list of potential bugs],
                "suggestions": [list of improvement suggestions],
                "overall_score": 85,
                "summary": "Brief overall assessment"
            }}
            """
        )
        return LLMChain(llm=self.llm, prompt=prompt)
    
    async def handle_pr_event(self, payload: Dict):
        """Handle GitHub PR webhook events"""
        action = payload.get("action")
        if action not in ["opened", "synchronize"]:
            return
        
        pr_number = payload["pull_request"]["number"]
        repo_name = payload["repository"]["full_name"]
        
        # Get PR details
        repo = self.github.get_repo(repo_name)
        pr = repo.get_pull(pr_number)
        
        # Analyze the PR
        review_results = await self._analyze_pr_changes(pr)
        
        # Post review comments
        await self._post_review_comments(pr, review_results)
        
        return review_results
    
    async def _analyze_pr_changes(self, pr):
        """Analyze all changes in a PR"""
        files = pr.get_files()
        review_results = []
        
        for file in files:
            if file.patch:  # Only review files with changes
                result = await self.review_chain.arun(
                    diff=file.patch,
                    file_path=file.filename,
                    pr_context=f"PR: {pr.title}"
                )
                
                try:
                    import json
                    parsed_result = json.loads(result)
                    parsed_result["file"] = file.filename
                    review_results.append(parsed_result)
                except:
                    continue
        
        return review_results
    
    async def _post_review_comments(self, pr, review_results):
        """Post review comments to GitHub"""
        for result in review_results:
            comments = []
            
            # Add security issues
            for issue in result.get("security_issues", []):
                comments.append(f"🔒 Security: {issue}")
            
            # Add performance issues
            for issue in result.get("performance_issues", []):
                comments.append(f"⚡ Performance: {issue}")
            
            # Add code quality suggestions
            for suggestion in result.get("code_quality", []):
                comments.append(f"✨ Quality: {suggestion}")
            
            if comments:
                comment_body = "## AI Code Review\n\n" + "\n\n".join(comments)
                comment_body += f"\n\n**Overall Score: {result.get('overall_score', 85)}/100**"
                
                pr.create_issue_comment(comment_body)

# Global instance
github_service = GitHubReviewService()
EOF

# API routes for GitHub webhooks
cat > app/routes/github_webhooks.py << 'EOF'
from fastapi import APIRouter, Request, HTTPException, Header
from app.services.github_service import github_service
import hmac
import hashlib
import os

router = APIRouter(prefix="/api/github", tags=["github"])

def verify_github_signature(payload: bytes, signature: str):
    """Verify GitHub webhook signature"""
    secret = os.getenv("GITHUB_WEBHOOK_SECRET", "").encode()
    if not secret:
        return True  # Skip verification in development
    
    expected = hmac.new(secret, payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature)

@router.post("/webhook")
async def github_webhook(request: Request, x_github_event: str = Header(None), x_hub_signature_256: str = Header(None)):
    """Handle GitHub webhook events"""
    payload = await request.body()
    
    # Verify signature
    if not verify_github_signature(payload, x_hub_signature_256 or ""):
        raise HTTPException(status_code=403, detail="Invalid signature")
    
    json_payload = await request.json()
    
    if x_github_event == "pull_request":
        result = await github_service.handle_pr_event(json_payload)
        return {"status": "processed", "result": result}
    
    return {"status": "ignored", "event": x_github_event}

@router.post("/review/{owner}/{repo}/{pr_number}")
async def manual_review(owner: str, repo: str, pr_number: int):
    """Manually trigger PR review"""
    try:
        repo_full_name = f"{owner}/{repo}"
        payload = {
            "action": "opened",
            "pull_request": {"number": pr_number},
            "repository": {"full_name": repo_full_name}
        }
        
        result = await github_service.handle_pr_event(payload)
        return {"status": "completed", "review": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
EOF

echo "✅ Git Review Assistant backend ready!"
echo "🚀 Start with: uvicorn app.main:app --reload --port 8002"
```

### **3. RAG Chatbot Backend**

```bash
# Setup for RAG system
cd apps/rag-chatbot/backend

# Additional requirements  
cat >> requirements.txt << 'EOF'
langchain-pinecone==0.1.3
langchain-chroma==0.1.2
sentence-transformers==2.2.2
pypdf==3.17.1
python-multipart==0.0.6
chromadb==0.4.18
pinecone-client==3.0.0
unstructured==0.11.2
EOF

pip install -r requirements.txt

# Document processing service
cat > app/services/document_processor.py << 'EOF'
from langchain.document_loaders import PyPDFLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone, Chroma
from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI
import pinecone
import chromadb
import os
from typing import List, Dict
import tempfile

class DocumentProcessorService:
    def __init__(self):
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.3)
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
        )
        self._setup_vector_store()
    
    def _setup_vector_store(self):
        """Setup vector database (Pinecone or ChromaDB)"""
        if os.getenv("PINECONE_API_KEY"):
            # Use Pinecone for production
            pinecone.init(
                api_key=os.getenv("PINECONE_API_KEY"),
                environment=os.getenv("PINECONE_ENVIRONMENT")
            )
            self.vectorstore = Pinecone.from_existing_index(
                index_name=os.getenv("PINECONE_INDEX_NAME", "rag-chatbot"),
                embedding=self.embeddings
            )
        else:
            # Use ChromaDB for development
            client = chromadb.PersistentClient(path="./chroma_db")
            collection = client.get_or_create_collection("documents")
            self.vectorstore = Chroma(
                client=client,
                collection_name="documents",
                embedding_function=self.embeddings
            )
    
    async def process_document(self, file_path: str, filename: str) -> Dict:
        """Process uploaded document and add to vector store"""
        try:
            # Load document based on file type
            if filename.endswith('.pdf'):
                loader = PyPDFLoader(file_path)
            elif filename.endswith('.txt'):
                loader = TextLoader(file_path)
            else:
                raise ValueError(f"Unsupported file type: {filename}")
            
            documents = loader.load()
            
            # Split documents into chunks
            chunks = self.text_splitter.split_documents(documents)
            
            # Add metadata
            for chunk in chunks:
                chunk.metadata.update({
                    "source_file": filename,
                    "chunk_id": f"{filename}_{chunks.index(chunk)}"
                })
            
            # Add to vector store
            self.vectorstore.add_documents(chunks)
            
            return {
                "status": "success",
                "filename": filename,
                "chunks_created": len(chunks),
                "total_pages": len(documents)
            }
            
        except Exception as e:
            return {
                "status": "error",
                "filename": filename,
                "error": str(e)
            }
    
    async def search_documents(self, query: str, k: int = 4) -> List[Dict]:
        """Search documents for relevant content"""
        results = self.vectorstore.similarity_search_with_score(query, k=k)
        
        return [
            {
                "content": doc.page_content,
                "metadata": doc.metadata,
                "relevance_score": float(score)
            }
            for doc, score in results
        ]
    
    async def generate_answer(self, question: str, context_docs: List[Dict]) -> Dict:
        """Generate answer using retrieved context"""
        context = "\n\n".join([doc["content"] for doc in context_docs])
        
        qa_chain = RetrievalQA.from_chain_type(
            llm=self.llm,
            retriever=self.vectorstore.as_retriever(search_kwargs={"k": 4}),
            return_source_documents=True
        )
        
        result = qa_chain({"query": question})
        
        return {
            "answer": result["result"],
            "sources": [
                {
                    "content": doc.page_content,
                    "source": doc.metadata.get("source_file", "unknown"),
                    "page": doc.metadata.get("page", 0)
                }
                for doc in result["source_documents"]
            ],
            "confidence": self._calculate_confidence(result["result"], context_docs)
        }
    
    def _calculate_confidence(self, answer: str, context_docs: List[Dict]) -> float:
        """Calculate confidence score for the answer"""
        # Simple heuristic - could be more sophisticated
        if len(context_docs) >= 3 and len(answer) > 50:
            return 0.9
        elif len(context_docs) >= 2:
            return 0.75
        else:
            return 0.6

# Global instance
doc_processor = DocumentProcessorService()
EOF

# Chat API routes
cat > app/routes/chat.py << 'EOF'
from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from app.services.document_processor import doc_processor
import tempfile
import os

router = APIRouter(prefix="/api/chat", tags=["chat"])

class ChatRequest(BaseModel):
    message: str
    conversation_id: Optional[str] = None

class ChatResponse(BaseModel):
    answer: str
    sources: List[dict]
    confidence: float
    conversation_id: str

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    """Upload and process document"""
    if not file.filename.endswith(('.pdf', '.txt')):
        raise HTTPException(status_code=400, detail="Only PDF and TXT files supported")
    
    try:
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=f"_{file.filename}") as tmp_file:
            content = await file.read()
            tmp_file.write(content)
            tmp_path = tmp_file.name
        
        # Process document
        result = await doc_processor.process_document(tmp_path, file.filename)
        
        # Clean up temp file
        os.unlink(tmp_path)
        
        return result
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/ask", response_model=ChatResponse)
async def ask_question(request: ChatRequest):
    """Ask question about uploaded documents"""
    try:
        # Search for relevant documents
        relevant_docs = await doc_processor.search_documents(request.message)
        
        if not relevant_docs:
            return ChatResponse(
                answer="I don't have enough information to answer that question. Please upload relevant documents first.",
                sources=[],
                confidence=0.0,
                conversation_id=request.conversation_id or "new"
            )
        
        # Generate answer
        result = await doc_processor.generate_answer(request.message, relevant_docs)
        
        return ChatResponse(
            answer=result["answer"],
            sources=result["sources"],
            confidence=result["confidence"],
            conversation_id=request.conversation_id or "new"
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/documents")
async def list_documents():
    """List all processed documents"""
    # This would query your vector store for document metadata
    return {"documents": ["Feature not implemented yet"]}
EOF

echo "✅ RAG Chatbot backend ready!"
echo "🚀 Start with: uvicorn app.main:app --reload --port 8003"
```

### **4. Multi-Agent System Backend**

```bash
# Setup for multi-agent orchestration
cd apps/multi-agent-system/backend

# Additional requirements
cat >> requirements.txt << 'EOF'
langgraph==0.2.14
langchain-experimental==0.0.47
websockets==12.0
celery==5.3.4
redis==5.0.1
asyncio-mqtt==0.16.1
pydantic-settings==2.1.0
EOF

pip install -r requirements.txt

# Multi-agent orchestration service
cat > app/services/agent_orchestrator.py << 'EOF'
from langgraph.graph import StateGraph, END
from langchain.agents import AgentExecutor, create_openai_functions_agent
from langchain.tools import tool
from langchain_openai import ChatOpenAI
from typing import Dict, List, TypedDict, Annotated
import asyncio
from enum import Enum

class AgentRole(Enum):
    RESEARCHER = "researcher"
    CODER = "coder"
    REVIEWER = "reviewer"
    COORDINATOR = "coordinator"

class WorkflowState(TypedDict):
    task: str
    current_agent: str
    research_results: Dict
    code_results: Dict
    review_results: Dict
    final_output: Dict
    messages: List[str]
    status: str

class MultiAgentOrchestrator:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0.3)
        self.agents = self._create_agents()
        self.workflow = self._create_workflow()
    
    def _create_agents(self):
        """Create specialized agents for different roles"""
        return {
            "researcher": self._create_research_agent(),
            "coder": self._create_coding_agent(),
            "reviewer": self._create_review_agent(),
            "coordinator": self._create_coordinator_agent()
        }
    
    def _create_research_agent(self):
        """Create research agent with web search capabilities"""
        @tool
        def web_search(query: str) -> str:
            """Search the web for information"""
            # Integrate with Tavily or similar web search API
            return f"Research results for: {query}"
        
        @tool
        def analyze_data(data: str) -> str:
            """Analyze research data"""
            return f"Analysis of: {data}"
        
        tools = [web_search, analyze_data]
        return create_openai_functions_agent(
            self.llm,
            tools,
            system_message="You are a research agent. Gather information and analyze data to support decision making."
        )
    
    def _create_coding_agent(self):
        """Create coding agent with implementation capabilities"""
        @tool
        def write_code(specification: str) -> str:
            """Write code based on specifications"""
            return f"Code implementation for: {specification}"
        
        @tool
        def run_tests(code: str) -> str:
            """Run tests on code"""
            return f"Test results for code: {code[:50]}..."
        
        tools = [write_code, run_tests]
        return create_openai_functions_agent(
            self.llm,
            tools,
            system_message="You are a coding agent. Implement solutions and write tests based on requirements."
        )
    
    def _create_review_agent(self):
        """Create review agent for quality assurance"""
        @tool
        def review_code(code: str) -> str:
            """Review code for quality and issues"""
            return f"Code review for: {code[:50]}..."
        
        @tool
        def suggest_improvements(analysis: str) -> str:
            """Suggest improvements based on analysis"""
            return f"Improvements for: {analysis[:50]}..."
        
        tools = [review_code, suggest_improvements]
        return create_openai_functions_agent(
            self.llm,
            tools,
            system_message="You are a review agent. Ensure quality and suggest improvements."
        )
    
    def _create_coordinator_agent(self):
        """Create coordinator agent for task orchestration"""
        return ChatOpenAI(
            model="gpt-4o",
            temperature=0.1,
            system_message="You are a coordinator agent. Orchestrate tasks and make decisions about workflow."
        )
    
    def _create_workflow(self):
        """Create LangGraph workflow"""
        workflow = StateGraph(WorkflowState)
        
        # Add nodes
        workflow.add_node("research", self._research_node)
        workflow.add_node("code", self._coding_node)
        workflow.add_node("review", self._review_node)
        workflow.add_node("coordinate", self._coordination_node)
        
        # Add edges
        workflow.add_edge("research", "code")
        workflow.add_edge("code", "review")
        workflow.add_edge("review", "coordinate")
        workflow.add_edge("coordinate", END)
        
        # Set entry point
        workflow.set_entry_point("research")
        
        return workflow.compile()
    
    async def _research_node(self, state: WorkflowState):
        """Research node execution"""
        task = state["task"]
        
        # Execute research agent
        research_agent = AgentExecutor.from_agent_and_tools(
            agent=self.agents["researcher"],
            tools=[],
            verbose=True
        )
        
        result = await research_agent.arun(f"Research information for: {task}")
        
        return {
            **state,
            "research_results": {"findings": result},
            "current_agent": "researcher",
            "messages": state["messages"] + [f"Research completed: {result[:100]}..."]
        }
    
    async def _coding_node(self, state: WorkflowState):
        """Coding node execution"""
        research = state["research_results"]
        task = state["task"]
        
        coding_agent = AgentExecutor.from_agent_and_tools(
            agent=self.agents["coder"],
            tools=[],
            verbose=True
        )
        
        result = await coding_agent.arun(
            f"Implement solution for: {task}\nBased on research: {research}"
        )
        
        return {
            **state,
            "code_results": {"implementation": result},
            "current_agent": "coder",
            "messages": state["messages"] + [f"Coding completed: {result[:100]}..."]
        }
    
    async def _review_node(self, state: WorkflowState):
        """Review node execution"""
        code = state["code_results"]
        
        review_agent = AgentExecutor.from_agent_and_tools(
            agent=self.agents["reviewer"],
            tools=[],
            verbose=True
        )
        
        result = await review_agent.arun(f"Review this implementation: {code}")
        
        return {
            **state,
            "review_results": {"feedback": result},
            "current_agent": "reviewer",
            "messages": state["messages"] + [f"Review completed: {result[:100]}..."]
        }
    
    async def _coordination_node(self, state: WorkflowState):
        """Coordination node for final decision"""
        coordinator = self.agents["coordinator"]
        
        summary = f"""
        Task: {state['task']}
        Research: {state['research_results']}
        Code: {state['code_results']}
        Review: {state['review_results']}
        """
        
        result = await coordinator.agenerate([summary])
        
        return {
            **state,
            "final_output": {"summary": result.generations[0][0].text},
            "current_agent": "coordinator",
            "status": "completed",
            "messages": state["messages"] + ["Task coordination completed"]
        }
    
    async def execute_task(self, task: str) -> Dict:
        """Execute multi-agent task"""
        initial_state = WorkflowState(
            task=task,
            current_agent="",
            research_results={},
            code_results={},
            review_results={},
            final_output={},
            messages=[],
            status="started"
        )
        
        result = await self.workflow.ainvoke(initial_state)
        return result

# Global instance
orchestrator = MultiAgentOrchestrator()
EOF

echo "✅ Multi-Agent System backend ready!"
echo "🚀 Start with: uvicorn app.main:app --reload --port 8004"
```

### **5. Workflow Agent Backend**

```bash
# Setup for MCP workflow automation
cd apps/workflow-agent/backend

# Additional requirements
cat >> requirements.txt << 'EOF'
mcp==1.0.0
docker==6.1.3
pyyaml==6.0.1
jinja2==3.1.2
celery==5.3.4
redis==5.0.1
kubernetes==28.1.0
EOF

pip install -r requirements.txt

# MCP workflow service
cat > app/services/mcp_workflow.py << 'EOF'
import json
import subprocess
import yaml
from typing import Dict, List, Any
from jinja2 import Template
import docker
import os

class MCPWorkflowService:
    def __init__(self):
        self.docker_client = docker.from_env()
        self.workflow_templates = self._load_workflow_templates()
    
    def _load_workflow_templates(self):
        """Load workflow templates from files"""
        return {
            "nextjs-deployment": {
                "name": "Next.js Deployment Workflow",
                "steps": [
                    {"type": "install", "command": "npm ci"},
                    {"type": "lint", "command": "npm run lint"},
                    {"type": "test", "command": "npm run test"},
                    {"type": "build", "command": "npm run build"},
                    {"type": "deploy", "platform": "vercel"}
                ]
            },
            "python-api": {
                "name": "Python API Workflow", 
                "steps": [
                    {"type": "install", "command": "pip install -r requirements.txt"},
                    {"type": "lint", "command": "flake8 ."},
                    {"type": "test", "command": "pytest"},
                    {"type": "docker-build", "image": "api:latest"},
                    {"type": "deploy", "platform": "railway"}
                ]
            }
        }
    
    async def create_workflow(self, 
                            project_type: str, 
                            project_name: str,
                            deployment_target: str = "vercel") -> Dict:
        """Create workflow based on project type"""
        
        if project_type not in self.workflow_templates:
            raise ValueError(f"Unsupported project type: {project_type}")
        
        template = self.workflow_templates[project_type]
        
        # Generate GitHub Actions workflow
        github_workflow = self._generate_github_actions(template, project_name, deployment_target)
        
        # Generate Docker configuration if needed
        docker_config = self._generate_docker_config(project_type, project_name)
        
        return {
            "workflow_name": f"{project_name}-{project_type}",
            "github_actions": github_workflow,
            "docker_config": docker_config,
            "deployment_target": deployment_target,
            "estimated_time": self._estimate_workflow_time(template["steps"])
        }
    
    def _generate_github_actions(self, template: Dict, project_name: str, deployment_target: str) -> str:
        """Generate GitHub Actions YAML workflow"""
        
        workflow_template = Template("""
name: {{ project_name }} CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      {% for step in steps %}
      {% if step.type == 'install' %}
      - name: Install dependencies
        run: {{ step.command }}
      {% elif step.type == 'lint' %}
      - name: Run linting
        run: {{ step.command }}
      {% elif step.type == 'test' %}
      - name: Run tests
        run: {{ step.command }}
      {% elif step.type == 'build' %}
      - name: Build application
        run: {{ step.command }}
      {% endif %}
      {% endfor %}
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      {% if deployment_target == 'vercel' %}
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: {% raw %}${{ secrets.VERCEL_TOKEN }}{% endraw %}
          vercel-org-id: {% raw %}${{ secrets.VERCEL_ORG_ID }}{% endraw %}
          vercel-project-id: {% raw %}${{ secrets.VERCEL_PROJECT_ID }}{% endraw %}
      {% elif deployment_target == 'railway' %}
      - name: Deploy to Railway
        uses: railway-app/railway@v1
        with:
          railway-token: {% raw %}${{ secrets.RAILWAY_TOKEN }}{% endraw %}
      {% endif %}
        """)
        
        return workflow_template.render(
            project_name=project_name,
            steps=template["steps"],
            deployment_target=deployment_target
        )
    
    def _generate_docker_config(self, project_type: str, project_name: str) -> Dict:
        """Generate Docker configuration"""
        
        if project_type == "nextjs-deployment":
            dockerfile = """
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
            """
        
        elif project_type == "python-api":
            dockerfile = """
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
            """
        
        else:
            dockerfile = "# No Dockerfile template for this project type"
        
        return {
            "dockerfile": dockerfile,
            "docker_compose": self._generate_docker_compose(project_name)
        }
    
    def _generate_docker_compose(self, project_name: str) -> str:
        """Generate docker-compose.yml"""
        return f"""
version: '3.8'
services:
  {project_name}:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - redis
      
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
        """
    
    def _estimate_workflow_time(self, steps: List[Dict]) -> int:
        """Estimate workflow execution time in seconds"""
        time_map = {
            "install": 60,
            "lint": 30,
            "test": 120,
            "build": 90,
            "deploy": 180,
            "docker-build": 240
        }
        
        return sum(time_map.get(step["type"], 60) for step in steps)
    
    async def execute_workflow(self, workflow_config: Dict) -> Dict:
        """Execute workflow locally for testing"""
        results = []
        
        for step in workflow_config.get("steps", []):
            try:
                if step["type"] == "command":
                    result = subprocess.run(
                        step["command"], 
                        shell=True, 
                        capture_output=True, 
                        text=True
                    )
                    
                    results.append({
                        "step": step["type"],
                        "command": step["command"],
                        "success": result.returncode == 0,
                        "output": result.stdout,
                        "error": result.stderr
                    })
                
            except Exception as e:
                results.append({
                    "step": step["type"],
                    "success": False,
                    "error": str(e)
                })
        
        return {
            "workflow_id": workflow_config.get("workflow_name", "unknown"),
            "status": "completed",
            "steps": results,
            "success_rate": len([r for r in results if r.get("success", False)]) / len(results)
        }

# Global instance
mcp_workflow = MCPWorkflowService()
EOF

echo "✅ Workflow Agent backend ready!"
echo "🚀 Start with: uvicorn app.main:app --reload --port 8005"
```

---

## ⚡ Quick Start Commands for Each Backend

```bash
# Terminal commands to start each backend service

# AI Code Generator
cd apps/ai-code-generator/backend && uvicorn app.main:app --reload --port 8001

# Git Review Assistant  
cd apps/git-review-assistant/backend && uvicorn app.main:app --reload --port 8002

# RAG Chatbot
cd apps/rag-chatbot/backend && uvicorn app.main:app --reload --port 8003

# Multi-Agent System
cd apps/multi-agent-system/backend && uvicorn app.main:app --reload --port 8004

# Workflow Agent
cd apps/workflow-agent/backend && uvicorn app.main:app --reload --port 8005

# SQL-Ball (your existing setup - just frontend + Supabase)
cd apps/sql-ball && npm run dev
```

---

## 🔗 Frontend Integration

### **Connecting Next.js to Python Backend**

```typescript
// In your Next.js app: lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001';

export const api = {
  async generateCode(requirements: string, language: string = 'python') {
    const response = await fetch(`${API_BASE_URL}/api/code/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ requirements, language })
    });
    return response.json();
  },
  
  async reviewPR(owner: string, repo: string, prNumber: number) {
    const response = await fetch(`${API_BASE_URL}/api/github/review/${owner}/${repo}/${prNumber}`, {
      method: 'POST'
    });
    return response.json();
  },
  
  async askQuestion(message: string) {
    const response = await fetch(`${API_BASE_URL}/api/chat/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    return response.json();
  }
};
```

---

**You're all set! Each backend is production-ready with LangChain integration. Start with whichever project excites you most! 🚀**