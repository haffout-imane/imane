import { motion } from "motion/react";
import { useRef } from "react";
import web from "/assets/icons/web.png";
import mobile from "/assets/icons/mobile.png";
import backend from "/assets/icons/backend.png";
import creator from "/assets/icons/creator.png";
import { Particles } from "../components/Particles";
import { technologies } from "../constants/technologies";
import BallCanvas from "../components/Ball";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creator",
    icon: creator,
  },
];

const ServiceCard = ({ index, title, icon }) => {
  const descriptions = {
    "Web Developer": "Crafting sleek, user-friendly web apps with JavaScript, React, HTML, and CSS.",
    "Mobile Developer": "Currently diving into Flutter/Dart, crafting simple and useful mobile apps.",
    "Backend Developer": "Strong foundation in C, C++, Express, and PostgreSQL for reliable backends.",
    "Creator": "Turning ideas into real projects with Figma, Illustrator, and code."
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-x-0 top-0 h-full -z-10">
        <div className="absolute inset-x-0 -top-40 w-full aspect-square bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl transform group-hover:translate-y-10 transition-transform duration-700" />
      </div>

      <motion.div
        className="relative bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-xl p-4 flex flex-col items-center gap-2 h-full group-hover:bg-[rgba(15,23,42,0.7)] transition-colors duration-500 border border-white/5"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center justify-center w-12 h-12">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.img
            src={icon}
            alt={title}
            className="relative w-8 h-8 object-contain z-10"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <div className="relative z-10 text-center">
          <motion.h3 
            className="text-base font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          <p className="text-xs leading-relaxed text-gray-400/90 transition-colors duration-300 group-hover:text-gray-300/90">
            {descriptions[title]}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col" id="about">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={200}
          color={"#4aa8ff"}
          refresh
          staticity={50}
          size={0.5}
        />
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10 container mx-auto px-4 py-8 flex flex-col">
        {/* Header and Description */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div className="mb-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-blue-500 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            21-year-old developer and student at <span className="text-white font-medium">1337-UM6P</span>,
            transforming ideas into digital experiences with creativity and technical expertise.
            I specialize in building exceptional digital experiences that combine innovative design with robust functionality.
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-30"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              index={index} 
              {...service} 
            />
          ))}
        </motion.div>

        {/* Technologies */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technologies I Work With
          </motion.h3>

          {/* Technologies slider */}
          <div className="relative mx-auto">
            {/* Scrollable container with responsive padding for nav buttons */}
            <div className="relative overflow-hidden px-4 sm:px-16">
              {/* Navigation Buttons (hidden on small screens) */}
              <motion.button
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.6)] backdrop-blur-sm border border-white/5 items-center justify-center group hover:bg-[rgba(15,23,42,0.8)] transition-colors duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // scroll by one item (calculated in scrollByItem helper)
                  const el = document.getElementById("tech-container");
                  if (el && el._scrollByItem) el._scrollByItem(-1);
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white/70 group-hover:text-white/90 transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.6)] backdrop-blur-sm border border-white/5 items-center justify-center group hover:bg-[rgba(15,23,42,0.8)] transition-colors duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById("tech-container");
                  if (el && el._scrollByItem) el._scrollByItem(1);
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white/70 group-hover:text-white/90 transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Scrollable container */}
              <motion.div
                id="tech-container"
                className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide py-2 px-2 sm:px-0 scroll-smooth"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                // Attach a helper to the element so the buttons can call it
                ref={(node) => {
                  if (!node) return;
                  // create a scroll helper that scrolls exactly one item
                  node._scrollByItem = (dir = 1) => {
                    try {
                      const container = node;
                      const first = container.querySelector('[data-tech-item]');
                      if (!first) return;
                      const itemWidth = first.getBoundingClientRect().width;
                      // read computed gap (may be like '32px')
                      const cs = getComputedStyle(container);
                      const gap = parseFloat(cs.getPropertyValue('gap')) || parseFloat(cs.getPropertyValue('column-gap')) || 0;
                      const step = Math.round(itemWidth + gap);
                      const max = container.scrollWidth - container.clientWidth;
                      let target = container.scrollLeft + dir * step;
                      if (target < 0) target = 0;
                      if (target > max) target = max;
                      container.scrollTo({ left: target, behavior: 'smooth' });
                    } catch (e) {
                      // fallback: simple pixel scroll
                      node.scrollLeft += dir * 200;
                    }
                  };
                }}
              >
                {technologies.map((technology) => (
                  <motion.div 
                    key={technology.name} 
                    data-tech-item
                    className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BallCanvas icon={technology.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

