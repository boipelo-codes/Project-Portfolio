import React from "react";

export default function About() {
  return (
    <div className="w-full px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        About Me
      </h2>

      <div className="max-w-3xl text-gray-700 dark:text-gray-300 space-y-4 mb-10">
        <p>
          I'm a Full Stack and DevOps Engineer specializing in building scalable
          web applications and cloud infrastructure. With expertise in modern
          frameworks and cloud technologies, I create efficient solutions that
          drive business growth.
        </p>
        <p>
          My passion lies in combining elegant frontend experiences with robust
          backend systems, all orchestrated through automated DevOps pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries({
          Frontend: ["React", "TypeScript", "Tailwind CSS"],
          Backend: ["Node.js", "Python", "Express"],
          DevOps: ["AWS", "Azure", "Docker"],
          Database: ["PostgreSQL", "MongoDB"],
        }).map(([category, items]) => (
          <div
            key={category}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {category}
            </h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              {items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
