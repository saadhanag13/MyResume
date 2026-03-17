"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    // We use Web3Forms to send emails directly to your inbox without a backend server.
    // 1. Go to https://web3forms.com/
    // 2. Enter your email (saadhana.ganesh13@gmail.com) and click "Create Access Key"
    // 3. Check your email for the key and replace "YOUR_ACCESS_KEY_HERE" below.
    const accessKey = "52ca29be-983c-49ca-9172-f09046795b01"; 

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("SUCCESS");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  const contacts = [
    { icon: "📍", label: "Location",  val: "Chennai, India", desc: "Remote Worldwide Available" },
    { icon: "💼", label: "LinkedIn",  val: "/in/saadhana-ganesh", href: "https://www.linkedin.com/in/saadhana-ganesh-45a50a18b/" },
    { icon: "🌐", label: "GitHub",    val: "saadhanag13", href: "https://github.com/saadhanag13" },
    { icon: "📧", label: "Direct",     val: "saadhana.ganesh13@gmail.com", href: "mailto:saadhana.ganesh13@gmail.com" },
  ];

  return (
    <section id="contact" className="section-wrapper" style={{ background: "var(--navy)" }}>
      <div className="blob" style={{ width: 600, height: 600, background: "var(--violet)", bottom: "-20%", right: "-10%", opacity: 0.05 }} />
      <div className="blob" style={{ width: 400, height: 400, background: "var(--cyan)", top: "10%", left: "-10%", opacity: 0.05 }} />
      <div className="grid-bg" />

      <div className="contact-grid" style={{ position: "relative", zIndex: 2 }}>
        {/* Left info */}
        <div>
          <div className="section-tag">// 07 · establish connection</div>
          <h2 className="section-title">Comm <span className="accent">Link</span></h2>
          
          <div style={{ background: "rgba(10, 14, 26, 0.6)", border: "1px solid rgba(0, 229, 255, 0.2)", borderRadius: 12, padding: "1rem 1.5rem", marginBottom: "3rem", backdropFilter: "blur(10px)", display: "inline-block" }}>
            <code style={{ fontSize: "0.85rem", color: "var(--cyan)", fontFamily: "'Space Mono',monospace", display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cyan)", animation: "pulse 2s infinite" }}></span>
              SYS.AWAITING_INPUT
            </code>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <style>{`
              .contact-node {
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                gap: 1.25rem;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                text-decoration: none;
                position: relative;
                overflow: hidden;
              }
              .contact-node:hover {
                background: rgba(168, 85, 247, 0.05);
                border-color: rgba(168, 85, 247, 0.3);
                transform: translateX(10px);
              }
              .contact-node::before {
                content: '';
                position: absolute;
                left: 0; top: 0; bottom: 0;
                width: 3px;
                background: var(--violet);
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              .contact-node:hover::before {
                opacity: 1;
              }
              .contact-node .icon-box {
                width: 45px; height: 45px;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                transition: transform 0.3s ease;
              }
              .contact-node:hover .icon-box {
                transform: rotate(-10deg) scale(1.1);
                background: rgba(168, 85, 247, 0.1);
              }
            `}</style>

            {contacts.map(c => {
              const Content = () => (
                <>
                  <div className="icon-box">{c.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{c.label}</div>
                    <div style={{ color: "var(--white)", fontSize: "0.95rem", fontWeight: 600, fontFamily: "'Syne', sans-serif" }}>{c.val}</div>
                    {c.desc && <div style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{c.desc}</div>}
                  </div>
                </>
              );

              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-node">
                  <Content />
                </a>
              ) : (
                <div key={c.label} className="contact-node">
                  <Content />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right form */}
        <div style={{ background: "rgba(10, 14, 26, 0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "3rem", backdropFilter: "blur(20px)", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--cyan), var(--violet))", borderTopLeftRadius: 24, borderTopRightRadius: 24 }}></div>
          
          <form onSubmit={handleSubmit}>
            <style>{`
              .cyber-input {
                width: 100%;
                padding: 1rem 1.25rem;
                background: rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                color: var(--white);
                font-family: 'DM Sans', sans-serif;
                font-size: 0.95rem;
                outline: none;
                margin-bottom: 1.5rem;
                transition: all 0.3s ease;
              }
              .cyber-input:focus {
                border-color: var(--cyan);
                background: rgba(0, 229, 255, 0.03);
                box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
              }
              .cyber-input::placeholder {
                color: rgba(255, 255, 255, 0.2);
              }
              .cyber-label {
                font-size: 0.75rem;
                font-family: 'Space Mono', monospace;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: var(--muted);
                display: block;
                margin-bottom: 0.5rem;
              }
              .btn-submit {
                width: 100%;
                padding: 1.25rem;
                background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(168, 85, 247, 0.1));
                border: 1px solid rgba(0, 229, 255, 0.3);
                color: var(--white);
                font-family: 'Space Mono', monospace;
                font-weight: 700;
                font-size: 0.95rem;
                letter-spacing: 0.1em;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.75rem;
                position: relative;
                overflow: hidden;
              }
              .btn-submit:hover:not(:disabled) {
                background: linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(168, 85, 247, 0.2));
                border-color: var(--cyan);
                box-shadow: 0 0 30px rgba(0, 229, 255, 0.15);
                transform: translateY(-2px);
              }
              .btn-submit:disabled {
                opacity: 0.6;
                cursor: not-allowed;
              }
            `}</style>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ gridColumn: "1 / -1" }}>
                 <label className="cyber-label">Operator_Name</label>
                 <input suppressHydrationWarning required name="name" placeholder="Ada Lovelace" value={form.name} onChange={handleChange} className="cyber-input" />
              </div>
            </div>
            
            <label className="cyber-label">Network_Address (Email)</label>
            <input suppressHydrationWarning required name="email" type="email" placeholder="ada@protocol.com" value={form.email} onChange={handleChange} className="cyber-input" />
            
            <label className="cyber-label">Transmission_Subject</label>
            <input suppressHydrationWarning required name="subject" placeholder="Project Initiation" value={form.subject} onChange={handleChange} className="cyber-input" />
            
            <label className="cyber-label">Encrypted_Payload (Message)</label>
            <textarea suppressHydrationWarning required name="message" rows={5} placeholder="Initiating sequence..." value={form.message} onChange={handleChange} className="cyber-input" style={{ resize: "vertical" }} />
            
            <button suppressHydrationWarning type="submit" className="btn-submit" disabled={status === "SUBMITTING" || status === "SUCCESS"}>
              {status === "IDLE" && <>TRANSMIT_DATA <span style={{ color: "var(--cyan)" }}>&gt;_</span></>}
              {status === "SUBMITTING" && <>UPLOADING PAYLOAD <span style={{ width: 12, height: 12, border: "2px solid var(--cyan)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }}></span></>}
              {status === "SUCCESS" && <span style={{ color: "var(--mint)" }}>TRANSMISSION_SUCCESSFUL ✓</span>}
              {status === "ERROR" && <span style={{ color: "var(--coral)" }}>ERROR_RETRY_CONNECTION ✕</span>}
            </button>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          </form>

          {status === "SUCCESS" ? (
             <p style={{ fontSize: "0.8rem", color: "var(--mint)", marginTop: "1.5rem", textAlign: "center", fontFamily: "'Space Mono', monospace" }}>
               Data packet delivered to primary inbox.
             </p>
          ) : (
            <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "1.5rem", textAlign: "center", fontFamily: "'Space Mono', monospace", display: "flex", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
              <span style={{ color: "var(--violet)" }}>&#128274;</span> End-to-end SMTP routing enabled
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
