import React from 'react';
import image from '../assets/hamzacos1.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const imageVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    hover: { scale: 1.05, transition: { duration: 0.15, ease: 'easeInOut' } },
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={image}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 md:w-[450px]"
          />
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Hamza Ben Jemaa
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-5xl md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-sm text-gray-400">
            Hi, I'm a Web & mobile Developer, skilled in ReactJs, Next.js, JavaScript,
            React Native, Tailwind, focused on building clean, scalable applications.
            From front-end design to seamless database integration with mySQL, I
            create efficient solutions for dynamic user experiences. Let's build
            something Great for together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;