import { AiFillGithub } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
      
      <a
        alt="linkedin"
        href="https://www.linkedin.com/in/maria-del-carmen-chaparro-g%C3%B3mez-403655358/"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact with me by linkedin"
      >
          <FaLinkedin />
          </a>
      <a
        alt="email link"
        href="mailto:mariachaparro58@gmail.com?subject=Hi Carmen"
        rel="email"
        title="Contact with me by email"
      >
        <TfiEmail />
      </a>
      <a
        alt="github link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/CarmenChapi"
        title="Contact with me by GitHub"
      >
        <AiFillGithub />
      </a>
      <a
        alt="contact phone link"
        href="tel:+447821024370"
        rel="phone"
        title="Contact with me by phone"
      >
        <FaPhoneSquareAlt />
      </a>
      {/* <p>Contact me</p> */}
      <p>I’m currently open to junior roles, internships, or freelance opportunities – let’s talk!</p>
    </div>
  );
};

export default Footer;
