import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description="Scott McAllister" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/>
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
