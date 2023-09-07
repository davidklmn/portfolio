import { useRef, useState } from "react";
import "./contact.css";
import { ReactComponent as Vector } from "../pictures/blobanimation.svg";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // if (userName.length === 0) {
    //   alert("Name cannot be empty");
    //   return;
    // } else if (userEmail.length === 0) {
    //   alert("Email cannot be empty");
    //   return;
    // } else if (message.length === 0) {
    //   alert("Write a message, please!");
    //   return;
    // }

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

    submitSuccess();
  };

  function submitSuccess() {
    const submitButton = document.querySelector("#submit");

    console.log("success!");
    setEmailSent((current) => !current);
    submitButton.innerHTML = "✓";
    submitButton.disabled = true;
  }

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
          <button
            type="submit"
            id="submit"
            value="Send"
            className={emailSent ? "submit-animation" : ""}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
