import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Magnetic from '../Magnetic/Magnetic';
import './Footer.css';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleLinkClick(e, '#home')}>
              Het<span>.</span>
            </a>
            <p className="footer-tagline">CS & AI Student | Aspiring Software Engineer</p>
          </div>

          <ul className="footer-nav-links">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="footer-nav-link-item"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-socials">
            <Magnetic range={25} speed={0.3}>
              <a href="https://github.com/hetjaviya15" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
            </Magnetic>
            <Magnetic range={25} speed={0.3}>
              <a href="https://www.linkedin.com/in/het-javiya-4a2263380/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </Magnetic>
            <Magnetic range={25} speed={0.3}>
              <a href="mailto:hetjaviya08@example.com" className="footer-social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} Het Javiya. All rights reserved.
          </p>
          <p className="footer-made-by">
            Designed & Built with React
          </p>
        </div>

      </div>
    </footer>
  );
}
