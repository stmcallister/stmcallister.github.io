import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDev
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/stmcallister">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/stmcallister">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/stmcallister/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://dev.to/stmcallister/">
        <FaDev />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
