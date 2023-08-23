import { useRef } from "react";
import "./contact.css";
import { ReactComponent as Vector } from "../pictures/blobanimation.svg";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mfw3zxk",
        "template_dd6g67l",
        form.current,
        "ETWB3HYBoOPQFvkZo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <Vector className="blob" />
      <h1>Contact.</h1>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="name" />
          <input type="text" name="user_email" placeholder="email" />
          <textarea name="message" placeholder="message"></textarea>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}
