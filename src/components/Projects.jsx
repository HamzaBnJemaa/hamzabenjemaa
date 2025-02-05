import image1 from '../assets/bookilaptop.png';
import image2 from '../assets/codinilaptop.png';
import image3 from '../assets/barchatalklaptop.png';
import image4 from '../assets/laptophannibal.png';
import image5 from '../assets/notelaptop.png';
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs"; // Import GitHub icon
import { FaTools } from "react-icons/fa"; // Import FaTools for "Still on Work"
import { FaClock } from "react-icons/fa"; // Import FaClock for "Soon"

const projectsData = [
  {
    image: image3,
    title: "Barcha Talk",
    description: "A discussion platform where users can engage in meaningful conversations with real-time chat and topic-based discussions.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    status: "soon", // "still-on-work", "github", or "soon"
  },
  {
    image: image1,
    title: "Booky",
    description: "An online bookstore with user authentication, book previews, and a rating system.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "TailWind", "React.JS"],
    status: "github", // "still-on-work", "github", or "soon"
    githubLink: "https://github.com/yourusername/ebook-store", // Add GitHub link
  },
  {
    image: image5,
    title: "E-note App",
    description: "An online bookstore with user authentication, book previews, and a rating system.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    status: "still-on-work", // "still-on-work", "github", or "soon"
  },
  {
    image: image2,
    title: "Codini Platform",
    description: "A digital coding school with interactive lessons, quizzes, and mentorship from elite teachers.",
    technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind", "React Native", "MongoDB", "JWT"],
    status: "github", 
    githubLink: "https://github.com/Codini-Porject/Codini.git", // Add GitHub link
  },
  {
    image: image4,
    title: "HANNIBAL Marketplace",
    description: "Your Ultimate Shopping Destination! At HANNIBAL, we redefine the way you shop by providing a seamless and enjoyable online shopping experience. Dive into a world of endless choices, unbeatable prices, and unparalleled convenience right at your fingertips",
    technologies: ["NEXT.JS", "Tailwind", "TypeScript", "Cloudinary"],
    status: "github", // "still-on-work", "github", or "soon"
    githubLink: "https://github.com/HANNIBAL-E-Commerce-WebSite/Hannibal-new-version.git", // Add GitHub link
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Projects = () => {
  return (
    <div 
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-6 md:px-14 md:py-24"
    >
      <motion.h1 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        My Projects
      </motion.h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
            className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full rounded-xl shadow-lg md:w-[300px]"
            />
            <div className="flex flex-col gap-5 text-white max-w-[500px]">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-md border border-gray-600 px-4 py-2 text-sm text-white-200 transition duration-300 hover:text-white hover:bg-slate-200/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Conditional Rendering for GitHub Button, "Still on Work", or "Soon" */}
              {project.status === "github" ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-fit px-4 py-2 bg-transparent border border-slate-600 rounded-full text-white-300 hover:bg-slate-200/20 hover:text-white transition duration-800 group"
                >
                  {/* Animated GitHub Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BsGithub className="text-xl" />
                  </motion.div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View GitHub Repo !
                  </span>
                </a>
              ) : project.status === "still-on-work" ? (
                <div className="mt-4 flex items-center justify-center gap-2 w-fit px-4 py-2 bg-transparent border border-red-600 rounded-full text-red-500 relative group">
                  <FaTools className="text-xl" /> {/* Use FaTools for "Still on Work" */}
                  <span>Still on Work</span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Under active development
                  </span>
                </div>
              ) : (
                <div className="mt-4 flex items-center justify-center gap-2 w-fit px-4 py-2 bg-transparent border border-yellow-500 rounded-full text-yellow-500 relative group">
                  <FaClock className="text-xl" /> {/* Use FaClock for "Soon" */}
                  <span>Soon</span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Coming soon !
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;