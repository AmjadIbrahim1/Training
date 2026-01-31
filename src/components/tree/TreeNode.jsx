import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './tree.css';

const TreeNode = ({ node, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (node.linkedin) {
      window.open(node.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="tree-node-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={isHovered ? 1.08 : 1}
        transitionSpeed={400}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#00F5FF"
        glarePosition="all"
      >
        <motion.div
          className={`tree-node ${isHovered ? 'hovered' : ''} ${node.linkedin ? 'clickable' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          whileHover={{ 
            boxShadow: "0 0 30px rgba(0, 245, 255, 0.8), 0 0 60px rgba(124, 124, 255, 0.4)",
            cursor: node.linkedin ? 'pointer' : 'default'
          }}
        >
          {/* Animated Border */}
          <div className="node-border-glow"></div>
          
          {/* LinkedIn Badge */}
          {node.linkedin && (
            <motion.div 
              className="linkedin-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.div>
          )}
          
          {/* Avatar Container */}
          <div className="node-avatar-container">
            <motion.div 
              className="node-avatar"
              animate={{
                boxShadow: isHovered 
                  ? "0 0 30px rgba(0, 245, 255, 0.8)" 
                  : "0 0 20px rgba(0, 245, 255, 0.4)"
              }}
            >
              <img 
                src={node.avatar || '/placeholder-avatar.png'} 
                alt={node.name}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(node.name)}&background=00F5FF&color=0B0F1A&size=240&bold=true`;
                }}
              />
              <div className="avatar-ring"></div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="node-content">
            <motion.h3 
              className="node-name"
              animate={{
                textShadow: isHovered 
                  ? "0 0 15px rgba(0, 245, 255, 0.8)" 
                  : "0 0 8px rgba(0, 245, 255, 0.4)"
              }}
            >
              {node.name}
            </motion.h3>
            
            {node.title && (
              <p className="node-title">{node.title}</p>
            )}
            
            {node.level && (
              <div className="node-level">
                <span className="level-badge">المستوى {node.level}</span>
              </div>
            )}
          </div>

          {/* Particle Effects */}
          {isHovered && (
            <div className="node-particles">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{ 
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: Math.cos(i * 60 * Math.PI / 180) * 50,
                    y: Math.sin(i * 60 * Math.PI / 180) * 50,
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default TreeNode;