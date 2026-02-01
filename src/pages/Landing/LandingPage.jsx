import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LandingGrid from '../../components/landing/LandingGrid';
import Tree from '../../components/tree/Tree';
import { landingCards } from '../../data/landingCards';
import { treeData } from '../../data/treeData';
import './landingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ fontSize: '4.5rem' }}
          >
            <span className="title-gradient">أهلاً بكم في تدريب القاضي</span>
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           منصة متخصصة في البرمجة التنافسية وتطوير مهارات حل المشكلات
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="stat-box">
              <span className="stat-number">1500+</span>
              <span className="stat-label">طالب</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">نجاح</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="hero-background">
          <div className="hero-circle circle-1"></div>
          <div className="hero-circle circle-2"></div>
          <div className="hero-circle circle-3"></div>
        </div>
      </motion.section>

      {/* Quick Links Section */}
      <motion.section 
        className="quick-links-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="quick-links-container">
          <h2 className="section-title">
            <span className="title-line"></span>
            روابط سريعة
            <span className="title-line"></span>
          </h2>

          <div className="quick-links-grid">
            <motion.button
              className="quick-link-btn"
              onClick={() => navigate('/camp-details')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">🎯</span>
              <span className="link-text">تفاصيل الكامب</span>
            </motion.button>

            <motion.button
              className="quick-link-btn"
              onClick={() => navigate('/camp-progress')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">🔄</span>
              <span className="link-text">وصلنا فين</span>
            </motion.button>

            <motion.button
              className="quick-link-btn"
              onClick={() => navigate('/all-about-ps')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">📚</span>
              <span className="link-text">كل شيء عن PS</span>
            </motion.button>

            <motion.button
              className="quick-link-btn"
              onClick={() => navigate('/codeforces-guide')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">💻</span>
              <span className="link-text">شرح Codeforces</span>
            </motion.button>

            <motion.button
              className="quick-link-btn"
              onClick={() => navigate('/how-to-solve')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">🧩</span>
              <span className="link-text">إزاي تحل</span>
            </motion.button>

            <motion.button
              className="quick-link-btn"
              onClick={() => navigate('/newcomers-guide')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">🚀</span>
              <span className="link-text">لو لسه داخل</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Hadith Section */}
      <motion.section 
        className="hadith-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="hadith-container">
          <motion.div 
            className="hadith-decoration hadith-left"
            animate={{ 
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="decoration-ornament">✦</div>
          </motion.div>

          <motion.div 
            className="hadith-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="hadith-icon">🤲</div>
            <h3 className="hadith-text">
              خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ
            </h3>
            <p className="hadith-translation">
              صدق رسول الله صلى الله عليه وسلم
            </p>
          </motion.div>

          <motion.div 
            className="hadith-decoration hadith-right"
            animate={{ 
              rotate: [0, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="decoration-ornament">✦</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Tree Section */}
      <section className="team-tree-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            هيكل الفريق
            <span className="title-line"></span>
          </h2>
          <p className="section-subtitle">تعرف على العقول وراء تدريب القاضي</p>
        </motion.div>

        <Tree data={treeData} />
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            اختر مسارك
            <span className="title-line"></span>
          </h2>
        </motion.div>

        <LandingGrid cards={landingCards} />
      </section>

      {/* Footer Developer Info */}
      <motion.footer 
        className="footer-info"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="footer-content">
          <motion.h3 
            className="footer-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            تحت تطوير وإنشاء
          </motion.h3>
          
          <motion.div 
            className="developer-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <div className="info-row">
              <span className="info-icon">👨‍💻</span>
              <span className="info-label">المطور:</span>
              <span className="info-value">Eng. Amjad Ibrahim</span>
            </div>
            
            <div className="info-row">
              <span className="info-icon">📱</span>
              <span className="info-label">الهاتف:</span>
              <span className="info-value">
                <a href="tel:01030615045">01030615045</a>
              </span>
            </div>
            
            <div className="info-row">
              <span className="info-icon">✉️</span>
              <span className="info-label">البريد الإلكتروني:</span>
              <span className="info-value">
                <a href="mailto:amjadibrahim218@gmail.com">amjadibrahim218@gmail.com</a>
              </span>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;