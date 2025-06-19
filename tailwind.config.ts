import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sporting: ["'Sporting Grotesque'", "sans-serif"],
        bwgradual: ["'Bw Gradual DEMO'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
