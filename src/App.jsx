import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div 
	style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.25) 60%)",
      }}
	>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default App;
