import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CodeforcesPage.css';

const CodeforcesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="codeforces-page">
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
          <div className="icon-large">💻</div>
          <h1 className="title-gradient">كودفورسيس</h1>
          <p className="description">
            تدرب على البرمجة التنافسية وحل أكثر من 500 مسألة
          </p>
          
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-number">500+</span>
              <span className="stat-label">مسألة</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100</span>
              <span className="stat-label">محلولة</span>
            </div>
          </div>

          <div className="coming-soon-badge">
            <span className="badge-glow"></span>
            قريباً
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeforcesPage;