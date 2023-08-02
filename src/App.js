import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
