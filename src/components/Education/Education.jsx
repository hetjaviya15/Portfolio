import React from 'react';
import { motion } from 'framer-motion';
import { FaBookmark, FaLaptopCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const educationTimeline = [
  {
    year: '2025',
    title: 'Started B.Tech in CS & AI',
    institution: 'Newton School of Technology',
    subtitle: 'Rishihood University, Delhi NCR',
    description: 'Enrolled in the AI-focused Computer Science program. Immersed in programming paradigms, software development practices, and basic artificial intelligence metrics.',
    icon: <FaGraduationCap />
  },
  {
    year: '2026',
    title: 'Completed First Year',
    institution: 'Milestones & Labs',
    subtitle: 'Data Structures & Algorithms Focus',
    description: 'Mastered core Data Structures & Algorithms, Object-Oriented Programming (OOP) in C++ and JavaScript. Formed strong algorithmic bases and developed web apps.',
    icon: <FaLaptopCode />
  },
  {
    year: 'Future',
    title: 'Software Engineering Internships',
    institution: 'Industry Alignment',
    subtitle: 'Practical Execution',
    description: 'Looking to secure technical internship roles. Eager to solve real-world problems, work in collaborative developer teams, and build robust software architectures.',
    icon: <FaBriefcase />
  },
  {
    year: 'Future Goal',
    title: 'AI/ML & Software Development',
    subtitle: 'Deep Technical Focus',
    description: 'Aiming to specialize in designing scalable deep learning systems, custom model tuning, and writing efficient system-level code for tech solutions.',
    icon: <FaBookmark />
  }
];

export default function Education() {
  return (
    <section id="education" className="education section section-secondary">
      <div className="education-container container">
        
        <div className="section-header">
          <span className="section-tag">Timeline</span>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-subtitle">
            An overview of my academic progression and future goals in computer science and artificial intelligence.
          </p>
        </div>

        <div className="timeline-wrapper">
          {/* Central Line */}
          <div className="timeline-line"></div>

          {/* Timeline Nodes */}
          {educationTimeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            
            return (
              <div 
                key={idx}
                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
              >
                {/* Node bubble */}
                <motion.div 
                  className="timeline-node"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                >
                  {item.icon}
                </motion.div>

                {/* Node Content Card */}
                <motion.div 
                  className="timeline-content-card"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
                >
                  <div className="timeline-card-header">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-item-title">{item.title}</h3>
                    {item.institution && <h4 className="timeline-item-inst">{item.institution}</h4>}
                    {item.subtitle && <p className="timeline-item-sub">{item.subtitle}</p>}
                  </div>
                  <div className="timeline-card-body">
                    <p className="timeline-item-desc">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
