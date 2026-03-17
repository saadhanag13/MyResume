export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy:   "#080c1a",
        navy2:  "#0d1327",
        cyan:   "#00e5ff",
        violet: "#a855f7",
        coral:  "#ff6b6b",
        mint:   "#00ffc3",
        gold:   "#ffd166",
        muted:  "#8892b0",
      },
      fontFamily: {
        syne: ["'Syne'","sans-serif"],
        dm:   ["'DM Sans'","sans-serif"],
        mono: ["'Space Mono'","monospace"],
      },
    },
  },
  plugins: [],
};
