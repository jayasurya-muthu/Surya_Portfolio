import { useState } from "react";
import "./Navbar.css";

const links = [
  { id: "home",     label: "Home" },
  { id: "skills",   label: "Skills" },
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];

export default function Navbar({ activePage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
        {/* <ThemeToggle /> */}
      <button className="nav-logo" onClick={() => handleNav("home")}>
        <span className="logo-text">jayasurya.M</span>
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <button
            key={link.id}
            className={`nav-link ${activePage === link.id ? "active" : ""}`}
            onClick={() => handleNav(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </header>
  );
}

