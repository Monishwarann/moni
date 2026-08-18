import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const cardRef = useTilt<HTMLDivElement>({ maxTilt: 10, scale: 1.05 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onClick={onClick}
      className="group relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-primary/50 p-6 cursor-pointer overflow-hidden transition-all duration-500 shadow-2xl flex flex-col h-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View project: ${project.title}`}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-violet-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

      {/* High-Tech Scanline / Sheen Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-radial from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10%] opacity-0 group-hover:opacity-100 animate-scanline pointer-events-none" />
      </div>

      {/* Project Image Container */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-black/40 shadow-inner group-hover:shadow-primary/20 transition-shadow duration-500">
        {(() => {
          const imgSrc = project.images?.[0] ?? '/placeholder.svg';
          return (
            <img
              src={imgSrc}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          );
        })()}

        {/* Subtle Image Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {project.featured && (
            <span className="p-1.5 rounded-lg bg-primary/20 backdrop-blur-md border border-primary/30 text-primary shadow-lg">
              <ExternalLink size={14} />
            </span>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300 ${tag === 'Core' || tag === 'CAD'
                ? 'bg-primary/20 border border-primary/40 text-primary shadow-sm shadow-primary/20'
                : 'bg-white/5 border border-white/10 text-gray-400 group-hover:border-primary/20'
              }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold font-sora text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 transition-all duration-500 leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 line-clamp-2 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
        {project.shortDesc}
      </p>

      {/* Tech Stack Preview */}
      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-500 group-hover:text-primary-foreground group-hover:bg-primary/10 transition-all"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 text-gray-600">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
        <div className="flex gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          View Detail
        </div>
      </div>
    </motion.div>
  );
}
