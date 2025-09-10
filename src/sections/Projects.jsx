import { useState, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, AnimatePresence } from "motion/react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(myProjects);
  
  const categories = ['All', ...new Set(myProjects.flatMap(project => 
    project.tags.map(tag => tag.name)
  ))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(myProjects);
    } else {
      setFilteredProjects(myProjects.filter(project =>
        project.tags.some(tag => tag.name === activeFilter)
      ));
    }
  }, [activeFilter]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
		<motion.div className="mb-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-blue-500 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>


          <motion.p
            className="text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my latest work and creative endeavors
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
