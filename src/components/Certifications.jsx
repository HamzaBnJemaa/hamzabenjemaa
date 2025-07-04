import React from "react";
import { motion } from "framer-motion";
import defendrLogo from "../assets/defendr.png";
import rbkLogo from "../assets/rbk.png";

const logos = [
  { src: rbkLogo, alt: "RBK Certification" },
  { src: defendrLogo, alt: "Defendr Internship" },
];

const Certifications = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl text-white mb-12 text-center"
      >
        Certifications & Internship
      </motion.h1>

    <div className="flex flex-wrap items-center justify-center gap-10">
  {logos.map((logo, index) => (
    <motion.img
      key={index}
      src={logo.src}
      alt={logo.alt}
      className="w-[230px] h-auto object-contain hover:scale-110 hover:brightness-210 cursor-pointer transition duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    />
  ))}
</div>

    </div>
  );
};

export default Certifications;
