import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import solidWorksIcon from '../assets/solidworks.svg';
import awsIcon from '../assets/Amazon_Web_Services-Logo.wine.png';
import ibmIcon from '../assets/IBM-Logo.wine.png';
import techMahindraIcon from '../assets/Tech_Mahindra-Logo.wine.png';
import {
    GraduationCap,
    Target,
    Rocket,
    Users,
    Brain,
    Zap,
    Code,
    Cpu,
    Database,
    Layout,
    Lightbulb,
    Puzzle,
    Sparkles,
    Server,
    Cloud,
    Layers,
    Download,
    ExternalLink
} from 'lucide-react';
import TechStackRadar from '@/components/TechStackRadar';
import { useTilt } from '@/hooks/useTilt';

// Skill data with official brand logos and original colors
const skillsData = [
    // Web Ecosystems
    { name: "HTML5", icon: "html5", type: "devicon", category: "Web Ecosystems", color: "#E34F26" },
    { name: "CSS3", icon: "css3", type: "devicon", category: "Web Ecosystems", color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", type: "devicon", category: "Languages", color: "#F7DF1E" },
    { name: "TypeScript", icon: "typescript", type: "devicon", category: "Languages", color: "#3178C6" },
    { name: "Node.js", icon: "nodejs", type: "devicon", category: "Web Ecosystems", color: "#339933" },
    { name: "React", icon: "react", type: "devicon", category: "Web Ecosystems", color: "#61DAFB" },
    { name: "Tailwind", icon: "tailwindcss", type: "devicon", category: "Web Ecosystems", color: "#06B6D4" },
    { name: "MongoDB", icon: "mongodb", type: "devicon", category: "Data Engine", color: "#47A248" },
    { name: "Python", icon: "python", type: "devicon", category: "Languages", color: "#3776AB" },
    { name: "Java", icon: "java", type: "devicon", category: "Languages", color: "#007396" },
    { name: "C++", icon: "cplusplus", type: "devicon", category: "Languages", color: "#00599C" },
    { name: "Arduino", icon: "arduino", type: "devicon", category: "Physical Computing", color: "#00979D" },
    { name: "ESP32", icon: "https://cdn.simpleicons.org/espressif/E7352C", type: "url", category: "Physical Computing", color: "#E7352C" },
    { name: "SolidWorks", icon: solidWorksIcon, type: "url", category: "Mechanical Intelligence", color: "#DA291C" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", type: "url", category: "Cloud & DevOps", color: "#FFCA28" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white", type: "url", category: "Cloud & DevOps", color: "#FFFFFF" },
    { name: "GitHub", icon: "github", type: "devicon", category: "Cloud & DevOps", color: "#FFFFFF" },
];


const timeline = [
    { id: 1, year: "2024", title: "Engineering Journey", description: "Began BE.Mechanical at Meenakshi Sundararajan Engineering College, exploring the synergy between hardware and software.", icon: GraduationCap },
    { id: 2, year: "2026", title: "Future Goals", description: "Aspiring to become a leading Frontend developer, contribute to impactful open-source projects, and secure a role at a top-tier tech company where innovation meets scale.", icon: Target, current: true },
    { id: 3, year: "2027", title: "Graduation & Career Launch", description: "Completing Bachelor of Engineering with a strong focus on software integration. Dedicated to advancing as a React Developer and joining a visionary tech company.", icon: Rocket },
];


const AboutPage = () => {
    const portraitRef = useTilt<HTMLDivElement>({ maxTilt: 10, scale: 1.02 });
    const quoteRef = useTilt<HTMLDivElement>({ maxTilt: 5, scale: 1.01 });

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `${import.meta.env.BASE_URL}Monishwaran_K_Resume.pdf`;
        link.download = "Monishwaran_K_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative min-h-screen selection:bg-primary/30">
            {/* High-Fidelity Noise Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] overflow-hidden">
                <div className="absolute inset-0 animate-noise bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            </div>

            {/* Vertical Scanlines Effect */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[45]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04))',
                    backgroundSize: '100% 2px, 3px 100%'
                }}
            />

            <div className="film-grain" aria-hidden="true" />

            <div className="relative z-10">
                <main className="pt-32 pb-24">
                    <div className="container mx-auto px-6">
                        {/* Cinematic Hero Header */}
                        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                            <motion.div
                                ref={portraitRef}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative group flex-shrink-0 cursor-crosshair"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-violet-500/30 blur-[60px] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <div className="w-64 aspect-[3/4] md:w-80 md:h-[520px] rounded-[48px] overflow-hidden glass-card border-white/10 group-hover:border-primary/50 transition-all duration-700 p-2 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] relative">
                                    <div className="w-full h-full rounded-[40px] bg-gray-950 flex items-center justify-center relative overflow-hidden">
                                        {/* HUD Scanning Line */}
                                        <motion.div
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100"
                                        />

                                        <img
                                            src={`${import.meta.env.BASE_URL}monish-profile.jpg`}
                                            alt="Monishwaran K"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-top brightness-[0.9] group-hover:brightness-110 contrast-[1.1]"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                                        {/* Decorative HUD Corners */}
                                        {[
                                            "top-4 left-4 border-t border-l",
                                            "top-4 right-4 border-t border-r",
                                            "bottom-4 left-4 border-b border-l",
                                            "bottom-4 right-4 border-b border-r"
                                        ].map((style, i) => (
                                            <div key={i} className={`absolute w-4 h-4 border-primary/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${style}`} />
                                        ))}

                                        {/* Floating Badge HUD */}
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold tracking-[0.2em] text-cyan-400 uppercase mb-1">Status</span>
                                                <span className="text-[10px] font-mono text-white/80 tracking-tighter">CORE_ACTIVE</span>
                                            </div>
                                            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md">
                                                <Sparkles size={12} className="text-primary animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="flex-1 space-y-12">
                                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
                                        <span className="text-xs font-black tracking-[0.5em] uppercase text-primary text-glow-sm">Core.Identity</span>
                                    </div>
                                    <h1 className="text-6xl md:text-8xl font-bold font-sora tracking-tighter mb-8 text-white leading-none relative group">
                                        <span className="relative z-10">About </span>
                                        <span className="gradient-text relative z-10 italic">Me</span>

                                        {/* Chromatic Aberration Underlays */}
                                        <span className="absolute inset-0 text-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity -translate-x-1 -z-10 blur-[1px]">
                                            About Me
                                        </span>
                                        <span className="absolute inset-0 text-rose-500 opacity-0 group-hover:opacity-40 transition-opacity translate-x-1 -z-10 blur-[1px]">
                                            About Me
                                        </span>
                                    </h1>
                                    <div className="space-y-6 mb-12">
                                        <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
                                            Monishwaran <span className="text-primary italic">K</span>
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-6">
                                            <div className="flex items-center gap-3">
                                                <span className="h-3 w-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                                <span className="text-xl font-medium tracking-widest uppercase text-white hover:text-primary transition-colors cursor-default">Hybrid Engineer</span>
                                            </div>
                                            <div className="h-4 w-px bg-white/10 hidden md:block" />
                                            <span className="text-gray-400 font-light italic tracking-widest">Mechanical x Software</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        ref={quoteRef}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative group mt-12 mb-16 transform-gpu transition-all"
                                    >
                                        <div className="absolute -inset-y-4 -inset-x-8 bg-primary/2 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute left-0 inset-y-0 w-[5px] bg-gradient-to-b from-primary via-violet-500 to-transparent rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

                                        <p className="text-2xl md:text-4xl lg:text-5xl text-gray-300 font-extralight leading-[1.1] pl-10 py-2 max-w-4xl tracking-tighter">
                                            <span className="relative inline-block group/me">
                                                <span className="text-white font-black italic bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-500 animate-pulse">Mechanical</span>
                                                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary/20 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
                                            </span> by degree, <br className="hidden md:block" />
                                            <span className="relative inline-block group/sa">
                                                <span className="text-white font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover/sa:drop-shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all">Software</span>
                                                <span className="absolute -left-3 top-0 bottom-0 w-[2px] bg-primary/0 group-hover/sa:bg-primary/50 transition-all" />
                                                <span className="absolute -right-3 top-0 bottom-0 w-[2px] bg-primary/0 group-hover/sa:bg-primary/50 transition-all" />
                                            </span> by destiny. <br className="hidden md:block" />
                                            <span className="text-xl md:text-2xl text-gray-400 mt-10 block font-mono tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity border-l border-white/5 pl-8 py-2">
                                                I bridge the gap between <span className="text-white italic underline decoration-primary/30 decoration-dashed underline-offset-8 transition-colors hover:decoration-primary">hardware logic</span> <br className="hidden lg:block" /> and <span className="text-violet-400 font-bold">software innovation</span>.
                                            </span>
                                        </p>
                                    </motion.div>
                                </motion.div>

                                <div className="flex flex-wrap items-center gap-5">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleDownload}
                                        className="btn-primary group relative overflow-hidden px-8 py-4 rounded-2xl flex items-center gap-3 shadow-glow"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                        <Download size={18} className="relative z-10" />
                                        <span className="text-sm font-bold tracking-widest uppercase relative z-10">Get Resume</span>
                                    </motion.button>

                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            { label: "Self-Learner", icon: Brain, color: "text-rose-400", bg: "bg-rose-500/10" },
                                            { label: "Quick Learner", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10" },
                                            { label: "Creative Thinker", icon: Sparkles, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                                            { label: "Team Player", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
                                            { label: "Problem Solver", icon: Puzzle, color: "text-violet-400", bg: "bg-violet-500/10" }
                                        ].map((badge, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.1, y: -4, rotate: -1 }}
                                                className={`${badge.bg} ${badge.color} px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/5 backdrop-blur-xl transition-all`}
                                            >
                                                <badge.icon size={16} />
                                                <span className="text-[10px] font-black tracking-[0.1em] uppercase">{badge.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Data Fragments */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={`data-${i}`}
                                        className="absolute text-[8px] font-mono text-primary/10 pointer-events-none whitespace-nowrap hidden lg:block"
                                        style={{
                                            top: `${10 + i * 15}%`,
                                            right: `${5 + (i % 2) * 5}%`,
                                        }}
                                        animate={{
                                            opacity: [0, 0.3, 0],
                                            x: [0, -30],
                                        }}
                                        transition={{
                                            duration: 5 + i,
                                            repeat: Infinity,
                                            delay: i * 2,
                                        }}
                                    >
                                        {`>> LOG_STREAM_${Math.random().toString(16).slice(2, 6).toUpperCase()}`}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Narrative Section - Moved Above Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-32">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 lg:p-8 relative overflow-hidden group border-white/5 bg-gray-950/40 backdrop-blur-3xl min-h-[220px]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
                                <div className="absolute top-6 right-6 flex gap-1">
                                    <div className="w-1 h-3 bg-primary/20 rounded-full" />
                                    <div className="w-1 h-3 bg-primary/40 rounded-full" />
                                    <div className="w-1 h-3 bg-primary/60 rounded-full animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                                        <Brain className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="tracking-tight">My Journey</span>
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light text-base">
                                    I am a Second-Year Mechanical Engineering student with a deep-seated passion for the digital realm. My journey is defined by the intersection of <span className="text-white font-medium">physical precision</span> and <span className="text-primary font-medium">software scalability</span>. I don't just write code; I engineer systems that are built to last and designed to inspire.
                                </p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6 lg:p-8 relative overflow-hidden group border-white/5 bg-gray-950/40 backdrop-blur-3xl min-h-[220px]">
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/5 rounded-full blur-[100px] -z-10 group-hover:bg-violet-600/10 transition-colors duration-700" />
                                <div className="absolute top-6 right-6 flex gap-2">
                                    <div className="w-8 h-[1px] bg-violet-500/20" />
                                    <div className="w-2 h-[1px] bg-violet-500/50 animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                                        <Rocket className="text-violet-400 w-5 h-5" />
                                    </div>
                                    <span className="tracking-tight">What Drives Me</span>
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light text-base">
                                    My motivation lies in bridging the gap between <span className="text-white font-medium">mechanical complexity</span> and <span className="text-violet-400 font-medium">elegant UX</span>. Whether I'm optimizing a CAD model or architecting a React component, I thrive on the challenge of turning abstract problems into performant, user-centric realities.
                                </p>
                            </motion.div>
                        </div>

                        {/* SIDE-BY-SIDE SECTION: Skills & Timeline */}
                        <div className="relative">
                            {/* Vertical Separator Line for Desktop */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-violet-500 to-transparent opacity-20 hidden lg:block -translate-x-1/2" />

                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                                {/* LEFT COLUMN: Skills Grid */}
                                <div className="space-y-12">
                                    <h2 className="text-4xl font-black tracking-tight text-white mb-10 uppercase flex items-center gap-4">
                                        Developer <span className="text-primary italic">Skills</span>
                                        <div className="h-px flex-1 bg-white/5 lg:hidden" />
                                    </h2>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {skillsData.map((skill, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group relative h-32 cursor-pointer"
                                            >
                                                <div className="relative glass-card h-full p-6 flex flex-col items-center justify-center border-white/5 bg-gray-900/40 backdrop-blur-2xl overflow-hidden rounded-[32px] group-hover:border-white/20 group-hover:bg-gray-900/60 transition-all duration-500 shadow-2xl">
                                                    {/* Central Halo Glow */}
                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[80px]" style={{ background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)` }} />

                                                    <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 mb-4 bg-gray-950/80 border border-white/10 group-hover:border-white/30 group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                                                        {/* Icon Specific Glow */}
                                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" style={{ backgroundColor: skill.color }} />
                                                        {skill.type === 'devicon' ? (
                                                            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} alt={skill.name} className="w-10 h-10 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                                        ) : (
                                                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                                        )}
                                                    </div>
                                                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors text-center truncate w-full px-2 relative z-10" style={{ textShadow: `0 0 15px ${skill.color}40` }}>
                                                        {skill.name}
                                                    </span>

                                                    {/* Ambient Bottom Light */}
                                                    <div className="absolute bottom-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }} />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: Timeline */}
                                <div className="space-y-16 relative">
                                    <div className="lg:pl-16">
                                        <div className="space-y-16">
                                            {timeline.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    className="relative"
                                                >
                                                    {/* Desktop Icon Centered on Vertical Line */}
                                                    <div className="absolute -left-[16px] lg:-left-[86px] top-12 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass-card border-primary/40 flex items-center justify-center text-primary shadow-glow bg-gray-950 group">
                                                        <item.icon size={18} className="relative z-10" />
                                                        <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 animate-pulse" />
                                                    </div>

                                                    <div className={`p-8 glass-card border-white/10 relative hover:border-primary/40 transition-all rounded-[32px] group ${item.current ? 'border-primary/30 bg-primary/5' : 'bg-gray-900/40'}`}>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block">
                                                                <span className="text-xs font-black tracking-widest text-primary">{item.year}</span>
                                                            </div>
                                                            {item.current && (
                                                                <span className="text-[10px] font-black tracking-widest text-primary animate-pulse uppercase">Active Phase</span>
                                                            )}
                                                        </div>
                                                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                                                        <p className="text-gray-400 font-light leading-relaxed text-base">{item.description}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default AboutPage;
