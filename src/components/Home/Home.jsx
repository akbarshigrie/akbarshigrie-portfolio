import React from "react";
import './Home.css';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Syed Akbar Ali</span>
        </h1>

        <p>AI/ML Engineer | AI Automation Engineer</p>


        <div id="buttons" className="home-buttons">
          <a href='#projects' className="btn btn-primary">View My Work</a>
          <a href='#contact' className="btn btn-secondary">Contact Me</a>

        </div>

        {/* Social Icons under Buttons */}
        <div className="social-icons-home">
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

    </section >
  );
};

export default Home;