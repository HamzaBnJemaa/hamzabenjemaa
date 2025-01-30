import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } },
  };

  return (
    <footer className="w-full bg-black py-8 text-white">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        {/* Footer Text */}
        <div className="text-center md:text-left">
          <motion.p
            variants={socialVariants}
            initial="initial"
            animate="animate"
            className="text-sm text-gray-400"
          >
            &copy; {new Date().getFullYear()} Hamza Ben Jemaa. All Rights Reserved.
          </motion.p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center items-center md:justify-end">
          <motion.a
            href="https://github.com/hamzajemaa"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            initial="initial"
            animate="animate"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hamzajemaa/"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            initial="initial"
            animate="animate"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/hamzajemaa"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            initial="initial"
            animate="animate"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
