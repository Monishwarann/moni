import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronRight, Github, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTilt } from '@/hooks/useTilt';
import profileImage from '@/assets/profile-main.jpeg';

// Import neonPortrait only when file is added to assets
const neonPortrait = null;

const typingTexts = [
  "Composing sleek UIs with React and Next.js...",
  "Building robust engineering solutions...",
  "Designing future-ready machines...",
  "Vibe Coder | Problem Solver | Innovator"
];

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const photoRef = useTilt<HTMLDivElement>({ maxTilt: 15, scale: 1.05 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-0 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float opacity-40" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px] animate-float opacity-40" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8"
            >
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Available for Innovation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-sora tracking-tight mb-6 leading-tight"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-cyan-400">
                Monishwaran K
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-lg md:text-xl font-medium text-gray-400 mb-8"
            >
              <span>Full-Stack Developer</span>
              <span className="text-white/20 hidden md:block">|</span>
              <span>Mechanical Engineer</span>
              <span className="text-white/20 hidden md:block">|</span>
              <span>Embedded Systems</span>
            </motion.div>

            <div className="h-12 mb-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-cyan-400 font-mono italic"
                >
                  &gt; {typingTexts[textIndex]}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-cyan-400 ml-1"
                  />
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="/Monishwaran_K_Resume.docx"
                download
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-violet-600 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download CV
              </motion.a>

              <Link
                to="/about"
                className="group px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all border-b-2 border-b-primary/50"
              >
                Explore More
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform text-primary" />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Monishwarann" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/monishwaran-k-b463a3363" },
                { icon: Instagram, href: "https://www.instagram.com/k._.monish/" },
                { icon: Mail, href: "mailto:k.monishwaran123@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Premium Neon Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative flex justify-center lg:justify-end"
          >
            <div
              ref={photoRef}
              className="relative w-72 h-80 md:w-96 md:h-[480px] group cursor-pointer"
            >
              {/* Background Glows */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-violet-500 to-cyan-500 rounded-[32px] opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-700" />

              {/* Image Container with Border */}
              <div className="relative w-full h-full rounded-[30px] border border-white/10 bg-gray-900/40 backdrop-blur-xl overflow-hidden group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                <img
                  src={neonPortrait || profileImage} // Use neonPortrait if exists, else fallback
                  alt="Monishwaran K"
                  className="w-full h-full object-cover scale-[1.02] transition-all duration-700 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 15px rgba(124, 58, 237, 0.3)) contrast(1.1) brightness(1.1)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== profileImage) target.src = profileImage;
                  }}
                />

                {/* Cyber HUD Overlays */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Identity Verified</span>
                      <span className="text-white font-mono text-xs">M-K_SYSTEM.V2</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center animate-spin-slow">
                      <Sparkles size={12} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floats ornaments */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glow"
              >
                <Link to="/contact" className="text-primary"><Mail size={20} /></Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Element: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

