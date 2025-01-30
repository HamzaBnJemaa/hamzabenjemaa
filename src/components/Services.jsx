import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      title: "Website Development",
      description: "I create websites based on your ready-made design. Whether it's a landing page or a business card website. I will make it look great and work smoothly on any device.",
      icon: "/path/to/website-icon.svg", // Replace with your icon path
    },
    {
        title: "Website Development",
        description: "I create websites based on your ready-made design. Whether it's a landing page or a business card website. I will make it look great and work smoothly on any device.",
        icon: "/path/to/website-icon.svg", // Replace with your icon path
      },
       {
      title: "Website Development",
      description: "I create websites based on your ready-made design. Whether it's a landing page or a business card website. I will make it look great and work smoothly on any device.",
      icon: "/path/to/website-icon.svg", // Replace with your icon path
    },
    {
      title: "Web Design",
      description: "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
      icon: "/path/to/design-icon.svg", // Replace with your icon path
    },
    {
      title: "WordPress Development",
      description: "I specialize in building and customizing WordPress websites, from simple blogs to complex e-commerce platforms.",
      icon: "/path/to/wordpress-icon.svg", // Replace with your icon path
    },
    // Add more services here...
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section id="services" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-6 md:px-14 md:py-24">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        My Services
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1200px]">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="bg-slate-600 bg-opacity-20 rounded-xl p-8 flex flex-col gap-6 shadow-lg hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <img src={service.icon} alt={service.title} className="w-16 h-16 md:w-20 md:h-20 transition duration-300 transform hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
