export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  image?: string;
  link?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "strigroot",
    title: "STRIGROOT: A Wolfram Mathematica Package",
    summary:
      "Multiscale modeling package coupling strigolactone biosynthesis with 3D maize root system architecture.",
    tech: ["Wolfram Mathematica", "ODEs", "Multiscale Modeling"],
    image: "/projects/package.png",
    link: "https://community.wolfram.com/groups/-/m/t/3145876",
    featured: true,
  },
  {
    slug: "roche-des",
    title: "Discrete Event Simulation at Roche",
    summary:
      "Optimized simulation parameters, resolved throughput bottlenecks and built visualizations for stakeholder decisions at Roche.",
    tech: ["Discrete Event Simulation", "Python", "Data Visualization"],
    featured: true,
  },
  {
    slug: "restaurant-concierge-mcp",
    title: "Restaurant Concierge: Local LLM Agent over MCP",
    summary:
      "Chatbot that recommends restaurants by calling tools on a Model Context Protocol server, so answers come from data rather than the model. Runs locally with Ollama and is tested in CI.",
    tech: ["Python", "MCP", "LangChain", "Ollama", "Gradio", "pytest"],
    link: "https://github.com/abellucido/restaurant-concierge-mcp",
    featured: false,
  },
  {
    slug: "protein-variant-design",
    title: "AI-Guided Design of α-Amylase Variants",
    summary:
      "Embedded 128 enzyme sequences with ProtBert, compared five neural networks for predicting activity, then used the best model to guide an in-silico mutation search for new variants.",
    tech: ["PyTorch", "ProtBert", "Transformers", "Protein Engineering"],
    link: "https://github.com/abellucido/AI_model_for_protein_variants_generation",
    featured: false,
  },
  {
    slug: "clinical-biomarker-workflow",
    title: "Biostatistics Workflow for Clinical Algorithms",
    summary:
      "Estimates the patient sample size needed for a target AUC and number of biomarkers, balances cost against samples, then identifies biomarkers with Lasso logistic regression on synthetic data.",
    tech: ["Python", "scikit-learn", "Biostatistics", "Jupyter"],
    link: "https://github.com/abellucido/clinical_algorithm_workflow",
    featured: false,
  },
];