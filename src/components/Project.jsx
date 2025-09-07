import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "framer-motion";

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
        className="group relative overflow-hidden rounded-xl bg-neutral-900/50 backdrop-blur-sm"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <button
            onClick={() => setIsHidden(true)}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read More
            <img src="assets/arrow-right.svg" className="w-4 h-4" />
          </button>
        </div>
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
