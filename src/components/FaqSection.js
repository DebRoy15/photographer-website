import React from "react";

import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit
            sequi exercitationem minima nisi aut.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit
            sequi exercitationem minima nisi aut.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>different payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit
            sequi exercitationem minima nisi aut.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>What product do you provide?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit
            sequi exercitationem minima nisi aut.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
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
