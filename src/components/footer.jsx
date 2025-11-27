import React from 'react'
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>My Portfolio</h1>
      <p>© 2024 Boipelo Ngakane. Built with passion and lots of coffee ☕</p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Designed & Developed by Boipelo Ngakane</p>
    </footer>
  );
}