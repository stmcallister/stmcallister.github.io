import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/scott-mcallister-circle.png";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I have been building web applications in several 
          industries for over a decade. I joined Smartsheet several years 
          ago, building integrations with the Smartsheet API using languages 
          like Java, Node.js, and Python. Now I am helping others learn about 
          a wide range of web technologies. When I'm not coding, writing or 
          speaking I enjoy long walks with my wife, skipping rocks with my 
          kids, and I'm happy whenever Real Salt Lake can manage a win.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Scott McAllister</span>
              <br />
              <span>stmcallister@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
