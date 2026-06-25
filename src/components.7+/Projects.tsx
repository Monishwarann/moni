import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const filterTags = ['All', 'IT', 'Core'] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter as any));

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Stylized Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />
      <div className="film-grain opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Cinematic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Selected Works
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-sora tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Showcasing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-cyan-400">Digital Mastery</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            A curated intersection of software engineering, mechanical design, and human-centric interfaces.
          </p>
        </motion.div>

        {/* High-Tech Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20 p-2 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-md w-fit mx-auto shadow-inner"
          role="tablist"
        >
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-8 py-3 rounded-[18px] text-xs font-bold tracking-widest uppercase transition-all duration-500 relative group ${activeFilter === tag
                ? 'text-white shadow-lg'
                : 'text-gray-500 hover:text-white'
                }`}
              role="tab"
              aria-selected={activeFilter === tag}
            >
              <span className="relative z-10">{tag}</span>
              {activeFilter === tag && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-[18px] -z-0 shadow-glow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {activeFilter !== tag && (
                <div className="absolute inset-0 bg-white/5 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with Refined Layout */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          role="tabpanel"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 space-y-4"
          >
            <div className="text-5xl">🔭</div>
            <p className="text-xl text-gray-500 font-medium">This sector is currently uncharted.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="text-primary font-bold hover:underline"
            >
              Signal All Bases
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal with Overlay Effects */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
