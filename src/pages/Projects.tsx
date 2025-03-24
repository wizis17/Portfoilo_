
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { 
  ExternalLink, 
  Github, 
  Code, 
  MonitorSmartphone,
  Database,
  Bot,
  Cpu,
  Filter,
  Search,
  FileCode,
  BarChart,
  Brain
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Income Tax Fraud Detection",
      description: "Developed a system to detect fraudulent activities in income tax filings using AI and machine learning techniques. Implemented data preprocessing, feature engineering, and model training.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "Machine Learning", "AI"],
      demo: "#",
      code: "#",
      category: "ai"
    },
    {
      id: 2,
      title: "Oral Cancer Detection using Neural Networks",
      description: "Developing a machine learning model to detect and classify oral cancer levels from images. It involves data collection, preprocessing, feature extraction, and model evaluation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "TensorFlow", "Neural Networks"],
      demo: "#",
      code: "#",
      category: "ai"
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection",
      description: "A simple machine learning model which analyzes whether a credit card transaction is fraudulent or not. The dataset is downloaded from Kaggle and processed for analysis.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "Machine Learning", "Data Science"],
      demo: "#",
      code: "#",
      category: "ai"
    },
    {
      id: 4,
      title: "Contextualized Topic Modeling",
      description: "A python package to run contextualized topic modeling. CTMs combine contextualized embeddings (e.g., BERT) with topic models to get coherent topics and document classification.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "NLP", "Machine Learning"],
      demo: "#",
      code: "#",
      category: "ai"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and payment processing.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Node.js", "React", "MongoDB"],
      demo: "#",
      code: "#",
      category: "web"
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demo: "#",
      code: "#",
      category: "web"
    },
    {
      id: 7,
      title: "Blockchain Explorer",
      description: "A web interface for exploring blockchain data and transactions.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "React", "Blockchain", "Web3.js"],
      demo: "#",
      code: "#",
      category: "blockchain"
    },
    {
      id: 8,
      title: "Smart Home Dashboard",
      description: "A dashboard for monitoring and controlling smart home devices.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
      tags: ["C", "IoT", "NArdiuno"],
      demo: "#",
      code: "#",
      category: "iot"
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return <Bot className="w-5 h-5" />;
      case "web":
        return <MonitorSmartphone className="w-5 h-5" />;
      case "blockchain":
        return <Database className="w-5 h-5" />;
      case "iot":
        return <Cpu className="w-5 h-5" />;
      case "ml":
        return <Brain className="w-5 h-5" />;
      case "data":
        return <BarChart className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" },
    { id: "blockchain", name: "Blockchain" },
    { id: "iot", name: "IoT" }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-brand-purple text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-panel rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-xs font-medium z-10">
                      {getIcon(project.category)}
                      <span className="ml-1.5 capitalize">{project.category === "iot" ? "IoT" : project.category === "ai" ? "AI & ML" : project.category}</span>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs py-1 px-3 bg-secondary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <motion.a
                        href={project.demo}
                        className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-1.5 h-4 w-4" />
                        Live Demo
                      </motion.a>
                      
                      <motion.a
                        href={project.code}
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mr-1.5 h-4 w-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
