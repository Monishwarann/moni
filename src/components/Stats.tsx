import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Hackathons Won', value: '2' },
    { label: 'Years of Experience', value: '1+' },
];

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="stats" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-sora gradient-text mb-4"
                    >
                        By the Numbers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        A glimpse into my journey as a <span className="text-primary font-medium">passionate developer</span> and <span className="text-accent font-medium">engineering student</span>
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500"
                        >
                            <motion.div
                                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
