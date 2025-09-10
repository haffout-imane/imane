import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "motion/react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-x-0 top-0 h-full -z-10">
          <div className="absolute inset-x-0 -top-40 w-full aspect-square bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl transform group-hover:translate-y-10 transition-transform duration-700" />
        </div>

        <motion.div
          className="relative bg-[rgba(15,23,42,0.6)] backdrop-blur-sm rounded-xl overflow-hidden flex flex-col group-hover:bg-[rgba(15,23,42,0.7)] transition-colors duration-500 border border-white/5"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(15,23,42,0.3)] to-[rgba(15,23,42,0.8)]" />
          </div>

          <div className="relative p-6">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs px-3 py-1 rounded-full bg-[rgba(15,23,42,0.6)] text-gray-300/90 backdrop-blur-sm border border-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="text-gray-400/90 text-sm mb-4 line-clamp-2 transition-colors duration-300 group-hover:text-gray-300/90">
              {description}
            </p>
            <button
              onClick={() => setIsHidden(true)}
              className="inline-flex items-center gap-2 text-gray-300/90 group-hover:text-blue-400 transition-all duration-300 hover:gap-3"
            >
              Read More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
      </motion.div>
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
