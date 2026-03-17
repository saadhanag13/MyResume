"use client";
import { useState } from "react";

const commits = [
  {
    hash: "a4f1e29",
    type: "feat",
    branch: "experience",
    date: "Oct 2025 – Present",
    title: "AI Software Engineer @ MLAI Digital Pvt Ltd",
    body: [
      "KYC automation with Azure Document Intelligence & Cognitive Services",
      "YOLO-based object detection via serverless Azure Functions",
      "Chatbot for mutual fund advisory with Azure Speech + React",
      "ARM template IaC + cloud migration for scalable inference pipelines",
    ],
    color: "var(--cyan)",
    tag: "current",
  },
  {
    hash: "c2b903d",
    type: "fix",
    branch: "experience",
    date: "Mar 2025 – May 2025",
    title: "Data Science Consultant @ Homeonfilm.com",
    body: [
      "Migrated legacy video dashboard — boosted visibility & engagement",
      "Led migration to Python, Node.js, API v2 → latency reduced by 30%",
      "Cloud VM deployment for real-time streaming & scalable inference",
    ],
    color: "var(--mint)",
    tag: "contract",
  },
  {
    hash: "9d7a44c",
    type: "feat",
    branch: "education",
    date: "Sept 2023 – Sept 2024",
    title: "MSc Data Science and Analytics · University of Leeds, UK",
    body: [
      "Machine learning, statistical modeling, real-world data applications",
      "NLP, predictive analytics, and data-driven decision making",
      "Dissertation: dimensionality reduction in multivariate analysis",
    ],
    color: "var(--violet)",
    tag: "leeds",
  },
  {
    hash: "3f8c12a",
    type: "init",
    branch: "education",
    date: "Aug 2019 – Apr 2023",
    title: "BE in Computer Science · Chennai Institute of Technology",
    body: [
      "Algorithms, data structures, software development & system design",
      "Programming, database systems, web technologies",
      "Research at Centre for Non-Linear Dynamics",
    ],
    color: "var(--gold)",
    tag: "cit",
  },
];

export default function ResumeSection() {
  const [expanded, setExpanded] = useState<string | null>("a4f1e29");

  return (
    <section id="resume" className="section-wrapper">
      <div className="blob" style={{ width: 400, height: 400, background: "var(--cyan)", bottom: -100, left: -100, opacity: 0.07 }} />
      <div className="grid-bg" style={{ opacity: 0.5 }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">// 03 · experience &amp; education</div>
          <h2 className="section-title">My <span className="accent">Resume</span></h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>A CSV of achievements, a JSON of dreams.</p>
        </div>

        {/* Terminal window */}
        <div style={{ background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden" }}>
          {/* Title bar */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <span style={{ marginLeft: "1rem", fontFamily: "'Space Mono',monospace", fontSize: "0.85rem", color: "var(--muted)" }}>saadhana@portfolio ~ git log --author=&quot;Saadhana&quot; --oneline</span>
          </div>

          {/* Commits list */}
          <div style={{ padding: "1.5rem" }}>
            {commits.map((c, i) => (
              <div key={c.hash} style={{ marginBottom: i < commits.length - 1 ? "0.25rem" : 0 }}>
                {/* Commit header — click to expand */}
                <button
                  suppressHydrationWarning
                  onClick={() => setExpanded(expanded === c.hash ? null : c.hash)}
                  style={{
                    width: "100%", textAlign: "left", border: "none", cursor: "pointer",
                    display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.8rem", padding: "0.7rem 0.8rem",
                    borderRadius: 10,
                    background: expanded === c.hash ? "rgba(255,255,255,0.04)" : "transparent",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => { if (expanded !== c.hash) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
                  onMouseLeave={e => { if (expanded !== c.hash) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {/* Hash */}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.85rem", color: c.color, minWidth: 80, flexShrink: 0 }}>{c.hash}</span>
                  {/* Type badge */}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", padding: "0.15rem 0.5rem", borderRadius: 6, border: `1px solid ${c.color}44`, color: c.color, flexShrink: 0 }}>{c.type}</span>
                  {/* Branch */}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", color: "var(--muted)", flexShrink: 0 }}>({c.branch})</span>
                  {/* Title */}
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--white)", flex: 1 }}>{c.title}</span>
                  {/* Date */}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.8rem", color: "var(--muted)", flexShrink: 0 }}>{c.date}</span>
                  {/* Tag */}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", padding: "0.1rem 0.45rem", borderRadius: 4, background: `${c.color}18`, color: c.color, flexShrink: 0 }}>#{c.tag}</span>
                  {/* Chevron */}
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "transform 0.2s", transform: expanded === c.hash ? "rotate(90deg)" : "rotate(0)" }}>›</span>
                </button>

                {/* Expanded body */}
                {expanded === c.hash && (
                  <div style={{ paddingLeft: "5.5rem", paddingRight: "1rem", paddingBottom: "1rem" }}>
                    <div style={{ borderLeft: `2px solid ${c.color}44`, paddingLeft: "1rem" }}>
                      {c.body.map((line, j) => (
                        <div key={j} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.4rem", fontSize: "0.95rem", color: "var(--muted)" }}>
                          <span style={{ color: c.color, flexShrink: 0 }}>+</span>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Prompt */}
            <div style={{ marginTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem", fontFamily: "'Space Mono',monospace", fontSize: "0.9rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ color: "var(--mint)" }}>$</span>
              <span>4 commits, 0 regrets</span>
              <span style={{ display: "inline-block", width: 8, height: 14, background: "var(--cyan)", marginLeft: 4, animation: "pulse 1s infinite" }} />
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <style>{`
            .btn-terminal {
              position: relative;
              display: inline-flex;
              align-items: center;
              gap: 0.75rem;
              padding: 0.85rem 2.5rem;
              background: rgba(0, 229, 255, 0.05);
              border: 1px solid rgba(0, 229, 255, 0.3);
              color: var(--cyan);
              font-family: 'Space Mono', monospace;
              font-size: 0.85rem;
              font-weight: 700;
              letter-spacing: 0.1em;
              text-decoration: none;
              overflow: hidden;
              transition: all 0.3s ease;
              box-shadow: 0 0 15px rgba(0, 229, 255, 0.1);
              backdrop-filter: blur(5px);
            }
            .btn-terminal::before, .btn-terminal::after {
              content: '';
              position: absolute;
              width: 12px;
              height: 12px;
              border: 2px solid var(--cyan);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .btn-terminal::before {
              top: -2px; left: -2px;
              border-right: none; border-bottom: none;
            }
            .btn-terminal::after {
              bottom: -2px; right: -2px;
              border-left: none; border-top: none;
            }
            .btn-terminal:hover {
              background: rgba(0, 229, 255, 0.15);
              box-shadow: 0 0 25px rgba(0, 229, 255, 0.3);
              color: #fff;
              transform: translateY(-2px);
            }
            .btn-terminal:hover::before, .btn-terminal:hover::after {
              width: 100%; height: 100%;
              opacity: 0.2;
            }
            .btn-terminal .cursor {
              display: inline-block;
              width: 8px;
              height: 15px;
              background: var(--cyan);
              animation: blink 1s step-end infinite;
            }
            .btn-terminal:hover .cursor {
              background: #fff;
            }
          `}</style>
          
          <a href="https://drive.google.com/file/d/1iElOPYRIughA5o6b-mSSQUsexvHs-1lc/view" target="_blank" rel="noopener noreferrer" className="btn-terminal">
            <span style={{ color: "var(--muted)", fontWeight: 400 }}>$</span> sudo get full_cv.pdf <span className="cursor" />
          </a>
        </div>
      </div>
    </section>
  );
}
