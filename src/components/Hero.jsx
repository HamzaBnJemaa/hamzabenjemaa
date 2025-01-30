import React from 'react';
import image from '../assets/hamzacos1.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  // Variants for image animation
  const imageVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
    hover: { scale: 1.05, transition: { duration: 0.15, ease: 'easeInOut' } },
  };

  // Variants for title animation
  const titleVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.3, ease: 'easeInOut' } },
  };

  // Variants for subtitle animation
  const subtitleVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.6, ease: 'easeInOut' } },
  };

  // Variants for text paragraph animation
  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.9, ease: 'easeInOut' } },
  };

  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        {/* Image Animation */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="relative"
        >
          <img
            src={image}
            alt="Hamza"
            className="w-[300px] cursor-pointer rounded-full transition-all duration-300 md:w-[450px]"
          />
          {/* Optional: Add a subtle glow effect */}
          <div
            className="absolute -top-2 -left-2 w-[102%] h-[102%] rounded-full bg-gradient-to-br from-blue-500 to-pink-500 opacity-10 blur-sm"
          />
        </motion.div>

        {/* Text Animations */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center"
        >
          {/* Title Animation */}
          <motion.h1
            variants={titleVariants}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-r from-slate-300 to-blue-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
          >
            Hamza Ben Jemaa
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.h3
            variants={subtitleVariants}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent text-5xl md:text-3xl"
          >
            Web Developer
          </motion.h3>

          {/* Paragraph Text Animation */}
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="md:text-base text-sm text-gray-400"
          >
            Hi, I'm a Web Developer, skilled in ReactJs, Next.js, JavaScript,
            React Native, Tailwind, focused on building clean, scalable applications.
            From front-end design to seamless database integration with mySQL, I
            create efficient solutions for dynamic user experiences. Let's build
            something Great for together!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
