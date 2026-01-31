import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CampPage.css';

const CampPage = () => {
  const navigate = useNavigate();

  return (
    <div className="camp-page">
      <motion.div
        className="page-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <button 
          className="back-button glass-card"
          onClick={() => navigate('/')}
        >
          <span className="back-arrow">→</span>
          رجوع
        </button>

        <div className="content-center">
          <div className="icon-large">⛺</div>
          <h1 className="title-gradient">معسكر التدريب</h1>
          <p className="description">
            برنامج مكثف لمدة 8 أسابيع لتطوير المهارات السريع
          </p>
          <div className="coming-soon-badge">
            <span className="badge-glow"></span>
            قريباً
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CampPage;