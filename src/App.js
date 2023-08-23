import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

import Lenis from "@studio-freight/lenis";

function App() {
  //* Basic Lenis Smooth Scroll
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <main>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
