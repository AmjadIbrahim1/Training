import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './NewcomersGuidePage.css';

const NewcomersGuidePage = () => {
  const navigate = useNavigate();

  const openBot = () => {
    window.open('https://t.me/PSCampBot', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="newcomers-page">
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

      <div className="newcomers-container">
        <motion.div
          className="newcomers-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="newcomers-icon"
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
            🚀
          </motion.div>

          <h1 className="newcomers-title">
            <span className="text-gradient">لو لسه داخل – إبدأ من هنا!</span>
          </h1>

          <motion.div 
            className="welcome-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="welcome-emoji">👀</div>
            <p className="welcome-text">بص</p>
          </motion.div>

          <motion.div 
            className="intro-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="intro-text">
              لو إنت جديد معانا، فإنا نزلنا لحد دلوقتي <strong>8 فيديوهات</strong> أساسية مهمين جداً.
            </p>
          </motion.div>

          <motion.div 
            className="videos-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="section-title">📌 فيديو تعريفي بالكامب:</h2>
            <p className="section-description">
              لو مش عارف نظام الكامب ماشي إزاي أو هتمشي على إيه، لازم تبدأ بفيديو تفاصيل الكامب.
            </p>
          </motion.div>

          <motion.div 
            className="content-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="section-title">📚 المحتوى اللي نزل لحد دلوقتي:</h2>
            <div className="items-grid">
              <div className="content-item">1️⃣ Session Data Types & Conditions</div>
              <div className="content-item">2️⃣ Tips & Tricks</div>
              <div className="content-item">3️⃣ فيديو تهيئة بيئة العمل</div>
              <div className="content-item">4️⃣ فيديو إزاي تحل على Codeforces</div>
              <div className="content-item">5️⃣ شرح موقع Codeforces من A to Z</div>
              <div className="content-item">6️⃣ Session Loops</div>
              <div className="content-item">7️⃣ Session Array</div>
            </div>
          </motion.div>

          <motion.div 
            className="question-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="section-title">❓ طب تعمل إيه لو فاتك كل ده؟</h2>
            <div className="answer-box">
              <div className="answer-emoji">✋</div>
              <p className="answer-text">ولا يهمك</p>
            </div>
            <p className="guide-text">امشي بالترتيب وبالتدريج.</p>
          </motion.div>

          <motion.div 
            className="study-method"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="section-title">🧠 طريقة المذاكرة الصح:</h2>
            <div className="method-steps">
              <div className="method-step">
                <span className="step-bullet">•</span>
                <p>اسمع كل سيشن كويس</p>
              </div>
              <div className="method-step">
                <span className="step-bullet">•</span>
                <p>طبّق بإيدك على اللي بتسمعه</p>
              </div>
              <div className="method-step">
                <span className="step-bullet">•</span>
                <p>اكتب ملاحظاتك وأفكارك من كل سيشن</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="promise-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="promise-title">🔥 وعد مني وخد الكلام دا وما تراجعش وراه:</h2>
            <p className="promise-text">
              حتى لو سمعت التوبيكس دي قبل كده، لما تسمعها من اللينكات دي هتطلع بمعلومات جديدة،
              <br />
              لأن الأمثلة داخلة في العمق وبتفهمك بجد.
            </p>
            
            <div className="verification-box">
              <div className="verification-icon">🤝</div>
              <p className="verification-text">
                مش متأكد من كلامي؟
                <br />
                اسأل زملائك في الكامب على جروب الشات وشوف رأيهم.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="resources-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="section-title">🗂️ المصادر فين؟</h2>
            <p className="resources-description">
              بعد ما تنزل تحت في البوت:
            </p>
            <div className="resources-steps">
              <div className="resource-step">• Level 0</div>
              <div className="resource-step">• التوبيك اللي محتاجه</div>
              <div className="resource-step">• هتلاقي السيشن + الشيت + Notion + PDF</div>
            </div>
            <p className="resources-note">✅ كل المصادر متجمعة في البوت.</p>
          </motion.div>

          <motion.button
            className="bot-button"
            onClick={openBot}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">🤖</span>
            <span className="button-text">افتح البوت الآن</span>
          </motion.button>

          <motion.div 
            className="final-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="note-icon">💪</div>
            <p className="note-text">
              امشي بالترتيب، حل كتير، والنتيجة هتشوفها مع الاستمرارية.
            </p>
          </motion.div>
        </motion.div>

        <div className="newcomers-background">
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

export default NewcomersGuidePage;