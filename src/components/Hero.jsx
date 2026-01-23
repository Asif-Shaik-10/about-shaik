import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-16">
            {/* Background patterns */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-indigo-400 font-semibold tracking-wider uppercase mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Shaik Mohammed Asif</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
                        Motivated and detail-oriented Computer Science Engineer seeking to impact the IT sector with strong programming skills in Java, Python, and Web Technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2"
                        >
                            <Mail size={18} />
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
