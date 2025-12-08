import React from 'react';
import { skillSections } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 animate-slideInLeft">
          A comprehensive toolkit for modern development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSections.map((section, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-3 text-indigo-400">{section.title}</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                {section.skills.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

