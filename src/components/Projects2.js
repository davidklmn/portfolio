import { useState } from "react";

import "./projects2.css";
import { data } from "./projectData";

export default function Projects2() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectToggle = (i) => {
    if (selectedProject === i) {
      return setSelectedProject(null);
    }

    setSelectedProject(i);
    console.log(i);
  };

  return (
    <div id="projects2" className="projects2">
      <div className="projects2-container">
        <h1>PROJECTS.</h1>
        <div className="cards-container">
          {data.map((item, i) => (
            <div
              className={
                selectedProject === i
                  ? "card-item selected-project"
                  : "card-item"
              }
              key={i}
              onClick={() => projectToggle(i)}
            >
              <div className="card">
                <div className="image">{item.image}</div>
                <div className="card-content">
                  <div className="sub-title">{item.projectName}</div>
                  <div className="title">{item.name}</div>
                  <div className="description">{item.description}</div>
                  <div className="github-link">
                    <a href={item.githubLink} target="blank">
                      gitHub
                    </a>
                  </div>
                  <div className="site-link">
                    <a href={item.siteLink} target="blank">
                      Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
