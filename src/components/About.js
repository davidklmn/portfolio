import { useEffect } from "react";

import "./about.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  //* Split Type which splits the p tag into divs

  useEffect(() => {
    function runSplit() {
      const text = new SplitType("#split", { types: "words, chars" });

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

    runSplit();
  });

  return (
    <div id="about" className="about-container">
      <div>
        <p id="split">
          I am an enthisuastic learner and thinker. I love to learn new things
          and jump right into problemsolving. And I loooooove pizza!
        </p>
      </div>
    </div>
  );
}
