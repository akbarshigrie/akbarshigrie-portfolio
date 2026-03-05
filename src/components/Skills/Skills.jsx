import React from "react";
import "./Skills.css";

import {
  FaPython,
  FaRobot,
  FaBrain,
  FaEye,
  FaFire,
  FaReact,
  FaJs,
  FaCode,
  FaGitAlt,
  FaAws,
  FaTrophy,
  FaLaptopCode
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiScipy,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiFastapi,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiAirtable,
  SiPostman,
  SiVercel,
  SiN8N,
  SiZapier
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="main-title">My Skills</h1>
        <p className="subtitle">WHAT I'M GOOD AT</p>
        <div className="underline"></div>

        {/* Languages & Libraries */}
        <div className="skill-category">
          <h2>Languages & Libraries</h2>
          <div className="skills-grid">
            <div className="skill-card"><FaPython /> Python</div>
            <div className="skill-card"><FaJs /> JavaScript</div>
            <div className="skill-card"><FaCode /> C++</div>
            <div className="skill-card"><SiPandas /> Pandas</div>
            <div className="skill-card"><SiNumpy /> NumPy</div>
            <div className="skill-card">📊 Matplotlib</div>
            <div className="skill-card">📈 Seaborn</div>
          </div>
        </div>

        {/* Web Frameworks & APIs */}
        <div className="skill-category">
          <h2>Web Frameworks & APIs</h2>
          <div className="skills-grid">
            <div className="skill-card"><SiFastapi /> FastAPI</div>
            <div className="skill-card">🔗 Webhook</div>
            <div className="skill-card">🎛 Gradio</div>
            <div className="skill-card"><FaReact /> React</div>
            <div className="skill-card"><SiNextdotjs /> Next.js</div>
          </div>
        </div>

        {/* Machine Learning & AI */}
        <div className="skill-category">
          <h2>Machine Learning & AI</h2>
          <div className="skills-grid">
            <div className="skill-card"><FaRobot /> Machine Learning</div>
            <div className="skill-card"><FaBrain /> Deep Learning</div>
            <div className="skill-card"><FaEye /> Computer Vision</div>
            <div className="skill-card"><FaBrain /> NLP</div>
            <div className="skill-card"><SiOpencv /> OpenCV</div>
          </div>
        </div>

        {/* GenAI & Automation */}
        <div className="skill-category">
          <h2>GenAI & Automation</h2>
          <div className="skills-grid">
            <div className="skill-card"><FaFire /> Generative AI</div>
            <div className="skill-card"><FaRobot /> AI Automation</div>
            <div className="skill-card"><SiN8N /> n8n</div>
            {/* <div className="skill-card"><SiZapier /> Zapier</div>
            <div className="skill-card">🛠 Make.com</div> */}
          </div>
        </div>

        {/* Databases */}
        <div className="skill-category">
          <h2>Databases</h2>
          <div className="skills-grid">
            <div className="skill-card"><SiMysql /> MySQL</div>
            <div className="skill-card"><SiPostgresql /> PostgreSQL</div>
            <div className="skill-card"><SiSqlite /> SQLite</div>
            <div className="skill-card"><SiSupabase /> Supabase</div>
            <div className="skill-card"><SiAirtable /> Airtable</div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-category">
          <h2>Tools & Platforms</h2>
          <div className="skills-grid">
            <div className="skill-card"><FaGitAlt /> Git & GitHub</div>
            <div className="skill-card"><SiPostman /> Postman</div>
            <div className="skill-card"><FaAws /> AWS</div>
            <div className="skill-card"><FaTrophy /> Kaggle</div>
            <div className="skill-card">🤗 Hugging Face</div>
            <div className="skill-card"><SiVercel /> Vercel</div>
            <div className="skill-card">📓 Google Colab</div>
            <div className="skill-card">🌐 ngrok</div>
          </div>
        </div>

        {/* Development Environments */}
        <div className="skill-category">
          <h2>Development Environments</h2>
          <div className="skills-grid">
            <div className="skill-card">📓 Jupyter Notebook</div>
            <div className="skill-card"><FaLaptopCode /> VS Code</div>
            <div className="skill-card">💎 Cursor</div>
            <div className="skill-card">🤖 Claude</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;