"use client";
import { useState, useEffect } from "react";

type Project = {
  id: string;
  num: string;
  name: string;
  kicker: string;
  tags: string[];
  desc: string;
  link: string;
  linkLabel: string;
  gradient: string;
  accent: string;
  emoji?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: "RAG",
    num: "01",
    name: "AutoIntel- AI Analytics Platform",
    kicker: "AI/ML · Live Deploy",
    tags: ["TypeScript", "FastAPI", "Next.js", "scikit-learn", "FAISS", "sentence-transformers", "LLaMA 3.1", "HuggingFace Inference API", "Docker", "Nginx", "Vercel"],
    desc: "An end-to-end AutoML and RAG analytics platform powered by LLaMA 3.1. Features drag-and-drop CSV data ingestion, automated machine learning pipelines, and vector-search-driven intelligent insights. Built natively on a Next.js front-end with a containerised FastAPI backend.",
    link: "https://auto-intel-iota.vercel.app/dashboard",
    linkLabel: "View Live App",
    gradient: "linear-gradient(135deg,#241804,#120902)",
    accent: "var(--gold)",
    image: "/img/project-1.jpg",
  },
  {
    id: "weather",
    num: "02",
    name: "AI Weather Forecasting App",
    kicker: "ML Pipeline · Live Deploy",
    tags: ["TensorFlow", "Keras", "FastAPI", "Streamlit", "Open-Meteo", "Render"],
    desc: "End-to-end forecasting pipeline — LSTM model trained on Open-Meteo data, served via a FastAPI backend, visualised in a Streamlit frontend, and fully deployed on Render. From raw atmospheric data to interactive chart in one shot.",
    link: "https://weather-frontend-4pj4.onrender.com/",
    linkLabel: "View Live App",
    gradient: "linear-gradient(135deg,#0a2540,#1a0a3a)",
    accent: "var(--cyan)",
    image: "/img/project-2.jpg",
  },
  {
    id: "music",
    num: "03",
    name: "LSTM Music Generation",
    kicker: "Generative AI · RNN",
    tags: ["LSTM", "Keras", "TensorFlow", "Python"],
    desc: "A generative music model trained on MIDI sequences using a multi-layer LSTM recurrent neural network. Outputs novel musical phrases that capture harmonic patterns from the training corpus.",
    link: "https://github.com/saadhanag13/Music-Generation-LSTM",
    linkLabel: "View on GitHub",
    gradient: "linear-gradient(135deg,#0d2137,#1a0030)",
    accent: "var(--violet)",
    image: "/img/project-3.jpg",
  },
  {
    id: "sentiment",
    num: "04",
    name: "Sentiment Analysis (BERT)",
    kicker: "NLP · Transformers",
    tags: ["BERT", "PyTorch", "HuggingFace", "Python"],
    desc: "Text classification pipeline using a fine-tuned BERT transformer model from Hugging Face. Reads the emotional room at scale — positive, negative, neutral, with high F1 across benchmark datasets.",
    link: "https://github.com/saadhanag13/Sentiment_Analysis",
    linkLabel: "View on GitHub",
    gradient: "linear-gradient(135deg,#1a0d2e,#0a2030)",
    accent: "var(--coral)",
    image: "/img/project-4.jpg",
  },
  {
    id: "classifier",
    num: "05",
    name: "Deep Learning Image Classifier",
    kicker: "CNN · Computer Vision",
    tags: ["CNN", "TensorFlow", "Keras", "Python"],
    desc: "Convolutional neural network for multi-class image classification. Custom architecture with batch normalisation and dropout, trained from scratch and evaluated against standard benchmarks.",
    link: "https://github.com/saadhanag13/Deep-Learning-Based-Image-Classifier",
    linkLabel: "View on GitHub",
    gradient: "linear-gradient(135deg,#001a1a,#1a0020)",
    accent: "var(--mint)",
    image: "/img/project-5.jpg",
  },
  // {
  //   id: "rehab",
  //   num: "05",
  //   name: "Andhaadhi Rehab Website",
  //   kicker: "Full-Stack · Live Site",
  //   tags: ["ReactJS", "NodeJS", "Tailwind", "Google Sheets API"],
  //   desc: "A full-stack website for a rehabilitation centre — appointment booking, service listings, and a Google Sheets–backed admin panel for non-technical staff. Live, actively used by the organisation.",
  //   link: "https://andhaadhirehab.in/",
  //   linkLabel: "Visit Live Site",
  //   gradient: "linear-gradient(135deg,#0a1a0a,#1a0a00)",
  //   accent: "var(--gold)",
  //   emoji: "🏥",
  // },
  {
    id: "dimred",
    num: "06",
    name: "Dimensionality Reduction Study",
    kicker: "Research · Statistics",
    tags: ["PCA", "K-PCA", "R", "Python", "Multivariate Analysis"],
    desc: "Academic research comparing dimensionality reduction methods — PCA, Kernel PCA, t-SNE, and UMAP — in multivariate analysis contexts. Quantitative benchmarks across real-world datasets.",
    link: "https://github.com/saadhanag13/Dimensionality-Reduction-Methods-in-Modern-Multivariate-Analysis",
    linkLabel: "View on GitHub",
    gradient: "linear-gradient(135deg,#1a1a0a,#0a1a2a)",
    accent: "var(--violet)",
    image: "/img/project-6.jpg",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(projects[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setSelected((current) => {
        const currentIndex = projects.findIndex((p) => p.id === current.id);
        const nextIndex = (currentIndex + 1) % projects.length;
        return projects[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="projects"
      className="section-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid-bg" />
      <div className="blob" style={{ width: 400, height: 400, background: "var(--violet)", top: -100, right: -50, opacity: 0.08 }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">// 06 · portfolio</div>
          <h2 className="section-title">My <span className="accent">Projects</span></h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>From messy data to meaningful dashboards — and beyond.</p>
        </div>

        <div className="contact-grid" style={{ gap: "2rem" }}>

          {/* ── Left: Project list ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {projects.map((p) => {
              const isActive = selected.id === p.id;
              return (
                <div
                  key={p.id}
                  style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
                >
                  <button
                    suppressHydrationWarning
                    onClick={() => setSelected(p)}
                    style={{
                      textAlign: "left", border: "none", cursor: "pointer", width: "100%",
                      padding: "1rem 1.2rem", borderRadius: 14, display: "flex", alignItems: "center", gap: "1rem",
                      background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                      borderLeft: `3px solid ${isActive ? p.accent : "transparent"}`,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={() => { if (!window.matchMedia("(max-width: 768px)").matches) setSelected(p); }}
                  >
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: isActive ? p.accent : "var(--muted)", minWidth: 28 }}>{p.num}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", color: isActive ? "var(--white)" : "var(--muted)", transition: "color 0.2s" }}>{p.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.15rem" }}>{p.kicker}</div>
                    </div>
                    {/* Active Indicator for Mobile Item */}
                    {isActive && (
                      <div className="mobile-show" style={{ width: 12, height: 12, border: `2px solid ${p.accent}33`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 4, height: 4, background: p.accent, borderRadius: "50%" }} />
                      </div>
                    )}
                  </button>

                  {/* Inline Mobile Detail Panel - Only shown if active */}
                  {isActive && (
                    <div className="mobile-show">
                      <div style={{
                        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 24, overflow: "hidden", marginTop: "0.5rem",
                        animation: "fadeUp 0.3s ease both",
                      }}>
                        <div style={{ height: 160, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                          {p.image ? (
                            <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                          ) : (
                            <span style={{ fontSize: "3.5rem" }}>{p.emoji}</span>
                          )}
                          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to top,rgba(8,12,26,0.9),transparent)" }} />
                        </div>
                        <div style={{ padding: "1.5rem" }}>
                          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.8rem" }}>{p.name}</h3>
                          <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>{p.desc}</p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                            {p.tags.slice(0, 6).map(t => (
                              <span key={t} style={{ fontSize: "0.65rem", padding: "0.2rem 0.6rem", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted)" }}>{t}</span>
                            ))}
                          </div>
                          <a href={p.link} target="_blank" rel="noopener noreferrer"
                            style={{
                              display: "inline-block", padding: "0.6rem 1.4rem", background: `${p.accent}18`, border: `1px solid ${p.accent}55`,
                              borderRadius: 100, color: p.accent, textDecoration: "none", fontSize: "0.82rem", fontWeight: 600
                            }}
                          >
                            {p.linkLabel} →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right: Detail panel (Desktop Only) ── */}
          <div className="mobile-hide" style={{ position: "sticky", top: "100px" }}>
            <div key={selected.id} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24, overflow: "hidden",
              animation: "fadeUp 0.3s ease both",
            }}>
              {/* Thumb */}
              <div style={{ height: 220, background: selected.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {selected.image ? (
                  <img src={selected.image} alt={selected.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                ) : (
                  <span style={{ fontSize: "5rem" }}>{selected.emoji}</span>
                )}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to top,rgba(8,12,26,0.9),transparent)" }} />
                <div style={{ position: "absolute", bottom: "1.2rem", left: "1.5rem", fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: selected.accent }}>
                  {selected.kicker}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "2rem" }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.35rem", marginBottom: "0.8rem" }}>{selected.name}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{selected.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.8rem" }}>
                  {selected.tags.map(t => (
                    <span key={t} style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted)" }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.8rem" }}>
                  <a href={selected.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      padding: "0.7rem 1.6rem", background: `${selected.accent}18`, border: `1px solid ${selected.accent}55`,
                      borderRadius: 100, color: selected.accent, textDecoration: "none", fontSize: "0.88rem", fontWeight: 600,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${selected.accent}28`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${selected.accent}18`; }}
                  >
                    {selected.linkLabel} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
