export default function Footer() {
  return (
    <footer className="footer-container" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", fontSize: "0.85rem", color: "var(--muted)" }}>
      <div>© {new Date().getFullYear()} <strong style={{ color: "var(--white)" }}>Saadhana</strong> Ganesa Narasimhan · Designed with ☕ & 🧠</div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem" }}>Built in Next.js</div>
    </footer>
  );
}
