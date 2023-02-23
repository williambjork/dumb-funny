/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: "Prompt, serif",
        inconsolata: "Inconsolata, serif",
        spacemono: "SpaceMono, serif",
        spacemonobold: "SpaceMonoBold, serif",
        syne: "Syne"
        
      },
    },
  },
  plugins: [],
}
