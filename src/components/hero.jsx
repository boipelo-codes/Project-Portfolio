import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ scrollToSection, mousePosition }) {
  const skills = [
    "React", "Node.js", "Python", "HTML", "CSS", 
    "Tailwind", "Vanilla.js", "JavaScript", "PostgreSQL", "Power Apps"
  ];

  return (
    <section className="min-h-screen flex items-center relative px-6 bg-slate-950 text-white dark:bg-slate-50 dark:text-slate-900">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 animate-fadeIn">
          <div className="flex gap-3 text-sm">
            {skills.slice(0, 3).map((skill, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-slate-800/50 dark:bg-slate-200/50 border border-slate-700 dark:border-slate-300 rounded-full text-slate-300 dark:text-slate-900 animate-slideInLeft"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold animate-slideInLeft" style={{ animationDelay: '200ms' }}>
              Hello, I'm
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '300ms' }}>
              Boipelo.
            </h1>
          </div>

          <p className="text-lg text-slate-400 dark:text-slate-800 max-w-xl animate-slideInLeft" style={{ animationDelay: '400ms' }}>
            An experienced full-stack and DevOps engineer with a passion for crafting unique digital experiences and scalable cloud solutions.
          </p>

          <div className="flex gap-4 animate-slideInLeft" style={{ animationDelay: '500ms' }}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              Get in touch →
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 border border-slate-700 dark:border-slate-300 hover:border-slate-500 dark:hover:border-slate-600 rounded-lg font-medium transition-all hover:scale-105"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right 3D Illustration Area */}
        <div className="relative animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <div className="relative bg-gradient-to-br from-slate-900 dark:from-slate-100 to-black dark:to-slate-200 rounded-3xl p-8 border border-slate-800 dark:border-slate-300 overflow-hidden group hover:border-indigo-500/50 transition-all duration-500">
        
        
            {/* Glitch effect lines */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-glitch"
                  style={{
                    top: `${i * 5}%`,
                    left: 0,
                    right: 0,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            {/* Keyboard illustration */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-32">
              <div className="grid grid-cols-6 gap-1">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-slate-700 dark:from-slate-300 to-slate-800 dark:to-slate-400 rounded animate-pulse"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      height: i === 8 || i === 9 ? '32px' : '24px'
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-slate-500 dark:text-slate-700">Scroll to discover</span>
        <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-700" />
      </div>
    </section>
  );
}
