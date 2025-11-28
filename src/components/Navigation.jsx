import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navigation({ scrolled, scrollToSection }) {
  const [darkMode, setDarkMode] = useState(true); // dark by default

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-lg py-4'
          : 'py-6'
      }`}
    >
      <div className="flex items-center justify-between px-8 max-w-7xl mx-auto">
        <span className="font-bold text-xl text-white dark:text-slate-950">
          boipelo.
        </span>

        <div className="flex items-center space-x-6">
          {['home', 'about', 'projects', 'services'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-slate-950 transition-colors capitalize"
            >
              {item}
            </button>
          ))}

          {/* Dark/Light toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-800 dark:bg-slate-200 hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
