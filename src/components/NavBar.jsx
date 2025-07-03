import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-transparent px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-slate-300 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
        Hamza Ben Jemaa
      </a>

      {/* Main navigation links with underline hover */}
      <ul className="hidden md:flex gap-10">
        {[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "Tech", href: "#tech" },
          { label: "Projects", href: "#projects" },
          { label: "Certifs & Internship", href: "#certifications" },
          { label: "Contact", href: "#contact-and-resume" },
        ].map(({ label, href }) => (
          <li key={href} className="relative group cursor-pointer">
            <a href={href} className="opacity-70 transition-all duration-300 hover:opacity-100">
              {label}
            </a>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
          </li>
        ))}
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
          <BiX className="text-4xl cursor-pointer transition-all duration-300 hover:text-blue-500" onClick={menuOpen} />
        ) : (
          <BiMenu className="text-4xl cursor-pointer transition-all duration-300 hover:text-blue-500" onClick={menuOpen} />
        )}
      </div>

      {/* Upgraded Mobile menu with animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 h-screen w-2/3 md:w-1/2 bg-black/90 backdrop-blur-lg border-l border-gray-800 shadow-2xl flex flex-col items-center justify-center p-12 gap-12"
          >
            {/* Mobile menu links */}
            <ul className="flex flex-col items-center gap-8 text-xl">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Tech", href: "#tech" },
                { label: "Projects", href: "#projects" },
                { label: "Contact Me", href: "#contact-and-resume" },
              ].map(({ label, href }) => (
                <li key={href} className="relative group">
                  <a href={href} onClick={() => setIsOpen(false)} className="opacity-70 transition-all duration-300 hover:opacity-100">
                    {label}
                  </a>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Social media icons in mobile menu */}
            <motion.ul className="flex gap-6 mt-8">
              {[
                { icon: <BsYoutube />, color: "red", link: "https://www.youtube.com/@hamzabnjemaa1258" },
                { icon: <BsLinkedin />, color: "blue", link: "https://www.linkedin.com/in/hamza-ben-jemaa-36746b2a9/" },
                { icon: <BsTwitterX />, color: "sky", link: "https://x.com/HamzaBnjemaa" },
                { icon: <BsGithub />, color: "white", link: "https://github.com/HamzaBnJemaa" },
                { icon: <BsFacebook />, color: "blue", link: "https://www.facebook.com/hamzabnjemaa17/" },
              ].map((social, index) => (
                <motion.li
                  key={index}
                  variants={socialIconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer text-2xl opacity-70 hover:opacity-100 transition"
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className={`hover:text-${social.color}-500`}>
                    {social.icon}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
