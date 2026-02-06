
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="Left">
          <Link to="/" className="logo-link">
            <span>Developer</span> Pratibha
          </Link>
        </div>

        {/* HAMBURGER ICON (Visible on Mobile) */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className={`right ${isOpen ? "mobile-active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
