import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Rocket,
  Star,
  GitFork,
  Layers,
  Sparkles,
  Trophy,
  Cpu,
  GraduationCap,
  Monitor,
  Activity,
  Code2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TypewriterEffect from '@/components/TypewriterEffect';
import { Button } from '@/components/ui/button';
import { useTilt } from '@/hooks/useTilt';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Monishwaran K | Portfolio";
  }, []);

  const typewriterWords = [
    "Where hardware precision meets software intelligence.",

    "Turning circuits into smart, connected experiences.",

    "From microcontrollers to modern web platforms.",

    "Engineering systems that bridge the physical and digital worlds.",

    "Powering real-world devices with scalable code.",

    "Transforming sensor data into meaningful insights.",

    "Designing embedded logic with full-stack vision.",

    "Building complete ecosystems — from silicon to software.",
  ];

  const stats = [
    { label: "Projects Completed", value: "10+", icon: Rocket, gradient: "from-cyan-500 to-blue-600" },
    { label: "Technologies Mastered", value: "10+", icon: Layers, gradient: "from-violet-500 to-purple-600" },
    { label: "Competitions Won", value: "2", icon: Star, gradient: "from-yellow-500 to-orange-600" },
    { label: "Years of Experience", value: "1+", icon: Code2, gradient: "from-emerald-500 to-teal-600" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Monishwaran_K_Resume.docx`;
    link.download = "Monishwaran_K_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="relative min-h-screen">
      <div className="film-grain" aria-hidden="true" />

      <div className="relative z-10">
        <main>
          {/* Enhanced Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Layered HUD Geometry */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-primary/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              {/* Corner Brackets */}
              <div className="absolute inset-x-10 inset-y-20 border-[1px] border-white/5 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30" />

                {/* Tech Readouts */}
                <div className="absolute top-4 right-4 text-[8px] font-mono text-primary/40 uppercase tracking-[0.5em] origin-right rotate-90 whitespace-nowrap">EXT_UPLINK_STABLE</div>
                <div className="absolute bottom-10 left-4 text-[8px] font-mono text-primary/40 uppercase tracking-[0.5em] origin-left -rotate-90 whitespace-nowrap">PWR_LEVEL_98%</div>
              </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 cursor-default group"
              >
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase text-gray-300 group-hover:text-primary transition-colors">
                  Innovator & Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold font-sora tracking-tighter mb-8"
              >
                <span className="block text-white">Monishwaran K</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-6 leading-relaxed">
                  Aspiring Frontend Developer | React.js Specialist | Engineering Student
                </h2>
                <TypewriterEffect
                  words={typewriterWords}
                  className="text-primary font-mono text-lg md:text-xl md:justify-center h-12"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                <Button
                  onClick={handleDownload}
                  className="btn-primary px-10 py-7 text-lg rounded-2xl group relative overflow-hidden shadow-glow"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  />
                  <Download className="mr-2 h-5 w-5" />
                  Get Resume
                </Button>
                <Button
                  onClick={() => navigate('/about')}
                  className="btn-outline px-10 py-7 text-lg rounded-2xl border-white/10 hover:border-primary/50 text-white"
                >
                  Explore Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 flex justify-center gap-8"
              >
                {[
                  { icon: Github, href: "https://github.com/Monishwarann" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/monishwaran-k-b463a3363" },
                  { icon: Instagram, href: "https://www.instagram.com/k._.monish/" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-4 rounded-2xl glass-card border-white/5 text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold font-sora gradient-text mb-4">
                  By the Numbers
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="glass-card p-10 text-center relative group bg-gray-900/40 backdrop-blur-xl border-white/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-glow-sm transition-shadow`}>
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 tracking-tighter">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Navigation Cards - Cinematic Redesign */}
          <section className="py-32 relative">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    title: "The Lab",
                    subTitle: "Projects",
                    desc: "Precision engineering meets scalable code.",
                    path: "/projects",
                    icon: Rocket,
                    color: "from-cyan-500 to-blue-600",
                    glow: "shadow-cyan-500/20"
                  },
                  {
                    title: "Academy",
                    subTitle: "Certifications",
                    desc: "Validated expertise in hardware & software.",
                    path: "/certifications",
                    icon: GraduationCap,
                    color: "from-violet-500 to-purple-600",
                    glow: "shadow-violet-500/20"
                  },
                  {
                    title: "Frontlines",
                    subTitle: "Events",
                    desc: "Chronicles of growth and achievements.",
                    path: "/events",
                    icon: Activity,
                    color: "from-rose-500 to-pink-500",
                    glow: "shadow-rose-500/20"
                  }
                ].map((item, i) => {
                  const cardRef = useTilt<HTMLDivElement>({ maxTilt: 15, scale: 1.05 });

                  return (
                    <motion.div
                      key={i}
                      ref={cardRef}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                      onClick={() => navigate(item.path)}
                      className="group cursor-pointer relative"
                    >
                      {/* Floating Background Glow */}
                      <div className={`absolute -inset-1 rounded-[32px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                      <div className="relative glass-card p-12 h-full flex flex-col items-center text-center overflow-hidden border-white/5 bg-gray-950/40 backdrop-blur-2xl group-hover:border-primary/30 transition-all duration-500">
                        {/* Decorative HUD Corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 group-hover:border-primary/40 transition-colors" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-primary/40 transition-colors" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10 group-hover:border-primary/40 transition-colors" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary/40 transition-colors" />

                        {/* Animated Background Orb */}
                        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-[60px] opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700`} />

                        {/* Icon Strategy */}
                        <div className="relative mb-10">
                          <div className={`absolute -inset-6 bg-gradient-to-r ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                          <div className={`relative z-10 p-6 rounded-3xl bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                            <item.icon size={40} className="text-white group-hover:text-primary transition-colors" />
                          </div>
                        </div>

                        {/* Content Hierarchy */}
                        <div className="flex flex-col flex-1 relative z-10">
                          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/60 mb-2 group-hover:text-primary transition-colors">{item.subTitle}</span>
                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-sora">{item.title}</h3>
                          <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent mb-6 mx-auto group-hover:w-24 transition-all duration-500" />
                          <p className="text-gray-400 font-light leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">{item.desc}</p>

                          <div className="mt-auto flex items-center justify-center gap-3 text-white/40 group-hover:text-primary transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">Access Memory</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>

                        {/* Hover Scanline Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent h-1/2 -top-full group-hover:top-full transition-all duration-[1.5s] pointer-events-none"
                          style={{ mixBlendMode: 'overlay' }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
};

export default HomePage;
