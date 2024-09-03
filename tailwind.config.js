/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "play-fair": ['"Play-Fair"'],
      },
      colors: {
        "costum-black": "#1F1F1F",
        "custom-white": "#FFF9F4",
      },
      backgroundImage: {
        loader:
          "radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)",
      },
    },
  },
  plugins: [],
};
