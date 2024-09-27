import React from "react";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container d-flex flex-column">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
