import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saadhana GN · AI/ML Engineer & Data Scientist",
  description: "Freelance AI/ML Engineer, Data Scientist & Full-Stack Developer. MSc Data Science, University of Leeds.",
  icons: {
    icon: "/img/Professional Initial Logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body style={{ background: "#080c1a", color: "#f0f4ff" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
