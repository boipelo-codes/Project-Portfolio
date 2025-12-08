import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 animate-fadeIn">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-slate-300 dark:text-slate-700 animate-slideInLeft">
            <p className="text-lg">
              I'm a Full Stack and DevOps Engineer specializing in building scalable web applications and cloud infrastructure. With expertise in modern frameworks and cloud technologies, I create efficient solutions that drive business growth.
            </p>
            <p className="text-lg">
              My passion lies in combining elegant frontend experiences with robust backend systems, all orchestrated through automated DevOps pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slideInRight">
            {Object.entries({
              "Frontend": ["React", "TypeScript", "Tailwind CSS"],
              "Backend": ["Node.js", "Python", "Express"],
              "DevOps": ["AWS", "Azure", "Docker"],
              "Database": ["PostgreSQL", "MongoDB"]
            }).map(([category, items]) => (
              <div key={category} className="p-6 bg-slate-900/50 dark:bg-slate-200/20 border border-slate-800 dark:border-slate-300 rounded-xl hover:border-indigo-500/50 transition-all hover:scale-105">
                <h3 className="font-bold mb-3 text-indigo-400">{category}</h3>
                <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-700">
                  {items.map(item => (
                    <li key={item} className="flex items-center">
                      <span className="mr-2 text-indigo-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
