import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
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
  </ul>
);

export default SocialLinks;
