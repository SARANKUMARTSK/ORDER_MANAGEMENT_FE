import React from "react";
import Topbar from "./Topbar";
import About from "./About";
import Services from "./Services";
import Plans from "./Plans";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Topbar />
      <About />
      <Services />
      <Plans />
      <Testimonial />
      <Footer />
    </>
  );
}

export default LandingPage;
