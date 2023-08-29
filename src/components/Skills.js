import "./skills.css";

import { gsap } from "gsap";

// * Skill-Icons
import { ReactComponent as IconHtml5 } from "react-devicon/html5/plain/Html5Plain.svg";
import { ReactComponent as IconJavascript } from "react-devicon/javascript/plain/JavascriptPlain.svg";
import { ReactComponent as IconCss3 } from "react-devicon/css3/plain/Css3Plain.svg";
import { ReactComponent as IconBootstrap } from "react-devicon/bootstrap/plain/BootstrapPlain.svg";
import { ReactComponent as IconJquery } from "react-devicon/jquery/plain/JqueryPlain.svg";
import { ReactComponent as IconNodejs } from "react-devicon/nodejs/plain/NodejsPlain.svg";
import { ReactComponent as IconReact } from "react-devicon/react/original/ReactOriginal.svg";

export default function Skills() {
  function mouseMove(e) {
    const ball = document.getElementById("cursor");
    gsap.to(ball, {
      x: e.pageX,
      y: e.pageY,
      scale: 1,
      autoAlpha: 1,
    });
  }
  function mouseLeave() {
    const ball = document.getElementById("cursor");
    gsap.to(ball, {
      scale: 0.1,
      autoAlpha: 0,
    });
  }

  return (
    <div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      id="skills"
      className="skills-container"
    >
      <div id="cursor"></div>
      <h1>Skills.</h1>
      <div className="skills-box">
        <div className="skill-row">
          <div className="skill">
            <IconHtml5 width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">Html</h2>
          </div>
          <div className="skill">
            <IconCss3 width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">Css</h2>
          </div>
          <div className="skill">
            <IconBootstrap width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">Bootstrap</h2>
          </div>
          <div className="skill">
            <IconJavascript width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">Javascript</h2>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill">
            <IconJquery width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">Jquery</h2>
          </div>
          <div className="skill">
            <IconNodejs width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">Nodejs</h2>
          </div>
          <div className="skill">
            <IconReact width={150} height={150} className="skill-icon" />
            <h2 className="skill-name">React</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
