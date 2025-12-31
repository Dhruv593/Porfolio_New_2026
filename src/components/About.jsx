// src/components/About.jsx
import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  User, 
  Sparkles, 
  Code2, 
  Brain,
  Rocket,
  Target,
  Zap,
  Award,
  Heart,
  Coffee,
  Music,
  Book,
  Dumbbell,
  Camera,
  TrendingUp,
  MapPin,
  Mail,
  Calendar
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar, color: "from-violet-500 to-purple-500" },
    { label: "Projects Completed", value: "15+", icon: Rocket, color: "from-cyan-500 to-blue-500" },
    { label: "Technologies", value: "20+", icon: Code2, color: "from-emerald-500 to-teal-500" },
    { label: "Happy Clients", value: "10+", icon: Heart, color: "from-pink-500 to-rose-500" },
  ];

  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Specialized in deep learning, computer vision, and NLP with production deployments",
      color: "violet",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable web applications with React, Node.js, and cloud infrastructure",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Transforming complex business challenges into elegant technical solutions",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Research & Innovation",
      description: "Published papers on bio-inspired optimization and contributing to open source",
      color: "pink",
      gradient: "from-pink-500 to-rose-500"
    },
  ];

  const interests = [
    { icon: Coffee, label: "Coffee Enthusiast" },
    { icon: Music, label: "Music Lover" },
    { icon: Book, label: "Continuous Learner" },
    { icon: Dumbbell, label: "Fitness" },
    { icon: Camera, label: "Photography" },
  ];

  const values = [
    { icon: Zap, text: "Fast & Efficient", color: "text-yellow-600" },
    { icon: Target, text: "Goal-Oriented", color: "text-blue-600" },
    { icon: Heart, text: "User-Focused", color: "text-pink-600" },
    { icon: TrendingUp, text: "Always Learning", color: "text-emerald-600" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background Elements */}
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
          className="text-center mb-20"
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
              <User className="text-violet-600" size={18} />
            </motion.div>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Get To Know Me
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6"
          >
            <span className="gradient-text">About</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400">
              Me
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A passionate <span className="font-semibold text-violet-600">ML Engineer</span> and{" "}
            <span className="font-semibold text-cyan-600">Full-Stack Developer</span> dedicated to building{" "}
            <span className="font-semibold text-pink-600">impactful solutions</span>
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Profile Card with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ProfileCard />
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <HighlightCard 
                key={index} 
                item={item} 
                index={index}
                isHovered={hoveredCard === index}
                onHover={() => setHoveredCard(index)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="light-glass rounded-2xl p-6 text-center group cursor-default relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="relative inline-block mb-3"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </motion.div>
                
                <div className="relative text-3xl font-black text-slate-900 mb-1">
                  {stat.value}
                </div>
                
                <div className="relative text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="light-glass rounded-3xl p-8 border-2 border-white/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Core Values</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-slate-200"
                  >
                    <Icon className={value.color} size={20} />
                    <span className="text-sm font-bold text-slate-700">{value.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="light-glass rounded-3xl p-8 border-2 border-white/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Interests</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 group cursor-default"
                  >
                    <Icon className="text-slate-600 group-hover:text-cyan-600 transition-colors" size={18} />
                    <span className="text-sm font-semibold text-slate-700">{interest.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Profile Card Component with 3D Hover
const ProfileCard = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative group perspective-1000"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
      />

      {/* Main card */}
      <div className="relative light-glass rounded-3xl p-8 sm:p-10 border-2 border-white/50 overflow-hidden">
        <motion.div
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Profile Image Placeholder */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500"
            />
            <User className="text-white relative z-10" size={64} />
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 text-center">
            Dhruv Lad
          </h3>

          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="text-slate-500" size={16} />
            <span className="text-sm text-slate-600 font-medium">Gandhinagar, India</span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6 text-center">
            Passionate <span className="font-bold text-violet-600">ML Engineer</span> and{" "}
            <span className="font-bold text-cyan-600">Full-Stack Developer</span> with{" "}
            <span className="font-bold text-emerald-600">2+ years</span> of experience building intelligent systems. 
            Currently pursuing <span className="font-bold text-pink-600">M.Tech in AI/ML</span> while working on production deployments.
          </p>

          <div className="space-y-3">
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:border-violet-400 transition-colors"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-slate-700 font-semibold text-sm hover:bg-cyan-500/20 transition-colors"
              >
                View Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Highlight Card Component
const HighlightCard = ({ item, index, isHovered, onHover, onLeave }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ x: 5 }}
      className="group relative"
    >
      <motion.div
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0.1 }}
        className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl`}
      />

      <div className="relative light-glass rounded-2xl p-6 border-2 border-white/50 overflow-hidden">
        <div className="flex items-start gap-4">
          <motion.div
            animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
          >
            <Icon className="text-white" size={24} />
          </motion.div>

          <div className="flex-1">
            <h4 className="text-lg font-black text-slate-900 mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Hover arrow */}
        <motion.div
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          className="absolute bottom-6 right-6"
        >
          <Sparkles className={`text-${item.color}-600`} size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
