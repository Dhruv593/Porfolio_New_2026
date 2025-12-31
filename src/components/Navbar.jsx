// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Award,
  Mail,
  Sparkles,
  Sun,
  Moon
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  
  const { scrollY } = useScroll();

  // Track scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Sparkles },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 pt-6"
      >
        <motion.div
          animate={{
            backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
            backgroundColor: isScrolled 
              ? "rgba(255, 255, 255, 0.8)" 
              : "rgba(255, 255, 255, 0)",
            boxShadow: isScrolled
              ? "0 10px 30px rgba(0, 0, 0, 0.1)"
              : "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto rounded-2xl border border-white/50"
        >
          <div className="flex items-center justify-between px-6 py-4">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={20} />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 blur-md"
                />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-xl font-black bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  Dhruv Lad
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2 rounded-xl font-medium text-sm transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-xl border border-violet-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative flex items-center gap-2 ${
                      isActive ? "text-violet-600" : "text-slate-700 hover:text-violet-600"
                    }`}>
                      <Icon size={16} />
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              
              {/* Theme Toggle */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center text-slate-700 hover:from-violet-100 hover:to-pink-100 transition-all shadow-sm"
              >
                <motion.div
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </motion.button> */}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail size={16} />
                <span>Hire Me</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-700"
              >
                <AnimatedMenuIcon isOpen={isOpen} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "100%"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white/95 backdrop-blur-xl z-40 lg:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full p-8 pt-24">
          {/* Mobile Nav Items */}
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : 50 
                  }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full group"
                >
                  <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                    isActive 
                      ? "bg-gradient-to-r from-violet-500/20 to-pink-500/20 border border-violet-500/30" 
                      : "hover:bg-slate-100"
                  }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive
                        ? "bg-gradient-to-br from-violet-600 to-pink-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-violet-100 group-hover:text-violet-600"
                    } transition-all`}>
                      <Icon size={20} />
                    </div>
                    <span className={`font-semibold text-lg ${
                      isActive ? "text-violet-600" : "text-slate-700"
                    }`}>
                      {item.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.6 }}
            onClick={() => scrollToSection("contact")}
            className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold shadow-xl"
          >
            <Mail size={20} />
            Let's Work Together
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 origin-left z-50"
        style={{ scaleX: useScroll().scrollYProgress }}
      />
    </>
  );
};

// Animated Hamburger Icon
const AnimatedMenuIcon = ({ isOpen }) => {
  return (
    <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        className="w-full h-0.5 bg-current origin-center"
      />
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        className="w-full h-0.5 bg-current"
      />
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        className="w-full h-0.5 bg-current origin-center"
      />
    </div>
  );
};

export default Navbar;
