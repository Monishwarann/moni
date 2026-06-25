import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#01";
const NAME = "MONISHWARAN K";
const TAGLINE = "PORTFOLIO v3.0 — SYSTEMS ONLINE";

function useGlitchText(target: string, startDelay = 400) {
  const [display, setDisplay] = useState(() => Array(target.length).fill("_").join(""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    let raf: number;
    const revealed = Array(target.length).fill(false);

    const totalFrames = 55;

    const animate = () => {
      frame++;
      const result = target.split("").map((char, i) => {
        if (char === " ") return " ";
        if (revealed[i]) return char;
        if (frame > (i / target.length) * totalFrames * 0.8) {
          if (Math.random() < 0.3) {
            revealed[i] = true;
            return char;
          }
        }
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      });

      setDisplay(result.join(""));

      if (revealed.every(Boolean)) {
        setDone(true);
        setDisplay(target);
        return;
      }
      raf = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, startDelay]);

  return { display, done };
}

// Deterministic positions to avoid hydration issues
const PARTICLE_CONFIG = Array.from({ length: 40 }, (_, i) => ({
  top: ((i * 37 + 13) % 97) + 1.5,
  left: ((i * 61 + 7) % 97) + 1.5,
  duration: 2 + (i % 4) * 0.6,
  delay: (i % 10) * 0.4,
  size: i % 3 === 0 ? 1.5 : i % 5 === 0 ? 2.5 : 1,
  color: i % 4 === 0 ? 'rgba(0,229,255,0.6)' : i % 3 === 0 ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.25)',
}));

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exit'>('loading');
  const [progress, setProgress] = useState(0);
  const [showCurtain, setShowCurtain] = useState(false);
  const nameControls = useAnimationControls();
  const { display: glitchName, done: nameDone } = useGlitchText(NAME, 600);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const speed = prev < 40 ? 1.8 : prev < 75 ? 2.5 : prev < 95 ? 0.8 : 0.3;
        return Math.min(prev + speed, 100);
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Phase transitions
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 700);
    const t2 = setTimeout(() => {
      setPhase('exit');
      setShowCurtain(true);
      setTimeout(onComplete, 900);
    }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  // Pulse the name when glitch is done
  useEffect(() => {
    if (nameDone) {
      nameControls.start({
        textShadow: [
          '0 0 8px rgba(0,229,255,0)',
          '0 0 24px rgba(0,229,255,0.9), 0 0 60px rgba(139,92,246,0.5)',
          '0 0 12px rgba(0,229,255,0.4)',
        ],
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [nameDone, nameControls]);

  const statusLabel =
    progress < 35 ? "INITIALIZING CORE MODULES..." :
    progress < 65 ? "SYNCING GITHUB REPOSITORY..." :
    progress < 88 ? "DEPLOYING ASSETS..." :
    "ALL SYSTEMS ONLINE ✓";

  return (
    <AnimatePresence>
      {!showCurtain ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] bg-[#020209] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* ── Ambient Glows ── */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)' }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* ── Orbital Rings ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[380, 500, 640].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full"
                style={{
                  width: size, height: size,
                  border: `1px solid rgba(${i % 2 === 0 ? '0,229,255' : '139,92,246'},${0.08 - i * 0.015})`,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 30 + i * 12, repeat: Infinity, ease: 'linear' }}
              />
            ))}
            {/* Dashed orbit */}
            <motion.div
              className="absolute rounded-full"
              style={{ width: 460, height: 460, border: '1px dashed rgba(0,229,255,0.06)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            />
            {/* Orbiting dot */}
            <motion.div
              className="absolute"
              style={{ width: 460, height: 460 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ background: 'rgba(0,229,255,0.9)', boxShadow: '0 0 8px 2px rgba(0,229,255,0.6)' }}
              />
            </motion.div>
          </div>

          {/* ── Floating Particles ── */}
          <div className="absolute inset-0 pointer-events-none">
            {PARTICLE_CONFIG.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: `${p.top}%`, left: `${p.left}%`,
                  width: p.size, height: p.size,
                  background: p.color,
                }}
                animate={{ y: [0, -80, 0], opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
              />
            ))}
          </div>

          {/* ── HUD Corner Brackets ── */}
          {(['tl', 'tr', 'bl', 'br'] as const).map(pos => (
            <motion.div
              key={pos}
              className={`absolute w-10 h-10 ${pos.includes('t') ? 'top-8' : 'bottom-8'} ${pos.includes('l') ? 'left-8' : 'right-8'}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div
                className={`absolute w-full h-full`}
                style={{
                  borderTop: pos.includes('t') ? '1.5px solid rgba(0,229,255,0.35)' : 'none',
                  borderBottom: pos.includes('b') ? '1.5px solid rgba(0,229,255,0.35)' : 'none',
                  borderLeft: pos.includes('l') ? '1.5px solid rgba(0,229,255,0.35)' : 'none',
                  borderRight: pos.includes('r') ? '1.5px solid rgba(0,229,255,0.35)' : 'none',
                }}
              />
            </motion.div>
          ))}

          {/* ── Scanline ── */}
          <motion.div
            className="absolute inset-x-0 h-[1px] pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)' }}
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* ── Main Content ── */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: phase !== 'loading' ? 1 : 0, y: phase !== 'loading' ? 0 : -16 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.35em] uppercase"
              style={{
                border: '1px solid rgba(0,229,255,0.25)',
                background: 'rgba(0,229,255,0.05)',
                color: 'rgba(0,229,255,0.8)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Full-Stack &amp; Mechanical Engineer
            </motion.div>

            {/* Glitch Name */}
            <motion.h1
              animate={nameControls}
              className="font-sora font-black tracking-tighter leading-none select-none"
              style={{
                fontSize: 'clamp(2.4rem, 8vw, 5.5rem)',
                background: 'linear-gradient(135deg, #fff 30%, rgba(0,229,255,0.8) 65%, rgba(139,92,246,0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.02em',
              }}
            >
              {phase === 'loading' ? '\u00A0' : glitchName}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: nameDone ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-mono tracking-[0.5em] uppercase"
              style={{ color: 'rgba(139,92,246,0.7)' }}
            >
              {TAGLINE}
            </motion.p>

            {/* Progress bar */}
            <div className="w-64 sm:w-80 flex flex-col items-center gap-2 mt-2">
              <div
                className="relative w-full h-[2px] overflow-hidden rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(139,92,246,0.9), rgba(0,229,255,1))',
                    boxShadow: '0 0 12px rgba(0,229,255,0.8)',
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear', duration: 0.1 }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-y-0 w-16 rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
                  animate={{ left: ['-10%', '110%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
              </div>

              {/* Status */}
              <div className="flex items-center justify-between w-full">
                <motion.span
                  key={statusLabel}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[9px] font-mono tracking-widest uppercase"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {statusLabel}
                </motion.span>
                <span
                  className="text-[10px] font-mono font-bold tabular-nums"
                  style={{ color: 'rgba(0,229,255,0.85)' }}
                >
                  {Math.floor(progress).toString().padStart(3, '0')}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* ── Curtain-split Exit ── */
        <motion.div key="curtain" className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
          <motion.div
            className="flex-1 w-full"
            style={{ background: '#020209' }}
            initial={{ scaleY: 1, transformOrigin: 'top' }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="flex-1 w-full"
            style={{ background: '#020209' }}
            initial={{ scaleY: 1, transformOrigin: 'bottom' }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
