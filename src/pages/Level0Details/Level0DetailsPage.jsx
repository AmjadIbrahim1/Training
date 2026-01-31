import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { level0Topics } from '../../data/level0Data';
import './Level0DetailsPage.css';

const Level0DetailsPage = () => {
  const navigate = useNavigate();
  const { topicId } = useParams();
  
  const topic = level0Topics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="level0-details-page">
        <div className="error-container">
          <h1>الموضوع غير موجود</h1>
          <button onClick={() => navigate('/level0')}>العودة للمستوى صفر</button>
        </div>
      </div>
    );
  }

  if (topic.comingSoon) {
    return (
      <div className="level0-details-page">
        <motion.header
          className="page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button 
            className="back-button glass-card"
            onClick={() => navigate('/level0')}
          >
            <span className="back-arrow">→</span>
            العودة للمستوى صفر
          </button>
        </motion.header>

        <div className="coming-soon-container">
          <motion.div
            className="coming-soon-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="coming-soon-icon">{topic.emoji}</div>
            <h1 className="coming-soon-title">
              <span className="text-gradient">{topic.title}</span>
            </h1>
            <div className="coming-soon-badge">
              <span className="badge-glow"></span>
              قريباً
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="level0-details-page">
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button 
          className="back-button glass-card"
          onClick={() => navigate('/level0')}
        >
          <span className="back-arrow">→</span>
          العودة للمستوى صفر
        </button>
      </motion.header>

      <div className="topic-details-container">
        <motion.div
          className="topic-details-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="topic-icon"
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
            {topic.emoji}
          </motion.div>

          <h1 className="topic-title">
            <span className="text-gradient">{topic.title}</span>
          </h1>

          <div className="resources-grid">
            {topic.session && (
              <motion.div
                className="resource-card session-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => openLink(topic.session)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="resource-icon">🎥</div>
                <h3>Session</h3>
                <p>شاهد الشرح الكامل</p>
                <div className="resource-link">
                  <span>افتح الرابط</span>
                  <span className="link-arrow">→</span>
                </div>
              </motion.div>
            )}

            {topic.tips && (
              <motion.div
                className="resource-card tips-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => openLink(topic.tips)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="resource-icon">💡</div>
                <h3>Tips</h3>
                <p>نصائح وحيل مهمة</p>
                <div className="resource-link">
                  <span>افتح الرابط</span>
                  <span className="link-arrow">→</span>
                </div>
              </motion.div>
            )}

            {topic.sheet && (
              <motion.div
                className="resource-card sheet-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => openLink(topic.sheet)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="resource-icon">📄</div>
                <h3>Sheet</h3>
                <p>تمارين ومسائل</p>
                <div className="resource-link">
                  <span>افتح الرابط</span>
                  <span className="link-arrow">→</span>
                </div>
              </motion.div>
            )}

            {topic.notion && (
              <motion.div
                className="resource-card notion-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => openLink(topic.notion)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="resource-icon">🧠</div>
                <h3>Notion</h3>
                <p>ملاحظات منظمة</p>
                <div className="resource-link">
                  <span>افتح الرابط</span>
                  <span className="link-arrow">→</span>
                </div>
              </motion.div>
            )}

            {topic.pdf && (
              <motion.div
                className="resource-card pdf-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => openLink(topic.pdf)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="resource-icon">📑</div>
                <h3>PDF</h3>
                <p>ملف PDF للمراجعة</p>
                <div className="resource-link">
                  <span>افتح الرابط</span>
                  <span className="link-arrow">→</span>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div 
            className="study-tip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="tip-icon">✨</div>
            <p className="tip-text">
              ابدأ بمشاهدة الـ Session، ثم حل الـ Sheet، واستخدم الـ Notion و PDF للمراجعة
            </p>
          </motion.div>
        </motion.div>

        <div className="topic-details-background">
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

export default Level0DetailsPage;