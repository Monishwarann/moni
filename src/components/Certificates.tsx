import { motion, useInView, type Variants, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X, Calendar } from "lucide-react";

import mongoDBicon from "@/assets/mongodb.jpg";
import googleicon from "@/assets/google.jpg";
import pythonlogo from "@/assets/python.jpg";
import ioticon from "@/assets/The future of IoT is at the edge! ️ Dive into….jpg";
import upgradlogo from "@/assets/upgrad.jpg";
import techlogo from "@/assets/tech.jpg";
import delogo from "@/assets/6 Ways To Start Programming - EMR Industry.jpg";
import tatalogo from "@/assets/Tata Motors Logo Meaning and History [Tata Motors symbol].jpg";


const certificates = [
  {
    title: "Schema Design Optimization",
   issuer: "MongoDB",
    date: "2025",
    image: mongoDBicon,
    credentialUrl: "https://learn.mongodb.com/c/jPRqKMxoS32a2xCHBAxH8Q",
    skills: ["MongoDB"],
  },
  {
    title: "Relational To Document Model",
    issuer: "MongoDB",
    date: "2025",
    image: mongoDBicon,
    credentialUrl: "https://learn.mongodb.com/c/j8yCqbZ2S9uU5yCHWgfz5w",
    skills: ["MongoDB", "NoSQL"],
  },
  {
    title: "Connecting to MongoDB in Python",
    issuer: "MongoDB",
    date: "2025",
    image: mongoDBicon,
    credentialUrl: "https://learn.mongodb.com/c/_IibyEVCQKecFHe_O4_CBA",
    skills: ["MongoDB", "Python"],
  },
  {
    title: "Data Visualization : Empowering Business With Effective insights",
    issuer: "Tata Group ",
    date: "2025",
    image: tatalogo,
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_3TgX7Ncw8tHkDLtum_1750919385252_completion_certificate.pdf",
    skills: ["Data Visualization", "Business Insights", "Data Analysis"],
  },
  {
    title: "Python Programming",
    issuer: "NSDC & Reliance Foundation",
    date: "2025",
    image: pythonlogo,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/300/235783",
    skills: ["Python", "Programming"],
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    date: "2025",
    image: pythonlogo,
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/1ee466a5854e44a4ac5e77a7ba26acd2",
    skills: ["Python", "Data Science"],
  },

  {
    title: "IOT-Network Specialist",
    issuer: "NSDC & Reliance Foundation",
    date: "2025",
    image: ioticon,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/500/236025",
    skills: ["IoT", "Embedded Systems"],
  },
  {
    title: "Cyber Security",
    issuer: "Tech Mahindra & NSDC",
    date: "2025",
    image: techlogo,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/500/236025",
    skills: ["Cyber Security", "AI Basics"],
  },
  {
    title: "Google Certification For Students",
    issuer: "Google",
    date: "2025",
    image: googleicon,
    credentialUrl:
      "https://edu.exceedlms.com/student/award/gXQ5bcu6DsWgq8LcFJwMKBmB",
    skills: ["AI"],
  },
  {
    title: "Advanced Prompt Engineering with ChatGPT",
    issuer: "upGrad",
    date: "2026",
    image: upgradlogo,
    credentialUrl:
      "https://www.upgrad.com/certificates/advanced-prompt-engineering-with-chatgpt/KAU6N6YJ",
    skills: ["Prompt Engineering", "AI"],
  },
  {
    title: "Front-End Development",
    issuer: "Reliance Foundation & NSDC",
    date: "2026",
    image: delogo,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/300/235782",
    skills: ["HTML", "CSS", "JavaScript"],
  },

];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="relative py-24 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4"
            >
              <Award size={14} />
              Professional Growth
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-cyan-400">Credentials</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-violet-500 mx-auto rounded-full" />
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="w-full relative group"
              >
                {/* Glow Background behind card on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-violet-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                <motion.div
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-full bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 flex flex-col shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold tracking-tighter uppercase rounded-full bg-primary/80 backdrop-blur-sm text-white shadow-lg">
                      {cert.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-4 mb-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Award size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={16} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:w-1/2 flex flex-col">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                      {selectedCert.issuer}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {selectedCert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar size={14} />
                      {selectedCert.date}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Skills Acquired</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 border border-primary/20 text-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-violet-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95"
                    >
                      <ExternalLink size={18} />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
