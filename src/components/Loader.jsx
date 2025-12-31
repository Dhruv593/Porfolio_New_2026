import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-neon-cyan border-t-transparent"
        />
        <motion.h2
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-sm font-semibold text-slate-600"
        >
          Preparing your portfolio…
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Loader;