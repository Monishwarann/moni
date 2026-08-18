import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImage(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with extreme blur and dark tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-[101] bg-gray-950/90 border border-white/10 rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col md:flex-row"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Background Glow Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Left Side: Visuals / Carousel - Enlarged for "Perfect Size" as requested */}
            <div className="relative md:flex-[1.8] bg-black/90 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group">
              {/* Background Blur Image - Creates a premium "perfect size" feel for any aspect ratio */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-110 transition-all duration-1000"
                style={{ backgroundImage: `url(${project.images?.[currentImage] ?? ''})` }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full relative z-10 flex items-center justify-center p-4 md:p-8"
                >
                  <img
                    src={project.images?.[currentImage] ?? '/placeholder.svg'}
                    alt={project.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  {/* Subtle scanline overlay on image */}
                  <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              {project.images && project.images.length > 1 && (
                <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 z-20">
                  <button
                    onClick={() => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all active:scale-90"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="flex items-center gap-2 px-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    {project.images.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImage ? 'w-6 bg-primary shadow-glow-sm' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentImage((prev) => (prev + 1) % project.images.length)}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all active:scale-90"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}

              {/* Close Button Mobile */}
              <button
                onClick={onClose}
                className="md:hidden absolute top-6 right-6 p-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 flex flex-col min-w-0 bg-transparent relative">
              {/* Close Button Desktop */}
              <button
                onClick={onClose}
                className="hidden md:flex absolute top-8 right-8 p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20 group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>

              <div className="flex-1 overflow-y-auto px-8 md:px-12 py-10 md:py-16 space-y-10 scrollbar-thin">
                {/* Header Section */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg ${tag === 'Core' || tag === 'CAD'
                          ? 'bg-primary/20 border border-primary/30 text-primary'
                          : 'bg-white/5 border border-white/10 text-gray-400'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 id="modal-title" className="text-4xl md:text-5xl font-bold font-sora text-white leading-tight mb-6">
                    {project.title} <span className="text-primary">.</span>
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {project.longDesc}
                  </p>
                </div>

                {/* Technical Case Study */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Challenge', content: project.challenge, color: 'text-rose-400', bg: 'bg-rose-500/5', border: 'border-rose-500/20' },
                    { title: 'Approach', content: project.approach, color: 'text-cyan-400', bg: 'bg-cyan-500/5', border: 'border-cyan-500/20' },
                    { title: 'Result', content: project.result, color: 'text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/20' }
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} ${item.border} border rounded-3xl p-6 transition-all hover:scale-[1.02]`}>
                      <h3 className={`text-xs font-bold uppercase tracking-widest ${item.color} mb-3`}>{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Ecosystem */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    Tech Stack Ecosystem
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-mono rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-primary transition-colors"
                      >
                        _{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deployment Actions */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-3 shadow-glow hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95"
                    >
                      <ExternalLink size={20} />
                      Launch Live App
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95"
                    >
                      <Github size={20} />
                      Source Code {project.backendUrl ? "(Frontend)" : ""}
                    </a>
                  )}
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95"
                    >
                      <Github size={20} />
                      Source Code (Backend)
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-violet-500 to-cyan-500" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
