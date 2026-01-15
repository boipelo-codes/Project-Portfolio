import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "PomoTask",
      description: "AI-powered Pomodoro timer with intelligent task management. Features smart task breakdowns, time estimates, and motivational quotes.",
      tech: ["React", "Node.js", "Express", "AI/ML", "Vite"],
      github: "https://github.com/itsleonbro/PomoTask",
      demo: "https://pomo-task-azure.vercel.app/"
    },
    {
      title: "RetailPulse",
      description: "Full-stack data engineering platform with ETL pipeline. Processes retail data with Python, PostgreSQL, and Azure cloud integration.",
      tech: ["Python", "PostgreSQL", "Azure", "Streamlit", "ETL"],
      github: "https://github.com/MmelIGaba/RetailPulse",
      demo: "https://retailpulse-04.streamlit.app/"
    },
    {
      title: "PrepCheck",
      description: "AI-powered work readiness screening platform for professional preparedness assessment.",
      tech: ["AI/ML", "React", "Node.js", "Cloud"],
      github: "https://github.com/MmelIGaba/PrepCheck",
      demo: "https://prepcheck-1.onrender.com/"
    },
    {
      title: "Power Apps Solution",
      description: "Enterprise low-code application built with Microsoft Power Apps for streamlined business processes and workflow automation.",
      tech: ["Power Apps", "Power Automate", "SharePoint", "Low-Code"],
      demo: "https://apps.powerapps.com/play/e/default-a3f14f21-237f-4028-b978-425eb768a716/a/ff81b365-5ea2-4816-bd8e-3e723680ebc4?tenantId=a3f14f21-237f-4028-b978-425eb768a716"
    },
    {
      title: "Secure AWS VPC Infrastructure Deployment",
      description: "Demonstrating the design and implementation of a secure AWS Virtual Private Cloud using a tiered architecture.",
      tech: ["AWS", "VPC", "Tiered Architecture", "Security"],
      github: "https://github.com/boipelo-codes/secure-aws-vpc-project"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 animate-fadeIn">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-900/50 dark:bg-slate-200/20 border border-slate-800 dark:border-slate-300 rounded-xl hover:border-indigo-500/50 transition-all hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400">{project.title}</h3>
              <p className="text-slate-400 dark:text-slate-700 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-800/50 dark:bg-slate-200/20 text-xs rounded text-slate-300 dark:text-slate-950">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-700 hover:text-white dark:hover:text-slate-950 transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-700 hover:text-white dark:hover:text-slate-950 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

