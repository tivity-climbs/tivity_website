/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: '#0D0C0F',         // Text: 0D0C0F
        background: '#F7F6FA',   // Background: F7F6FA
        primary: '#a66fd5',      // Primary: 7347C9
        secondary: '#EAE1FA',    // Secondary: EAE1FA
        accent: '#7C3BFD',       // Accent: 7C3BFD
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        bold: 700,
      },
    },
  },
  plugins: [],
};
