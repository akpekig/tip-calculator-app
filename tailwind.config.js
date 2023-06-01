/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        secondary: "hsl(169, 62%, 76%)",
        neutral: {
          100: "hsl(189, 41%, 97%)",
          200: "hsl(185, 41%, 84%)",
          300: "hsl(184, 19%, 68%)",
          400: "hsl(184, 14%, 56%)",
          500: "hsl(186, 14%, 43%)",
          600: "hsl(183, 100%, 15%)",
        },
        error: "	hsl(11, 75%, 61%)",
      },
    },
    fontFamily: {
      body: '"Space Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
