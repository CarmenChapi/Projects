import { AiFillGithub } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
      
      <a
      className="footLink"
        alt="linkedin"
        href="https://www.linkedin.com/in/maria-del-carmen-chaparro-g%C3%B3mez-403655358/"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact with me by linkedin"
      >
          <FaLinkedin />
          </a>
      <a
         className="footLink"
        alt="email link"
        href="mailto:mariachaparro58@gmail.com?subject=Hi Carmen"
        rel="email"
        title="Contact with me by email"
      >
        <TfiEmail />
      </a>
      <a
         className="footLink"
        alt="github link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/CarmenChapi"
        title="Contact with me by GitHub"
      >
        <AiFillGithub />
      </a>
      <a
         className="footLink"
        alt="contact phone link"
        href="tel:+447821024370"
        rel="phone"
        title="Contact with me by phone"
      >
        <FaPhoneSquareAlt />
      </a>
     
      <p className="footText">Available for full-stack opportunities and freelance collaborations <b className="name"> – let’s talk! </b></p>
    </div>
  );
};

export default Footer;
