import React from "react";
import Tilt from "react-tilt";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[1200px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-about-card opacity-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [counter, setCounter] = useState(0);

  async function updateCounter() {
      let response = await fetch('https://jaztmz3sriy4nlmi2dgbswkdbq0uzvin.lambda-url.us-east-1.on.aws/');
      let data = await response.json();
      setCounter(data);
  }

  useEffect(() => {
      updateCounter();
  }, []);

  const [s3Url, setS3Url] = useState('');

  useEffect(() => {
    fetch('https://ewcdbt5gnymncrlvkwqogwrln40hzvmj.lambda-url.us-east-1.on.aws/')
      .then(response => response.json())
      .then(data => {
        setS3Url(data.s3_url);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Views: {counter}</p>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <a href={s3Url} target="_blank" rel="noopener noreferrer">
          <button className="bg-green hover:bg-dark-green text-white font-bold py-2 px-4 rounded-lg">View My Resume</button>
        </a>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-light-black text-[17px] max-w-3xl leading-[30px]'
      >
        Hello there! I'm a Master of Computer Science student at Rice University, where I'm cultivating not only my technical skills but also a deep love for all things code. 👩‍💻
        <br/>
        And welcome to my world! Here, I'll share with you my life and passions.
        <br/>
        <br/>
        Discover the stunning beauty of the place I call home. ⬇️
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
