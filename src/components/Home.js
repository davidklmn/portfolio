import "./home.css";
import { ReactComponent as Vector } from "../pictures/blobanimation.svg";

export default function Home() {
  const onMouseMove = (e) => {
    e.preventDefault();

    var valueX = (e.clientX * -1) / 10;
    var valueY = (e.clientY * -1) / 10;
    let blob = document.querySelector(".blob");

    blob.style.transform = `translate3d(${valueX}px, ${valueY}px,0)`;
  };

  window.addEventListener("mousemove", onMouseMove);

  return (
    <div id="home" className="main-container">
      <Vector className="blob" />
      <div className="itsme">
        <h2>Hello, I'm</h2>
        <h1>DAVID KELEMEN.</h1>
      </div>
    </div>
  );
}
