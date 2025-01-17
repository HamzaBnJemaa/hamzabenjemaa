import image1 from '../assets/ebookstore.jpg';
import image2 from '../assets/codini.jpg';
import image3 from '../assets/hamza4.png';
import image4 from '../assets/hamza5.jpg';
import image5 from '../assets/image.jpg';

import { motion } from "framer-motion";

const projectsData = [
  {
    image:image1,
    title: "barcha talk",
    description: "lorem ips lorem ipsum dorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolo lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolo lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor.",
    technologies: ["HTML", "CSS", "JavaScript","CSS", "MySQL"],
  },
  {
    image:image1,
    title: "E-Book Store",
    description: "lorem ips lreem ipsum dorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolo lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolo lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor.",
    technologies: ["HTML", "CSS", "JavaScript","CSS", "MySQL"],
  },
  {
    image:image2,
    title: "Codini Platform",
    description: "CODINI is a digital coding school to learn how to code from the beginning with many levels & many programming languages assisted by the elite teachers ...      ",
    technologies: ["JavaScript","TypeScript", "Next.js14" , "tailwind", "react native", "cloudinary", "sequelize", "MongoDB", "JWT"],
  },
  {
    image:image3,
    title: "social meia app",
    description: "lorem Ipsum",
    technologies: ["tyopescript", "CSS", "JavaScript","CSS", "MySQL"],
  },
  {
    image:image4,
    title: "e-commerce",
    description: "lorem Ipsum",
    technologies: ["HTML", "CSS", "JavaScript","CSS", "MySQL"],
  },

]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}
const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'/>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
        </div>
        <div className='flex flex-wrap gap-5'>
          {project.technologies.map((tech, index) =>(
            <span key={index} className='rounded-lg bg-black p-3'>{tech}</span>
          ))}
        </div>
      </div>
    </div>
    </ScrollReveal>
  )
}
const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
{projectsData.map((project,index) =>(
  <ProjectCard key={index} project={project}/>
))
}
      </div>
    </div>
  )
}

export default Projects