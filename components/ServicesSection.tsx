"use client";

const services = [
  { icon: "🧠", title: "AI Application Architecture",  desc: "Building production-grade AI applications, integrating LLMs and retrieval-augmented generation (RAG) pipelines for complex document telemetry and chat interfaces.", tag: "GenAI", glow: "var(--gold)", id: "01" },
  { icon: "🌦️", title: "Predictive Modeling",   desc: "Developing and serving time-series forecasting models using LSTM networks. Deploying robust inference pipelines via FastAPI and interactive dashboards.", tag: "ML Pipelines", glow: "var(--cyan)", id: "02" },
  { icon: "💬", title: "Natural Language Processing",  desc: "Fine-tuning transformer models (BERT/LLaMA) for automated text classification, sentiment analysis, and cognitive services at scale.", tag: "NLP Eng", glow: "var(--coral)", id: "03" },
  { icon: "🖼️", title: "Computer Vision",     desc: "Architecting custom Convolutional Neural Networks and YOLO-based object detection systems. Deploying via serverless cloud functions for real-time analysis.", tag: "CV Eng", glow: "var(--mint)", id: "04" },
  { icon: "📐", title: "Multivariate Statistics",        desc: "Executing rigorous academic research on dimensionality reduction algorithms (PCA, t-SNE, UMAP) to extract signal from high-dimensional datasets.", tag: "Research", glow: "var(--violet)", id: "05" },
  { icon: "☁️", title: "Cloud Infrastructure",  desc: "Provisioning scalable backend infrastructure using Azure ARM templates, Docker containerization, and automated CI/CD deployment pipelines.", tag: "Cloud/DevOps", glow: "var(--cyan)", id: "06" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-wrapper" style={{ background: "var(--navy2)" }}>
      <div className="blob" style={{ width: 600, height: 600, background: "var(--cyan)", top: "-10%", left: "-10%", opacity: 0.05 }} />
      <div className="blob" style={{ width: 600, height: 600, background: "var(--violet)", bottom: "-10%", right: "-10%", opacity: 0.05 }} />
      <div className="grid-bg" />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">// 04 · what I do</div>
          <h2 className="section-title">My <span className="accent">Services</span></h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>Delivering tailored solutions that blend innovation with impact.</p>
        </div>

        <div className="responsive-grid-3">
          <style>{`
            .service-card {
              position: relative;
              background: rgba(10, 14, 26, 0.6);
              border: 1px solid rgba(255, 255, 255, 0.05);
              border-radius: 20px;
              padding: 2.5rem 2rem;
              overflow: hidden;
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              backdrop-filter: blur(10px);
              display: flex;
              flex-direction: column;
              height: 100%;
              z-index: 1;
            }
            .service-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 20px;
              padding: 2px;
              background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0.5;
              transition: opacity 0.4s ease;
              pointer-events: none;
            }
            .service-card:hover {
              transform: translateY(-8px);
              background: rgba(15, 20, 35, 0.8);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            }
            .service-card .glow-bg {
              position: absolute;
              width: 150px; height: 150px;
              border-radius: 50%;
              filter: blur(60px);
              top: -50px; right: -50px;
              opacity: 0;
              transition: opacity 0.5s ease;
              z-index: -1;
              pointer-events: none;
            }
            .service-card:hover .glow-bg {
              opacity: 0.15;
            }
            .service-card:hover::before {
              opacity: 1;
            }
            .service-card .icon-wrapper {
              width: 60px; height: 60px;
              border-radius: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8rem;
              margin-bottom: 2rem;
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.08);
              transition: all 0.3s ease;
              position: relative;
            }
            .service-card:hover .icon-wrapper {
              transform: scale(1.1) rotate(5deg);
              box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            .service-card .node-id {
              position: absolute;
              top: 2rem; right: 2rem;
              font-family: 'Space Mono', monospace;
              font-size: 0.75rem;
              color: rgba(255,255,255,0.2);
              font-weight: 700;
              transition: color 0.3s ease;
            }
            .service-card:hover .node-id {
              color: var(--white);
            }
            .service-tag {
              display: inline-block; 
              font-family: 'Space Mono', monospace; 
              font-size: 0.7rem; 
              padding: 0.4rem 0.8rem; 
              border-radius: 6px; 
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.1); 
              color: var(--muted);
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
            .execute-anim {
              opacity: 0;
              transition: opacity 0.3s ease;
              display: flex;
              align-items: center;
              gap: 0.4rem;
              font-family: 'Space Mono', monospace;
              font-size: 0.7rem;
            }
            .service-card:hover .execute-anim {
              opacity: 1;
            }
          `}</style>

          {services.map(s => (
            <div key={s.title} className="service-card"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${s.glow}33`;
                const icon = el.querySelector('.icon-wrapper') as HTMLElement;
                icon.style.background = `${s.glow}15`;
                icon.style.borderColor = `${s.glow}44`;
                const nodeId = el.querySelector('.node-id') as HTMLElement;
                nodeId.style.color = s.glow;
                
                const tag = el.querySelector('.service-tag') as HTMLElement;
                tag.style.background = `${s.glow}15`;
                tag.style.borderColor = `${s.glow}44`;
                tag.style.color = s.glow;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255, 255, 255, 0.05)";
                const icon = el.querySelector('.icon-wrapper') as HTMLElement;
                icon.style.background = "rgba(255, 255, 255, 0.03)";
                icon.style.borderColor = "rgba(255, 255, 255, 0.08)";
                const nodeId = el.querySelector('.node-id') as HTMLElement;
                nodeId.style.color = "rgba(255,255,255,0.2)";
                
                const tag = el.querySelector('.service-tag') as HTMLElement;
                tag.style.background = "rgba(255,255,255,0.03)";
                tag.style.borderColor = "rgba(255,255,255,0.1)";
                tag.style.color = "var(--muted)";
              }}
            >
              <div className="glow-bg" style={{ background: s.glow }}></div>
              <div className="node-id">SYS.{s.id}</div>
              
              <div className="icon-wrapper">
                {s.icon}
              </div>
              
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--white)" }}>
                {s.title}
              </h3>
              
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, flex: 1, marginBottom: "2rem" }}>
                {s.desc}
              </p>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                <span className="service-tag">
                  {s.tag}
                </span>

                <div className="execute-anim" style={{ color: s.glow }}>
                   <span style={{ width: 4, height: 4, borderRadius: "50%", background: s.glow, animation: "pulse 1s infinite" }}></span> READY
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
