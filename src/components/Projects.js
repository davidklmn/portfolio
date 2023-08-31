import "./projects.css";
import portfolioIMG from "../pictures/portfolio_site.png";
import project1IMG from "../pictures/geezer.png";
import project2IMG from "../pictures/devhub.png";
import quizIMG from "../pictures/quiz.html.png";

export default function Projects() {
  return (
    <div id="projects" className="project-container">
      <h1>Projects.</h1>
      <div className="card-container">
        <div id="card1" className="cards">
          <div className="card-text">
            <p>Project</p>
            <h2>Portfolio</h2>
          </div>
          <div className="card-image">
            <img className="proj-img" src={portfolioIMG} alt="portfolio" />
          </div>
        </div>
        <div id="card2" className="cards small-card">
          <div className="card-text">
            <p>API Project</p>
            <h2>Devhub</h2>
          </div>
          <div className="card-image">
            <img className="proj-img" src={project2IMG} alt="portfolio" />
          </div>
        </div>
        <div id="card3" className="cards small-card">
          <div className="card-text">
            <p>Project</p>
            <h2>Quiz</h2>
          </div>
          <div className="card-image">
            <img className="proj-img" src={quizIMG} alt="portfolio" />
          </div>
        </div>
        <div id="card4" className="cards">
          <div className="card-text">
            <p>Song lyrics Project</p>
            <h2>Geezer</h2>
          </div>
          <div className="card-image">
            <img className="proj-img" src={project1IMG} alt="portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
}
