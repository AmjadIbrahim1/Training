import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ecpcData } from '../../data/ecpcData';
import './ECPCPage.css';

const ECPCPage = () => {
  const navigate = useNavigate();

  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="ecpc-page">
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

      <div className="ecpc-container">
        <motion.div
          className="ecpc-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="ecpc-icon"
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
            🏅
          </motion.div>

          <h1 className="ecpc-title">
            <span className="text-gradient">{ecpcData.title}</span>
          </h1>

          <p className="ecpc-subtitle">{ecpcData.subtitle}</p>

          <p className="ecpc-description">{ecpcData.description}</p>

          <div className="videos-section">
            <h2 className="videos-title">🎥 سلسلة فيديوهات المسابقة:</h2>
            
            <div className="videos-grid">
              {ecpcData.videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="video-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => openVideo(video.url)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="video-number">{video.number}</div>
                  <div className="video-content">
                    <h3 className="video-title">{video.title}</h3>
                    <div className="video-play">
                      <span className="play-icon">▶️</span>
                      <span className="play-text">شاهد الآن</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="competition-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="info-icon">🎯</div>
            <div className="info-content">
              <h3>لماذا ECPC مهمة؟</h3>
              <p>
                مسابقة ECPC هي البوابة الرسمية للمشاركة في المسابقات الدولية والإقليمية.
                <br />
                التحضير الجيد لها يفتح لك فرص كثيرة في عالم البرمجة التنافسية.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="ecpc-background">
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

export default ECPCPage;