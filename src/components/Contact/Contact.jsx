import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import Magnetic from '../Magnetic/Magnetic';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Mock network request delay
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto close success message
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-container container">
        
        <div className="section-header">
          <span className="section-tag">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have an internship opportunity, a project collaboration idea, or just want to chat about CS & AI? Drop a message!
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          >
            <h3 className="contact-col-title">Let's build something cool</h3>
            <p className="contact-col-desc">
              I am actively looking for software engineering and AI/ML internships. Feel free to reach out via email or connect with me on social platforms.
            </p>

            <div className="contact-details-list">
              <a href="mailto:hetjaviya07@example.com" className="contact-detail-card">
                <div className="detail-icon"><FaEnvelope /></div>
                <div className="detail-info">
                  <h4>Email</h4>
                  <p>hetjaviya@example.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/het-javiya-4a2263380/" target="_blank" rel="noopener noreferrer" className="contact-detail-card">
                <div className="detail-icon"><FaLinkedin /></div>
                <div className="detail-info">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/hetjaviya</p>
                </div>
              </a>

              <a href="https://github.com/hetjaviya15" target="_blank" rel="noopener noreferrer" className="contact-detail-card">
                <div className="detail-icon"><FaGithub /></div>
                <div className="detail-info">
                  <h4>GitHub</h4>
                  <p>github.com/hetjaviya</p>
                </div>
              </a>

              <div className="contact-detail-card">
                <div className="detail-icon"><FaMapMarkerAlt /></div>
                <div className="detail-info">
                  <h4>Location</h4>
                  <p>Delhi NCR, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="name">Your Name</label>
                  <div className="input-focus-line"></div>
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="email">Your Email</label>
                  <div className="input-focus-line"></div>
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="subject">Subject</label>
                <div className="input-focus-line"></div>
              </div>

              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="input-focus-line"></div>
              </div>

              <div className="form-submit-wrapper">
                <Magnetic range={30} speed={0.3}>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-icon-gap"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <FaPaperPlane />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>

              {/* Form submit notification feedback */}
              <AnimatePresence>
                {status.success && (
                  <motion.div 
                    className="form-success-alert"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <FaCheckCircle /> Message sent successfully! I will get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
