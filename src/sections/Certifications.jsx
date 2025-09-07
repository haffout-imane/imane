import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../constants";
import { useState } from "react";
import { Particles } from "../components/Particles";

const CertCard = ({ cert, index, onOpen }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    className="relative bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:shadow-lg hover:shadow-blue-500/10 transition-transform transform hover:-translate-y-2"
  >
    <div className="absolute -left-4 -top-4 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-2xl opacity-80 pointer-events-none" />

    <div className="flex items-start justify-between">
      <div className="pr-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 text-black font-bold">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="text-sm text-gray-400 mt-0.5">{cert.issuer}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">{cert.date}</p>
      </div>

      <div className="flex-shrink-0">
        <button
          onClick={() => onOpen(cert)}
          className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-black font-medium hover:scale-105 transition-transform"
        >
          Show
        </button>
      </div>
    </div>

    <div className="mt-5">
      <h4 className="text-xs text-gray-300 font-semibold mb-2">Skills & Technologies</h4>
      <div className="flex flex-wrap gap-2">
        {cert.skills.map((s, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">{s}</span>
        ))}
      </div>
    </div>
  </motion.article>
);

const Modal = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          className="max-w-4xl w-full bg-[rgba(8,10,14,0.9)] rounded-2xl p-6 border border-white/6 shadow-2xl"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.issuer} • {cert.date}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-lg p-4 flex items-center justify-center border border-white/5">
              <img src={cert.image} alt={cert.title} className="max-h-96 object-contain rounded-md" />
            </div>

            <div>
              <h4 className="text-lg text-white font-semibold mb-3">Skills & Technologies</h4>
              <div className="grid grid-cols-1 gap-2">
                {cert.skills.map((s, i) => (
                  <div key={i} className="text-sm text-gray-300">• {s}</div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href={cert.url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-black font-medium">Verify</a>
                <button onClick={onClose} className="px-4 py-2 rounded-lg border border-white/6 text-gray-300">Close</button>
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

