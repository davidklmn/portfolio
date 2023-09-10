import portfolioIMG from "../pictures/portfolio_site.png";
import geezerIMG from "../pictures/geezer.png";
import devhubIMG from "../pictures/devhub.png";
import quizIMG from "../pictures/quiz.html.png";

export const data = [
  {
    name: "Portfolio",
    projectName: "Project",
    image: <img src={portfolioIMG} />,
    description: (
      <p>
        I have created this portfolio to showcase my projects.
        <br />
        In this project I used <span>React</span>, <span>JavaScript</span> and
        basic <span>CSS</span> and <span>HTML</span>.
        <br />
        Also used <span>GSAP</span> and <span>Split Type</span> for scroll
        animations and <span>EmailJS</span> to handle emails.
        <br />
        Deployed on gitHub pages with react-gh-pages.
      </p>
    ),
    githubLink: "https://github.com/davidklmn/portfolio",
    siteLink: "davidkelemen.com",
  },
  {
    name: "Geezer",
    projectName: "Song Lyrics API Project",
    image: <img src={geezerIMG} />,
    description: (
      <p>
        In this app you are able to search for a track, listen to it and read
        the lyrics.
        <br />
        Used <span>jQuery</span>, <span>Bootstrap</span> and two{" "}
        <span>API</span>s.
        <br />
        This was my first bootcamp project what I've done with another student
        and learnt a lot from being able to communicate about a project and how
        to bring it to life.
      </p>
    ),
    githubLink: "https://github.com/alecerf01/Geezer-Project",
    siteLink: "https://alecerf01.github.io/Geezer-Project/",
  },
  {
    name: "DevHub",
    projectName: "API Project",
    image: <img src={devhubIMG} />,
    description: (
      <p>
        This final botcamp project have been created to be able to search jobs
        in your area and find news about web-development.
        <br />
        Used <span>React</span>, <span>React-Bootstrap</span> and two{" "}
        <span>API</span>s.
        <br />
      </p>
    ),
    githubLink: "https://github.com/davidklmn/devhub-project",
    siteLink: "https://devhub-project.netlify.app/home",
  },
  {
    name: "Coding Quiz",
    projectName: "Project",
    image: <img src={quizIMG} />,
    description: (
      <p>
        A simple coding quiz project using <span>JavaScript</span>
      </p>
    ),
    githubLink: "https://github.com/davidklmn/quiz-game-module6",
    siteLink: "https://davidklmn.github.io/quiz-game-module6/",
  },
];
