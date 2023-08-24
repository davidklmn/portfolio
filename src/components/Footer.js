import "./footer.css";

export default function Footer() {
  return (
    <div id="footer" className="footer-container">
      <p>
        Designed and Programmed with <span className="heart">♥</span> by David
        Kelemen
      </p>
      <div className="contacts">
        <a
          href="https://www.linkedin.com/in/davidkelemen/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <p>|</p>
        <a
          href="mailto: hello@davidkelemen.com"
          target="_blank"
          rel="noreferrer"
        >
          hello@davidkelemen.com
        </a>
      </div>
    </div>
  );
}
