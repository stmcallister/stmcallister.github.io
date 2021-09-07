import React from "react";

import "./assets/css/main.css";

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Footer />
  </div>
);

export default IndexPage;
