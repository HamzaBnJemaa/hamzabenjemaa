import React from "react";
import { motion } from "framer-motion";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { FaLaptopCode, FaMobile, FaWordpress } from "react-icons/fa";

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
      title: "mobile Development",
      description:
        "I specialize in building and customizing WordPress websites, from simple blogs to complex e-commerce platforms.",
      icon: <FaMobile className="text-white w-20 h-20" />,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section id="services" className="flex flex-col items-center justify-center gap-16 p-6 md:px-14 md:py-24">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl text-center"
      >
        My Services
      </motion.h1>

      {/* Service Cards */}
      <div className="flex flex-col gap-12 w-full max-w-[1200px]">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className={`flex flex-col md:flex-row items-center gap-6 bg-transparent bg-opacity-0 rounded-xl p-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon Section */}
            <div className="flex justify-center items-center p-8 rounded-full bg-slate-700 ">
              {service.icon}
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
