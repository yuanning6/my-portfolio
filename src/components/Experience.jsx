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
        background: "#F8F8F8",
        color: "#000000",
        // border: "2px solid #F2C7C7",
        borderRadius: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }}
      contentArrowStyle={{ 
        borderRight: "15px solid  #F8F8F8",
      }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        color: "#F9F0EE",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[68%] h-[68%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-light-black text-[24px] font-medium'>{experience.title}</h3>
        <p
          className='text-gray text-[16px] font-light'
          style={{ margin: 2 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className='flex justify-center items-center w-full h-full mt-5'>
        <img
            src={experience.image}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain'
        />
      </div>

      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline  lineColor={'#F4AFA0'}>
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
