import React from "react";
import ToTop from "./components/toTop";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container d-flex justify-content-center">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ToTop />
      </div>
    </React.Fragment>
  );
}

export default App;
