import React from 'react';
import { motion } from 'framer-motion';
import LandingCard from './LandingCard';
import './landing.css';

const LandingGrid = ({ cards }) => {
  return (
    <motion.div
      className="landing-grid-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="landing-bg-effects">
        <div className="bg-grid"></div>
        <div className="bg-scanline"></div>
      </div>

      {/* Cards Grid */}
      <div className="landing-grid">
        {cards.map((card, index) => (
          <LandingCard 
            key={card.id || index} 
            card={card} 
            index={index}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="landing-decorations">
        <motion.div
          className="deco-circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="deco-circle circle-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );
};

export default LandingGrid;
