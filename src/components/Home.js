import "./home.css";
import { ReactComponent as Vector } from "../pictures/blobanimation.svg";

export default function Home() {
  return (
    <div id="home" className="main-container">
      <Vector className="blob" />
      <div className="itsme">
        <h2>Hello, I'm</h2>
        <h1>DAVID KELEMEN</h1>
      </div>
    </div>
  );
}
