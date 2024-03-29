import React from "react";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import Experience from "./component/experience/experience";
import Competence from "./component/competence/competence";
import Project from "./component/projects/projects";
import About from "./component/apropos/apropos";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-container">
      <About />
      <Competence />
      <Experience />
      <Project />
      </div>
    </div>
  );
}

export default App;
