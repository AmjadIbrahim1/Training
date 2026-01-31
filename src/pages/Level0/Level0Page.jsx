import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { level0Topics } from '../../data/level0Data';
import './Level0Page.css';

const Level0Page = () => {
  const navigate = useNavigate();

  return (
    <div className="level0-page">
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

      <div className="level0-main-container">
        <motion.div
          className="level0-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="level0-header-icon"
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

          <h1 className="level0-main-title">
            <span className="text-gradient">المستوى صفر</span>
          </h1>

          <p className="level0-main-description">
            ابدأ رحلتك في البرمجة التنافسية من الصفر للاحتراف
          </p>

          <div className="topics-grid">
            {level0Topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                className={`topic-card ${topic.comingSoon ? 'coming-soon' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => !topic.comingSoon && navigate(`/level0/${topic.id}`)}
                whileHover={!topic.comingSoon ? { scale: 1.03 } : {}}
                whileTap={!topic.comingSoon ? { scale: 0.98 } : {}}
              >
                <div className="topic-card-icon">{topic.emoji}</div>
                <h3 className="topic-card-title">{topic.title}</h3>
                
                {topic.comingSoon ? (
                  <div className="topic-coming-soon">
                    <span className="coming-soon-text">قريباً ⏳</span>
                  </div>
                ) : (
                  <div className="topic-resources-count">
                    <span className="resources-badge">
                      {[topic.session, topic.tips, topic.sheet, topic.notion, topic.pdf].filter(Boolean).length} مصادر
                    </span>
                    <span className="view-arrow">→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="level0-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="note-icon">💡</div>
            <p className="note-text">
              ابدأ بالترتيب من الأول للأخير، وتأكد من إتمام كل موضوع قبل الانتقال للتالي
            </p>
          </motion.div>
        </motion.div>

        <div className="level0-main-background">
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

export default Level0Page;