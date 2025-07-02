import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu on window resize to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation variants for social media icons
  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-transparent px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-slate-300 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
        Hamza Ben Jemaa
      </a>

      {/* Main navigation links */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#services" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Services</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#certifications" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Certifs & intrenship</li>
        </a>
        <a href="#contact-and-resume" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

      {/* Social media icons */}
      <ul className="hidden md:flex gap-5">
        <a href="https://www.youtube.com/@hamzabnjemaa1258" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <BsYoutube />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/hamza-ben-jemaa-36746b2a9/" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://x.com/HamzaBnjemaa" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
            <BsTwitterX />
          </li>
        </a>
        <a href="https://github.com/HamzaBnJemaa" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">
            <BsGithub />
          </li>
        </a>
        <a href="https://www.facebook.com/hamzabnjemaa17/" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsFacebook />
          </li>
        </a>
      </ul>

      {/* Mobile menu toggle */}
      <div className="block md:hidden">
        {isOpen ? (
          <BiX
            className="text-4xl cursor-pointer transition-all duration-300 hover:text-blue-500"
            onClick={menuOpen}
          />
        ) : (
          <BiMenu
            className="text-4xl cursor-pointer transition-all duration-300 hover:text-blue-500"
            onClick={menuOpen}
          />
        )}
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed right-0 top-0 h-screen w-2/3 md:w-1/2 bg-black/90 backdrop-blur-lg border-l border-gray-800 shadow-2xl`}
          >
            {/* Close button inside the mobile menu */}
            <div className="flex justify-end p-6">
              <BiX
                className="text-4xl cursor-pointer transition-all duration-300 hover:text-blue-500"
                onClick={menuOpen}
              />
            </div>

            {/* Mobile menu links */}
            <ul className="flex flex-col gap-8 p-12">
              <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Home</li>
              </a>
              <a href="#services" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Services</li>
              </a>
              <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Tech</li>
              </a>
              <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Projects</li>
              </a>
              <a href="#contact-and-resume" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Contact Me</li>
              </a>
            </ul>

            {/* Social media icons in mobile menu */}
            <motion.div
              className="p-12 "
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.ul className="flex flex-wrap gap-5">
                {[
                  { icon: <BsYoutube />, color: "red", link: "https://www.youtube.com/@hamzabnjemaa1258", tooltip: "YouTube" },
                  { icon: <BsLinkedin />, color: "blue", link: "https://www.linkedin.com/in/hamza-ben-jemaa-36746b2a9/", tooltip: "LinkedIn" },
                  { icon: <BsTwitterX />, color: "sky", link: "https://x.com/HamzaBnjemaa", tooltip: "Twitter" },
                  { icon: <BsGithub />, color: "white", link: "https://github.com/HamzaBnJemaa", tooltip: "GitHub" },
                  { icon: <BsFacebook />, color: "blue", link: "https://www.facebook.com/hamzabnjemaa17/", tooltip: "Facebook" },
                ].map((social, index) => (
                  <motion.li
                    key={index}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.1 }}
                    className="relative group"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-${social.color}-500 hover:opacity-100`}
                    >
                      {social.icon}
                      {/* Tooltip */}
                      
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;