import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { sheetsData } from '../../data/sheetsData';
import './SheetsPage.css';

const SheetsPage = () => {
  const navigate = useNavigate();

  const openSheet = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="sheets-page">
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

      <div className="sheets-container">
        <motion.div
          className="sheets-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="sheets-icon"
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
            📄
          </motion.div>

          <h1 className="sheets-title">
            <span className="text-gradient">Sheets & Training Contests</span>
          </h1>

          <p className="sheets-description">
            مجموعة شاملة من أفضل الـ Sheets والمسابقات التدريبية على Codeforces
          </p>

          <div className="sheets-grid">
            {sheetsData.map((sheet, index) => (
              <motion.div
                key={sheet.id}
                className="sheet-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => openSheet(sheet.url)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ '--card-color': sheet.color }}
              >
                <div className="sheet-indicator" style={{ background: sheet.color }}></div>
                <div className="sheet-content">
                  <div className="sheet-icon">🟢</div>
                  <h3 className="sheet-name">{sheet.title}</h3>
                  <div className="sheet-link">
                    <span>افتح على Codeforces</span>
                    <span className="link-arrow">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="sheets-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="note-icon">💡</div>
            <p className="note-text">
              اختر الـ Sheet المناسب لمستواك وابدأ التدريب. كل sheet يحتوي على مسائل مرتبة حسب الصعوبة.
            </p>
          </motion.div>
        </motion.div>

        <div className="sheets-background">
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

export default SheetsPage;