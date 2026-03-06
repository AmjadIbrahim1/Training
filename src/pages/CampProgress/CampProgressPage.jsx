import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CampProgressPage.css";

const CampProgressPage = () => {
  const navigate = useNavigate();

  return (
    <div className="camp-progress-page">
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          className="back-button glass-card"
          onClick={() => navigate("/")}
        >
          <span className="back-arrow">→</span>
          العودة للرئيسية
        </button>
      </motion.header>

      <div className="progress-container">
        <motion.div
          className="progress-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="progress-icon"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🔄
          </motion.div>

          <h1 className="progress-title">
            <span className="text-gradient">وصلنا لفين في الكامب؟</span>
          </h1>

          <motion.div
            className="status-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="status-text">
              طالما انت بتسأل السؤال دا يبقي انت مراكم 👏
              <br />
              اخص عليك بس هقولك ما تقلقش
            </p>
          </motion.div>

          <motion.div
            className="current-status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="section-heading">📊 حالة الكامب الحالية:</h2>
            <div className="status-card">
              <div className="status-badge">
                <span className="badge-label">التوبيك الحالي</span>
                <span className="badge-value">Strings</span>
              </div>
              <p className="status-description">
                الكمية اللي فاتت كلها موجودة في الموقع
                <br />
                <strong>قفلهم كلهم قبل ما نكمل! 💪</strong>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="progress-bar-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              >
                <span className="progress-percentage">50%</span>
              </motion.div>
            </div>
            <div className="progress-labels">
              <span className="label completed">✅ Data Types</span>
              <span className="label completed">✅ Loops</span>
              <span className="label completed">✅ Arrays</span>
              <span className="label current">🔥 Strings</span>
              <span className="label upcoming">⏳ Functions</span>
              <span className="label upcoming">⏳ Complexity</span>
              <span className="label upcoming">⏳ STL</span>
              <span className="label upcoming">⏳ Recursion</span>
            </div>
          </motion.div>

          <motion.div
            className="motivation-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="motivation-icon">🚀</div>
            <p className="motivation-text">
              استمر في التقدم! أنت على الطريق الصحيح
            </p>
          </motion.div>
        </motion.div>

        <div className="progress-background">
          <motion.div
            className="bg-orb orb-1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="bg-orb orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CampProgressPage;
