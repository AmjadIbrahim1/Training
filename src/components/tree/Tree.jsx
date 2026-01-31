import React from 'react';
import { motion } from 'framer-motion';
import TreeNode from './TreeNode';
import './tree.css';

const Tree = ({ data }) => {
  // Debug: Log the data
  console.log('Tree component received data:', data);

  // Check if data exists and has roots
  if (!data) {
    console.error('Tree: No data provided!');
    return (
      <div className="tree-container">
        <div style={{ textAlign: 'center', padding: '50px', color: '#FF10F0' }}>
          <h2>⚠️ No data provided to Tree component</h2>
          <p>Please check the treeData.js file</p>
        </div>
      </div>
    );
  }

  if (!data.roots || !Array.isArray(data.roots)) {
    console.error('Tree: data.roots is missing or not an array!', data);
    return (
      <div className="tree-container">
        <div style={{ textAlign: 'center', padding: '50px', color: '#FF10F0' }}>
          <h2>⚠️ Invalid data structure</h2>
          <p>Expected: data.roots = [...]</p>
          <p>Got: {JSON.stringify(data)}</p>
        </div>
      </div>
    );
  }

  const roots = data.roots;
  console.log('Tree: Rendering', roots.length, 'roots');

  return (
    <div className="tree-container">
      {/* Background Effects */}
      <div className="tree-background">
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        <div className="bg-gradient-orb orb-3"></div>
      </div>

      {/* Main Tree Layout */}
      <motion.div 
        className="tree-roots-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {roots.map((root, rootIndex) => {
          console.log(`Rendering root ${rootIndex}:`, root.name, 'with', root.children?.length || 0, 'children');
          
          return (
            <motion.div 
              key={root.id || rootIndex}
              className="tree-root"
              initial={{ opacity: 0, x: rootIndex === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.3,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {/* Root Node (Always show if it has a name) */}
              {root.name && (
                <div className="root-node-container">
                  <TreeNode node={root} index={-1} />
                  <motion.div 
                    className="root-connector"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </div>
              )}

              {/* Children Grid */}
              <div className="tree-grid">
                {(root.children || []).map((node, index) => (
                  <TreeNode 
                    key={node.id || index} 
                    node={node} 
                    index={rootIndex * 5 + index}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Decorative Elements */}
      <div className="tree-decoration">
        <motion.div 
          className="deco-line line-1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div 
          className="deco-line line-2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Tree;
