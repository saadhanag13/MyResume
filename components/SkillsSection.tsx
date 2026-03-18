"use client";
import { useState, useRef, useEffect } from "react";

// Each skill: name, devicon icon key (or null for emoji fallback), emoji, category, funny tooltip
const skills = [
  // Programming Languages
  { name: "Python",       icon: "python",       cat: "lang",  funny: "My love language." },
  { name: "R",            icon: "r",            cat: "lang",  funny: "The one true stats language." },
  { name: "SQL",          icon: "sqldeveloper", emoji: "🗄️", cat: "lang",  funny: "SELECT * FROM chaos." },
  { name: "JavaScript",   icon: "javascript",   cat: "lang",  funny: "Undefined is not a function." },
  { name: "C++",          icon: "cplusplus",    cat: "lang",  funny: "Pointers everywhere." },
  { name: "MATLAB",       icon: "matlab",       cat: "lang",  funny: "Uni trauma, now a skill." },

  // Libraries & Frameworks
  { name: "LangChain",    icon: null, emoji: "🦜", cat: "lib",   funny: "Chaining prompts like a pro." },
  { name: "LangGraph",    icon: null, emoji: "🕸️", cat: "lib",   funny: "Graphing agentic thoughts." },
  { name: "Hugging Face", icon: null, emoji: "🤗", cat: "lib",   funny: "Transformers, assemble." },
  { name: "OpenAI API",   icon: null, emoji: "🧠", cat: "lib",   funny: "GPT to the rescue." },
  { name: "ChromaDB",     icon: null, emoji: "🗃️", cat: "lib",   funny: "Vectorizing all the things." },
  { name: "FAISS",        icon: null, emoji: "🔍", cat: "lib",   funny: "Fast similarity search." },
  { name: "Pandas",       icon: "pandas",       cat: "lib",   funny: "DataFrames = sanity." },
  { name: "NumPy",        icon: "numpy",        cat: "lib",   funny: "Matrices all the way down." },
  { name: "PySpark",      icon: "apachespark",  cat: "lib",   funny: "Big data goes brrr." },
  { name: "MLflow",       icon: null, emoji: "📈", cat: "lib",   funny: "Tracking models since day 1." },
  { name: "Seaborn",      icon: null, emoji: "📊", cat: "lib",   funny: "Making PyPlot visually acceptable." },
  { name: "Matplotlib",   icon: "matplotlib",   cat: "lib",   funny: "Pretty charts, ugly code." },

  // Machine Learning & Data Science
  { name: "LLMs",         icon: null, emoji: "🤖", cat: "ml",    funny: "Large language magic." },
  { name: "Agentic WF",   icon: null, emoji: "⚡", cat: "ml",    funny: "Agents talking to agents." },
  { name: "RAG",          icon: null, emoji: "📚", cat: "ml",    funny: "Because hallucinations are bad." },
  { name: "Deep Learning",icon: null, emoji: "🧠", cat: "ml",    funny: "Gradient descent until convergence." },
  { name: "NLP",          icon: null, emoji: "🗣️", cat: "ml",    funny: "Teaching computers to read." },
  { name: "BERT",         icon: null, emoji: "🔤", cat: "ml",    funny: "Reads context better than most." },
  { name: "LSTM",         icon: null, emoji: "🔁", cat: "ml",    funny: "Remembering what happened." },
  { name: "Sequence Mod.",icon: null, emoji: "⏱️", cat: "ml",    funny: "Time is just another feature." },
  { name: "Prompt Eng",   icon: null, emoji: "✍️", cat: "ml",    funny: "Taking to AI politely (ReAct/CoT)." },
  { name: "Scikit-Learn", icon: "scikitlearn",  cat: "ml",    funny: "Old reliable ML." },
  { name: "XGBoost",      icon: null, emoji: "🚀", cat: "ml",    funny: "Winning Kaggle tabular comps." },
  { name: "TensorFlow",   icon: "tensorflow",   cat: "ml",    funny: "Google's tensor playground." },
  { name: "Keras",        icon: "keras",        cat: "ml",    funny: "High-level ML chaos." },
  { name: "PyTorch",      icon: "pytorch",      cat: "ml",    funny: "Autograd gang 🔥" },
  { name: "Feature Eng",  icon: null, emoji: "🛠️", cat: "ml",    funny: "Finding the signal in noise." },
  { name: "Model Eval",   icon: null, emoji: "⚖️", cat: "ml",    funny: "F1, Recall, Precision, Accuracy." },
  { name: "Forecasting",  icon: null, emoji: "🔮", cat: "ml",    funny: "Predicting the future (mostly)." },

  // Web & App Technologies
  { name: "React",        icon: "react",        cat: "web",   funny: "useEffect(() => {}, [💀])" },
  { name: "Node.js",      icon: "nodejs",       cat: "web",   funny: "JS but make it backend." },
  { name: "Streamlit",    icon: null, emoji: "⚡", cat: "web",   funny: "Data apps in 20 lines." },
  { name: "FastAPI",      icon: "fastapi",      cat: "web",   funny: "Fast by name, fast by nature." },
  { name: "HTML/CSS",     icon: "html5",        cat: "web",   funny: "The OG markup." },

  // Developer Tools & Platforms
  { name: "Azure AI",     icon: "azure",        cat: "tools", funny: "Enterprise cloud intelligence." },
  { name: "Docker",       icon: "docker",       cat: "tools", funny: "Works on my machine ™" },
  { name: "PyTest",       icon: "pytest",       cat: "tools", funny: "Assert all the things." },
  { name: "Power BI",     icon: null, emoji: "📊", cat: "tools", funny: "Dashboards executives love." },
  { name: "MsFabric",     icon: null, emoji: "☁️", cat: "tools", funny: "All-in-one data analytics." },
  { name: "MsOffice",     icon: null, emoji: "💼", cat: "tools", funny: "Corporate survival toolkit." },
  { name: "Git",          icon: "git",          cat: "tools", funny: "git blame -L 1,∞ me.py" },
  { name: "GitHub",       icon: "github",       cat: "tools", funny: "Where code lives." },
  { name: "VS Code",      icon: "vscode",       cat: "tools", funny: "The ultimate editor." },
  { name: "Linux",        icon: "linux",        cat: "tools", funny: "rm -rf / (jk)" },
  { name: "Agile & Jira", icon: "jira",         cat: "tools", funny: "Moving tickets to done." },
  { name: "Scrum",        icon: null, emoji: "🏈", cat: "tools", funny: "Daily standup survivor." },
  { name: "CI/CD",        icon: null, emoji: "🔄", cat: "tools", funny: "Automate everything." },
  { name: "MLOps",        icon: null, emoji: "♾️", cat: "tools", funny: "Taking ML to production." },
  { name: "ETL Pipelines",icon: null, emoji: "🚰", cat: "tools", funny: "Plumbing for data." },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const cats = [
  { id: "all",    label: "All" },
  { id: "lang",   label: "Languages" },
  { id: "lib",    label: "Libraries" },
  { id: "ml",     label: "ML & DS" },
  { id: "web",    label: "Web & App" },
  { id: "tools",  label: "Tools" },
];

export default function SkillsSection() {
  const [activeCat, setActiveCat] = useState("all");
  const [tooltip, setTooltip] = useState<{ name: string; funny: string } | null>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  const visible = activeCat === "all" ? skills : skills.filter(s => s.cat === activeCat);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>(".skill-bar").forEach(bar => {
            bar.style.width = bar.dataset.w ?? "0%";
          });
        }
      });
    }, { threshold: 0.3 });
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-wrapper">
      <div className="blob" style={{ width: 500, height: 500, background: "var(--coral)", top: "50%", right: -150, opacity: 0.07 }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-tag">// 05 · tech stack</div>
          <h2 className="section-title">My <span className="accent">Skills</span></h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            Not just tools I know — languages I speak fluently. Hover for context.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: "0.6rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {cats.map(c => (
            <button suppressHydrationWarning key={c.id} onClick={() => setActiveCat(c.id)}
              style={{
                padding: "0.5rem 1.2rem", borderRadius: 100, border: "1px solid",
                borderColor: activeCat === c.id ? "var(--cyan)" : "rgba(255,255,255,0.09)",
                background: activeCat === c.id ? "rgba(0,229,255,0.08)" : "rgba(255,255,255,0.03)",
                color: activeCat === c.id ? "var(--cyan)" : "var(--muted)",
                fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", cursor: "pointer",
                transition: "all 0.2s",
              }}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div style={{
            position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
            background: "var(--navy2)", border: "1px solid var(--glass-border)", borderRadius: 12,
            padding: "0.6rem 1.2rem", fontFamily: "'Space Mono',monospace", fontSize: "0.78rem",
            color: "var(--cyan)", zIndex: 999, pointerEvents: "none", whiteSpace: "nowrap",
            boxShadow: "0 8px 32px rgba(0,229,255,0.15)",
          }}>
            <strong>{tooltip.name}</strong> — {tooltip.funny}
          </div>
        )}

        {/* Logo wall */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px,1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {visible.map(s => (
            <div
              key={s.name}
              onMouseEnter={() => setTooltip({ name: s.name, funny: s.funny })}
              onMouseLeave={() => setTooltip(null)}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "1.2rem 0.8rem",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem",
                cursor: "default", transition: "all 0.2s",
              }}
              onMouseOver={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(0,229,255,0.06)";
                el.style.borderColor = "rgba(0,229,255,0.25)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseOut={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              {s.icon ? (
                <img
                  src={`${DEVICON}/${s.icon}/${s.icon}-original.svg`}
                  alt={s.name}
                  width={40} height={40}
                  style={{ objectFit: "contain", filter: "brightness(0.9) saturate(1.1)" }}
                  onError={(e) => {
                    // Fallback to plain variant if original doesn't exist
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.includes("-original")) {
                      img.src = `${DEVICON}/${s.icon}/${s.icon}-plain.svg`;
                    } else {
                      img.style.display = "none";
                      const span = document.createElement("span");
                      span.textContent = "⚙️";
                      span.style.fontSize = "2rem";
                      img.parentNode?.insertBefore(span, img.nextSibling);
                    }
                  }}
                />
              ) : (
                <span style={{ fontSize: "2.2rem", lineHeight: 1 }}>{s.emoji}</span>
              )}
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", textAlign: "center", lineHeight: 1.3 }}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* ── The funny CV section ── */}
        <div style={{
          background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)",
          borderRadius: 20, padding: "2rem 2.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap",
        }}>
          <div>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.78rem", color: "var(--violet)", marginBottom: "0.6rem" }}>
              $ cat skills.json | wc -l
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--white)", fontWeight: 600, marginBottom: "0.4rem" }}>
              50+ skills. Survived <code style={{ color: "var(--coral)", fontSize: "0.95rem" }}>npm install</code>. Debugged at 2am. Still here. 🙃
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
              Zero broken builds in prod. Well... <em style={{ color: "var(--gold)" }}>mostly</em>. The CV has the receipts.
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1yHBzPns0yWwcu0hS95S3sLlMrOsTT1Pn/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{
              padding: "0.85rem 2rem", background: "linear-gradient(135deg,var(--cyan),var(--violet))",
              borderRadius: 100, color: "var(--navy)", fontWeight: 700, fontSize: "0.9rem",
              textDecoration: "none", flexShrink: 0, transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
          >
            Need proof? Here&apos;s my CV →
          </a>
        </div>
      </div>
    </section>
  );
}
