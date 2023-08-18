import "./contact.css";
import { ReactComponent as Vector } from "../pictures/blobanimation.svg";

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <Vector className="blob" />
      <h1>Contact.</h1>
      <div className="form-container">
        <form>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="email" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}
