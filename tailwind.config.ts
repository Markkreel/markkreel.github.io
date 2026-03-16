import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#930507',
        'accent-light': '#B81012',
      },
      fontFamily: {
        'swiss': ['Geist', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-tight': '-0.05em',
        'tighter': '-0.025em',
      }
    },
  },
  plugins: [],
};
export default config;