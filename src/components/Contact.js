import { useRef, useState } from "react";
import "./contact.css";
import { ReactComponent as Vector } from "../pictures/blobanimation.svg";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_mfw3zxk",
    //     "template_dd6g67l",
    //     form.current,
    //     "ETWB3HYBoOPQFvkZo"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    setUserName("");
    setUserEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="contact-container">
      <Vector className="blob" />
      <h1>Contact.</h1>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="name"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
          <input
            type="text"
            name="user_email"
            placeholder="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.currentTarget.value)}
          />
          <textarea
            name="message"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
          <input type="submit" id="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
