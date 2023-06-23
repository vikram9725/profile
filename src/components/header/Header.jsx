import React from "react";
import "./header.css";
import CTA from "./CTA";
import img1 from '../../assets/abc.jpeg'
import HeaderSocials from "./HeaderSocials";
// eslint-disable-next-line no-lone-blocks
{
  /*import aaa from "../../assets/aaa.png"; */
}

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">
          
        </h5>
        <h1>Vikram Bhosale!</h1>

        <h5 className="text-light-text">&#123; React Js Developer &#125;</h5>

        <CTA />
        <p className="welcometext">
          " Welcome to my portfolio! I am digital-craftsman and a coder who
          creates things with languages I have immense interest in coding and
          creating responsive web applications, please check out my recent
          projects and skill-set to know me better.."
        </p>
        <HeaderSocials />

        <div className="mee"><img src={img1} alt="mee" /></div>

        <a href="#contact" className="scroll__down">
          Scroll Down -&gt;
        </a>
      </div>
    </header>
  );
};

export default Header;
