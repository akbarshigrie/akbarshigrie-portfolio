import React from "react";
import "./Resume.css";
import resumePDF from "../../assets/Resume-Syed-Akbar-Ali-v4.0.pdf";

const Resume = () => {
  const openResume = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-subtitle">EXPLORE MY PROFESSIONAL JOURNEY</p>

      <div className="resume-content">
        <p>
          I am a passionate AI and Machine Learning enthusiast with hands-on
          experience in building intelligent systems, training models, and
          developing modern web applications. My journey spans across AI,
          data-driven solutions, and frontend development, where I focus on
          creating impactful and scalable projects.
        </p>

        <p>
          My resume highlights my technical skills, projects, academic
          background, and practical experience in Artificial Intelligence,
          Generative AI, and full-stack development.
        </p>

        <button className="resume-btn" onClick={openResume}>
          View My Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;