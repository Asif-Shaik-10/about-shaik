import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Online Book Store Management System",
            description: "A comprehensive backend system for managing an online bookstore. Implemented RESTful APIs for book management, user authentication, and order processing. Designed a normalized database schema for efficient data retrieval.",
            tech: ["Java", "Spring Boot", "MySQL", "REST API", "HTML/CSS"],
            github: "https://github.com/asif-shaik-10",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Heart Disease Prediction System",
            description: "An analytical tool using Ensemble Machine Learning classifiers to predict heart disease likelihood. Performed extensive data preprocessing and feature engineering to improve model accuracy.",
            tech: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
            github: "https://github.com/asif-shaik-10",
            image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-indigo-300 border border-slate-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>
                                        {/* <a 
                      href="#" 
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
