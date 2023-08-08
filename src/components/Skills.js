import "./skills.css";

// * Skill-Icons
import { ReactComponent as IconHtml5 } from "react-devicon/html5/plain/Html5Plain.svg";
import { ReactComponent as IconJavascript } from "react-devicon/javascript/plain/JavascriptPlain.svg";
import { ReactComponent as IconCss3 } from "react-devicon/css3/plain/Css3Plain.svg";
import { ReactComponent as IconBootstrap } from "react-devicon/bootstrap/plain/BootstrapPlain.svg";
import { ReactComponent as IconJquery } from "react-devicon/jquery/plain/JqueryPlain.svg";
import { ReactComponent as IconNodejs } from "react-devicon/nodejs/plain/NodejsPlain.svg";
import { ReactComponent as IconReact } from "react-devicon/react/original/ReactOriginal.svg";

export default function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills.</h1>
      <div className="skills-box">
        <div className="skill-row">
          <div className="skill">
            <IconHtml5 width={150} height={150} className="skill-icon" />
            <h2>Html</h2>
          </div>
          <div className="skill">
            <IconCss3 width={150} height={150} className="skill-icon" />
            <h2>Css</h2>
          </div>
          <div className="skill">
            <IconBootstrap width={150} height={150} className="skill-icon" />
            <h2>Bootstrap</h2>
          </div>
          <div className="skill">
            <IconJavascript width={150} height={150} className="skill-icon" />
            <h2>Javascript</h2>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill">
            <IconJquery width={150} height={150} className="skill-icon" />
            <h2>Jquery</h2>
          </div>
          <div className="skill">
            <IconNodejs width={150} height={150} className="skill-icon" />
            <h2>Nodejs</h2>
          </div>
          <div className="skill">
            <IconReact width={150} height={150} className="skill-icon" />
            <h2>React</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
