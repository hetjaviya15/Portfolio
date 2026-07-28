import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Magnetic from '../Magnetic/Magnetic';
import './Projects.css';

const projectsList = [
  {
    id: 'portx',
    title: "Naani's Pure Veg",
    description: 'A premium portfolio template platform designed specifically for students to showcase their work, credentials, and academic achievements in high-fidelity layout styles.',
    tags: ['React', 'CSS Modules', 'Framer Motion'],
    github: 'https://github.com/hetjaviya15/naani-s_kitchen',
    demo: 'https://naani-s-kitchen.vercel.app/',
    svg: (
      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="240" rx="16" fill="#f8fafc" />
        <rect x="30" y="30" width="100" height="65" rx="8" fill="#ffffff" stroke="rgba(15,23,42,0.06)" strokeWidth="2"/>
        <rect x="150" y="30" width="100" height="65" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="270" y="30" width="100" height="65" rx="8" fill="#ffffff" stroke="rgba(15,23,42,0.06)" strokeWidth="2"/>
        <rect x="30" y="115" width="220" height="95" rx="10" fill="#ffffff" stroke="rgba(15,23,42,0.06)" strokeWidth="2"/>
        <rect x="270" y="115" width="100" height="95" rx="10" fill="#ffffff" stroke="rgba(15,23,42,0.06)" strokeWidth="2"/>
        <circle cx="80" cy="62" r="14" fill="#f1f5f9" />
        <circle cx="200" cy="62" r="14" fill="#dbeafe" />
        <circle cx="320" cy="62" r="14" fill="#f1f5f9" />
        <path d="M208 80L222 96L215 99L221 110L217 112L211 101L204 105L208 80Z" fill="#3b82f6" className="svg-cursor" />
      </svg>
    )
  },
  {
    id: 'cafe',
    title: "Sage Farm Cafe",
    description: 'A modern, responsive cafe website highlighting local roasts, interactive seat/table reservations, and custom micro-animations for menu items.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
    github: 'https://github.com/hetjaviya15/sage_farm_cafe',
    demo: 'https://sage-farm-cafe.vercel.app/',
    svg: (
      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="240" rx="16" fill="#f8fafc" />
        <path d="M160 110C160 145 190 155 220 155C250 155 280 145 280 110H160Z" fill="#f1f5f9" stroke="#0f172a" strokeWidth="3"/>
        <path d="M280 120C298 120 308 128 308 135C308 142 298 150 280 150" stroke="#0f172a" strokeWidth="3" strokeLinecap="round"/>
        <path d="M185 92C185 85 195 80 195 72" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="steam-line" />
        <path d="M220 92C220 80 230 75 230 65" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="steam-line steam-2" />
        <path d="M255 92C255 85 265 80 265 72" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="steam-line steam-3" />
        <rect x="30" y="30" width="110" height="12" rx="4" fill="#e2e8f0" />
        <rect x="330" y="30" width="40" height="12" rx="4" fill="#e2e8f0" />
        <rect x="30" y="190" width="200" height="8" rx="3" fill="#cbd5e1" />
        <rect x="30" y="205" width="140" height="8" rx="3" fill="#cbd5e1" />
      </svg>
    )
  },
]
export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="projects" className="projects section section-secondary">
      <div className="projects-container container">
        
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of application development, design systems, and frontend logic I built while learning CS & AI.
          </p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
            >
              {/* Image / Graphic wrapper with zoom zoom effect */}
              <div className="project-graphic-wrapper">
                {project.svg}
                <div className="project-overlay">
                  <div className="project-overlay-links">
                    <Magnetic range={25} speed={0.4}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" aria-label="GitHub Repository">
                        <FaGithub />
                      </a>
                    </Magnetic>
                    <Magnetic range={25} speed={0.4}>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" aria-label="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-description-text">{project.description}</p>
                
                {/* Tech tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag-item">{tag}</span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="project-card-footer">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-footer-link link-github">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-footer-link link-demo">
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
