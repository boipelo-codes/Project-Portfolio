import React from 'react'
import { projects } from '../data/projects'


export default function Projects() {
return (
<section id="projects">
<h2><span className="gradient-text">Featured Projects</span></h2>
<p className="section-subtitle">Showcasing end-to-end technical capabilities</p>


<div className="projects-grid">
{projects.map((proj, idx) => (
<div className="project-card" key={idx}>
<div className="project-header">
<h3>{proj.name}</h3>
<p className="project-role">{proj.role}</p>
</div>


<div className="project-content">
<p>{proj.description}</p>


<div className="tech-stack">
{proj.tech.map((t, i) => <span className="tech-tag" key={i}>{t}</span>)}
</div>


<div className="project-links">
{proj.links.map((link, i) => (
<a href={link.url} target="_blank" rel="noreferrer" className="project-link" key={i}>{link.label}</a>
))}
</div>
</div>
</div>
))}
</div>
</section>
)
}