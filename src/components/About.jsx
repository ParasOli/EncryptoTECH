import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.1)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-12 h-12 object-contain' 
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2, 0.5)}>
        <p className={`${styles.sectionSubText} text-[14px] md:text-[16px]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[20px] md:text-[24px]`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.05, 0.5)} 
        className='mt-4 text-secondary text-[14px] md:text-[17px] max-w-3xl leading-[30px]'
      >
        At Encrypto, we are a team of skilled software developers and digital marketing experts 
        specializing in cybersecurity and web development. With extensive experience across multiple technologies, 
        we deliver innovative solutions. Our quick learning ability and collaborative approach enable us to work 
        closely with clients, creating efficient, scalable, and user-friendly solutions that address real-world challenges. 
        Additionally, our digital marketing strategies are designed to enhance your online presence and drive engagement. 
        Let’s partner together to transform your ideas into impactful realities!
      </motion.p>

      <div className='mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
