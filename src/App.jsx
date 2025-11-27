import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Skills from './components/skills'
import Contact from './components/contactform'
import Footer from './components/footer'
import About from './components/About'
import Projects from './components/projects'
import ThemeToggle from './components/ThemeToggle.jsx'
import useScrollToSection from './hooks/useScrollToSection.js'
import './styles/global.css'



export default function App() {
// attach observer when app mounts (will observe elements by selector)



return (
<>
<Navbar />
<main>
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</main>
<Footer />
</>
)
}