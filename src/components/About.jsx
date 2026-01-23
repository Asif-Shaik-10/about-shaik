import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed text-lg">
                                I am a motivated and detail-oriented <span className="text-indigo-400 font-medium">Computer Science</span> graduate seeking an entry-level position in the IT sector.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                As a software professional, I am eager to apply my technical skills in Java, Python, and Web Development to contribute to team success. I pride myself on being a quick learner with strong problem-solving abilities.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                    <GraduationCap className="text-indigo-400 mb-2" size={24} />
                                    <h3 className="font-semibold text-white">B.Tech (CSE)</h3>
                                    <p className="text-sm text-slate-400">Annamacharya University</p>
                                    <p className="text-xs text-indigo-400 mt-1">8.40 CGPA</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                    <Award className="text-indigo-400 mb-2" size={24} />
                                    <h3 className="font-semibold text-white">Hackathon Finalist</h3>
                                    <p className="text-sm text-slate-400">College Hackathon 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <User size={20} className="text-indigo-400" />
                                    Quick Details
                                </h3>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex justify-between border-b border-slate-700 pb-2">
                                        <span>Location</span>
                                        <span className="font-medium text-white">Bengaluru</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2">
                                        <span>Education</span>
                                        <span className="font-medium text-white">B.Tech (2025)</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2">
                                        <span>Email</span>
                                        <span className="font-medium text-white">shaikmohammed.asif333@gmail.com</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Focus</span>
                                        <span className="font-medium text-white">Full Stack Dev</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
