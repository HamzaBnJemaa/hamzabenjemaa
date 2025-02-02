import image1 from '../assets/ebookstore.jpg';
import image2 from '../assets/codini.jpg';
import image3 from '../assets/hamza4.png';
import image4 from '../assets/hamza5.jpg';
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs"; // Import GitHub icon

const projectsData = [
  {
    image: image1,
    title: "Barcha Talk",
    description: "A discussion platform where users can engage in meaningful conversations with real-time chat and topic-based discussions.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/yourusername/barcha-talk", // Add GitHub link
  },
  {
    image: image1,
    title: "E-Book Store",
    description: "An online bookstore with user authentication, book previews, and a rating system.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/yourusername/ebook-store", // Add GitHub link
  },
  {
    image: image2,
    title: "Codini Platform",
    description: "A digital coding school with interactive lessons, quizzes, and mentorship from elite teachers.",
    technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind", "React Native", "MongoDB", "JWT"],
    githubLink: "https://github.com/yourusername/codini-platform", // Add GitHub link
  },
  {
    image: image3,
    title: "Social Media App",
    description: "A community-driven platform with features like user profiles, posts, likes, and comments.",
    technologies: ["TypeScript", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/yourusername/social-media-app", // Add GitHub link
  },
  {
    image: image4,
    title: "E-Commerce Store",
    description: "A full-fledged e-commerce store with secure payments, product management, and an intuitive shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/yourusername/ecommerce-store", // Add GitHub link
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
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-200 transition duration-300 hover:text-white hover:bg-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* GitHub Logo Button */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
              >
                <BsGithub className="text-white text-xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;