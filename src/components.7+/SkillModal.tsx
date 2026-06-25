import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Brain, Trophy } from 'lucide-react';

interface Project {
    name: string;
    url: string;
}

export interface SkillData {
    name: string;
    proficiency: number;
    experience: string;
    projects: Project[];
    category: string;
    emoji: string;
    description: string;
    image: string;
}

interface SkillModalProps {
    skill: SkillData | null;
    onClose: () => void;
    isOpen: boolean;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose, isOpen }) => {
    if (!skill) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-gray-800/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700/50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                            aria-label="Close modal"
                        >
                            <X size={24} className='text-red-500' strokeWidth={3} />
                        </button>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 flex justify-center md:justify-start items-start">
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border border-gray-700 bg-gray-900 flex items-center justify-center p-4">
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/profile.png';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Text Content Section */}
                            <div className="w-full md:w-2/3 flex flex-col justify-center gap-4">
                                <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
                                    {skill.emoji} {skill.name}
                                </h2>

                                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>

                                <div className="flex items-center gap-4 flex-wrap mt-2">
                                    <span className="flex items-center gap-1 text-sm text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full">
                                        <Star className="w-4 h-4" /> {skill.proficiency}%
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-indigo-400 font-bold bg-indigo-400/10 px-3 py-1 rounded-full">
                                        <Brain className="w-4 h-4" /> {skill.experience}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-full">
                                        <Trophy className="w-4 h-4" /> {skill.category}
                                    </span>
                                </div>

                                {skill.projects && skill.projects.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Featured Projects</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.projects.map((proj, i) => (
                                                <a
                                                    key={i}
                                                    href={proj.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-primary transition-all rounded-xl text-sm"
                                                >
                                                    {proj.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SkillModal;
