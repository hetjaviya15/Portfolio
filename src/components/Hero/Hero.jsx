import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import Magnetic from '../Magnetic/Magnetic';
import './Hero.css';

const typingPhrases = [
  'CS & AI Student',
  'Aspiring Software Engineer',
  'AI & ML Enthusiast',
  'Full Stack Web Developer'
];

export default function Hero() {
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = typingPhrases[currentPhraseIdx];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIdx]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  // Entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  // Background floating shapes movement
  const shapeVariants = (xRange, yRange, duration) => ({
    animate: {
      x: xRange,
      y: yRange,
      transition: {
        x: { duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
        y: { duration: duration * 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
      }
    }
  });

  return (
    <section id="home" className="hero section">
      {/* Dynamic Background shapes */}
      <div className="hero-shapes">
        <motion.div
          className="shape bubble-1"
          variants={shapeVariants([-20, 20], [-30, 30], 6)}
          animate="animate"
        />
        <motion.div
          className="shape bubble-2"
          variants={shapeVariants([30, -30], [-20, 20], 8)}
          animate="animate"
        />
        <motion.div
          className="shape bubble-3"
          variants={shapeVariants([-15, 15], [30, -30], 7)}
          animate="animate"
        />
      </div>

      <div className="hero-container container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>Welcome to my space</span>
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Hi, I'm <span className="highlight">Het Javiya</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            I am a <span className="typed-text">{displayText}</span>
            <span className="typed-cursor">|</span>
          </motion.h2>

          <motion.p className="hero-intro" variants={itemVariants}>
            Passionate about problem solving, software development, artificial intelligence, and building modern web experiences. Currently exploring the intersection of CS & AI to build high-performance systems.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Magnetic range={40} speed={0.2}>
              <button className="btn btn-primary" onClick={() => handleScrollTo('#projects')}>
                View Projects
              </button>
            </Magnetic>
            <Magnetic range={40} speed={0.2}>
              <a href="#" className="btn btn-secondary btn-icon-gap" onClick={(e) => e.preventDefault()}>
                <FaDownload className="icon-pulse" /> Download Resume
              </a>
            </Magnetic>
            <Magnetic range={40} speed={0.2}>
              <button className="btn btn-tertiary" onClick={() => handleScrollTo('#contact')}>
                Contact Me
              </button>
            </Magnetic>
          </motion.div>

          {/* Social Links with Magnetic wrappers */}
          <motion.div className="hero-socials" variants={itemVariants}>
            <Magnetic range={30} speed={0.3}>
              <a href="https://github.com/hetjaviya15" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
            </Magnetic>
            <Magnetic range={30} speed={0.3}>
              <a href="https://www.linkedin.com/in/het-javiya-4a2263380/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </Magnetic>
            <Magnetic range={30} speed={0.3}>
              <a href="mailto:hetjaviya08@gmail.com" className="hero-social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Visual Graphic Representation (Profile Card Wrapper) */}
        <motion.div
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.6 }}
        >
          <div className="graphic-outer-glow"></div>
          <div className="graphic-card">
            <div className="graphic-card-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="graphic-card-title">student.json</span>
            </div>
            <div className="graphic-card-body">
              <pre>
                <code>
{`{
  "name": "Het Javiya",
  "education": {
    "degree": "B.Tech in CS & AI",
    "institution": "Newton School",
    "university": "Rishihood University"
  },
  "focus": [
    "AI/ML",
    "Software Eng",
    "Algorithms"
  ],
  "passion": "Write neat & clean code"
}`}
                </code>
              </pre>
            </div>
            <div className="graphic-card-badge">CS + AI</div>
          </div>
          
          {/* Accent spinning circles */}
          <div className="graphic-circle ring-1"></div>
          <div className="graphic-circle ring-2"></div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => handleScrollTo('#about')}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
