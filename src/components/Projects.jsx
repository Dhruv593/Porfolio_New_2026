// src/components/Projects.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Star,
  Code2,
  TrendingUp,
  Eye,
  Heart
} from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "ml", "web", "research"];

  const projects = [
    {
      id: 1,
      title: "AI Medical Diagnosis System",
      category: "ml",
      description: "End-to-end eye disease screening platform with CNN models, FastAPI backend, and React dashboard. Achieved 94% accuracy on test set.",
      tech: ["PyTorch", "FastAPI", "React", "Docker", "GCP"],
      stats: { stars: 142, views: "8.2K", likes: 267 },
      impact: "Reduced screening time by 60%",
      github: "#",
      live: "#",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      id: 2,
      title: "Time Series Forecasting Platform",
      category: "ml",
      description: "Forecasting suite with ARIMA, SARIMA, and LSTM models. Interactive dashboards with MLflow experiment tracking.",
      tech: ["Python", "PyTorch", "MLflow", "Streamlit"],
      stats: { stars: 47, views: "2.3K", likes: 89 },
      impact: "23% accuracy improvement",
      github: "#",
      live: "#",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Bio-Inspired Optimization Library",
      category: "research",
      description: "Reusable Python implementations of genetic algorithms, PSO, ACO for ML hyperparameter tuning.",
      tech: ["Python", "NumPy", "Matplotlib", "SciPy"],
      stats: { stars: 134, views: "5.1K", likes: 203 },
      impact: "Published at IEEE Conference",
      github: "#",
      live: "#",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Real-Time ML Inference API",
      category: "web",
      description: "Containerized microservices with auto-scaling, monitoring, and CI/CD. Handles 500+ req/sec with <220ms latency.",
      tech: ["Docker", "Kubernetes", "FastAPI", "Redis"],
      stats: { stars: 92, views: "3.7K", likes: 156 },
      impact: "Deployment time: 2 days → 15 min",
      github: "#",
      live: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "MLOps Pipeline & Dashboard",
      category: "ml",
      description: "Full MLOps workflow with automated training, versioning, drift detection, and retraining triggers.",
      tech: ["MLflow", "DVC", "Airflow", "PostgreSQL"],
      stats: { stars: 78, views: "2.9K", likes: 124 },
      impact: "90% automation achieved",
      github: "#",
      live: "#",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      title: "E-Commerce Analytics Dashboard",
      category: "web",
      description: "Full-stack analytics platform with real-time metrics, user behavior tracking, and revenue forecasting.",
      tech: ["Next.js", "Node.js", "MongoDB", "Vercel"],
      stats: { stars: 65, views: "1.8K", likes: 98 },
      impact: "Real-time insights for 10K+ users",
      github: "#",
      live: "#",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-pink-500/10 border border-violet-500/20"
          >
            <Star className="text-violet-600" size={18} />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Featured</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400">
              Projects
            </span>
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white/80 border border-slate-200 text-slate-700 hover:border-violet-300"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid - All Same Size */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}
              />

              {/* Card */}
              <div className="relative h-full light-glass rounded-3xl p-6 border-2 border-white/50 flex flex-col">
                
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500" />
                      <span className="font-semibold">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      <span className="font-semibold">{project.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={12} className="text-pink-500" />
                      <span className="font-semibold">{project.stats.likes}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <TrendingUp size={14} className="text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-700">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-white/80 border border-slate-200 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-2 mt-auto">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-sm hover:border-slate-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold text-sm shadow-lg`}
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
