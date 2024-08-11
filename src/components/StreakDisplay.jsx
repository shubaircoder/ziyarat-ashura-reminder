import React from 'react';
import { motion } from 'framer-motion';

function StreakDisplay({ streak, completeDay }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Ziyarat Ashura Streak</h1>
      <p className="text-lg mb-4 ">Current Streak: {streak} days</p>
      <button 
        onClick={completeDay} 
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Mark as Completed
      </button>
    </motion.div>
  );
}

export default StreakDisplay;
