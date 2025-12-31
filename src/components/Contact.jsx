// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Calendar,
  Zap,
  Heart,
  Coffee
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-violet-500 to-purple-500"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91 12345 67890",
      href: "tel:+911234567890",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Mumbai, India",
      href: "#",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      icon: Calendar, 
      label: "Availability", 
      value: "Open to Opportunities",
      href: "#",
      color: "from-pink-500 to-rose-500"
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-slate-900" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-cyan-500" },
  ];

  const quickActions = [
    { icon: Coffee, text: "Buy me a coffee", color: "from-amber-500 to-orange-500" },
    { icon: Heart, text: "Sponsor my work", color: "from-pink-500 to-rose-500" },
    { icon: Zap, text: "Quick consultation", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        
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
              <Sparkles className="text-violet-600" size={18} />
            </motion.div>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Let's Connect
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Get In</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400">
              Touch
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or just want to chat? 
            <span className="font-semibold text-violet-600"> I'd love to hear from you!</span>
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="light-glass rounded-3xl p-8 border-2 border-white/50 relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Send className="text-violet-600" size={28} />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white/80 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all outline-none text-slate-900 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white/80 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none text-slate-900 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </motion.div>

                  {/* Message Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white/80 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all outline-none text-slate-900 font-medium resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-bold shadow-xl hover:shadow-2xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send size={20} />
                        </motion.div>
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="block light-glass rounded-2xl p-5 border-2 border-white/50 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="light-glass rounded-2xl p-6 border-2 border-white/50"
            >
              <h4 className="text-lg font-black text-slate-900 mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex-1 h-14 rounded-xl bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 ${social.color} transition-colors shadow-sm hover:shadow-md`}
                      aria-label={social.label}
                    >
                      <Icon size={22} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-3"
            >
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${action.color} text-white font-bold shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <Icon size={18} />
                    {action.text}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-slate-500">
            ⚡ Usually responds within 24 hours • 🌍 Available for remote opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
