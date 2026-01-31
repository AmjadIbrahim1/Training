import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { quizzesData } from '../../data/quizzesData';
import './QuizzesPage.css';

const QuizzesPage = () => {
  const navigate = useNavigate();

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="quizzes-page">
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

      <div className="quizzes-container">
        <motion.div
          className="quizzes-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="quizzes-icon"
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
            🧠
          </motion.div>

          <h1 className="quizzes-title">
            <span className="text-gradient">Quizzes</span>
          </h1>

          <p className="quizzes-description">
            اختبر معلوماتك وتأكد من فهمك للمواضيع من خلال الكويزات
          </p>

          <div className="quizzes-grid">
            {quizzesData.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                className={`quiz-card ${quiz.comingSoon ? 'coming-soon' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="quiz-header">
                  <div className="quiz-emoji">{quiz.emoji}</div>
                  <h3 className="quiz-title">{quiz.title}</h3>
                </div>

                {quiz.comingSoon ? (
                  <div className="coming-soon-badge">
                    <span className="badge-glow"></span>
                    قريباً
                  </div>
                ) : (
                  <div className="quiz-links">
                    {quiz.videoUrl && (
                      <motion.button
                        className="quiz-link-button video-button"
                        onClick={() => openLink(quiz.videoUrl)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="button-icon">📝</span>
                        <span className="button-text">لينك الكويز</span>
                      </motion.button>
                    )}

                    {quiz.resources && quiz.resources.length > 0 && (
                      <div className="quiz-resources">
                        {quiz.resources.map((resource, idx) => (
                          <motion.button
                            key={idx}
                            className="quiz-resource-button"
                            onClick={() => openLink(resource.url)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="resource-icon">📄</span>
                            <span className="resource-text">{resource.title}</span>
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="quizzes-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="note-icon">💡</div>
            <p className="note-text">
              حل الكويزات بعد دراسة كل توبيك للتأكد من فهمك الكامل للمحتوى
            </p>
          </motion.div>
        </motion.div>

        <div className="quizzes-background">
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

export default QuizzesPage;