import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="header-title">Syed Akbar Ali</div>

      {/* Desktop Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
        <li><a href="#interests" onClick={()=>setMenuOpen(false)}>Interest</a></li>
        <li><a href="#resume" onClick={()=>setMenuOpen(false)}>Resume</a></li>
        <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>

      </ul>

      {/* Mobile Button */}
      <div className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30}/> : <Menu size={30}/>}
      </div>

    </nav>
  )
}

export default Navbar