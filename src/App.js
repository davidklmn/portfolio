import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
