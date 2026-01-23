import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        <a
                            href="mailto:shaikmohammed.asif333@gmail.com"
                            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                                <Mail size={24} />
                            </div>
                            <span className="text-sm">Email Me</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/shaik-mohammed-asif-4a2776215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <span className="text-sm">LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/asif-shaik-10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                                <Github size={24} />
                            </div>
                            <span className="text-sm">GitHub</span>
                        </a>

                        <a
                            href="tel:+917780402204"
                            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                                <Phone size={24} />
                            </div>
                            <span className="text-sm">Call Me</span>
                        </a>
                    </div>

                    <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© 2025 Shaik Mohammed Asif. All rights reserved.</p>
                        <p className="flex items-center gap-1">
                            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
