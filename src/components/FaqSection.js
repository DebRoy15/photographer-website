import React from "react";

import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I start?">
          <motion.div className="answer">
            <motion.p>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit sequi exercitationem minima nisi aut.
            </motion.p>
          </motion.div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <motion.div className="answer">
            <motion.p>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit sequi exercitationem minima nisi aut.
            </motion.p>
          </motion.div>
        </Toggle>

        <Toggle title="different payment methods">
          <motion.div className="answer">
            <motion.p>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit sequi exercitationem minima nisi aut.
            </motion.p>
          </motion.div>
        </Toggle>

        <Toggle title="What product do you provide?">
          <motion.div className="answer">
            <motion.p>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit sequi exercitationem minima nisi aut.
            </motion.p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
