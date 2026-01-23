import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Core Java", "Python (Basics)", "JDBC"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Web Technologies",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Frameworks",
            skills: ["Spring Boot", "Spring MVC", "Hibernate"],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Tools & Databases",
            skills: ["Git", "GitHub", "MySQL", "VS Code"],
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-colors group"
                            >
                                <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
                                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
