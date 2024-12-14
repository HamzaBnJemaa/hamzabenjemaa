import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import image from "../assets/hamzat.png";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white shadow-lg">
      <div className="w-full p-4 md:py-8">
        <div className="flex flex-col items-center mb-6">
          <a
            href="#home"
            className="flex flex-col items-center space-y-3"
          >
            <img
              src={image}
              alt="Hamza Ben Jemaa Logo"
              className="h-24 w-24 rounded-full shadow-lg"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Hamza Ben Jemaa
            </span>
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <BsFacebook size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition"
          >
            <BsGithub size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            <BsLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <BsTwitter size={30} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-gray-400 hover:text-red-600 transition"
          >
            <BsYoutube size={30} />
          </a>
        </div>
        <span className="block text-sm text-gray-500 text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#home" className="hover:text-white">
            Hamza Ben Jemaa
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
