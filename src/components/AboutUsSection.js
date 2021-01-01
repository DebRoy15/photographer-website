import { motion } from "framer-motion";
import React from "react";
import home1 from "../img/home-1.jpg";
import { About, Description, Hide, Image } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutUsSection = () => {
  return (
    <About className="about">
      <Description className="description">
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          contact us for any photography or videography that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutUsSection;
