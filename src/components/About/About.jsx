import React from "react";
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      
      <div id="about" className="about-header">
        <h2>About Me</h2>
        <p>GET TO KNOW ME</p>
        <div className="underline"></div>
      </div>

      <div className="about-content">

        <div className="about-text">
          <p>
            I am Syed Akbar Ali, a passionate and dedicated Artificial Intelligence student currently pursuing my Bachelor’s degree. I have a strong interest in technology, problem-solving, critical thinking, and building real-world projects that create impact.
          </p>

          <p>
            Along with my studies, I am actively working on improving my skills in AI, Data Analysis, Web Development, and Automation. I enjoy learning new technologies and applying them through practical projects.
          </p>

          <p>
            My goal is to grow as a professional in the AI and Tech industry while continuously learning, innovating, and building meaningful solutions.
          </p>
        </div>

        <div className="about-image">
          <img src="/images/profile.v2.png" alt="Profile" />
        </div>

      </div>
    </section>
  );
};

export default About;