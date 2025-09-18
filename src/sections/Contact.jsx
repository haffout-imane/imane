import { motion } from "motion/react";
import { useState } from "react";
import { Particles } from "../components/Particles";
import CopyEmailButton from "../components/CopyEmailButton";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/haffout-imane",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    description: "Check out my projects"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/imane-haffout-a4a469310/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    description: "Let's connect professionally"
  },
  {
    name: "Email",
    href: "mailto:haffout.imane@example.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Send me a message"
  }
];

const ContactCard = ({ link, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.name !== "Email" ? "_blank" : "_self"}
      rel={link.name !== "Email" ? "noopener noreferrer" : ""}
      className="group relative block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-blue-500/10 to-transparent rounded-xl blur-xl"
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        className="relative bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-blue-500/30 transition-all duration-300"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Icon container */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur"
            animate={{ 
              scale: isHovered ? [1, 1.3, 1] : 1,
              rotate: isHovered ? [0, 180, 0] : 0
            }}
            transition={{ 
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="relative z-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {link.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center">
          <motion.h3 
            className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {link.name}
          </motion.h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {link.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={60}
          ease={200}
          color={"#4aa8ff"}
          refresh
          staticity={50}
          size={0.4}
        />
      </div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-2xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-2xl"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
		<motion.div className="mb-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-blue-500 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I'm always open to discussing new opportunities, exciting projects, or just having a friendly chat about technology and development.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <ContactCard key={link.name} link={link} index={index} />
          ))}
        </motion.div>

        {/* Email Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Or copy my email address
          </motion.h3>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <CopyEmailButton />
          </motion.div>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            animate={{ 
              scaleX: [0.5, 1, 0.5],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
