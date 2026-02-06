import "./Footer.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/pratibhasingh2002/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/pratibha15032002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/anuu__singh_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <p>@ 2024 Pratibha Singh. All Rights Reserved. @</p>
    </footer>
  );
};

export default Footer;

