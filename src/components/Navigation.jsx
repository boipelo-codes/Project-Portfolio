import React from "react";

export default function Navigation({ scrolled, scrollToSection }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-lg py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo / Brand */}
        <span className="text-2xl font-bold text-white tracking-tight">
          boipelo<span className="text-indigo-500">.</span>
        </span>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm">
          {["home", "about", "projects", "services"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label={`Go to ${item} section`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
