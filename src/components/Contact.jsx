import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="contact-title text-4xl font-bold mb-4">
          Let's Connect
        </h2>

        <p className="contact-description text-slate-400 mb-8">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="flex items-center justify-center gap-6 contact-links">
          <a
            href="mailto:your-email@example.com"
            className="contact-link flex gap-2 items-center px-4 py-2 border border-slate-700 rounded hover:border-slate-500 hover:text-indigo-400 transition"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link flex gap-2 items-center px-4 py-2 border border-slate-700 rounded hover:border-slate-500 hover:text-indigo-400 transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link flex gap-2 items-center px-4 py-2 border border-slate-700 rounded hover:border-slate-500 hover:text-indigo-400 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
