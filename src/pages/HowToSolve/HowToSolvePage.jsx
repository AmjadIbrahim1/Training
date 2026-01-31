import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HowToSolvePage.css';

const HowToSolvePage = () => {
  const navigate = useNavigate();

  const openVideo = () => {
    window.open('https://youtu.be/W3m1uBdqKvk', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="how-to-solve-page">
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

      <div className="how-to-solve-container">
        <motion.div
          className="how-to-solve-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="how-to-solve-icon"
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
            🧩
          </motion.div>

          <h1 className="how-to-solve-title">
            <span className="text-gradient">ازاى تحل مسائل Problem Solving</span>
          </h1>

          <p className="how-to-solve-description">
            منهجية علمية ومنظمة لحل المسائل البرمجية بكفاءة وثقة
          </p>

          <motion.button
            className="video-button"
            onClick={openVideo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">▶️</span>
            <span className="button-text">شاهد المنهجية الكاملة</span>
          </motion.button>

          <div className="steps-container">
            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>فهم المشكلة</h3>
                <p>اقرأ المسألة بتركيز وافهم المطلوب بالضبط</p>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>تحليل الأمثلة</h3>
                <p>ادرس الأمثلة المعطاة وافهم العلاقة بين المدخلات والمخرجات</p>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>وضع الخطة</h3>
                <p>حدد الخوارزمية المناسبة وخطط للحل على الورق</p>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>كتابة الكود</h3>
                <p>نفذ الحل بكود نظيف ومنظم</p>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>الاختبار</h3>
                <p>جرب الكود على أمثلة مختلفة وتأكد من صحته</p>
              </div>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>التحسين</h3>
                <p>راجع الحل وحسّن الكفاءة إذا لزم الأمر</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="tips-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="tips-icon">💡</div>
            <div className="tips-content">
              <h3>نصيحة ذهبية</h3>
              <p>لا تستسلم بسرعة! المثابرة والممارسة هما مفتاح النجاح في Problem Solving</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="how-to-solve-background">
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

export default HowToSolvePage;