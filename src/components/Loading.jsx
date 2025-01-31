import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-950 z-50"
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          //////////message
      <p className="ml-4 text-white text-lg">Loading...</p>
    </motion.div>
  );
};

export default Loading;