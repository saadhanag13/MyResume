"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const tagRef = useRef<HTMLSpanElement>(null);
  const roles = ["GenAI Engineer", "Data Scientist", "Full-Stack Developer"];
  let idx = 0;

  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;
    const cycle = () => {
      el.style.opacity = "0";
      setTimeout(() => {
        el.textContent = roles[idx % roles.length];
        idx++;
        el.style.opacity = "1";
      }, 300);
    };
    const interval = setInterval(cycle, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section-wrapper responsive-grid-2" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
      <div className="blob" style={{ width: 600, height: 600, background: "var(--violet)", top: -100, left: -200 }} />
      <div className="blob" style={{ width: 400, height: 400, background: "var(--cyan)", top: 200, right: -100 }} />
      <div className="blob" style={{ width: 300, height: 300, background: "var(--coral)", bottom: 0, left: "40%" }} />

      {/* Left */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "var(--mint)", border: "1px solid rgba(0,255,195,0.25)", padding: "0.35rem 0.9rem", borderRadius: "100px", marginBottom: "2rem", background: "rgba(0,255,195,0.05)" }}>
          <span style={{ animation: "pulse 2s infinite" }}>●</span> Available for freelance
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3.5rem,6vw,5.5rem)", lineHeight: 1, marginBottom: "0.5rem" }}>
          <span style={{ display: "block", color: "var(--white)" }}>I'm</span>
          <span style={{ display: "block", background: "linear-gradient(135deg,var(--cyan) 0%,var(--violet) 50%,var(--coral) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Saadhana.
          </span>
        </h1>

        <p style={{ fontSize: "1.1rem", color: "var(--muted)", margin: "1.5rem 0 2.5rem", maxWidth: 440, lineHeight: 1.7 }}>
          <strong style={{ color: "var(--white)" }}>Freelance{" "}
            <span ref={tagRef} style={{ color: "var(--cyan)", transition: "opacity 0.3s" }}>AI/ML Engineer</span>
          </strong>{" "}
          based in Chennai, India. Turning heavy-duty data into sleek, intelligent systems — because production-grade AI doesn't have to be boring.
        </p>

        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <a href="#contact" className="btn-primary">
            Hire Me <span className="arrow">→</span>
          </a>
          <a href="#projects" className="btn-outline">
            <span style={{ fontSize: "1.1rem" }}>✨</span> View Projects
          </a>
        </div>

        <div style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {[
            ["5+", "Years in Tech"], 
            ["6+", "Projects Shipped"], 
            ["6", "Services Offered"]
          ].map(([n,l]) => (
            <div key={n}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, background: "linear-gradient(135deg,var(--cyan),var(--mint))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{n}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.2rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — cards */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ background: "linear-gradient(135deg,rgba(0,229,255,0.05),rgba(168,85,247,0.05))", border: "1px solid rgba(0,229,255,0.2)", borderRadius: 20, padding: "1.5rem", backdropFilter: "blur(10px)" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>// current role</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>AI Software Engineer</div>
          <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>MLAI Digital Pvt Ltd · Oct 2025 – Present</div>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["Azure", "Databricks", "Microsoft Fabric","YOLO","React","Document AI"].map(t => <span key={t} style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: 100, border: "1px solid rgba(0,229,255,0.2)", color: "var(--cyan)" }}>{t}</span>)}
          </div>
        </div>

        <div className="responsive-grid-2" style={{ gap: "1rem" }}>
          {[
            { icon: "🎓", title: "MSc Data Science", sub: "University of Leeds" },
            { icon: "📍", title: "Chennai, India", sub: "Remote-friendly · UK" },
            { icon: "🌐", title: "github.com", sub: "saadhanag13", link: "https://github.com/saadhanag13" },
            { icon: "✉️", title: "Email open", sub: "saadhana.ganesh13@gmail.com", link: "#contact" },
          ].map(c => {
            const innerContent = (
              <>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{c.icon}</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "var(--white)", transition: "color 0.2s" }}>{c.title}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.2rem" }}>{c.sub}</div>
              </>
            );

            const cardStyle = {
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: "1.2rem",
              textDecoration: "none", color: "inherit", display: "block", cursor: c.link ? "pointer" : "default", transition: "all 0.2s"
            };

            const isInternal = c.link?.startsWith("#");

            return c.link ? (
              <a 
                key={c.title} 
                href={c.link} 
                target={isInternal ? undefined : "_blank"} 
                rel={isInternal ? undefined : "noopener noreferrer"} 
                style={cardStyle}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(0,229,255,0.08)";
                  el.style.borderColor = "rgba(0,229,255,0.2)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.09)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {innerContent}
              </a>
            ) : (
              <div key={c.title} style={cardStyle}>
                {innerContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
