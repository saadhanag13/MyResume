"use client";
import { useEffect, useRef, useState } from "react";

const facts = [
  { label: "Currently", value: "AI Software Engineer @ MLAI Digital" },
  { label: "Education", value: "MSc Data Science · BE Computer Science" },
  { label: "Based in",  value: "Chennai, India · Remote worldwide" },
  { label: "Email",     value: "saadhana.ganesh13@gmail.com" },
  { label: "GitHub",    value: "saadhanag13" },
  { label: "Focus",     value: "AI/ML Pipelines · GenAI · Full-Stack · Cloud AI" },
];

const clearances = [
  { level: "CLEARED", domain: "Neural Networks", color: "var(--mint)" },
  { level: "CLEARED", domain: "Full-Stack Dev",  color: "var(--cyan)" },
  { level: "CLEARED", domain: "Azure Cloud",     color: "var(--violet)" },
  { level: "ACTIVE",  domain: "Chaos Energy",    color: "var(--coral)" },
];

export default function AboutSection() {
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [activeTab, setActiveTab] = useState('bio');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("fade-in-up"); });
    }, { threshold: 0.2 });
    if (bioRef.current) observer.observe(bioRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-wrapper" style={{ background: "var(--navy2)" }}>
      <div className="blob" style={{ width: 600, height: 600, background: "var(--violet)", top: -200, right: -200, opacity: 0.08 }} />
      <div className="grid-bg" />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">// 02 · profile</div>
          <h2 className="section-title">Initialize <span className="accent">Identity</span></h2>
        </div>

        <div className="contact-grid" style={{ gap: "4rem" }}>

          {/* ── Left: Interactive Hologram Card ── */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div style={{
              position: "relative", borderRadius: 24, overflow: "hidden",
              border: "1px solid rgba(0,229,255,0.2)", marginBottom: "1.5rem",
              background: "linear-gradient(180deg, rgba(10,14,26,0.8) 0%, rgba(10,14,26,0.95) 100%)",
              backdropFilter: "blur(12px)",
              minHeight: 420, display: "flex", flexDirection: "column",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(0,229,255,0.05)"
            }}>
              
              {/* Header Bar */}
              <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid rgba(0,229,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,229,255,0.03)" }}>
                 <div style={{ display: "flex", gap: "0.5rem" }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--coral)", opacity: 0.8 }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--gold)", opacity: 0.8 }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--mint)", opacity: 0.8 }} />
                 </div>
                 <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.1em" }}>SYS.ID_OVR</span>
              </div>

              {/* Photo Area with Scanline Effect */}
              <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <style>{`
                  .scanline {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(to right, transparent, var(--cyan), transparent);
                    opacity: 0.5;
                    animation: scan 4s linear infinite;
                    z-index: 5;
                  }
                  .holo-glitch {
                    position: absolute;
                    inset: 0;
                    background: url('./img/photo.png') center/cover;
                    mix-blend-mode: screen;
                    opacity: 0;
                    transition: opacity 0.3s;
                    filter: hue-rotate(90deg) saturate(200%);
                    z-index: 2;
                  }
                  .card-container:hover .holo-glitch {
                    opacity: 0.15;
                    animation: glitch-anim 0.2s steps(2) infinite;
                  }
                  @keyframes scan {
                    0% { top: -10%; }
                    100% { top: 110%; }
                  }
                  @keyframes glitch-anim {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) }
                    40% { transform: translate(-2px, -2px) }
                    60% { transform: translate(2px, 2px) }
                    80% { transform: translate(2px, -2px) }
                    100% { transform: translate(0) }
                  }
                `}</style>
                
                <div className="card-container" style={{ position: "absolute", inset: 0, padding: "2rem" }}>
                  <img
                    src="./img/photo.png"
                    alt="Saadhana"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 1, filter: "brightness(1) contrast(1)", opacity: 0.9 }}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                  <div className="holo-glitch"></div>
                  <div className="scanline" style={{ opacity: 0.2 }}></div>
                  
                  {/* Fallback pattern if no image */}
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 0%, var(--navy2) 100%)", zIndex: 2 }}></div>
                  
                  {/* Data overlay */}
                  <div style={{ position: "absolute", zIndex: 3, bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%" }}>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "4rem", background: "linear-gradient(135deg, var(--white), var(--cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.3, display: "block", textShadow: "0 0 30px rgba(0,229,255,0.1)", marginBottom: "-0.5rem" }}>SG</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", color: "var(--cyan)", fontSize: "0.75rem", letterSpacing: "0.2em", background: "rgba(10,14,26,0.6)", padding: "0.2rem 1rem", borderRadius: 4, backdropFilter: "blur(2px)", border: "1px solid rgba(0,229,255,0.1)", opacity: 0.8 }}>SAADHANA GANESH</span>
                  </div>

                  {/* Corner brackets */}
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", width: 20, height: 20, borderTop: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)", zIndex: 4, opacity: 0.5 }}></div>
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", width: 20, height: 20, borderTop: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)", zIndex: 4, opacity: 0.5 }}></div>
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", width: 20, height: 20, borderBottom: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)", zIndex: 4, opacity: 0.5 }}></div>
                  <div style={{ position: "absolute", bottom: "1rem", right: "1rem", width: 20, height: 20, borderBottom: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)", zIndex: 4, opacity: 0.5 }}></div>
                </div>
              </div>

              {/* Status Footer */}
              <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid rgba(0,229,255,0.1)", background: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "'Space Mono',monospace", color: "var(--muted)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--mint)", animation: "pulse 2s infinite" }}></span> UPLINK: ONLINE</div>
                 <div>LOC: CHENNAI_IND</div>
              </div>
            </div>

            {/* Matrix Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.8rem" }}>
              {clearances.map((c, i) => (
                <div key={c.domain} style={{ 
                  background: "rgba(255,255,255,0.02)", 
                  border: `1px solid ${c.color}22`, 
                  borderLeft: `3px solid ${c.color}`,
                  borderRadius: 8, 
                  padding: "0.8rem 1rem",
                  transition: "all 0.3s ease",
                  cursor: "crosshair"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = `${c.color}11`;
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
                >
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", color: c.color, letterSpacing: "0.12em", marginBottom: "0.3rem", display: "flex", justifyContent: "space-between" }}>
                    <span>[{c.level}]</span>
                    <span>{`0x${(i+1)*9}A`}</span>
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--white)", fontFamily: "'Syne', sans-serif" }}>{c.domain}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Narrative & Data Logs ── */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            
            {/* Tech Tabs */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
              {['bio', 'specs'].map(tab => (
                <button 
                  suppressHydrationWarning
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Space Mono', monospace", fontSize: "0.85rem",
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: activeTab === tab ? "var(--cyan)" : "var(--muted)",
                    padding: "0.5rem 1rem", position: "relative",
                    transition: "color 0.3s ease"
                  }}
                >
                  {tab === 'bio' ? 'SYS.NARRATIVE' : 'SYS.DATALOGS'}
                  {activeTab === tab && (
                    <div style={{ position: "absolute", bottom: "-0.5rem", left: 0, width: "100%", height: 2, background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: "350px" }}>
              {activeTab === 'bio' ? (
                <div style={{ animation: "fadeIn 0.5s ease forwards" }}>
                  <div style={{ 
                    fontFamily: "'Space Mono', monospace", 
                    fontSize: "0.8rem", 
                    color: "var(--violet)", 
                    marginBottom: "1.5rem",
                    display: "flex", alignItems: "center", gap: "0.5rem"
                  }}>
                    <span>&gt;</span> <span style={{ opacity: 0.8 }}>Executing biography.sh...</span>
                  </div>
                  
                  <p ref={bioRef} style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif" }}>
                    I am an <strong style={{ color: "var(--white)", borderBottom: "1px solid var(--mint)" }}>AI Software Engineer</strong> operating at the nexus of predictive modelling and full-stack systems architecture. Armed with an MSc in Data Science from the University of Leeds, I specialise in translating theoretical mathematics into production-grade infrastructure.
                  </p>
                  
                  <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif", borderLeft: "2px solid var(--violet)", paddingLeft: "1.5rem", background: "linear-gradient(90deg, rgba(168,85,247,0.05), transparent)" }}>
                    Currently architecting multi-modal AI pipelines and cognitive services at MLAI Digital. I build systems that are not just highly-available and secure, but intuitively designed to solve complex enterprise bottlenecks. From developing computer vision models to orchestrating cloud-native backends, I thrive on the friction between raw data and actionable intelligence.
                  </p>
                  
                  <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "'DM Sans', sans-serif" }}>
                    When detached from the terminal, I engage in <strong style={{ color: "var(--cyan)" }}>visual storytelling through photography</strong>, author technical research, and continuously prototype ideas that challenge conventional engineering paradigms.
                  </p>
                </div>
              ) : (
                <div style={{ animation: "fadeIn 0.5s ease forwards" }}>
                  {/* Hexagon tech grid or list */}
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, background: "rgba(0,0,0,0.2)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
                    {facts.map((f, index) => (
                      <li key={f.label} style={{ 
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "1.2rem 1.5rem", 
                        borderBottom: index < facts.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", 
                        fontSize: "0.9rem",
                        transition: "background 0.2s ease"
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                      >
                        <span style={{ color: "var(--muted)", fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "0.8rem" }}>
                          <span style={{ color: "var(--violet)" }}>{`0${index + 1}`}</span> {f.label}
                        </span>
                        <span style={{ color: "var(--white)", fontWeight: 500, textAlign: "right", maxWidth: "65%", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{f.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <style>{`
                .btn-cyber {
                  position: relative;
                  padding: 0.85rem 1.8rem;
                  background: rgba(0, 229, 255, 0.05);
                  color: var(--cyan);
                  font-family: 'Space Mono', monospace;
                  font-size: 0.82rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                  border: 1px solid rgba(0, 229, 255, 0.3);
                  border-radius: 4px;
                  text-decoration: none;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.8rem;
                  overflow: hidden;
                  transition: all 0.3s ease;
                  box-shadow: 0 0 15px rgba(0, 229, 255, 0.1);
                  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
                }
                .btn-cyber::before {
                  content: '';
                  position: absolute;
                  top: 0; left: -100%;
                  width: 100%; height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.2), transparent);
                  transition: left 0.5s ease;
                }
                .btn-cyber:hover {
                  background: rgba(0, 229, 255, 0.15);
                  border-color: var(--cyan);
                  box-shadow: 0 0 25px rgba(0, 229, 255, 0.3);
                  color: #fff;
                  transform: translateY(-2px);
                }
                .btn-cyber:hover::before {
                  left: 100%;
                }
                .btn-cyber svg {
                  transition: transform 0.3s ease;
                }
                .btn-cyber:hover svg {
                  transform: translateY(2px);
                }

                .btn-ghost {
                  position: relative;
                  padding: 0.85rem 2rem;
                  background: transparent;
                  color: var(--muted);
                  font-family: 'Syne', sans-serif;
                  font-weight: 700;
                  font-size: 0.95rem;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  border-radius: 100px;
                  text-decoration: none;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.6rem;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .btn-ghost:hover {
                  color: var(--white);
                  border-color: var(--violet);
                  background: rgba(168, 85, 247, 0.1);
                  transform: translateX(4px);
                }
                .btn-ghost .arrow {
                  color: var(--violet);
                  transition: transform 0.3s ease;
                }
                .btn-ghost:hover .arrow {
                  transform: translateX(4px);
                }
              `}</style>
              
              <a href="https://drive.google.com/file/d/1iElOPYRIughA5o6b-mSSQUsexvHs-1lc/view" target="_blank" rel="noopener noreferrer" className="btn-cyber">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                fetch_CV.exe
              </a>
              
              <a href="#contact" className="btn-ghost">
                Commence Protocol <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
