import React from 'react'


export default function Contact() {
return (
<section id="contact">
<h2><span className="gradient-text">Get In Touch</span></h2>
<p className="section-subtitle">Let's build something amazing together</p>


<div className="contact-content">
<p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>I'm currently seeking opportunities as a Junior Full-Stack Developer or DevOps Engineer. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!</p>


<div className="contact-links">
<a href="mailto:boipelongakane20@gmail.com" className="contact-link">📧 <span>boipelongakane20@gmail.com</span></a>
<a href="https://www.linkedin.com/in/boipelo-ngakane-b3b125295" target="_blank" rel="noreferrer" className="contact-link">💼 <span>LinkedIn</span></a>
<a href="https://github.com/boipelo-codes" target="_blank" rel="noreferrer" className="contact-link">💻 <span>GitHub</span></a>
</div>
</div>
</section>
)
}