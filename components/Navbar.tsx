"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Resume",   href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let cur = "home";
      sections.forEach((s) => { if (window.scrollY >= (s as HTMLElement).offsetTop - 120) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav-container" style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      background: scrolled ? "rgba(8,12,26,0.85)" : "rgba(8,12,26,0.5)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      transition: "all 0.3s",
    }}>
      <div className="nav-logo" style={{ fontFamily: "'Space Mono', monospace", fontSize: "1rem", color: "var(--cyan)", letterSpacing: "0.05em" }}>
        saadhana<span style={{ color: "var(--violet)" }}>.dev</span>
      </div>

      <ul className="nav-menu">
        {links.map((l) => {
          const isActive = active === l.href.replace("#", "");
          return (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500,
                color: isActive ? "var(--cyan)" : "var(--muted)",
                textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
                borderBottom: isActive ? "1px solid var(--cyan)" : "none",
                paddingBottom: isActive ? "2px" : "0",
                transition: "color 0.2s",
              }}>
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>

      <a href="#contact" className="nav-btn" style={{
        padding: "0.5rem 1.4rem", border: "1px solid var(--cyan)", borderRadius: "100px",
        color: "var(--cyan)", fontSize: "0.82rem", textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--cyan)"; (e.currentTarget as HTMLElement).style.color = "var(--navy)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; }}
      >
        Hire Me
      </a>
    </nav>
  );
}
