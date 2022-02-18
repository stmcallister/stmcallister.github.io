import React from "react";

import "./assets/css/main.css";
import {useDocumentTitle} from "./setDocumentTitle"

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-123058118-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);


const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Footer />
  </div>
);

export default function App() {
  const [document_title, setDocumentTitle] = useDocumentTitle("Scott McAllister -- Teacher, Writer, Coder");
  return IndexPage();
}
