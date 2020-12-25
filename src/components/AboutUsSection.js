import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";

const AboutUsSection = () => {
  return (
    <About className="about">
      <Description className="description">
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          contact us for any photography or videography that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

export default AboutUsSection;
