import { useEffect, Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { IntroAnimation } from '@/components/IntroAnimation';
import { applyPageSEO } from "./utils/seo";
import { usePrefetch } from "./hooks/usePrefetch";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const StatsPage = lazy(() => import("./pages/StatsPage"));



function AppContent(): JSX.Element {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("introShown");
  });

  usePrefetch();

  useEffect(() => {
    applyPageSEO(location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const markIntroAsShown = () => {
    sessionStorage.setItem("introShown", "true");
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden select-none transition-colors duration-500">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation key="intro-animation" onComplete={markIntroAsShown} />
        )}
      </AnimatePresence>

      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-gray-800 text-white border border-cyan-500/20",
          duration: 4000,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route
                  path="/certifications"
                  element={<CertificationsPage />}
                />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}

export default App;
