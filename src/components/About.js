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
          <span className="about-me" onClick={aboutMe}>
            Read more
          </span>
        </p>
      </div>

      <div className="about-modal" id="about-modal">
        <button data-modal-close className="modal-close" onClick={closeAboutMe}>
          &times;
        </button>
        <h2 className="about-modal-body">
          Praesent eu ultrices ligula. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Etiam malesuada
          at risus sit amet porta. Phasellus ornare eget ante vitae dignissim.
          Praesent eu nisi sodales, consectetur arcu vel, dignissim ex. Donec
          rhoncus molestie sollicitudin. Nulla facilisis, lacus ut rhoncus
          tincidunt, nunc dolor pulvinar magna, venenatis ultricies dui diam a
          eros. Suspendisse sit amet interdum magna. Donec vulputate, magna non
          convallis porttitor, dui sapien viverra lectus, sagittis congue libero
          elit faucibus nisl. Etiam sodales, mi eu convallis congue, enim sapien
          gravida arcu, at dictum quam orci quis sem. Morbi a lorem at metus
          lacinia scelerisque at eget dolor. Nam eros orci, malesuada tincidunt
          feugiat in, laoreet ut lorem. Duis eu mauris ipsum. Fusce ullamcorper
          magna vel finibus venenatis. Cras arcu augue, porttitor eu dignissim
          non, semper non tellus. Duis vulputate magna ultricies diam finibus,
          non vulputate tellus egestas.
        </h2>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
}
