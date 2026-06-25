import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutGroup, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Prefetch imports for instant navigation - Adjusted to match current project file structure
const prefetchModules: Record<string, () => Promise<any>> = {
  "/": () => import("../pages/HomePage"),
  "/about": () => import("../pages/AboutPage"),
  "/projects": () => import("../pages/ProjectsPage"),
  "/certifications": () => import("../pages/CertificationsPage"),
  "/events": () => import("../pages/EventsPage"),
  "/stats": () => import("../pages/StatsPage"),
  "/contact": () => import("../pages/ContactPage"),
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/certifications", label: "Certifications" },
    { path: "/events", label: "Events" },
    { path: "/stats", label: "Stats" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const handlePrefetch = (path: string) => {
    const prefetch = prefetchModules[path];
    if (prefetch) {
      prefetch().catch(() => { });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md" : "backdrop-blur"
        }`}
    >
      <LayoutGroup id="tubelight">
        <div className="px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 w-full max-w-7xl mx-auto rounded-full bg-background/80 backdrop-blur-xl border border-primary/20 shadow-lg px-3 sm:px-5 lg:px-6 transition-colors duration-500">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Logo"
                    className="h-9 md:h-11 w-auto object-contain brightness-110 contrast-125 relative z-10"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-black tracking-[0.2em] text-white leading-none text-glow-sm"></span>
                  <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-primary uppercase mt-1 opacity-70 group-hover:opacity-100 transition-all"></span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2 rounded-full bg-card/40 px-3 py-2 border border-border/50 shadow-sm backdrop-blur-md transition-colors duration-500">
                {navItems.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <motion.div key={item.path} className="relative">
                      <Link
                        to={item.path}
                        onPointerDown={() => handlePrefetch(item.path)}
                        onMouseEnter={() => handlePrefetch(item.path)}
                        className={`relative block px-5 py-2.5 text-xs font-black tracking-[0.2em] uppercase transition-colors duration-300 ${active
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                          }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="tubelight-desktop"
                            className="absolute inset-0 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">

              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-primary transition-colors p-2 glass-card border-white/10 rounded-xl"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="lg:hidden w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6"
        >
          <div className="rounded-[28px] bg-background/90 border border-primary/25 shadow-xl backdrop-blur px-3 sm:px-4 py-3 space-y-1.5 mt-2 transition-colors duration-500">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 6 }}
                  className="relative block"
                >
                  <Link
                    to={item.path}
                    onMouseEnter={() => handlePrefetch(item.path)}
                    onMouseDown={() => handlePrefetch(item.path)}
                    onPointerDown={() => handlePrefetch(item.path)}
                    onTouchStart={() => handlePrefetch(item.path)}
                    className={`relative block px-4 py-2.5 text-base font-semibold transition-colors duration-200 rounded-full overflow-hidden ${active
                      ? "text-cyan-200"
                      : "text-gray-300 hover:text-cyan-200"
                      }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="tubelight-mobile"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-violet-500/20 border border-cyan-400/25 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </LayoutGroup>
    </motion.nav>
  );
};

export default Navbar;
