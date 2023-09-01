import portfolioIMG from "../pictures/portfolio_site.png";
import geezerIMG from "../pictures/geezer.png";
import devhubIMG from "../pictures/devhub.png";
import quizIMG from "../pictures/quiz.html.png";

export const data = [
  {
    name: "Portfolio",
    projectName: "Project",
    image: <img src={portfolioIMG} />,
    description: "This is my biggest project yet, my potrtfolio.",
    githubLink: "https://github.com/davidklmn/portfolio",
    siteLink: "davidkelemen.com",
  },
  {
    name: "Geezer",
    projectName: "Song Lyrics API Project",
    image: <img src={portfolioIMG} />,
    description:
      "This project was made by me and another bootcamp student. We have learnt a lot about how to deliver an app while pair programming.",
    githubLink: "https://github.com/alecerf01/Geezer-Project",
    siteLink: "https://alecerf01.github.io/Geezer-Project/",
  },
  {
    name: "DevHub",
    projectName: "API Project",
    image: <img src={portfolioIMG} />,
    description:
      "This project was made by me and other 2 bootcamp student. We have learnt a lot acout API and how to process data.",
    githubLink: "https://github.com/davidklmn/devhub-project",
    siteLink: "https://devhub-project.netlify.app/home",
  },
  {
    name: "Coding Quiz",
    projectName: "Project",
    image: <img src={portfolioIMG} />,
    description: "Quiz game project",
    githubLink: "https://github.com/davidklmn/quiz-game-module6",
    siteLink: "https://davidklmn.github.io/quiz-game-module6/",
  },
];
