import React, { useState, useEffect } from 'react';

export default function Navigation({ scrolled, scrollToSection }) {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove 'dark' class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-lg py-4'
          : 'py-6'
      }`}
    >
      <div className="flex items-center justify-between px-8">
        <span className="font-bold text-xl text-white dark:text-slate-200">
          boipelo.
        </span>

        <div className="flex items-center space-x-6">
          {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-slate-400 hover:text-white dark:text-slate-300 dark:hover:text-white transition-colors capitalize"
            >
              {item}
            </button>
          ))}

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded-md bg-slate-700 dark:bg-slate-300 text-white dark:text-slate-900 font-medium transition-colors hover:bg-slate-600 dark:hover:bg-slate-400"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
