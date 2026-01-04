import React from "react";
import Summary from "../pages/Summary";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Internship from "../pages/Internship";
import BTechProject from "../pages/BTechProject";
import Project from "../pages/Project";

const Home: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 max-w-7xl mx-auto font-modern">
      <Summary />
      <Education />
      <Skills />
      <Internship />
      <BTechProject />
      <Project />
    </section>
  );
};

export default Home;
