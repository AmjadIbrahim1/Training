import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Athkar.css';

const athkarList = [
  'سبحان الله وبحمده، سبحان الله العظيم',
  'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير',
  'اللهم صل وسلم على نبينا محمد',
  'لا إله إلا أنت سبحانك إني كنت من الظالمين',
  'أستغفر الله وأتوب إليه',
  'سبحان الله والحمد لله ولا إله إلا الله والله أكبر',
  'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم',
  'اللهم إني أعوذ بك من الهم والحزن',
  'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
  'اللهم إني أسألك العفو والعافية في الدنيا والآخرة',
  'لا حول ولا قوة إلا بالله',
  'اللهم اغفر لي ذنبي كله، دقه وجله، وأوله وآخره، وعلانيته وسره',
  'اللهم صل على محمد وعلى آل محمد',
  'اللهم إنك عفو تحب العفو فاعف عني',
  'رب اغفر لي وتب علي إنك أنت التواب الرحيم',
  'اللهم أعني على ذكرك وشكرك وحسن عبادتك',
  'سبحان الله عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته',
  'اللهم إني أسألك الهدى والتقى والعفاف والغنى',
  'اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب',
  'اللهم اجعلني من التوابين واجعلني من المتطهرين'
];

const Athkar = () => {
  const [currentThikr, setCurrentThikr] = useState('');
  const [showThikr, setShowThikr] = useState(false);

  useEffect(() => {
    const showRandomThikr = () => {
      const randomIndex = Math.floor(Math.random() * athkarList.length);
      setCurrentThikr(athkarList[randomIndex]);
      setShowThikr(true);

      // إخفاء الذكر بعد 10 ثواني
      setTimeout(() => {
        setShowThikr(false);
      }, 10000);
    };

    // عرض أول ذكر فوراً عند تحميل الصفحة
    showRandomThikr();

    // عرض ذكر كل دقيقتين (120000 ميلي ثانية)
    const interval = setInterval(showRandomThikr, 120000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {showThikr && (
        <motion.div
          className="athkar-notification"
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
          }}
        >
          <div className="athkar-container">
            {/* أيقونة */}
            <motion.div 
              className="athkar-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>

            {/* نص الذكر */}
            <div className="athkar-content">
              <p className="athkar-text">{currentThikr}</p>
            </div>

            {/* زر الإغلاق */}
            <button 
              className="athkar-close"
              onClick={() => setShowThikr(false)}
              aria-label="إغلاق"
            >
              ×
            </button>

            {/* شريط التقدم */}
            <motion.div 
              className="athkar-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Athkar;