import React from 'react'
import { skillSections } from '../data/skills'


export default function Skills() {
return (
<section id="skills">
<h2><span className="gradient-text">Skills & Technologies</span></h2>
<p className="section-subtitle">A comprehensive toolkit for modern development</p>


<div className="skills-grid">
{skillSections.map((section, idx) => (
<div className="skill-card" key={idx}>
<h3>{section.title}</h3>
<ul>
{section.skills.map((s, i) => <li key={i}>{s}</li>)}
</ul>
</div>
))}
</div>
</section>
)
}