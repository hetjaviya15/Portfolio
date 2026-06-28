import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaTrophy, FaGraduationCap, FaNetworkWired, FaCheckCircle } from 'react-icons/fa';
import './Journey.css';

// Reusable Animated Counter
function AnimatedCounter({ value, duration = 1.5, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const statsList = [
  { label: 'LeetCode Solved', value: 50, suffix: '+' },
  { label: 'Codeforces Rating', value: 370, suffix: '+' },
  { label: 'Projects Built', value: 5, suffix: '+' },
  { label: 'Technologies Learned', value: 10, suffix: '+' }
];

const achievementCards = [
  {
    title: 'DSA Practice',
    description: 'Maintained 15+ days LeetCode active streak. Proficient in searching/sorting, trees, dynamic programming, and recursion.',
    icon: <FaLaptopCode />,
    metric: '50+ Solved'
  },
  {
    title: 'Coding Contests',
    description: 'Regular participant in LeetCode Weekly and Codeforces contests. Practicing speed-solving and modular logic constraints.',
    icon: <FaTrophy />,
    metric: 'Newbie Rank Practice'
  },
  {
    title: 'Academic Deliverables',
    description: 'Collaborated on Newton School software labs. Built real-world products with complete API integrations and team sprints.',
    icon: <FaGraduationCap />,
    metric: '100% Labs Completed'
  },
  {
    title: 'Technical Learning',
    description: 'Actively exploring deep learning models, vector embeddings, and large language model prompting strategies.',
    icon: <FaNetworkWired />,
    metric: 'AI-Focus Core'
  }
];

const growthMilestones = [
  {
    title: 'The Spark',
    detail: 'Learned Python syntax, basic control flows, and compiled first programs in terminal.',
    status: 'Completed'
  },
  {
    title: 'DSA Deep Dive',
    detail: 'Unlocked 50+ LeetCode problems. Mastered arrays, hash maps, complexity, and basic sorting.',
    status: 'Completed'
  },
  {
    title: 'Interactive Web',
    detail: 'Transitioned to JavaScript and React. Built responsive templates and API frontends.',
    status: 'Completed'
  },
  {
    title: 'Fusing CS + AI',
    detail: 'Deploying neural networks, fine-tuning APIs, and building templates at Newton School.',
    status: 'Active Goal'
  }
];

export default function Journey() {
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
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="journey" className="journey section">
      <div className="journey-container container">
        
        <div className="section-header">
          <span className="section-tag">Progress</span>
          <h2 className="section-title">Coding Journey</h2>
          <p className="section-subtitle">
            A numerical review of my coding habits, competitive practices, and milestones.
          </p>
        </div>

        {/* 1. Animated Stats Counter Row */}
        <div className="journey-stats-row">
          {statsList.map((stat, idx) => (
            <div key={idx} className="journey-stat-card">
              <div className="stat-card-number">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="stat-card-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 2. Achievements and Growth split */}
        <div className="journey-split-grid">
          
          {/* Left Column: Achievement Cards */}
          <div className="journey-achievements-col">
            <h3 className="sub-section-title">Core Achievements</h3>
            <motion.div 
              className="achievement-cards-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {achievementCards.map((card, idx) => (
                <motion.div 
                  key={idx} 
                  className="achievement-card"
                  variants={cardVariants}
                >
                  <div className="achievement-icon-box">
                    {card.icon}
                  </div>
                  <div className="achievement-body">
                    <div className="achievement-header">
                      <h4>{card.title}</h4>
                      <span className="achievement-metric">{card.metric}</span>
                    </div>
                    <p>{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Coding growth timeline */}
          <div className="journey-timeline-col">
            <h3 className="sub-section-title">Growth Milestones</h3>
            <div className="growth-timeline">
              {growthMilestones.map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  className="growth-milestone-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.15, type: 'spring', stiffness: 80 }}
                >
                  <div className="milestone-bullet">
                    <FaCheckCircle className={milestone.status === 'Completed' ? 'completed' : 'active'} />
                  </div>
                  <div className="milestone-content">
                    <div className="milestone-header">
                      <h4>{milestone.title}</h4>
                      <span className={`milestone-status-badge ${milestone.status === 'Completed' ? 'completed' : 'active'}`}>
                        {milestone.status}
                      </span>
                    </div>
                    <p>{milestone.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
