import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
