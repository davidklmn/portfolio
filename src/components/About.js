import "./about.css";

import { useEffect } from "react";

//*Plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function About() {
  //* ScrollTrigger GSAP plugin registering
  gsap.registerPlugin(ScrollTrigger);

  //* This config helps to prevent scroll jittering/jumping on iOs devices
  ScrollTrigger.config({ ignoreMobileResize: true });

  //* Using SplitType with useEffect which splits the p tag into spans
  useEffect(() => {
    function runSplit() {
      const text = new SplitType("#split", { types: "words, chars" });

      //* ScrollTrigger
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: text.chars,
          start: "top 50%",
          end: "bottom 15%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    }
    //* Run the function when the page loads
    runSplit();
  });

  return (
    <div id="about" className="about-container">
      <div>
        <p id="split">
          I am an enthusiastic Front-End Developer who loves responsive
          user-friendly design... and I looooove pizaaaaaa.
        </p>
      </div>
    </div>
  );
}
