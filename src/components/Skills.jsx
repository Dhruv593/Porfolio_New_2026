// src/components/Skills.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Sparkles,
  Zap,
  Database,
  Cloud,
  Brain,
  Rocket
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: "all", label: "All Skills", icon: Sparkles },
    { id: "ml", label: "Machine Learning", icon: Brain },
    { id: "web", label: "Web Development", icon: Code2 },
    { id: "tools", label: "Tools & DevOps", icon: Cloud },
  ];

  const skillsData = [
    // Machine Learning
    {
      name: "PyTorch",
      category: "ml",
      icon: "🔥",
      gradient: "from-orange-500 to-red-600",
      description: "Deep Learning & Neural Networks"
    },
    {
      name: "TensorFlow",
      category: "ml",
      icon: "🧠",
      gradient: "from-amber-500 to-orange-600",
      description: "ML Model Development"
    },
    {
      name: "Scikit-Learn",
      category: "ml",
      icon: "📊",
      gradient: "from-blue-500 to-cyan-600",
      description: "Classical ML Algorithms"
    },
    {
      name: "Computer Vision",
      category: "ml",
      icon: "👁️",
      gradient: "from-violet-500 to-purple-600",
      description: "Image Processing & CNNs"
    },
    {
      name: "NLP",
      category: "ml",
      icon: "💬",
      gradient: "from-emerald-500 to-teal-600",
      description: "Text Analysis & LLMs"
    },
    {
      name: "MLflow",
      category: "ml",
      icon: "🔄",
      gradient: "from-pink-500 to-rose-600",
      description: "ML Experiment Tracking"
    },

    // Web Development
    {
      name: "React",
      category: "web",
      icon: "⚛️",
      gradient: "from-cyan-500 to-blue-600",
      description: "UI Development & SPAs"
    },
    {
      name: "Next.js",
      category: "web",
      icon: "▲",
      gradient: "from-slate-700 to-slate-900",
      description: "Full-Stack React Framework"
    },
    {
      name: "Node.js",
      category: "web",
      icon: "🟢",
      gradient: "from-green-500 to-emerald-600",
      description: "Backend Development"
    },
    {
      name: "FastAPI",
      category: "web",
      icon: "⚡",
      gradient: "from-teal-500 to-cyan-600",
      description: "Python REST APIs"
    },
    {
      name: "MongoDB",
      category: "web",
      icon: "🍃",
      gradient: "from-green-600 to-lime-600",
      description: "NoSQL Database"
    },
    {
      name: "PostgreSQL",
      category: "web",
      icon: "🐘",
      gradient: "from-blue-600 to-indigo-600",
      description: "Relational Database"
    },

    // Tools & DevOps
    {
      name: "Docker",
      category: "tools",
      icon: "🐳",
      gradient: "from-blue-500 to-cyan-600",
      description: "Containerization"
    },
    {
      name: "Kubernetes",
      category: "tools",
      icon: "☸️",
      gradient: "from-indigo-500 to-blue-600",
      description: "Container Orchestration"
    },
    {
      name: "Git",
      category: "tools",
      icon: "📂",
      gradient: "from-orange-500 to-red-600",
      description: "Version Control"
    },
    {
      name: "AWS",
      category: "tools",
      icon: "☁️",
      gradient: "from-yellow-500 to-orange-600",
      description: "Cloud Infrastructure"
    },
    {
      name: "GCP",
      category: "tools",
      icon: "🌐",
      gradient: "from-blue-600 to-indigo-600",
      description: "Google Cloud Platform"
    },
    {
      name: "CI/CD",
      category: "tools",
      icon: "🔧",
      gradient: "from-violet-500 to-purple-600",
      description: "Automated Deployment"
    },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const expertise = [
    {
      title: "Machine Learning & AI",
      description: "Deep Learning, Computer Vision, NLP, Time Series, Model Deployment",
      icon: Brain,
      gradient: "from-violet-500 to-purple-500",
      skills: ["PyTorch", "TensorFlow", "MLflow", "Scikit-Learn"]
    },
    {
      title: "Full-Stack Development",
      description: "React, Next.js, Node.js, FastAPI, MongoDB, PostgreSQL",
      icon: Code2,
      gradient: "from-cyan-500 to-blue-500",
      skills: ["React", "Node.js", "FastAPI", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      description: "Docker, Kubernetes, AWS, GCP, CI/CD, Infrastructure as Code",
      icon: Cloud,
      gradient: "from-emerald-500 to-teal-500",
      skills: ["Docker", "K8s", "AWS", "GCP"]
    },
    {
      title: "Data Science & Analytics",
      description: "Data Processing, Visualization, Statistical Analysis, Big Data",
      icon: Database,
      gradient: "from-pink-500 to-rose-500",
      skills: ["Pandas", "NumPy", "Matplotlib", "SQL"]
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        
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
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-pink-500/10 border border-violet-500/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-violet-600" size={18} />
            </motion.div>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Technical Expertise
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Skills &</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400">
              Technologies
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive toolkit built through{" "}
            <span className="font-semibold text-violet-600">hands-on experience</span> and{" "}
            <span className="font-semibold text-cyan-600">continuous learning</span>
          </motion.p>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg"
                      : "bg-white/80 border border-slate-200 text-slate-700 hover:border-violet-300"
                  }`}
                >
                  <Icon size={16} />
                  {cat.label}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {expertise.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="light-glass rounded-2xl p-6 border-2 border-white/50 group relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-lg mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </motion.div>

                <h3 className="relative text-lg font-black text-slate-900 mb-2">
                  {area.title}
                </h3>

                <p className="relative text-sm text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="relative flex flex-wrap gap-2">
                  {area.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-white/80 border border-slate-200 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid - Simple Cards */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                animate={hoveredSkill === skill.name ? { opacity: 0.3 } : { opacity: 0 }}
                className={`absolute -inset-1 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-lg`}
              />

              {/* Card */}
              <div className="relative light-glass rounded-2xl p-6 border-2 border-white/50 text-center h-full flex flex-col items-center justify-center">
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <h4 className="text-lg font-black text-slate-900 mb-2">
                  {skill.name}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-600 font-medium">
                  {skill.description}
                </p>

                {/* Hover Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredSkill === skill.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ${skill.gradient} text-white text-xs font-bold shadow-lg whitespace-nowrap`}
                >
                  Expert Level
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 light-glass rounded-3xl p-8 sm:p-10 border-2 border-white/50 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white text-4xl mb-6 shadow-2xl"
            >
              🚀
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              Continuously Learning & Growing
            </h3>

            <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Always exploring new technologies and methodologies. Currently diving deep into{" "}
              <span className="font-bold text-violet-600">Advanced MLOps</span>,{" "}
              <span className="font-bold text-cyan-600">Distributed Systems</span>, and{" "}
              <span className="font-bold text-pink-600">Edge AI</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["MLOps", "Edge AI", "Web3", "Quantum ML"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30 text-sm font-bold text-slate-700"
                >
                  📚 {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
