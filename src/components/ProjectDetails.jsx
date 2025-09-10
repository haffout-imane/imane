import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative w-full max-w-2xl overflow-hidden bg-[rgba(15,23,42,0.95)] backdrop-blur-md rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
        
        {/* Close Button */}
        <motion.button
          onClick={closeModal}
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

        {/* Project Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full rounded-t-2xl" 
        />

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {title}
          </h3>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-300/90">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-gray-400/90">
                {subDesc}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
