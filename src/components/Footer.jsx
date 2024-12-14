import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-transparent shadow">
  <div className="w-full p-4 md:py-8">
    {/* Logo and Brand */}
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg" // Replace with your logo link
          className="h-8"
          alt="Hamza Ben Jemaa Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Hamza Ben Jemaa
        </span>
      </a>

      {/* Navigation Links */}
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#home" className="hover:underline me-4 md:me-6 text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#tech" className="hover:underline me-4 md:me-6 text-white">
            Tech
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline me-4 md:me-6 text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Divider */}
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    {/* Copyright */}
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {new Date().getFullYear()}{" "}
      <a href="#home" className="hover:underline text-white">
        Hamza Ben Jemaa
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  );
};

export default Footer;
