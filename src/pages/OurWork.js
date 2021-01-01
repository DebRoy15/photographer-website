import React from "react";
import styled from "styled-components";

import winter from "../img/winter-4.jpg";
import sport1 from "../img/sports-4.jpg";
import wildLife1 from "../img/wild-life-4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie initial="show">
        <motion.h2 variants={fade}>The Winter Collection</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/winter">
          <Hide>
            <motion.img variants={photoAnim} src={winter} alt="" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>The Sports Collection</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/sports">
          <Hide>
            <motion.img variants={photoAnim} src={sport1} alt="" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>The Wild-Life Collection</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/wild">
          <Hide>
            <motion.img variants={photoAnim} src={wildLife1} alt="" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
