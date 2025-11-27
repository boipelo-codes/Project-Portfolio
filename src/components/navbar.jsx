import React from 'react'
import ThemeToggle from './ThemeToggle';



export default function Navbar() {
return (
<nav>
<div className="logo">boipelo</div>
<ul>
<li><a href="#home">home</a></li>
<li><a href="#about">about</a></li>
<li><a href="#skills">skills</a></li>
<li><a href="#projects">projects</a></li>
<li><a href="#contact">contact</a></li>
</ul>
<ThemeToggle />
</nav>
)
}