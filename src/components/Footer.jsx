import { AiFillGithub } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <a
        className="footLink"
        aria-label="LinkedIn profile"
        href="https://www.linkedin.com/in/maria-del-carmen-chaparro-g%C3%B3mez-403655358/"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact me on LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        className="footLink"
        aria-label="Email Carmen"
        href="mailto:mariachaparro58@gmail.com?subject=Hi Carmen"
        rel="email"
        title="Contact me by email"
      >
        <TfiEmail />
      </a>
      <a
        className="footLink"
        aria-label="GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/CarmenChapi"
        title="View my GitHub"
      >
        <AiFillGithub />
      </a>

      <a
        className="footLink"
        href="https://t.me/carmenchapi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram profile"
        title="Contact me on Telegram"
      >
        <FaTelegramPlane />
      </a>
      <p className="footText">
        Available for full-stack opportunities and freelance collaborations{" "}
        <b className="name"> – let’s talk! </b>
      </p>
    </div>
  );
};

export default Footer;
