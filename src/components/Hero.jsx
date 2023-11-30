import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import { socialLinks } from "../constants";
import { github, instagram, linkedin } from "../assets";

const Hero = () => {
  return (
    // represent standalone content which is typically visually distinct from the rest of the page
    <section className={`relative w-full h-screen mx-auto`}>
      <div
      // The class absolute indicates that this div is positioned relative to its nearest positioned ancestor, and inset-0 means it's stretched to cover its parent in all directions.
        className={`absolute z-10 top-[120px] right-1.5 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-8`}
      >
        <a href="https://github.com/yuanning6" target="_blank" rel="noopener noreferrer">
          {/* <img src="src/assets/github.svg" alt="github"/> */}
          <img src={github} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/yn06/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://www.instagram.com/evenlyniu/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="ins"/>
        </a>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* anchor link to a part of the webpage with id="about" */}
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            {/* a moving dot inside */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
