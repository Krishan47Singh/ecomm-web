import { FaFirefoxBrowser, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} <span>Tech Haven</span>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
