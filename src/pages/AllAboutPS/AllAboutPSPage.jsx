import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AllAboutPSPage.css';

const AllAboutPSPage = () => {
  const navigate = useNavigate();

  const openPlaylist = () => {
    window.open('https://www.youtube.com/playlist?list=PL4YRy7IiUYG337lpH1z68YdWO9DlZ62gu', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="all-about-ps-page">
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

      <div className="all-about-container">
        <motion.div
          className="all-about-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="all-about-icon"
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
            📚
          </motion.div>

          <h1 className="all-about-title">
            <span className="text-gradient">كل ما تريد معرفته عن Problem Solving</span>
          </h1>

          <p className="all-about-description">
            سلسلة فيديوهات شاملة تغطي كل جوانب البرمجة التنافسية من الصفر للاحتراف
          </p>

          <motion.button
            className="playlist-button"
            onClick={openPlaylist}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">📺</span>
            <span className="button-text">شاهد البلايليست الكاملة</span>
          </motion.button>

          <div className="topics-showcase">
            <motion.div 
              className="topic-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="topic-icon">🎯</div>
              <h3>الأساسيات</h3>
              <p>البداية الصحيحة في عالم البرمجة التنافسية</p>
            </motion.div>

            <motion.div 
              className="topic-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="topic-icon">🧠</div>
              <h3>استراتيجيات الحل</h3>
              <p>تقنيات وأساليب حل المسائل المعقدة</p>
            </motion.div>

            <motion.div 
              className="topic-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="topic-icon">💡</div>
              <h3>نصائح متقدمة</h3>
              <p>خبرات عملية ونصائح من المحترفين</p>
            </motion.div>

            <motion.div 
              className="topic-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="topic-icon">🏆</div>
              <h3>التحضير للمسابقات</h3>
              <p>كل ما تحتاجه للتفوق في المسابقات</p>
            </motion.div>
          </div>

          <motion.div 
            className="info-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="info-icon">✨</div>
            <p className="info-text">
              محتوى محدث باستمرار مع أمثلة عملية وتطبيقات واقعية
            </p>
          </motion.div>
        </motion.div>

        <div className="all-about-background">
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

export default AllAboutPSPage;