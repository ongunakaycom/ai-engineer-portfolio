export const profile = {
  name: "Ongun Akay",
  title: "Senior Full-Stack Engineer — AI/LLM Integration",
  tagline:
    "Building production RAG systems, agentic workflows, and LLM-powered applications.",
  location: "Remote / Global",
  email: "info@ongunakay.com",
  website: "https://ongunakay.com",
  github: "https://github.com/ongunakaycom",
  linkedin: "https://linkedin.com/in/ongunakay",
  bio: `I'm a Senior Full-Stack Engineer specializing in AI/LLM integration.
I bridge traditional software engineering with modern AI systems —
shipping production RAG pipelines, agentic workflows, and LLM-powered apps.`,
  knowsAbout: [
    "AI Engineering",
    "Large Language Models",
    "RAG",
    "LangChain",
    "Agentic AI",
    "MCP",
    "Fine-tuning",
    "Vector Databases",
    "TypeScript",
    "Python",
    "Next.js",
    "Angular",
  ],
};

export const skills = {
  ai: [
    "LangChain",
    "LlamaIndex",
    "OpenAI API",
    "Anthropic Claude",
    "Hugging Face Transformers",
    "RAG pipelines",
    "pgvector",
    "Pinecone",
    "Chroma",
    "Fine-tuning (LoRA/QLoRA)",
    "Prompt Engineering",
    "LangGraph",
    "CrewAI",
    "MCP (Model Context Protocol)",
    "Embeddings",
  ],
  engineering: [
    "TypeScript",
    "Python",
    "Node.js",
    "Next.js",
    "React",
    "Angular",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AWS",
    "GitHub Actions",
  ],
  ml: ["PyTorch", "scikit-learn", "Pandas", "Jupyter"],
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  demo?: string;
  repo?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    slug: "chat-with-cv",
    name: "Chat with My CV",
    description:
      "RAG-powered chatbot that answers questions about my experience using my CV as context. Streaming responses, grounded answers.",
    stack: ["Next.js", "Vercel AI SDK", "Groq", "Llama 3.3"],
    demo: "/chat",
    repo: "https://github.com/ongunakaycom/ai-engineer-portfolio",
    highlight: true,
  },
  {
    slug: "mcp-server",
    name: "MCP Server Toolkit",
    description:
      "Model Context Protocol server exposing custom tools to Claude Desktop and other LLM clients.",
    stack: ["TypeScript", "MCP SDK", "Node.js"],
    repo: "https://github.com/ongunakaycom/mcp-server",
    highlight: true,
  },
  {
    slug: "rag-docs",
    name: "RAG over Documentation",
    description:
      "Production RAG pipeline with hybrid search (BM25 + embeddings), re-ranking, and evaluation harness.",
    stack: ["Python", "FastAPI", "LlamaIndex", "Pinecone", "Ragas"],
    repo: "https://github.com/ongunakaycom/rag-docs",
  },
];