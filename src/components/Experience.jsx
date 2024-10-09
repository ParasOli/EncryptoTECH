import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[40%] h-[40%] object-contain md:w-[60%] md:h-[60%]' // Responsive image size
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[20px] font-bold md:text-[24px]'> {/* Adjusted text size */}
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[14px] font-semibold md:text-[16px]' // Adjusted text size
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 list-disc ml-5 space-y-1'> {/* Adjusted spacing */}
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[12px] pl-1 tracking-wider md:text-[14px]' // Adjusted text size
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[14px] md:text-[16px]`}> {/* Adjusted text size */}
          What We have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[20px] md:text-[24px]`}> {/* Adjusted text size */}
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'> {/* Adjusted margin */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
