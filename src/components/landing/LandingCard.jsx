import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const LandingCard = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (card.route) {
      navigate(card.route);
    }
  };

  const isContestsCard = card.title?.toLowerCase().includes('contest');
  const cardClass = isContestsCard ? 'landing-card contests-card' : 'landing-card';

  return (
    <motion.div
      className="landing-card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={isHovered ? 1.05 : 1}
        transitionSpeed={300}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor={isContestsCard ? "#FF10F0" : "#00F5FF"}
        glarePosition="all"
      >
        <motion.div
          className={cardClass}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          whileHover={{
            boxShadow: isContestsCard 
              ? "0 0 40px rgba(255, 16, 240, 0.6), 0 20px 60px rgba(255, 16, 240, 0.3)"
              : "0 0 35px rgba(0, 245, 255, 0.6), 0 20px 60px rgba(0, 245, 255, 0.3)"
          }}
        >
          {/* Gradient Border */}
          <div className={`card-gradient-border ${isContestsCard ? 'contests-border' : ''}`}></div>
          
          {/* Special Badge for Contests */}
          {isContestsCard && (
            <motion.div 
              className="contests-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <span className="badge-icon">🔥</span>
              <span className="badge-text">HOT</span>
            </motion.div>
          )}

          {/* Icon */}
          {card.icon && (
            <motion.div 
              className="card-icon"
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, -5, 5, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              {typeof card.icon === 'string' ? (
                <span className="icon-emoji">{card.icon}</span>
              ) : (
                card.icon
              )}
            </motion.div>
          )}

          {/* Content */}
          <div className="card-content">
            <motion.h3 
              className="card-title"
              animate={{
                textShadow: isHovered 
                  ? isContestsCard
                    ? "0 0 20px rgba(255, 16, 240, 0.8)"
                    : "0 0 20px rgba(0, 245, 255, 0.8)"
                  : isContestsCard
                    ? "0 0 10px rgba(255, 16, 240, 0.4)"
                    : "0 0 10px rgba(0, 245, 255, 0.4)"
              }}
            >
              {card.title}
            </motion.h3>
            
            {card.description && (
              <p className="card-description">{card.description}</p>
            )}

            {card.stats && (
              <div className="card-stats">
                {card.stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hover Arrow */}
          <motion.div
            className="card-arrow"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.div>

          {/* Animated Corner Accents */}
          <div className="card-corners">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>

          {/* Background Particles */}
          {isHovered && (
            <div className="card-particles">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-particle"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.5, 0],
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default LandingCard;
