import React from "react";
import { ChevronDown } from "lucide-react";

export default function Hero({ scrollToSection, mousePosition }) {
  const skills = [
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "Tailwind",
    "Vanilla.js",
    "JavaScript",
    "PostgreSQL",
    "Power Apps",
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white dark:bg-gray-950 overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6">

        {/* Skills Row */}
        <div className="flex gap-3">
          {skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 dark:text-gray-200 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Intro Text */}
        <div className="space-y-2">
          <span className="text-gray-600 dark:text-gray-300 text-lg">Hello, I'm</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            Boipelo.
          </h1>
        </div>

        <p className="max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          An experienced full-stack and DevOps engineer with a passion for crafting
          unique digital experiences and scalable cloud solutions.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            Get in touch →
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="px-6 py-3 border border-gray-700 dark:border-gray-500 hover:border-gray-400 rounded-lg font-medium transition-all hover:scale-105 dark:text-gray-200"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* RIGHT SIDE ANIMATION / ILLUSTRATION */}
      <div className="flex-1 relative flex items-center justify-center mt-16 lg:mt-0">

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent dark:via-gray-500 my-2 animate-pulse"
            />
          ))}
        </div>

        {/* Keyboard Illustration */}
        <div className="grid grid-cols-6 gap-2 z-10">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-md animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                height: i === 8 || i === 9 ? "32px" : "24px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-1 animate-bounce text-gray-500 dark:text-gray-300">
        <ChevronDown />
        <span className="text-xs uppercase tracking-wide">Scroll to discover</span>
      </div>
    </div>
  );
}

