import "./projects2.css";
import { data } from "./projectData";

export default function Projects2() {
  const projectExpand = (item, i) => {
    // Targeting the currently clicked card
    const targetCard = item.currentTarget;
    console.log(targetCard, i);

    // Cloning targeted card
    const cardClone = targetCard.cloneNode(true);
    console.log(cardClone);
    //Get the location and the size of the clicked card with getBoundingClientRect() method
    const { top, left, width, height } = targetCard.getBoundingClientRect();

    //Positioning the cloned card on the top of the original card
    cardClone.style.position = "fixed";
    cardClone.style.top = top + "px";
    cardClone.style.left = left + "px";
    cardClone.style.width = width + "px";
    cardClone.style.height = height + "px";
    //Hide the original card using opacity
    targetCard.style.opacity = "0";
    //Appending the cloned card into the same container(parent) as the original
    targetCard.parentNode.appendChild(cardClone);
    cardClone.classList.add("expanded");
    //Expanding animation
    requestAnimationFrame(() => {
      cardClone.style.top = 0;
      cardClone.style.left = 0;
      cardClone.style.width = "100vw";
      cardClone.style.height = "100vh";
      cardClone.style.zIndex = "9999";
    });

    window.setTimeout(function () {
      cardClone.classList.add("expanded-animation");
    }, "175");
  };

  return (
    <div id="projects2" className="projects2">
      <div className="projects2-container">
        <h1>PROJECTS.</h1>
        <div className="cards-container">
          {data.map((item, i) => (
            <div
              className="card-item"
              key={i}
              onClick={(item) => {
                projectExpand(item, i);
              }}
            >
              <div className="card">
                <div className="image">{item.image}</div>
                <div className="card-content">
                  <div className="sub-title">{item.projectName}</div>
                  <div className="title">{item.name}</div>
                  <div className="description">{item.description}</div>
                  <div className="project-links-container">
                    <p>Check it out on:</p>
                    <div className="project-links">
                      <div className="github-link">
                        <a href={item.githubLink} target="blank">
                          gitHub
                        </a>
                      </div>
                      <div className="site-link">
                        <a href={item.siteLink} target="blank">
                          Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
