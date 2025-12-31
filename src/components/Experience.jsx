// src/components/Experience.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin,
  Sparkles,
  TrendingUp,
  Rocket
} from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState(null);

  const experiences = [
    {
      id: 1,
      type: "education",
      icon: GraduationCap,
      title: "M.Tech in AI / ML",
      organization: "Your University",
      location: "Mumbai, India",
      period: "2024 – Present",
      description: "Advanced coursework in deep learning, optimization algorithms, and computational data science. Building production-grade ML systems.",
      achievements: [
        "Published 2 research papers",
        "Built 5+ production ML systems",
        "Led optimization research team"
      ],
      skills: ["Deep Learning", "Optimization", "MLOps", "Research"],
      gradient: "from-violet-500 to-purple-500",
      badge: "Current",
      badgeColor: "bg-emerald-500"
    },
    {
      id: 2,
      type: "work",
      icon: Briefcase,
      title: "ML Engineer Intern",
      organization: "Tech Company",
      location: "Remote",
      period: "2023 – 2024",
      description: "Built end-to-end ML pipelines, deployed models to production, and reduced inference latency by 72.5%.",
      achievements: [
        "Reduced latency from 800ms to 220ms",
        "Deployed 12+ models to production",
        "Implemented CI/CD pipeline"
      ],
      skills: ["PyTorch", "FastAPI", "Docker", "GCP", "Kubernetes"],
      gradient: "from-cyan-500 to-blue-500",
      badge: "6 months",
      badgeColor: "bg-cyan-500"
    },
    {
      id: 3,
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in Computer Science",
      organization: "Your College",
      location: "India",
      period: "2020 – 2024",
      description: "Graduated with honors. Strong foundation in algorithms, data structures, and software engineering.",
      achievements: [
        "9.2 CGPA (Top 5%)",
        "Won 3 hackathons",
        "Teaching Assistant for DSA"
      ],
      skills: ["DSA", "Software Engineering", "ML Fundamentals"],
      gradient: "from-emerald-500 to-teal-500",
      badge: "Honors",
      badgeColor: "bg-violet-500"
    },
    {
      id: 4,
      type: "achievement",
      icon: Award,
      title: "Research Publication",
      organization: "International Conference",
      location: "Virtual",
      period: "2023",
      description: "Published research on bio-inspired optimization algorithms for ML hyperparameter tuning.",
      achievements: [
        "Accepted at IEEE Conference",
        "10+ citations in first year",
        "Featured in university showcase"
      ],
      skills: ["Research", "Genetic Algorithms", "PSO", "Writing"],
      gradient: "from-pink-500 to-rose-500",
      badge: "Published",
      badgeColor: "bg-pink-500"
    },
  ];

  const getTypeColor = (type) => {
    const colors = {
      education: "text-violet-600",
      work: "text-cyan-600",
      achievement: "text-pink-600"
    };
    return colors[type] || "text-slate-600";
  };

  return (
    <section
      id="experience"
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
            <Sparkles className="text-violet-600" size={18} />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Career Journey
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Experience &</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400">
              Education
            </span>
          </motion.h2>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isHovered = hoveredId === exp.id;

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow */}
                <motion.div
                  animate={isHovered ? { opacity: 0.2 } : { opacity: 0.1 }}
                  className={`absolute -inset-1 bg-gradient-to-br ${exp.gradient} rounded-3xl blur-xl`}
                />

                {/* Card */}
                <div className="relative h-full light-glass rounded-3xl p-6 sm:p-8 border-2 border-white/50">
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-xl flex-shrink-0`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full ${exp.badgeColor} text-white text-xs font-bold uppercase tracking-wide`}>
                          {exp.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-black mb-2 ${getTypeColor(exp.type)}`}>
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                        <span className="font-bold">{exp.organization}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} className="text-slate-400" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={16} className="text-emerald-600" />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Key Achievements
                      </span>
                    </div>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} mt-2`} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs font-bold rounded-xl bg-white/80 border border-slate-200 text-slate-700"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
