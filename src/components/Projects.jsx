import React from "react";
import "../assets/css/projects.css";
import TripAvisor from "./TripAvisor";
import Moov from "./Moov";

const Projects = () => {
  return (
    <>
      <div className="container-projects">
        <div style={{ width: "80%" }}>
          <h2 className="projects-title">Projects</h2>
          <div className="custom-hr"></div>
        </div>
      </div>
      <TripAvisor />
      <Moov />
    </>
  );
};
export default Projects;
