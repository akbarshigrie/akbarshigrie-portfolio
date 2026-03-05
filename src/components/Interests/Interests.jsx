import React from "react";
import "./Interests.css";
import { FaCode, FaChess, FaBook, FaDumbbell, FaHiking, } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const Interests = () => {
  return (
    <section id="interests" className="interests">
      <h2 className="section-title">My Interests</h2>
      <p className="section-subtitle">WHAT I LOVE DOING</p>

      <div className="interests-container">
        <div className="interest-card active">
          <FaCode className="icon" />
          <h3>Coding</h3>
          <p>Building innovative solutions and exploring new technologies</p>
        </div>

        <div className="interest-card">
          <FaBook className="icon" />
          <h3>Reading</h3>
          <p>Expanding knowledge through technical and business literature</p>
        </div>

        <div className="interest-card">
          <FaHiking className="icon" />
          <h3>Travel & Adventure</h3>
          <p>Exploring new places, discovering new cultures, embracing challenges, and experiencing life beyond comfort zones</p>
        </div>

        <div className="interest-card">
          <FaChess className="icon" />
          <h3>Chess</h3>
          <p>Strategic thinking and problem-solving through the game of kings</p>
        </div>

        <div className="interest-card">
          <FaDumbbell className="icon" />
          <h3>Gym</h3>
          <p>Maintaining physical fitness and a healthy lifestyle</p>
        </div>

        
        <div className="interest-card">
          <GiCricketBat className="icon" />
          <h3>Cricket</h3>
          <p>
            Enjoy playing and watching cricket, appreciating teamwork,
            strategy, and competitive spirit on the field
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interests;