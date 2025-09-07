import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

const BallCanvas = ({ icon }) => {
  // Generate random initial values for this instance
  const [floatParams] = useState(() => ({
    yOffset: getRandomFloat(-12, -4),
    xOffset: getRandomFloat(-3, 3),
    duration: getRandomFloat(2.5, 4),
    delay: Math.random(),
  }));

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating animation container */}
      <motion.div
        animate={{
          y: [0, floatParams.yOffset, 0],
          x: [0, floatParams.xOffset, 0],
        }}
        transition={{
          duration: floatParams.duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: floatParams.delay,
        }}
        className="relative"
      >
        {/* Background blur effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-700" />
        </div>

        {/* Card container */}
        <div className="relative w-16 h-16 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm rounded-2xl p-3 flex items-center justify-center border border-white/5 group-hover:bg-[rgba(15,23,42,0.5)] transition-colors duration-300">
          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          {/* Rotating gradient background */}
          <motion.div
            className="absolute inset-1 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"
            animate={{ 
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative w-10 h-10 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={icon}
              alt="technology"
              className="w-8 h-8 object-contain relative z-10"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </motion.div>
    </motion.div>
  );
};

export default BallCanvas;
