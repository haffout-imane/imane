import { motion, AnimatePresence } from "motion/react";
import { certifications } from "../constants";
import { useState } from "react";
import { Particles } from "../components/Particles";

const CertCard = ({ cert, index, onOpen }) => (
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
      className="relative bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-xl p-6 flex flex-col h-full group-hover:bg-[rgba(15,23,42,0.7)] transition-colors duration-500 border border-white/5"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
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
            <span className="relative z-10 text-lg font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {index + 1}
            </span>
          </div>
          <div>
            <h3 className="text-base font-bold mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400/90 transition-colors duration-300 group-hover:text-gray-300/90">
              {cert.issuer}
            </p>
            <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
          </div>
        </div>

        <motion.button
          onClick={() => onOpen(cert)}
          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur-sm group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show
        </motion.button>
      </div>

      <div className="relative mt-auto">
        <h4 className="text-xs font-medium text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
          Skills & Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((s, i) => (
            <span 
              key={i} 
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  </motion.div>
);

const Modal = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl overflow-hidden bg-[rgba(15,23,42,0.95)] backdrop-blur-md rounded-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
          
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm z-10 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 text-white/70 group-hover:text-white/90 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          <div className="relative p-6">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {cert.title}
            </h3>
            <p className="text-gray-400">{cert.issuer} • {cert.date}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-xl p-4 flex items-center justify-center border border-white/5">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="max-h-80 object-contain rounded-lg" 
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((s, i) => (
                      <span 
                        key={i} 
                        className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verify
                  </motion.a>
                  <motion.button
                    onClick={onClose}
                    className="px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition-colors border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Certifications() {
  // show only first 4 certifications
  const items = certifications.slice(0, 4);
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="relative py-24">
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/6 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Particles className="absolute inset-0" quantity={40} staticity={60} ease={200} color="#4aa8ff" size={0.5} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
			  <motion.div className="mb-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Certifications
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-blue-500 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Four selected certifications with the key skills I learned — click "Show" to view the certificate and details.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((c, idx) => (
            <CertCard key={c.title} index={idx} cert={c} onOpen={setActive} />
          ))}
        </div>
      </div>

      <Modal cert={active} onClose={() => setActive(null)} />
    </section>
  );
}

