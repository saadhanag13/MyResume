"use client";
const words = "HIRE ME · NO API KEY REQUIRED · OPEN TO COLLABORATE · SHIP FAST · ";

export default function BannerSection() {
  const repeated = words.repeat(8);
  return (
    <section className="section-wrapper" style={{ background: "var(--navy2)", textAlign: "center" }}>
      <div className="blob" style={{ width: 600, height: 600, background: "var(--violet)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.08 }} />

      {/* Marquee */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0.6rem 0", background: "rgba(168,85,247,0.05)" }}>
        <div style={{ display: "inline-flex", animation: "ticker 20s linear infinite", whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: "var(--violet)", letterSpacing: "0.1em" }}>{repeated}</span>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: "var(--violet)", letterSpacing: "0.1em" }}>{repeated}</span>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 2, paddingTop: "2rem" }}>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.5rem)", marginBottom: "1rem", lineHeight: 1.2 }}>
          Let&apos;s open a{" "}
          <em style={{ fontStyle: "italic", background: "linear-gradient(135deg,var(--cyan),var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            new connection
          </em>{" "}
          —<br />no API key required.
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>Ready to bring your next project to life? Let&apos;s talk.</p>
        <style>{`
          .btn-cyber-action {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1.25rem 2.5rem;
            background: transparent;
            color: var(--white);
            font-family: 'Space Mono', monospace;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 0.1em;
            text-decoration: none;
            overflow: hidden;
            border: 1px solid rgba(0, 229, 255, 0.3);
            transition: all 0.3s ease;
            z-index: 1;
          }
          
          .btn-cyber-action::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(90deg, var(--cyan), var(--violet));
            opacity: 0.05;
            z-index: -1;
            transition: opacity 0.3s ease;
          }

          .btn-cyber-action .top-left-decor {
            position: absolute;
            top: -1px; left: -1px;
            width: 12px; height: 12px;
            border-top: 2px solid var(--cyan);
            border-left: 2px solid var(--cyan);
            transition: all 0.3s ease;
          }

          .btn-cyber-action .bottom-right-decor {
            position: absolute;
            bottom: -1px; right: -1px;
            width: 12px; height: 12px;
            border-bottom: 2px solid var(--violet);
            border-right: 2px solid var(--violet);
            transition: all 0.3s ease;
          }

          .btn-cyber-action:hover {
            color: #fff;
            border-color: rgba(0, 229, 255, 0.6);
            box-shadow: 0 0 30px rgba(0, 229, 255, 0.15), inset 0 0 20px rgba(168, 85, 247, 0.1);
            transform: translateY(-3px);
          }

          .btn-cyber-action:hover::before {
            opacity: 0.15;
          }

          .btn-cyber-action:hover .top-left-decor {
            width: 100%; height: 100%;
            border-width: 1px;
            opacity: 0.3;
          }
          
          .btn-cyber-action:hover .bottom-right-decor {
            width: 100%; height: 100%;
            border-width: 1px;
            opacity: 0.3;
          }

          .btn-cyber-action .btn-text-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            position: relative;
            z-index: 2;
          }

          .btn-cyber-action .blinking-cursor {
            display: inline-block;
            width: 8px; height: 16px;
            background: var(--cyan);
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
        <a href="#contact" className="btn-cyber-action">
          <div className="top-left-decor"></div>
          <div className="bottom-right-decor"></div>
          <div className="btn-text-content">
            <span style={{ color: "var(--cyan)" }}>{`>_`}</span>
            <span>ESTABLISH_CONNECTION</span>
            <span className="blinking-cursor"></span>
          </div>
        </a>
      </div>
    </section>
  );
}
