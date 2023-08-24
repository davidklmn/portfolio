import "./footer.css";

export default function Footer() {
  return (
    <div id="footer" className="footer-container">
      <p>
        Designed and Programmed with <span className="heart">♥</span> by David
        Kelemen
      </p>
      <div className="contacts">
        <a href="https://www.linkedin.com/in/davidkelemen/">LinkedIn</a>
        <p>|</p>
        <a href="mailto: hello@davidkelemen.com">hello@davidkelemen.com</a>
      </div>
    </div>
  );
}
