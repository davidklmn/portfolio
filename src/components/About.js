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

  function aboutMe() {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modal = document.getElementById("about-modal");

    modal.classList.add("active");
    modalOverlay.classList.add("active");
    console.log("open modal");
  }

  function closeAboutMe() {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modal = document.getElementById("about-modal");

    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
  }

  return (
    <div id="about" className="about-container">
      <div>
        <p id="split">
          I am an enthusiastic Front-End Developer who loves responsive,
          user-friendly design. I bring digital experiences to life.
        </p>
        <span className="about-me" onClick={aboutMe}>
          Read more about me
        </span>
      </div>

      <div className="about-modal" id="about-modal">
        <button data-modal-close className="modal-close" onClick={closeAboutMe}>
          &times;
        </button>
        <h2 className="about-modal-body">
          I was born and grew up in Hungary. Relocated to the UK in 2016 and
          progressing ever since.
          <br />
          <br /> Not long after I found my place in the new country I have
          started to figure out what I really wanted to do in my life. I have
          touched UI/UX and logo design, 3D modelling and these slowly directed
          me to the path of web-development.
          <br />
          <br /> I have a real passion for tech and web-development, especially
          for responsive designs. I feel confused when I find a page which is
          not designed for mobile in 2023...
          <br />
          <br />I have finished a very intensive bootcamp and learning every day
          since. While doing the studies I have managed to progress at my
          current workplace as well and secured a position as a Team Manager.
          <br />
          <br />
          It was very challenging to study at my workplace and at home at the
          same time but I believe pushing ourselves out of the comfort zone is
          the key to success.
        </h2>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
}
