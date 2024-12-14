import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-grey-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
        Hamza Ben Jemaa
      </a>

      {/* Main navigation links */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
          <li>Tech</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
          <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
          <li>Contact</li>
        </a>
        <a href="#resume" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
          <li>Resume</li>
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
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
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
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col item-start justify-start gap-10 border-gray-800 bg-black/90 p-12`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
              <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
              <li>Tech</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
              <li>Projects</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover-opacity-100">
              <li>Contact Me</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
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
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
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
