import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      {/* 404 Text */}
      <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent">
        404
      </h1>

      {/* Message */}
      <p className="text-3xl mt-4">Oops! Page Not Found</p>
      <p className="text-gray-400 mt-2 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-slate-500 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-slate-600 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;