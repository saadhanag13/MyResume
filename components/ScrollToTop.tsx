"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 999,
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            background: "rgba(8,12,26,0.8)",
            border: "1px solid var(--cyan)",
            color: "var(--cyan)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 229, 255, 0.2)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            animation: "fadeUp 0.3s ease forwards"
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.background = "var(--cyan)";
            el.style.color = "var(--navy)";
            el.style.transform = "translateY(-3px)";
            el.style.boxShadow = "0 8px 20px rgba(0, 229, 255, 0.4)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.background = "rgba(8,12,26,0.8)";
            el.style.color = "var(--cyan)";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 4px 12px rgba(0, 229, 255, 0.2)";
          }}
        >
          <svg 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
