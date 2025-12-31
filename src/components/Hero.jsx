// src/components/Hero.jsx
import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform,
  useScroll
} from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Sparkles,
  Code2,
  Cpu,
  Zap,
  Rocket,
  Brain,
  Terminal,
  Database,
  Cloud,
  ChevronDown
} from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing animation texts
  const roles = [
    "ML Engineer",
    "Full-Stack Developer", 
    "AI Researcher",
    "Data Scientist",
    "Problem Solver"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const techIcons = [
    { Icon: Code2, label: "Development", color: "from-violet-500 to-purple-500", delay: 0 },
    { Icon: Brain, label: "Machine Learning", color: "from-cyan-500 to-blue-500", delay: 0.1 },
    { Icon: Database, label: "Data Science", color: "from-emerald-500 to-teal-500", delay: 0.2 },
    { Icon: Cloud, label: "Cloud & DevOps", color: "from-pink-500 to-rose-500", delay: 0.3 },
  ];

  const socialLinks = [
    { Icon: Github, href: "#", label: "GitHub", color: "hover:text-slate-900" },
    { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { Icon: Mail, href: "#", label: "Email", color: "hover:text-violet-600" },
  ];

  return (
    <section
      ref={ref}
      className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-32 pb-20 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ 
            x: useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]),
            y: useTransform(smoothMouseY, [-0.5, 0.5], [-50, 50])
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              style={{
                backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div 
        style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [100, -100]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]),
          y: useTransform(smoothMouseY, [-0.5, 0.5], [50, -50])
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"
      />

      {/* Floating Tech Icons */}
      <FloatingIcons mouseX={smoothMouseX} mouseY={smoothMouseY} />

      {/* Main Content - REMOVED SCROLL FADE */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-pink-500/10 border border-violet-500/20 backdrop-blur-sm shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-violet-600" size={20} />
              </motion.div>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Available for Opportunities
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500"
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-lg sm:text-xl text-slate-600 font-medium">
              👋 Hey there, I'm
            </span>
          </motion.div>

          {/* Name with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="mb-6 perspective-1000"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <motion.h1 
              style={{
                rotateX: useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]),
                rotateY: useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]),
                transformStyle: "preserve-3d"
              }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-2"
            >
              <span className="inline-block bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent">
                Dhruv Lad
              </span>
            </motion.h1>
          </motion.div>

          {/* Dynamic Role with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 h-16 sm:h-20 flex items-center"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(6, 182, 212, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="light-glass rounded-2xl px-6 sm:px-8 py-4 sm:py-5 border-2 border-violet-500/20"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="text-violet-600" size={24} />
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="text-cyan-600"
                    >
                      |
                    </motion.span>
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Building <span className="font-bold text-violet-600">intelligent systems</span> from research to production.
            Specializing in <span className="font-bold text-cyan-600">machine learning</span>, 
            <span className="font-bold text-emerald-600"> full-stack development</span>, and 
            <span className="font-bold text-pink-600"> cloud deployment</span>.
            Turning complex problems into elegant solutions.
          </motion.p>

          {/* Tech Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {techIcons.map((item, i) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + item.delay, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`} />
                  <div className="relative light-glass rounded-2xl p-6 border-2 border-white/50 backdrop-blur-sm">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="inline-block mb-3"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                    </motion.div>
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-bold shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Rocket size={20} />
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur-sm text-slate-800 font-bold hover:border-violet-400 transition-colors shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 text-slate-800 font-bold hover:bg-cyan-500/20 transition-colors backdrop-blur-sm"
            >
              <Mail size={20} />
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-600 ${social.color} transition-colors shadow-md hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-violet-600 transition-colors cursor-pointer"
            >
              <span className="text-xs font-semibold uppercase tracking-wider">Scroll Down</span>
              <ChevronDown size={24} />
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Custom Cursor */}
      <CustomCursor mousePosition={mousePosition} variant={cursorVariant} />
    </section>
  );
};

// Floating Icons Background Component
const FloatingIcons = ({ mouseX, mouseY }) => {
  const icons = [
    { Icon: Code2, position: { top: "10%", left: "10%" }, scale: 1, delay: 0 },
    { Icon: Brain, position: { top: "20%", right: "15%" }, scale: 0.8, delay: 0.5 },
    { Icon: Database, position: { bottom: "30%", left: "8%" }, scale: 1.2, delay: 1 },
    { Icon: Cloud, position: { bottom: "20%", right: "12%" }, scale: 0.9, delay: 1.5 },
    { Icon: Cpu, position: { top: "50%", left: "5%" }, scale: 0.7, delay: 2 },
    { Icon: Zap, position: { top: "40%", right: "8%" }, scale: 1.1, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, i) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={i}
            style={{
              ...item.position,
              x: useTransform(mouseX, [-0.5, 0.5], [-30 * item.scale, 30 * item.scale]),
              y: useTransform(mouseY, [-0.5, 0.5], [-30 * item.scale, 30 * item.scale]),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: item.scale }}
            transition={{ delay: item.delay, duration: 1 }}
            className="absolute"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Icon size={60} className="text-slate-400" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Custom Cursor Component
const CustomCursor = ({ mousePosition, variant }) => {
  const cursorSize = variant === "text" ? 60 : 20;
  
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - cursorSize / 2,
          y: mousePosition.y - cursorSize / 2,
          scale: variant === "text" ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div 
          className="w-5 h-5 rounded-full bg-white"
          style={{ width: cursorSize, height: cursorSize }}
        />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-500" />
      </motion.div>
    </>
  );
};

export default Hero;
