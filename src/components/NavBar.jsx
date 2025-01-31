import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

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

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`fixed right-0 top-0 h-screen w-2/3 md:w-1/2 bg-black/90 backdrop-blur-lg border-l border-gray-800 shadow-2xl transition-all duration-300 ease-in-out`}
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
          <ul className="flex flex-wrap gap-5 p-12">
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
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;