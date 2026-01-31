import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { quizzesData } from '../../data/quizzesData';
import './ContestsPage.css';

const ContestsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="contests-page">
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button 
          className="back-button glass-card"
          onClick={() => navigate('/')}
        >
          <span className="back-arrow">→</span>
          العودة للرئيسية
        </button>
      </motion.header>

      <div className="contests-main-container">
        <motion.div
          className="contests-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="contests-header-icon"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🏆
          </motion.div>

          <h1 className="contests-main-title">
            <span className="text-gradient contests-title">Contests</span>
          </h1>

          <p className="contests-main-description">
            المسابقات التدريبية - نفس نظام الكويزات
          </p>

          <div className="contests-grid">
            {quizzesData.map((contest, index) => (
              <motion.div
                key={contest.id}
                className={`contest-card ${contest.comingSoon ? 'coming-soon' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="contest-header">
                  <div className="contest-emoji">{contest.emoji}</div>
                  <h3 className="contest-title">{contest.title.replace('Quiz', 'Contest')}</h3>
                </div>

                <div className="coming-soon-badge-large">
                  <span className="badge-glow"></span>
                  قريباً
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="contests-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="note-icon">🔔</div>
            <p className="note-text">
              المسابقات التدريبية ستكون متاحة قريباً. تابع التحديثات على الجروبات!
            </p>
          </motion.div>
        </motion.div>

        <div className="contests-main-background">
          <motion.div
            className="bg-orb orb-1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="bg-orb orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContestsPage;