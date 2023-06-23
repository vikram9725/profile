import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#a" className="footer__logo">
        vikram bhosale
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vikram-bhosale-a14385266/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/VIKRAM760">
          <AiOutlineGithub />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; vikram bhosale. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
