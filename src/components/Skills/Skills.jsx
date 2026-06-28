import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaGithub, FaBrain, FaRobot, FaLaptopCode, FaTools, FaCode 
} from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: <FaCode />,
    skills: [
      { name: 'Python', level: 90, icon: <FaPython style={{ color: '#3776AB' }} /> },
      { name: 'JavaScript', level: 80, icon: <FaJs style={{ color: '#F7DF1E' }} /> }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'React', level: 85, icon: <FaReact style={{ color: '#61DAFB' }} /> },
      { name: 'HTML5', level: 90, icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
      { name: 'CSS3', level: 85, icon: <FaCss3Alt style={{ color: '#1572B6' }} /> }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    icon: <FaTools />,
    skills: [
      { name: 'Git', level: 80, icon: <FaGitAlt style={{ color: '#F05032' }} /> },
      { name: 'GitHub', level: 85, icon: <FaGithub style={{ color: '#181717' }} /> },
      { name: 'VS Code', level: 90, icon: <VscVscode style={{ color: '#007ACC' }} /> }
    ]
  },
  {
    id: 'learning',
    title: 'Focus Areas (Learning)',
    icon: <FaBrain />,
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, icon: <FaBrain style={{ color: '#EC4899' }} /> },
      { name: 'Artificial Intelligence', level: 75, icon: <FaBrain style={{ color: '#3B82F6' }} /> },
      { name: 'Machine Learning', level: 70, icon: <FaRobot style={{ color: '#10B981' }} /> }
    ]
  }
];

export default function Skills() {
  
  // Track cursor position inside the card for radial glow
  const handleMouseMove = (e, id) => {
    const card = document.getElementById(id);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 15 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="skills-container container">
        
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">My Skillset</h2>
          <p className="section-subtitle">
            Growing and expanding my knowledge base. Here is a review of technologies and core engineering subjects I work with.
          </p>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              id={category.id}
              className="skill-card"
              variants={cardVariants}
              onMouseMove={(e) => handleMouseMove(e, category.id)}
            >
              {/* Card Header */}
              <div className="skill-card-header">
                <div className="skill-card-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="skill-items-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-wrapper">
                        <span className="skill-item-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="progress-bar-container">
                      <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
