import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const TechStackRadar: React.FC = () => {
    const data = [
        { subject: 'Frontend', A: 85, fullMark: 100 },
        { subject: 'Backend', A: 74, fullMark: 100 },
        { subject: 'Mobile', A: 72, fullMark: 100 },
        { subject: 'Database', A: 70, fullMark: 100 },
        { subject: 'AI/ML', A: 65, fullMark: 100 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-96 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
        >
            <h3 className="text-2xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Tech Stack Proficiency
                </span>
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} cx="50%" cy="50%" outerRadius="80%">
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={{ fill: '#6B7280', fontSize: 10 }}
                        tickCount={6}
                        axisLine={false}
                    />
                    <Radar
                        name="Proficiency"
                        dataKey="A"
                        stroke="url(#radar-gradient)"
                        fill="url(#radar-gradient)"
                        fillOpacity={0.4}
                        strokeWidth={2}
                    />
                    <defs>
                        <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </RadarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default TechStackRadar;
