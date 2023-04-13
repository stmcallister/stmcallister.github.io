import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Scott McAllister.</h1>
      <h3>
        I'm a Seattle based <span>speaker</span>,&nbsp;
         <span>writer</span>, <span>teacher</span> and <span>full-stack developer</span> helping developers learn more about
        their craft around the
        globe.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
