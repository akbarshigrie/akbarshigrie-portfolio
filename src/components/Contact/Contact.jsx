
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_k2alltc",
      "template_rhebjlj",
      form.current,
      "nON3rMVuE6dQueuJf"
    )
      .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      })
      .catch((error) => {
        alert("Error Sending Message ❌");
        console.log(error);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">GET IN TOUCH</p>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">
          <h3>Let's connect</h3>
          <p>
            I'm always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <span>Skardu Gilgit Baltistan, Pakistan</span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <span>akbarshigrie@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Icons under Email */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/akbar-shigrie-ali655/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/akbarshigrie" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/akbar_shigrie/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/923432826655" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" rows="10" placeholder="Your Message" required></textarea>

            <div className="form-bottom">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;