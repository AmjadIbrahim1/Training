import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { groupsData } from '../../data/groupsData';
import './GroupsPage.css';

const GroupsPage = () => {
  const navigate = useNavigate();

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="groups-page">
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

      <div className="groups-container">
        <motion.div
          className="groups-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="groups-icon"
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
            👥
          </motion.div>

          <h1 className="groups-title">
            <span className="text-gradient">جروبات Camp Problem Solving</span>
          </h1>

          <p className="groups-description">
            انضم لمجتمعنا وتواصل مع زملائك في الكامب
          </p>

          <motion.div 
            className="main-link-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => openLink(groupsData.mainLinks)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="link-icon">🔗</div>
            <div className="link-content">
              <h3>كل اللينكات</h3>
              <p>جميع روابط الكامب في مكان واحد</p>
            </div>
            <div className="link-arrow">→</div>
          </motion.div>

          <div className="groups-grid">
            {groupsData.groups.map((group, index) => (
              <motion.div
                key={group.id}
                className="group-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => openLink(group.url)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ '--group-color': group.color }}
              >
                <div className="group-glow" style={{ background: group.color }}></div>
                <div className="group-icon">{group.icon}</div>
                <h3 className="group-title">{group.title}</h3>
                <div className="group-link">
                  <span>انضم الآن</span>
                  <span className="link-arrow">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="groups-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="note-icon">🤝</div>
            <p className="note-text">
              انضم لجميع الجروبات للبقاء على اطلاع بآخر التحديثات والتواصل مع المجتمع
            </p>
          </motion.div>
        </motion.div>

        <div className="groups-background">
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

export default GroupsPage;