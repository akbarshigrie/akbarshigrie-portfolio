import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
    <footer className="footer">
        
      <div className="footer-container">
        <div className="footer-top">
          <h2 className="footer-logo">S. Akbar Ali</h2>

          <div className="footer-socials">
            <a href="https://github.com/akbarshigrie" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/akbar-shigrie-ali655/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.kaggle.com/akbarshigrie" target="_blank" rel="noreferrer">
              <i className="fab fa-kaggle"></i>
            </a>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <p>Copyright © 2026 Syed Akbar Ali. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;