import { motion } from "framer-motion";

const HeroText = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="z-10 text-center md:mt-25 md:text-left rounded-3xl bg-clip-text"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex">
        <motion.h1 
          className="text-5xl font-bold tracking-tight"
          variants={item}
        >
          Hey, I'm
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.h2 
            className="text-7xl font-extrabold text-blue-500 tracking-tighter hover:text-blue-400 transition-colors duration-300"
            variants={item}
          >
            Imane Haffout
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent text-5xl font-semibold mt-4"
            variants={item}
          >
            A Software Developer
          </motion.div>
          <motion.p 
            className="text-3xl font-medium text-neutral-300 mt-2 tracking-wide"
            variants={item}
          >
            And Student at <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">1337-UM6P</span> (42 Network).
          </motion.p>
          <motion.p 
            className="text-2xl text-neutral-300/90 mt-6 max-w-2xl leading-relaxed font-light"
            variants={item}
          >
            From problem-solving to design, I enjoy bringing projects to life through code.
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col mt-30 space-y-4 md:hidden">
        <motion.h1 
          className="text-4xl font-bold tracking-tight text-neutral-200"
          style={{ textShadow: '0 6px 18px rgba(0,0,0,0.9)' }}
          variants={item}
        >
          Hey, I'm
        </motion.h1>
        <div>
          <motion.h2 
            className="text-6xl font-extrabold text-blue-500 tracking-tighter hover:text-blue-400 transition-colors duration-300"
            style={{ textShadow: '0 8px 28px rgba(0,0,0,0.95)' }}
            variants={item}
          >
            Imane Haffout
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent text-4xl font-semibold mt-4"
            variants={item}
          >
            A Software Developer
          </motion.div>
          <motion.p 
            className="text-2xl font-medium text-neutral-300 mt-2 tracking-wide"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
            variants={item}
          >
            And Student at <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">1337-UM6P</span> (42 Network).
          </motion.p>
          <motion.p 
            className="text-xl text-neutral-300/90 mt-6 leading-relaxed font-light"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
            variants={item}
          >
            From problem-solving to design, I enjoy bringing projects to life through code.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroText;
