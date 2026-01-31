import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CodeforcesGuidePage.css';

const CodeforcesGuidePage = () => {
  const navigate = useNavigate();

  const openVideo = () => {
    window.open('https://youtu.be/XFNz0YSP4jQ?si=GUDbbHfm4ErwMra-', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="cf-guide-page">
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

      <div className="cf-guide-container">
        <motion.div
          className="cf-guide-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="cf-guide-icon"
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
            💻
          </motion.div>

          <h1 className="cf-guide-title">
            <span className="text-gradient">شرح موقع Codeforces</span>
          </h1>

          <p className="cf-guide-description">
            دليلك الشامل لاستخدام موقع Codeforces من الألف للياء
          </p>

          <motion.button
            className="video-button"
            onClick={openVideo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">▶️</span>
            <span className="button-text">شاهد الشرح الكامل</span>
          </motion.button>

          <div className="features-grid">
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">📝</div>
              <h3>إنشاء الحساب</h3>
              <p>خطوات بسيطة لإنشاء حسابك الأول</p>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">🏋️</div>
              <h3>التدريب</h3>
              <p>كيفية البحث عن المسائل والتدريب عليها</p>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="feature-icon">🏆</div>
              <h3>المسابقات</h3>
              <p>الاشتراك في المسابقات وتتبع النتائج</p>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="feature-icon">📊</div>
              <h3>الإحصائيات</h3>
              <p>فهم وتحليل إحصائياتك ومستواك</p>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="feature-icon">👥</div>
              <h3>المجموعات</h3>
              <p>الانضمام للمجموعات والتدريبات الجماعية</p>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="feature-icon">⚙️</div>
              <h3>الإعدادات</h3>
              <p>تخصيص حسابك وإعدادات الموقع</p>
            </motion.div>
          </div>

          <motion.div 
            className="pro-tip"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="tip-icon">💡</div>
            <p className="tip-text">
              شاهد الفيديو كاملاً للحصول على جولة تفصيلية في جميع أقسام الموقع
            </p>
          </motion.div>
        </motion.div>

        <div className="cf-guide-background">
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

export default CodeforcesGuidePage;