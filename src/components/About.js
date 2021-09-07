import React from "react";

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
          I'll never forget the first website I ever built. When I realized that I had the power to build things that the world could see,
          I was hooked. Since that time I've developed all kinds of websites and applications, in a variety
          of technologies. Along the way, I also discovered I loved to write, and ultimately teach.
          Now I am helping others learn about a wide range of development technologies. When I'm not coding, writing or 
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
