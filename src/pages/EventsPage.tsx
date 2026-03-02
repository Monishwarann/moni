import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
    Calendar,
    MapPin,
    Trophy,
    Search,
    Sparkles,
    LayoutGrid,
    Star,
    Timer,
    Award,
    Briefcase,
    GraduationCap,
    Rocket,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import Navbar from "@/components/Navbar";

// Images
import bajaCard from "@/assets/baja card.jpeg";
import gbuCard from "@/assets/GBU card.jpeg";
import droneWorkshopCard from "@/assets/drone workshop card.png";
import hackathonImage from "@/assets/Hackintym'25 2.0.jpg";
import promptOManiaCard from "@/assets/prompt_o_mania card.webp";
import connectionsAndPaperImage from "@/assets/connections and paper presentation.png";
import droneImage from "@/assets/Drone workshop.jpeg";
import maiiyamCard from "@/assets/maiyyam card.png";
import innoverseImage from "@/assets/ino.jpeg";
import brainstormImage from "@/assets/Brainstorm mini hackathon.jpeg";
import codeNexusImage from "@/assets/Code Nexus.jpeg";
import droneIcon from "@/assets/nov.jpg";

// PDF Certificates
import connectionsPDF from "@/assets/cerficate/connections vel tech.pdf";
import paperPresentationPDF from "@/assets/cerficate/certificate- paper Presentation- vel tecch.pdf";
import maiiyamInternshipPDF from "@/assets/cerficate/internship certificate- maiiyam.pdf";

const EventsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const events = [
        {
            id: 1,
            title: "SAE India H-Baja",
            type: "competition",
            role: "Participant",
            date: "2025 - Present",
            location: "India",
            description:
                "Designing and fabricating an off-road electric vehicle for SAE India H-Baja. Involved in vehicle dynamics and battery thermal management systems.",
            achievement: "TI-Clearance for Final Round",
            image: bajaCard,
            technologies: ["Electric Vehicle", "CAD", "Simulations", "Dynamics"],
            featured: true,
            certificateUrl: bajaCard,
        },
        {
            id: 2,
            title: "Hackintym'25 2.0",
            type: ["hackathon", "Club Event"],
            role: "Participant",
            date: "October 2025",
            location: "Chennai, India",
            description:
                "Participated in a national-level hackathon solving real-world engineering problems through innovative software and hardware integration.",
            achievement: "Top 10 Finalist",
            image: hackathonImage,
            technologies: ["React", "Python", "Problem Solving", "Team Work"],
            duration: "48 hours",
            featured: true,
        },
        {
            id: 3,
            title: "Guess Build Code (GBU)",
            type: "competition",
            role: "Winner",
            date: "October 2025",
            location: "Sri Sai Ram Engineering College",
            description: "Intensive technical coding competition involving 'Guessing' the output and 'Building' optimized logic for complex C-programming challenges.",
            achievement: "Winner",
            image: gbuCard,
            technologies: ["C-Programming", "Logic Building", "Code Optimization"],
            featured: true,
            certificateUrl: gbuCard,
        },
        {
            id: 4,
            title: "Prompt-o-Mania",
            type: "competition",
            role: "Winner",
            date: "April 2025",
            location: "Meenakshi Sundararajan Engineering College",
            description:
                "Competitive coding and prompt engineering challenge focusing on Large Language Model optimization and creative output generation.",
            achievement: "Winner",
            image: promptOManiaCard,
            technologies: ["Prompt Engineering", "NLP", "LLMs"],
            featured: false,
        },
        {
            id: 5,
            title: "Drone Workshop",
            type: "workshop",
            role: "Participant",
            date: "April 2025",
            location: "Meenakshi Sundararajan Engineering College",
            description:
                "Hands-on workshop on drones, control systems, and flight mechanics. Built and tested quadcopters for stability and data collection.",
            achievement: "Completed",
            image: droneWorkshopCard,
            technologies: ["Drones", "Control Systems", "Flight Mechanics"],
            featured: false,
            logo: droneIcon,
            certificateUrl: droneWorkshopCard,
        },
        {
            id: 6,
            title: "Connections - CEAANS 2025 Symposium",
            type: "competition",
            role: "Participant",
            date: "2025",
            location: "VelTech High Tech Dr.Rangarajan Dr.sakunthala Engineering College, Chennai",
            description: "A national level engineering symposium event testing logical reasoning and technical cross-connections.",
            achievement: "Participant",
            image: connectionsAndPaperImage,
            technologies: ["Logical Reasoning", "Problem Solving"],
            featured: false,
            certificateUrl: connectionsPDF,
        },
        {
            id: 7,
            title: "Paper Presentation - CEAANS 2025 Symposium",
            type: "competition",
            role: "Participant",
            date: "2025",
            location: "VelTech High Tech Dr.Rangarajan Dr.sakunthala Engineering College, Chennai",
            description: "National level symposium event involved in presenting innovative engineering research and solutions.",
            achievement: "Presented",
            image: connectionsAndPaperImage,
            technologies: ["Research", "Public Speaking"],
            featured: false,
            certificateUrl: paperPresentationPDF,
        },
        {
            id: 9,
            title: "Innoverse Hackathon",
            type: ["hackathon", "Club Event"],
            role: "Participant",
            date: "2026",
            location: "Meenakshi Sundararajan Engineering College",
            description: "An IoT-focused hackathon involving hardware-software integration and real-time data monitoring.",
            achievement: "Participant",
            image: innoverseImage,
            technologies: ["IOT", "Hardware Integration", "Prototyping"],
            featured: false,
            certificateUrl: innoverseImage,
        },
        {
            id: 10,
            title: "Brainstormers Mini Hackathon",
            type: ["hackathon", "Club Event"],
            role: "Participant",
            date: "2026",
            location: "Meenakshi Sundararajan Engineering College",
            description: "Fast-paced product development competition focused on design thinking and innovative solutions.",
            achievement: "Participant",
            image: brainstormImage,
            technologies: ["Product Development", "Design Thinking", "Innovation"],
            featured: false,
            certificateUrl: brainstormImage,
        },
        {
            id: 11,
            title: "Code Nexus Hackathon",
            type: ["hackathon", "Club Event"],
            role: "Participant",
            date: "2026",
            location: "Meenakshi Sundararajan Engineering College",
            description: "IT-based hackathon solving complex software challenges through collaborative coding.",
            achievement: "Participant",
            image: codeNexusImage,
            technologies: ["IT", "Software Development", "Problem Solving"],
            featured: false,
            certificateUrl: codeNexusImage,
        },
    ];

    const categories = [
        { id: "all", label: "All Events", icon: LayoutGrid },
        { id: "hackathon", label: "Hackathons", icon: Trophy },
        { id: "Club Event", label: "Club Events", icon: Briefcase },
        { id: "workshop", label: "Workshops", icon: GraduationCap },
        { id: "competition", label: "Competitions", icon: Award },
    ];

    const filteredEvents = events.filter((event) => {
        const matchesCategory =
            selectedCategory === "all" ||
            (Array.isArray(event.type)
                ? event.type.includes(selectedCategory)
                : event.type === selectedCategory);
        const matchesSearch =
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.technologies.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase()),
            );
        return matchesCategory && matchesSearch;
    });

    const getRoleColor = (role: string) => {
        switch (role) {
            case "Participant":
                return "from-indigo-500 to-purple-600";
            case "Co-Ordinator":
                return "from-sky-500 to-blue-600";
            case "Winner":
                return "from-yellow-500 to-orange-500";
            default:
                return "from-slate-500 to-gray-600";
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const stats = [
        {
            label: "Events Attended",
            value: "15+",
            icon: Calendar,
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            label: "Hackathons Won",
            value: "1",
            icon: Trophy,
            gradient: "from-yellow-500 to-orange-600",
        },
        {
            label: "Total Events",
            value: "15+",
            icon: Award,
            gradient: "from-emerald-500 to-teal-600",
        },
        {
            label: "Prize Money Won",
            value: "₹1000+",
            icon: Star,
            gradient: "from-violet-500 to-purple-600",
        },
    ];

    return (
        <div className="relative min-h-screen">
            <div className="film-grain" aria-hidden="true" />
            <div className="relative z-10">
                <main className="min-h-screen pt-16 lg:pt-20 bg-transparent text-white relative">
                    {/* Hero Section */}
                    <section className="py-16 lg:py-24 relative overflow-hidden">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-12 lg:mb-16"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-cyan-400" />
                                    <span className="text-sm font-medium text-cyan-300">
                                        Experiences & Achievements
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                                        Events & Competitions
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                    Participating in hackathons, workshops, and tech competitions to grow and learn
                                </p>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                            >
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="relative group"
                                    >
                                        <div className="text-center p-4 rounded-2xl bg-gray-800/60 border border-gray-700/50 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500">
                                            <div
                                                className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`}
                                            >
                                                <stat.icon size={18} className="text-white" />
                                            </div>
                                            <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs lg:text-sm text-gray-400 mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Search Bar */}
                            <SearchBar
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                                placeholder="Search events by name or technology..."
                                scrollTargetId="events-grid"
                                gradientFrom="cyan-500"
                                gradientTo="violet-500"
                                iconColor="cyan-400"
                                focusBorderColor="focus:border-cyan-500/50"
                                focusRingColor="focus:ring-cyan-500/20"
                            />

                            {/* Category Filter */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="flex flex-wrap justify-center gap-3"
                            >
                                {categories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        type="button"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedCategory(category.id);
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${selectedCategory === category.id
                                            ? "bg-gradient-to-r from-cyan-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                                            : "bg-gray-800/60 text-gray-400 hover:text-cyan-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-cyan-500/30"
                                            }`}
                                    >
                                        <category.icon size={14} />
                                        {category.label}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Events Grid */}
                    <section id="events-grid" className="pt-8 pb-24 relative">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="group relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                                    >
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

                                        {/* Card */}
                                        <div className="relative h-full bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300">
                                            {/* Winner Badge */}
                                            {event.role === "Winner" && (
                                                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                                                    <Trophy size={12} className="fill-current" />
                                                    Winner
                                                </div>
                                            )}

                                            {/* Featured Badge */}
                                            {event.featured && event.role !== "Winner" && (
                                                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-500/90 to-violet-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                                                    <Star size={12} className="fill-current" />
                                                    Featured
                                                </div>
                                            )}

                                            {/* Image */}
                                            <div className="relative h-36 lg:h-40 overflow-hidden">
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                                                {/* Type Badge */}
                                                <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg text-xs font-medium text-cyan-400 border border-cyan-500/30">
                                                    {Array.isArray(event.type)
                                                        ? event.type[0].charAt(0).toUpperCase() + event.type[0].slice(1)
                                                        : event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                                </div>

                                                {/* Role Badge */}
                                                <div
                                                    className={`absolute bottom-4 right-4 px-3 py-1 bg-gradient-to-r ${getRoleColor(
                                                        event.role,
                                                    )} rounded-lg text-xs font-medium text-white`}
                                                >
                                                    {event.role}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-4">
                                                <h3 className="text-base lg:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-1">
                                                    {event.title}
                                                </h3>

                                                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={12} />
                                                        {event.date}
                                                    </div>
                                                    {event.duration && (
                                                        <div className="flex items-center gap-1">
                                                            <Timer size={12} />
                                                            {event.duration}
                                                        </div>
                                                    )}
                                                </div>

                                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {event.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {event.technologies.slice(0, 3).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-[10px] px-2 py-1 rounded-lg bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300 group-hover:border-cyan-400/40 transition-colors duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {event.technologies.length > 3 && (
                                                        <span className="text-[10px] px-2 py-1 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400">
                                                            +{event.technologies.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Action Link */}
                                                {event.certificateUrl && (
                                                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                                                        <a
                                                            href={event.certificateUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 text-xs font-medium"
                                                        >
                                                            Verify Certificate
                                                            <Rocket size={12} />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Decorative Corner */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredEvents.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-16 lg:py-24"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center">
                                        <Search className="w-8 h-8 text-gray-500" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 mb-4">
                                        No events found
                                    </h3>
                                    <p className="text-gray-500">
                                        Try adjusting your search or filter criteria
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </div >
    );
};

export default EventsPage;
