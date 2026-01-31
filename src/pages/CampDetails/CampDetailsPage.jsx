import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CampDetailsPage.css';

const CampDetailsPage = () => {
  const navigate = useNavigate();

  const openVideo = () => {
    window.open('https://youtu.be/-Mj1tjEn1_A', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="camp-details-page">
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

      <div className="camp-details-container">
        <motion.div
          className="details-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="details-icon"
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
            🎯
          </motion.div>

          <h1 className="details-title">
            <span className="text-gradient">تفاصيل Camp Problem Solving</span>
          </h1>

          <p className="details-description">
            اكتشف كل ما تحتاج معرفته عن معسكر التدريب وكيفية الاستفادة القصوى منه
          </p>

          <motion.button
            className="video-button"
            onClick={openVideo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">▶️</span>
            <span className="button-text">شاهد الفيديو التفصيلي</span>
          </motion.button>

          <div className="features-grid">
            <motion.div 
              className="feature-box"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">📚</div>
              <h3>محتوى شامل</h3>
              <p>دروس متكاملة من البداية للاحتراف</p>
            </motion.div>

            <motion.div 
              className="feature-box"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">👨‍🏫</div>
              <h3>إشراف مباشر</h3>
              <p>دعم مستمر من المدربين</p>
            </motion.div>

            <motion.div 
              className="feature-box"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="feature-icon">🏆</div>
              <h3>تطبيق عملي</h3>
              <p>مسائل وتحديات يومية</p>
            </motion.div>

            <motion.div 
              className="feature-box"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="feature-icon">⚡</div>
              <h3>تقدم سريع</h3>
              <p>نتائج ملموسة في 8 أسابيع</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="details-background">
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

export default CampDetailsPage;