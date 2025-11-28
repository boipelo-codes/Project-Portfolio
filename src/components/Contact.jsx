import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="services" className="min-h-screen py-20 px-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 animate-fadeIn">
          Let's <span className="text-indigo-500">Connect</span>
        </h2>

        <p className="text-xl text-slate-400 dark:text-slate-700 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:boipelongakane20@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://github.com/boipelo-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-slate-700 dark:border-slate-300 hover:border-slate-500 dark:hover:border-slate-600 rounded-lg transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/boipelo-ngakane-b3b125295"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-slate-700 dark:border-slate-300 hover:border-slate-500 dark:hover:border-slate-600 rounded-lg transition-all hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
