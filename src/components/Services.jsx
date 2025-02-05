import React from "react";
import { motion } from "framer-motion";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { FaLaptopCode, FaMobile } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description:
        "I create websites based on your ready-made design. Whether it's a landing page or a business card website. I will make it look great and work smoothly on any device.",
      icon: <MdWeb className="text-white w-20 h-20" />,
    },
    {
      title: "Full-Stack Development",
      description:
        "Building dynamic web applications with modern frameworks. I handle both front-end and back-end development for scalable, high-performance solutions.",
      icon: <FaLaptopCode className="text-white w-20 h-20" />,
    },
    {
      title: "Web Design",
      description:
        "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
      icon: <MdDesignServices className="text-white w-20 h-20" />,
    },
    {
      title: "Mobile Development",
      description:
        "I specialize in building and customizing WordPress websites, from simple blogs to complex e-commerce platforms.",
      icon: <FaMobile className="text-white w-20 h-20" />,
    },
  ];

  // Animation for "My Services" heading (unchanged)
  const fadeInHeading = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  // Animation for service cards (alternating left/right)
  const fadeInCard = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Left for even, right for odd
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Slightly longer stagger for better effect
      },
    },
  };

  const iconHover = {
    hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <section id="services" className="flex flex-col items-center justify-center gap-16 p-6 md:px-14 md:py-24">
      {/* "My Services" Heading (unchanged) */}
      <motion.h1
        variants={fadeInHeading}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl text-center"
      >
        My Services
      </motion.h1>

      {/* Service Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-12 w-full max-w-[1200px]"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInCard(index)} // Pass index to alternate direction
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} 
            className={`flex flex-col md:flex-row items-center gap-6 bg-transparent bg-opacity-0 rounded-xl p-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon Section */}
            <motion.div
              variants={iconHover}
              whileHover="hover"
              className="flex justify-center items-center p-9 rounded-full bg-slate-500"
            >
              {service.icon}
            </motion.div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;