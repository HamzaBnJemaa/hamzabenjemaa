import React from 'react';
import { motion } from 'framer-motion';
import {
  BiLogoAdobe,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoFirebase,
  BiLogoFlutter,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoWordpress
} from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { SiNextdotjs, SiAstro } from 'react-icons/si'; // Correct import for Astro
import { SiLaravel } from 'react-icons/si';


const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
      
       <motion.h1
        variants={variants}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        className='text-4xl font-light text-white md:text-6xl'
      >
        Technologies
      </motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoFlutter className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoHtml5 className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoCss3 className='cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <SiNextdotjs className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoNodejs className='cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoGit className='cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoFirebase className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoBootstrap className='cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>
          <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
  <SiLaravel className='cursor-pointer text-[80px] text-red-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' />
</motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <BiLogoReact className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <SiAstro className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div variants={variants} initial='hidden' whileInView='visible' transition={{ duration: 0.5 }}>
          <DiMysql className='cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>
      
      </div>
    </div>
  );
};

export default Tech;