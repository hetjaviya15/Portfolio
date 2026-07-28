import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaExternalLinkAlt } from 'react-icons/fa';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="about" className="about section section-secondary">
      <div className="about-container container">
        
        {/* Left Column: Story & University Info */}
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className="section-tag" variants={itemVariants}>About Me</motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Engineering Tomorrow's AI Systems
          </motion.h2>
          
          <motion.p className="about-description" variants={itemVariants}>
            I am a first-year <strong>B.Tech in Computer Science & Artificial Intelligence</strong> student at 
            <strong> Newton School of Technology</strong> in partnership with <strong>Rishihood University</strong>. 
            Passionate about coding, technology, and continuous growth, I thrive on solving complex software challenges.
          </motion.p>
          
          <motion.p className="about-description" variants={itemVariants}>
            My curriculum blends cutting-edge computer science fundamentals with core artificial intelligence modules. 
            I am deeply invested in mastering data structures, algorithms, machine learning, and frontend application engineering.
          </motion.p>

          <div className="about-institutions">
            <motion.div className="institution-card" variants={itemVariants}>
              <div className="institution-icon"><FaGraduationCap /></div>
              <div className="institution-info">
                <h3>Newton School of Technology</h3>
                <p>B.Tech in Computer Science & AI (2025 - 2029)</p>
              </div>
            </motion.div>
            
            <motion.div className="institution-card" variants={itemVariants}>
              <div className="institution-icon"><FaExternalLinkAlt /></div>
              <div className="institution-info">
                <h3>Rishihood University</h3>
                <p>Campus & Academic Partner, Delhi NCR</p>
              </div>
            </motion.div>
          </div>

          <div className="about-interests">
            <motion.div className="interest-tag" variants={itemVariants}>
              <FaCode /> Software Development
            </motion.div>
            <motion.div className="interest-tag" variants={itemVariants}>
              <FaBrain /> Artificial Intelligence
            </motion.div>
            <motion.div className="interest-tag" variants={itemVariants}>
              <FaCode /> Problem Solving
            </motion.div>
            <motion.div className="interest-tag" variants={itemVariants}>
              <FaBrain /> Machine Learning
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Visual Interactive Student Card & Stats */}
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          <div className="visual-card-wrapper">
            <div className="student-badge-card">
              <div className="badge-header">
                <div className="badge-logo-container">NST</div>
                <div className="badge-status">STUDENT ID</div>
              </div>
              <div className="badge-avatar-area">
                <div className="badge-avatar-bg">
                  {/* Digital styled avatar outline */}
                  <div className="avatar-shape"></div>
                </div>
              </div>
              <div className="badge-details">
                <h3>HET JAVIYA</h3>
                <p className="badge-title">CS & AI Engineer</p>
                <div className="badge-grid">
                  <div>
                    <span className="badge-label">BATCH</span>
                    <span className="badge-val">2025</span>
                  </div>
                  <div>
                    <span className="badge-label">ROLE</span>
                    <span className="badge-val">Developer</span>
                  </div>
                </div>
              </div>
              <div className="badge-footer">
                <div className="barcode"></div>
              </div>
            </div>

            {/* Floating Statistic Card 1 */}
            <motion.div 
              className="floating-stat-card card-top-left"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="stat-label">CGPA</span>
              <span className="stat-value">7.5+</span>
            </motion.div>

            {/* Floating Statistic Card 2 */}
            <motion.div 
              className="floating-stat-card card-bottom-right"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="stat-label">Curriculum</span>
              <span className="stat-value">AI-First</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
