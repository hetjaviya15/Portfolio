import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // Check scrolled class
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy
      const scrollPosition = window.scrollY + 100; // offset for nav height
      
      // If we are close to the top, default to Home
      if (window.scrollY < 50) {
        setActiveSection('#home');
        return;
      }

      // Check if we hit the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection('#contact');
        return;
      }

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // navbar height offset
        behavior: 'smooth'
      });
      setActiveSection(href);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
            Het<span>.</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="nav-active-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons on desktop */}
          <div className="navbar-socials">
            <a href="https://github.com/hetjaviya15" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/het-javiya-4a2263380/" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Mobile Hamburguer Menu */}
          <button
            className={`navbar-burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="burger-line line-1"></span>
            <span className="burger-line line-2"></span>
            <span className="burger-line line-3"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-content">
              <ul className="mobile-nav-links">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className={`mobile-nav-link-item ${activeSection === link.href ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mobile-menu-socials">
                <a href="https://github.com/hetjaviya" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/hetjaviya" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
