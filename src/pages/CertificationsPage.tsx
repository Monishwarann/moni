import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
    Calendar,
    X,
    GraduationCap,
    CircuitBoard,
    BadgeCheck,
    Rocket,
    NotebookPen,
    Search,
    Sparkles,
    Trophy,
    Briefcase,
    LayoutGrid,
    Award,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import Navbar from "@/components/Navbar";

// Premium Assets
import mongoDBicon from "@/assets/mongodb.jpg";
import googleicon from "@/assets/google.jpg";
import pythonlogo from "@/assets/python.jpg";
import ioticon from "@/assets/The future of IoT is at the edge! ️ Dive into….jpg";
import upgradlogo from "@/assets/upgrad.jpg";
import techlogo from "@/assets/tech.jpg";
import techMahindraWine from "@/assets/Tech_Mahindra-Logo.wine.png";
import ibmWine from "@/assets/IBM-Logo.wine.png";
import awsWine from "@/assets/Amazon_Web_Services-Logo.wine.png";
import delogo from "@/assets/6 Ways To Start Programming - EMR Industry.jpg";
import tatalogo from "@/assets/Tata Motors Logo Meaning and History [Tata Motors symbol].jpg";
import innoverseLogo from "@/assets/ino.jpeg";
import brainstormLogo from "@/assets/Brainstorm mini hackathon.jpeg";
import codeNexusLogo from "@/assets/Code Nexus.jpeg";
import nexusIcon from "@/assets/logo2.png";
import brainstormIcon from "@/assets/pr.png";
import innoverseIcon from "@/assets/nov.jpg";
import droneWorkshopImg from "@/assets/Drone workshop.jpeg";
import gbuSairamImg from "@/assets/sairam- GBU.jpeg";
import bajaCeImg from "@/assets/baja ce.jpeg";
import nsdcLogo from "@/assets/nsdc logo.png";
import maiiyamCard from "@/assets/maiyyam card.png";
import maiiyamLogo from "@/assets/maiyyam logo.png";
import promptOManiaCard from "@/assets/prompt_o_mania card.webp";

// PDF Certificates
import schemaPDF from "@/assets/cerficate/Schema Design Optimization.pdf";
import relationalPDF from "@/assets/cerficate/Relational to Document Model.pdf";
import mongodbPythonPDF from "@/assets/cerficate/Connecting to MongoDB in Python.pdf";
import dataVizPDF from "@/assets/cerficate/Data Visualization.pdf";
import pythonPDF from "@/assets/cerficate/certificate-python .pdf";
import ibmDataSciencePDF from "@/assets/cerficate/Certificate of Completion-ibm.pdf";
import cyberSecurityPDF from "@/assets/cerficate/certificate-cyber sercity.pdf";
import googlePDF from "@/assets/cerficate/certificate-google.pdf";
import upgradPDF from "@/assets/cerficate/upgrad certificate.pdf";
import frontendPDF from "@/assets/cerficate/Certificate of Completion-frontend.pdf";
import connectionsPDF from "@/assets/cerficate/connections vel tech.pdf";
import paperPresentationPDF from "@/assets/cerficate/certificate- paper Presentation- vel tecch.pdf";
import maiiyamInternshipPDF from "@/assets/cerficate/internship certificate- maiiyam.pdf";

const CertificationsPage: React.FC = () => {
    const certifications = [
        {
            id: 1,
            title: "Schema Design Optimization",
            issuer: "MongoDB",
            date: "2025",
            logo: "https://cdn.simpleicons.org/mongodb/47A141",
            image: mongoDBicon,
            verifyUrl: schemaPDF,
            skills: ["MongoDB"],
            category: "certification",
        },
        {
            id: 2,
            title: "Relational To Document Model",
            issuer: "MongoDB",
            date: "2025",
            logo: "https://cdn.simpleicons.org/mongodb/47A141",
            image: mongoDBicon,
            verifyUrl: relationalPDF,
            skills: ["MongoDB", "NoSQL"],
            category: "certification",
        },
        {
            id: 3,
            title: "Connecting to MongoDB in Python",
            issuer: "MongoDB",
            date: "2025",
            logo: "https://cdn.simpleicons.org/mongodb/47A141",
            image: mongoDBicon,
            verifyUrl: mongodbPythonPDF,
            skills: ["MongoDB", "Python"],
            category: "certification",
        },
        {
            id: 4,
            title: "Data Visualization: Empowering Business With Effective insights",
            issuer: "Tata Group",
            date: "2025",
            logo: "https://cdn.simpleicons.org/tata/004276",
            image: tatalogo,
            verifyUrl: dataVizPDF,
            skills: ["Data Visualization", "Business Insights", "Data Analysis"],
            category: "certification",
        },
        {
            id: 5,
            title: "Python Programming",
            issuer: "NSDC & Reliance Foundation",
            date: "2025",
            logo: nsdcLogo,
            image: pythonlogo,
            verifyUrl: pythonPDF,
            skills: ["Python", "Programming"],
            category: "certification",
        },
        {
            id: 6,
            title: "Python 101 for Data Science",
            issuer: "IBM",
            date: "2025",
            logo: ibmWine,
            image: ibmWine,
            verifyUrl: ibmDataSciencePDF,
            skills: ["Python", "Data Science"],
            category: "certification",
        },
        {
            id: 7,
            title: "IOT-Network Specialist",
            issuer: "NSDC & Reliance Foundation",
            date: "2025",
            logo: nsdcLogo,
            image: ioticon,
            verifyUrl: "https://rfskillingacademy.com/certificate/group/500/236025",
            skills: ["IoT", "Embedded Systems"],
            category: "certification",
        },
        {
            id: 8,
            title: "Cyber Security",
            issuer: "Tech Mahindra & NSDC",
            date: "2025",
            logo: techMahindraWine,
            image: techMahindraWine,
            verifyUrl: cyberSecurityPDF,
            skills: ["Cyber Security", "AI Basics"],
            category: "certification",
        },
        {
            id: 9,
            title: "Google Certification For Students",
            issuer: "Google",
            date: "2025",
            logo: "https://cdn.simpleicons.org/google/4285F4",
            image: googleicon,
            verifyUrl: googlePDF,
            skills: ["AI"],
            category: "certification",
        },
        {
            id: 10,
            title: "Advanced Prompt Engineering with ChatGPT",
            issuer: "upGrad",
            date: "2026",
            logo: upgradlogo,
            image: upgradlogo,
            verifyUrl: upgradPDF,
            skills: ["Prompt Engineering", "AI"],
            category: "certification",
        },
        {
            id: 11,
            title: "Front-End Development",
            issuer: "Reliance Foundation & NSDC",
            date: "2026",
            logo: nsdcLogo,
            image: delogo,
            verifyUrl: frontendPDF,
            skills: ["HTML", "CSS", "JavaScript"],
            category: "certification",
        },
        {
            id: 13,
            title: "Innoverse Hackathon",
            issuer: "Meenakshi Sundararajan Engineering College",
            date: "2026",
            logo: innoverseIcon,
            image: innoverseLogo,
            verifyUrl: innoverseLogo,
            skills: ["IOT", "Hardware Integration", "Prototyping"],
            category: "hackathon",
        },
        {
            id: 14,
            title: "Brainstormers Mini Hackathon",
            issuer: "Meenakshi Sundararajan Engineering College",
            date: "2026",
            logo: brainstormIcon,
            image: brainstormLogo,
            verifyUrl: brainstormLogo,
            skills: ["Product Development", "Design Thinking", "Innovation"],
            category: "hackathon",
        },
        {
            id: 15,
            title: "Code Nexus Hackathon",
            issuer: "Meenakshi Sundararajan Engineering College",
            date: "2026",
            logo: nexusIcon,
            image: codeNexusLogo,
            verifyUrl: codeNexusLogo,
            skills: ["IT", "Software Development", "Problem Solving"],
            category: "hackathon",
        },
        {
            id: 19,
            title: "Industrial Internship",
            issuer: "Maiiyam Engineering",
            date: "2026",
            logo: maiiyamLogo,
            image: maiiyamCard,
            verifyUrl: maiiyamInternshipPDF,
            skills: ["Industrial Exposure", "Mechanical Engineering", "Manufacturing"],
            category: "internship",
        },
        {
            id: 20,
            title: "Drone Workshop & Control Systems",
            issuer: "Meenakshi Sundararajan Engineering College",
            date: "2025",
            logo: innoverseIcon,
            image: droneWorkshopImg,
            verifyUrl: droneWorkshopImg,
            skills: ["Drones", "Control Systems", "Flight Mechanics"],
            category: "workshop",
        },

    ];

    const [selectedCert, setSelectedCert] = useState<
        (typeof certifications)[0] | null
    >(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", label: "All Items", icon: LayoutGrid },
        { id: "certification", label: "Certifications", icon: Award },
        { id: "internship", label: "Internships", icon: Briefcase },
        { id: "hackathon", label: "Hackathons", icon: Trophy },
        { id: "workshop", label: "Workshops", icon: GraduationCap },
    ];

    const filteredCertifications = certifications.filter((cert) => {
        const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory;
        const matchesSearch =
            cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase()),
            );
        return matchesCategory && matchesSearch;
    });

    const openModal = (cert: (typeof certifications)[0]) => {
        setSelectedCert(cert);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCert(null);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    return (
        <div className="min-h-screen relative bg-gray-900 text-white overflow-hidden">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 relative z-10">
                    {/* HERO */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase">
                                Professional Achievements
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tighter mb-4">
                            <span className="gradient-text">Certifications</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                            A curated showcase of my professional growth through technical certifications and academic milestones.
                        </p>
                    </div>

                    {/* STATS */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10"
                    >
                        {[
                            { label: "Certificates", value: certifications.length, icon: BadgeCheck, gradient: "from-cyan-500 to-blue-600" },
                            { label: "Hackathons", value: "5", icon: CircuitBoard, gradient: "from-purple-500 to-pink-600" },
                            { label: "Internships", value: "2", icon: GraduationCap, gradient: "from-emerald-500 to-teal-600" },
                            { label: "Specializations", value: "3+", icon: NotebookPen, gradient: "from-orange-500 to-red-600" },
                            { label: "Deployments", value: "5+", icon: Rocket, gradient: "from-violet-500 to-purple-600" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card p-4 border-white/5 relative group bg-gray-900/40 backdrop-blur-xl"
                            >
                                <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`}>
                                    <stat.icon size={18} className="text-white" />
                                </div>
                                <div className="text-2xl font-bold text-white text-center">{stat.value}</div>
                                <div className="text-[10px] font-bold text-gray-500 text-center tracking-widest uppercase mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-10">
                        <SearchBar
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            placeholder="Search by title, issuer, or skill..."
                            scrollTargetId="certifications-grid"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${selectedCategory === category.id
                                    ? "bg-gradient-to-r from-cyan-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                                    : "bg-gray-800/60 text-gray-400 hover:text-cyan-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-cyan-500/30"
                                    }`}
                            >
                                <category.icon size={14} />
                                {category.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* GRID */}
                    <div id="certifications-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                        {filteredCertifications
                            .sort((a, b) => b.date.localeCompare(a.date))
                            .map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    onClick={() => openModal(cert)}
                                    className="group glass-card border-white/5 relative cursor-pointer overflow-hidden p-0 bg-gray-900/40 backdrop-blur-xl"
                                    whileHover={{ y: -8 }}
                                >
                                    {/* Image Banner */}
                                    <div className="relative h-32 overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/shapes/svg?seed=' + cert.title }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                                        {/* Date Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-tighter text-white">
                                            {cert.date}
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-gray-800 border border-white/5 flex-shrink-0 flex items-center justify-center p-2 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                                                <img
                                                    src={cert.logo}
                                                    alt={cert.issuer}
                                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                                                <div className="text-[10px] font-bold text-primary tracking-widest uppercase mt-2">{cert.issuer}</div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.slice(0, 3).map((skill) => (
                                                <span key={skill} className="text-[9px] font-bold tracking-[0.15em] px-2 py-1 rounded bg-white/5 text-gray-400 group-hover:text-primary transition-colors border border-white/5 capitalize">
                                                    {skill}
                                                </span>
                                            ))}
                                            {cert.skills.length > 3 && (
                                                <span className="text-[9px] font-bold text-gray-600">+{cert.skills.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>

                    {!filteredCertifications.length && (
                        <div className="text-center py-24 text-gray-500">No matching certifications found.</div>
                    )}
                </div>
            </main>


            {/* MODAL */}
            <AnimatePresence>
                {showModal && selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative glass-card border-white/10 max-w-4xl w-full bg-gray-900/80 p-6 sm:p-10 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        <BadgeCheck size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white leading-tight">{selectedCert.title}</h2>
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest">{selectedCert.issuer}</p>
                                    </div>
                                </div>
                                <button onClick={closeModal} className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 transition-all">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="aspect-[4/3] bg-black rounded-xl border border-white/10 relative group overflow-hidden shadow-2xl">
                                {selectedCert.verifyUrl.endsWith('.pdf') ? (
                                    <iframe
                                        src={`${selectedCert.verifyUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                        className="w-full h-full border-none"
                                        title="Certificate PDF"
                                    />
                                ) : (
                                    <img
                                        src={selectedCert.verifyUrl}
                                        alt="Certificate"
                                        className="w-full h-full object-contain"
                                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/identicon/svg?seed=' + selectedCert.title }}
                                    />
                                )}

                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <a
                                        href={selectedCert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-lg bg-primary/90 text-white text-xs font-bold backdrop-blur-md border border-white/10 hover:bg-primary transition-all flex items-center gap-2"
                                    >
                                        View Full Document
                                        <Rocket size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CertificationsPage;
