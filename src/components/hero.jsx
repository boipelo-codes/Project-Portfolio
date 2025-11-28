import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ scrollToSection, mousePosition }) {
  const skills = [
    "React", "Node.js", "Python", "HTML", "CSS",
    "Tailwind", "Vanilla.js", "JavaScript", "PostgreSQL", "Power Apps"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-6 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fadeIn">
          <div className="flex gap-3 text-sm">
            {skills.slice(0, 3).map((skill, i) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 animate-slideInLeft"
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

          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl animate-slideInLeft" style={{ animationDelay: '400ms' }}>
            An experienced full-stack and DevOps engineer with a passion for crafting unique digital experiences and scalable cloud solutions.
          </p>

          <div className="flex gap-4 animate-slideInLeft" style={{ animationDelay: '500ms' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              Get in touch →
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 border border-slate-700 dark:border-slate-500 rounded-lg font-medium transition-all hover:scale-105"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right 3D Illustration Area */}
        <div className="relative animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <div className="relative bg-gradient-to-br from-slate-200 dark:from-slate-900 to-slate-50 dark:to-slate-950 rounded-3xl p-8 border border-slate-300 dark:border-slate-800 overflow-hidden group hover:border-indigo-500/50 transition-all duration-500">
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

            {/* 3D Elements, cubes, sphere remain same but colors adjusted */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-float shadow-2xl shadow-indigo-500/50" />
              <div className="absolute w-48 h-48 border-2 border-indigo-500/30 rounded-full animate-spin-slow" />
              <div className="absolute w-64 h-64 border border-purple-500/20 rounded-full animate-spin-reverse" />

              <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 animate-float shadow-xl shadow-cyan-500/50" style={{ animationDelay: '0.5s', transform: 'rotateX(45deg) rotateZ(45deg)' }} />
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 animate-float shadow-xl shadow-purple-500/50" style={{ animationDelay: '1s', transform: 'rotateX(45deg) rotateZ(45deg)' }} />

              {/* Keyboard illustration */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-32 grid grid-cols-6 gap-1">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-slate-300 dark:from-slate-700 to-slate-400 dark:to-slate-800 rounded animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s`, height: i === 8 || i === 9 ? '32px' : '24px' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-slate-500 dark:text-slate-400">Scroll to discover</span>
        <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
      </div>
    </section>
  );
}

