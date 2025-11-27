import React from 'react'
import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <header className={styles.hero}>
        <h1 className={styles.title}>My Portfolio</h1>
      </header>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="tech-badges">
            <span className="badge">react</span>
            <span className="badge">node.js</span>
            <span className="badge">python</span>
            <span className="badge">aws</span>
            <span className="badge">docker</span>
          </div>
          <h1>
            Hello, I'm <br />
            <span className="gradient-text">Boipelo.</span>
          </h1>
          <p>Junior Full-Stack Developer & DevOps Engineer with a passion for building innovative AI-powered solutions and cloud-native applications.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="scroll-indicator">Scroll to discover ↓</div>
      </section>
    </>
  );
}