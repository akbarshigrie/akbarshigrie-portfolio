import React, { useState } from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Plant Disease Detection using YOLOv4 (Deep Learning Object Detection)",
        description:
            "Implemented a high-accuracy plant leaf disease detection system using YOLOv4 and the PlantVillage dataset. Performed dataset preprocessing, augmentation, training, and evaluation, achieving strong multi-class performance for real-time agricultural disease identification.",
        tech: ["Python", "OpenCV", "YOLOv4", "Darknet", "Data Augmentation", "Computer Vision", "Google Colab"],
        image: "/images/leafProcess.webp",
        github: "#"
    },
    {
        title: "AI Agent System for E-commerce Automation (n8n + Shopify)",
        description:
            "Built an end-to-end AI automation system using n8n to manage Shopify store operations through a single intelligent agent. The system automates product management, order fulfillment, inventory tracking, sales analytics, marketing campaigns, and SEO audits. Integrated AI-driven insights and reporting to enable scalable operations.",
        tech: ["n8n", "AI Agents", "Shopify API", "OpenAI API", "Workflow Automation"],
        image: "/images/eCommerce.png",
        github: "https://github.com/akbarshigrie/AI-Agent-System-for-E-commerce-Automation-n8n-Shopify-"
    },
    {
        title: "Olympics Data Analysis & Visualization Dashboard",
        description:
            "A data-driven project exploring historical Olympic trends such as gold medal age distribution, female participation growth, and country-wise medal performance through interactive visualizations and insights.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Gradio"],
        image: "/images/olympics.jpg",
        github: "https://github.com/akbarshigrie/Olympic-Data-Analysis"
    },

    {
        title: "AI-Powered Website Chatbot - Customer Support",
        description:
            "Developed an AI-powered customer support chatbot using n8n automation and Google Gemini. The system reads company knowledge from structured documents, maintains conversation memory, and provides human-like responses. It also captures user contact details and automatically forwards leads and chat summaries to the support team via Gmail.",
        tech: ["n8n", "AI Agents", "Google Gemini API", "LangChain", "Google Docs API", "Gmail API", "Workflow Automation", "Conversational AI"],
        image: "/images/chatbot-ns.webp",
        github: "https://github.com/akbarshigrie/AI-Powered-Website-Chatbot"
    },
    {
        title: "AI-Powered LeadEngine for Automated Outreach",
        description:
            "Built an AI-driven lead generation and outreach automation workflow using n8n. The system automatically organizes and enriches lead data, extracts verified email addresses and profile details, and generates personalized cold emails using an AI agent. This workflow eliminates manual data handling and repetitive email writing while enabling scalable, human-like outreach for business growth and marketing campaigns.",
        tech: ["n8n", "AI Agents", "OpenAI API", "Lead Data Enrichment", "Email Automation", "Workflow Automation"],
        image: "/images/linkedInDataScrapeWorkflow.webp",
        github: "https://github.com/akbarshigrie/AI-Powered-LeadEngine-for-Automated-Outreach"
    },
];

const Project = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section id="projects" className="project-section">
            <div className="project-container">
                <h1 className="project-title">My Projects</h1>
                <p className="project-subtitle">FEATURED PROJECTS</p>
                <div className="underline"></div>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} />

                            <div className="project-content">
                                <h3>{project.title}</h3>

                                <div className="desc-wrapper">
                                    <p className={`description ${openIndex === index ? "expanded" : ""}`}>
                                        {project.description}
                                    </p>

                                    <div
                                        className={`read-toggle-btn ${openIndex === index ? "active" : ""}`}
                                        onClick={() => toggleDescription(index)}
                                    >
                                        <span className="arrow"></span>
                                    </div>
                                </div>

                                <div className="tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>

                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <FaGithub /> GitHub
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="github-btn">
                    <a href="https://github.com/akbarshigrie" target="_blank" rel="noreferrer">
                        <FaGithub /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project;