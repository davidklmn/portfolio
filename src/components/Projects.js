import "./projects.css";

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
            <img
              className="proj-img"
              src="/images/portfolio_site.png"
              alt="portfolio"
            ></img>
          </div>
        </div>
        <div id="card2" className="cards"></div>
        <div id="card3" className="cards"></div>
        <div id="card4" className="cards"></div>
      </div>
    </div>
  );
}
